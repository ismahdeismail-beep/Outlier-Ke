import { motion } from "motion/react";
import { UserPlus, CheckCircle, Users, Settings, Laptop, Wallet } from "lucide-react";

const steps = [
  { title: "Create Account", desc: "Sign up with email/phone and complete your profile.", icon: <UserPlus /> },
  { title: "Verification", desc: "We review your identity and skills.", icon: <CheckCircle /> },
  { title: "Matching", desc: "Get matched with available AI platforms.", icon: <Users /> },
  { title: "Onboarding", desc: "Guided setup for your assigned task platform.", icon: <Settings /> },
  { title: "Start Working", desc: "Begin receiving tasks and start earning.", icon: <Laptop /> },
  { title: "Receive Payouts", desc: "Get paid via M-Pesa, Bank, or providers.", icon: <Wallet /> },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold text-center mb-16">How it Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              className="p-6 rounded-xl border border-white/5 bg-white/[0.03]"
              whileHover={{ y: -5 }}
            >
              <div className="text-blue-500 mb-4">{step.icon}</div>
              <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 bg-white/[0.03] p-8 rounded-xl border border-white/5 text-sm text-gray-500 text-center">
            <p><strong>Note:</strong> All onboarding fees are disclosed before engagement. No guaranteed earnings. Results depend on task availability and platform performance.</p>
        </div>
      </div>
    </section>
  );
}
