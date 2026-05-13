import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../lib/firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Button } from '../components/ui/Button';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard/onboarding');
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/dashboard/onboarding');
    } catch (err: any) {
      if (err.code !== 'auth/cancelled-popup-request' && err.code !== 'auth/user-cancelled') {
        setError(err.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#050505]">
      <form onSubmit={handleLogin} className="w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-white mb-6">Login</h2>
        <input className="w-full bg-[#1a1a1a] text-white p-4 rounded-lg border border-white/10" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="w-full bg-[#1a1a1a] text-white p-4 rounded-lg border border-white/10" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button className="w-full" type="submit">Login</Button>
        <Button className="w-full" variant="outline" type="button" onClick={handleGoogle}>Continue with Google</Button>
        <p className="text-center text-sm text-gray-400 mt-4">Don't have an account? <Link to="/signup" className="text-blue-500">Signup</Link></p>
      </form>
    </div>
  );
}
