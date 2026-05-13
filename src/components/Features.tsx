
import { motion } from "motion/react";
import { BrainCircuit, Globe, ShieldCheck, Zap, Handshake, Target } from "lucide-react";

const features = [
    { title: "Flexible Remote Work", icon: Zap },
    { title: "AI-Powered Platform", icon: BrainCircuit },
    { title: "Global Community", icon: Globe },
    { title: "Secure Payments", icon: ShieldCheck },
    { title: "Skill-Based Matching", icon: Target },
    { title: "Real-Time Collaboration", icon: Handshake },
];

export function Features() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold text-center mb-16">Why Outlier?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all group"
                >
                    <feature.icon className="w-10 h-10 text-blue-500 mb-6 group-hover:text-purple-500 transition-colors" />
                    <h3 className="text-xl font-bold font-display mb-2">{feature.title}</h3>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
