import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Work', 'Services', 'Process', 'Contact'];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream-100/90 backdrop-blur-md shadow-sm py-4 border-b border-cream-300/50' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded border-2 border-sage-500 flex items-center justify-center bg-sage-500/10">
            <span className="font-serif font-bold text-sage-600 text-lg leading-none pr-[1px]">R</span>
          </div>
          <div>
            <h1 className="font-sans font-bold text-ink-900 leading-none text-lg tracking-wide uppercase">Ramanan Murugan</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-ink-500 mt-1">Business Analyst</p>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex gap-10 text-xs font-bold uppercase tracking-widest text-ink-500">
            {links.map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-ink-900 transition-colors pb-2 border-b-2 border-transparent hover:border-sage-500">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="hidden lg:block">
          <a href="/RAMANAN_RESUME.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Resume &rarr;
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="lg:hidden text-ink-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-cream-50 shadow-xl py-8 flex flex-col items-center gap-6 border-t border-cream-300"
        >
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-ink-500 hover:text-ink-900 text-sm font-bold uppercase tracking-widest">
              {link}
            </a>
          ))}
          <a href="/RAMANAN_RESUME.pdf" target="_blank" className="btn-primary mt-4">Resume &rarr;</a>
        </motion.div>
      )}
    </nav>
  );
}
