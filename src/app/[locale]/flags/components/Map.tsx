'use client';
import React, { useState } from 'react';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import makericon from '../../../../../node_modules/leaflet/dist/images/flag_japan.png';
import makericon2 from '../../../../../node_modules/leaflet/dist/images/flag_vietnam.png';
import makericon3 from '../../../../../node_modules/leaflet/dist/images/flag_india.png';
import Image from 'next/image';

type Props = {};

function Map({}: Props) {
  return (
    <div className="w-96 h-96">
      <MapContainer
        center={[38.075, 109.567]}
        zoom={2}
        style={{ height: '300px', width: '300px', borderRadius: '8px' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution=""
        />
        <Marker
          icon={L.icon({
            iconUrl: makericon.src,
            iconRetinaUrl: makericon.src,
            iconSize: [32, 16],
          })}
          position={[34.688, 135.50281]}
          eventHandlers={{
            mouseover: () => {},
          }}
        >
          <Popup>
            <div>
              <p>hi</p>
              <Image src={makericon} alt="h" />
            </div>
          </Popup>
        </Marker>
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
        <Marker
          icon={L.icon({
            iconUrl: makericon2.src,
            iconRetinaUrl: makericon2.src,
            iconSize: [20, 20],
          })}
          position={[10.932, 108.29]}
          eventHandlers={{
            mouseover: () => {},
          }}
        >
          <Popup></Popup>
        </Marker>
        <Marker
          icon={L.icon({
            iconUrl: makericon2.src,
            iconRetinaUrl: makericon2.src,
            iconSize: [20, 20],
          })}
          position={[10.791, 106.686]}
          eventHandlers={{
            mouseover: () => {},
          }}
        >
          <Popup></Popup>
        </Marker>
        <Marker
          icon={L.icon({
            iconUrl: makericon3.src,
            iconRetinaUrl: makericon3.src,
            iconSize: [20, 16],
          })}
          position={[34.113, 74.884]}
          eventHandlers={{
            mouseover: () => {},
          }}
        >
          <Popup></Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
