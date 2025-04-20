
import { cn } from "@/lib/utils";

interface ProfileAvatarProps {
  name: string;
  imageUrl: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

export function ProfileAvatar({ 
  name, 
  imageUrl, 
  isActive = false, 
  className,
  onClick
}: ProfileAvatarProps) {
  return (
    <div 
      className={cn(
        "flex flex-col items-center cursor-pointer", 
        isActive ? "opacity-100" : "opacity-70 hover:opacity-100", 
        className
      )}
      onClick={onClick}
    >
      <div 
        className={cn(
          "w-[80px] h-[80px] rounded-md overflow-hidden border-2", 
          isActive ? "border-white" : "border-transparent"
        )}
      >
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <span className="mt-2 text-sm text-netflix-lightGray">{name}</span>
    </div>
  );
}
