import React, { useState } from 'react';
import { Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Add email to Firebase
      await addDoc(collection(db, 'waitlist'), {
        email,
        timestamp: serverTimestamp(),
      });

      setSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Failed to join waitlist. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white/5 backdrop-blur-sm px-8 py-6 rounded-2xl animate-fade-in border border-white/10">
        <div className="flex items-center justify-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-400" />
          <p className="text-white/80 font-medium">You're on the list! We'll be in touch soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="relative w-full max-w-lg mx-auto group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 rounded-2xl blur group-hover:blur-xl transition-all duration-500"></div>
        <div className="relative flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full px-6 py-4 bg-black/50 backdrop-blur-sm rounded-l-2xl 
                     border border-white/10 focus:border-white/20 outline-none 
                     transition-all duration-300 text-white/90 placeholder:text-white/40"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 rounded-r-2xl bg-white/10 border border-l-0 border-white/10
                     hover:bg-white/20 transition-all duration-300 disabled:opacity-50
                     flex items-center justify-center min-w-[4rem]"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin text-white/60" />
            ) : (
              <Send className="w-5 h-5 text-white/60" />
            )}
          </button>
        </div>
      </form>
      {error && (
        <div className="flex items-center justify-center gap-2 text-red-400">
          <XCircle className="w-4 h-4" />
          <p className="text-sm">{error}</p>
        </div>
      )}
    </div>
  );
};