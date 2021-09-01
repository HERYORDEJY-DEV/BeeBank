import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import * as RN from 'react-native';

export function HomeHeaderBg(props) {
  const width = RN.useWindowDimensions().width;
  const xml = `<svg width=${width} height="333" viewBox="0 0 ${width} 333" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M0 0H375V272H0V0Z" fill="url(#paint0_radial)"/>
</g>
<g opacity="0.15">
<path fill-rule="evenodd" clip-rule="evenodd" d="M211.472 278.925C194.681 298.055 164.348 306.25 125.539 306.25H12.8801C4.94991 306.25 -1.8026 300.48 -3.03939 292.647L-49.9489 -4.79413C-50.8755 -10.6637 -46.3382 -15.9685 -40.3979 -15.9685H29.1504L24.3509 -46.4055C23.5424 -51.5404 27.5075 -56.1845 32.7057 -56.1845H91.3259C98.2668 -56.1845 104.174 -51.1344 105.256 -44.2828L105.831 -41.3037L116.874 28.7179L117.587 32.5867C118.668 39.4419 124.575 44.4883 131.512 44.4883H140.281C197.073 44.4883 241.543 67.5606 254.534 134.282C259.965 162.161 257.159 185.432 242.802 201.793C238.456 206.74 233.055 210.834 226.753 214.171C231.176 242.364 226.723 261.549 211.472 278.925Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M226.753 214.163C231.176 242.358 226.723 261.545 211.472 278.922C194.681 298.054 164.348 306.25 125.539 306.25H12.8802C4.94992 306.25 -1.8026 300.48 -3.03939 292.645L-49.9489 -4.8234C-50.8755 -10.6935 -46.3382 -15.9988 -40.3979 -15.9988H29.1504L46.6206 94.7808L46.0779 91.3067C47.3146 99.1409 54.0118 104.915 61.942 104.915H94.9994C159.918 104.915 210.748 131.29 225.601 207.565C226.04 209.821 226.417 212.01 226.753 214.163Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M65.3866 213.786C66.1323 218.501 69.156 222.359 73.2282 224.312C75.0815 225.198 77.149 225.692 79.3162 225.692H167.623C178.086 225.692 187.84 225.006 196.756 223.57C199.307 223.16 201.784 222.687 204.195 222.152C206.602 221.62 208.943 221.022 211.206 220.358C212.34 220.029 213.451 219.682 214.547 219.316C218.926 217.866 223.002 216.149 226.753 214.163C231.176 242.358 226.723 261.545 211.472 278.922C194.681 298.054 164.348 306.25 125.539 306.25H12.8802C4.94992 306.25 -1.8026 300.48 -3.03939 292.645L-49.9489 -4.8234C-50.8755 -10.6935 -46.3382 -15.9988 -40.3979 -15.9988H29.1504L65.3866 213.786Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d" x="-20" y="-4" width="415" height="312" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feMorphology radius="16" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
<feOffset dy="16"/>
<feGaussianBlur stdDeviation="18"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.27451 0 0 0 0 0.627451 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-83.5 -74.4762) rotate(33.3373) scale(548.806 680.547)">
<stop stop-color="#0070BA"/>
<stop offset="1" stop-color="#1546A0"/>
</radialGradient>
</defs>
</svg>

`;
  return <SvgXml {...props} xml={xml} />;
}
