import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">TrustedHelp</span>
                <span className="text-xs text-primary-foreground/70 leading-tight">Nigeria</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Nigeria's trusted agency for verified domestic staff. We bring peace of mind to your home.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "How It Works", "About Us", "Request Staff"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Request Staff" ? "/request" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-base mb-4">Our Services</h4>
            <ul className="space-y-2">
              {["Housemaids", "Cooks", "Drivers", "Security Guards", "Nannies", "Caregivers"].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+2349000000000" className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>+234 900 000 0000</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@trustedhelp.ng" className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>hello@trustedhelp.ng</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Lagos, Abuja, Port Harcourt, Ibadan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} TrustedHelp Nigeria. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
