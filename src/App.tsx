import React, { useState } from 'react';
import { Currency, Language, MenuItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { ItemModal } from './components/ItemModal';
import { ReservationModal } from './components/ReservationModal';
import { StorySection } from './components/StorySection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setLang] = useState<Language>('fr');
  const [currency, setCurrency] = useState<Currency>('TND');
  const [activeSection, setActiveSection] = useState('hero');

  // Reservation modal state
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Selected item modal for detailed product view
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}>
      
      {/* Navbar */}
      <Navbar
        currentLang={currentLang}
        setLang={setLang}
        currency={currency}
        setCurrency={setCurrency}
        onOpenReservation={() => setIsReservationOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onExploreMenu={() => scrollToSection('menu')}
          onBookTable={() => setIsReservationOpen(true)}
        />

        {/* Menu Showcase Section */}
        <MenuSection
          currentLang={currentLang}
          currency={currency}
          onSelectItem={(item) => setSelectedItem(item)}
        />

        {/* Story Section */}
        <StorySection currentLang={currentLang} />

        {/* Gallery Section */}
        <GallerySection currentLang={currentLang} />

        {/* Reviews Section */}
        <ReviewsSection currentLang={currentLang} />

        {/* Contact & Location Section */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} onNavigate={scrollToSection} />

      {/* Product Detail Modal */}
      <ItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        currency={currency}
        currentLang={currentLang}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        currentLang={currentLang}
      />

    </div>
  );
}

