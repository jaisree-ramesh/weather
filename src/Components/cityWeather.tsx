import React from "react";
import useGetWeatherHook from "../Services/useGetWeatherHook";
import WeatherInfo from "../Components/WeatherInfo";
import { weather } from "../Models/weather";

interface IProps {
  cityname: string;
  country: string;
  onDelete: (value: string) => void;
}
const CityWeather: React.FC<IProps> = (props: IProps) => {
  const [data, isPending, error] = useGetWeatherHook(
    `https://api.openweathermap.org/data/2.5/weather?q=${props.cityname},${props.country}&appid=db2edb22ebbaf24a2ada236cdfc5a17f&units=metric`
  );

  let weather = data as weather;

  if (weather === undefined || weather === null) {
    return <>No weather</>;
  }
  return (
    <div>
      <WeatherInfo data={weather} />
      <button
        className="submitBtn"
        onClick={() => props.onDelete(props.cityname)}
      >
        Löschen
      </button>
    </div>
  );
};

export default CityWeather;
