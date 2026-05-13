
import { motion } from "motion/react";

const stats = [
    { label: "Experts", value: "100K+" },
    { label: "Countries", value: "50" },
    { label: "Paid Out", value: "$500M" },
    { label: "Annotations", value: "13B" },
];

export function Stats() {
  return (
    <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                    >
                        <div className="text-4xl font-bold font-display mb-2">{stat.value}</div>
                        <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
