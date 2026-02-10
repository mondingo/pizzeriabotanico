
import React, { Suspense, lazy, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { MENU, PHONE_NUMBER, FORMATTED_PHONE } from './constants';
import { Phone, MapPin, Clock, ChevronDown, ArrowLeft } from 'lucide-react';

// Lazy loading de componentes que no están en el primer vistazo (LCP)
const MenuSection = lazy(() => import('./components/MenuSection'));

type Page = 'home' | 'legal' | 'privacy';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Volver arriba al cambiar de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

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

  const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Pizzeria+Botanico+Avenida+Andalucia+41+Alcala+la+Real+Jaen";
  const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.867907534433!2d-3.924844623418189!3d37.46377773016489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6e9176e7300001%3A0x7d00000000000000!2sAv.%20de%20Andaluc%C3%ADa%2C%2041%2C%2023680%20Alcal%C3%A1%20la%20Real%2C%20Ja%C3%A9n!5e0!3m2!1ses!2ses!4v1715000000000!5m2!1ses!2ses";

  if (currentPage === 'legal') {
    return (
      <div className="min-h-screen bg-stone-50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 text-green-800 font-bold mb-10 hover:gap-3 transition-all"
          >
            <ArrowLeft size={20} /> Volver a la pizzería
          </button>
          <h1 className="text-4xl font-black text-green-950 mb-8 uppercase tracking-tighter">Aviso Legal</h1>
          <div className="prose prose-stone max-w-none text-stone-600 space-y-6">
            <p>En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), le informamos de los datos de identidad de la empresa:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Titular:</strong> Pizzería Botánico</li>
              <li><strong>Domicilio Social:</strong> Av. de Andalucía, 41, 23680 Alcalá la Real, Jaén</li>
              <li><strong>Teléfono:</strong> {PHONE_NUMBER}</li>
              <li><strong>Actividad:</strong> Restauración y servicio de pizzería artesanal.</li>
            </ul>
            <p>El acceso y uso de este sitio web atribuye la condición de usuario, implicando la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.</p>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-stone-50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 text-green-800 font-bold mb-10 hover:gap-3 transition-all"
          >
            <ArrowLeft size={20} /> Volver a la pizzería
          </button>
          <h1 className="text-4xl font-black text-green-950 mb-8 uppercase tracking-tighter">Política de Privacidad</h1>
          <div className="prose prose-stone max-w-none text-stone-600 space-y-6">
            <p>Pizzería Botánico garantiza la protección y confidencialidad de los datos personales que nos proporcionen de acuerdo con lo dispuesto en el Reglamento General de Protección de Datos (UE) 2016/679.</p>
            <h2 className="text-xl font-bold text-stone-900 mt-8">¿Con qué finalidad tratamos sus datos?</h2>
            <p>Tratamos la información que nos facilita con el fin de prestarle el servicio solicitado, realizar la facturación del mismo y gestionar las reservas.</p>
            <h2 className="text-xl font-bold text-stone-900 mt-8">Sus Derechos</h2>
            <p>Cualquier persona tiene derecho a obtener confirmación sobre si en Pizzería Botánico estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-green-100 selection:text-green-900 bg-[#f2f2ef] antialiased">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=2454&auto=format&fit=crop" 
            alt="Pizzería Botánico - Nuestra Pizza Especial" 
            className="w-full h-full object-cover scale-110 animate-slow-zoom"
            style={{ objectPosition: 'center 95%' }}
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#f2f2ef] via-transparent to-transparent opacity-90"></div>
        </div>

        {/* Optimizado el espaciado para el nuevo nav mini */}
        <div className="container mx-auto px-4 z-10 text-center text-white mt-[-5vh] md:mt-0 md:pt-24">
          <h1 className="flex flex-col items-center mb-6 drop-shadow-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <span className="text-lg md:text-2xl font-serif italic text-stone-200 tracking-[0.3em] mb-3 uppercase">
              Las mejores
            </span>
            <span className="text-6xl md:text-[11rem] lg:text-[13rem] font-black uppercase tracking-[-0.05em] leading-[0.7] mb-2 drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)]">
              Pizzas
            </span>
            <div className="flex items-center gap-4 w-full max-w-xl px-4">
              <div className="h-[1.5px] flex-grow bg-white/30"></div>
              <span className="text-lg md:text-4xl font-light uppercase tracking-[0.4em] text-white whitespace-nowrap drop-shadow-md">
                Artesanales
              </span>
              <div className="h-[1.5px] flex-grow bg-white/30"></div>
            </div>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <a 
              href="#pizzas-clasicas" 
              onClick={(e) => scrollToSection(e, 'pizzas-clasicas')}
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-white text-green-950 rounded-full font-bold text-xs overflow-hidden transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 uppercase tracking-[0.2em]">Ver la Carta</span>
              <div className="relative z-10 transition-transform duration-300 group-hover:translate-y-0.5">
                <ChevronDown size={14} strokeWidth={3} />
              </div>
              <div className="absolute inset-0 bg-stone-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slow-zoom {
            from { transform: scale(1.05); }
            to { transform: scale(1.15); }
          }
          .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
          .animate-slow-zoom { animation: slow-zoom 30s infinite alternate ease-in-out; }
        `}} />
      </section>

      {/* Info Boxes */}
      <section className="py-20 relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Horario */}
                <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-stone-200/50 flex flex-col items-center text-center group transition-all duration-300 hover:border-stone-400">
                  <div className="w-14 h-14 bg-stone-50 text-stone-700 rounded-2xl flex items-center justify-center mb-6">
                    <Clock size={28} />
                  </div>
                  <h3 className="text-3xl font-serif font-black italic text-green-900 mb-6 tracking-tight">Horario</h3>
                  <div className="w-full space-y-3 text-sm text-stone-600">
                    <div className="flex justify-between border-b border-stone-100 pb-3">
                      <span className="font-bold text-stone-800">Lunes y Jueves</span>
                      <span className="font-medium">19:30 – 00:00</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-100 pb-3">
                      <span className="font-bold text-stone-800">Martes y Miércoles</span>
                      <span className="text-red-500 font-black uppercase text-xs tracking-widest">Cerrado</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="font-bold text-stone-800">Vie - Dom</span>
                      <div className="text-right font-medium">
                        <p>13:30 – 16:00</p>
                        <p>19:30 – 00:00</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Ubicación */}
                <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-stone-200/50 flex flex-col items-center text-center group transition-all duration-300 hover:border-stone-400">
                  <div className="w-14 h-14 bg-stone-50 text-stone-700 rounded-2xl flex items-center justify-center mb-6">
                    <MapPin size={28} />
                  </div>
                  <h3 className="text-3xl font-serif font-black italic text-green-900 mb-6 tracking-tight">Ubicación</h3>
                  <div className="text-stone-900 leading-relaxed text-base font-semibold mb-6">
                    <p>Avenida Andalucia, 41</p>
                    <p className="text-stone-500">Alcalá la Real (Jaén)</p>
                  </div>
                  <a 
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-8 py-3 bg-stone-900 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-full overflow-hidden transition-all hover:bg-green-800 hover:scale-105 active:scale-95"
                  >
                    <span className="relative z-10">ABRIR MAPA</span>
                  </a>
                </div>

                {/* Pedidos */}
                <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-stone-200/50 flex flex-col items-center text-center group transition-all duration-300 hover:border-stone-400">
                  <div className="w-14 h-14 bg-stone-50 text-stone-700 rounded-2xl flex items-center justify-center mb-6">
                    <Phone size={28} />
                  </div>
                  <h3 className="text-3xl font-serif font-black italic text-green-900 mb-6 tracking-tight">Pedidos</h3>
                  <p className="text-stone-500 mb-8 text-sm font-medium">Reserva tu mesa o pide para recoger:</p>
                  <a href={FORMATTED_PHONE} className="text-green-900 font-black text-2xl md:text-3xl hover:text-green-600 transition-colors tracking-tighter">
                    {PHONE_NUMBER}
                  </a>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <main className="container mx-auto px-4 pb-40">
        <div className="max-w-5xl mx-auto">
          <Suspense fallback={<div className="py-20 text-center text-stone-400 font-bold uppercase tracking-widest text-xs">Cargando la carta...</div>}>
            {MENU.map((category) => (
              <MenuSection key={category.id} category={category} />
            ))}
          </Suspense>
        </div>
      </main>

      {/* Footer con Mapa */}
      <footer className="bg-stone-950 text-stone-500 pt-24 pb-12 rounded-t-[80px] md:rounded-t-[120px]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-16">
            <span className="text-white text-3xl font-black tracking-[0.3em] uppercase">PIZZERÍA BOTÁNICO</span>
            <span className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.5em] mt-4 border-t border-white/10 pt-4">Auténtica Pizza Artesanal · Alcalá la Real</span>
          </div>

          {/* Mapa Integrado */}
          <div className="max-w-5xl mx-auto mb-16 px-4">
            <div className="relative w-full h-[400px] rounded-[40px] overflow-hidden shadow-2xl border border-white/5 grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
              <iframe 
                src={MAPS_EMBED_URL}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Pizzería Botánico"
                className="opacity-80 hover:opacity-100 transition-opacity duration-500"
              ></iframe>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
            <p className="opacity-30 leading-loose">
              © {new Date().getFullYear()} Pizzería Botánico.
            </p>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setCurrentPage('legal')}
                className="opacity-30 hover:opacity-100 transition-opacity duration-300"
              >
                Aviso Legal
              </button>
              <span className="opacity-10">•</span>
              <button 
                onClick={() => setCurrentPage('privacy')}
                className="opacity-30 hover:opacity-100 transition-opacity duration-300"
              >
                Privacidad
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a 
        href={FORMATTED_PHONE}
        aria-label="Llamar para pedir"
        className="fixed bottom-8 right-8 z-40 bg-green-700 text-white w-16 h-16 rounded-full shadow-[0_10px_40px_rgba(21,128,61,0.5)] flex items-center justify-center active:scale-90 transition-all hover:scale-110 hover:bg-green-800"
      >
        <Phone size={28} fill="currentColor" />
      </a>
    </div>
  );
};

export default App;
