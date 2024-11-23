import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherData from './WeatherData';

const FarmerDashboard = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  // Set default location to Kolkata, West Bengal
  const location = "Kolkata, West Bengal"; 

  // API key and base URL
  // const API_KEY = "5218587472524607b70164455242011";
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const BASE_URL = "https://api.weatherapi.com/v1/current.json";
  // Fetch weather data
  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          key: API_KEY,
          q: location, // Use Kolkata as the location
        },
      });
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Trigger fetchWeather when the component mounts
  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="dashboard">
      {loading ? (
        <p>Loading weather data...</p>
      ) : weather ? (
        <WeatherData weather={weather} />
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
};

export default FarmerDashboard;
