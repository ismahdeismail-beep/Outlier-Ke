
import { motion } from "motion/react";

const categories = ["Coding", "Biology", "Mathematics", "Writing", "Design", "Finance", "Engineering", "Marketing"];

export function Categories() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold text-center mb-16">Expert Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-transparent hover:bg-gradient-to-br from-blue-600/20 to-purple-600/20 transition-all text-center"
                >
                    <h3 className="font-semibold">{cat}</h3>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
