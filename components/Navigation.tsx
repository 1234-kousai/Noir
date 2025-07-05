'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Pain', href: '#pain-points' },
    { label: 'Menu', href: '#solution' },
    { label: 'Service', href: '#strengths' },
    { label: 'Results', href: '#results' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-noir-primary/95 backdrop-blur-md border-b border-noir-gold/20' 
          : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" className="relative group">
              <span className="text-3xl font-serif font-bold text-noir-gold tracking-wider">
                NOIR
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-noir-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <span className="text-xs font-sans font-light text-noir-light/60 ml-2 tracking-[0.3em] uppercase">
                Producers
              </span>
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-noir-light/80 hover:text-noir-gold transition-colors duration-200 text-sm font-medium tracking-wider uppercase group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-noir-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 bg-noir-gold text-noir-primary font-bold text-sm rounded-full hover:shadow-lg hover:shadow-noir-gold/50 transition-all duration-300 uppercase tracking-wider"
            >
              無料相談
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-noir-light hover:text-noir-gold transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-noir-light/80 hover:text-noir-gold transition-colors duration-200 uppercase tracking-wider text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}