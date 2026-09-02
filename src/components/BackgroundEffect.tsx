// src/components/BackgroundEffect.tsx

import React from 'react';

// src/components/BackgroundEffect.tsx
const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 scale-y-[-1] bg-gradient-to-br from-blue-500/10 to-blue-600/10 z-[1]">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  );
};

export default BackgroundEffect;

