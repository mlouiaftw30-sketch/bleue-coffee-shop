import React from 'react';
import { Coffee, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { BLEUE_SHOP_INFO } from '../data/coffeeShopInfo';
import { BleueLogo } from './BleueLogo';
import interiorImg from '../assets/images/cafe_ambiance_1786126351783.jpg';

interface StorySectionProps {
  currentLang: Language;
}

export const StorySection: React.FC<StorySectionProps> = ({ currentLang }) => {
  return (
    <section id="story" className="py-20 bg-blue-50/50 text-slate-900 relative border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Side - Editorial Layout */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
                {currentLang === 'fr' ? 'L\'Histoire de la Maison' : currentLang === 'ar' ? 'قصتنا' : 'The House Story'}
              </span>
              <div className="w-16 h-1 bg-blue-800" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-serif italic font-black text-blue-900 leading-tight">
              {currentLang === 'fr' 
                ? 'Une Passion pour le Café au Cœur de Sidi Bou Said' 
                : currentLang === 'ar' 
                ? 'شغف القهوة في قلب سيدي بوسعيد الساحرة' 
                : 'A Passion for Specialty Coffee on Sidi Bou Said Hill'}
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans border-l-2 border-blue-200 pl-4 italic">
              {BLEUE_SHOP_INFO.story[currentLang]}
            </p>

            {/* Editorial Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {BLEUE_SHOP_INFO.features.map((feat, idx) => (
                <div key={idx} className="p-4 bg-white border border-blue-100 space-y-1">
                  <h4 className="font-serif italic font-bold text-sm text-blue-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-800 shrink-0" />
                    <span>{feat.title[currentLang]}</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal font-sans">
                    {feat.desc[currentLang]}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Image Side - Editorial Framed */}
          <div className="lg:col-span-6 relative">
            <div className="bg-white p-6 border border-blue-200 shadow-xl space-y-4">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-blue-900 border-b border-slate-200 pb-2">
                <div className="flex items-center gap-2">
                  <BleueLogo className="w-6 h-6" />
                  <span>Maison bleue!</span>
                </div>
                <span>Sidi Bou Said</span>
              </div>
              <div className="overflow-hidden h-[360px] border border-slate-100">
                <img 
                  src={interiorImg} 
                  alt="Bleue! Coffee Shop Interior" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-blue-900 text-white flex justify-between items-center text-xs font-semibold uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-blue-300" />
                  <span>100% Arabica Micro-Batch</span>
                </div>
                <span>Tunis Roastery</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

