
export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div><h4 className="text-white font-bold mb-4">Company</h4><ul className="space-y-2 text-sm"><li>About</li><li>Careers</li></ul></div>
        <div><h4 className="text-white font-bold mb-4">Resources</h4><ul className="space-y-2 text-sm"><li>Blog</li><li>FAQ</li></ul></div>
        <div><h4 className="text-white font-bold mb-4">Legal</h4><ul className="space-y-2 text-sm"><li>Privacy</li><li>Terms</li></ul></div>
      </div>
      <div className="text-center pt-12 text-xs">© 2026 Outlier AI. All rights reserved.</div>
    </footer>
  );
}
