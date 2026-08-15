'use client';

import * as React from 'react';
import { motion, useSpring, useTransform } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  id?: string;
  onClick?: () => void;
}

export function TiltCard({
  children,
  className = '',
  maxTilt = 6,
  id,
  onClick,
}: TiltCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [glarePos, setGlarePos] = React.useState({ x: 50, y: 50, opacity: 0 });

  const mouseX = useSpring(0, { stiffness: 350, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 350, damping: 25 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(xPct);
    mouseY.set(yPct);

    setGlarePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      id={id}
      className={`relative overflow-hidden transition-shadow duration-300 ${className}`}
    >
      {/* Glare overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.7) 0%, transparent 60%)`,
          opacity: glarePos.opacity,
        }}
      />
      {children}
    </motion.div>
  );
}
