import React, { useState } from 'react';
import { Star, Plus, CheckCircle2 } from 'lucide-react';
import { Language, Review } from '../types';
import { REVIEWS } from '../data/coffeeShopInfo';

interface ReviewsSectionProps {
  currentLang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ currentLang }) => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment) return;
    const rev: Review = {
      id: `r-${Date.now()}`,
      author: newAuthor,
      rating: newRating,
      date: 'Just now',
      comment: newComment,
      source: 'Website Visitor'
    };
    setReviewsList([rev, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowAddForm(false);
      setNewAuthor('');
      setNewComment('');
    }, 2000);
  };

  return (
    <section id="reviews" className="py-20 bg-white text-slate-900 relative border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-blue-900/20 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-800 block mb-2">
              {currentLang === 'fr' ? 'Témoignages & Critiques' : currentLang === 'ar' ? 'آراء الزوار' : 'Critical Acclaim'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif italic font-black text-blue-900 tracking-tight">
              {currentLang === 'fr' ? 'Ce que disent nos visiteurs' : currentLang === 'ar' ? 'ماذا يقول زوار ' : 'What visitors say'}
            </h2>
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-6 py-3 bg-blue-900 hover:bg-blue-950 text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>
              {currentLang === 'fr' ? 'Écrire un avis' : currentLang === 'ar' ? 'أضف رأيك' : 'Leave a Review'}
            </span>
          </button>
        </div>

        {/* Add Review Form */}
        {showAddForm && (
          <div className="mb-12 p-8 bg-blue-50/50 border border-blue-200 max-w-xl mx-auto space-y-4">
            <h3 className="font-serif italic font-bold text-blue-900 text-xl">
              {currentLang === 'fr' ? 'Partagez votre expérience à bleue!' : currentLang === 'ar' ? 'شارك تجربتك معنا' : 'Share your experience'}
            </h3>

            {submitted ? (
              <div className="p-4 bg-blue-900 text-white font-bold text-xs flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-300" />
                <span>Merci ! Votre avis a été publié.</span>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-blue-900">Nom *</label>
                    <input
                      type="text"
                      required
                      value={newAuthor}
                      onChange={e => setNewAuthor(e.target.value)}
                      placeholder="e.g. Maya"
                      className="w-full mt-1 px-3 py-2 text-xs bg-white border border-blue-200 focus:outline-none focus:border-blue-900"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-blue-900">Note *</label>
                    <select
                      value={newRating}
                      onChange={e => setNewRating(Number(e.target.value))}
                      className="w-full mt-1 px-3 py-2 text-xs bg-white border border-blue-200 focus:outline-none focus:border-blue-900"
                    >
                      <option value={5}>★★★★★ (5/5 Excellence)</option>
                      <option value={4}>★★★★☆ (4/5 Très bien)</option>
                      <option value={3}>★★★☆☆ (3/5 Moyen)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-blue-900">Avis *</label>
                  <textarea
                    rows={3}
                    required
                    value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                    placeholder="Votre avis sur notre café, nos viennoiseries..."
                    className="w-full mt-1 px-3 py-2 text-xs bg-white border border-blue-200 focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:bg-slate-100"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-blue-900 text-white hover:bg-blue-950"
                  >
                    Publier
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Editorial Review Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviewsList.map((rev) => (
            <div 
              key={rev.id} 
              className="p-8 bg-white border border-slate-200 shadow-sm space-y-4 hover:border-blue-300 transition-colors"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-900 text-white font-bold flex items-center justify-center text-xs uppercase tracking-wider">
                    {rev.author.substring(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-serif italic font-bold text-blue-900 text-base">{rev.author}</h4>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400">{rev.date} • {rev.source}</span>
                  </div>
                </div>

                <div className="flex items-center text-blue-900 gap-0.5">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-blue-900 text-blue-900" />
                  ))}
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-serif italic">
                "{rev.comment}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

