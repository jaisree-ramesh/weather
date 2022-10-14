import React from "react";
import { weather } from "../Models/weather";
import "../App.css";

export interface WeatherInfoProps {
  data: weather;
}

const WeatherInfo: React.FC<WeatherInfoProps> = (props: WeatherInfoProps) => {
  return (
    <div className="weatherInfoContainer">
      <h4>Weather Forcast</h4>
      <div className="infoContainer">
        <h5>{props.data.city}</h5>
        <p>{props.data.description}</p>
        <br></br>
        <div className="info">
          <div className="infoTitle">Temp :</div>
          <div className="infoValue"> {props.data.temp} °C</div>
        </div>
        <div className="info">
          <div className="infoTitle">Max :</div>
          <div className="infoValue">{props.data.tempMax} °C</div>
        </div>
        <div className="info">
          <div className="infoTitle">Min :</div>
          <div className="infoValue">{props.data.tempMin} °C</div>
        </div>
        <div className="info">
          <div className="infoTitle">Humidity : </div>
          <div className="infoValue">{props.data.humidity}%</div>
        </div>
        <div className="info">
          <div className="infoTitle">Pressure : </div>
          <div className="infoValue">{props.data.pressure} mBar</div>
        </div>
        <div className="info">
          <div className="infoTitle">Wind : </div>
          <div className="infoValue">{props.data.windSpeed} km/h</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
