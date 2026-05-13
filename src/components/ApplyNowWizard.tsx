import { useState } from 'react';
import { Button } from './ui/Button';
import { db, auth } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

export function ApplyNowWizard({ onClose }: { onClose: () => void }) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ name: '', phone: '', country: 'Kenya', skill: 'Writing', plan: 'Basic' });

    const saveProgress = async (currentStep: number) => {
        if (!auth.currentUser) return;
        await setDoc(doc(db, 'applications', auth.currentUser.uid), {
            ...formData,
            step: currentStep,
            status: currentStep === 5 ? 'submitted' : 'in_progress',
            userId: auth.currentUser.uid,
            updatedAt: new Date()
        }, { merge: true });
    };

    const nextStep = () => {
        const next = step + 1;
        saveProgress(next);
        setStep(next);
    };

    const prevStep = () => setStep(step - 1);

    return (
        <div className="text-white">
            <h2 className="text-xl font-bold mb-2">Apply Now</h2>
            <div className="w-full bg-white/10 h-2 rounded-full mb-6 relative"><div className="bg-blue-500 h-2 rounded-full transition-all" style={{ width: `${(step/5)*100}%` }}></div></div>
            
            {step === 1 && (
                <div className="space-y-4">
                    <p className="text-gray-400 text-sm">Step 1: Account secured with Google.</p>
                    <Button onClick={nextStep} className="w-full">Continue</Button>
                </div>
            )}
            
            {step === 2 && (
                <div className="space-y-4">
                    <input className="w-full bg-white/10 p-3 rounded-lg border border-white/10" placeholder="Full Name" onChange={(e) => setFormData({...formData, name: e.target.value})} value={formData.name} />
                    <input className="w-full bg-white/10 p-3 rounded-lg border border-white/10" placeholder="Phone Number" onChange={(e) => setFormData({...formData, phone: e.target.value})} value={formData.phone} />
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={prevStep} className="w-full">Back</Button>
                        <Button onClick={nextStep} className="w-full">Continue</Button>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="space-y-4">
                    <select className="w-full bg-white/10 p-3 rounded-lg border border-white/10" onChange={(e) => setFormData({...formData, skill: e.target.value})} value={formData.skill}>
                        <option>Writing</option>
                        <option>Coding</option>
                        <option>Data Annotation</option>
                    </select>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={prevStep} className="w-full">Back</Button>
                        <Button onClick={nextStep} className="w-full">Continue</Button>
                    </div>
                </div>
            )}

            {step === 4 && (
                <div className="space-y-4">
                    <div className="grid gap-2">
                        {['Basic', 'Priority', 'Managed'].map(p => (
                            <button key={p} onClick={()=>setFormData({...formData, plan: p})} className={`p-4 border rounded-lg text-left ${formData.plan === p ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 bg-white/5'}`}>
                                <div className="font-bold">{p} Access</div>
                                <div className="text-xs text-gray-400">Processing: {p === 'Basic' ? '3-5 days' : '1-2 days'}</div>
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={prevStep} className="w-full">Back</Button>
                        <Button onClick={nextStep} className="w-full">Pay & Continue</Button>
                    </div>
                </div>
            )}

            {step === 5 && (
                <div className="text-center py-6">
                    <h3 className="text-lg font-bold mb-2">Application Submitted!</h3>
                    <p className="text-sm text-gray-400 mb-6">Review time approx. 48 hours.</p>
                    <Button onClick={onClose} className="w-full">Go to Dashboard</Button>
                </div>
            )}
        </div>
    );
}
