
import { useState, useEffect } from "react";
import { CloudSun, CloudRain, CloudDrizzle } from "lucide-react";

interface WeatherDisplayProps {
  className?: string;
}

export function WeatherDisplay({ className }: WeatherDisplayProps) {
  const [weather, setWeather] = useState({
    temperature: 28,
    condition: "clear", // clear, rain, drizzle
    chanceOfRain: 30,
  });

  // In a real app, you would fetch weather data from an API here
  useEffect(() => {
    // Simulated weather update every minute
    const interval = setInterval(() => {
      const conditions = ["clear", "rain", "drizzle"];
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
      const randomTemp = Math.floor(Math.random() * 15) + 20; // 20-35°C
      const randomChance = Math.floor(Math.random() * 100); // 0-100%
      
      setWeather({
        temperature: randomTemp,
        condition: randomCondition,
        chanceOfRain: randomChance,
      });
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);

  // Recommend snacks based on weather
  const getSnackRecommendation = () => {
    if (weather.chanceOfRain > 60) {
      return "Grab some hot samosas and chai - perfect for rainy weather!";
    } else if (weather.temperature > 30) {
      return "How about some cool ice cream or a cold drink?";
    } else {
      return "Perfect time for some popcorn and movie night!";
    }
  };

  return (
    <div className={`bg-netflix-black/70 p-4 rounded-md border border-gray-800 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-white">Weather Now</h3>
        {weather.condition === "clear" && <CloudSun className="h-6 w-6 text-yellow-400" />}
        {weather.condition === "rain" && <CloudRain className="h-6 w-6 text-blue-400" />}
        {weather.condition === "drizzle" && <CloudDrizzle className="h-6 w-6 text-blue-300" />}
      </div>
      
      <div className="text-md text-gray-300 mb-1">
        {weather.temperature}°C, {weather.condition === "clear" ? "Mostly Clear" : weather.condition === "rain" ? "Rainy" : "Light Drizzle"}
      </div>
      
      <div className="text-sm text-gray-400 mb-3">
        {weather.chanceOfRain}% chance of rain
      </div>
      
      <div className="text-sm text-yellow-500 italic">
        {getSnackRecommendation()}
      </div>
    </div>
  );
}
