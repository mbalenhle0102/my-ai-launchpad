import { useEffect, useRef } from 'react';

const NeuralBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create neural nodes
    const nodeCount = 15;
    const nodes: HTMLDivElement[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement('div');
      node.className = 'neural-node';
      node.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: hsl(185 80% 55% / 0.3);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: neuralPulse ${3 + Math.random() * 2}s ease-in-out infinite;
        animation-delay: ${Math.random() * 2}s;
        box-shadow: 0 0 ${10 + Math.random() * 10}px hsl(185 80% 55% / 0.3);
      `;
      container.appendChild(node);
      nodes.push(node);
    }

    return () => {
      nodes.forEach(node => node.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 20%, hsl(265 70% 60% / 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, hsl(185 80% 55% / 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, hsl(185 80% 55% / 0.03) 0%, transparent 70%)
        `,
      }}
    />
  );
};

export default NeuralBackground;
