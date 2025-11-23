import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ConstituentServices from "./pages/ConstituentServices";
import NationalSecurity from "./pages/NationalSecurity";
import EconomicDevelopment from "./pages/EconomicDevelopment";
import Housing from "./pages/Housing";
import Healthcare from "./pages/Healthcare";
import CleanEnergy from "./pages/CleanEnergy";
import CivicEngagement from "./pages/CivicEngagement";
import InternalDashboard from "./pages/InternalDashboard";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/constituent-services" element={<ConstituentServices />} />
            <Route path="/national-security" element={<NationalSecurity />} />
            <Route path="/economic-development" element={<EconomicDevelopment />} />
            <Route path="/housing" element={<Housing />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/clean-energy" element={<CleanEnergy />} />
            <Route path="/civic-engagement" element={<CivicEngagement />} />
            <Route path="/internal" element={<InternalDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
