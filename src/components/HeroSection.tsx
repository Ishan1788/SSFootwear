import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import shoeImage from '../assets/shoe.png';

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textTranslateY = scrollY * 0.05;
  const textOpacity = Math.max(0.6, 1 - Math.min(scrollY * 0.001, 0.4));
  const indicatorOpacity = Math.max(0, 1 - scrollY * 0.008);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-primary"
    >
      {/* Subtle grid texture, matches the quiet dark-panel treatment used elsewhere on the site */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 40%, #ffffff 1px, transparent 1px),
              radial-gradient(circle at 70% 60%, #ffffff 1px, transparent 1px),
              radial-gradient(circle at 50% 80%, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Product photo, right side */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 z-0 flex items-center justify-end pr-8">
        <img
          src={shoeImage}
          alt="Nike LunarEpic Flyknit 2"
          className="w-full max-w-2xl object-contain floating-animation"
          style={{
            transform: 'rotate(12deg) scale(1.1)',
            transformOrigin: 'center center',
            filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.3))',
          }}
        />
        <div className="absolute bottom-1/3 right-1/4 w-1/2 h-16 bg-white/5 blur-3xl rounded-full" />
      </div>

      {/* Content, left side */}
      <div
        className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20"
        style={{
          transform: `translateY(${textTranslateY}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div className="max-w-xl text-white">
          <span
            className="font-technical text-label-technical uppercase tracking-[0.2em] text-white/40 block mb-6"
            style={{ opacity: textOpacity }}
          >
            // EST. 1995
          </span>

          <h1
            className="font-display-lg text-display-lg text-white mb-4 leading-[1.05] tracking-[-0.03em]"
            style={{ opacity: textOpacity }}
          >
            Crafted in Nepal.
          </h1>
          <h2
            className="font-heading text-headline-lg text-white/80 mb-6 leading-[1.1] tracking-[-0.02em]"
            style={{ opacity: textOpacity }}
          >
            Trusted Everywhere.
          </h2>

          <p
            className="font-body text-body-md text-white/60 max-w-md mb-10 leading-relaxed"
            style={{ opacity: Math.max(0.4, textOpacity) }}
          >
            Precision manufacturing meets traditional craftsmanship in our state-of-the-art facility.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/products">
              <button className="bg-accent text-white px-8 py-4 rounded-full font-technical text-label-technical uppercase tracking-widest hover:bg-accent/90 transition-colors shadow-lg">
                Shop Collection
              </button>
            </Link>
            <Link to="/factory">
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-technical text-label-technical uppercase tracking-widest hover:bg-white/10 transition-colors">
                Explore Our Factory
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        style={{ opacity: indicatorOpacity }}
      >
        <div className="flex flex-col items-center gap-2 text-white/20">
          <span className="font-technical text-label-technical uppercase tracking-widest text-[10px]">
            Scroll
          </span>
          <div className="w-px h-8 bg-white/10" />
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 md:hidden"
        style={{ opacity: indicatorOpacity }}
      >
        <p className="text-white/30 text-xs uppercase tracking-widest animate-bounce">
          Scroll
        </p>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: rotate(12deg) translateY(0px); }
          50% { transform: rotate(12deg) translateY(-12px); }
          100% { transform: rotate(12deg) translateY(0px); }
        }
        .floating-animation {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};