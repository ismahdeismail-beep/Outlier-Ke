import React from 'react';
import { SectionHeading } from "../ui/SectionHeading";
import { servicesData } from "../../data/landingData";
import { Zap, Brain, Globe } from "lucide-react";

const iconMap: Record<string, React.JSX.Element> = {
    zap: <Zap className="w-6 h-6 text-blue-500" />,
    brain: <Brain className="w-6 h-6 text-blue-500" />,
    globe: <Globe className="w-6 h-6 text-blue-500" />,
};

export function Services() {
  return (
    <section className="py-20 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Our Services" subtitle="Facilitating your path to global AI work." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((f, i) => (
                <div key={i} className="p-8 rounded-xl border border-white/5 bg-white/[0.03]">
                    <div className="mb-4">{iconMap[f.icon]}</div>
                    <h3 className="text-xl font-bold font-display mb-2">{f.title}</h3>
                    <p className="text-gray-400 text-sm">{f.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
