
import { useState } from "react";
import { Button } from "./button";
import { ProfileAvatar } from "./profile-avatar";
import { Plus } from "lucide-react";

interface Profile {
  id: number;
  name: string;
  imageUrl: string;
}

interface ProfileSelectionProps {
  profiles: Profile[];
  onProfileSelect: (profile: Profile) => void;
  onAddProfile: () => void;
}

export function ProfileSelection({ 
  profiles, 
  onProfileSelect, 
  onAddProfile 
}: ProfileSelectionProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-netflix-black">
      <div className="mb-10">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
          alt="Netflix" 
          className="h-12"
        />
      </div>
      
      <h1 className="text-3xl text-white font-medium mb-10">Who's watching?</h1>
      
      <div className="flex flex-wrap justify-center gap-5 mb-12">
        {profiles.map((profile) => (
          <ProfileAvatar
            key={profile.id}
            name={profile.name}
            imageUrl={profile.imageUrl}
            onClick={() => onProfileSelect(profile)}
          />
        ))}
        
        {/* Add Profile Button */}
        <div 
          className="flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100"
          onClick={onAddProfile}
        >
          <div className="w-[80px] h-[80px] rounded-md bg-netflix-gray flex items-center justify-center">
            <Plus size={40} className="text-white" />
          </div>
          <span className="mt-2 text-sm text-netflix-lightGray">Add Profile</span>
        </div>
      </div>
      
      <Button 
        variant="outline" 
        className="border-netflix-gray text-netflix-gray hover:border-white hover:text-white"
      >
        Manage Profiles
      </Button>
    </div>
  );
}
