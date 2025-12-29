import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Utensils, 
  Car, 
  Shield as ShieldIcon, 
  Baby, 
  Heart,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    id: "housemaid",
    icon: Home,
    title: "Housemaids",
    subtitle: "Live-in & Live-out Options",
    description: "Our trained housemaids handle all household chores with professionalism and care. From cleaning to laundry, they keep your home spotless.",
    features: [
      "Daily & deep cleaning",
      "Laundry & ironing",
      "Kitchen maintenance",
      "General household organization",
      "Live-in or live-out arrangements",
    ],
    priceRange: "₦30,000 - ₦80,000/month",
  },
  {
    id: "cook",
    icon: Utensils,
    title: "Cooks",
    subtitle: "Nigerian & Continental Cuisine",
    description: "Experienced cooks who prepare delicious meals for your family. Trained in Nigerian dishes and continental cuisine.",
    features: [
      "Nigerian cuisine expertise",
      "Continental dishes",
      "Meal planning & prep",
      "Kitchen hygiene certified",
      "Special dietary needs",
    ],
    priceRange: "₦40,000 - ₦100,000/month",
  },
  {
    id: "driver",
    icon: Car,
    title: "Drivers",
    subtitle: "Licensed & Experienced",
    description: "Professional, licensed drivers for your personal and family transportation needs. Reliable for school runs, errands, and more.",
    features: [
      "Valid driver's license",
      "Defensive driving trained",
      "School runs & errands",
      "Vehicle maintenance awareness",
      "Route planning skills",
    ],
    priceRange: "₦50,000 - ₦120,000/month",
  },
  {
    id: "security",
    icon: ShieldIcon,
    title: "Security Guards",
    subtitle: "Trained & Vetted",
    description: "Trained security personnel to protect your home and family. Background-checked for your peace of mind.",
    features: [
      "Gate security management",
      "Night watch duties",
      "Visitor screening",
      "Emergency response trained",
      "Patrol & monitoring",
    ],
    priceRange: "₦35,000 - ₦70,000/month",
  },
  {
    id: "nanny",
    icon: Baby,
    title: "Nannies",
    subtitle: "Childcare Specialists",
    description: "Caring nannies trained in early childhood care. They provide supervision, education support, and nurturing care.",
    features: [
      "Infant & toddler care",
      "Child supervision",
      "Homework assistance",
      "Engaging activities",
      "First aid certified",
    ],
    priceRange: "₦40,000 - ₦100,000/month",
  },
  {
    id: "caregiver",
    icon: Heart,
    title: "Caregivers",
    subtitle: "Elderly & Special Needs",
    description: "Compassionate caregivers for elderly family members and those with special needs. Trained in patient care.",
    features: [
      "Elderly care expertise",
      "Medication reminders",
      "Mobility assistance",
      "Companionship",
      "Basic nursing skills",
    ],
    priceRange: "₦50,000 - ₦150,000/month",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Housemaids, Cooks, Drivers, Nannies | TrustedHelp Nigeria</title>
        <meta 
          name="description" 
          content="Explore our verified domestic staff services: housemaids, cooks, drivers, security guards, nannies, and caregivers. All background-checked and trained." 
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
                Our Domestic Staff Services
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
                Verified, trained, and ready to serve. Choose from our range of domestic staff categories.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                      <service.icon className="w-4 h-4" />
                      {service.subtitle}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-foreground">
                          <CheckCircle className="w-5 h-5 text-success shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="px-4 py-2 bg-secondary rounded-lg">
                        <span className="text-sm text-muted-foreground">Price Range:</span>
                        <span className="ml-2 font-semibold text-foreground">{service.priceRange}</span>
                      </div>
                      <Button variant="accent" asChild>
                        <Link to="/request" className="flex items-center gap-2">
                          Request {service.title}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-square max-w-md mx-auto bg-secondary rounded-3xl flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-primary/30" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding gradient-trust">
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
                Submit your request today and get matched with verified staff within days.
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

export default Services;
