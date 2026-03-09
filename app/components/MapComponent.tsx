'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Create custom red icon
const createRedIcon = () => {
  return L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};

// Map controller component
const MapController: React.FC<{ center: [number, number]; zoom: number }> = ({ center, zoom }) => {
  const [map, setMap] = useState<any>(null);
  
  useEffect(() => {
    // Import useMap dynamically only when component mounts
    import('react-leaflet').then((mod) => {
      const useMapHook = mod.useMap;
      const mapInstance = useMapHook();
      setMap(mapInstance);
    });
  }, []);
  
  useEffect(() => {
    if (map && map.setView) {
      const timer = setTimeout(() => {
        if (map.setView) {
          map.setView(center, zoom);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [center, zoom, map]);
  
  return null;
};

interface MapComponentProps {
  center: [number, number];
  zoom: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ center, zoom }) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex items-center justify-center h-full w-full bg-gray-100">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      style={{ height: '100%', width: '100%' }}
    >
      <MapController center={center} zoom={zoom} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        className="grayscale brightness-110 contrast-90"
      />
      <Marker position={[18.5204, 73.8567]}>
        <Popup>
          <div className="text-center">
            <h3 className="font-bold text-lg">Pune, India</h3>
            <p className="text-sm">Our projects are located here</p>
          </div>
        </Popup>
      </Marker>
      <Marker position={[18.5679, 73.7772]} icon={createRedIcon()}>
        <Popup>
          <div className="text-center">
            <h3 className="font-bold text-lg">37 GRANDSTAND</h3>
            <p className="text-sm">Baner, Pune</p>
          </div>
        </Popup>
      </Marker>
      <Marker position={[18.4831, 73.8567]} icon={createRedIcon()}>
        <Popup>
          <div className="text-center">
            <h3 className="font-bold text-lg">Grazia</h3>
            <p className="text-sm">Kothrud, Pune</p>
          </div>
        </Popup>
      </Marker>
      <Marker position={[18.6293, 73.8567]} icon={createRedIcon()}>
        <Popup>
          <div className="text-center">
            <h3 className="font-bold text-lg">64 Meridien</h3>
            <p className="text-sm">Ravet, Pune</p>
          </div>
        </Popup>
      </Marker>
      <Marker position={[18.5204, 73.8567]} icon={createRedIcon()}>
        <Popup>
          <div className="text-center">
            <h3 className="font-bold text-lg">Codename HotSpot</h3>
            <p className="text-sm">Baner, Pune</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
