import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
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

const AvailableJobs = () => {
  const [filters, setFilters] = useState({
    role: "",
    location: "",
    arrangement: "",
  });

  const jobs = [
    {
      id: 1,
      title: "Live-in Maid",
      location: "Victoria Island, Lagos",
      salary: "₦40,000 - ₦50,000/month",
      arrangement: "Live-in",
      postedDate: "2 days ago",
      requirements: ["Cleaning", "Laundry", "Basic cooking"],
      description: "Family of 4 seeking experienced maid. Private quarters provided.",
      urgent: true,
    },
    {
      id: 2,
      title: "Cook",
      location: "Maitama, Abuja",
      salary: "₦60,000 - ₦80,000/month",
      arrangement: "Live-out",
      postedDate: "5 days ago",
      requirements: ["Nigerian cuisine", "Continental dishes", "Meal planning"],
      description: "Looking for experienced cook for busy household. Must be able to prepare various cuisines.",
      urgent: false,
    },
    {
      id: 3,
      title: "Nanny",
      location: "Lekki, Lagos",
      salary: "₦50,000 - ₦70,000/month",
      arrangement: "Live-in",
      postedDate: "1 day ago",
      requirements: ["Childcare experience", "First aid", "Educational activities"],
      description: "Caring nanny needed for 2 children (ages 3 and 5). Must be patient and nurturing.",
      urgent: true,
    },
    {
      id: 4,
      title: "Driver",
      location: "Ikoyi, Lagos",
      salary: "₦70,000 - ₦90,000/month",
      arrangement: "Live-out",
      postedDate: "3 days ago",
      requirements: ["Valid license", "5+ years experience", "Clean driving record"],
      description: "Personal driver for executive. Must know Lagos routes well.",
      urgent: false,
    },
    {
      id: 5,
      title: "Elderly Caregiver",
      location: "Wuse, Abuja",
      salary: "₦55,000 - ₦75,000/month",
      arrangement: "Live-in",
      postedDate: "1 week ago",
      requirements: ["Elderly care experience", "Medication management", "Patient disposition"],
      description: "Compassionate caregiver needed for elderly woman. Medical background preferred.",
      urgent: false,
    },
    {
      id: 6,
      title: "Steward",
      location: "GRA, Port Harcourt",
      salary: "₦35,000 - ₦45,000/month",
      arrangement: "Live-out",
      postedDate: "4 days ago",
      requirements: ["Housekeeping", "Serving", "Organizing"],
      description: "Steward needed for bachelor's apartment. Light cleaning and organization.",
      urgent: false,
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    if (filters.role && !job.title.toLowerCase().includes(filters.role.toLowerCase())) {
      return false;
    }
    if (filters.location && !job.location.includes(filters.location)) {
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
              Showing {filteredJobs.length} of {jobs.length} positions
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {filteredJobs.map((job, index) => (
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
                      <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                      {job.urgent && (
                        <Badge variant="destructive">Urgent</Badge>
                      )}
                      <Badge variant="outline">{job.arrangement}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Banknote className="w-4 h-4" />
                        {job.salary}
                      </span>
                      <span className="flex items-center gap-1">
                        <Home className="w-4 h-4" />
                        {job.arrangement}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Posted {job.postedDate}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req) => (
                        <Badge key={req} variant="secondary" className="text-xs">
                          {req}
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
