
import { NetflixHeader } from "@/components/ui/netflix-header";
import { FeaturedMovie } from "@/components/ui/featured-movie";
import { MovieRow } from "@/components/ui/movie-row";
import { trendingNowMovies, popularInIndiaMovies, hindiMoviesAndShows } from "@/data/movies";

// Combine and shuffle some movies for new & popular section
const shuffleArray = (array: any[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const newReleases = shuffleArray([
  ...trendingNowMovies,
  ...popularInIndiaMovies.slice(0, 3),
  ...hindiMoviesAndShows.slice(0, 3)
]).slice(0, 6);

const topPicks = shuffleArray([
  ...popularInIndiaMovies,
  ...trendingNowMovies.slice(0, 3)
]).slice(0, 6);

const NewPopular = () => {
  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <NetflixHeader />
      
      {/* Featured Content (using a random movie from trending) */}
      <FeaturedMovie 
        title={trendingNowMovies[3].title} 
        description={trendingNowMovies[3].description} 
        imageUrl={trendingNowMovies[3].imageUrl}
      />
      
      {/* Movie Rows */}
      <div className="mt-6 pb-16">
        <MovieRow title="New on Netflix" movies={newReleases} />
        <MovieRow title="Top Picks for You" movies={topPicks} />
        <MovieRow title="Popular in India" movies={popularInIndiaMovies} />
      </div>
    </div>
  );
};

export default NewPopular;
