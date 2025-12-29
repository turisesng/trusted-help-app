import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { 
  Shield, 
  Clock, 
  Banknote, 
  Home, 
  Heart, 
  Scale, 
  Phone, 
  AlertTriangle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const KnowYourRights = () => {
  const rights = [
    {
      icon: Banknote,
      title: "Fair Wages",
      description: "You are entitled to receive agreed-upon wages on time. Employers must pay at least the agreed salary without unlawful deductions.",
    },
    {
      icon: Clock,
      title: "Reasonable Working Hours",
      description: "You have the right to reasonable working hours with adequate rest periods. Live-in staff should have clearly defined work hours and rest days.",
    },
    {
      icon: Home,
      title: "Safe Living Conditions",
      description: "Live-in workers are entitled to safe, clean, and private accommodation with access to basic amenities like running water and electricity.",
    },
    {
      icon: Heart,
      title: "Respectful Treatment",
      description: "You deserve to be treated with dignity and respect. Physical, verbal, or emotional abuse is never acceptable and is against the law.",
    },
    {
      icon: Shield,
      title: "Protection from Exploitation",
      description: "You have the right to be protected from forced labor, trafficking, and any form of exploitation. Report any suspicious activity.",
    },
    {
      icon: Scale,
      title: "Access to Justice",
      description: "If your rights are violated, you can seek help from labor authorities, law enforcement, or organizations that protect workers' rights.",
    },
  ];

  const faqs = [
    {
      question: "What should I do if my employer doesn't pay my salary?",
      answer: "First, have a calm conversation with your employer about the missed payment. If they don't respond, contact TrustedHelp immediately. We will mediate on your behalf. Keep records of all agreed payments and any communications about salary.",
    },
    {
      question: "Can my employer take my ID documents?",
      answer: "No. It is illegal for anyone to confiscate your identification documents. Your ID belongs to you. If an employer is holding your documents, this is a serious violation of your rights.",
    },
    {
      question: "What if I'm being mistreated or abused?",
      answer: "Your safety is the priority. If you're in immediate danger, leave if you can and call emergency services. Contact TrustedHelp's support line or the National Human Rights Commission. We take all reports of abuse seriously.",
    },
    {
      question: "Am I entitled to days off?",
      answer: "Yes. Even live-in workers are entitled to rest days. The standard is at least one full day off per week. This should be agreed upon when you start the job.",
    },
    {
      question: "What if I want to leave my job?",
      answer: "You have the right to leave any job. We recommend giving notice as agreed in your contract (usually 2 weeks). Contact TrustedHelp and we can help you find new placement.",
    },
    {
      question: "Can my employer search my belongings?",
      answer: "No. You have a right to privacy. While employers may implement security measures, searching personal belongings without consent is a violation of your rights.",
    },
  ];

  const emergencyContacts = [
    { name: "TrustedHelp Support", number: "+234 800 000 0000" },
    { name: "National Human Rights Commission", number: "+234 9 461 6070" },
    { name: "Police Emergency", number: "112" },
    { name: "NAPTIP (Anti-Trafficking)", number: "0800 0000 100" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Know Your Rights | TrustedHelp Nigeria</title>
        <meta name="description" content="Understand your rights as a domestic worker in Nigeria. Learn about fair wages, working conditions, and how to report violations." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 via-background to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Know Your Rights
            </h1>
            <p className="text-lg text-muted-foreground">
              As a domestic worker, you have rights that must be respected. Understanding these rights protects you and ensures fair treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rights Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Your Fundamental Rights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {rights.map((right, index) => (
              <motion.div
                key={right.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <right.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{right.title}</h3>
                <p className="text-muted-foreground text-sm">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <h2 className="text-2xl font-bold text-foreground">Warning Signs of Exploitation</h2>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 shrink-0" />
                  <span className="text-muted-foreground">Employer takes or holds your identification documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 shrink-0" />
                  <span className="text-muted-foreground">Not allowed to leave the premises or contact family</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 shrink-0" />
                  <span className="text-muted-foreground">Physical, verbal, or sexual abuse of any kind</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 shrink-0" />
                  <span className="text-muted-foreground">Wages consistently withheld or not paid</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 shrink-0" />
                  <span className="text-muted-foreground">Forced to work excessive hours with no rest</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 shrink-0" />
                  <span className="text-muted-foreground">Threats against you or your family</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-lg border border-border px-6"
                >
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold text-foreground">Emergency Contacts</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {emergencyContacts.map((contact) => (
                <div
                  key={contact.name}
                  className="bg-card rounded-xl p-4 shadow-sm border border-border flex items-center justify-between"
                >
                  <span className="font-medium text-foreground">{contact.name}</span>
                  <a
                    href={`tel:${contact.number.replace(/\s/g, "")}`}
                    className="text-accent font-semibold hover:underline"
                  >
                    {contact.number}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-accent-foreground mb-4">
            Need Help or Have Questions?
          </h2>
          <p className="text-accent-foreground/80 mb-6 max-w-xl mx-auto">
            Our team is here to support you. Don't hesitate to reach out if you have concerns about your working conditions.
          </p>
          <Button asChild size="lg" variant="secondary">
            <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer">
              Contact Support on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default KnowYourRights;
