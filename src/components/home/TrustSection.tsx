import { motion } from "framer-motion";
import { Shield, RefreshCw, Clock, Award, Users, Phone } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Thoroughly Verified",
    description: "Government ID checks, guarantor verification, and police background checks on all staff.",
  },
  {
    icon: Award,
    title: "Professionally Trained",
    description: "All our domestic workers undergo professional training before deployment to your home.",
  },
  {
    icon: RefreshCw,
    title: "Replacement Guarantee",
    description: "If a staff member doesn't meet expectations, we provide a replacement within 48 hours.",
  },
  {
    icon: Clock,
    title: "Quick Deployment",
    description: "Get matched with suitable domestic staff and have them deployed within 7 days.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Our team handles all complaints, payments, and ensures smooth working relationships.",
  },
  {
    icon: Phone,
    title: "Direct Communication",
    description: "Stay connected with easy WhatsApp-based communication for updates and support.",
  },
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Peace of Mind for Your Home
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We understand the importance of trust when inviting someone into your home. 
              That's why we've built a comprehensive verification and support system.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-secondary rounded-xl">
                <p className="text-2xl md:text-3xl font-bold text-primary">2,500+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Happy Families</p>
              </div>
              <div className="text-center p-4 bg-secondary rounded-xl">
                <p className="text-2xl md:text-3xl font-bold text-primary">1,200+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Verified Staff</p>
              </div>
              <div className="text-center p-4 bg-secondary rounded-xl">
                <p className="text-2xl md:text-3xl font-bold text-primary">98%</p>
                <p className="text-xs md:text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-xl p-5 shadow-soft border border-border/50 hover:shadow-medium transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
