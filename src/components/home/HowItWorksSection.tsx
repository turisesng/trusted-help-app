import { motion } from "framer-motion";
import { ClipboardList, UserCheck, Briefcase, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Submit Your Request",
    description: "Tell us what type of domestic staff you need, your location, and preferences. Takes less than 3 minutes.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "We Match & Verify",
    description: "We match you with verified candidates from our pool. All staff undergo background checks and training.",
  },
  {
    icon: Briefcase,
    step: "03",
    title: "Staff Deployed",
    description: "Your selected staff is deployed to your home within 7 days. We handle all documentation.",
  },
  {
    icon: HeartHandshake,
    step: "04",
    title: "Ongoing Support",
    description: "We provide continuous support, performance monitoring, and replacement guarantee if needed.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding gradient-warm">
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
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Trusted Staff in 4 Simple Steps
          </h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined process ensures you get verified domestic staff quickly and hassle-free.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] right-0 h-0.5 bg-border" />
              )}

              <div className="relative bg-card rounded-2xl p-6 shadow-soft border border-border/50 h-full">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold text-sm flex items-center justify-center shadow-accent">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
