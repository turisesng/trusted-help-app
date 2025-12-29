import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Utensils, 
  Car, 
  Shield as ShieldIcon, 
  Baby, 
  Heart, 
  Home,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Housemaids",
    description: "Live-in or live-out housemaids for cleaning, laundry, and household chores.",
    features: ["Live-in Available", "Daily Cleaning", "Laundry Services"],
  },
  {
    icon: Utensils,
    title: "Cooks",
    description: "Experienced cooks for Nigerian and continental cuisine preparation.",
    features: ["Nigerian Cuisine", "Continental Dishes", "Meal Prep"],
  },
  {
    icon: Car,
    title: "Drivers",
    description: "Licensed, verified drivers for personal and family transportation needs.",
    features: ["Licensed Drivers", "School Runs", "Errands"],
  },
  {
    icon: ShieldIcon,
    title: "Security Guards",
    description: "Trained security personnel for residential and estate protection.",
    features: ["Gate Security", "Night Watch", "Background Checked"],
  },
  {
    icon: Baby,
    title: "Nannies",
    description: "Caring nannies for infant and child care, with training in early childhood.",
    features: ["Infant Care", "Child Supervision", "Homework Help"],
  },
  {
    icon: Heart,
    title: "Caregivers",
    description: "Compassionate caregivers for elderly and special needs family members.",
    features: ["Elderly Care", "Medication Reminders", "Companionship"],
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Domestic Staff for Every Need
          </h2>
          <p className="text-muted-foreground text-lg">
            From housemaids to caregivers, we provide verified and trained domestic workers 
            to meet your household requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to="/request"
                className="group block h-full bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center text-primary text-sm font-medium">
                  <span>Request Now</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
