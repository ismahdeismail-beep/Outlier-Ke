/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */




import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Services } from './components/sections/Features';
import { Footer } from './components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

