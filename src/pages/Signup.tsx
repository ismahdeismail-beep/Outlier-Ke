import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../lib/firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Button } from '../components/ui/Button';

export function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        uid: userCredential.user.uid,
        fullName,
        email,
        role: 'user',
        country: 'Kenya',
        onboardingStatus: 'not_started',
        createdAt: new Date()
      });
      navigate('/dashboard/onboarding');
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await setDoc(doc(db, 'users', result.user.uid), {
          uid: result.user.uid,
          fullName: result.user.displayName || 'User',
          email: result.user.email,
          role: 'user',
          country: 'Kenya',
          onboardingStatus: 'not_started',
          createdAt: new Date()
      }, { merge: true });
      navigate('/dashboard/onboarding');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex w-1/2 bg-[#0a0a0a] p-12 flex-col justify-center">
        <h1 className="text-4xl font-bold text-white mb-6">Join the Future of AI Work.</h1>
        <p className="text-gray-400 mb-8">Access global AI work opportunities through structured onboarding specifically for Kenyan professionals.</p>
        <ul className="space-y-4 text-white">
          <li>✓ Secure authentication</li>
          <li>✓ Verified onboarding process</li>
          <li>✓ Transparent fees & payouts</li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-[#050505]">
        <form onSubmit={handleSignup} className="w-full max-w-md space-y-4">
          <h2 className="text-2xl font-bold text-white">Create Account</h2>
          <input className="w-full bg-[#1a1a1a] text-white p-4 rounded-lg border border-white/10" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          <input className="w-full bg-[#1a1a1a] text-white p-4 rounded-lg border border-white/10" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="w-full bg-[#1a1a1a] text-white p-4 rounded-lg border border-white/10" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button className="w-full" type="submit">Create Account</Button>
          <Button className="w-full" variant="outline" type="button" onClick={handleGoogle}>Continue with Google</Button>
          <p className="text-center text-sm text-gray-400 mt-4">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
        </form>
      </div>
    </div>
  );
}
