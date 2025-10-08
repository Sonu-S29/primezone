'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, FC, ReactElement } from 'react';
import Link from 'next/link';

import './Dock.css';

interface DockItemProps {
  item: {
    name: string;
    href: string;
    icon: ReactElement;
  };
}

const DockItem: FC<DockItemProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="dock-item-container"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="dock-item-label"
          >
            {item.name}
          </motion.div>
        )}
      </AnimatePresence>
      <Link href={item.href} target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ y: -12, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="dock-item"
        >
          {item.icon}
        </motion.div>
      </Link>
    </div>
  );
};

interface DockProps {
  items: {
    name: string;
    href: string;
    icon: ReactElement;
  }[];
}

const Dock: FC<DockProps> = ({ items }) => {
  return (
    <div className="dock-container">
      <div className="dock">
        {items.map((item) => (
          <DockItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Dock;
