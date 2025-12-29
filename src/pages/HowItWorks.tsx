import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { 
  ClipboardList, 
  UserCheck, 
  Briefcase, 
  HeartHandshake,
  ArrowRight,
  CheckCircle,
  Shield,
  FileCheck,
  GraduationCap,
  Phone
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Submit Your Request",
    description: "Use our simple online form to tell us what type of domestic staff you need. Include your location, budget, and any special requirements.",
    details: [
      "Select staff type (maid, cook, driver, etc.)",
      "Choose live-in or live-out arrangement",
      "Specify your location and budget range",
      "Add any special requirements",
    ],
    duration: "Takes 3 minutes",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "We Review & Match",
    description: "Our team reviews your request and matches you with suitable candidates from our verified pool of domestic workers.",
    details: [
      "Request reviewed within 24 hours",
      "Candidates matched to your needs",
      "Shortlist presented for your review",
      "You select your preferred candidate",
    ],
    duration: "1-3 days",
  },
  {
    icon: Briefcase,
    step: "03",
    title: "Staff Deployed",
    description: "Once you approve a candidate, we handle all documentation and deploy the staff to your home.",
    details: [
      "Contract documentation prepared",
      "Staff briefed on your expectations",
      "Deployment to your home",
      "Initial settling-in support",
    ],
    duration: "3-7 days",
  },
  {
    icon: HeartHandshake,
    step: "04",
    title: "Ongoing Support",
    description: "We don't disappear after deployment. Our team provides continuous support and our replacement guarantee gives you peace of mind.",
    details: [
      "Regular check-ins with you",
      "Performance monitoring",
      "Complaint resolution",
      "Replacement within 48 hours if needed",
    ],
    duration: "Ongoing",
  },
];

const verificationSteps = [
  {
    icon: FileCheck,
    title: "Identity Verification",
    description: "Government-issued ID verification and address confirmation",
  },
  {
    icon: Shield,
    title: "Background Check",
    description: "Criminal background screening and police record verification",
  },
  {
    icon: Phone,
    title: "Guarantor Verification",
    description: "Contact and verification of at least two guarantors",
  },
  {
    icon: GraduationCap,
    title: "Training & Certification",
    description: "Professional training and skills certification",
  },
];

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How It Works - Get Verified Domestic Staff | TrustedHelp Nigeria</title>
        <meta 
          name="description" 
          content="Learn how TrustedHelp Nigeria connects you with verified domestic staff in 4 simple steps. Quick deployment, thorough verification, and replacement guarantee." 
        />
      </Helmet>
      <Layout>
        {/* Hero Banner */}
        <section className="gradient-hero py-16 md:py-20">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
                How TrustedHelp Works
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
                Getting verified domestic staff for your home is simple. Here's our proven process.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-border hidden md:block" />
                  )}

                  <div className="flex gap-6 mb-12">
                    {/* Step Number */}
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center shadow-primary">
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/50">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                            {step.title}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                            {step.duration}
                          </span>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle className="w-4 h-4 text-success shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Verification Process */}
        <section className="section-padding gradient-warm">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
                Our Verification Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Thorough Staff Verification
              </h2>
              <p className="text-muted-foreground text-lg">
                Every domestic worker goes through our rigorous 4-step verification before deployment.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {verificationSteps.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                Submit your request today and experience our seamless process.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/request" className="flex items-center gap-2">
                  Request Domestic Staff
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default HowItWorks;
