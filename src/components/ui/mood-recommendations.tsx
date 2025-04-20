
import { useState } from "react";
import { MovieRow } from "./movie-row";
import { MoodSelector } from "./mood-selector";
import { WeatherDisplay } from "./weather-display";

// These would ideally come from an API based on mood
const moodBasedMovies = {
  Happy: [
    { id: 101, title: "3 Idiots", imageUrl: "https://source.unsplash.com/random/300x200/?comedy,bollywood" },
    { id: 102, title: "Dil Chahta Hai", imageUrl: "https://source.unsplash.com/random/300x200/?friends,india" },
    { id: 103, title: "Hera Pheri", imageUrl: "https://source.unsplash.com/random/300x200/?funny,india" },
    { id: 104, title: "Phir Hera Pheri", imageUrl: "https://source.unsplash.com/random/300x200/?comedy,movie" },
    { id: 105, title: "Golmaal", imageUrl: "https://source.unsplash.com/random/300x200/?happy,comedy" },
    { id: 106, title: "Chennai Express", imageUrl: "https://source.unsplash.com/random/300x200/?train,comedy" },
  ],
  Sad: [
    { id: 201, title: "Taare Zameen Par", imageUrl: "https://source.unsplash.com/random/300x200/?stars,emotional" },
    { id: 202, title: "Kal Ho Naa Ho", imageUrl: "https://source.unsplash.com/random/300x200/?tomorrow,emotional" },
    { id: 203, title: "My Name Is Khan", imageUrl: "https://source.unsplash.com/random/300x200/?emotional,drama" },
    { id: 204, title: "Devdas", imageUrl: "https://source.unsplash.com/random/300x200/?tragedy,classical" },
    { id: 205, title: "Masaan", imageUrl: "https://source.unsplash.com/random/300x200/?river,emotional" },
    { id: 206, title: "Queen", imageUrl: "https://source.unsplash.com/random/300x200/?paris,journey" },
  ],
  Excited: [
    { id: 301, title: "Don 2", imageUrl: "https://source.unsplash.com/random/300x200/?action,chase" },
    { id: 302, title: "War", imageUrl: "https://source.unsplash.com/random/300x200/?fight,action" },
    { id: 303, title: "Dhoom 3", imageUrl: "https://source.unsplash.com/random/300x200/?bike,chase" },
    { id: 304, title: "Race 3", imageUrl: "https://source.unsplash.com/random/300x200/?fast,cars" },
    { id: 305, title: "Bang Bang", imageUrl: "https://source.unsplash.com/random/300x200/?action,adventure" },
    { id: 306, title: "Singham", imageUrl: "https://source.unsplash.com/random/300x200/?police,action" },
  ],
  Relaxed: [
    { id: 401, title: "Zindagi Na Milegi Dobara", imageUrl: "https://source.unsplash.com/random/300x200/?beach,travel" },
    { id: 402, title: "Dear Zindagi", imageUrl: "https://source.unsplash.com/random/300x200/?therapy,beach" },
    { id: 403, title: "English Vinglish", imageUrl: "https://source.unsplash.com/random/300x200/?learn,travel" },
    { id: 404, title: "Piku", imageUrl: "https://source.unsplash.com/random/300x200/?journey,family" },
    { id: 405, title: "The Lunchbox", imageUrl: "https://source.unsplash.com/random/300x200/?food,love" },
    { id: 406, title: "Karwaan", imageUrl: "https://source.unsplash.com/random/300x200/?roadtrip,journey" },
  ],
  Romantic: [
    { id: 501, title: "Yeh Jawaani Hai Deewani", imageUrl: "https://source.unsplash.com/random/300x200/?love,youth" },
    { id: 502, title: "Jab We Met", imageUrl: "https://source.unsplash.com/random/300x200/?train,love" },
    { id: 503, title: "Dilwale Dulhania Le Jayenge", imageUrl: "https://source.unsplash.com/random/300x200/?europe,love" },
    { id: 504, title: "Veer-Zaara", imageUrl: "https://source.unsplash.com/random/300x200/?eternal,love" },
    { id: 505, title: "2 States", imageUrl: "https://source.unsplash.com/random/300x200/?marriage,love" },
    { id: 506, title: "Barfi!", imageUrl: "https://source.unsplash.com/random/300x200/?simple,love" },
  ],
  Introspective: [
    { id: 601, title: "Lagan", imageUrl: "https://source.unsplash.com/random/300x200/?village,cricket" },
    { id: 602, title: "PK", imageUrl: "https://source.unsplash.com/random/300x200/?alien,questions" },
    { id: 603, title: "Swades", imageUrl: "https://source.unsplash.com/random/300x200/?homeland,roots" },
    { id: 604, title: "Uri: The Surgical Strike", imageUrl: "https://source.unsplash.com/random/300x200/?military,patriotic" },
    { id: 605, title: "Chak De! India", imageUrl: "https://source.unsplash.com/random/300x200/?hockey,team" },
    { id: 606, title: "Rang De Basanti", imageUrl: "https://source.unsplash.com/random/300x200/?revolution,youth" },
  ],
};

// For text input recommendations
const textBasedRecommendations = [
  { id: 701, title: "Good Newwz", imageUrl: "https://source.unsplash.com/random/300x200/?happy,family" },
  { id: 702, title: "Badhaai Ho", imageUrl: "https://source.unsplash.com/random/300x200/?family,comedy" },
  { id: 703, title: "Andhadhun", imageUrl: "https://source.unsplash.com/random/300x200/?piano,mystery" },
  { id: 704, title: "Tumbbad", imageUrl: "https://source.unsplash.com/random/300x200/?rain,mystery" },
  { id: 705, title: "Bareilly Ki Barfi", imageUrl: "https://source.unsplash.com/random/300x200/?sweet,romance" },
  { id: 706, title: "Dream Girl", imageUrl: "https://source.unsplash.com/random/300x200/?phone,comedy" },
];

// Genre filter movies (just a sample)
const genreMovies = {
  Action: [
    { id: 801, title: "Pathaan", imageUrl: "https://source.unsplash.com/random/300x200/?spy,action" },
    { id: 802, title: "Tiger Zinda Hai", imageUrl: "https://source.unsplash.com/random/300x200/?agent,action" },
  ],
  Comedy: [
    { id: 811, title: "Stree", imageUrl: "https://source.unsplash.com/random/300x200/?ghost,comedy" },
    { id: 812, title: "Fukrey", imageUrl: "https://source.unsplash.com/random/300x200/?friends,comedy" },
  ],
  // Add more genres as needed
};

interface MoodRecommendationsProps {
  className?: string;
}

export function MoodRecommendations({ className }: MoodRecommendationsProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [recommendedMovies, setRecommendedMovies] = useState<any[]>([]);
  const [recommendationTitle, setRecommendationTitle] = useState("Select your mood to get started");

  const handleMoodSelect = (mood: string, genre?: string) => {
    setSelectedMood(mood);
    
    // Check if this is a predefined mood or text input
    if (moodBasedMovies[mood as keyof typeof moodBasedMovies]) {
      let movies = moodBasedMovies[mood as keyof typeof moodBasedMovies];
      
      // Apply genre filter if specified
      if (genre && genreMovies[genre as keyof typeof genreMovies]) {
        const genreSpecificMovies = genreMovies[genre as keyof typeof genreMovies];
        // Combine some mood movies with genre specific ones
        movies = [...movies.slice(0, 3), ...genreSpecificMovies];
      }
      
      setRecommendedMovies(movies);
      setRecommendationTitle(`${mood} Mood ${genre ? `& ${genre}` : ''} Recommendations`);
    } else {
      // Handle text input - in a real app, this would use NLP to analyze sentiment
      setRecommendedMovies(textBasedRecommendations);
      setRecommendationTitle("Based on How You're Feeling");
    }
  };

  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <MoodSelector onMoodSelect={handleMoodSelect} />
        </div>
        <div className="lg:col-span-1">
          <WeatherDisplay />
        </div>
      </div>
      
      {recommendedMovies.length > 0 && (
        <div className="mt-8">
          <MovieRow 
            title={recommendationTitle} 
            movies={recommendedMovies}
          />
        </div>
      )}
    </div>
  );
}
