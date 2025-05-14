import React, { useState } from 'react';
import './LocationPopup.css';
import { toast } from 'react-toastify';

const allowedCities = ['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Pune'];

const LocationPopup = ({ onClose }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [mapUrl, setMapUrl] = useState('');

  const handleSetLocation = () => {
    if (!selectedCity) {
      toast.error("📍 Please select a city or detect location");
      return;
    }

    if (!allowedCities.includes(selectedCity)) {
      toast.error("🚫 Service is not available in this city");
      return;
    }

    localStorage.setItem('userLocation', selectedCity);
    toast.success(`📦 Location set to: ${selectedCity}`);
    onClose();
  };

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      toast.error("🌍 Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setMapUrl(`https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`);

        try {
          // Reverse geocoding using OpenStreetMap Nominatim API (Free)
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await response.json();
          const city = data.address.city || data.address.town || data.address.village;

          if (city) {
            const matched = allowedCities.find((c) => c.toLowerCase() === city.toLowerCase());
            if (matched) {
              setSelectedCity(matched);
              toast.success(`📍 Detected location: ${matched}`);
            } else {
              toast.error("🚫 We currently don't deliver to your location");
            }
          } else {
            toast.error("⚠️ Unable to detect city");
          }
        } catch (error) {
          toast.error("❌ Error while detecting location");
        }
      },
      () => {
        toast.error("⚠️ Permission denied or location unavailable");
      }
    );
  };

  return (
    <div className="popup-overlay">
      <div className="location-popup-box">
        <button className="close-btn" onClick={onClose}>×</button>
        <img
          src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.70.0/images/header/primary-logo.svg"
          alt="Zepto Logo"
          className="zepto-logo"
        />
        <h2 className="popup-heading">Where do you want delivery?</h2>

        <select
          className="city-dropdown"
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
            setMapUrl(`https://maps.google.com/maps?q=${e.target.value}&z=13&output=embed`);
          }}
        >
          <option value="">Select your city</option>
          {allowedCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <button className="detect-btn" onClick={handleDetectLocation}>
          📡 Detect My Location
        </button>

        {mapUrl && (
          <div className="map-preview">
            <iframe
              src={mapUrl}
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Map Preview"
            ></iframe>
          </div>
        )}

        <button className="location-btn" onClick={handleSetLocation}>
          Set Delivery Location
        </button>

        <p className="location-note">
          Currently delivering to Mumbai, Delhi, Bengaluru, Hyderabad, Pune.
        </p>
      </div>
    </div>
  );
};

export default LocationPopup;
