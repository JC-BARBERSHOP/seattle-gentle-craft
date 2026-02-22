import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import galleryFade from "@/assets/gallery-fade.jpg";
import galleryBeard from "@/assets/gallery-beard.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryHaircut from "@/assets/gallery-haircut.jpg";

const images = [
  { src: galleryFade, alt: "Skin fade haircut in Seattle", span: "row-span-2" },
  { src: galleryInterior, alt: "Luxury barbershop Seattle interior", span: "" },
  { src: galleryBeard, alt: "Beard trim Seattle barber", span: "row-span-2" },
  { src: galleryHaircut, alt: "Professional men's haircut Seattle", span: "" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`overflow-hidden ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
