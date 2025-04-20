
import { useState, useEffect } from "react";
import { CloudRain, Cloud, CloudSun } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

export function HeaderWeather() {
  const [weather, setWeather] = useState({
    temperature: 28,
    condition: "clear", // clear, rain, cloudy
    chanceOfRain: 30,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const conditions = ["clear", "rain", "cloudy"];
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
      const randomTemp = Math.floor(Math.random() * 15) + 20;
      const randomChance = Math.floor(Math.random() * 100);
      
      setWeather({
        temperature: randomTemp,
        condition: randomCondition,
        chanceOfRain: randomChance,
      });
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const getIcon = () => {
    switch (weather.condition) {
      case "rain":
        return <CloudRain className="h-5 w-5 text-blue-400" />;
      case "cloudy":
        return <Cloud className="h-5 w-5 text-gray-400" />;
      default:
        return <CloudSun className="h-5 w-5 text-yellow-400" />;
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center gap-2 text-netflix-lightGray hover:text-white cursor-pointer">
          {getIcon()}
          <span className="text-sm">{weather.temperature}°C</span>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <div className="text-sm">
          <p className="font-medium">Current Weather</p>
          <p>{weather.temperature}°C, {weather.condition}</p>
          <p>{weather.chanceOfRain}% chance of rain</p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
