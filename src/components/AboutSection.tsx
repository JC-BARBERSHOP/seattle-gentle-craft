import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import joanPortrait from "@/assets/joan-cruz-portrait.png";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-36 bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-sans text-sm md:text-base tracking-[0.45em] uppercase text-primary mb-7 md:mb-8"
        >
          About the Barber
        </motion.p>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl font-semibold text-foreground leading-tight"
        >
          Joan Cruz
        </motion.h2>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-sans text-xs md:text-sm tracking-[0.35em] uppercase text-muted-foreground mt-3"
        >
          Master Barber
        </motion.p>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-12 md:mt-16 w-full max-w-sm md:max-w-md"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-lg blur-2xl opacity-40" />
            <img
              src={joanPortrait}
              alt="Joan Cruz — Master Barber at JC Barbershop Seattle"
              className="relative w-full aspect-[3/4] object-cover object-top rounded-md shadow-2xl"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Bio & Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 md:mt-16 max-w-2xl space-y-5"
        >
          <p className="font-sans text-muted-foreground leading-relaxed">
            Joan Cruz is a master barber with over 15 years of experience in men's grooming.
            After building a loyal clientele in Miami, Joan founded his barbershop in 2020
            with a clear vision: to deliver an elevated grooming experience that reflects
            the discipline and precision of his craft.
          </p>
          <p className="font-sans text-muted-foreground leading-relaxed">
            Now relocating to Seattle, Joan brings that same standard of excellence
            to the Pacific Northwest. As a professional barber in Seattle, his focus
            remains on detail, consistency, and service that exceeds expectations.
            Joan is also bilingual, offering services comfortably in both English and Spanish.
          </p>
          <p className="font-sans text-muted-foreground leading-relaxed">
            Whether you're looking for a precision skin fade, a classic taper, or
            expert beard grooming, Joan Cruz Barbershop is Seattle's destination for
            men's grooming at its finest.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-8">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "Est.", label: "2020" },
              { number: "5★", label: "GOOGLE RATED" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl font-semibold text-primary">{stat.number}</p>
                <p className="font-sans text-xs tracking-wider uppercase text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
