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
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/joancruz_barbershop/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-opacity duration-300 hover:opacity-80"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.google.com/search?sca_esv=b964d58e7340a202&sxsrf=ANbL-n5aDcwNgG9ad-AAp8rP3ayii_0RhQ:1772953604402&q=joan+cruz+barbershop+miami+reviews&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOa5K5X5NideuFuv9lQ_6ipOkfgEt4j6J9azh1FuBju6aDhUeGbRcDovqdPmB9AfgFnhnyY6Z26kw7ugB84BS5oxeqWX3_N1BuzigTAMwvOVvmPP8Cw%3D%3D&sa=X&ved=2ahUKEwjsrazu3o-TAxXSODQIHdMCDEgQ9qsLegQIJhAG&biw=390&bih=669&dpr=3#ebo=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-opacity duration-300 hover:opacity-80"
              aria-label="Google Reviews"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </a>
          </div>
          <a
            href="#booking"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                scrollToSection("booking");
              }
            }}
            className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-2 md:px-6 md:py-3 bg-primary text-primary-foreground hover:bg-gold-light transition-colors duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
