import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
import { supabase } from "@/lib/supabaseClient";

interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  roleApplying: string;
  experience: string;
  location: string;
  skills: string[];
  verified: boolean;
  rating: number;
  availability: string;
  // Add other fields as necessary from your Supabase table
}

const BrowseCandidates = () => {
  const [filters, setFilters] = useState({
    role: "",
    location: "",
    arrangement: "",
    search: "",
  });
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('candidates').select('*');
        if (error) {
          throw error;
        }
        setCandidates(data as Candidate[]);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCandidates();
  }, []);

  const filteredCandidates = candidates.filter((candidate) => {
    if (filters.role && !candidate.roleApplying.toLowerCase().includes(filters.role.toLowerCase())) {
      return false;
    }
    if (filters.location && candidate.state !== filters.location) {
      return false;
    }
    if (filters.search && !candidate.firstName.toLowerCase().includes(filters.search.toLowerCase()) && !candidate.lastName.toLowerCase().includes(filters.search.toLowerCase())) {
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
            {loading && <p className="text-center text-muted-foreground col-span-full">Loading candidates...</p>}
            {error && <p className="text-center text-destructive col-span-full">Error: {error}</p>}
            {!loading && !error && filteredCandidates.length === 0 && (
              <div className="text-center py-12 col-span-full">
                <p className="text-muted-foreground">No candidates match your filters.</p>
                <Button
                  variant="link"
                  onClick={() => setFilters({ role: "", location: "", arrangement: "", search: "" })}
                >
                  Clear all filters
                </Button>
              </div>
            )}
            {!loading && !error && filteredCandidates.map((candidate, index) => (
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
                      {candidate.firstName.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        {candidate.firstName} {candidate.lastName.charAt(0)}.
                        {candidate.verified && (
                          <Shield className="w-4 h-4 text-primary" />
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground">{candidate.roleApplying}</p>
                    </div>
                  </div>
                  <Badge variant={candidate.availability === "immediately" || candidate.availability === "1-week" ? "default" : "secondary"}>
                    {candidate.availability === "immediately" || candidate.availability === "1-week" ? "Available" : "Assigned"}
                  </Badge>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {candidate.state}
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

                <Button asChild className="w-full" disabled={!(candidate.availability === "immediately" || candidate.availability === "1-week")}>
                  <Link to="/employers/application">
                    {(candidate.availability === "immediately" || candidate.availability === "1-week") ? "Request This Candidate" : "Currently Unavailable"}
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
