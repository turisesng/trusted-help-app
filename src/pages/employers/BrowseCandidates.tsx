import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const BrowseCandidates = () => {
  const [filters, setFilters] = useState({
    role: "",
    location: "",
    arrangement: "",
    search: "",
  });

  const candidates = [
    {
      id: 1,
      name: "Blessing A.",
      role: "Live-in Maid",
      experience: "5 years",
      location: "Lagos",
      skills: ["Cleaning", "Laundry", "Cooking basics"],
      verified: true,
      rating: 4.8,
      available: true,
    },
    {
      id: 2,
      name: "Emmanuel O.",
      role: "Cook",
      experience: "8 years",
      location: "Abuja",
      skills: ["Nigerian cuisine", "Continental", "Baking"],
      verified: true,
      rating: 4.9,
      available: true,
    },
    {
      id: 3,
      name: "Grace N.",
      role: "Nanny",
      experience: "6 years",
      location: "Lagos",
      skills: ["Childcare", "First Aid", "Educational activities"],
      verified: true,
      rating: 4.7,
      available: false,
    },
    {
      id: 4,
      name: "Joseph M.",
      role: "Driver",
      experience: "10 years",
      location: "Port Harcourt",
      skills: ["Defensive driving", "Vehicle maintenance", "City navigation"],
      verified: true,
      rating: 4.9,
      available: true,
    },
    {
      id: 5,
      name: "Fatima U.",
      role: "Elderly Caregiver",
      experience: "7 years",
      location: "Abuja",
      skills: ["Medication management", "Personal care", "Companionship"],
      verified: true,
      rating: 5.0,
      available: true,
    },
    {
      id: 6,
      name: "Samuel K.",
      role: "Steward",
      experience: "4 years",
      location: "Lagos",
      skills: ["Housekeeping", "Serving", "Event support"],
      verified: true,
      rating: 4.6,
      available: true,
    },
  ];

  const filteredCandidates = candidates.filter((candidate) => {
    if (filters.role && !candidate.role.toLowerCase().includes(filters.role.toLowerCase())) {
      return false;
    }
    if (filters.location && candidate.location !== filters.location) {
      return false;
    }
    if (filters.search && !candidate.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <Layout>
      <Helmet>
        <title>Browse Candidates | TrustedHelp Nigeria</title>
        <meta name="description" content="Browse our database of verified domestic workers. Find trusted maids, cooks, drivers, nannies, and more for your home." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse Verified Candidates
            </h1>
            <p className="text-muted-foreground">
              All candidates are background-checked, trained, and ready to serve your household
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name..."
                className="pl-10"
                value={filters.search}
                onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
              />
            </div>
            <Select onValueChange={(value) => setFilters((prev) => ({ ...prev, role: value }))}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Staff Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maid">Maid</SelectItem>
                <SelectItem value="cook">Cook</SelectItem>
                <SelectItem value="driver">Driver</SelectItem>
                <SelectItem value="nanny">Nanny</SelectItem>
                <SelectItem value="steward">Steward</SelectItem>
                <SelectItem value="caregiver">Caregiver</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => setFilters((prev) => ({ ...prev, location: value }))}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Lagos">Lagos</SelectItem>
                <SelectItem value="Abuja">Abuja</SelectItem>
                <SelectItem value="Port Harcourt">Port Harcourt</SelectItem>
                <SelectItem value="Ibadan">Ibadan</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              onClick={() => setFilters({ role: "", location: "", arrangement: "", search: "" })}
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Candidates Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              Showing {filteredCandidates.length} of {candidates.length} candidates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCandidates.map((candidate, index) => (
              <motion.div
                key={candidate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold text-lg">
                      {candidate.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        {candidate.name}
                        {candidate.verified && (
                          <Shield className="w-4 h-4 text-primary" />
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground">{candidate.role}</p>
                    </div>
                  </div>
                  <Badge variant={candidate.available ? "default" : "secondary"}>
                    {candidate.available ? "Available" : "Assigned"}
                  </Badge>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {candidate.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {candidate.experience} experience
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-amber-500" />
                    {candidate.rating} rating
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {candidate.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Button asChild className="w-full" disabled={!candidate.available}>
                  <Link to="/employers/application">
                    {candidate.available ? "Request This Candidate" : "Currently Unavailable"}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {filteredCandidates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No candidates match your filters.</p>
              <Button
                variant="link"
                onClick={() => setFilters({ role: "", location: "", arrangement: "", search: "" })}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Submit a custom request and we'll match you with the perfect candidate from our extended network.
          </p>
          <Button asChild size="lg">
            <Link to="/request">Submit Custom Request</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default BrowseCandidates;
