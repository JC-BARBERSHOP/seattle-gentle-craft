import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20">
          
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Find Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Location
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="aspect-[4/3] bg-background border border-border flex items-center justify-center">
            
            <div className="text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4 stroke-[1.5]" />
              <p className="font-sans text-sm text-muted-foreground">
                ​816 1st Ave #1, Seattle, WA 98104  
              </p>
              <p className="font-sans text-xs text-muted-foreground mt-1">
                Seattle, WA
              </p>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10">
            
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Joan Cruz Barbershop
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed">
                ​Located in the heart of Downtown Seattle, Joan Cruz Barbershop offers precision haircuts, skin fades, and premium men’s grooming in a clean, modern environment. Book your appointment and experience a higher standard of barbering.
              

              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-0.5 stroke-[1.5] shrink-0" />
                <div>
                  <p className="font-sans text-foreground">Seattle, WA</p>
                  <p className="font-sans text-sm text-muted-foreground">
                    ​816 1st Ave #1 , Seattle, WA 98104   
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-0.5 stroke-[1.5] shrink-0" />
                <div>
                  <a href="tel:+12065550100" className="font-sans text-foreground hover:text-primary transition-colors">
                    (206) 555-0100
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary mt-0.5 stroke-[1.5] shrink-0" />
                <div className="font-sans text-foreground">
                  <p>Monday – Friday: 10:00 AM – 6:00 PM</p>
                  <p className="text-muted-foreground">​Saturday: Closed        </p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default LocationSection;