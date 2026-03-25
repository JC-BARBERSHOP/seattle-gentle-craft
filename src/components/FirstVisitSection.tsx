import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const FirstVisitSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-secondary/40">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="divider-subtle mx-auto max-w-[120px] mb-10" />

          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Welcome Offer
          </p>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            First Visit Experience
          </h2>

          <p className="font-sans text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Enjoy 20% off your first haircut with Joan Cruz Barbershop. Experience precision,
            detail, and premium service from your very first visit. As a top-rated Seattle barber,
            we invite you to discover why our first haircut discount keeps clients coming back.
          </p>

          <Link
            to="/book"
            className="group relative inline-block font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-gold-light transition-colors duration-300"
          >
            Claim Your 20% Off
            <span className="absolute -top-2.5 right-3 font-sans text-[9px] tracking-wider uppercase bg-background/90 text-primary px-2 py-0.5 border border-primary/20">
              First Visit
            </span>
          </Link>

          <div className="divider-subtle mx-auto max-w-[120px] mt-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default FirstVisitSection;
