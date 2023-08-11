function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div>
      <div className="forecast-details" data-testid="forecast-details" />
      <div className="forecast-details__data">{formattedDate}</div>
      <div className="forecast-details__data">Humidity: {humidity} %</div>
      <div className="forecast-details__data">
        Max temperature: {temperature.max}&deg;C
      </div>
      <div className="forecast-details__data">
        Min temperature: {temperature.min}&deg;C
      </div>
      <div className="forecast-details__data">Wind speed: {wind.speed} mph</div>
      <div className="forecast-details__data">
        Wind direction: {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;
