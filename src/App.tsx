import React, { useState } from "react";
import "./App.css";
import CityInput from "./Components/CityInput";
import { cityInfo } from "./Models/cityInfo";
import { useLocalStorage } from "./Services/useLocalStorageHook";
import CityWeather from "./Components/cityWeather";

function App() {
  const [cityname, setCityname] = useState<string>("");
  const [country, setCountry] = useState<string>("de");

  const [storedCities, setStoredCities] = useLocalStorage<cityInfo[]>(
    "cities",
    new Array<cityInfo>()
  );

  let cities = storedCities as cityInfo[];

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (cityname) {
      let newCities = [...cities, { id: Date.now(), cityname, country }];

      (setStoredCities as (value: cityInfo[]) => void)(newCities);
    }
  };

  const deleteItem = (value: string) => {
    if (value) {
      let newCities = cities.filter((x) => x.cityname != value);

      (setStoredCities as (value: cityInfo[]) => void)(newCities);
    }
  };

  return (
    <div className="App">
      <h3>TODAY'S FORCAST</h3>
      <CityInput
        cityname={cityname}
        setCityname={setCityname}
        country={country}
        setCountry={setCountry}
        handleAdd={handleAdd}
      />
      {cities.map((val, index) => {
        return (
          <div key={index}>
            <CityWeather
              cityname={val.cityname}
              country={val.country}
              onDelete={(value: string) => deleteItem(value)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
