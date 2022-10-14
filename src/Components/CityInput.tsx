import React, { useState, useRef } from "react";
import "../Models/cityInfo";
import { cityInfo } from "../Models/cityInfo";

interface Props {
  cityname: string;
  country: string;
  setCityname: React.Dispatch<React.SetStateAction<string>>;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const CityInput = ({
  cityname,
  country,
  setCityname,
  setCountry,
  handleAdd,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="cityInputContainer">
      <h4>Enter City for Forcast</h4>
      <form
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <div className="formContainer">
          <input
            required={true}
            name="city"
            value={cityname}
            onChange={(e) => setCityname(e.target.value)}
            ref={inputRef}
            type="text"
            placeholder="City"
          />
        </div>
        <div className="mb-2">
          <input
            name="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            ref={inputRef}
            type="text"
            placeholder="Country"
          />
        </div>
        <div className="mb-2">
          <input type="submit" className="submitBtn" value="Get Weather" />
        </div>
      </form>
    </div>
  );
};

export default CityInput;
