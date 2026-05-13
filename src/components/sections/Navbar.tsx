import { Button } from "../ui/Button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <span className="font-display font-bold text-xl">Nexus Access</span>
        <div className="hidden md:flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="px-4 py-2 text-sm">Log in</Button>
          <Button variant="secondary" className="px-4 py-2 text-sm">Apply Now</Button>
        </div>
      </div>
    </nav>
  );
}
