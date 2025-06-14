import React from 'react';
import { motion } from 'framer-motion';

const BUBBLES = Array.from({ length: 18 }).map((_, i) => ({
  size: Math.random() * 80 + 40, // 40px to 120px
  x: Math.random() * 100, // percent
  y: Math.random() * 100, // percent
  delay: Math.random() * 8,
  duration: 12 + Math.random() * 8,
  opacity: 0.25 + Math.random() * 0.4,
}));

const colors = [
  'rgba(255,255,255,0.7)', // white
  'rgba(220,200,255,0.7)', // light purple
  'rgba(230,220,255,0.5)', // lighter purple
];

const BubbleBackground = () => (
  <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
    {/* Radial gradient background */}
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #f8f6ff 0%, #e9e1fa 60%, #fff 100%)',
      }}
    />
    {/* Animated bubbles */}
    {BUBBLES.map((bubble, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: bubble.size,
          height: bubble.size,
          left: `${bubble.x}%`,
          top: `${bubble.y}%`,
          background: colors[i % colors.length],
          opacity: bubble.opacity,
          boxShadow: '0 4px 32px 0 rgba(180,150,255,0.08)',
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0],
        }}
        transition={{
          duration: bubble.duration,
          delay: bubble.delay,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

export default BubbleBackground; 