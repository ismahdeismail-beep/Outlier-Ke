import { SectionHeading } from "../ui/SectionHeading";
import { statsData } from "../../data/landingData";

export function Stats() {
  return (
    <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {statsData.map((stat, i) => (
                    <div key={i} className="text-center p-6">
                        <div className="text-3xl font-bold font-display mb-2">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
