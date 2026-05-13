
import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-display font-bold mb-8">Join 100,000+ AI Experts</h2>
        <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-10 py-5 rounded-full font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all"
        >
            Get Started Now
        </motion.button>
      </div>
    </section>
  );
}
