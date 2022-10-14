import { stringify } from "querystring";
import React, { useState, useEffect } from "react";
import { weather } from "../Models/weather";

const useGetWeatherHook = (url: string) => {
  const [data, setData] = useState<weather | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          // setData(data);
          setError(null);
          const cityTemp: weather = data;
          cityTemp.city = data.name;
          cityTemp.temp = data.main.temp;
          cityTemp.tempMax = data.main.temp_max;
          cityTemp.tempMin = data.main.temp_min;
          cityTemp.description = data.weather[0].description;
          cityTemp.humidity = data.main.humidity;
          cityTemp.pressure = data.main.pressure;
          cityTemp.windDegree = data.wind.deg;
          cityTemp.windSpeed = data.wind.speed;
          setData(cityTemp);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fech aborted");
          } else {
            // auto catches network / connection error
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    // cleanup funtion
    return () => abortController.abort();
  }, [url]);

  return [data, isPending, error];
};

export default useGetWeatherHook;
