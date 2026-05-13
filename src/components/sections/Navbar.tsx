import { useState } from 'react';
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <span className="font-display font-bold text-xl">Outlier KE</span>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="px-4 py-2 text-sm">Log in</Button>
          <Button variant="secondary" className="px-4 py-2 text-sm">Apply Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-4">
          <a href="#" className="text-gray-400 hover:text-white">Services</a>
          <a href="#" className="text-gray-400 hover:text-white">Pricing</a>
          <Button variant="outline" className="w-full">Log in</Button>
          <Button variant="secondary" className="w-full">Apply Now</Button>
        </div>
      )}
    </nav>
  );
}
