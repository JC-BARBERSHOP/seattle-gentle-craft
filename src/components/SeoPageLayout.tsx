import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

interface SeoPageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const SeoPageLayout = ({ title, subtitle, children }: SeoPageLayoutProps) => {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 md:px-12 bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4">
                Joan Cruz Barbershop
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
                {title}
              </h1>
              <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose-jc"
            >
              {children}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="font-sans text-muted-foreground mb-8">
              Book your appointment with Joan Cruz Barbershop in Seattle today.
            </p>
            <a
              href="/#booking"
              className="inline-block font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-gold-light transition-colors duration-300"
            >
              Book Appointment
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SeoPageLayout;
