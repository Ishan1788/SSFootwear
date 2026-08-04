import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/shared/SectionHeading';

// ========== IMPORT MACHINE IMAGES ==========
import hydraulicImg from '../assets/Hydraulic.jpg';
import rotaryImg from '../assets/Rotary.jpg';
import evaImg from '../assets/EVA.jpg';
import pvcImg from '../assets/PVC.jpg';
import sewingImg from '../assets/Sewing.jpg';

// ========== DATA ==========
const steps = [
  { step: '01', title: 'Lasting', desc: 'Shaping the leather over the wooden last to form the foundational structure.' },
  { step: '02', title: 'Welting', desc: 'Stitching the upper, insole, and welt together with precision.' },
  { step: '03', title: 'Bottoming', desc: 'Attaching and securing the outsole to the welt for maximum durability.' },
  { step: '04', title: 'Finishing', desc: 'Burnishing, polishing, and final inspection of every detail.' },
];

const artisans = [
  { name: 'Ram Shrestha', role: 'Master Cutter, 25 Years', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=center' },
  { name: 'Sita Gurung', role: 'Head of Finishing, 15 Years', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=center' },
];

// Machine data with descriptions
const machines = [
  {
    name: 'Hydraulic Cutting Machine',
    image: hydraulicImg,
    description: 'Used to cut leather, synthetic leather, EVA sheets, rubber, and fabric using steel cutting dies. Essential for shoe upper manufacturing.',
  },
  {
    name: 'Rotary Table PVC Sole Air Blowing Machine',
    image: rotaryImg,
    description: 'Produces PVC shoe soles through air-blowing injection molding. Features a rotating carousel with multiple molds for continuous production.',
  },
  {
    name: 'EVA Slipper Machine',
    image: evaImg,
    description: 'Specialized machinery for manufacturing EVA slippers, sandals, and flip-flops. Includes injection molding or foaming systems.',
  },
  {
    name: 'PVC Gumboot Machine',
    image: pvcImg,
    description: 'Injection molding machine designed to manufacture one-piece PVC safety boots and rain boots with precision and durability.',
  },
  {
    name: 'Industrial Sewing Machines',
    image: sewingImg,
    description: 'Heavy-duty sewing machines for stitching shoe uppers, leather, canvas, and components. Includes post-bed, cylinder-bed, and zigzag models.',
  },
];

export default function Factory() {
  useEffect(() => {
    document.title = 'Factory – SS Footwear';
  }, []);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=900&fit=crop&crop=center)',
          }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-white">
          <span className="font-technical text-label-technical uppercase tracking-widest text-white/60">
            // OUR FACTORY
          </span>
          <h1 className="font-display-lg text-display-lg mt-4 mb-6">Technical Craftsmanship</h1>
          <p className="font-body text-body-md text-white/80 max-w-lg">
            Where traditional Nepali artistry intersects with rigorous engineering. Precision at every stage.
          </p>
        </div>
      </section>

      {/* ===== HISTORY ===== */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <span className="font-technical text-label-technical uppercase text-text-secondary">01 // Heritage</span>
            <h2 className="font-heading text-headline-lg text-primary mt-4 mb-6">Forged in Precision</h2>
            <p className="font-body text-body-md text-text-secondary leading-relaxed">
              Founded in the foothills of the Himalayas, SS Footwear began as a modest workshop dedicated to the
              art of shoemaking. Over decades, we have refined our techniques, passing down knowledge from master to
              apprentice, while continuously integrating modern precision.
            </p>
            <a
              href="#"
              className="inline-block mt-6 font-technical text-label-technical uppercase text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity"
            >
              Read the full story
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:w-1/2 aspect-[4/3] bg-surface-container-low rounded-sm"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </section>

      {/* ===== MACHINES ===== */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-muted-background">
        <SectionHeading
          label="02 // Equipment"
          title="Our Manufacturing Machines"
          description="State-of-the-art machinery powering our production, from cutting to finishing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {machines.map((machine, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group bg-surface border border-border/20 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-container-low">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-headline-lg-mobile text-primary mb-2">{machine.name}</h3>
                <p className="font-body text-body-md text-text-secondary leading-relaxed">
                  {machine.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <SectionHeading label="03 // Sequence" title="Step-by-Step Construction" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border border-border p-6 hover:border-primary hover:shadow-md transition-all duration-300 rounded-sm"
            >
              <span className="font-technical text-label-technical text-primary">{s.step}</span>
              <h3 className="font-heading text-headline-lg-mobile text-primary mt-2 mb-3">{s.title}</h3>
              <p className="font-body text-body-md text-text-secondary">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== ARTISANS ===== */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-muted-background">
        <SectionHeading
          label="04 // Expertise"
          title="Masters of the Craft"
          description="Our factory is home to over 50 master artisans. Their hands shape every curve, their eyes inspect every seam."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {artisans.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden bg-surface-container-low shrink-0 border-2 border-primary/10">
                <img src={a.image} alt={a.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-heading text-headline-lg-mobile text-primary">{a.name}</h4>
                <p className="font-technical text-label-technical uppercase text-text-secondary">{a.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}