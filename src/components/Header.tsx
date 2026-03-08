import { motion } from "framer-motion";
import { Phone, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logoWhite from "@/assets/logo-white.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  const scrollToSection = (id: string) => {
    if (!isHome) return;
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center">
          <motion.img
            src={logoWhite}
            alt="JC Barbershop - Premium Men's Grooming Seattle"
            className="h-10 md:h-12 w-auto"
            whileHover={{ opacity: 0.8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {isHome ? (
            <>
              {["About", "Services", "Gallery", "Location"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="font-sans text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </>
          ) : (
            <Link
              to="/"
              className="font-sans text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Home
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+12065550100"
            className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-sans text-sm">(206) 555-0100</span>
          </a>
          <a
            href="#booking"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                scrollToSection("booking");
              }
            }}
            className="font-sans text-xs tracking-[0.2em] uppercase px-6 py-3 bg-primary text-primary-foreground hover:bg-gold-light transition-colors duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
