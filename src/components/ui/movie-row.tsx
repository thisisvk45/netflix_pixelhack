
import { cn } from "@/lib/utils";
import { MovieCard } from "./movie-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

interface Movie {
  id: number;
  title: string;
  imageUrl: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
  className?: string;
}

export function MovieRow({ title, movies, className }: MovieRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: "left" | "right") => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = 
        direction === "left" 
          ? scrollLeft - clientWidth * 0.75
          : scrollLeft + clientWidth * 0.75;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className={cn("my-8 relative", className)}>
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="relative group">
        <ChevronLeft 
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 hover:scale-125 bg-black/30 rounded-full p-2 text-white ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />

        <div 
          ref={rowRef}
          className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none w-[200px] md:w-[250px]">
              <MovieCard 
                title={movie.title} 
                imageUrl={movie.imageUrl}
              />
            </div>
          ))}
        </div>

        <ChevronRight 
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 hover:scale-125 bg-black/30 rounded-full p-2 text-white"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
