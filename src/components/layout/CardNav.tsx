"use client";

import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './CardNav.css';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface NavLink {
  label: string;
  href: string;
  ariaLabel: string;
}

interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: NavLink[];
  className?: string;
  baseColor?: string;
  menuColor?: string;
}

const CardNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  baseColor = '#fff',
  menuColor,
}: CardNavProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={cn('card-nav-container', className, isExpanded && 'open')}>
      <nav className={cn('card-nav', isExpanded && 'open')} style={{ backgroundColor: baseColor }}>
        <div className="card-nav-top">
          <div className="logo-container">
            <Link href="/" aria-label="Home">
                <Image src={logo} alt={logoAlt} className="logo" width={150} height={32} data-ai-hint="logo" />
            </Link>
          </div>
          <div
            className={cn('hamburger-menu', isExpanded && 'open')}
            onClick={() => setIsExpanded(!isExpanded)}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#000' }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
           <ul className="nav-list">
              {items.map((link, i) => (
                <li key={`${link.label}-${i}`} className='nav-list-item'>
                    <Link className="nav-list-link" href={link.href} aria-label={link.ariaLabel} onClick={() => setIsExpanded(false)}>
                        <ArrowUpRight className="nav-list-link-icon" aria-hidden="true" />
                        {link.label}
                    </Link>
                </li>
              ))}
           </ul>
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
