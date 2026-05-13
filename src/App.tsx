/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */




import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Services } from './components/sections/Features';
import { HowItWorks } from './components/sections/HowItWorks';
import { Footer } from './components/sections/Footer';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Navbar />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

