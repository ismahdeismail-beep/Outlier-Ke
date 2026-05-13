export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 text-gray-500">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div><h4 className="text-white font-semibold mb-4">Company</h4><ul className="space-y-2 text-sm"><li>About</li><li>Careers</li></ul></div>
        <div><h4 className="text-white font-semibold mb-4">Legal</h4><ul className="space-y-2 text-sm"><li>Privacy</li><li>Terms</li></ul></div>
      </div>
      <div className="text-center pt-8 text-xs text-gray-600">© 2026 Outlier AI. All rights reserved.</div>
    </footer>
  );
}
