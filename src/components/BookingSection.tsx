import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const BookingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="booking" className="section-padding bg-background" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}>
          
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Ready?
          </p>
          <h2 className="font-serif md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-3xl">
            Book Your Appointment
            <br />
            <span className="text-gradient-gold">in Seattle Today</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Experience the elevated standard in men's grooming. Schedule your visit 
            with Joan Cruz Barbershop in Seattle, Washington.
          </p>

          <p className="font-sans text-sm text-primary/80 mb-8 italic">
            First-time client? Enjoy 20% off your first haircut.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book"
              className="group relative font-sans text-xs tracking-[0.2em] uppercase px-12 py-4 bg-primary text-primary-foreground hover:bg-gold-light transition-colors duration-300">
              Book Online
              <span className="absolute -top-2.5 right-3 font-sans text-[9px] tracking-wider uppercase bg-background/90 text-primary px-2 py-0.5 border border-primary/20">
                20% Off
              </span>
            </Link>
            <a
              className="font-sans text-xs tracking-[0.2em] uppercase px-12 py-4 border border-primary/30 text-foreground hover:border-primary transition-colors duration-300" href="tel:+12063878049">
              Call (206) 387-8049 
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default BookingSection;