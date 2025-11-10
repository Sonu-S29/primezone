'use client';

import React, { useState, FC, ReactElement } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
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
      {isHovered && (
        <div
          className="dock-item-label"
        >
          {item.name}
        </div>
      )}
      <Link href={item.href} target="_blank" rel="noopener noreferrer">
        <div
          className="dock-item"
        >
          {item.icon}
        </div>
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
