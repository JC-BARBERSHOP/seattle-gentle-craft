import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import galleryFade from "@/assets/gallery-fade.jpg";
import galleryBeard from "@/assets/gallery-beard.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryHaircut from "@/assets/gallery-haircut.jpg";

const images = [
  { src: galleryFade, alt: "Skin fade haircut by Master Barber Joan Cruz in Seattle" },
  { src: galleryHaircut, alt: "Professional men's haircut Seattle" },
  { src: galleryBeard, alt: "Precision beard trim Seattle barber" },
  { src: galleryInterior, alt: "Luxury barbershop interior Seattle" },
];

const GallerySection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStart = useRef<number | null>(null);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + images.length) % images.length);
    },
    [],
  );

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
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section id="gallery" className="section-padding bg-secondary" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
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
          className="relative"
        >
          {/* Image container */}
          <div
            className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm"
            style={{
              boxShadow: "0 20px 60px -15px hsl(var(--charcoal-dark) / 0.6)",
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
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
                draggable={false}
              />
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="absolute left-3 md:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-background/70 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next image"
            className="absolute right-3 md:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-background/70 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              aria-label={`Go to image ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-7 h-2 bg-primary"
                  : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
