import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapComponent = () => {

  const containerStyle = {
    position: 'fixed',       
    bottom: '94px',          
    left: '20px',            
    zIndex: 1000,            
    width: '960px',          
    height: '438px',         
    backgroundColor: 'white', 
    border: '1px solid #ccc', 
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
    borderRadius: '10px',    
    overflow: 'hidden',      
  };

  // Map center coordinates
  const center = {
    lat: 22.65005556,
    lng: 88.5223056,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAa9UG610mookChKmlb0Tk3UlHks6V0ZJI">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        options={{
          mapId: "DEMO_MAP_ID", // Optional: Replace with your custom map ID if available
          mapTypeId: "satellite",
        }}
      >
        <Marker position={center} title="My location" />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
