/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */




import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Categories } from './components/Categories';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Categories />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}

