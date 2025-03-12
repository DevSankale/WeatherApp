import styles from "./Forecast.module.css"

export default function Forecast({ forecast }) {
  if (!forecast || !forecast.forecast || !forecast.forecast.forecastday) {
    return <p>Loading forecast data...</p>; 
  }

  const tomorrow = forecast.forecast.forecastday[1]; 
  const dayAfterTomorrow = forecast.forecast.forecastday[2]; 
  if (!tomorrow) {
    return <p>Forecast data for tomorrow is unavailable.</p>;
  }

  return (
    <div className={styles.forecastContainer}>
    <div className={styles.details}>
      <h2 className={styles.heading}>Tomorrow's Weather</h2>
      <div className={styles.conditions}>
        <div>☀ Temperature: {tomorrow.day.avgtemp_c}°C</div>
        <div>☁ Condition: {tomorrow.day.condition.text}</div>
        <div>💨 Wind Speed: {tomorrow.day.maxwind_kph} kph</div>
        <img src={tomorrow.day.condition.icon} alt="Weather Icon" />
      </div>
    </div>
    <div className={styles.details}>
    <h2 className={styles.heading2}>Day after Tomorrow's Weather</h2>
    <div className={styles.conditions}>
      <div>☀ Temperature: {dayAfterTomorrow.day.avgtemp_c}°C</div>
      <div>☁ Condition: {dayAfterTomorrow.day.condition.text}</div>
      <div>💨 Wind Speed: {dayAfterTomorrow.day.maxwind_kph} kph</div>
      <img src={dayAfterTomorrow.day.condition.icon} alt="Weather Icon" />
    </div>
  </div>
  </div>
  );
}
