import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Check, Shield, Clock, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeesAndTerms = () => {
  const pricingPlans = [
    {
      title: "Live-In Staff",
      placementFee: "₦50,000",
      monthlyFee: "₦15,000",
      features: [
        "Full background verification",
        "2 weeks replacement guarantee",
        "24/7 support hotline",
        "Training certification",
        "Contract management",
      ],
    },
    {
      title: "Live-Out Staff",
      placementFee: "₦40,000",
      monthlyFee: "₦10,000",
      features: [
        "Full background verification",
        "2 weeks replacement guarantee",
        "Business hours support",
        "Training certification",
        "Contract management",
      ],
    },
    {
      title: "Specialized Staff",
      placementFee: "₦75,000",
      monthlyFee: "₦20,000",
      features: [
        "Enhanced background check",
        "30 days replacement guarantee",
        "24/7 priority support",
        "Advanced training certification",
        "Dedicated account manager",
      ],
      popular: true,
    },
  ];

  const terms = [
    {
      icon: Shield,
      title: "Replacement Guarantee",
      description: "If your staff leaves or is unsatisfactory within the guarantee period, we provide a free replacement.",
    },
    {
      icon: Clock,
      title: "Payment Terms",
      description: "Placement fee is due upon staff assignment. Monthly management fees are due on the 1st of each month.",
    },
    {
      icon: RefreshCw,
      title: "Contract Duration",
      description: "Minimum contract period is 3 months. Early termination may incur a fee of one month's management charge.",
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Fees and Terms | TrustedHelp Nigeria</title>
        <meta name="description" content="Transparent pricing and terms for hiring verified domestic staff in Nigeria. View our placement fees, monthly charges, and service guarantees." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Simple, clear fees with no hidden charges. Know exactly what you're paying for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-card rounded-2xl p-8 shadow-lg border ${
                  plan.popular ? "border-primary ring-2 ring-primary/20" : "border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-4">{plan.title}</h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-primary">{plan.placementFee}</span>
                    <span className="text-muted-foreground">placement fee</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-semibold text-foreground">{plan.monthlyFee}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                  <Link to="/employers/application">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Terms & Conditions
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {terms.map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <term.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{term.title}</h3>
                <p className="text-muted-foreground">{term.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Hire Trusted Staff?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Submit your application today and get matched with verified domestic workers.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/employers/application">Start Your Application</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default FeesAndTerms;
