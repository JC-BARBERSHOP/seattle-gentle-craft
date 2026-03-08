import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Men's Haircut",
    location: "Seattle",
    price: "$60",
    description:
      "A premium men's haircut in Seattle tailored to your style and face shape. Joan Cruz delivers precision cuts using advanced techniques, ensuring every detail is refined. From classic styles to modern textures, each haircut includes a consultation, shampoo, and styled finish.",
  },
  {
    title: "Skin Fade",
    location: "Seattle",
    price: "$60",
    description:
      "Expert skin fade haircuts in Seattle executed with surgical precision. Whether you prefer a low, mid, or high skin fade, Joan blends seamlessly from skin to length, creating a clean, sharp silhouette. A signature service for the modern professional.",
  },
  {
    title: "Beard Trim",
    location: "Seattle",
    price: "$35",
    description:
      "Professional beard trimming and shaping in Seattle. Joan sculpts and defines your beard line with meticulous attention, using precision trimmers and straight-razor detailing. Includes hot towel treatment and beard oil application for a refined finish.",
  },
  {
    title: "Hot Towel Shave",
    location: "Seattle",
    price: "$60",
    description:
      "A luxury hot towel shave experience in Seattle that combines tradition with premium products. Multiple hot towel applications, pre-shave oil, lathered with premium cream, and finished with cold towel and aftershave balm. The ultimate grooming ritual.",
  },
  {
    title: "Hair & Beard Combo",
    location: "Seattle",
    price: "$80",
    description:
      "The complete grooming experience combining a precision haircut with expert beard shaping in Seattle. This comprehensive service ensures your hair and beard work together in harmony. Includes consultation, shampoo, cut, beard trim, and styled finish.",
  },
  {
    title: "Kids Haircut",
    location: "Seattle",
    price: "$50",
    description:
      "Quality kids' haircuts in Seattle in a comfortable, professional environment. Joan brings the same precision and care to younger clients, creating age-appropriate styles that look sharp. A patient, friendly experience for children of all ages.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-2xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 md:p-10 bg-background border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs tracking-wider uppercase text-primary mt-1">
                    {service.location}
                  </p>
                </div>
                <span className="font-serif text-2xl font-semibold text-primary">
                  {service.price}
                </span>
              </div>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#booking"
                className="inline-block font-sans text-xs tracking-[0.2em] uppercase px-6 py-3 border border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
