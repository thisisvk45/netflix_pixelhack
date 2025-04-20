
import { NetflixHeader } from "@/components/ui/netflix-header";
import { MovieRow } from "@/components/ui/movie-row";
import { Button } from "@/components/ui/button";
import { trendingNowMovies } from "@/data/movies";

const MyList = () => {
  // In a real app, this would be fetched from a user's saved list
  // For demo purposes, we'll use an empty array to show the empty state
  const myListMovies: typeof trendingNowMovies = [];
  
  return (
    <div className="min-h-screen bg-netflix-black text-white pt-20">
      <NetflixHeader />
      
      <div className="px-8 py-16">
        <h1 className="text-3xl font-bold mb-8">My List</h1>
        
        {myListMovies.length > 0 ? (
          <MovieRow title="" movies={myListMovies} />
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-netflix-gray text-lg mb-6">Your list is empty</p>
            <p className="text-netflix-gray max-w-md text-center mb-10">
              Add movies and TV shows to your list to watch them later.
            </p>
            <Button 
              className="bg-netflix-red hover:bg-netflix-red/80 text-white"
              onClick={() => window.location.href = "/"}
            >
              Browse Content
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;
