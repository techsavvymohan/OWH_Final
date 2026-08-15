'use client';

import * as React from 'react';
import { motion } from 'motion/react';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  highlightWords?: string[];
  highlightClass?: string;
}

export function BlurText({
  text,
  className = '',
  delay = 0,
  wordDelay = 0.05,
  highlightWords = [],
  highlightClass = 'text-emerald-700 font-bold',
}: BlurTextProps) {
  const words = text.split(' ');

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, index) => {
        const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');
        const isHighlighted = highlightWords.some(
          hw => hw.toLowerCase() === cleanWord.toLowerCase()
        );

        return (
          <motion.span
            key={`${word}-${index}`}
            initial={{ opacity: 0, filter: 'blur(8px)', y: 10 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.5,
              delay: delay + index * wordDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`inline-block mr-[0.25em] ${isHighlighted ? highlightClass : ''}`}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
}
