
import React from 'react';
import { motion } from 'motion/react';
import { milestones, curators } from '../data';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-surface"
    >
      {/* Intro */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-gold font-sans text-xs font-extrabold uppercase tracking-[0.5em] mb-4 block">The Legacy</span>
            <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tighter mb-10 leading-[0.95]">
                Curating excellence since <span className="italic font-light">2008.</span>
            </h1>
          </div>
          <div className="space-y-8">
            <p className="font-serif text-xl italic font-light leading-relaxed text-gray-700">
              The Curator's Gallery was born from a simple observation: that truly exceptional automobiles are not merely commodities, but cultural artifacts that deserve specialized stewardship.
            </p>
            <p className="text-gray-600 leading-loose text-sm font-medium">
              As a specialized division of Sgcarmart, we bridge the gap between anonymous marketplaces and the world's most discerning collectors. Our philosophy is rooted in total transparency, technical mastery, and the belief that every car has a unique narrative that must be preserved.
            </p>
          </div>
        </div>
      </section>

      {/* Image Strip */}
      <section className="h-[60vh] relative overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Interior workshop"
        />
        <div className="absolute inset-0 bg-primary/20" />
      </section>

      {/* Milestones */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-24 items-end">
            <h2 className="font-serif text-5xl font-bold italic">Defining Moments</h2>
            <div className="w-1/3 h-[1px] bg-gray-200 hidden md:block mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {milestones.map((ms, idx) => (
              <div key={idx} className="group">
                <span className="text-[64px] font-serif font-bold text-gray-100 group-hover:text-gold transition-colors duration-500 leading-none block mb-6">
                  {ms.year}
                </span>
                <h3 className="text-xs font-extrabold uppercase tracking-widest mb-4">{ms.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-serif font-light">{ms.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curators */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
            <span className="text-gold font-sans text-[10px] font-extrabold uppercase tracking-[0.4em] mb-4 block">Meet the Minds</span>
            <h2 className="font-serif text-5xl font-bold">The Curators</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
          {curators.map((curator, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
              <div className="w-48 h-48 flex-shrink-0 relative">
                <img 
                    src={curator.imageUrl} 
                    alt={curator.name}
                    className="w-full h-full object-cover grayscale"
                />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gold flex items-center justify-center text-primary font-serif font-bold italic">
                  {idx + 1}
                </div>
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold italic mb-1">{curator.name}</h3>
                <span className="text-[10px] uppercase tracking-widest font-bold text-gold block mb-6">{curator.role}</span>
                <p className="text-gray-500 text-sm leading-relaxed font-serif font-light mb-6 italic">
                  "{curator.bio}"
                </p>
                <div className="inline-block border-l-2 border-gold pl-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 block mb-1">Focus</span>
                    <span className="text-xs font-bold text-primary">{curator.specialty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Banner */}
      <section className="bg-surface-dark py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl italic leading-relaxed text-gray-800">
                "Provenance is our foundation. Ethics are our engine. Satisfaction is our ultimate destination."
            </h2>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
