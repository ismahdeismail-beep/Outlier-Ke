
import { motion } from "motion/react";

const steps = [
    { title: "Create Profile" },
    { title: "Verify Skills" },
    { title: "Join Projects" },
    { title: "Start Earning" },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-display font-bold text-center mb-16">How it Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map((step, i) => (
                    <motion.div key={i} className="relative flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/50 flex items-center justify-center font-display font-bold text-xl mb-6">
                            {i + 1}
                        </div>
                        <h3 className="font-bold font-display text-lg">{step.title}</h3>
                        {i < steps.length -1 && (
                            <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-blue-500 to-purple-500 -z-10" />
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
