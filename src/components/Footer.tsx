import React from 'react';
import { MapPin, Phone, Instagram, Facebook, Heart } from 'lucide-react';
import { Language } from '../types';
import { BLEUE_SHOP_INFO } from '../data/coffeeShopInfo';
import { BleueLogo } from './BleueLogo';

interface FooterProps {
  currentLang: Language;
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate }) => {
  return (
    <footer className="bg-blue-950 text-white border-t border-blue-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <BleueLogo className="w-10 h-10 shadow-sm" />
              <span className="text-3xl font-serif italic font-black tracking-tight text-white">
                bleue<span className="text-blue-400">!</span>
              </span>
            </div>
            <p className="text-xs text-blue-200 leading-relaxed font-sans">
              Café de Spécialité, Pâtisseries Artisanales & Terrasse vue mer à Sidi Bou Said, Tunis.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a 
                href={`https://instagram.com/${BLEUE_SHOP_INFO.contacts.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-900 hover:bg-blue-800 text-white flex items-center justify-center transition-colors border border-blue-800"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={`https://facebook.com/${BLEUE_SHOP_INFO.contacts.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-900 hover:bg-blue-800 text-white flex items-center justify-center transition-colors border border-blue-800"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif italic font-bold text-base text-white border-b border-blue-800 pb-2">
              Sommaire
            </h4>
            <ul className="space-y-2 text-xs text-blue-200 font-sans">
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-white transition-colors">
                  Menu & Tarifs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('story')} className="hover:text-white transition-colors">
                  L'Histoire de la Maison
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors">
                  Galerie Photos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reviews')} className="hover:text-white transition-colors">
                  Avis Clients
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Localisation & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Hours Summary */}
          <div className="space-y-3">
            <h4 className="font-serif italic font-bold text-base text-white border-b border-blue-800 pb-2">
              Horaires
            </h4>
            <div className="space-y-1.5 text-xs text-blue-200 font-sans">
              <div className="flex justify-between border-b border-dotted border-blue-900 pb-1">
                <span>Lun - Ven:</span>
                <span className="font-serif italic text-white font-bold">07:00 - 22:00</span>
              </div>
              <div className="flex justify-between border-b border-dotted border-blue-900 pb-1">
                <span>Samedi:</span>
                <span className="font-serif italic text-white font-bold">07:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche:</span>
                <span className="font-serif italic text-white font-bold">07:00 - 23:00</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif italic font-bold text-base text-white border-b border-blue-800 pb-2">
              Contact
            </h4>
            <div className="space-y-2 text-xs text-blue-200 font-sans">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Rue Habib Bourguiba, Sidi Bou Said, Tunis</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+216 71 740 000</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-900 text-center text-xs text-blue-300/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
          <p>© {new Date().getFullYear()} bleue! Coffee Shop — Sidi Bou Said, Tunis. Édition Spéciale.</p>
          <p className="flex items-center gap-1">
            Conçu avec <Heart className="w-3.5 h-3.5 text-blue-400 fill-blue-400" /> dans un esprit bleu & blanc
          </p>
        </div>

      </div>
    </footer>
  );
};

