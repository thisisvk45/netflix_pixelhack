
import { NetflixHeader } from "@/components/ui/netflix-header";
import { FeaturedMovie } from "@/components/ui/featured-movie";
import { MovieRow } from "@/components/ui/movie-row";
import { MoodRecommendations } from "@/components/ui/mood-recommendations";
import { moviesFeatured, moviesAction, moviesComedy, trendingNowMovies } from "@/data/movies";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Movies = () => {
  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <NetflixHeader />
      
      {/* Featured Movie */}
      <FeaturedMovie 
        title={moviesFeatured.title} 
        description={moviesFeatured.description} 
        imageUrl={moviesFeatured.imageUrl}
      />
      
      {/* Tabs for different views */}
      <div className="px-4 md:px-8 mt-6 pb-16">
        <Tabs defaultValue="categories">
          <TabsList className="bg-gray-800 border border-gray-700 mb-4">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="mood">Mood Based</TabsTrigger>
          </TabsList>
          
          <TabsContent value="categories">
            <MovieRow title="Action Movies" movies={moviesAction} />
            <MovieRow title="Comedy Movies" movies={moviesComedy} />
            <MovieRow title="New Releases" movies={trendingNowMovies.slice(0, 6)} />
          </TabsContent>
          
          <TabsContent value="mood">
            <MoodRecommendations />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Movies;
