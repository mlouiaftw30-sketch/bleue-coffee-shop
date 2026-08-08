import React from 'react';
import { MapPin, Star, Coffee, Clock, ArrowRight, ExternalLink, Calendar } from 'lucide-react';
import { Language } from '../types';
import { BLEUE_SHOP_INFO } from '../data/coffeeShopInfo';
import { BleueLogo } from './BleueLogo';
import heroImg from '../assets/images/hero_bleue_cafe_1786126320816.jpg';

interface HeroProps {
  currentLang: Language;
  onExploreMenu: () => void;
  onBookTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onExploreMenu, onBookTable }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-blue-950 text-white">
      
      {/* Background Image with Deep Blue Editorial Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src={heroImg} 
          alt="Bleue! Coffee Shop Sidi Bou Said" 
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & Editorial Actions */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Tag & Location */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-blue-900/80 border border-blue-700/80 text-xs font-bold uppercase tracking-widest text-blue-200">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Sidi Bou Said • Tunisia</span>
              <span className="w-1 h-1 rounded-full bg-blue-300" />
              <a 
                href={BLEUE_SHOP_INFO.location.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white flex items-center gap-1 underline decoration-blue-400/50"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Main Editorial Headline */}
            <div className="relative">
              <div className="w-20 h-1 bg-blue-500 mb-6" />
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif italic font-black leading-[1.05] text-white">
                {currentLang === 'fr' ? (
                  <>
                    Café de Spécialité <br />
                    <span className="text-blue-300 not-italic font-sans font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight block mt-2">
                      Vue Méditerranée
                    </span>
                  </>
                ) : currentLang === 'ar' ? (
                  <>
                    قهوة مختصة واستراحة <br />
                    <span className="text-blue-300 not-italic font-sans font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight block mt-2">
                      في قلب سيدي بوسعيد
                    </span>
                  </>
                ) : (
                  <>
                    Artisanal Coffee & <br />
                    <span className="text-blue-300 not-italic font-sans font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight block mt-2">
                      Mediterranean View
                    </span>
                  </>
                )}
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-blue-100/90 max-w-xl font-light leading-relaxed border-l-2 border-blue-700 pl-4">
              {BLEUE_SHOP_INFO.tagline[currentLang]} — {currentLang === 'fr' ? 'Situé près de la mosquée Al Ghofrane, découvrez nos espressos de spécialité, nos pâtisseries fraîches et notre terrasse baignée de soleil.' : currentLang === 'ar' ? 'بجانب جامع الغفران، استمتع بأفضل قهوة أرابيكا، الحلويات الفاخرة، والإطلالة الساحرة.' : 'Located near Mosque Al Ghofrane, discover specialty single-origin coffee, handmade pastries, and sunny balcony seating.'}
            </p>

            {/* Editorial CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreMenu}
                className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-widest transition-all cursor-pointer border border-blue-400/30 shadow-2xl"
              >
                <Coffee className="w-4 h-4" />
                <span>
                  {currentLang === 'fr' ? 'Notre Menu' : currentLang === 'ar' ? 'استعرض القائمة' : 'Explore Menu'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onBookTable}
                className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs uppercase tracking-widest transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-blue-300" />
                <span>
                  {currentLang === 'fr' ? 'Réserver une table' : currentLang === 'ar' ? 'حجز طاولة' : 'Reserve Table'}
                </span>
              </button>
            </div>

            {/* Editorial Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-blue-900/80 max-w-xl">
              <div>
                <div className="text-2xl font-serif italic text-white font-bold">4.9 / 5.0</div>
                <div className="text-[10px] uppercase tracking-widest text-blue-300 font-semibold mt-1">
                  {currentLang === 'fr' ? '120+ Avis Google' : currentLang === 'ar' ? 'تقييم جوجل' : '120+ Google Reviews'}
                </div>
              </div>

              <div>
                <div className="text-2xl font-serif italic text-white font-bold">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-blue-300 font-semibold mt-1">
                  {currentLang === 'fr' ? 'Arabica Spécialité' : currentLang === 'ar' ? 'أرابيكا نقي' : 'Specialty Arabica'}
                </div>
              </div>

              <div>
                <div className="text-2xl font-serif italic text-white font-bold">07:00—23:00</div>
                <div className="text-[10px] uppercase tracking-widest text-blue-300 font-semibold mt-1">
                  {currentLang === 'fr' ? 'Ouvert 7j/7' : currentLang === 'ar' ? 'يومياً' : 'Open Everyday'}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Editorial Framed Image Card */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="bg-white text-slate-900 p-8 shadow-2xl relative border border-blue-100">
              <div className="absolute -top-5 -right-5 z-20">
                <BleueLogo className="w-16 h-16 shadow-xl" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-end border-b border-slate-200 pb-2 pr-12">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-900">Maison bleue!</span>
                  <span className="text-xs font-serif italic text-slate-500">Sidi Bou Said</span>
                </div>
                <div className="overflow-hidden h-72 border border-slate-100">
                  <img 
                    src={heroImg} 
                    alt="Bleue! Sidi Bou Said Terrace" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif italic font-bold text-blue-900">
                    L'Art du Café à Sidi Bou Said
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    Profitez de nos sélections exclusives torréfiées localement, servies dans un cadre d'exception surplombant le golfe de Tunis.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 text-blue-900 text-[11px] font-bold uppercase tracking-wider flex justify-between items-center border border-blue-100">
                  <span>Rue Habib Bourguiba</span>
                  <span>+216 71 740 000</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

