import { motion } from 'framer-motion';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(185 80% 55% / 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          top: '10%',
          left: '-10%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(265 70% 60% / 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          bottom: '20%',
          right: '-5%',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Geometric Shapes */}
      <motion.div
        className="absolute w-20 h-20 border border-primary/20 rotate-45"
        style={{ top: '25%', right: '15%' }}
        animate={{
          rotate: [45, 90, 45],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-16 h-16 border border-accent/20 rounded-full"
        style={{ bottom: '30%', left: '10%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Lines */}
      <motion.div
        className="absolute w-32 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        style={{ top: '40%', left: '5%' }}
        animate={{
          x: [0, 100, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Holographic Ring */}
      <motion.div
        className="absolute w-64 h-64 rounded-full border border-primary/10"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};

export default FloatingElements;
