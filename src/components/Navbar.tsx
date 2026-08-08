import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingBag, Calendar, Phone, Globe, Menu as MenuIcon, X } from 'lucide-react';
import { Currency, Language } from '../types';
import { BLEUE_SHOP_INFO } from '../data/coffeeShopInfo';
import { BleueLogo } from './BleueLogo';

interface NavbarProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  onOpenReservation: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  setLang,
  currency,
  setCurrency,
  onOpenReservation,
  activeSection,
  setActiveSection
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    setIsOpenNow(hours >= 7 && hours < 23);
  }, []);

  const navLinks = [
    { id: 'menu', label: { en: 'Our Menu', fr: 'Notre Carte', ar: 'القائمة' } },
    { id: 'story', label: { en: 'The Maison', fr: 'La Maison', ar: 'قصتنا' } },
    { id: 'gallery', label: { en: 'Gallery', fr: 'Galerie', ar: 'الصور' } },
    { id: 'reviews', label: { en: 'Reviews', fr: 'Avis', ar: 'الآراء' } },
    { id: 'contact', label: { en: 'Location', fr: 'Accès & Contact', ar: 'التواصل والموقع' } },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-blue-100 py-3' 
        : 'bg-blue-950/90 backdrop-blur-sm border-blue-900/60 py-4 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Editorial Logo */}
          <a 
            href="#hero" 
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <BleueLogo className="w-10 h-10 transition-transform group-hover:scale-105 shadow-sm" />
            <div className="flex flex-col">
              <span className={`font-serif italic font-black tracking-tight text-xl transition-colors ${
                scrolled ? 'text-blue-900' : 'text-white'
              }`}>
                bleue<span className="font-sans not-italic text-blue-500 font-black">!</span>
              </span>
              <span className={`text-[9px] tracking-widest uppercase font-bold -mt-0.5 ${
                scrolled ? 'text-blue-700' : 'text-blue-200'
              }`}>
                Sidi Bou Said • Tunisia
              </span>
            </div>
          </a>

          {/* Desktop Editorial Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-all cursor-pointer pb-0.5 ${
                  activeSection === link.id
                    ? scrolled ? 'text-blue-900 border-b-2 border-blue-800 font-bold' : 'text-white border-b-2 border-blue-300 font-bold'
                    : scrolled ? 'text-blue-950/80 hover:text-blue-700 hover:border-b hover:border-blue-400' : 'text-blue-100 hover:text-white hover:border-b hover:border-white/50'
                }`}
              >
                {link.label[currentLang]}
              </button>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Status indicator */}
            <div className={`hidden xl:flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${
              isOpenNow 
                ? scrolled ? 'bg-blue-50 text-blue-900 border border-blue-200' : 'bg-white/10 text-blue-100 border border-white/20'
                : 'bg-amber-50 text-amber-800 border border-amber-200'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${isOpenNow ? 'bg-blue-600 animate-pulse' : 'bg-amber-500'}`} />
              {isOpenNow 
                ? (currentLang === 'fr' ? 'Ouvert 07h—23h' : currentLang === 'ar' ? 'مفتوح الان' : 'Open 07:00—23:00')
                : (currentLang === 'fr' ? 'Fermé' : currentLang === 'ar' ? 'مغلق الان' : 'Closed')
              }
            </div>

            {/* Language Switcher */}
            <div className="relative group">
              <button className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold tracking-wider uppercase border transition-all ${
                scrolled 
                  ? 'border-blue-200 bg-blue-50/50 text-blue-900 hover:bg-blue-100' 
                  : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
              }`}>
                <Globe className="w-3.5 h-3.5" />
                <span>{currentLang}</span>
              </button>
              <div className="absolute right-0 top-full mt-1 w-28 bg-white shadow-xl border border-blue-100 py-1.5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all z-50">
                <button
                  onClick={() => setLang('en')}
                  className={`w-full text-left px-3 py-1.5 text-xs font-semibold hover:bg-blue-50 flex items-center justify-between ${currentLang === 'en' ? 'text-blue-900 font-bold bg-blue-50' : 'text-slate-700'}`}
                >
                  <span>English</span>
                  {currentLang === 'en' && '✓'}
                </button>
                <button
                  onClick={() => setLang('fr')}
                  className={`w-full text-left px-3 py-1.5 text-xs font-semibold hover:bg-blue-50 flex items-center justify-between ${currentLang === 'fr' ? 'text-blue-900 font-bold bg-blue-50' : 'text-slate-700'}`}
                >
                  <span>Français</span>
                  {currentLang === 'fr' && '✓'}
                </button>
                <button
                  onClick={() => setLang('ar')}
                  className={`w-full text-left px-3 py-1.5 text-xs font-semibold hover:bg-blue-50 flex items-center justify-between ${currentLang === 'ar' ? 'text-blue-900 font-bold bg-blue-50' : 'text-slate-700'}`}
                >
                  <span>العربية</span>
                  {currentLang === 'ar' && '✓'}
                </button>
              </div>
            </div>

            {/* Currency Selector */}
            <div className={`flex items-center p-0.5 border text-xs font-bold tracking-wider ${
              scrolled ? 'border-blue-200 bg-blue-50/50' : 'border-white/20 bg-white/10 text-white'
            }`}>
              <button
                onClick={() => setCurrency('TND')}
                className={`px-2 py-0.5 transition-all ${
                  currency === 'TND' 
                    ? 'bg-blue-900 text-white' 
                    : scrolled ? 'text-blue-900 hover:text-blue-600' : 'text-blue-100 hover:text-white'
                }`}
              >
                TND
              </button>
              <button
                onClick={() => setCurrency('EUR')}
                className={`px-2 py-0.5 transition-all ${
                  currency === 'EUR' 
                    ? 'bg-blue-900 text-white' 
                    : scrolled ? 'text-blue-900 hover:text-blue-600' : 'text-blue-100 hover:text-white'
                }`}
              >
                €
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2 py-0.5 transition-all ${
                  currency === 'USD' 
                    ? 'bg-blue-900 text-white' 
                    : scrolled ? 'text-blue-900 hover:text-blue-600' : 'text-blue-100 hover:text-white'
                }`}
              >
                $
              </button>
            </div>

            {/* Table Reservation Button - Editorial Rectangular */}
            <button
              onClick={onOpenReservation}
              className="flex items-center gap-1.5 px-5 py-2.5 bg-blue-900 hover:bg-blue-950 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer border border-blue-800"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>
                {currentLang === 'fr' ? 'Réserver une table' : currentLang === 'ar' ? 'حجز طاولة' : 'Book Table'}
              </span>
            </button>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors ${
                scrolled ? 'text-blue-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-blue-100 shadow-xl px-4 pt-4 pb-6 mt-3 space-y-4 text-slate-800">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Lang:</span>
              <div className="flex gap-1">
                {(['en', 'fr', 'ar'] as Language[]).map(lang => (
                  <button
                    key={lang}
                    onClick={() => setLang(lang)}
                    className={`px-2.5 py-1 text-xs font-bold uppercase ${currentLang === lang ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700'}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold bg-slate-100 p-1">
              {(['TND', 'EUR', 'USD'] as Currency[]).map(c => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-2 py-0.5 ${currency === c ? 'bg-blue-900 text-white' : 'text-slate-600'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="w-full text-left py-2 px-3 uppercase tracking-widest font-semibold text-xs hover:bg-blue-50 text-blue-900 border-b border-slate-100"
              >
                {link.label[currentLang]}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenReservation(); }}
              className="w-full py-3 bg-blue-900 text-white font-semibold text-xs tracking-wider uppercase shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>
                {currentLang === 'fr' ? 'Réserver une table' : currentLang === 'ar' ? 'حجز طاولة' : 'Book a Table'}
              </span>
            </button>
            <a
              href={`tel:${BLEUE_SHOP_INFO.contacts.phonePrimary}`}
              className="w-full py-2.5 border border-blue-200 text-blue-900 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 bg-blue-50"
            >
              <Phone className="w-4 h-4" />
              <span>{BLEUE_SHOP_INFO.contacts.phonePrimary}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

