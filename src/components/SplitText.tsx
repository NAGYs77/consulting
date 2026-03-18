import React from 'react';
import { motion } from 'framer-motion'; // On utilise Framer Motion pour la fluidité

// 1. DÉFINITION DES TYPES (Indispensable pour enlever l'erreur 2307)
interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  tag?: 'h1' | 'h2' | 'p' | 'span';
  splitType?: 'chars' | 'words';
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 0.05,
  duration = 0.5,
  tag: Tag = 'span',
  splitType = 'chars'
}) => {
  // On sépare soit par lettres (chars), soit par mots (words)
  const items = splitType === 'chars' ? text.split("") : text.split(" ");

  return (
    <Tag className={`${className} inline-block`}>
      {items.map((item, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * delay,
            duration: duration,
            ease: "easeOut"
          }}
          className="inline-block"
          style={{ whiteSpace: item === " " ? "pre" : "normal" }}
        >
          {item}
          {splitType === 'words' && index !== items.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </Tag>
  );
};

export default SplitText;