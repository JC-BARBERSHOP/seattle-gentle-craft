import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import joanPortrait from "@/assets/joan-cruz-portrait.png";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[42%_1fr] gap-12 md:gap-20 items-center">
          {/* Left — Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-sm md:max-w-none">
              <div className="absolute -inset-4 bg-primary/10 rounded-lg blur-2xl opacity-40" />
              <img
                src={joanPortrait}
                alt="Joan Cruz — Master Barber at JC Barbershop Seattle"
                className="relative w-full aspect-[3/4] object-cover object-top rounded-md shadow-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4">
                About the Barber
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight">
                Joan Cruz
              </h2>
              <p className="font-sans text-sm tracking-[0.25em] uppercase text-muted-foreground mt-2">
                Master Barber
              </p>
              <div className="divider-subtle my-8" />
            </div>

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
              Every cut is approached with the care and attention that modern gentlemen, 
              entrepreneurs, and professionals deserve.
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
      </div>
    </section>
  );
};

export default AboutSection;
