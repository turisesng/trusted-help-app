import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import RequestStaff from "./pages/RequestStaff";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Employer pages
import FeesAndTerms from "./pages/employers/FeesAndTerms";
import FamilyApplication from "./pages/employers/FamilyApplication";
import BrowseCandidates from "./pages/employers/BrowseCandidates";

// Candidate pages
import CandidateApplication from "./pages/candidates/ApplicationForm";
import AvailableJobs from "./pages/candidates/AvailableJobs";
import KnowYourRights from "./pages/candidates/KnowYourRights";
import ResumeBuilder from "./pages/candidates/ResumeBuilder";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/request" element={<RequestStaff />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about" element={<About />} />
            
            {/* Employer Routes */}
            <Route path="/employers/fees" element={<FeesAndTerms />} />
            <Route path="/employers/application" element={<FamilyApplication />} />
            <Route path="/employers/browse" element={<BrowseCandidates />} />
            
            {/* Candidate Routes */}
            <Route path="/candidates/apply" element={<CandidateApplication />} />
            <Route path="/candidates/jobs" element={<AvailableJobs />} />
            <Route path="/candidates/rights" element={<KnowYourRights />} />
            <Route path="/candidates/resume" element={<ResumeBuilder />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
