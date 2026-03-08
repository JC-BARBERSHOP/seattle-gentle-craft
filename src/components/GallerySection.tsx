import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import portfolio3 from "@/assets/portfolio-3.png";
import portfolio4 from "@/assets/portfolio-4.png";
import portfolio5 from "@/assets/portfolio-5.png";
import portfolio6 from "@/assets/portfolio-6.png";
import portfolio7 from "@/assets/portfolio-7.png";

const images = [
{ src: portfolio7, alt: "Classic taper with beard grooming Seattle" },
{ src: portfolio1, alt: "Skin fade haircut by Master Barber Joan Cruz in Seattle" },
{ src: portfolio6, alt: "Textured crop with high fade Seattle" },
{ src: portfolio2, alt: "Mid fade with beard trim by Joan Cruz Seattle" },
{ src: portfolio3, alt: "Low fade precision haircut Seattle barber" },
{ src: portfolio4, alt: "Sharp line up and fade haircut Seattle" },
{ src: portfolio5, alt: "Buzz cut skin fade Seattle barbershop" }];


const GallerySection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStart = useRef<number | null>(null);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + images.length) % images.length);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) go(diff > 0 ? 1 : -1);
    touchStart.current = null;
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 })
  };

  return (
    <section id="gallery" className="py-24 md:py-32 lg:py-40 bg-secondary" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20">
          
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Our Work
          </p>
          <h2 className="font-serif md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 text-4xl">
          <h2 className="font-serif md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 text-4xl">
            Haircut Portfolio
          </h2>
          <p className="font-sans text-sm md:text-base text-muted-foreground max-w-md mx-auto">
            Real haircuts performed by Master Barber Joan Cruz
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative">
          
          <div
            className="relative w-full aspect-[3/4] md:aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-sm"
            style={{
              boxShadow: "0 20px 60px -15px hsl(var(--charcoal-dark) / 0.6)"
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}>
            
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={current}
                src={images[current].src}
                alt={images[current].alt}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false} />
              
            </AnimatePresence>
          </div>

          <button
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="absolute left-0 md:left-4 lg:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-background/70 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors duration-300">
            
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next image"
            className="absolute right-0 md:right-4 lg:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-background/70 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors duration-300">
            
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        <div className="flex items-center justify-center gap-2.5 mt-8">
          {images.map((_, i) =>
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            aria-label={`Go to image ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
            i === current ?
            "w-7 h-2 bg-primary" :
            "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`
            } />

          )}
        </div>
      </div>
    </section>);

};

export default GallerySection;