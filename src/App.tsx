import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import TvShows from "./pages/TvShows";
import Movies from "./pages/Movies";
import NewPopular from "./pages/NewPopular";
import MyList from "./pages/MyList";
import ProfilesPage from "./pages/ProfilesPage";
import NotFound from "./pages/NotFound";
import MoodBased from "./pages/MoodBased";
import HostMovie from "./pages/HostMovie";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/new" element={<NewPopular />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/mood-based" element={<MoodBased />} />
          <Route path="/host-movie" element={<HostMovie />} />
          <Route path="/profiles" element={<ProfilesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
