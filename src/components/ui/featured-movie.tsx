
import { Button } from "./button";
import { Play, Plus } from "lucide-react";

interface FeaturedMovieProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function FeaturedMovie({ title, description, imageUrl }: FeaturedMovieProps) {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/70 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
        <p className="text-lg text-white max-w-2xl mb-6">{description}</p>
        <div className="flex space-x-4">
          <Button className="bg-white text-black hover:bg-gray-200">
            <Play size={16} className="mr-2" /> Play
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            <Plus size={16} className="mr-2" /> My List
          </Button>
        </div>
      </div>
    </div>
  );
}
