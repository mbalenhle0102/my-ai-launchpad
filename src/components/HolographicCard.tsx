import { useState, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
}

const HolographicCard = ({ children, className = '' }: HolographicCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateXValue = (mouseY / (rect.height / 2)) * -5;
    const rotateYValue = (mouseX / (rect.width / 2)) * 5;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    
    setGlareX(((e.clientX - rect.left) / rect.width) * 100);
    setGlareY(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlareX(50);
    setGlareY(50);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Holographic Glare Effect */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, hsl(185 80% 55% / 0.15) 0%, transparent 50%)`,
        }}
      />
      
      {/* Rainbow Edge Effect */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `linear-gradient(135deg, 
            hsl(185 80% 55% / 0.1) 0%, 
            hsl(265 70% 60% / 0.1) 50%, 
            hsl(185 80% 55% / 0.1) 100%)`,
          opacity: 0.5,
        }}
      />
      
      {children}
    </motion.div>
  );
};

export default HolographicCard;
