
import { motion } from "motion/react";
import { Zap } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Outlier</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-white transition-colors">Experts</a>
            <a href="#" className="hover:text-white transition-colors">Resources</a>
        </div>
        <div className="flex items-center gap-4">
            <button className="text-sm font-medium hover:text-white transition-colors">Log in</button>
            <button className="px-5 py-2.5 rounded-full text-sm font-semibold bg-white text-black hover:bg-white/90 transition-all">
                Get Started
            </button>
        </div>
      </div>
    </nav>
  );
}
