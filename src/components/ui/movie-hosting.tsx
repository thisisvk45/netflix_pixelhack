
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Users, Play, CirclePlay, CircleStop } from "lucide-react";
import { toast } from "sonner";

export function MovieHosting() {
  const [isHosting, setIsHosting] = useState(false);
  const [roomUrl, setRoomUrl] = useState("");
  const [viewers, setViewers] = useState(0);
  
  const startHosting = () => {
    setIsHosting(true);
    const fakeRoomUrl = `watch-together.netflix.com/room/${Math.random().toString(36).substr(2, 9)}`;
    setRoomUrl(fakeRoomUrl);
    toast.success("Room created successfully!");
    
    // Simulate viewers joining
    const interval = setInterval(() => {
      setViewers(prev => {
        const newCount = prev + Math.floor(Math.random() * 2);
        return newCount > 20 ? 20 : newCount; // Cap at 20 viewers
      });
    }, 5000);
    
    return () => clearInterval(interval);
  };
  
  const stopHosting = () => {
    setIsHosting(false);
    setRoomUrl("");
    setViewers(0);
    toast("Room closed");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
        {!isHosting ? (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Create a Watch Party</h2>
              <p className="text-gray-400">Host a movie and watch together with friends</p>
            </div>
            
            <Button
              onClick={startHosting}
              className="w-full py-6 text-lg bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700"
            >
              <Play className="mr-2 h-6 w-6" />
              Start Hosting
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Room Active</h2>
              <div className="flex items-center text-green-400">
                <Users className="mr-2 h-5 w-5" />
                <span>{viewers} viewers</span>
              </div>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-md">
              <p className="text-sm text-gray-400 mb-2">Share this link with friends:</p>
              <Input value={roomUrl} readOnly className="bg-gray-700" />
            </div>
            
            <div className="flex justify-between items-center">
              <Button variant="outline" className="gap-2">
                <CirclePlay className="h-5 w-5" />
                Playing Movie
              </Button>
              
              <Button 
                variant="destructive" 
                onClick={stopHosting}
                className="gap-2"
              >
                <CircleStop className="h-5 w-5" />
                End Session
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
