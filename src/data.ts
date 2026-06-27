import { Product, Category, Occasion, GalleryItem, Review, Feature } from './types';

export const STORE_CATEGORIES: Category[] = [
  {
    id: 'cosmetics',
    title: 'Cosmetics & Beauty',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600',
    items: [
      'Premium Lipsticks',
      'Flawless Foundations',
      'Kajal & Eyeliners',
      'Vibrant Nail Polishes',
      'Complete Makeup Kits',
      'Nourishing Face Creams',
      'Refreshing Face Washes',
      'Luxury Perfumes',
      'Hair Care Essentials'
    ]
  },
  {
    id: 'gifts',
    title: 'Gift Items',
    iconName: 'Gift',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=600',
    items: [
      'Cuddly Teddy Bears',
      'Elegant Greeting Cards',
      'Premium Gift Packs',
      'Decorative Home Items',
      'Exquisite Showpieces',
      'Artificial Flowers',
      'Custom Gift Wrapping'
    ]
  },
  {
    id: 'accessories',
    title: 'Fashion Accessories',
    iconName: 'ShoppingBag',
    image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=600',
    items: [
      'Designer Handbags',
      'Stylish Wallets',
      'Trendy Earrings & Necklaces',
      'Traditional & Modern Bangles',
      'Chic Hair Accessories',
      'Classic Watches',
      'Fashion Sunglasses'
    ]
  },
  {
    id: 'kids',
    title: 'Kids & School Collection',
    iconName: 'Baby',
    image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&q=80&w=600',
    items: [
      'Interactive Toys',
      'School Accessories',
      'Trendy Pencil Boxes',
      'Colorful Water Bottles'
    ]
  }
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Matte Liquid Lipstick Set',
    category: 'Cosmetics',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=500',
    isPopular: true
  },
  {
    id: 'p2',
    name: 'Luminous Liquid Foundation',
    category: 'Cosmetics',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=500',
    isPopular: true
  },
  {
    id: 'p3',
    name: 'Luxury French Eau de Parfum',
    category: 'Cosmetics',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=500',
    isPopular: true
  },
  {
    id: 'p4',
    name: 'Fluffy Giant Teddy Bear (Pink & Brown)',
    category: 'Gift Items',
    image: 'https://images.unsplash.com/photo-1559251606-c623743a6d76?auto=format&fit=crop&q=80&w=500',
    isPopular: false
  },
  {
    id: 'p5',
    name: 'Gold-Accent Leather Handbag',
    category: 'Fashion Accessories',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=500',
    isPopular: true
  },
  {
    id: 'p6',
    name: 'Premium Glass Scented Candle Gift Set',
    category: 'Gift Items',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=500',
    isPopular: false
  },
  {
    id: 'p7',
    name: 'Elegant Couple Analogue Watches',
    category: 'Fashion Accessories',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=500',
    isPopular: false
  },
  {
    id: 'p8',
    name: 'Complete Professional Makeup Brush Set',
    category: 'Cosmetics',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=500',
    isPopular: true
  }
];

export const WHY_CHOOSE_US: Feature[] = [
  {
    id: 'w1',
    title: 'Genuine Products',
    description: '100% authentic cosmetics, skincare, and branded beauty items direct from official distributors.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'w2',
    title: 'Affordable Prices',
    description: 'Enjoy reasonable and competitive rates, with frequent discounts on premium items and bulk packs.',
    iconName: 'Percent'
  },
  {
    id: 'w3',
    title: 'Wide Variety',
    description: 'A massive curated collection of gifts, cards, cosmetics, handbags, and accessories all under one roof.',
    iconName: 'Layers'
  },
  {
    id: 'w4',
    title: 'Premium Quality',
    description: 'We strictly verify build quality for teddy bears, toys, and custom gift articles for maximum durability.',
    iconName: 'Award'
  },
  {
    id: 'w5',
    title: 'Friendly Service',
    description: 'A warm, family-run business where every client receives attentive, respectful, and personalized assistance.',
    iconName: 'Heart'
  },
  {
    id: 'w6',
    title: 'Trusted Local Store',
    description: 'Proudly serving Haridwar, Bahadarabad and Rawali Mehdood with trust and custom wedding/birthday orders.',
    iconName: 'MapPin'
  }
];

export const SPECIAL_OCCASIONS: Occasion[] = [
  {
    id: 'o1',
    title: 'Birthdays',
    description: 'Make their day unforgettable with our cuddly teddy bears, dynamic cards, and custom beauty hampers.',
    iconName: 'Cake',
    colorClass: 'from-pink-500/10 to-rose-500/10 border-pink-100 dark:border-pink-900/30 text-pink-600'
  },
  {
    id: 'o2',
    title: 'Anniversaries',
    description: 'Express your deep love with our elegant designer watches, romantic gift sets, and custom-packaged perfumes.',
    iconName: 'HeartHandshake',
    colorClass: 'from-purple-500/10 to-indigo-500/10 border-purple-100 dark:border-purple-900/30 text-purple-600'
  },
  {
    id: 'o3',
    title: 'Festivals',
    description: 'Celebrate Diwali, Eid, and Christmas with beautiful showpieces, traditional gift wrapping, and makeup sets.',
    iconName: 'Sparkles',
    colorClass: 'from-amber-500/10 to-yellow-500/10 border-amber-100 dark:border-amber-900/30 text-amber-600'
  },
  {
    id: 'o4',
    title: 'Weddings',
    description: 'Perfect wedding return-gifts, premium cosmetics, jewelry boxes, and bespoke bridal beauty combo gifts.',
    iconName: 'PartyPopper',
    colorClass: 'from-red-500/10 to-orange-500/10 border-red-100 dark:border-red-900/30 text-red-600'
  },
  {
    id: 'o5',
    title: 'Valentine\'s Day',
    description: 'Gift boxes packed with high-end lipsticks, chocolates, beautiful cards, and custom romantic showpieces.',
    iconName: 'Heart',
    colorClass: 'from-rose-500/10 to-red-600/10 border-rose-100 dark:border-rose-900/30 text-rose-600'
  },
  {
    id: 'o6',
    title: 'Seasonal Joys',
    description: 'Unique custom gift items for Mother\'s Day, Father\'s Day, New Year, Raksha Bandhan, and festive seasons.',
    iconName: 'CalendarRange',
    colorClass: 'from-teal-500/10 to-emerald-500/10 border-teal-100 dark:border-teal-900/30 text-teal-600'
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Boutique Storefront',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g2',
    title: 'Cosmetics Showcase',
    category: 'Cosmetics',
    image: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g3',
    title: 'Elegant Gift Collection',
    category: 'Gifts',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g4',
    title: 'Organized Product Shelves',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g5',
    title: 'Jewelry & Accessories Display',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g6',
    title: 'Soft Teddy Bears & Kids Toys',
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Anjali Sharma',
    rating: 5,
    comment: 'The best place in Bahadarabad for premium cosmetics! They have authentic makeup brands at extremely reasonable rates. The family is very polite and always guides with genuine suggestions.',
    date: 'June 12, 2026',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'r2',
    name: 'Rajesh Saini',
    rating: 5,
    comment: 'Amazing collection of gifts and toys! I bought a custom birthday package wrapped beautifully with fresh items and a high-quality teddy bear. This store has truly simplified gifting in Rawali Mehdood.',
    date: 'May 28, 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'r3',
    name: 'Priyanka S.',
    rating: 5,
    comment: 'Every cosmetics and accessory need is met here. I love their collection of handbags and matching earrings. It saves me from traveling all the way to central Haridwar. High quality at honest prices!',
    date: 'April 15, 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  }
];
