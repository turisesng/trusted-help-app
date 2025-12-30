import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [employerOpen, setEmployerOpen] = useState(false);
  const [candidateOpen, setCandidateOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About Us", href: "/about" },
  ];

  const employerLinks = [
    { name: "Fees and Terms", href: "/employers/fees" },
    { name: "Family Application", href: "/employers/application" },
    { name: "Browse Candidates", href: "/employers/browse" },
  ];

  const candidateLinks = [
    { name: "Application Form", href: "/candidates/apply" },
    { name: "Available Jobs", href: "/candidates/jobs" },
    { name: "Know Your Rights", href: "/candidates/rights" },
    { name: "Resume Builder", href: "/candidates/resume" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground leading-tight">TrustedHelp</span>
              <span className="text-xs text-muted-foreground leading-tight">Nigeria</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* For Employers Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary outline-none">
                For Employers
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-card border-border">
                {employerLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link to={link.href} className="cursor-pointer">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* For Candidates Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary outline-none">
                For Candidates
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-card border-border">
                {candidateLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link to={link.href} className="cursor-pointer">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:+2349000000000" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
            </Button>
            <Button variant="accent" size="default" asChild>
              <Link to="/request">Request Staff</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border"
          >
            <div className="container-custom py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-base font-medium transition-colors ${
                    isActive(link.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile For Employers */}
              <div className="pt-2">
                <button
                  onClick={() => setEmployerOpen(!employerOpen)}
                  className="flex items-center justify-between w-full py-2 text-base font-medium text-muted-foreground"
                >
                  For Employers
                  <ChevronDown className={`w-4 h-4 transition-transform ${employerOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {employerOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-1"
                    >
                      {employerLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile For Candidates */}
              <div>
                <button
                  onClick={() => setCandidateOpen(!candidateOpen)}
                  className="flex items-center justify-between w-full py-2 text-base font-medium text-muted-foreground"
                >
                  For Candidates
                  <ChevronDown className={`w-4 h-4 transition-transform ${candidateOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {candidateOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-1"
                    >
                      {candidateLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-3 flex flex-col gap-2">
                <Button variant="outline" size="lg" asChild className="w-full">
                  <a href="tel:+2349000000000" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Call Us</span>
                  </a>
                </Button>
                <Button variant="accent" size="lg" asChild className="w-full">
                  <Link to="/request" onClick={() => setIsOpen(false)}>Request Staff</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
