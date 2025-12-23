"use client";

import { CloudSun } from "lucide-react";
import React, { useEffect, useState } from "react";

const WeatherDelhi = () => {
  const [temp, setTemp] = useState(null);
  const [condition, setCondition] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Delhi coordinates (lat, lon)
        const url =
          "https://api.open-meteo.com/v1/forecast?latitude=28.7041&longitude=77.1025&current_weather=true";

        const res = await fetch(url);
        const data = await res.json();

        setTemp(data.current_weather.temperature);
        setCondition(
          data.current_weather.weathercode === 0
            ? "Clear"
            : data.current_weather.weathercode < 3
            ? "Partly Cloudy"
            : "Cloudy"
        );
      } catch (error) {
        console.log("Weather error:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <div className="flex text-xs items-center gap-3 hover:bg-[#2b381d] pl-3 pt-1 pb-1 pr-18 rounded-md">
        <CloudSun size={28} />
        <div className="flex flex-col">
          <h1>{temp !== null ? `${temp}°C` : "Loading..."}</h1>
          <h1>{condition}</h1>
        </div>
      </div>
    </div>
  );
};

export default WeatherDelhi;
