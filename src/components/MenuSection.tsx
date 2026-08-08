import React, { useState } from 'react';
import { Search, Clock, Info, ChevronRight, Eye } from 'lucide-react';
import { Category, Currency, Language, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menuData';

interface MenuSectionProps {
  currentLang: Language;
  currency: Currency;
  onSelectItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  currentLang,
  currency,
  onSelectItem
}) => {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [activeTag, setActiveTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const convertPrice = (tnd: number): string => {
    if (currency === 'EUR') {
      return `€${(tnd * 0.29).toFixed(2)}`;
    }
    if (currency === 'USD') {
      return `$${(tnd * 0.32).toFixed(2)}`;
    }
    return `${tnd.toFixed(2)} TND`;
  };

  const categories: { id: Category | 'all'; label: { en: string; fr: string; ar: string } }[] = [
    { id: 'all', label: { en: 'All Items', fr: 'Tout le Menu', ar: 'الكل' } },
    { id: 'coffee', label: { en: 'Specialty Coffee', fr: 'Café de Spécialité', ar: 'القهوة المختصة' } },
    { id: 'cold_drinks', label: { en: 'Cold Drinks', fr: 'Boissons Fraîches', ar: 'المشروبات الباردة' } },
    { id: 'pastries', label: { en: 'Bakery & Pastries', fr: 'Viennoiseries', ar: 'الحلويات والمخبوزات' } },
    { id: 'brunch', label: { en: 'Brunch & Bowls', fr: 'Brunch & Plats', ar: 'الفطور والوجبات' } },
    { id: 'tea_desserts', label: { en: 'Teas & Desserts', fr: 'Thés & Desserts', ar: 'الشاي والحلو' } },
  ];

  const tags = [
    { id: 'all', label: { en: 'All', fr: 'Tous', ar: 'الكل' } },
    { id: 'signature', label: { en: '★ Signature', fr: '★ Spécialités', ar: '★ المميز' } },
    { id: 'popular', label: { en: 'Popular', fr: 'Populaires', ar: 'الأكثر طلباً' } },
    { id: 'vegan', label: { en: 'Vegan', fr: 'Végétalien', ar: 'نباتي' } },
    { id: 'gluten_free', label: { en: 'Gluten-Free', fr: 'Sans Gluten', ar: 'خالي من الغلوتين' } },
  ];

  const filteredItems = MENU_ITEMS.filter(item => {
    if (activeCategory !== 'all' && item.category !== activeCategory) {
      return false;
    }
    if (activeTag !== 'all') {
      if (!item.tags.includes(activeTag as any)) return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const nameMatch = item.name.en.toLowerCase().includes(q) || 
                        item.name.fr.toLowerCase().includes(q) || 
                        item.name.ar.includes(q);
      const descMatch = item.description.en.toLowerCase().includes(q) || 
                        item.description.fr.toLowerCase().includes(q) || 
                        item.description.ar.includes(q);
      if (!nameMatch && !descMatch) return false;
    }
    return true;
  });

  return (
    <section id="menu" className="py-20 bg-white text-slate-900 relative border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-blue-900/20 pb-6 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-800 block mb-2">
              {currentLang === 'fr' ? 'La Sélection du Moment' : currentLang === 'ar' ? 'مختارات الموسم' : 'Seasonal Selection'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif italic font-black text-blue-900 tracking-tight">
              {currentLang === 'fr' ? 'Notre Carte Artisanale' : currentLang === 'ar' ? 'قائمة القهوة والمخبوزات' : 'Editorial Menu'}
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            {currentLang === 'fr' 
              ? 'Découvrez nos cafés de spécialité torréfiés localement, nos pâtisseries préparées chaque matin et nos créations fraîches.'
              : currentLang === 'ar'
              ? 'أفضل حبوب القهوة، المخبوزات الحرفية، والمشروبات الباردة المنعشة.'
              : 'Freshly roasted specialty beans, handmade pastries, and Mediterranean refreshers.'}
          </p>
        </div>

        {/* Search & Category Navigation */}
        <div className="space-y-6 mb-12">
          
          {/* Search Input Box */}
          <div className="max-w-md relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-blue-900" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                currentLang === 'fr' 
                  ? 'Rechercher un café, viennoiserie, smoothie...' 
                  : currentLang === 'ar' 
                  ? 'ابحث عن قهوة، كرواسون، سموذي...' 
                  : 'Search espresso, pastry, smoothie...'
              }
              className="w-full pl-10 pr-4 py-3 bg-blue-50/50 border border-blue-200 focus:border-blue-900 focus:outline-none text-xs font-semibold tracking-wide text-blue-950 placeholder:text-blue-900/50"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs - Editorial Border Style */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'bg-slate-50 text-slate-700 hover:bg-blue-50 border border-slate-200'
                }`}
              >
                {cat.label[currentLang]}
              </button>
            ))}
          </div>

          {/* Filter Tags */}
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] mr-1">Filtre:</span>
            {tags.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTag(t.id)}
                className={`px-3 py-1 font-semibold text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                  activeTag === t.id
                    ? 'bg-blue-800 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t.label[currentLang]}
              </button>
            ))}
          </div>

        </div>

        {/* Menu Items Grid - Editorial Layout */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-blue-50/40 border border-dashed border-blue-200 max-w-lg mx-auto p-8">
            <Info className="w-8 h-8 text-blue-900 mx-auto mb-3" />
            <h3 className="text-base font-serif italic font-bold text-blue-900">
              {currentLang === 'fr' ? 'Aucun produit trouvé' : currentLang === 'ar' ? 'لم يتم العثور على نتائج' : 'No items found'}
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              {currentLang === 'fr' ? 'Essayez de modifier votre recherche ou vos filtres.' : currentLang === 'ar' ? 'جرب البحث بكلمات أخرى.' : 'Try adjusting your search query or filters.'}
            </p>
            <button
              onClick={() => { setActiveCategory('all'); setActiveTag('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-blue-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-950"
            >
              Réinitialiser
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectItem(item)}
                  className="bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                >
                  
                  {/* Image with Tag Overlay */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.name[currentLang]}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Tags on top */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {item.tags.includes('signature') && (
                        <span className="px-2 py-0.5 bg-blue-900 text-white font-bold text-[9px] uppercase tracking-widest shadow-md">
                          ★ Signature
                        </span>
                      )}
                      {item.tags.includes('popular') && (
                        <span className="px-2 py-0.5 bg-blue-700 text-white font-bold text-[9px] uppercase tracking-widest shadow-md">
                          Incontournable
                        </span>
                      )}
                    </div>

                    {/* Prep time badge */}
                    {item.prepTime && (
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-white bg-blue-950/80 px-2 py-0.5">
                        <Clock className="w-3 h-3 text-blue-300" />
                        <span>{item.prepTime}</span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Title & Price Header */}
                      <div className="flex justify-between items-baseline border-b border-dotted border-slate-300 pb-2">
                        <h3 className="font-serif italic font-bold text-blue-900 text-lg group-hover:text-blue-700 transition-colors">
                          {item.name[currentLang]}
                        </h3>
                        <span className="font-serif italic font-bold text-blue-900 text-lg ml-2 whitespace-nowrap">
                          {convertPrice(item.priceTND)}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                        {item.description[currentLang]}
                      </p>
                    </div>

                    {/* Bottom Action Button - View Details */}
                    <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        {item.category}
                      </span>

                      <div className="flex items-center gap-1.5 text-blue-900 group-hover:text-blue-700 font-bold text-xs tracking-wider uppercase transition-colors">
                        <Eye className="w-3.5 h-3.5" />
                        <span>
                          {currentLang === 'fr' ? 'Détails' : currentLang === 'ar' ? 'التفاصيل' : 'Details'}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};


