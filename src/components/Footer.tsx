import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img
              src={logoWhite}
              alt="JC Barbershop Seattle"
              className="h-7 w-auto mb-4"
            />
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Seattle's elevated standard in men's grooming. Precision haircuts, 
              luxury grooming, and an experience designed for modern professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-foreground mb-6">
              Services
            </h4>
            <nav className="space-y-3">
              {[
                { label: "Best Barber in Seattle", to: "/best-barber-seattle" },
                { label: "Men's Haircut Seattle", to: "/mens-haircut-seattle" },
                { label: "Fade Haircut Seattle", to: "/fade-haircut-seattle" },
                { label: "Beard Trim Seattle", to: "/beard-trim-seattle" },
                { label: "Barbershop Near Me", to: "/seattle-barbershop-near-me" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-foreground mb-6">
              Contact
            </h4>
            <div className="space-y-3 font-sans text-sm text-muted-foreground">
              <p>Joan Cruz Barbershop</p>
              <p>Seattle, WA</p>
              <a href="tel:+12065550100" className="block hover:text-primary transition-colors">
                (206) 555-0100
              </a>
            </div>
          </div>
        </div>

        <div className="divider-subtle mt-12 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} Joan Cruz Barbershop. All rights reserved.
          </p>
          <p className="font-sans text-xs text-muted-foreground">
            Premium Men's Grooming · Seattle, Washington
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
