
import React from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { vehicles } from '../data';
import { Link } from 'react-router-dom';

const Collection = () => {
  const [filter, setFilter] = React.useState<'All' | 'Modern' | 'Heritage' | 'Bespoke'>('All');
  
  const filteredVehicles = filter === 'All' 
    ? vehicles 
    : vehicles.filter(v => v.category === filter);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24"
    >
      {/* Header */}
      <section className="pt-24 pb-12 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tighter mb-4">The Collection</h1>
            <p className="text-gray-500 max-w-sm text-sm font-serif italic leading-relaxed">
              A meticulously curated selection of the world's most desirable automotive assets.
            </p>
          </div>
          <div className="flex overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            {['All', 'Modern', 'Heritage', 'Bespoke'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap ${
                  filter === cat ? 'bg-primary text-white' : 'text-gray-400 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white px-6 py-4 border-b border-gray-100 flex justify-center sticky top-20 z-30">
        <div className="max-w-7xl w-full flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-gray-400">
          <span>{filteredVehicles.length} Pieces Available</span>
          <div className="flex space-x-6">
            <button className="flex items-center hover:text-primary transition-colors">
              Sort By <ArrowRight size={12} className="ml-1 rotate-90" />
            </button>
            <button className="flex items-center hover:text-primary transition-colors">
              Grid View <Filter size={12} className="ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                <img 
                  src={vehicle.imageUrl} 
                  alt={vehicle.model}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                />
                <div className="absolute top-6 left-6 flex space-x-2">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[8px] font-extrabold uppercase tracking-widest shadow-sm">
                    {vehicle.category}
                  </span>
                  {vehicle.status === 'Acquired' && (
                    <span className="bg-primary text-white px-3 py-1 text-[8px] font-extrabold uppercase tracking-widest">
                      Sold
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 leading-none">
                    {vehicle.year} {vehicle.make}
                  </h3>
                  <h4 className="font-serif text-3xl font-bold group-hover:text-gold transition-colors italic">
                    {vehicle.model}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] uppercase tracking-widest text-gold font-bold mb-1">
                    Enquire for Price
                  </span>
                  <p className="text-xs text-gray-500 font-medium">
                    {vehicle.mileage} • {vehicle.engine}
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                 <Link to="/inquiry" className="text-[10px] uppercase tracking-widest font-bold flex items-center hover:text-gold">
                   Private Viewing Details <ArrowRight size={12} className="ml-2" />
                 </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-32 px-6">
        <div className="max-w-7xl mx-auto bg-primary py-24 px-12 text-center text-white">
            <span className="text-gold text-[10px] font-extrabold uppercase tracking-[0.4em] mb-6 block">Bespoke Requests</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Looking for something specific?</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-12 font-serif italic italic leading-relaxed">
              If our current gallery does not hold what you seek, our global network can procure and authenticate any asset on your behalf.
            </p>
            <Link 
              to="/inquiry" 
              className="bg-white text-primary px-12 py-5 text-xs font-extrabold uppercase tracking-widest hover:bg-gold transition-all"
            >
              Contact Acquisitions
            </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Collection;
