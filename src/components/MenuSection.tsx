import React from 'react';
import { MenuCategory } from '../types';

interface MenuSectionProps {
  category: MenuCategory;
}

const MenuSection: React.FC<MenuSectionProps> = ({ category }) => {
  return (
    <section id={category.id} className="mb-32 scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black text-green-950 mb-4 tracking-tight">
          {category.title}
        </h2>
        <div className="w-24 h-1.5 bg-green-700 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid gap-6">
        {category.items.map((item, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-[30px] shadow-lg border border-stone-200/50 hover:shadow-xl transition-all duration-300 hover:border-stone-300"
          >
            <div className="flex justify-between items-start gap-6">
              <div className="flex-grow">
                <h3 className="text-2xl font-black text-green-900 mb-2 tracking-tight">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-stone-600 text-base leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-3xl font-black text-green-700 tracking-tight">
                  {item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
