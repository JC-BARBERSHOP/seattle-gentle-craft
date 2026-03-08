import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=816+1st+Ave+Suite+1+Seattle+WA+98104";

  return (
    <section id="location" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Find Us
          </p>
          <h2 className="font-serif md:text-5xl lg:text-6xl font-semibold text-foreground text-4xl">
          <h2 className="font-serif md:text-5xl lg:text-6xl font-semibold text-foreground text-4xl">
            Location
          </h2>
        </motion.div>

        {/* Embedded Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full aspect-[16/7] md:aspect-[21/9] rounded-lg overflow-hidden border border-border">
          
          <iframe
            title="JC Barbershop Location"
            src="https://maps.google.com/maps?q=816+1st+Ave+Suite+1,+Seattle,+WA+98104&t=&z=17&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full" />
          
        </motion.div>

        {/* Address & Directions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12 space-y-6">
          
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              JC Barbershop
            </h3>
            <p className="font-sans text-muted-foreground">
              816 1st Ave Suite #1
            </p>
            <p className="font-sans text-muted-foreground">
              Seattle, WA 98104
            </p>
          </div>

          <Button asChild variant="outline" size="lg" className="group">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer">
              
              <MapPin className="w-4 h-4 mr-2 stroke-[1.5] group-hover:text-primary transition-colors" />
              Get Directions
            </a>
          </Button>
        </motion.div>
      </div>
    </section>);

};

export default LocationSection;