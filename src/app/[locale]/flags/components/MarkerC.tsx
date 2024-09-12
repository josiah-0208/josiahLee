import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

type PopupImg = {};

type MarkerCProps = {
  iconUrl: string;
  iconRetinaUrl: string;
  iconSize: [number, number];
  position: [number, number];
  eventHandlers: () => void;
  popupText: string;
  popupImg: PopupImg;
};

function MarkerC({
  iconUrl,
  iconRetinaUrl,
  iconSize,
  position,
  eventHandlers,
  popupText,
  popupImg,
}: MarkerCProps) {
  const iconObj = L.icon({
    iconUrl: iconUrl,
  });
  return (
    <Marker
      icon={L.icon({
        iconUrl: makericon.src,
        iconRetinaUrl: makericon.src,
        iconSize: [32, 16],
      })}
      position={[33.589, 130.396]}
      eventHandlers={{
        mouseover: () => {},
      }}
    >
      <Popup></Popup>
    </Marker>
  );
}

export default MarkerC;
