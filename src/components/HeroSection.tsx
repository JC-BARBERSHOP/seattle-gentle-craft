import { motion } from "framer-motion";
import heroImage from "@/assets/hero-barbershop.jpg";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury barbershop interior in Seattle Washington"
          className="w-full h-full object-cover"
          loading="eager" />
        
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}>
          
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6 md:mb-8">
            Joan Cruz Barbershop
          </p>
          <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary mb-4 md:mb-6">ESTABLISHED 2020 . NOW IN SEATTLE

          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-4xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight text-foreground mb-6 md:mb-8">
          
          Seattle's Premier Barbershop
          <br />
          <span className="text-gradient-gold">for Modern Men</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-sans text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
          
          Precision haircuts, classic scissor cuts, skin fades, beard trims, and luxury barber
          services in Seattle, Washington.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <a
            href="https://jc-barbershop-107540.square.site"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-gold-light transition-colors duration-300">
            
            Book Appointment
          </a>
          <a
            href="#services"
            className="font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 border border-primary/30 text-foreground hover:border-primary hover:text-primary transition-colors duration-300">
            
            View Services
          </a>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>);

};

export default HeroSection;