import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className={`text-xl md:text-2xl font-black tracking-wider transition-colors ${
              scrolled ? 'text-green-900' : 'text-white drop-shadow-lg'
            }`}
          >
            PIZZERÍA BOTÁNICO
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#pizzas-clasicas" 
              onClick={(e) => scrollToSection(e, 'pizzas-clasicas')}
              className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                scrolled 
                  ? 'text-stone-700 hover:text-green-700' 
                  : 'text-white/90 hover:text-white drop-shadow-md'
              }`}
            >
              Carta
            </a>
            <a 
              href="tel:853841190"
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                scrolled
                  ? 'bg-green-700 text-white hover:bg-green-800'
                  : 'bg-white text-green-900 hover:bg-stone-100'
              }`}
            >
              Llamar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
