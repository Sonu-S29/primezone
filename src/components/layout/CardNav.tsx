
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

interface NavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: NavLink[];
}

interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: NavItem[];
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
  buttonBgColor,
  buttonTextColor
}: CardNavProps) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateExpandedHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  };
  
  const getExpandedWidth = () => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    return isMobile ? '90%' : '800px';
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    const containerEl = containerRef.current;
    if (!navEl || !containerEl) return null;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(containerEl, { width: isMobile ? '90%' : '240px', maxWidth: isMobile ? 'none' : '240px' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

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

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

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

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div ref={containerRef} className={`card-nav-container ${className} ${isExpanded ? 'open' : ''}`}>
      <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`} style={{ backgroundColor: baseColor }}>
        <div className="card-nav-top">
          <div className="logo-container">
            <Link href="/" aria-label="Home">
                <Image src={logo} alt={logoAlt} className="logo" width={150} height={28} data-ai-hint="logo" />
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

           <Link href="/enroll" passHref legacyBehavior>
              <Button
                asChild={false}
                style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
                className="card-nav-cta-button"
              >
                  <a>Enroll Now</a>
              </Button>
           </Link>

        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links?.map((lnk, i) => (
                  <Link key={`${lnk.label}-${i}`} className="nav-card-link" href={lnk.href} aria-label={lnk.ariaLabel} onClick={() => {
                    setIsHamburgerOpen(false);
                    tlRef.current?.reverse();
                  }}>
                    <ArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                    {lnk.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
