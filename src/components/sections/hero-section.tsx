'use client';

import React, { type HTMLImageElement } from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { drinkVariants, type DrinkVariant } from '@/lib/drink-data';
import useImagePreloader from '@/hooks/use-image-preloader';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown, Twitter, Instagram, Facebook, LoaderCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const ANIMATION_SCROLL_HEIGHT = 4; // in viewport heights

interface HeroSectionProps {
  initialImages: HTMLImageElement[];
}

export default function HeroSection({ initialImages }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
  const [images, setImages] = useState<HTMLImageElement[]>(initialImages);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const currentVariant = drinkVariants[currentVariantIndex];
  const { urls: preloadUrls } = currentVariant.sequence;
  const { images: preloadedImages, loaded: variantLoaded } = useImagePreloader(preloadUrls);

  useEffect(() => {
    if (variantLoaded) {
      setImages(preloadedImages);
    }
  }, [variantLoaded, preloadedImages]);

  const changeVariant = useCallback((direction: 'next' | 'prev') => {
    setIsTextVisible(false);
    setTimeout(() => {
      setCurrentVariantIndex(prevIndex => {
        const total = drinkVariants.length;
        if (direction === 'next') {
          return (prevIndex + 1) % total;
        }
        return (prevIndex - 1 + total) % total;
      });
      setIsTextVisible(true);
    }, 500); // Corresponds to fade-in-out transition duration
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(0);
    };

    const drawFrame = (frameIndex: number) => {
        const img = images[frameIndex];
        if (!img || !img.complete || img.naturalHeight === 0) return;
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        const imgAspectRatio = img.width / img.height;
        const canvasAspectRatio = canvas.width / canvas.height;
        
        let drawWidth, drawHeight, x, y;

        if (imgAspectRatio > canvasAspectRatio) { // Image is wider
            drawHeight = canvas.height;
            drawWidth = drawHeight * imgAspectRatio;
            x = (canvas.width - drawWidth) / 2;
            y = 0;
        } else { // Image is taller or same aspect ratio
            drawWidth = canvas.width;
            drawHeight = drawWidth / imgAspectRatio;
            y = (canvas.height - drawHeight) / 2;
            x = 0;
        }
        
        context.drawImage(img, x, y, drawWidth, drawHeight);
    };

    let lastFrame = -1;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * ANIMATION_SCROLL_HEIGHT;
      const scrollFraction = Math.min(1, Math.max(0, scrollY / maxScroll));
      
      const frameIndex = Math.min(
        images.length - 1,
        Math.floor(scrollFraction * images.length)
      );

      if (frameIndex !== lastFrame) {
        requestAnimationFrame(() => drawFrame(frameIndex));
        lastFrame = frameIndex;
      }
    };
    
    resizeCanvas();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [images]);
  
  return (
    <div style={{ height: `${(ANIMATION_SCROLL_HEIGHT + 1) * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div 
          className="absolute inset-0"
          style={{ '--theme-accent': currentVariant.themeColor } as React.CSSProperties}
        >
          <div className="relative h-full w-full container mx-auto px-6 md:px-8">
            <div 
              className={cn(
                "absolute left-6 md:left-8 top-1/2 -translate-y-1/2 max-w-md text-white transition-opacity duration-500",
                isTextVisible ? 'opacity-100' : 'opacity-0'
              )}
            >
              <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mix-blend-difference">
                {currentVariant.name}
              </h1>
              <h2 className="text-2xl md:text-4xl font-light uppercase tracking-widest text-white/80 mix-blend-difference">
                {currentVariant.subtitle}
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/90 max-w-sm mix-blend-difference">
                {currentVariant.description}
              </p>
              <div className="mt-8 flex gap-4">
                <Button variant="outline" size="lg" className="rounded-full bg-transparent text-white border-white hover:bg-white hover:text-black">ADD TO</Button>
                <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/80">CART</Button>
              </div>
            </div>

            <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 flex items-center gap-4 text-white">
              <div className="text-right">
                <div className="relative">
                  {!variantLoaded && <LoaderCircle className="absolute -left-12 top-1/2 -translate-y-1/2 h-8 w-8 animate-spin text-white" />}
                  <span className="text-7xl md:text-9xl font-black tracking-tighter mix-blend-difference">
                    {(currentVariantIndex + 1).toString().padStart(2, '0')}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button onClick={() => changeVariant('prev')} aria-label="Previous variant" className="p-2 hover:text-accent transition-colors disabled:opacity-50" disabled={!isTextVisible}>
                  <span className="text-xs font-bold">PREV</span>
                  <ArrowUp className="h-6 w-6" />
                </button>
                <div className="h-16 w-px bg-white/50"></div>
                <button onClick={() => changeVariant('next')} aria-label="Next variant" className="p-2 hover:text-accent transition-colors disabled:opacity-50" disabled={!isTextVisible}>
                  <ArrowDown className="h-6 w-6" />
                  <span className="text-xs font-bold">NEXT</span>
                </button>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6 text-white mix-blend-difference">
              <a href="#" aria-label="Twitter" className="hover:opacity-70 transition-opacity"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity"><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook" className="hover:opacity-70 transition-opacity"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
