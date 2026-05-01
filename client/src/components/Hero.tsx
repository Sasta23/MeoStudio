/**
 * HERO SECTION
 * 
 * Design Philosophy: Cinematic Dark Elegance
 * - Full-screen hero with dramatic background image
 * - Bold typography with strong visual hierarchy
 * - Minimal CTAs with smooth hover effects
 * - Parallax depth effect on scroll
 */

import { Button } from '@/components/ui/button';
import { heroContent } from '@/lib/content';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663615859972/c5NaTdaTnTqEWfFDhijioZ/hero-cinematic-dark-2-budYghZBn3k57ofJLqcUqr.webp';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current && contentRef.current) {
        const scrollY = window.scrollY;
        contentRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-background"
      id="hero"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${HERO_IMAGE}')`,
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
      >
        {/* Headline */}
        <h1 className="mb-4 text-white drop-shadow-lg">
          {heroContent.headline}
        </h1>

        {/* Tagline */}
        <p className="mb-12 max-w-2xl text-lg text-gray-200 drop-shadow-md md:text-xl">
          {heroContent.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            onClick={() => {
              document.getElementById('portfolio')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            {heroContent.ctaPrimary}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-base font-semibold transition-all duration-300"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            {heroContent.ctaSecondary}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary" size={32} />
      </div>
    </section>
  );
}
