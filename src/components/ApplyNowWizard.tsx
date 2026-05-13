import { useState } from 'react';
import { Button } from './ui/Button';
import { db, auth } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

export function ApplyNowWizard({ onClose }: { onClose: () => void }) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ name: '', skill: '' });

    const saveProgress = async () => {
        if (!auth.currentUser) return;
        await setDoc(doc(db, 'applications', auth.currentUser.uid), {
            ...formData,
            step,
            status: 'in_progress',
            userId: auth.currentUser.uid
        }, { merge: true });
    };

    const nextStep = () => {
        saveProgress();
        setStep(step + 1);
    };

    return (
        <div className="text-white">
            <h2 className="text-xl font-bold mb-6">Apply Now - Step {step} of 5</h2>
            
            {step === 1 && (
                <div className="space-y-4">
                    <p className="text-gray-400 text-sm">Account details verified.</p>
                    <Button onClick={nextStep} className="w-full">Continue</Button>
                </div>
            )}
            
            {step === 2 && (
                <div className="space-y-4">
                    <input className="w-full bg-white/10 p-3 rounded-lg border border-white/10" placeholder="Full Name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    <Button onClick={nextStep} className="w-full">Continue</Button>
                </div>
            )}

            {step === 3 && (
                <div className="space-y-4">
                    <select className="w-full bg-white/10 p-3 rounded-lg border border-white/10" onChange={(e) => setFormData({...formData, skill: e.target.value})}>
                        <option>Writing</option>
                        <option>Coding</option>
                        <option>Data Annotation</option>
                    </select>
                    <Button onClick={nextStep} className="w-full">Continue</Button>
                </div>
            )}

            {step === 4 && (
                <div className="space-y-4">
                    <p className="text-sm text-gray-400">Payment: Pay KES 500 for Priority Access.</p>
                    <Button onClick={nextStep} className="w-full">Pay & Continue</Button>
                </div>
            )}

            {step === 5 && (
                <div className="text-center py-6">
                    <h3 className="text-lg font-bold mb-2">Application Submitted!</h3>
                    <p className="text-sm text-gray-400 mb-6">We'll review your profile and reach out.</p>
                    <Button onClick={onClose} className="w-full">Go to Dashboard</Button>
                </div>
            )}
        </div>
    );
}
