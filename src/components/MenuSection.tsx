
import React, { memo } from 'react';
import { MenuCategory } from '../types';
import { Pizza, Leaf, Soup, Dessert, Star } from 'lucide-react';

interface MenuSectionProps {
  category: MenuCategory;
}

const getCategoryIcon = (id: string) => {
  if (id.includes('pizza')) return <Pizza size={20} className="text-green-600" />;
  if (id.includes('ensalada')) return <Leaf size={20} className="text-green-600" />;
  if (id.includes('pasta')) return <Soup size={20} className="text-green-600" />;
  if (id.includes('postres')) return <Dessert size={20} className="text-green-600" />;
  return <Star size={20} className="text-green-600" />;
};

const MenuSection: React.FC<MenuSectionProps> = memo(({ category }) => {
  return (
    <section id={category.id} className="py-16 md:py-20 scroll-mt-24">
      <div className="flex flex-col items-center mb-12 md:mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1.5px] w-8 bg-green-200"></div>
          {getCategoryIcon(category.id)}
          <div className="h-[1.5px] w-8 bg-green-200"></div>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-green-950 text-center uppercase tracking-tighter">
          {category.title}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {category.items.map((item, idx) => (
          <div 
            key={`${category.id}-${idx}`} 
            className="group bg-white rounded-[40px] p-8 md:p-10 border border-stone-200/60 shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col items-center text-center justify-center min-h-[200px]"
          >
            <div className="flex flex-col items-center w-full space-y-3">
              <h3 className="text-xl md:text-2xl font-bold text-green-900 leading-tight tracking-[0.05em] uppercase">
                {item.name}
              </h3>
              
              {item.description && (
                <p className="text-stone-500 leading-relaxed font-medium text-sm md:text-base italic max-w-[280px] md:max-w-xs opacity-80">
                  {item.description}
                </p>
              )}

              <div className="pt-2 flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-black text-stone-900 tracking-tighter">
                  {item.price}
                </span>
                <div className="mt-2 h-1 w-6 bg-green-100 rounded-full group-hover:w-12 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

MenuSection.displayName = 'MenuSection';

export default MenuSection;
