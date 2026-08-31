import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { User, Armchair, Eye, CalendarCheck, Target, Gem } from "lucide-react";

const reasons = [
{ icon: User, title: "One-on-One Experience", description: "Every appointment is personally reserved with Joan, providing dedicated time and individualized attention from start to finish." },
{ icon: Armchair, title: "Boutique Setting", description: "A private, one-chair environment designed for clients who prefer a more personal alternative to the traditional Seattle barbershop experience." },
{ icon: Eye, title: "Attention to Detail", description: "Every haircut and grooming service is approached with precision and care, tailored to your hair, style, and personal preferences." },
{ icon: CalendarCheck, title: "By Appointment", description: "Your time is reserved specifically for you, creating a relaxed, focused, and seamless grooming experience without the uncertainty of a traditional multi-barber shop." },
{ icon: Target, title: "Consistent Results", description: "With 15+ years of barbering experience, you work directly with the same barber every visit, providing consistency, familiarity, and a high standard of craftsmanship." },
{ icon: Gem, title: "Premium Experience", description: "Professional men's grooming in a clean, modern setting where quality, comfort, craftsmanship, and personal service come first." }];


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
            The Boutique Difference
          </p>
          <h2 className="font-serif md:text-5xl lg:text-6xl font-semibold text-foreground text-4xl">
            Why Choose Us
          </h2>
          <p className="font-sans text-base md:text-lg text-muted-foreground mt-5 max-w-xl mx-auto leading-relaxed">
            A more personal approach to men's grooming in Seattle.
          </p>
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20">
          
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Experience the Boutique Difference
          </p>
          <p className="font-sans text-sm md:text-base text-muted-foreground mb-8">
            Reserve your one-on-one appointment with Joan.
          </p>
          <Link
            to="/book"
            className="inline-block font-sans text-xs tracking-[0.2em] uppercase px-12 py-4 bg-primary text-primary-foreground hover:bg-gold-light transition-colors duration-300">
            Book Appointment
          </Link>
        </motion.div>
      </div>
    </section>);

};

export default WhyChooseUs;
