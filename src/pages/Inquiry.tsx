
import React from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Inquiry = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-[80vh] flex flex-col lg:flex-row"
    >
      {/* Left Sidebar Info */}
      <div className="lg:w-1/3 bg-primary text-white p-12 md:p-20 flex flex-col justify-between">
        <div>
          <span className="text-gold font-sans text-xs font-extrabold uppercase tracking-[0.5em] mb-6 block">Concierge Entry</span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tighter mb-12">Private Consultation</h1>
          
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
                <MapPin className="text-gold mt-1" size={20} />
                <div>
                   <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">The Gallery</h4>
                   <p className="text-sm font-medium leading-relaxed">
                      12 Leng Kee Road<br />
                      Singapore 159102
                   </p>
                </div>
            </div>
            <div className="flex items-start space-x-6">
                <Mail className="text-gold mt-1" size={20} />
                <div>
                   <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Direct Channel</h4>
                   <p className="text-sm font-medium">concierge@curatorsgallery.sg</p>
                </div>
            </div>
            <div className="flex items-start space-x-6">
                <Clock className="text-gold mt-1" size={20} />
                <div>
                   <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Operating Window</h4>
                   <p className="text-sm font-medium">Mon — Fri: 09:00 - 19:00<br />Sat: By Appointment Only</p>
                </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-gray-800">
            <p className="text-xs text-gray-500 leading-loose italic font-serif">
                Registration of interest is required for all showroom viewings. Our team typically responds within 4 business hours.
            </p>
        </div>
      </div>

      {/* Form Area */}
      <div className="flex-grow p-12 md:p-20 bg-surface">
        {!submitted ? (
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-12">Inquiry Details</h2>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group border-b border-gray-300 focus-within:border-gold transition-colors duration-500 py-2">
                    <label className="block text-[8px] uppercase tracking-widest font-bold text-gray-400 mb-1">Full Identity</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Sebastian Hamilton"
                      className="w-full bg-transparent outline-none text-sm font-semibold placeholder:text-gray-300"
                    />
                </div>
                <div className="group border-b border-gray-300 focus-within:border-gold transition-colors duration-500 py-2">
                    <label className="block text-[8px] uppercase tracking-widest font-bold text-gray-400 mb-1">Electronic Mail</label>
                    <input 
                      required
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full bg-transparent outline-none text-sm font-semibold placeholder:text-gray-300"
                    />
                </div>
              </div>

              <div className="group border-b border-gray-300 focus-within:border-gold transition-colors duration-500 py-2">
                  <label className="block text-[8px] uppercase tracking-widest font-bold text-gray-400 mb-1">Inquiry Category</label>
                  <select className="w-full bg-transparent outline-none text-sm font-semibold appearance-none">
                    <option>Acquiring a listed vehicle</option>
                    <option>Commissioning a global search</option>
                    <option>Selling a curated asset</option>
                    <option>Concierge & Storage services</option>
                  </select>
              </div>

              <div className="group border-b border-gray-300 focus-within:border-gold transition-colors duration-500 py-2">
                  <label className="block text-[8px] uppercase tracking-widest font-bold text-gray-400 mb-1">Confidential Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-transparent outline-none text-sm font-semibold placeholder:text-gray-300 resize-none"
                  />
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="bg-primary text-white px-12 py-5 text-xs font-extrabold uppercase tracking-widest hover:bg-gold transition-all duration-500 flex items-center group"
                >
                  Confirm Request
                  <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={14} />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="h-full flex flex-col justify-center items-center text-center max-w-md mx-auto">
             <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-8 text-primary"
             >
                <Send size={32} />
             </motion.div>
             <h2 className="font-serif text-4xl font-bold mb-6">Inquiry Received</h2>
             <p className="text-gray-600 font-serif italic mb-10 leading-loose">
               Your request has been prioritized and assigned to a senior curator. We will contact you shortly to arrange your private consultation.
             </p>
             <button 
               onClick={() => setSubmitted(false)}
               className="text-[10px] uppercase tracking-widest font-bold border-b border-primary hover:text-gold hover:border-gold transition-all pb-1"
             >
               Submit Another Request
             </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Inquiry;
