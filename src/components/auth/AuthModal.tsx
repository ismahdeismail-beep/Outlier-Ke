import { useState } from 'react';
import { Modal } from '../ui/Modal';
import { auth, db } from '../../lib/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Button } from '../ui/Button';

export function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
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
      }
      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogle = async () => {
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      // Create user profile if first time
      await setDoc(doc(db, 'users', result.user.uid), {
          uid: result.user.uid,
          fullName: result.user.displayName || 'User',
          email: result.user.email,
          role: 'user',
          country: 'Kenya',
          onboardingStatus: 'not_started',
          createdAt: new Date()
      }, { merge: true });
      onClose();
    } catch (err: any) {
      // Ignore cancellation errors
      if (err.code !== 'auth/cancelled-popup-request' && err.code !== 'auth/user-cancelled') {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-6 text-white">{isLogin ? 'Login' : 'Create Account'}</h2>
      <form onSubmit={handleAuth} className="space-y-4">
        {!isLogin && (
          <input className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg border border-white/10" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        )}
        <input className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg border border-white/10" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg border border-white/10" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button className="w-full" disabled={isLoading} type="submit">{isLogin ? 'Login' : 'Signup'}</Button>
        <Button className="w-full" disabled={isLoading} variant="outline" type="button" onClick={handleGoogle}>Continue with Google</Button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-400">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button className="text-blue-500 ml-1" onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Signup' : 'Login'}</button>
      </p>
    </Modal>
  );
}
