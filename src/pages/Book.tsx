import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Book = () => {
  return (
    <>
      <Header />
      <main className="pt-20 bg-background min-h-screen">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center mb-10"
          >
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4">
              Joan Cruz Barbershop
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
              Book Your Appointment
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <iframe
              src="https://jc-barbershop-107540.square.site"
              title="Book an appointment at Joan Cruz Barbershop"
              className="w-full rounded border border-border"
              style={{ height: "80vh", minHeight: "600px" }}
              allow="payment"
            />
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Book;
