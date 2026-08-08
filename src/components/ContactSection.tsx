import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2, ExternalLink, Navigation } from 'lucide-react';
import { Language } from '../types';
import { BLEUE_SHOP_INFO } from '../data/coffeeShopInfo';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !message) return;
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setSenderName('');
      setSenderEmail('');
      setMessage('');
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white text-slate-900 relative border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-blue-900/20 pb-6 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-800 block mb-2">
              {currentLang === 'fr' ? 'Informations & Réservations' : currentLang === 'ar' ? 'التواصل والموقع' : 'Location & Contacts'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif italic font-black text-blue-900 tracking-tight">
              {currentLang === 'fr' ? 'Nous Trouver à Sidi Bou Said' : currentLang === 'ar' ? 'تفضل بزيارتنا' : 'Visit Sidi Bou Said'}
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            {currentLang === 'fr' 
              ? 'Situé près de la mosquée Al Ghofrane, au cœur du village pittoresque.'
              : currentLang === 'ar'
              ? 'تواصل معنا أو زرنا مباشرة بجانب جامع الغفران في سيدي بوسعيد.'
              : 'Find us near Mosque Al Ghofrane, call us for inquiries, or send us a message.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 bg-blue-50/50 border border-blue-200 space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-900" />
                <h3 className="font-serif italic font-bold text-blue-900 text-lg">
                  {currentLang === 'fr' ? 'Adresse & Localisation' : currentLang === 'ar' ? 'العنوان' : 'Address'}
                </h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                {BLEUE_SHOP_INFO.location.address}
              </p>

              {/* Direct Link to Google Maps */}
              <a 
                href={BLEUE_SHOP_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs uppercase tracking-wider transition-all mt-2 cursor-pointer shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>
                  {currentLang === 'fr' ? 'Google Maps' : currentLang === 'ar' ? 'خرائط جوجل' : 'Open in Google Maps'}
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-6 bg-white border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-900" />
                  <h3 className="font-serif italic font-bold text-blue-900 text-lg">
                    {currentLang === 'fr' ? 'Téléphone & WhatsApp' : currentLang === 'ar' ? 'الهاتف وواتساب' : 'Contacts'}
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">7:00 - 23:00</span>
              </div>

              <div className="flex flex-col gap-2 pt-1 text-xs font-sans">
                <a 
                  href={`tel:${BLEUE_SHOP_INFO.contacts.phonePrimary}`} 
                  className="flex items-center justify-between p-3 bg-blue-50/50 border border-blue-200 font-bold text-blue-950 hover:bg-blue-100/50 transition-colors"
                >
                  <span>📞 {BLEUE_SHOP_INFO.contacts.phonePrimary}</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-800">Appeler</span>
                </a>

                <a 
                  href={`https://wa.me/${BLEUE_SHOP_INFO.contacts.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-emerald-50/50 border border-emerald-200 font-bold text-emerald-950 hover:bg-emerald-100/50 transition-colors"
                >
                  <span>💬 WhatsApp {BLEUE_SHOP_INFO.contacts.whatsapp}</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-800">Chat</span>
                </a>
              </div>
            </div>

            {/* Hours Table */}
            <div className="p-6 bg-white border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <Clock className="w-4 h-4 text-blue-900" />
                <h3 className="font-serif italic font-bold text-blue-900 text-lg">
                  {currentLang === 'fr' ? 'Horaires d\'Ouverture' : currentLang === 'ar' ? 'أوقات العمل' : 'Opening Hours'}
                </h3>
              </div>

              <div className="space-y-2 pt-2 text-xs font-sans">
                {BLEUE_SHOP_INFO.hours.map((item, idx) => (
                  <div key={idx} className="flex justify-between py-1 border-b border-dotted border-slate-200 last:border-0">
                    <span className="font-medium text-slate-700">{item.day[currentLang]}</span>
                    <span className="font-serif italic font-bold text-blue-900">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column Map & Message Form */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Interactive Embedded Google Map */}
            <div className="border border-blue-200 shadow-md bg-slate-100 relative h-72">
              <iframe
                title="bleue! Coffee Shop Location Map"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.890289!2d10.3436327!3d36.8707997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b5d5d532b7e3%3A0x8a61700be65f7041!2sbleue!5e0!3m2!1sen!2stn!4v1700000000000`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute top-3 left-3 bg-blue-900 text-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                <MapPin className="w-3.5 h-3.5 text-blue-300" />
                <span>bleue! Sidi Bou Said</span>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="p-8 bg-blue-50/50 border border-blue-200 space-y-4">
              <div>
                <h3 className="text-xl font-serif italic font-bold text-blue-900">
                  {currentLang === 'fr' ? 'Envoyer un Message Direct' : currentLang === 'ar' ? 'أرسل رسالة مباشرة' : 'Send us a Direct Message'}
                </h3>
                <p className="text-xs text-slate-600 mt-1 font-sans">
                  {currentLang === 'fr' ? 'Pour toute question relative aux réservations ou événements.' : 'Questions about events or reservations? Drop us a line!'}
                </p>
              </div>

              {sentSuccess ? (
                <div className="p-4 bg-blue-900 text-white text-center font-bold text-xs flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-300" />
                  <span>Message envoyé avec succès ! Nous vous répondrons rapidement.</span>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4 font-sans">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-blue-900">Nom *</label>
                      <input
                        type="text"
                        required
                        value={senderName}
                        onChange={e => setSenderName(e.target.value)}
                        placeholder="Votre nom"
                        className="w-full mt-1 px-3 py-2 text-xs bg-white border border-blue-200 focus:outline-none focus:border-blue-900"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-blue-900">Email</label>
                      <input
                        type="email"
                        value={senderEmail}
                        onChange={e => setSenderEmail(e.target.value)}
                        placeholder="votre.email@exemple.com"
                        className="w-full mt-1 px-3 py-2 text-xs bg-white border border-blue-200 focus:outline-none focus:border-blue-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-blue-900">Message *</label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Écrivez votre message ici..."
                      className="w-full mt-1 px-3 py-2 text-xs bg-white border border-blue-200 focus:outline-none focus:border-blue-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-900 hover:bg-blue-950 text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Envoyer</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

