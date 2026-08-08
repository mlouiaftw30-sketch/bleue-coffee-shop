export type Currency = 'TND' | 'EUR' | 'USD';
export type Language = 'en' | 'fr' | 'ar';

export type Category = 'coffee' | 'cold_drinks' | 'pastries' | 'brunch' | 'tea_desserts';

export interface MenuItem {
  id: string;
  name: {
    en: string;
    fr: string;
    ar: string;
  };
  description: {
    en: string;
    fr: string;
    ar: string;
  };
  priceTND: number;
  category: Category;
  image: string;
  tags: ('signature' | 'vegan' | 'vegetarian' | 'gluten_free' | 'hot' | 'iced' | 'popular')[];
  calories?: number;
  prepTime?: string;
  options?: {
    milk?: string[];
    sweetness?: string[];
    extras?: { name: string; priceTND: number }[];
  };
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  selectedMilk?: string;
  selectedSweetness?: string;
  selectedExtras?: string[];
  totalPriceTND: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  source: string;
  avatar?: string;
}

export interface ReservationDetails {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'terrace' | 'indoor' | 'sea_view_balcony';
  specialRequests?: string;
}
