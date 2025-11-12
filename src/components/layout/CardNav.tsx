
"use client";

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './CardNav.css';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Suspense, lazy } from 'react';

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

const NavList = ({ items, onLinkClick }: { items: NavLink[], onLinkClick: () => void }) => {
    return (
        <ul className="nav-list">
            {items.map((link, i) => (
              <li key={`${link.label}-${i}`} className='nav-list-item'>
                  <Link className="nav-list-link" href={link.href} aria-label={link.ariaLabel} onClick={onLinkClick}>
                      <ArrowUpRight className="nav-list-link-icon" aria-hidden="true" />
                      {link.label}
                  </Link>
              </li>
            ))}
        </ul>
    )
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
                <Image src={logo} alt={logoAlt} className="logo" width={150} height={32} data-ai-hint="logo" priority />
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

        {isExpanded && (
          <div className="card-nav-content" aria-hidden={!isExpanded}>
              <NavList items={items} onLinkClick={() => setIsExpanded(false)} />
          </div>
        )}
      </nav>
    </div>
  );
};

export default CardNav;
