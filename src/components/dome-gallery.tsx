
"use client";

import { useEffect, useMemo, useRef, useCallback, useState } from 'react';
import { Link as LinkIcon, Video, Briefcase, BookOpen, User } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import './dome-gallery.css';


type ImageItem = {
    src: string;
    alt: string;
    student?: string;
    course?: string;
    projectLink?: string;
    company?: string;
    videoLink?: string;
};

const DEFAULTS = {
  maxVerticalRotationDeg: 5,
  dragSensitivity: 20,
  enlargeTransitionMs: 500,
  segments: 35
};

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
const normalizeAngle = (d: number) => ((d % 360) + 360) % 360;
const wrapAngleSigned = (deg: number) => {
  const a = (((deg + 180) % 360) + 360) % 360;
  return a - 180;
};
const getDataNumber = (el: HTMLElement, name: string, fallback: number) => {
  const attr = el.dataset[name] ?? el.getAttribute(`data-${name}`);
  const n = attr == null ? NaN : parseFloat(attr);
  return Number.isFinite(n) ? n : fallback;
};

function buildItems(pool: ImageItem[], seg: number) {
  const xCols = Array.from({ length: seg }, (_, i) => -37 + i * 2);
  const evenYs = [-4, -2, 0, 2, 4];
  const oddYs = [-3, -1, 1, 3, 5];

  const coords = xCols.flatMap((x, c) => {
    const ys = c % 2 === 0 ? evenYs : oddYs;
    return ys.map(y => ({ x, y, sizeX: 2, sizeY: 2 }));
  });

  const totalSlots = coords.length;
  if (pool.length === 0) {
    return coords.map(c => ({ ...c, src: '', alt: '', student: '', course: '', projectLink: '', company: '', videoLink: '' }));
  }
  if (pool.length > totalSlots) {
    console.warn(
      `[DomeGallery] Provided image count (${pool.length}) exceeds available tiles (${totalSlots}). Some images will not be shown.`
    );
  }

  const usedImages = Array.from({ length: totalSlots }, (_, i) => pool[i % pool.length]);

  return coords.map((c, i) => ({
    ...c,
    ...usedImages[i]
  }));
}

function computeItemBaseRotation(offsetX: number, offsetY: number, sizeX: number, sizeY: number, segments: number) {
  const unit = 360 / segments / 2;
  const rotateY = unit * (offsetX + (sizeX - 1) / 2);
  const rotateX = unit * (offsetY - (sizeY - 1) / 2);
  return { rotateX, rotateY };
}

export default function DomeGallery({
  images = [],
  fit = 0.5,
  fitBasis = 'auto',
  minRadius = 600,
  maxRadius = Infinity,
  padFactor = 0.1,
  overlayBlurColor = '#e2ebf0',
  maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg,
  dragSensitivity = DEFAULTS.dragSensitivity,
  enlargeTransitionMs = DEFAULTS.enlargeTransitionMs,
  segments = DEFAULTS.segments,
  dragDampening = 2,
  imageBorderRadius = '20px',
  openedImageBorderRadius = '20px',
  grayscale = true
}: {
    images: ImageItem[];
    fit?: number;
    fitBasis?: 'auto' | 'min' | 'max' | 'width' | 'height';
    minRadius?: number;
    maxRadius?: number;
    padFactor?: number;
    overlayBlurColor?: string;
    maxVerticalRotationDeg?: number;
    dragSensitivity?: number;
    enlargeTransitionMs?: number;
    segments?: number;
    dragDampening?: number;
    imageBorderRadius?: string;
    openedImageBorderRadius?: string;
    grayscale?: boolean;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);

  const [enlargedItem, setEnlargedItem] = useState<ImageItem & { element: HTMLDivElement } | null>(null);
  const [isEnlarging, setIsEnlarging] = useState(false);
  
  const rotationRef = useRef({ x: 0, y: 0 });
  const openStartedAtRef = useRef(0);

  const scrollLockedRef = useRef(false);
  const lockScroll = useCallback(() => {
    if (scrollLockedRef.current) return;
    scrollLockedRef.current = true;
    document.body.classList.add('dg-scroll-lock');
  }, []);
  const unlockScroll = useCallback(() => {
    if (!scrollLockedRef.current) return;
    if (isEnlarging) return;
    scrollLockedRef.current = false;
    document.body.classList.remove('dg-scroll-lock');
  }, [isEnlarging]);

  const items = useMemo(() => buildItems(images, segments), [images, segments]);

  const applyTransform = (xDeg: number, yDeg: number) => {
    const el = sphereRef.current;
    if (el) {
      el.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
    }
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver(entries => {
      const cr = entries[0].contentRect;
      const w = Math.max(1, cr.width), h = Math.max(1, cr.height);
      const minDim = Math.min(w, h), maxDim = Math.max(w, h), aspect = w / h;
      let basis;
      switch (fitBasis) {
        case 'min': basis = minDim; break;
        case 'max': basis = maxDim; break;
        case 'width': basis = w; break;
        case 'height': basis = h; break;
        default: basis = aspect >= 1.3 ? w : minDim;
      }
      let radius = basis * fit;
      const heightGuard = h * 1.35;
      radius = Math.min(radius, heightGuard);
      radius = clamp(radius, minRadius, maxRadius);
      
      const viewerPad = Math.max(8, Math.round(minDim * padFactor));
      root.style.setProperty('--radius', `${Math.round(radius)}px`);
      root.style.setProperty('--viewer-pad', `${viewerPad}px`);
      root.style.setProperty('--overlay-blur-color', overlayBlurColor);
      root.style.setProperty('--tile-radius', imageBorderRadius);
      root.style.setProperty('--enlarge-radius', openedImageBorderRadius);
      root.style.setProperty('--image-filter', grayscale ? 'grayscale(1)' : 'none');
      applyTransform(rotationRef.current.x, rotationRef.current.y);
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, [fit, fitBasis, minRadius, maxRadius, padFactor, overlayBlurColor, grayscale, imageBorderRadius, openedImageBorderRadius]);

  useEffect(() => { applyTransform(rotationRef.current.x, rotationRef.current.y); }, []);

  const closeItem = useCallback(() => {
    if (!enlargedItem) return;
    const parent = enlargedItem.element.parentElement as HTMLElement;
    parent.style.setProperty('--rot-y-delta', '0deg');
    parent.style.setProperty('--rot-x-delta', '0deg');
    enlargedItem.element.style.visibility = '';
    setEnlargedItem(null);
    setIsEnlarging(false);
    unlockScroll();
  }, [enlargedItem, unlockScroll]);
  
  useEffect(() => {
    const scrim = scrimRef.current;
    if (!scrim) return;
    scrim.addEventListener('click', closeItem);
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeItem(); };
    window.addEventListener('keydown', onKey);
    return () => {
      scrim.removeEventListener('click', closeItem);
      window.removeEventListener('keydown', onKey);
    };
  }, [closeItem]);

  const openItem = useCallback((el: HTMLDivElement) => {
    if (isEnlarging) return;
    openStartedAtRef.current = performance.now();
    lockScroll();
    
    const parent = el.parentElement as HTMLElement;
    const offsetX = getDataNumber(parent, 'offsetX', 0);
    const offsetY = getDataNumber(parent, 'offsetY', 0);
    const sizeX = getDataNumber(parent, 'sizeX', 2);
    const sizeY = getDataNumber(parent, 'sizeY', 2);
    const itemData = items.find(it => it.x === offsetX && it.y === offsetY);

    if (!itemData) return;

    setIsEnlarging(true);
    setEnlargedItem({ ...itemData, element: el });

    const parentRot = computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments);
    const parentY = normalizeAngle(parentRot.rotateY);
    const globalY = normalizeAngle(rotationRef.current.y);
    let rotY = -(parentY + globalY) % 360;
    if (rotY < -180) rotY += 360;
    const rotX = -parentRot.rotateX - rotationRef.current.x;

    parent.style.setProperty('--rot-y-delta', `${rotY}deg`);
    parent.style.setProperty('--rot-x-delta', `${rotX}deg`);
    el.style.visibility = 'hidden';
  }, [isEnlarging, items, lockScroll, segments]);
  
  const onTileClick = useCallback((e: React.MouseEvent<HTMLDivElement>, itemData: ImageItem) => {
    if (isEnlarging) return;
    openItem(e.currentTarget);
  }, [openItem, isEnlarging]);
  
  useEffect(() => { return () => { document.body.classList.remove('dg-scroll-lock'); }; }, []);

  return (
    <div ref={rootRef} className="sphere-root" style={{
        ['--segments-x']: segments,
        ['--segments-y']: segments,
        ['--overlay-blur-color']: overlayBlurColor,
        ['--tile-radius']: imageBorderRadius,
        ['--enlarge-radius']: openedImageBorderRadius,
        ['--image-filter']: grayscale ? 'grayscale(1)' : 'none'
    } as React.CSSProperties}>
      <main ref={mainRef} className="sphere-main">
        <div className="stage">
          <div ref={sphereRef} className="sphere">
            {items.map((it, i) => (
              <div key={`${it.x},${it.y},${i}`} className="item"
                data-src={it.src} data-offset-x={it.x} data-offset-y={it.y} data-size-x={it.sizeX} data-size-y={it.sizeY}
                style={{
                  ['--offset-x']: it.x, ['--offset-y']: it.y, ['--item-size-x']: it.sizeX, ['--item-size-y']: it.sizeY
                } as React.CSSProperties}>
                <div className="item__image" role="button" tabIndex={0}
                  aria-label={it.alt || 'Open image'}
                  onClick={(e) => onTileClick(e, it)}>
                  <Image src={it.src} draggable={false} alt={it.alt || ''} fill loading='lazy' sizes="(max-width: 768px) 10vw, 5vw"/>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overlay" />
        <div className="overlay overlay--blur" />
        <div className="edge-fade edge-fade--top" />
        <div className="edge-fade edge-fade--bottom" />

        <div className={cn("viewer", enlargedItem && "viewer--enlarged")} ref={viewerRef} data-enlarging={!!enlargedItem}>
          <div ref={scrimRef} className="scrim" onClick={closeItem}/>
            {enlargedItem && (
              <div 
                className="viewer-content"
              >
                <div className="frame">
                    <Image src={enlargedItem.src} alt={enlargedItem.alt} fill style={{objectFit: 'cover'}}/>
                </div>
                <div className="details">
                  <h2>{enlargedItem.student}</h2>
                  <div className="detail-item"><BookOpen /> {enlargedItem.course}</div>
                  <div className="detail-item"><Briefcase /> {enlargedItem.company}</div>
                  <div className="links">
                    {enlargedItem.projectLink && <Button asChild variant="link"><a href={enlargedItem.projectLink} target="_blank" rel="noopener noreferrer"><LinkIcon className="mr-2"/> Project Link</a></Button>}
                    {enlargedItem.videoLink && <Button asChild variant="link"><a href={enlargedItem.videoLink} target="_blank" rel="noopener noreferrer"><Video className="mr-2"/> Watch Video</a></Button>}
                  </div>
                </div>
              </div>
            )}
        </div>
      </main>
    </div>
  );
}
