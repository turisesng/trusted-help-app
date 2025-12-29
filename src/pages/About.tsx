import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Heart, 
  Users, 
  Target,
  ArrowRight,
  CheckCircle,
  MapPin
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "We prioritize the safety of Nigerian homes by ensuring every domestic worker is thoroughly verified.",
  },
  {
    icon: Heart,
    title: "Dignity & Respect",
    description: "We treat domestic workers with dignity, ensuring fair pay and good working conditions.",
  },
  {
    icon: Users,
    title: "Family First",
    description: "We understand the importance of finding the right person for your home and family.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We're committed to delivering excellent service and exceeding expectations.",
  },
];

const locations = ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano", "Enugu"];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - TrustedHelp Nigeria | Trusted Domestic Staff Agency</title>
        <meta 
          name="description" 
          content="Learn about TrustedHelp Nigeria, the trusted agency connecting Nigerian families with verified, trained domestic staff since 2020." 
        />
      </Helmet>
      <Layout>
        {/* Hero Banner */}
        <section className="gradient-hero py-16 md:py-24">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
                  About TrustedHelp Nigeria
                </h1>
                <p className="text-primary-foreground/80 text-lg md:text-xl mb-6">
                  We're on a mission to solve the trust problem in Nigeria's domestic help industry. 
                  By verifying, training, and supporting domestic workers, we bring peace of mind to Nigerian homes.
                </p>
                <div className="flex flex-wrap gap-8">
                  <div>
                    <p className="text-4xl font-bold text-accent-light">2,500+</p>
                    <p className="text-primary-foreground/70">Happy Families</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-accent-light">1,200+</p>
                    <p className="text-primary-foreground/70">Verified Staff</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-accent-light">6</p>
                    <p className="text-primary-foreground/70">Cities Covered</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="aspect-square max-w-md mx-auto bg-primary-foreground/10 rounded-3xl flex items-center justify-center">
                  <Shield className="w-32 h-32 text-primary-foreground/20" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Solving Nigeria's Domestic Help Challenge
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none text-muted-foreground"
              >
                <p className="text-lg leading-relaxed mb-6">
                  Finding trustworthy domestic help in Nigeria has always been a challenge. Too many families 
                  have experienced the stress of hiring someone informally—only to face issues with theft, 
                  absenteeism, or sudden disappearance.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  TrustedHelp Nigeria was born from this frustration. We set out to create a professional, 
                  accountable system that protects both families and domestic workers.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Today, we've served over 2,500 families across Nigeria's major cities. Our verification 
                  process, training programs, and replacement guarantee have made us the trusted choice 
                  for Nigerian households seeking peace of mind.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding gradient-warm">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What We Stand For
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
                Our Coverage
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Serving Major Nigerian Cities
              </h2>
              <p className="text-muted-foreground text-lg">
                We currently operate in these cities and are expanding rapidly.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {locations.map((location, index) => (
                <motion.div
                  key={location}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card rounded-xl p-4 shadow-soft border border-border/50 text-center hover:shadow-medium transition-shadow"
                >
                  <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">{location}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding gradient-warm">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
                  Why Choose TrustedHelp
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  The TrustedHelp Difference
                </h2>
                <ul className="space-y-4">
                  {[
                    "Thorough 4-step verification for all domestic workers",
                    "Professional training before deployment",
                    "48-hour replacement guarantee",
                    "Ongoing support and complaint resolution",
                    "Secure payment handling",
                    "Contract documentation and management",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-medium border border-border/50"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to experience the difference?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of Nigerian families who trust us for their domestic staffing needs.
                </p>
                <Button variant="accent" size="lg" asChild className="w-full">
                  <Link to="/request" className="flex items-center justify-center gap-2">
                    Request Domestic Staff
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
