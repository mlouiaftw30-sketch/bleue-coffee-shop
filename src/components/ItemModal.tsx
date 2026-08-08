import React from 'react';
import { X, Clock, Flame, Info, ChevronRight } from 'lucide-react';
import { Currency, Language, MenuItem } from '../types';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  currency: Currency;
  currentLang: Language;
}

export const ItemModal: React.FC<ItemModalProps> = ({
  item,
  onClose,
  currency,
  currentLang
}) => {
  if (!item) return null;

  const convertPrice = (tnd: number): string => {
    if (currency === 'EUR') return `€${(tnd * 0.29).toFixed(2)}`;
    if (currency === 'USD') return `$${(tnd * 0.32).toFixed(2)}`;
    return `${tnd.toFixed(2)} TND`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white max-w-lg w-full overflow-hidden shadow-2xl border border-blue-200 flex flex-col max-h-[90vh]">
        
        {/* Header Image */}
        <div className="relative h-60 bg-slate-100 shrink-0">
          <img 
            src={item.image} 
            alt={item.name[currentLang]} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-blue-900 text-white p-2 hover:bg-blue-950 transition-colors shadow-md cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-3 left-4 flex gap-1.5 flex-wrap">
            {item.tags.map(t => (
              <span key={t} className="px-2.5 py-1 bg-blue-900 text-white font-bold text-[10px] uppercase tracking-widest shadow-sm">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          <div>
            <div className="flex items-start justify-between gap-4 border-b border-dotted border-slate-300 pb-3">
              <h2 className="text-2xl font-serif italic font-bold text-blue-900">
                {item.name[currentLang]}
              </h2>
              <div className="text-2xl font-serif italic font-bold text-blue-900 whitespace-nowrap">
                {convertPrice(item.priceTND)}
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed font-sans">
              {item.description[currentLang]}
            </p>
          </div>

          {/* Calorie & Prep info */}
          <div className="flex items-center gap-4 py-2.5 px-4 bg-blue-50/70 border border-blue-100 text-xs text-blue-900 font-sans">
            {item.calories && (
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-600" />
                <span>Calories: <strong className="text-blue-950 font-bold">{item.calories} kcal</strong></span>
              </div>
            )}
            {item.prepTime && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-800" />
                <span>Temps de prép: <strong className="text-blue-950 font-bold">{item.prepTime}</strong></span>
              </div>
            )}
          </div>

          {/* Milk Options Available */}
          {item.options?.milk && item.options.milk.length > 0 && (
            <div className="space-y-2 font-sans">
              <label className="text-xs font-bold uppercase tracking-widest text-blue-900 block">
                {currentLang === 'fr' ? 'Variétés de Lait Disponibles' : currentLang === 'ar' ? 'أنواع الحليب المتاحة' : 'Available Milk Options'}
              </label>
              <div className="flex flex-wrap gap-2">
                {item.options.milk.map(m => (
                  <span
                    key={m}
                    className="py-1.5 px-3 bg-slate-100 text-slate-800 border border-slate-200 text-xs font-medium"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Sweetness Options Available */}
          {item.options?.sweetness && item.options.sweetness.length > 0 && (
            <div className="space-y-2 font-sans">
              <label className="text-xs font-bold uppercase tracking-widest text-blue-900 block">
                {currentLang === 'fr' ? 'Niveaux de Sucre' : currentLang === 'ar' ? 'درجات الحلاوة' : 'Sweetness Levels'}
              </label>
              <div className="flex flex-wrap gap-2">
                {item.options.sweetness.map(s => (
                  <span
                    key={s}
                    className="py-1.5 px-3 bg-slate-100 text-slate-800 border border-slate-200 text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Extras Available */}
          {item.options?.extras && item.options.extras.length > 0 && (
            <div className="space-y-2 font-sans">
              <label className="text-xs font-bold uppercase tracking-widest text-blue-900 block">
                {currentLang === 'fr' ? 'Suppléments Proposés' : currentLang === 'ar' ? 'الإضافات المتاحة' : 'Available Extras'}
              </label>
              <div className="space-y-1.5">
                {item.options.extras.map(ex => (
                  <div
                    key={ex.name}
                    className="py-2 px-3 bg-blue-50/40 border border-blue-100 text-xs flex items-center justify-between text-slate-800"
                  >
                    <span>+ {ex.name}</span>
                    <span className="font-serif italic font-bold text-blue-900">{convertPrice(ex.priceTND)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-blue-50/50 border-t border-blue-100 flex items-center justify-end">
          <button
            onClick={onClose}
            className="w-full py-3 px-6 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>{currentLang === 'fr' ? 'Fermer la Fiche' : currentLang === 'ar' ? 'إغلاق' : 'Close Details'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};


