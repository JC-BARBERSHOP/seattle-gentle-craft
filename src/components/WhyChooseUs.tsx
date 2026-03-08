import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Sparkles, Eye, CalendarCheck, Target, Shield } from "lucide-react";

const reasons = [
{ icon: Gem, title: "Luxury Experience", description: "A premium atmosphere designed for discerning professionals who value quality and refinement in every detail." },
{ icon: Sparkles, title: "Premium Atmosphere", description: "Step into a clean, modern environment that sets the standard for men's grooming in Seattle." },
{ icon: Eye, title: "Attention to Detail", description: "Every cut is approached with precision and care, ensuring consistent results that exceed expectations." },
{ icon: CalendarCheck, title: "Online Booking", description: "Schedule your appointment at your convenience with our seamless online booking system." },
{ icon: Target, title: "Consistent Results", description: "With 15+ years of experience, Joan delivers the same high standard of quality with every visit." },
{ icon: Shield, title: "Clean Environment", description: "A meticulously maintained space with premium sanitation standards for your comfort and safety." }];


const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20">
          
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4">
            The Difference
          </p>
          <h2 className="font-serif md:text-5xl lg:text-6xl font-semibold text-foreground text-4xl">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) =>
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center p-8">
            
              <reason.icon className="w-8 h-8 text-primary mx-auto mb-5 stroke-[1.5]" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{reason.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default WhyChooseUs;