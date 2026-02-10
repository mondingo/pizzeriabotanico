
import React, { useState, useEffect, useRef } from 'react';
import { MENU } from '../constants';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsDropdownOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
      isScrolled ? 'pt-6' : 'pt-8'
    }`}>
      {/* Floating Pill - Enhanced Size for Desktop */}
      <div className={`relative flex items-center justify-between px-8 md:px-14 py-3.5 md:py-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled 
          ? 'w-[90%] md:w-auto md:min-w-[600px] bg-white/70 backdrop-blur-2xl rounded-full border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)]' 
          : 'w-full max-w-7xl bg-transparent rounded-none border-transparent'
      }`}>
        
        {/* Brand - Much bolder on Desktop */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center group overflow-hidden"
        >
          <span className={`text-base md:text-2xl font-black uppercase tracking-[0.4em] transition-all duration-500 ${
            isScrolled ? 'text-stone-900' : 'text-white'
          }`}>
            Botánico
          </span>
        </a>

        {/* Desktop Navigation - Large & Crisp */}
        <div className="hidden md:flex items-center gap-16">
          <a 
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className={`text-xs font-black uppercase tracking-[0.3em] transition-all duration-300 hover:opacity-100 relative group ${
              isScrolled ? 'text-stone-800' : 'text-white/90'
            }`}
          >
            Inicio
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full ${isScrolled ? 'bg-stone-900' : 'bg-white'}`}></span>
          </a>

          <div className="relative" ref={dropdownRef}>
            <button 
              onMouseEnter={() => setIsDropdownOpen(true)}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] transition-all duration-300 ${
                isScrolled ? 'text-stone-800' : 'text-white/90'
              }`}
            >
              La Carta
              <ChevronDown size={14} className={`transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Micro-Dropdown - Refined with bigger text */}
            <div 
              onMouseLeave={() => setIsDropdownOpen(false)}
              className={`absolute top-full right-0 mt-6 w-56 bg-white/90 backdrop-blur-3xl rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-stone-100 overflow-hidden transition-all duration-500 origin-top-right ${
                isDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
              }`}
            >
              <div className="p-2">
                {MENU.map((cat) => (
                  <a 
                    key={cat.id} 
                    href={`#${cat.id}`}
                    onClick={(e) => scrollToSection(e, cat.id)}
                    className="block px-6 py-3.5 text-[10px] font-black text-stone-600 hover:text-green-800 hover:bg-stone-50 rounded-2xl transition-all uppercase tracking-[0.2em]"
                  >
                    {cat.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Minimal Toggle */}
        <div className="md:hidden flex items-center" ref={mobileRef}>
          <button 
            className={`p-1.5 transition-all active:scale-90 ${
              isScrolled || isMobileMenuOpen ? 'text-stone-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
          </button>

          {/* Compact Mobile Menu */}
          <div className={`absolute top-full right-0 mt-4 w-64 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-white/50 overflow-hidden transition-all duration-500 origin-top-right ${
            isMobileMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 -translate-y-6 pointer-events-none'
          }`}>
            <div className="p-5 space-y-1">
              <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, 'home')}
                className="block px-6 py-4 text-[11px] font-black text-stone-400 hover:text-stone-900 uppercase tracking-[0.4em] transition-colors"
              >
                Inicio
              </a>
              <div className="h-px bg-stone-100/50 mx-6"></div>
              {MENU.map((cat) => (
                <a 
                  key={cat.id} 
                  href={`#${cat.id}`}
                  onClick={(e) => scrollToSection(e, cat.id)}
                  className="block px-6 py-4 text-[11px] font-black text-stone-900 uppercase tracking-[0.3em] transition-colors hover:text-green-700"
                >
                  {cat.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
