import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const FirstVisitSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-secondary/40">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="divider-subtle mx-auto max-w-[120px] mb-10" />

          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-5">
            First Visit Experience
          </h2>

          <p className="font-sans text-base text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
            Enjoy 20% off your first haircut. Discover why Seattle clients trust Joan Cruz Barbershop
            for precision and premium service.
          </p>

          <Link
            to="/book"
            className="inline-block font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-gold-light transition-colors duration-300"
          >
            Book Your First Visit
          </Link>

          <div className="divider-subtle mx-auto max-w-[120px] mt-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default FirstVisitSection;
