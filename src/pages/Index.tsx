
import { useState, useEffect } from "react";
import { NetflixHeader } from "@/components/ui/netflix-header";
import { FeaturedMovie } from "@/components/ui/featured-movie";
import { MovieRow } from "@/components/ui/movie-row";
import { ProfileSelection } from "@/components/ui/profile-selection";
import { 
  profiles, 
  featuredMovie, 
  trendingNowMovies, 
  popularInIndiaMovies, 
  hindiMoviesAndShows
} from "@/data/movies";

const Index = () => {
  const [currentProfile, setCurrentProfile] = useState<typeof profiles[0] | null>(null);
  const [showProfileSelection, setShowProfileSelection] = useState(true);

  // Handle profile selection
  const handleProfileSelect = (profile: typeof profiles[0]) => {
    setCurrentProfile(profile);
    setShowProfileSelection(false);
    // We could save this to localStorage for persistence
    localStorage.setItem("currentProfile", JSON.stringify(profile));
  };

  // Handle add profile (in a real app, this would open a dialog to create a profile)
  const handleAddProfile = () => {
    alert("Add Profile functionality would be implemented here");
    // In a real app, you'd open a modal to create a new profile
  };

  // Check for existing profile on component mount
  useEffect(() => {
    const savedProfile = localStorage.getItem("currentProfile");
    if (savedProfile) {
      setCurrentProfile(JSON.parse(savedProfile));
      setShowProfileSelection(false);
    }
  }, []);

  // If showing profile selection, render the profile selection screen
  if (showProfileSelection) {
    return (
      <ProfileSelection 
        profiles={profiles} 
        onProfileSelect={handleProfileSelect}
        onAddProfile={handleAddProfile}
      />
    );
  }

  // Main content after profile is selected
  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <NetflixHeader />
      
      {/* Featured Movie */}
      <FeaturedMovie 
        title={featuredMovie.title} 
        description={featuredMovie.description} 
        imageUrl={featuredMovie.imageUrl}
      />
      
      {/* Movie Rows */}
      <div className="mt-6 pb-16">
        <MovieRow title="Trending Now" movies={trendingNowMovies} />
        <MovieRow title="Popular in India" movies={popularInIndiaMovies} />
        <MovieRow title="Hindi Movies & Shows" movies={hindiMoviesAndShows} />
      </div>
    </div>
  );
};

export default Index;
