'use client';
import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight > 0) {
        const scrollTop = document.documentElement.scrollTop;
        setProgress((scrollTop / scrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] bg-transparent pointer-events-none">
      <div 
        className="h-full bg-gold-accent shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-150 ease-out" 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
