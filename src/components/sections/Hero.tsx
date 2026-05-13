import { motion } from "motion/react";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="pt-32 pb-20 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto px-6"
      >
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Train the Next Generation of AI
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-10">
          Earn remotely by training AI models that shape the future.
        </p>
        <div className="flex gap-4 justify-center">
            <Button variant="primary">Get Started</Button>
            <Button variant="outline">Learn More</Button>
        </div>
      </motion.div>
    </section>
  );
}
