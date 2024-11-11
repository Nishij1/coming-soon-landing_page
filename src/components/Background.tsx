import React from 'react';

export const Background = () => {
  return (
    <>
      {/* Main gradient orb */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[800px] h-[800px] bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-transparent rounded-full blur-3xl animate-float" />
      </div>
      
      {/* Additional ambient lights */}
      <div className="fixed inset-0">
        {/* Top right accent */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] 
                      bg-blue-500/10 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '-2s' }}/>
        
        {/* Bottom left accent */}
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] 
                      bg-fuchsia-500/10 rounded-full blur-3xl animate-float"
             style={{ animationDelay: '-4s' }}/>
      </div>

      {/* Animated particles */}
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * -1.5}s`,
              animationDuration: '15s',
            }}
          />
        ))}
      </div>

      {/* Subtle grid overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
    </>
  );
};