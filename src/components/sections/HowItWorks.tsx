import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UserPlus, CheckCircle, Users, Settings, Laptop, Wallet, ChevronDown } from "lucide-react";

const steps = [
  { title: "Create Account", desc: "Sign up with email/phone and complete your profile.", icon: <UserPlus />, details: "Provide your professional background, skills, and contact details so we can assess your eligibility for platforms." },
  { title: "Verification", desc: "We review your identity and skills.", icon: <CheckCircle />, details: "This may include identity verification checks or skill assessments required by our partner platforms." },
  { title: "Matching", desc: "Get matched with available AI platforms.", icon: <Users />, details: "Based on your verified profile, we match you with relevant projects like data annotation or AI training." },
  { title: "Onboarding", desc: "Guided setup for your assigned task platform.", icon: <Settings />, details: "We provide account setup assistance, workflow instructions, and policy briefings." },
  { title: "Start Working", desc: "Begin receiving tasks and start earning.", icon: <Laptop />, details: "Access your dashboard independently to complete tasks according to partner guidelines." },
  { title: "Receive Payouts", desc: "Get paid via M-Pesa, Bank, or providers.", icon: <Wallet />, details: "Earnings are processed according to the partner platform's schedule, with support for M-Pesa and banks." },
];

export function HowItWorks() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold text-center mb-16">How it Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/[0.03]">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full text-left">
                <div className="text-blue-500 mb-4">{step.icon}</div>
                <div className="flex justify-between items-center">
                  <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                  <ChevronDown className={`transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
                </div>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="text-gray-300 text-xs mt-4 pt-4 border-t border-white/5 overflow-hidden">
                    {step.details}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
