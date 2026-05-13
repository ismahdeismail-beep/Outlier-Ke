import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../lib/firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Button } from '../components/ui/Button';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
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
      await signInWithPopup(auth, provider);
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
        <h2 className="text-2xl font-display font-bold text-white mb-8">Welcome back</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="form-label">Email Address</label>
            <input className="form-input" placeholder="john@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="form-label">Password</label>
            <input className="form-input" placeholder="••••••••" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <Button className="w-full h-12" disabled={isLoading} type="submit">{isLoading ? 'Signing in...' : 'Login'}</Button>
          
          <div className="relative">
              <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#0f0f0f] px-2 text-gray-500">Or</span>
              </div>
          </div>
          
          <Button className="w-full h-12" disabled={isLoading} variant="outline" type="button" onClick={handleGoogle}>Continue with Google</Button>
          <p className="text-center text-sm text-gray-400 mt-4">Don't have an account? <Link to="/signup" className="text-blue-500 hover:text-blue-400">Signup</Link></p>
        </form>
      </div>
    </div>
  );
}
