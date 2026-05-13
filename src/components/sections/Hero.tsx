import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { auth } from "../../lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Modal } from "../ui/Modal";
import { ApplyNowWizard } from "../ApplyNowWizard";

export function Hero() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
        setIsWizardOpen(true);
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <section className="pt-32 pb-20 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto px-6"
      >
        <h1 className="font-display text-fluid-h1 font-bold tracking-tight mb-8">
          Access Global AI Opportunities From Kenya
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
          We help Kenyan professionals access region-restricted AI work platforms through onboarding, verification, account support, and secure payouts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" onClick={handleSignIn} className="w-full sm:w-auto">Apply Now</Button>
            <Button variant="outline" className="w-full sm:w-auto">How it Works</Button>
        </div>
      </motion.div>
      <Modal isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)}>
        <ApplyNowWizard onClose={() => setIsWizardOpen(false)} />
      </Modal>
    </section>
  );
}
