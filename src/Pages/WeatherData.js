import React from 'react';
import '../Styles/weatherdata.css'
const WeatherData = ({ weather }) => {
  return (
    <>
      {/* <img src={weather.current.condition.icon} alt="weather icon" /> */}
      <div className="weather">
      <div className="weatherlocation" style={{padding: '5px  0px'}}>
      <h2 >Weather in {weather.location.name}, {weather.location.region}</h2>
      </div>
      <div className="weather-info">
        <div className="conditions box" style={{background: '#95ffff'}} >
          <p id = 'weathercondition'>Condition:</p>
          <p id = 'weathercondition' style={{fontWeight: '600'}}>{weather.current.condition.text}</p>
        </div>
        <div className="temperature box" style={{background: '#fdb89d'}}>
          <p className='weatherbox'>Temperature: </p>
          <p id = 'weathercondition' style={{fontWeight: '600'}}>{weather.current.temp_c}°C</p>
        </div>
        <div className="humidity box" style={{background: 'rgb(190, 255, 176)'}}>
          <p className='weatherbox'>Humidity: </p>
          <p id = 'weathercondition' style={{fontWeight: '600'}}>{weather.current.humidity}%</p>
        </div>
        <div className="speed box" style={{background: '#6ce4ff'}}>
          <p className='weatherbox'>Wind Speed: </p>
          <p id = 'weathercondition' style={{fontWeight: '600'}}>{weather.current.wind_kph} km/h</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default WeatherData;
