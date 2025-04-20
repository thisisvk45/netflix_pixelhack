import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./button";
import { User } from "lucide-react";
import { ProfileAvatar } from "./profile-avatar";
import { HeaderWeather } from "./header-weather";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export function NetflixHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showProfiles, setShowProfiles] = useState(false);
  const [currentProfile, setCurrentProfile] = useState({
    id: 1,
    name: "User 1",
    imageUrl: "https://source.unsplash.com/random/200x200/?avatar",
  });

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "TV Shows", path: "/tv-shows" },
    { title: "Movies", path: "/movies" },
    { title: "New & Popular", path: "/new" },
    { title: "My List", path: "/my-list" },
    { title: "Mood Based", path: "/mood-based" },
    { title: "Host Movie", path: "/host-movie" },
  ];

  useEffect(() => {
    const savedProfile = localStorage.getItem("currentProfile");
    if (savedProfile) {
      setCurrentProfile(JSON.parse(savedProfile));
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-netflix-black to-transparent">
      <div className="flex items-center">
        <Link to="/" className="mr-8">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
            alt="Netflix India" 
            className="h-8"
          />
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex space-x-5">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`text-sm ${
                    location.pathname === link.path 
                      ? "text-white font-semibold" 
                      : "text-netflix-lightGray hover:text-white"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center space-x-6">
        <HeaderWeather />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <ProfileAvatar 
                name="" 
                imageUrl={currentProfile.imageUrl}
                className="w-8 h-8"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuItem 
              className="cursor-pointer"
              onClick={() => navigate("/profiles")}
            >
              <User className="mr-2 h-4 w-4" />
              <span>Switch Profiles</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <span>Account</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
