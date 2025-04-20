import { useState, useEffect } from "react";
import { CloudRain, Cloud, CloudSun, Droplets } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

export function HeaderWeather() {
  const [weather, setWeather] = useState({
    temperature: 28,
    condition: "clear", // clear, rain, cloudy
    chanceOfRain: 30,
  });

  useEffect(() => {
    // Update weather every minute
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
        return <CloudRain className="h-6 w-6 text-blue-400" />;
      case "cloudy":
        return <Cloud className="h-6 w-6 text-gray-400" />;
      default:
        return <CloudSun className="h-6 w-6 text-yellow-400" />;
    }
  };

  // Get suggestion based on weather
  const getSuggestion = () => {
    if (weather.chanceOfRain > 70) {
      return "Perfect weather for a movie marathon! Order extra snacks.";
    } else if (weather.chanceOfRain > 40) {
      return "Might rain soon. How about some popcorn with your movie?";
    } else if (weather.temperature > 30) {
      return "It's hot outside! Stay in and enjoy a cool movie.";
    } else {
      return "Enjoy your Netflix time with some snacks!";
    }
  };

  // Visual representation of rain chance
  const getRainChanceVisual = () => {
    const droplets = [];
    const filledDroplets = Math.floor(weather.chanceOfRain / 20); // 0-5 droplets
    
    for (let i = 0; i < 5; i++) {
      droplets.push(
        <Droplets 
          key={i} 
          className={`h-3 w-3 ${i < filledDroplets ? 'text-blue-500' : 'text-gray-600 opacity-40'}`} 
        />
      );
    }
    
    return (
      <div className="flex space-x-1 mt-1">
        {droplets}
      </div>
    );
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center gap-2 bg-netflix-dark bg-opacity-50 hover:bg-opacity-80 rounded-md px-3 py-2 text-netflix-lightGray hover:text-white cursor-pointer transition-all duration-300">
          {getIcon()}
          <span className="text-sm font-medium">{weather.temperature}°C</span>
          <div className="hidden md:block h-4 w-px bg-netflix-lightGray opacity-50 mx-1"></div>
          <div className="hidden md:flex items-center">
            <Droplets className="h-4 w-4 text-blue-400 mr-1" />
            <span className="text-xs">{weather.chanceOfRain}%</span>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="bg-netflix-dark border-netflix-red p-4 rounded-md shadow-lg">
        <div className="text-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="font-bold text-white">Weather Now</p>
            <div className="flex items-center">
              {getIcon()}
              <span className="ml-2 text-white">{weather.temperature}°C</span>
            </div>
          </div>
          
          <div className="mb-3">
            <p className="text-netflix-lightGray capitalize">{weather.condition} conditions</p>
            <div className="flex items-center mt-1">
              <span className="text-netflix-lightGray mr-2">Rain chance:</span>
              <span className="text-white font-medium">{weather.chanceOfRain}%</span>
            </div>
            {getRainChanceVisual()}
          </div>
          
          <div className="pt-3 border-t border-gray-700">
            <p className="text-netflix-red font-medium">Netflix Suggestion</p>
            <p className="text-white text-xs mt-1">{getSuggestion()}</p>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
