import React, { useState } from 'react';
import { Camera, X, Maximize2 } from 'lucide-react';
import { Language } from '../types';
import { GALLERY_IMAGES } from '../data/coffeeShopInfo';

interface GallerySectionProps {
  currentLang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ currentLang }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-blue-950 text-white relative border-b border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-blue-800 pb-6 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300 block mb-2">
              {currentLang === 'fr' ? 'Galerie Photos & Ambiance' : currentLang === 'ar' ? 'معرض الصور' : 'Visual Portfolio'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif italic font-black text-white tracking-tight">
              {currentLang === 'fr' ? 'L\'Atmosphère de la Maison' : currentLang === 'ar' ? 'أجواء القهوة' : 'House Atmosphere'}
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-blue-200 leading-relaxed font-sans">
            {currentLang === 'fr' ? 'Aperçu visuel de notre terrasse baignée de soleil, de nos espressos et de nos viennoiseries faites maison.' : currentLang === 'ar' ? 'استكشف التراس الإطلالة، المشروبات والحلويات.' : 'Explore our sunny terrace, signature brews, and coastal Sidi Bou Said vibes.'}
          </p>
        </div>

        {/* Editorial Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="bg-blue-900/60 p-3 border border-blue-800 shadow-xl cursor-pointer group hover:border-blue-400 transition-all duration-300"
            >
              <div className="overflow-hidden h-60 border border-blue-900 relative">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 right-2 p-1.5 bg-blue-950/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="pt-3 pb-1 flex justify-between items-end">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-blue-300 font-bold block">
                    {img.category}
                  </span>
                  <h4 className="font-serif italic font-bold text-sm text-white">
                    {img.title}
                  </h4>
                </div>
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">No. 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-blue-950/95 backdrop-blur-md flex items-center justify-center p-4">
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white bg-blue-900 hover:bg-blue-800 p-3 border border-blue-700"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[85vh] overflow-hidden bg-white p-4 border border-blue-200">
            <img 
              src={GALLERY_IMAGES[lightboxIndex].src} 
              alt={GALLERY_IMAGES[lightboxIndex].title} 
              className="max-w-full max-h-[75vh] object-contain mx-auto border border-slate-200"
              referrerPolicy="no-referrer"
            />
            <p className="text-center font-serif italic text-blue-900 font-bold text-xl mt-3">
              {GALLERY_IMAGES[lightboxIndex].title}
            </p>
          </div>
        </div>
      )}

    </section>
  );
};

