import { useState, useEffect } from 'react';
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { AuthModal } from "../auth/AuthModal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(auth.currentUser);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return unsubscribe;
  }, []);

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
          {user ? (
            <Button variant="outline" className="px-4 py-2 text-sm" onClick={() => signOut(auth)}>Log out</Button>
          ) : (
            <>
              <Button variant="outline" className="px-4 py-2 text-sm" onClick={() => setIsAuthOpen(true)}>Log in</Button>
              <Button variant="secondary" className="px-4 py-2 text-sm" onClick={() => setIsAuthOpen(true)}>Apply Now</Button>
            </>
          )}
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
          {user ? (
            <Button variant="outline" className="w-full" onClick={() => signOut(auth)}>Log out</Button>
          ) : (
            <>
              <Button variant="outline" className="w-full" onClick={() => setIsAuthOpen(true)}>Log in</Button>
              <Button variant="secondary" className="w-full" onClick={() => setIsAuthOpen(true)}>Apply Now</Button>
            </>
          )}
        </div>
      )}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </nav>
  );
}
