
"use client";

import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import './CardNav.css';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

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
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
}: CardNavProps) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateExpandedHeight = () => {
    const contentEl = contentRef.current;
    if (!contentEl) return 260;

    const topBarHeight = 60;
    const padding = 32 * 2; // 2rem top and bottom padding
    let contentHeight = 0;

    // Temporarily make it visible to measure scrollHeight
    const wasVisible = contentEl.style.visibility;
    contentEl.style.visibility = 'visible';
    contentHeight = contentEl.scrollHeight;
    contentEl.style.visibility = wasVisible;
    
    return topBarHeight + contentHeight + padding;
  };
  
  const getExpandedWidth = () => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    return isMobile ? '90%' : '800px';
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    const containerEl = containerRef.current;
    const contentEl = contentRef.current;

    if (!navEl || !containerEl || !contentEl) return null;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(containerEl, { width: isMobile ? '90%' : '240px', maxWidth: isMobile ? 'none' : '240px' });
    gsap.set(contentEl, { opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(containerEl, {
      width: getExpandedWidth,
      maxWidth: getExpandedWidth,
      duration: 0.4,
      ease
    }, 0);
    
    tl.to(navEl, {
      height: calculateExpandedHeight,
      duration: 0.4,
      ease
    }, 0);

    tl.to(contentEl, { opacity: 1, duration: 0.4, ease }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    let tl = createTimeline();
    tlRef.current = tl;

    const handleResize = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (tl) tl.kill();

      if (isExpanded) {
        gsap.set(containerRef.current, { width: isMobile ? '90%' : '800px', maxWidth: isMobile ? '90%' : '800px' });
        gsap.set(navRef.current, { height: calculateExpandedHeight() });
      } else {
        gsap.set(containerRef.current, { width: isMobile ? '90%' : '240px', maxWidth: isMobile ? 'none' : '240px' });
        gsap.set(navRef.current, { height: 60 });
      }

      tl = createTimeline();
      if (isExpanded && tl) {
        tl.progress(1);
      }
      tlRef.current = tl;
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      tl?.kill();
      tlRef.current = null;
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items]);


  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };


  return (
    <div ref={containerRef} className={`card-nav-container ${className} ${isExpanded ? 'open' : ''}`}>
      <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`} style={{ backgroundColor: baseColor }}>
        <div className="card-nav-top">
          <div className="logo-container">
            <Link href="/" aria-label="Home">
                <Image src={logo} alt={logoAlt} className="logo" width={150} height={32} data-ai-hint="logo" />
            </Link>
          </div>
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#000' }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

        </div>

        <div ref={contentRef} className="card-nav-content" aria-hidden={!isExpanded}>
           <ul className="nav-list">
              {items.map((link, i) => (
                <li key={`${link.label}-${i}`} className='nav-list-item'>
                    <Link className="nav-list-link" href={link.href} aria-label={link.ariaLabel} onClick={() => {
                        setIsHamburgerOpen(false);
                        tlRef.current?.reverse();
                    }}>
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
