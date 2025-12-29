import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const trustBadges = [
    "Background Checked",
    "Professionally Trained",
    "Replacement Guarantee",
  ];

  return (
    <section className="relative gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-5rem)] py-16 lg:py-24">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span>Nigeria's Most Trusted Domestic Staff Agency</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Verified Domestic Staff{" "}
              <span className="text-accent-light">You Can Trust</span>{" "}
              in Your Home
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              We recruit, verify, train, and deploy reliable housemaids, cooks, drivers, and caregivers — 
              with replacement guarantees and peace of mind.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/20 text-success-foreground text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>{badge}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <Link to="/request" className="flex items-center gap-2">
                  Request Domestic Staff
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-primary-foreground/10 backdrop-blur-sm transform rotate-3" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 to-primary-foreground/5 transform -rotate-3" />
                <div className="relative rounded-3xl overflow-hidden bg-primary-foreground/10 h-full flex items-center justify-center">
                  {/* Placeholder for actual image - showing trust iconography */}
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                      <Shield className="w-12 h-12 text-accent-light" />
                    </div>
                    <p className="text-primary-foreground/60 text-sm">Happy Families Served</p>
                    <p className="text-4xl font-bold text-primary-foreground mt-2">2,500+</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-card rounded-xl shadow-elevated p-4 max-w-[180px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Verified Staff</p>
                    <p className="text-lg font-bold text-foreground">1,200+</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-elevated p-4 max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Replacement Rate</p>
                    <p className="text-lg font-bold text-foreground">48hrs</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 50L48 45.8C96 41.7 192 33.3 288 35.3C384 37.3 480 49.7 576 54.2C672 58.7 768 55.3 864 48.5C960 41.7 1056 31.3 1152 30.5C1248 29.7 1344 38.3 1392 42.7L1440 47V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
