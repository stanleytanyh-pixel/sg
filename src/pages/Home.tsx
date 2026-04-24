
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { vehicles } from '../data';

const Home = () => {
  const featuredVehicle = vehicles[0];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-surface"
    >
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Car Close Up"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-white">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <span className="text-gold font-sans text-xs font-extrabold uppercase tracking-[0.5em] mb-4 block">
              Redefining Sophistication
            </span>
            <h1 className="font-serif text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 max-w-3xl">
              Where provenance meets <span className="italic font-light">performance.</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <Link 
                to="/collection"
                className="bg-gold text-primary px-10 py-5 text-xs font-extrabold uppercase tracking-widest hover:bg-white transition-all duration-500 flex items-center group shadow-2xl"
              >
                Explore Collection
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={16} />
              </Link>
              <Link 
                to="/about"
                className="text-white px-10 py-5 text-xs font-extrabold uppercase tracking-widest border border-white/30 hover:border-white transition-all duration-500"
              >
                Our Philosophy
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
            <div className="w-[1px] h-20 bg-white/20 relative overflow-hidden">
                <motion.div 
                    animate={{ y: [0, 80] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute top-0 left-0 w-full h-1/2 bg-gold"
                />
            </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl italic font-light leading-relaxed text-primary">
            "We do not merely sell cars. We curate assets that tell a story of engineering excellence and aesthetic purity."
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-12" />
        </div>
      </section>

      {/* Featured Vehicle */}
      <section className="py-24 bg-surface-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-gold font-sans text-[10px] font-extrabold uppercase tracking-[0.4em] mb-2 block">The Featured Piece</span>
              <h3 className="font-serif text-4xl md:text-5xl font-bold">Latest Acquisition</h3>
            </div>
            <Link to="/collection" className="text-xs uppercase tracking-widest font-bold flex items-center hover:text-gold transition-colors">
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 bg-white shadow-sm">
            <div className="overflow-hidden">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src={featuredVehicle.imageUrl}
                alt={featuredVehicle.model}
                className="w-full h-full min-h-[400px] object-cover"
              />
            </div>
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <span className="text-xs text-gray-400 font-bold tracking-[0.2em] uppercase mb-4">
                {featuredVehicle.year} • {featuredVehicle.make}
              </span>
              <h4 className="font-serif text-5xl font-bold mb-6 italic">{featuredVehicle.model}</h4>
              <p className="text-gray-600 font-serif leading-loose mb-10 text-lg">
                {featuredVehicle.curatorNote}
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Engine</span>
                  <span className="text-sm font-semibold">{featuredVehicle.engine}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Mileage</span>
                  <span className="text-sm font-semibold">{featuredVehicle.mileage}</span>
                </div>
              </div>
              <Link 
                to={`/collection?id=${featuredVehicle.id}`}
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest border-b border-primary hover:border-gold hover:text-gold transition-all w-fit pb-2"
              >
                Enquire Details <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div>
                   <span className="text-gold text-4xl font-serif italic mb-6 block">01.</span>
                   <h5 className="text-xl font-bold mb-4 uppercase tracking-wider">Provenance</h5>
                   <p className="text-gray-400 text-sm leading-relaxed font-serif font-light">
                      Every vehicle in our gallery undergoes a rigorous historical audit to ensure authenticity and ownership lineage.
                   </p>
                </div>
                <div>
                   <span className="text-gold text-4xl font-serif italic mb-6 block">02.</span>
                   <h5 className="text-xl font-bold mb-4 uppercase tracking-wider">Expertise</h5>
                   <p className="text-gray-400 text-sm leading-relaxed font-serif font-light">
                      Our curators are not just enthusiasts; they are respected industry veterans with decades of technical knowledge.
                   </p>
                </div>
                <div>
                   <span className="text-gold text-4xl font-serif italic mb-6 block">03.</span>
                   <h5 className="text-xl font-bold mb-4 uppercase tracking-wider">Concierge</h5>
                   <p className="text-gray-400 text-sm leading-relaxed font-serif font-light">
                      Beyond the acquisition, we offer a full suite of management services, from temperature-controlled storage to specialized detailing.
                   </p>
                </div>
            </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
