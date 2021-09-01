import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export const useGeoLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.log('Permission to access location was denied');
    return;
  } else {
    let loc = await Location.getCurrentPositionAsync({});
    return loc;
  }
};
