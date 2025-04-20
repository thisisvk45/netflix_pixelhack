
import { NetflixHeader } from "@/components/ui/netflix-header";
import { MoodRecommendations } from "@/components/ui/mood-recommendations";

const MoodBased = () => {
  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <NetflixHeader />
      
      <div className="pt-24 px-4 md:px-8 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Find Your Perfect Watch
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Let us recommend the perfect content based on your current mood and the weather outside.
        </p>
        
        <MoodRecommendations />
      </div>
    </div>
  );
};

export default MoodBased;
