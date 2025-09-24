import React from 'react';

const MapContainer = () => {
  return (
    <div className="flex-1 h-full bg-map-bg">
      <div 
        id="map" 
        className="w-full h-full bg-muted rounded-lg shadow-soft border border-border flex items-center justify-center"
      >
        <div className="text-center text-muted-foreground">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-primary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">Área del Mapa</h3>
          <p className="text-sm">Contenedor listo para integración con Leaflet o Mapbox</p>
        </div>
      </div>
    </div>
  );
};

export default MapContainer;