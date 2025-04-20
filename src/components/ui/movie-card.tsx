
import { cn } from "@/lib/utils";
import { useState } from "react";

interface MovieCardProps {
  title: string;
  imageUrl: string;
  className?: string;
  onClick?: () => void;
}

export function MovieCard({ title, imageUrl, className, onClick }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn("relative cursor-pointer transition-transform duration-200 ease-out", 
        isHovered ? "scale-110 z-10" : "",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-sm aspect-video">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-all"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-2">
            <h3 className="text-white text-sm font-semibold">{title}</h3>
          </div>
        )}
      </div>
    </div>
  );
}
