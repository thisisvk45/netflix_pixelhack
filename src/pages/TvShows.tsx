
import { NetflixHeader } from "@/components/ui/netflix-header";
import { FeaturedMovie } from "@/components/ui/featured-movie";
import { MovieRow } from "@/components/ui/movie-row";
import { tvShowsFeatured, tvShowsTrending, tvShowsIndian } from "@/data/movies";

const TvShows = () => {
  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <NetflixHeader />
      
      {/* Featured TV Show */}
      <FeaturedMovie 
        title={tvShowsFeatured.title} 
        description={tvShowsFeatured.description} 
        imageUrl={tvShowsFeatured.imageUrl}
      />
      
      {/* TV Show Rows */}
      <div className="mt-6 pb-16">
        <MovieRow title="Trending in TV Shows" movies={tvShowsTrending} />
        <MovieRow title="Indian TV Series" movies={tvShowsIndian} />
        <MovieRow title="New Releases" movies={[...tvShowsTrending, ...tvShowsIndian].slice(0, 6)} />
      </div>
    </div>
  );
};

export default TvShows;
