
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight mb-8">
                Train the Next<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Generation of AI</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-12">
                Join thousands of global experts earning remotely while training the AI models that shape the future.
            </p>
            <div className="flex gap-4 justify-center">
                <button className="px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all">
                    Get Started
                </button>
                <button className="px-8 py-4 rounded-full font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    Learn More
                </button>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
