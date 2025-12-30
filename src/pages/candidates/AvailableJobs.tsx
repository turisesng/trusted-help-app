import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Banknote, Home, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";

interface Job {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  homeType: string;
  householdSize: string;
  staffTypes: string[];
  arrangement: string;
  startDate: string;
  accommodation: string;
  additionalNotes: string;
  agreeTerms: boolean;
  created_at: string;
}

const AvailableJobs = () => {
  const [filters, setFilters] = useState({
    role: "",
    location: "",
    arrangement: "",
  });
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('employer_applications').select('*');
        if (error) {
          throw error;
        }
        setJobs(data as Job[]);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    if (filters.role && !job.staffTypes.map(type => type.toLowerCase()).includes(filters.role.toLowerCase())) {
      return false;
    }
    if (filters.location && job.state !== filters.location) {
      return false;
    }
    if (filters.arrangement && job.arrangement !== filters.arrangement) {
      return false;
    }
    return true;
  });

  return (
    <Layout>
      <Helmet>
        <title>Available Jobs | TrustedHelp Nigeria</title>
        <meta name="description" content="Browse available domestic work positions. Find jobs as a maid, cook, driver, nanny, or caregiver with verified employers." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 via-background to-primary/5 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Available Job Openings
            </h1>
            <p className="text-muted-foreground">
              Find your next position with verified employers across Nigeria
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center">
            <Select onValueChange={(value) => setFilters((prev) => ({ ...prev, role: value }))}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Job Type" />
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
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => setFilters((prev) => ({ ...prev, arrangement: value }))}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Arrangement" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Live-in">Live-in</SelectItem>
                <SelectItem value="Live-out">Live-out</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              onClick={() => setFilters({ role: "", location: "", arrangement: "" })}
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-muted-foreground">
              {loading && "Loading jobs..."}
              {error && `Error: ${error}`}
              {!loading && !error && `Showing ${filteredJobs.length} of ${jobs.length} positions`}
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {!loading && !error && filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No jobs match your filters.</p>
                <Button
                  variant="link"
                  onClick={() => setFilters({ role: "", location: "", arrangement: "" })}
                >
                  Clear all filters
                </Button>
              </div>
            )}
            {!loading && !error && filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {job.staffTypes.map((type) => (
                        <h3 key={type} className="text-xl font-semibold text-foreground">{type}</h3>
                      ))}
                      {/* We don't have an 'urgent' field in employer_applications directly, so this is removed for now */}
                      {job.arrangement && <Badge variant="outline">{job.arrangement}</Badge>}
                    </div>
                    <p className="text-muted-foreground mb-4">Seeking staff for a {job.homeType} in {job.city}, {job.state} for {job.householdSize} people. {job.additionalNotes}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.address}, {job.city}, {job.state}
                      </span>
                      {job.startDate && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Start Date: {new Date(job.startDate).toLocaleDateString()}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Home className="w-4 h-4" />
                        {job.homeType} ({job.householdSize} people)
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.staffTypes.map((type) => (
                        <Badge key={type} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="shrink-0">
                    <Link to="/candidates/apply">Apply Now</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No jobs match your filters.</p>
              <Button
                variant="link"
                onClick={() => setFilters({ role: "", location: "", arrangement: "" })}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-accent-foreground mb-4">
            Don't See the Right Position?
          </h2>
          <p className="text-accent-foreground/80 mb-6 max-w-xl mx-auto">
            Submit your application anyway! We'll match you with suitable employers as new positions open.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/candidates/apply">Submit Your Application</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AvailableJobs;
