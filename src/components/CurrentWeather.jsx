import styles from "./currentWeather.module.css"

export default function CurrentWeather({ currentWeather }) {
  if (!currentWeather) return <p>Enter City name to get forecast.</p>;

  return (
    <div className={styles.currentContainer}>
      <div className={styles.details}>
          <h2 className={styles.heading}>Current Weather</h2>
          <div className={styles.conditions}>
              <div>☀ Temperature: {currentWeather.current.temp_c}°C</div>
              <div>☁  Condition: {currentWeather.current.condition.text}</div>
              <div>💨 Wind Speed: {currentWeather.current.wind_kph} kph</div>
          </div>   
      </div>
      <img src={currentWeather.current.condition.icon}/>
     
    </div>
  );
}
