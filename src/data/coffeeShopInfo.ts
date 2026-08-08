import heroImg from '../assets/images/hero_bleue_cafe_1786126320816.jpg';
import latteImg from '../assets/images/specialty_latte_1786126331450.jpg';
import pastryImg from '../assets/images/french_pastry_1786126342216.jpg';
import interiorImg from '../assets/images/cafe_ambiance_1786126351783.jpg';
import { Review } from '../types';

export const BLEUE_SHOP_INFO = {
  name: "bleue!",
  fullName: "Bleue! Coffee Shop & Bakery",
  tagline: {
    en: "Specialty Coffee, Artisanal Pastries & Mediterranean Views",
    fr: "Café Spécialité, Pâtisseries Artisanales & Vue Méditerranéenne",
    ar: "قهوة مختصة، حلويات حرفية وإطلالة بحرية ساحرة",
  },
  location: {
    city: "Sidi Bou Said",
    address: "Rue Habib Bourguiba, Near Mosque Al Ghofrane, 2026 Sidi Bou Said, Tunis, Tunisia",
    shortAddress: "Near Mosque Al Ghofrane, Sidi Bou Said",
    coordinates: {
      lat: 36.8707954,
      lng: 10.3462076
    },
    googleMapsUrl: "https://maps.app.goo.gl/efVhsWohRt2vMf3e7",
    googlePlaceId: "0x12e2b5d5d532b7e3:0x8a61700be65f7041"
  },
  contacts: {
    phonePrimary: "+216 71 740 000",
    phoneSecondary: "+216 58 123 456",
    whatsapp: "+216 58 123 456",
    email: "contact@bleuecafe.tn",
    instagram: "@bleue.sidibousaid",
    facebook: "Bleue.SidiBouSaid",
  },
  hours: [
    { day: { en: "Monday - Friday", fr: "Lundi - Vendredi", ar: "الإثنين - الجمعة" }, time: "07:00 - 22:00" },
    { day: { en: "Saturday", fr: "Samedi", ar: "السبت" }, time: "07:00 - 23:00" },
    { day: { en: "Sunday", fr: "Dimanche", ar: "الأحد" }, time: "07:00 - 23:00" },
  ],
  features: [
    {
      title: { en: "100% Arabica Specialty Beans", fr: "Grains 100% Arabica Spécialité", ar: "حبوب أرابيكا 100% مختصة" },
      desc: { en: "Ethically sourced from Ethiopia, Colombia and Guatemala, roasted locally in Tunis.", fr: "Matières premières éthiques torréfiées artisanalement à Tunis.", ar: "محمصة محلياً في تونس من أجود المحاصيل." }
    },
    {
      title: { en: "Sea View Balcony Terrace", fr: "Terrasse Panoramic Vue Mer", ar: "تراس بإطلالة بانورامية على البحر" },
      desc: { en: "Enjoy your morning espresso overlooking the cobalt blue waters of Sidi Bou Said gulf.", fr: "Profitez de votre café du matin face aux eaux bleues de Sidi Bou Said.", ar: "استمتع بقهوتك الصباحية مطلة على البحر الأزرق." }
    },
    {
      title: { en: "Fresh Daily Pastries", fr: "Viennoiseries Cuites sur Place", ar: "حلويات ومخبوزات طازجة يومياً" },
      desc: { en: "Baked every morning with French butter and local organic ingredients.", fr: "Préparées chaque matin avec du beurre français et produits locaux.", ar: "محضرة كل صباح بالزبدة الفرنسية والمكونات المحلية." }
    },
    {
      title: { en: "High-Speed Wi-Fi & Workspaces", fr: "Wi-Fi Haut Débit & Espaces Travail", ar: "إنترنت سريع ومساحة للعمل" },
      desc: { en: "Quiet cozy nooks equipped with power sockets for remote work & study.", fr: "Espaces calmes équipés de prises pour le travail à distance.", ar: "أماكن هادئة مزودة بمآخذ كهربائية للعمل والدراسة." }
    }
  ],
  story: {
    en: "Nestled in the iconic blue-and-white village of Sidi Bou Said, 'bleue!' was founded with a simple dream: to bring specialty coffee culture to Tunisia's most historic coastal hill. Inspired by the cobalt shutters, sea breeze, and Mediterranean sun, our cafe blends world-class espresso craft with warm local hospitality.",
    fr: "Niché dans le village emblématique bleu et blanc de Sidi Bou Said, 'bleue!' a été fondé avec un rêve simple : apporter la culture du café de spécialité sur la plus belle colline de Tunisie. Inspiré par les volets cobalt, la brise marine et le soleil méditerranéen, notre café associe l'art de l'espresso aux traditions tunisiennes.",
    ar: "يقع 'bleue!' في قلب قرية سيدي بوسعيد الهادئة ذات الأبواب والنوافذ الزرقاء والحيطان البيضاء. تأسس المقهى بهدف تقديم تجربة قهوة مختصة استثنائية تمزج بين حرفية الإسبريسو العالمية وحفاوة الضيافة التونسية."
  }
};

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Sarah M.',
    rating: 5,
    date: '3 days ago',
    comment: 'Best spot in Sidi Bou Said! The Orange Blossom Latte is out of this world, and the view from the upper balcony terrace is unmatched. Highly recommend visiting early in the morning.',
    source: 'Google Maps'
  },
  {
    id: 'r2',
    author: 'Youssef B.',
    rating: 5,
    date: '1 week ago',
    comment: 'Super fast Wi-Fi, friendly baristas, and the pistachio pain au chocolat was warm and flaky. It is my favorite coffee place in Tunis now.',
    source: 'Google Maps'
  },
  {
    id: 'r3',
    author: 'Camille L.',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Une ambiance magique ! La décoration bleue et blanche est sublime. Le cold brew 24h et le smoothie aux dattes sont délicieux. Merci à toute l\'équipe !',
    source: 'Google Maps'
  },
  {
    id: 'r4',
    author: 'Ahmed K.',
    rating: 5,
    date: '1 month ago',
    comment: 'قهوة ممتازة جداً والمكان هادئ ونظيف. الشاي بالنعناع والبنيون والكرواسون بالطعم الفرنسي الأصلي. مكان يستحق الزيارة دائماً.',
    source: 'Google Maps'
  }
];

export const GALLERY_IMAGES = [
  { src: heroImg, title: "Sidi Bou Said Terrace View", category: "exterior" },
  { src: latteImg, title: "Artisanal Specialty Lattes", category: "coffee" },
  { src: pastryImg, title: "Freshly Baked French Pastries", category: "bakery" },
  { src: interiorImg, title: "Blue & White Modern Interior", category: "interior" },
];
