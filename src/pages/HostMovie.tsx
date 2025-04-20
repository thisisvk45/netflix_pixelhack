
import { NetflixHeader } from "@/components/ui/netflix-header";
import { MovieHosting } from "@/components/ui/movie-hosting";

const HostMovie = () => {
  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <NetflixHeader />
      
      <div className="pt-24 px-4 md:px-8 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Host a Movie Night
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Create a virtual movie room and invite friends to watch together.
        </p>
        
        <MovieHosting />
      </div>
    </div>
  );
};

export default HostMovie;
