import { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import Search from './components/Search';
import Forecast from './components/Forecast';
import CurrentWeather from './components/CurrentWeather';

function App() {
  const CURRENT_URL = "https://api.weatherapi.com/v1/current.json"; 
  const FORECAST_URL = "https://api.weatherapi.com/v1/forecast.json";
  const API_KEY = "8b2e656b9a664d4987a192427242011"; 

  const [city, setCity] = useState(""); 
  const [debouncedCity, setDebouncedCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null); 
  const [forecast, setForecast] = useState(null); 
  const [error, setError] = useState(null); 
  

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedCity(city); 
    }, 500);

    return () => clearTimeout(handler); 
  }, [city]);



  useEffect(() => {
    async function fetchWeather() {
      if (!debouncedCity) return; 

      try {
        
        const res = await fetch(`${CURRENT_URL}?key=${API_KEY}&q=${city}`); 
        const currentdata = await res.json();
        setCurrentWeather(currentdata);

        
        const resForecast = await fetch(`${FORECAST_URL}?key=${API_KEY}&q=${city}&days=3`);
        const forecastData = await resForecast.json();
        setForecast(forecastData);

        
        setError(null);

        console.log("Current Weather:", currentdata);
        console.log("Forecast Data:", forecastData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Failed to fetch weather data. Please try again.");
      }
    }

    fetchWeather();
  }, [debouncedCity]); 

  return (
    <>
      <Header />
      <Search 
         city={city} 
         setCity={setCity} />
      {error && <p className="error">{error}</p>} {}
      <CurrentWeather
         currentWeather={currentWeather}/>
      <Forecast 
         forecast={forecast} 
      />
    </>
  );
}

export default App;
