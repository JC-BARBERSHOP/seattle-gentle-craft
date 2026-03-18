import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BestBarberSeattle from "./pages/BestBarberSeattle";
import MensHaircutSeattle from "./pages/MensHaircutSeattle";
import FadeHaircutSeattle from "./pages/FadeHaircutSeattle";
import BeardTrimSeattle from "./pages/BeardTrimSeattle";
import SeattleBarbershopNearMe from "./pages/SeattleBarbershopNearMe";
import Book from "./pages/Book";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/best-barber-seattle" element={<BestBarberSeattle />} />
          <Route path="/mens-haircut-seattle" element={<MensHaircutSeattle />} />
          <Route path="/fade-haircut-seattle" element={<FadeHaircutSeattle />} />
          <Route path="/beard-trim-seattle" element={<BeardTrimSeattle />} />
          <Route path="/seattle-barbershop-near-me" element={<SeattleBarbershopNearMe />} />
          <Route path="/book" element={<Book />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
