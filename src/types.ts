export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  priceEstimate?: string;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  title: string;
  iconName: string;
  image: string;
  items: string[];
}

export interface Occasion {
  id: string;
  title: string;
  description: string;
  iconName: string;
  colorClass: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
