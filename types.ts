export interface Property {
  id: number;
  title: string;
  location: string;
  phase: string;
  price: string;
  size: string;
  type: 'House' | 'Plot' | 'Commercial';
  beds?: number;
  baths?: number;
  image: string;
  isVerified: boolean;
  status: 'For Sale' | 'Sold' | 'New Launch';
}

export interface MarketTrend {
  month: string;
  dhaPrice: number;
  bahriaPrice: number;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  text: string;
  rating: number;
}