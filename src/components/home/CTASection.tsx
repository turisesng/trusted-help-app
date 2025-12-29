import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Find Trusted Domestic Help?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Submit your request today and get matched with verified, trained domestic staff within days.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="xl" asChild>
              <Link to="/request" className="flex items-center gap-2">
                Request Staff Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="https://wa.me/2349000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* Phone */}
          <p className="text-primary-foreground/70 flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Or call us: <a href="tel:+2349000000000" className="text-primary-foreground font-semibold hover:underline">+234 900 000 0000</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
