
import React from 'react';

const FloatingShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Brackets */}
      <div className="animate-float" style={{ position: 'absolute', top: '10%', left: '5%', animationDelay: '0s' }}>
        <div className="text-code-purple opacity-10 text-7xl font-bold rotate-12">{`{`}</div>
      </div>
      <div className="animate-float" style={{ position: 'absolute', bottom: '15%', right: '10%', animationDelay: '1s' }}>
        <div className="text-code-blue opacity-10 text-8xl font-bold rotate-45">{`}`}</div>
      </div>
      
      {/* Parentheses */}
      <div className="animate-float" style={{ position: 'absolute', top: '30%', right: '15%', animationDelay: '1.5s' }}>
        <div className="text-code-green opacity-10 text-6xl font-bold -rotate-15">{`(`}</div>
      </div>
      <div className="animate-float" style={{ position: 'absolute', bottom: '40%', left: '20%', animationDelay: '2.5s' }}>
        <div className="text-code-orange opacity-10 text-7xl font-bold rotate-20">{`)`}</div>
      </div>
      
      {/* Square Brackets */}
      <div className="animate-float" style={{ position: 'absolute', top: '60%', left: '10%', animationDelay: '3s' }}>
        <div className="text-code-red opacity-10 text-5xl font-bold rotate-90">{`[`}</div>
      </div>
      <div className="animate-float" style={{ position: 'absolute', top: '20%', right: '30%', animationDelay: '2s' }}>
        <div className="text-primary opacity-10 text-6xl font-bold -rotate-45">{`]`}</div>
      </div>

      {/* Code Symbols */}
      <div className="animate-float" style={{ position: 'absolute', bottom: '20%', right: '25%', animationDelay: '0.5s' }}>
        <div className="text-code-blue opacity-10 text-5xl font-bold">{`</>`}</div>
      </div>
      <div className="animate-float" style={{ position: 'absolute', top: '50%', left: '25%', animationDelay: '1.2s' }}>
        <div className="text-code-green opacity-10 text-4xl font-bold rotate-12">{`=>`}</div>
      </div>

      {/* Additional Symbols */}
      <div className="animate-float" style={{ position: 'absolute', bottom: '30%', right: '40%', animationDelay: '3.5s' }}>
        <div className="text-code-purple opacity-10 text-5xl font-bold">{`&&`}</div>
      </div>
      <div className="animate-float" style={{ position: 'absolute', top: '40%', left: '40%', animationDelay: '2.7s' }}>
        <div className="text-code-red opacity-10 text-6xl font-bold rotate-180">{`||`}</div>
      </div>
    </div>
  );
};

export default FloatingShapes;
