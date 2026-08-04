import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { HeroSection } from '../components/HeroSection';
import { SectionHeading } from '../components/Shared/SectionHeading';
import { ProductCard } from '../components/Shared/ProductCard';

// ========== LOCAL IMAGES ==========
import blackImg from '../assets/black.png';
import doco2Img from '../assets/doco 2.jpg';
import eilaImg from '../assets/eila.jpg';
import gumyellowImg from '../assets/gumyellow.jpg';
import pandaBkImg from '../assets/panda bk.jpg';   // renamed
import patternImg from '../assets/pattern.png';
import pinkImg from '../assets/pink.png';
import schoolblackImg from '../assets/schoolblack.jpg';
import sportImg from '../assets/sport.png';
import sportshoeImg from '../assets/sportshoe.jpg';
import tradImg from '../assets/trad.png';
import whiteImg from '../assets/white.jpg';

// ========== DATA ==========

const bestSellers = [
  {
    id: '1',
    name: 'The Kathmandu Oxford',
    category: 'Premium Full-Grain Leather',
    price: 8500,
    rating: 4.8,
    colors: ['#2C1810', '#4A3728', '#1A1A1A'],
    sizes: ['7', '8', '9', '10', '11'],
    image: blackImg,
    hoverImage: patternImg,
    badge: 'Bestseller',
    isNew: false,
  },
  {
    id: '2',
    name: 'Alpine Low-Top',
    category: 'Everyday Essential',
    price: 5200,
    rating: 4.6,
    colors: ['#F5F5F5', '#D4D4D4', '#1A1A1A'],
    sizes: ['8', '9', '10', '11', '12'],
    image: pinkImg,
    hoverImage: sportshoeImg,
    badge: 'New',
    isNew: true,
  },
  {
    id: '3',
    name: 'Everest Logger',
    category: 'Industrial Grade',
    price: 9800,
    rating: 4.9,
    colors: ['#3D2B1F', '#5C4033', '#1A1A1A'],
    sizes: ['7', '8', '9', '10', '11'],
    image: tradImg,
    hoverImage: doco2Img,
    badge: 'Industrial',
    isNew: false,
  },
  {
    id: '4',
    name: 'City Chelsea',
    category: 'Urban Sophistication',
    price: 7500,
    rating: 4.7,
    colors: ['#1A1A1A', '#2C1810', '#4A3728'],
    sizes: ['8', '9', '10', '11'],
    image: gumyellowImg,
    hoverImage: pandaBkImg,
    badge: '',
    isNew: false,
  },
];

const categories = [
  { id: 'men', name: 'Men', image: tradImg },
  { id: 'women', name: 'Women', image: pinkImg },
  { id: 'kids', name: 'Kids', image: whiteImg },
  { id: 'school', name: 'School', image: schoolblackImg },
  { id: 'sports', name: 'Sports', image: sportImg },
  { id: 'industrial', name: 'Industrial', image: blackImg },
  { id: 'winter', name: 'Winter', image: gumyellowImg },
];

const timelineSteps = [
  { year: '1995', title: 'Founded', description: 'SS Footwear begins its journey in Kathmandu.' },
  { year: '2000', title: 'First Factory', description: 'Opened our first manufacturing facility.' },
  { year: '2010', title: 'Expansion', description: 'Reached 500+ dealers across Nepal.' },
  { year: '2015', title: 'Modernisation', description: 'Introduced automated cutting and stitching.' },
  { year: '2020', title: 'Global Standards', description: 'Achieved ISO 9001 certification.' },
  { year: '2024', title: 'Digital Flagship', description: 'Launched our premium online presence.' },
];

const testimonials = [
  {
    id: '1',
    name: 'Ramesh Thapa',
    role: 'Retailer, Kathmandu',
    text: 'SS Footwear has been our best-selling local brand for over 8 years. Quality and durability unmatched.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sita Gurung',
    role: 'School Administrator, Pokhara',
    text: 'We trust SS for all our school shoes. Comfortable, durable, and affordable.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Krishna Adhikari',
    role: 'Industrial Buyer, Biratnagar',
    text: 'The safety boots have excellent protection and last longer than imported brands.',
    rating: 4.5,
  },
];

// ========== COUNTER ==========

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value]);
  return <>{count}{suffix}</>;
}

// ========== MAIN ==========

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false });
  const countersRef = useRef<HTMLDivElement>(null);
  const isCountersInView = useInView(countersRef, { once: true, amount: 0.2 });

  useEffect(() => {
    document.title = 'SS Footwear – Engineered in Nepal. Designed for the World.';
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Premium footwear crafted in Nepal with precision and heritage.');
  }, []);

  return (
    <>
      <HeroSection />

      {/* Trust Strip */}
      <section ref={countersRef} className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10 bg-background">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y border-border/20 py-12">
          {[
            { label: 'Years of Excellence', value: 17, suffix: '+' },
            { label: 'Pairs Manufactured', value: 5, suffix: 'M+' },
            { label: 'Retail Partners', value: 500, suffix: '+' },
            { label: 'Made in Nepal', value: 100, suffix: '%' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isCountersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="font-heading text-headline-lg text-primary mb-1">
                {isCountersInView ? <Counter value={item.value} suffix={item.suffix} /> : '0'}
              </span>
              <span className="font-technical text-label-technical uppercase text-text-secondary tracking-widest">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
        <SectionHeading label="Shop by Category" title="Explore Our Collections" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${cat.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent group-hover:from-primary/60 transition-all" />
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="font-heading text-headline-lg-mobile text-white">{cat.name}</h3>
              </div>
              <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="pb-section-gap overflow-hidden relative z-10">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <SectionHeading
            label="Iconic Silhouettes"
            title="Best Sellers"
            rightElement={
              <div className="flex gap-4">
                <button onClick={() => emblaApi?.scrollPrev()} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button onClick={() => emblaApi?.scrollNext()} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            }
          />
        </div>
        <div className="pl-margin-mobile md:pl-margin-desktop overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {bestSellers.map((product) => (
              <div key={product.id} className="min-w-[280px] md:min-w-[340px] flex-shrink-0">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SS */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-muted-background relative z-10">
        <SectionHeading label="Why SS Footwear" title="Built to Last" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: 'factory', title: 'Made in Nepal', desc: 'Proudly manufactured in our own facility.' },
            { icon: 'eco', title: 'Premium Materials', desc: 'Sourced from the finest tanneries.' },
            { icon: 'comfort', title: 'Comfortable Fit', desc: 'Designed with ergonomic precision.' },
            { icon: 'quality', title: 'Quality Tested', desc: 'Rigorous checks at every stage.' },
            { icon: 'shipping', title: 'Fast Delivery', desc: 'Reliable shipping across Nepal.' },
            { icon: 'store', title: 'Trusted by Retailers', desc: '800+ partners nationwide.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 bg-surface rounded-sm border border-border/20"
            >
              <span className="material-symbols-outlined text-3xl text-primary">{item.icon}</span>
              <div>
                <h4 className="font-heading text-headline-lg-mobile text-primary">{item.title}</h4>
                <p className="font-body text-body-md text-text-secondary">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    

      {/* Lifestyle */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-muted-background relative z-10">
        <SectionHeading label="In Action" title="Lifestyle" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${doco2Img})` }} />
          <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${eilaImg})` }} />
          <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${sportshoeImg})` }} />
          <div className="md:col-span-2 aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${pandaBkImg})` }} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
        <SectionHeading label="What They Say" title="Testimonials" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-surface border border-border/20 rounded-sm"
            >
              <div className="flex gap-1 mb-4 text-secondary">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx} className="material-symbols-outlined text-sm">
                    {idx < Math.floor(t.rating) ? 'star' : 'star_outline'}
                  </span>
                ))}
              </div>
              <p className="font-body text-body-md text-text-secondary mb-4">“{t.text}”</p>
              <div>
                <p className="font-heading text-sm text-primary">{t.name}</p>
                <p className="font-technical text-label-technical text-text-secondary">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dealer CTA */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-primary text-white relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-technical text-label-technical uppercase tracking-widest text-white/60 block mb-4">
            // BECOME A PARTNER
          </span>
          <h2 className="font-display-lg text-display-lg mb-6">Join 800+ Trusted Dealers</h2>
          <p className="font-body text-body-md text-white/80 max-w-lg mx-auto mb-10">
            Access wholesale pricing, marketing support, and a dedicated account manager. Grow your business with Nepal’s premium footwear brand.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-accent">check_circle</span>
              <span className="text-sm">Wholesale Pricing</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-accent">check_circle</span>
              <span className="text-sm">Marketing Support</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-accent">check_circle</span>
              <span className="text-sm">Dedicated Account Manager</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-accent">check_circle</span>
              <span className="text-sm">Fast Delivery</span>
            </div>
          </div>
          <button className="bg-accent text-white px-8 py-4 rounded-full font-technical text-label-technical uppercase tracking-widest hover:bg-accent/90 transition-colors inline-flex items-center gap-2">
            Apply Now
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
        <SectionHeading label="Follow Us" title="@ssfootwear" />
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {[blackImg, pinkImg, tradImg, sportImg, whiteImg, patternImg].map((img, i) => (
            <div key={i} className="aspect-square bg-muted-background bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
          ))}
        </div>
      </section>
    </>
  );
}