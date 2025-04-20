
import { useState } from "react";
import { profiles as defaultProfiles } from "@/data/movies";
import { ProfileSelection } from "@/components/ui/profile-selection";
import { useNavigate } from "react-router-dom";

const ProfilesPage = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState(defaultProfiles);
  
  // Handle profile selection
  const handleProfileSelect = (profile: typeof profiles[0]) => {
    // Save selected profile to localStorage
    localStorage.setItem("currentProfile", JSON.stringify(profile));
    // Navigate to home page
    navigate("/");
  };
  
  // Handle adding a new profile (in a real app, this would open a dialog)
  const handleAddProfile = () => {
    alert("Add Profile functionality would be implemented here");
    // In a real implementation, you'd open a modal and then add logic like:
    // setProfiles([...profiles, newProfile]);
  };
  
  return (
    <ProfileSelection 
      profiles={profiles} 
      onProfileSelect={handleProfileSelect}
      onAddProfile={handleAddProfile}
    />
  );
};

export default ProfilesPage;
