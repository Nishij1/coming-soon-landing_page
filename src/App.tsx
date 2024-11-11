import React from 'react';
import { EmailForm } from './components/EmailForm';
import { Background } from './components/Background';
import { Sparkles, Rocket } from 'lucide-react';

export const App = () => {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <Background />

      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <div className="max-w-2xl w-full mx-auto space-y-12 text-center">
          {/* Logo */}
          <div className="animate-fade-in">
            <Rocket className="w-12 h-12 mx-auto text-fuchsia-400 rotate-45 animate-float" />
          </div>

          {/* Main content */}
          <div className="space-y-8">
            <div className="relative inline-block animate-fade-in">
              <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter">
                <span className="absolute -inset-1 blur-2xl bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30"></span>
                <span className="relative">
                  <span className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
                    LAUNCHING
                  </span>
                </span>
              </h1>
              <div className="flex items-center justify-center gap-4 mt-4">
                <Sparkles className="w-6 h-6 text-fuchsia-400 animate-pulse" />
                <span className="text-2xl font-light tracking-[0.2em] text-fuchsia-200">SOON</span>
                <Sparkles className="w-6 h-6 text-fuchsia-400 animate-pulse" />
              </div>
            </div>
            
            <p className="text-white/60 text-lg sm:text-xl font-light animate-fade-in-delayed leading-relaxed max-w-xl mx-auto">
              We're crafting something extraordinary. Join our exclusive waitlist and be the first to experience the future.
            </p>
          </div>

          {/* Email form */}
          <div className="animate-fade-in-delayed pt-8">
            <EmailForm />
          </div>

          {/* Footer */}
          <footer className="animate-fade-in-delayed pt-16">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Digital Door Agency. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
};