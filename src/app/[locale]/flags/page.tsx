import React from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
const DynamicMap = dynamic(() => import('./components/Map'), { ssr: false });

type Props = {};

function page({}: Props) {
  return (
    <div>
      <span>🌏</span>
      <div>
        <DynamicMap />
      </div>
    </div>
  );
}

export default page;
