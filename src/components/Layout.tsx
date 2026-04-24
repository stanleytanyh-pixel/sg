
import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Instagram, Facebook, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/collection' },
    { name: 'About', path: '/about' },
    { name: 'Inquiry', path: '/inquiry' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        <Link to="/" className="flex flex-col">
          <span className="font-serif text-2xl font-bold tracking-tighter leading-none">THE CURATOR'S</span>
          <span className="font-sans text-[10px] tracking-[0.4em] font-extrabold text-gold -mt-1 uppercase">Sgcarmart Luxury</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-300 ${
                  isActive ? 'text-gold' : 'text-primary hover:text-gold'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button className="p-2 text-primary hover:text-gold transition-colors">
            <Search size={18} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl p-8 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif font-medium"
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-1">
           <Link to="/" className="flex flex-col mb-8">
            <span className="font-serif text-3xl font-bold tracking-tighter leading-none">THE CURATOR'S</span>
            <span className="font-sans text-[12px] tracking-[0.4em] font-extrabold text-gold -mt-1 uppercase">Sgcarmart Luxury</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-serif font-light italic">
            Celebrating the art of the automobile. A curated gallery for those who understand that a car is more than just transportation.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-gold">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/collection" className="hover:text-gold transition-colors">Our Collection</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Our Philosophy</Link></li>
            <li><Link to="/inquiry" className="hover:text-gold transition-colors">Private Viewing</Link></li>
            <li><Link to="/" className="hover:text-gold transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-gold">Concierge</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li>12 Leng Kee Road, Singapore 159102</li>
            <li>+65 6789 1234</li>
            <li>concierge@curatorsgallery.sg</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-gold">Newsletter</h4>
          <div className="flex border-b border-gray-700 pb-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent text-sm w-full outline-none"
            />
            <button className="text-gold"><ArrowRight size={18} /></button>
          </div>
          <div className="flex space-x-4 mt-8">
            <Instagram size={20} className="text-gray-400 hover:text-gold cursor-pointer" />
            <Facebook size={20} className="text-gray-400 hover:text-gold cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-gray-800 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-gray-500">
        <span>© 2024 Sgcarmart Luxury. All Rights Reserved.</span>
        <span>Site by Design Bureau</span>
      </div>
    </footer>
  );
};

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
