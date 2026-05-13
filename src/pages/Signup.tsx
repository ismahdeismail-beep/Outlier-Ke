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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
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
    } finally {
        setIsLoading(false);
    }
  };

  const handleGoogle = async () => {
    setIsLoading(true);
    setError('');
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
      if (err.code !== 'auth/cancelled-popup-request' && err.code !== 'auth/user-cancelled') {
        setError(err.message);
      }
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#0a0a0a]">
        <div className="auth-card">
            <h2 className="text-2xl font-display font-bold text-white mb-8">Create your account</h2>
            <form onSubmit={handleSignup} className="space-y-6">
                <div>
                    <label className="form-label">Full Name</label>
                    <input className="form-input" placeholder="John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                </div>
                <div>
                    <label className="form-label">Email Address</label>
                    <input className="form-input" placeholder="john@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label className="form-label">Password</label>
                    <input className="form-input" placeholder="••••••••" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                
                <Button className="w-full h-12" disabled={isLoading} type="submit">{isLoading ? 'Creating account...' : 'Create Account'}</Button>
                
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-[#0f0f0f] px-2 text-gray-500">Or continue with</span>
                    </div>
                </div>

                <Button className="w-full h-12" disabled={isLoading} variant="outline" type="button" onClick={handleGoogle}>Continue with Google</Button>
                
                <p className="text-center text-sm text-gray-400 mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-400">Login</Link></p>
            </form>
        </div>
    </div>
  );
}
