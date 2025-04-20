import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Mic, MicOff } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

interface MoodSelectorProps {
  className?: string;
  onMoodSelect: (mood: string, genre?: string, preferences?: object) => void;
}

export function MoodSelector({ className, onMoodSelect }: MoodSelectorProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedBeginning, setSelectedBeginning] = useState("");
  const [selectedEnding, setSelectedEnding] = useState("");

  const moods = [
    { name: "Happy", color: "bg-yellow-500" },
    { name: "Sad", color: "bg-blue-500" },
    { name: "Excited", color: "bg-red-500" },
    { name: "Relaxed", color: "bg-green-500" },
    { name: "Romantic", color: "bg-pink-500" },
    { name: "Introspective", color: "bg-purple-500" },
  ];

  const genres = [
    "Action", "Comedy", "Romance", "Thriller", 
    "Horror", "Drama", "Sci-Fi", "Fantasy"
  ];

  const storyPreferences = {
    beginnings: [
      "Action-packed start",
      "Slow build-up",
      "Mystery opening",
      "Character introduction",
      "In media res",
    ],
    endings: [
      "Happy ending",
      "Plot twist",
      "Open-ended",
      "Bittersweet",
      "Dramatic conclusion",
    ],
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setTimeout(() => {
        setTextInput("I'm feeling a bit down today and need something uplifting");
        setIsRecording(false);
      }, 3000);
    }
  };

  const handleTextSubmit = () => {
    if (textInput.trim()) {
      onMoodSelect(textInput, selectedGenre || undefined, {
        beginning: selectedBeginning,
        ending: selectedEnding,
      });
      setTextInput("");
    }
  };

  const handleMoodSelect = (mood: string) => {
    onMoodSelect(mood, selectedGenre, {
      beginning: selectedBeginning,
      ending: selectedEnding,
    });
  };

  return (
    <div className={`rounded-md p-4 ${className}`}>
      <h2 className="text-2xl font-bold text-white mb-6">What's Your Mood Today?</h2>
      
      <Tabs defaultValue="quick">
        <TabsList className="bg-gray-800 text-gray-200 mb-6">
          <TabsTrigger value="quick">Quick Select</TabsTrigger>
          <TabsTrigger value="describe">Describe Your Mood</TabsTrigger>
          <TabsTrigger value="preferences">Story Preferences</TabsTrigger>
        </TabsList>
        
        <TabsContent value="quick">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {moods.map((mood) => (
              <Button 
                key={mood.name}
                className={`h-16 ${mood.color} hover:opacity-90`}
                onClick={() => handleMoodSelect(mood.name)}
              >
                {mood.name}
              </Button>
            ))}
          </div>
          
          <div className="mt-6">
            <h3 className="text-white text-lg mb-2">Preferred Genre (Optional)</h3>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <Button 
                  key={genre}
                  variant={selectedGenre === genre ? "default" : "outline"} 
                  className="m-1"
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre}
                </Button>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="describe">
          <div className="space-y-4">
            <div>
              <label className="text-white text-lg mb-2 block">Tell us how you're feeling</label>
              <div className="flex gap-2">
                <Textarea 
                  placeholder="I'm feeling..." 
                  className="bg-gray-800 text-white" 
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                />
                <Button 
                  variant="outline" 
                  className="h-auto aspect-square"
                  onClick={toggleRecording}
                >
                  {isRecording ? <MicOff className="text-red-500" /> : <Mic />}
                </Button>
              </div>
              {isRecording && (
                <p className="text-red-400 text-sm mt-1 animate-pulse">Recording...</p>
              )}
            </div>
            
            <div className="flex justify-end">
              <Button onClick={handleTextSubmit}>Find Movies</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="preferences">
          <div className="space-y-6">
            <div>
              <h3 className="text-white text-lg mb-3">How should the story begin?</h3>
              <div className="flex flex-wrap gap-2">
                {storyPreferences.beginnings.map((beginning) => (
                  <Button 
                    key={beginning}
                    variant={selectedBeginning === beginning ? "default" : "outline"}
                    onClick={() => setSelectedBeginning(beginning)}
                    className="m-1"
                  >
                    {beginning}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-white text-lg mb-3">How should it end?</h3>
              <div className="flex flex-wrap gap-2">
                {storyPreferences.endings.map((ending) => (
                  <Button 
                    key={ending}
                    variant={selectedEnding === ending ? "default" : "outline"}
                    onClick={() => setSelectedEnding(ending)}
                    className="m-1"
                  >
                    {ending}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button 
                onClick={() => handleMoodSelect("custom")}
                className="bg-gradient-to-r from-purple-500 to-pink-500"
              >
                Find Movies
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
