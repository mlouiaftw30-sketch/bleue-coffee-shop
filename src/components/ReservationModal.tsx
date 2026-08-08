import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { Language, ReservationDetails } from '../types';
import { BleueLogo } from './BleueLogo';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  currentLang
}) => {
  if (!isOpen) return null;

  const [details, setDetails] = useState<ReservationDetails>({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '10:00',
    guests: 2,
    seatingArea: 'terrace',
    specialRequests: ''
  });

  const [confirmed, setConfirmed] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `RSV-BLEUE-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingCode(code);
    setConfirmed(true);
  };

  const resetAndClose = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/80 backdrop-blur-sm">
      <div className="bg-white max-w-lg w-full overflow-hidden shadow-2xl border border-blue-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 bg-blue-950 text-white relative border-b border-blue-900 flex items-start gap-4">
          <BleueLogo className="w-12 h-12 shadow-md shrink-0 mt-1" />
          <div className="flex-1 pr-8">
            <div className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-1 font-sans">
              Maison bleue! • Sidi Bou Said
            </div>
            <h2 className="text-2xl font-serif italic font-bold">
              {currentLang === 'fr' ? 'Réserver une Table' : currentLang === 'ar' ? 'حجز طاولة' : 'Book a Table'}
            </h2>
            <p className="text-xs text-blue-200 mt-1 font-sans">
              Réservez votre emplacement sur notre terrasse vue mer ou dans notre salon intérieur.
            </p>
          </div>
          <button 
            onClick={resetAndClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 hover:bg-blue-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {confirmed ? (
          <div className="p-8 text-center space-y-6 flex-1 overflow-y-auto">
            <div className="w-14 h-14 bg-blue-900 text-white flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8 text-blue-300" />
            </div>

            <div>
              <span className="px-3 py-1 bg-blue-100 text-blue-900 font-bold text-xs uppercase tracking-widest border border-blue-200">
                Réservation Confirmée
              </span>
              <h3 className="text-2xl font-serif italic font-bold text-blue-900 mt-3">
                Code: {bookingCode}
              </h3>
              <p className="text-xs text-slate-600 mt-1 font-sans">
                Nous avons hâte de vous accueillir, <strong className="text-blue-900">{details.name}</strong> !
              </p>
            </div>

            <div className="bg-blue-50/50 border border-blue-200 p-4 text-left text-xs space-y-2 font-sans">
              <div className="flex justify-between py-1 border-b border-blue-200">
                <span className="text-slate-500">Date & Heure:</span>
                <span className="font-bold text-blue-900">{details.date} à {details.time}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-blue-200">
                <span className="text-slate-500">Nombre de personnes:</span>
                <span className="font-bold text-blue-900">{details.guests} Personnes</span>
              </div>
              <div className="flex justify-between py-1 border-b border-blue-200">
                <span className="text-slate-500">Emplacement:</span>
                <span className="font-bold text-blue-900 capitalize">{details.seatingArea.replace('_', ' ')}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Adresse:</span>
                <span className="font-bold text-blue-900">Sidi Bou Said, Rue Habib Bourguiba</span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="w-full py-3.5 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md"
            >
              Fermer
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto flex-1 font-sans">
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-1">Nom complet *</label>
                <input
                  type="text"
                  required
                  value={details.name}
                  onChange={e => setDetails({ ...details, name: e.target.value })}
                  placeholder="ex. Sarah Mansour"
                  className="w-full px-3 py-2 text-xs border border-blue-200 bg-white focus:outline-none focus:border-blue-900"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-1">Téléphone *</label>
                <input
                  type="tel"
                  required
                  value={details.phone}
                  onChange={e => setDetails({ ...details, phone: e.target.value })}
                  placeholder="+216 58 000 000"
                  className="w-full px-3 py-2 text-xs border border-blue-200 bg-white focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-1">Email</label>
              <input
                type="email"
                value={details.email}
                onChange={e => setDetails({ ...details, email: e.target.value })}
                placeholder="sarah@example.com"
                className="w-full px-3 py-2 text-xs border border-blue-200 bg-white focus:outline-none focus:border-blue-900"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-1">Date *</label>
                <input
                  type="date"
                  required
                  value={details.date}
                  onChange={e => setDetails({ ...details, date: e.target.value })}
                  className="w-full px-2 py-2 text-xs border border-blue-200 bg-white focus:outline-none focus:border-blue-900"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-1">Heure *</label>
                <select
                  value={details.time}
                  onChange={e => setDetails({ ...details, time: e.target.value })}
                  className="w-full px-2 py-2 text-xs border border-blue-200 bg-white focus:outline-none focus:border-blue-900"
                >
                  <option value="08:00">08:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="18:00">06:00 PM</option>
                  <option value="20:00">08:00 PM</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-1">Invités *</label>
                <select
                  value={details.guests}
                  onChange={e => setDetails({ ...details, guests: Number(e.target.value) })}
                  className="w-full px-2 py-2 text-xs border border-blue-200 bg-white focus:outline-none focus:border-blue-900"
                >
                  <option value={1}>1 Personne</option>
                  <option value={2}>2 Personnes</option>
                  <option value={3}>3 Personnes</option>
                  <option value={4}>4 Personnes</option>
                  <option value={6}>6+ Groupe</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-1">Emplacement souhaité *</label>
              <div className="grid grid-cols-3 gap-2 mt-1">
                <button
                  type="button"
                  onClick={() => setDetails({ ...details, seatingArea: 'terrace' })}
                  className={`p-2.5 border text-xs font-semibold flex flex-col items-center gap-1 text-center transition-all cursor-pointer ${
                    details.seatingArea === 'terrace'
                      ? 'border-blue-900 bg-blue-900 text-white font-bold'
                      : 'border-slate-200 text-slate-700 hover:bg-blue-50'
                  }`}
                >
                  <span>🌅 Terrasse</span>
                  <span className="text-[10px] opacity-80">En plein air</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDetails({ ...details, seatingArea: 'sea_view_balcony' })}
                  className={`p-2.5 border text-xs font-semibold flex flex-col items-center gap-1 text-center transition-all cursor-pointer ${
                    details.seatingArea === 'sea_view_balcony'
                      ? 'border-blue-900 bg-blue-900 text-white font-bold'
                      : 'border-slate-200 text-slate-700 hover:bg-blue-50'
                  }`}
                >
                  <span>🌊 Balcon Mer</span>
                  <span className="text-[10px] opacity-80">Vue panoramique</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDetails({ ...details, seatingArea: 'indoor' })}
                  className={`p-2.5 border text-xs font-semibold flex flex-col items-center gap-1 text-center transition-all cursor-pointer ${
                    details.seatingArea === 'indoor'
                      ? 'border-blue-900 bg-blue-900 text-white font-bold'
                      : 'border-slate-200 text-slate-700 hover:bg-blue-50'
                  }`}
                >
                  <span>❄️ Salon Intérieur</span>
                  <span className="text-[10px] opacity-80">Espace climatisé</span>
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-1">Demandes particulières</label>
              <textarea
                rows={2}
                value={details.specialRequests}
                onChange={e => setDetails({ ...details, specialRequests: e.target.value })}
                placeholder="Anniversaire, chaise haute..."
                className="w-full px-3 py-2 text-xs border border-blue-200 bg-white focus:outline-none focus:border-blue-900"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md mt-2"
            >
              Confirmer la Réservation
            </button>

          </form>
        )}

      </div>
    </div>
  );
};

