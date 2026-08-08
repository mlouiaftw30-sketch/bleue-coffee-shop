import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, CheckCircle2, QrCode, ArrowRight } from 'lucide-react';
import { CartItem, Currency, Language } from '../types';
import { BleueLogo } from './BleueLogo';

interface PreorderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (index: number, delta: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  currency: Currency;
  currentLang: Language;
}

export const PreorderDrawer: React.FC<PreorderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currency,
  currentLang
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupTime, setPickupTime] = useState('In 15 minutes');
  const [paymentOption, setPaymentOption] = useState<'counter' | 'card'>('counter');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  const convertPrice = (tnd: number): string => {
    if (currency === 'EUR') return `€${(tnd * 0.29).toFixed(2)}`;
    if (currency === 'USD') return `$${(tnd * 0.32).toFixed(2)}`;
    return `${tnd.toFixed(2)} TND`;
  };

  const totalTND = cart.reduce((acc, curr) => acc + curr.totalPriceTND, 0);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;
    const refNumber = `BLEUE-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderRef(refNumber);
    setIsSubmitted(true);
  };

  const handleFinish = () => {
    setIsSubmitted(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-blue-950/70 backdrop-blur-xs">
      <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl border-l border-blue-200">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-blue-900 flex items-center justify-between bg-blue-950 text-white">
          <div className="flex items-center gap-3">
            <BleueLogo className="w-10 h-10 shadow-sm" />
            <div>
              <h2 className="font-serif italic font-bold text-xl leading-tight">
                {currentLang === 'fr' ? 'Votre Précommande' : currentLang === 'ar' ? 'طلبك الحالي' : 'Your Pre-Order'}
              </h2>
              <p className="text-xs text-blue-200 font-sans uppercase tracking-widest mt-0.5">
                bleue! Sidi Bou Said
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white p-1.5 hover:bg-blue-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        {isSubmitted ? (
          <div className="p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-14 h-14 bg-blue-900 text-white flex items-center justify-center shadow-md">
              <CheckCircle2 className="w-8 h-8 text-blue-300" />
            </div>

            <div>
              <span className="px-3 py-1 bg-blue-100 text-blue-900 font-bold text-xs uppercase tracking-widest border border-blue-200">
                Commande Confirmée
              </span>
              <h3 className="text-2xl font-serif italic font-bold text-blue-900 mt-3">
                Order #{orderRef}
              </h3>
              <p className="text-xs text-slate-600 mt-1 font-sans">
                Merci <strong className="text-blue-900">{customerName}</strong> ! Votre commande est en préparation à <strong className="text-blue-900">bleue! Sidi Bou Said</strong>.
              </p>
            </div>

            {/* Simulated QR Code Receipt */}
            <div className="w-full bg-blue-50/50 border border-blue-200 p-4 text-left space-y-3 font-sans">
              <div className="flex items-center justify-between pb-2 border-b border-blue-200">
                <span className="text-xs font-bold uppercase text-slate-500">Heure de retrait:</span>
                <span className="text-xs font-bold text-blue-900 bg-white px-2 py-0.5 border border-blue-200">
                  ⚡ {pickupTime}
                </span>
              </div>

              <div className="space-y-1 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span>Contact:</span>
                  <span className="font-bold">{customerPhone}</span>
                </div>
                <div className="flex justify-between">
                  <span>Paiement:</span>
                  <span className="font-bold">{paymentOption === 'counter' ? 'Au comptoir' : 'Carte sur place'}</span>
                </div>
                <div className="flex justify-between font-serif italic font-bold text-blue-900 pt-2 border-t border-blue-200 text-base">
                  <span>Total:</span>
                  <span>{convertPrice(totalTND)}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col items-center justify-center text-center border-t border-blue-200">
                <QrCode className="w-16 h-16 text-blue-900" />
                <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-bold">À présenter au comptoir</span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3.5 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md"
            >
              Retour au Menu
            </button>
          </div>
        ) : cart.length === 0 ? (
          <div className="p-8 text-center flex-1 flex flex-col items-center justify-center space-y-4">
            <div className="w-14 h-14 bg-blue-50 text-blue-900 flex items-center justify-center border border-blue-100">
              <ShoppingBag className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-serif italic font-bold text-blue-900 text-lg">
                {currentLang === 'fr' ? 'Votre panier est vide' : currentLang === 'ar' ? 'سلتك فارغة' : 'Your cart is empty'}
              </h3>
              <p className="text-xs text-slate-600 mt-1 font-sans">
                {currentLang === 'fr' ? 'Ajoutez vos boissons et viennoiseries préférées.' : currentLang === 'ar' ? 'اختر بعض القهوة والحلويات من القائمة.' : 'Add your favorite coffees and pastries from the menu.'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-blue-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-950"
            >
              Découvrir la Carte
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans">
              {cart.map((cartItem, idx) => (
                <div key={idx} className="p-3 bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-xs">
                  <img 
                    src={cartItem.item.image} 
                    alt={cartItem.item.name[currentLang]} 
                    className="w-12 h-12 object-cover grayscale shrink-0 border border-slate-100"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif italic font-bold text-sm text-blue-900 truncate">
                      {cartItem.item.name[currentLang]}
                    </h4>
                    
                    <div className="text-[10px] text-slate-500 space-x-1">
                      {cartItem.selectedMilk && <span>• {cartItem.selectedMilk}</span>}
                      {cartItem.selectedSweetness && <span>• {cartItem.selectedSweetness}</span>}
                      {cartItem.selectedExtras && cartItem.selectedExtras.length > 0 && (
                        <span>• +{cartItem.selectedExtras.join(', ')}</span>
                      )}
                    </div>

                    <div className="font-serif italic font-bold text-xs text-blue-900 mt-1">
                      {convertPrice(cartItem.totalPriceTND)}
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2 py-1">
                    <button 
                      onClick={() => onUpdateQuantity(idx, -1)}
                      className="text-slate-600 hover:text-blue-900 font-bold px-1"
                    >
                      -
                    </button>
                    <span className="text-xs font-serif font-bold text-blue-900 w-4 text-center">
                      {cartItem.quantity}
                    </span>
                    <button 
                      onClick={() => onUpdateQuantity(idx, 1)}
                      className="text-slate-600 hover:text-blue-900 font-bold px-1"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(idx)}
                    className="text-slate-400 hover:text-red-600 p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                </div>
              ))}
            </div>

            {/* Order Form & Checkout Footer */}
            <form onSubmit={handleSubmitOrder} className="p-4 bg-blue-50/50 border-t border-blue-200 space-y-4 font-sans">
              
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Votre Nom *"
                    className="w-full px-3 py-2 text-xs bg-white border border-blue-200 focus:outline-none focus:border-blue-900"
                  />
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Téléphone *"
                    className="w-full px-3 py-2 text-xs bg-white border border-blue-200 focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div className="flex items-center justify-between gap-2">
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs bg-white border border-blue-200 font-medium focus:outline-none"
                  >
                    <option value="Dans 10 minutes">⏱ Retrait dans 10 min</option>
                    <option value="Dans 20 minutes">⏱ Retrait dans 20 min</option>
                    <option value="Dans 30 minutes">⏱ Retrait dans 30 min</option>
                    <option value="Au comptoir dès que prêt">⏱ Dès que prêt</option>
                  </select>

                  <select
                    value={paymentOption}
                    onChange={(e) => setPaymentOption(e.target.value as any)}
                    className="flex-1 px-3 py-2 text-xs bg-white border border-blue-200 font-medium focus:outline-none"
                  >
                    <option value="counter">💵 Espèces au comptoir</option>
                    <option value="card">💳 Carte sur place</option>
                  </select>
                </div>
              </div>

              {/* Total breakdown */}
              <div className="pt-2 border-t border-blue-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block">Total à payer:</span>
                  <div className="text-xl font-serif italic font-bold text-blue-900">
                    {convertPrice(totalTND)}
                  </div>
                </div>

                <button
                  type="submit"
                  className="py-3 px-6 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Confirmer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </>
        )}

      </div>
    </div>
  );
};

