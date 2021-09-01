import * as React from 'react';
import * as RN from 'react-native';

import * as appConfig from '../../app.json';

import Geolocation from 'react-native-geolocation-service';
import VIForegroundService from '@voximplant/react-native-foreground-service';

const abortController = new AbortController();

export function getLocationInfo() {
  const [latLon, setLatLon] = React.useState(null);
  const [forceLocation, setForceLocation] = React.useState(true);
  const [highAccuracy, setHighAccuracy] = React.useState(true);
  const [locationDialog, setLocationDialog] = React.useState(true);
  const [significantChanges, setSignificantChanges] = React.useState(false);
  const [observing, setObserving] = React.useState(false);
  const [foregroundService, setForegroundService] = React.useState(false);
  const [location, setLocation] = React.useState(null);

  const watchId = React.useRef(null);

  const hasPermissionIOS = async () => {
    const openSetting = () => {
      RN.Linking.openSettings().catch(() => {
        RN.Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      RN.Alert.alert('Location permission denied');
    }

    if (status === 'disabled') {
      RN.Alert.alert(
        `Turn on Location Services to allow "${appConfig.displayName}" to determine your location.`,
        '',
        [
          { text: 'Go to Settings', onPress: openSetting },
          { text: "Don't Use Location", onPress: () => {} },
        ],
      );
    }

    return false;
  };

  const hasLocationPermission = async () => {
    if (RN.Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }

    if (RN.Platform.OS === 'android' && RN.Platform.Version < 23) {
      return true;
    }

    const hasPermission = await RN.PermissionsAndroid.check(
      RN.PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await RN.PermissionsAndroid.request(
      RN.PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === RN.PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === RN.PermissionsAndroid.RESULTS.DENIED) {
      RN.ToastAndroid.show(
        'Location permission denied by user.',
        RN.ToastAndroid.LONG,
      );
    } else if (status === RN.PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      RN.ToastAndroid.show(
        'Location permission revoked by user.',
        RN.ToastAndroid.LONG,
      );
    }

    return false;
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
        console.log(position);
      },
      (error) => {
        RN.Alert.alert(`Code ${error.code}`, error.message);
        setLocation(null);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: highAccuracy,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: forceLocation,
        showLocationDialog: locationDialog,
      },
    );
  };

  const getLocationUpdates = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    if (RN.Platform.OS === 'android' && foregroundService) {
      await startForegroundService();
    }

    setObserving(true);

    watchId.current = Geolocation.watchPosition(
      (position) => {
        setLocation(position);
        console.log(position);
      },
      (error) => {
        setLocation(null);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: highAccuracy,
        distanceFilter: 0,
        interval: 5000,
        fastestInterval: 2000,
        forceRequestLocation: forceLocation,
        showLocationDialog: locationDialog,
        useSignificantChanges: significantChanges,
      },
    );
  };

  const startForegroundService = async () => {
    if (RN.Platform.Version >= 26) {
      await VIForegroundService.createNotificationChannel({
        id: 'locationChannel',
        name: 'Location Tracking Channel',
        description: 'Tracks location of user',
        enableVibration: false,
      });
    }

    return VIForegroundService.startService({
      channelId: 'locationChannel',
      id: 420,
      title: appConfig.displayName,
      text: 'Tracking location updates',
      icon: 'ic_launcher',
    });
  };

  const stopForegroundService = React.useCallback(() => {
    VIForegroundService.stopService().catch((err) => err);
  }, []);

  const removeLocationUpdates = React.useCallback(() => {
    if (watchId.current !== null) {
      stopForegroundService();
      Geolocation.clearWatch(watchId.current);
      watchId.current = null;
      setObserving(false);
    }
  }, [stopForegroundService]);

  // React.useEffect(() => {
  //   return () => {
  //     removeLocationUpdates();
  //   };
  // }, [removeLocationUpdates]);

  React.useEffect(() => {
    setLocationDialog(true);
    setForceLocation(true);
    setForegroundService;
    getLocation();
    getLocationUpdates();

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return location;
}
