import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Pure Aloe Vera Gel',
    shortDescription: 'Soothing and hydrating pure aloe vera gel',
    description: 'Our Pure Aloe Vera Gel is harvested from organically grown aloe vera plants. This multipurpose gel soothes, hydrates, and rejuvenates skin. Perfect for sunburns, minor irritations, and daily moisturizing.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1625430036274-fda6a6a9e5d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'skincare',
    tags: ['moisturizer', 'soothing', 'natural'],
    rating: 4.8,
    reviews: [
      {
        id: 'r1',
        userId: 'u1',
        userName: 'Sarah J.',
        rating: 5,
        comment: 'This gel is amazing! It helped heal my sunburn overnight.',
        date: '2025-04-15',
        helpful: 24
      },
      {
        id: 'r2',
        userId: 'u2',
        userName: 'Michael T.',
        rating: 4,
        comment: 'Very soothing and non-greasy. I use it daily.',
        date: '2025-03-22',
        helpful: 15
      }
    ],
    stock: 50,
    ingredients: ['Organic Aloe Vera Gel (99.7%)', 'Vitamin E', 'Citric Acid', 'Natural Preservatives'],
    benefits: ['Soothes irritated skin', 'Hydrates and moisturizes', 'Reduces redness', 'Promotes healing'],
    howToUse: 'Apply a thin layer to clean skin as needed. Can be used on face and body. For external use only.',
    featured: true,
    bestSeller: true
  },
  {
    id: '2',
    name: 'Aloe Facial Cleanser',
    shortDescription: 'Gentle facial cleanser with aloe vera',
    description: 'Our Aloe Facial Cleanser gently removes impurities while maintaining your skin\'s natural moisture balance. Enriched with aloe vera and cucumber extract, it leaves your skin feeling refreshed and revitalized.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'skincare',
    tags: ['cleanser', 'face', 'gentle'],
    rating: 4.6,
    reviews: [
      {
        id: 'r3',
        userId: 'u3',
        userName: 'Emma L.',
        rating: 5,
        comment: 'My skin feels so clean without that tight feeling. Love it!',
        date: '2025-04-02',
        helpful: 18
      }
    ],
    stock: 35,
    ingredients: ['Purified Water', 'Aloe Vera Juice', 'Cucumber Extract', 'Glycerin', 'Sodium Cocoyl Isethionate'],
    benefits: ['Removes makeup and impurities', 'Maintains skin\'s pH balance', 'Non-drying formula', 'Suitable for sensitive skin'],
    howToUse: 'Apply to damp skin, massage gently in circular motions, and rinse thoroughly with warm water. Use morning and evening.',
    featured: false,
    bestSeller: false
  },
  {
    id: '3',
    name: 'Aloe & Honey Face Mask',
    shortDescription: 'Hydrating face mask with aloe and honey',
    description: 'This luxurious face mask combines the hydrating properties of aloe vera with the nourishing benefits of honey. It helps to soothe, brighten, and rejuvenate tired skin in just 15 minutes.',
    price: 29.99,
    discountPrice: 24.99,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'skincare',
    tags: ['mask', 'hydrating', 'face'],
    rating: 4.9,
    reviews: [
      {
        id: 'r4',
        userId: 'u4',
        userName: 'Jessica R.',
        rating: 5,
        comment: 'This mask is a game-changer! My skin looks so much brighter.',
        date: '2025-03-18',
        helpful: 32
      },
      {
        id: 'r5',
        userId: 'u5',
        userName: 'David M.',
        rating: 4,
        comment: 'Very hydrating. I use it twice a week and see great results.',
        date: '2025-02-27',
        helpful: 14
      }
    ],
    stock: 25,
    ingredients: ['Aloe Vera Gel', 'Raw Honey', 'Hyaluronic Acid', 'Vitamin B5', 'Chamomile Extract'],
    benefits: ['Intense hydration', 'Soothes irritation', 'Brightens complexion', 'Reduces fine lines'],
    howToUse: 'Apply a generous layer to clean skin. Leave on for 15-20 minutes, then rinse with warm water. Use 2-3 times per week.',
    onSale: true
  },
  {
    id: '4',
    name: 'Aloe Vera After-Sun Lotion',
    shortDescription: 'Cooling after-sun lotion with aloe vera',
    description: 'Our After-Sun Lotion provides immediate relief to sun-exposed skin. Enriched with aloe vera and cucumber, it cools, soothes, and rehydrates, helping to prevent peeling and prolonging your tan.',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'body',
    tags: ['sun care', 'cooling', 'soothing'],
    rating: 4.7,
    reviews: [
      {
        id: 'r6',
        userId: 'u6',
        userName: 'Alex T.',
        rating: 5,
        comment: 'Saved my skin after a day at the beach! Cooling and soothing.',
        date: '2025-04-10',
        helpful: 27
      }
    ],
    stock: 40,
    ingredients: ['Aloe Vera Juice', 'Cucumber Extract', 'Vitamin E', 'Allantoin', 'Panthenol'],
    benefits: ['Cools sun-exposed skin', 'Reduces redness and inflammation', 'Prevents peeling', 'Extends tan duration'],
    howToUse: 'Apply liberally to sun-exposed skin. Reapply as needed for continued relief. Store in refrigerator for extra cooling effect.',
    bestSeller: true
  },
  {
    id: '5',
    name: 'Aloe & Tea Tree Acne Gel',
    shortDescription: 'Targeted treatment for acne-prone skin',
    description: 'This specialized gel combines the soothing properties of aloe vera with the antibacterial benefits of tea tree oil to target acne and blemishes without over-drying the skin.',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'skincare',
    tags: ['acne', 'treatment', 'tea tree'],
    rating: 4.5,
    reviews: [
      {
        id: 'r7',
        userId: 'u7',
        userName: 'Olivia P.',
        rating: 5,
        comment: 'Finally something that works on my acne without irritation!',
        date: '2025-03-05',
        helpful: 41
      },
      {
        id: 'r8',
        userId: 'u8',
        userName: 'Ryan K.',
        rating: 4,
        comment: 'Reduces redness overnight. Very effective spot treatment.',
        date: '2025-02-19',
        helpful: 22
      }
    ],
    stock: 30,
    ingredients: ['Aloe Vera Gel', 'Tea Tree Oil', 'Salicylic Acid', 'Niacinamide', 'Zinc PCA'],
    benefits: ['Reduces inflammation', 'Fights acne-causing bacteria', 'Unclogs pores', 'Calms redness'],
    howToUse: 'Apply a small amount directly to blemishes or acne-prone areas. Can be used morning and night after cleansing.',
    isNew: true
  },
  {
    id: '6',
    name: 'Aloe Vera Hair Mask',
    shortDescription: 'Deep conditioning hair treatment with aloe vera',
    description: 'Our Aloe Vera Hair Mask deeply conditions and repairs damaged hair. Enriched with aloe vera, argan oil, and keratin, it restores moisture, reduces frizz, and adds shine to all hair types.',
    price: 27.99,
    discountPrice: 22.99,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'hair',
    tags: ['hair care', 'conditioning', 'repair'],
    rating: 4.8,
    reviews: [
      {
        id: 'r9',
        userId: 'u9',
        userName: 'Sophia L.',
        rating: 5,
        comment: 'My damaged hair feels so much healthier after just one use!',
        date: '2025-04-05',
        helpful: 36
      }
    ],
    stock: 20,
    ingredients: ['Aloe Vera Gel', 'Argan Oil', 'Hydrolyzed Keratin', 'Shea Butter', 'Panthenol'],
    benefits: ['Deep conditioning', 'Repairs damage', 'Reduces frizz', 'Adds shine and softness'],
    howToUse: 'Apply to damp hair from mid-lengths to ends. Leave on for 10-15 minutes, then rinse thoroughly. Use 1-2 times per week.',
    onSale: true
  },
  {
    id: '7',
    name: 'Aloe & Cucumber Eye Gel',
    shortDescription: 'Cooling eye gel to reduce puffiness and dark circles',
    description: 'This refreshing eye gel combines aloe vera and cucumber to reduce puffiness, dark circles, and fine lines around the delicate eye area. The cooling formula provides instant relief to tired eyes.',
    price: 21.99,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'skincare',
    tags: ['eye care', 'anti-aging', 'cooling'],
    rating: 4.7,
    reviews: [
      {
        id: 'r10',
        userId: 'u10',
        userName: 'Nina H.',
        rating: 5,
        comment: 'Works wonders on my puffy morning eyes! Feels so refreshing.',
        date: '2025-03-28',
        helpful: 29
      },
      {
        id: 'r11',
        userId: 'u11',
        userName: 'Thomas B.',
        rating: 4,
        comment: 'I keep this in the fridge for extra cooling effect. Great product!',
        date: '2025-03-12',
        helpful: 17
      }
    ],
    stock: 25,
    ingredients: ['Aloe Vera Gel', 'Cucumber Extract', 'Caffeine', 'Hyaluronic Acid', 'Peptides'],
    benefits: ['Reduces puffiness', 'Minimizes dark circles', 'Hydrates delicate eye area', 'Soothes tired eyes'],
    howToUse: 'Apply a small amount around the eye area using your ring finger. Gently pat until absorbed. Use morning and evening.',
    featured: true
  },
  {
    id: '8',
    name: 'Aloe Vera Hand Cream',
    shortDescription: 'Nourishing hand cream with aloe vera',
    description: 'Our Aloe Vera Hand Cream provides deep hydration without greasiness. Enriched with aloe vera, shea butter, and vitamin E, it repairs dry, cracked hands and strengthens nails.',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1608248543542-b4d3d407a225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'body',
    tags: ['hand care', 'moisturizer', 'repair'],
    rating: 4.9,
    reviews: [
      {
        id: 'r12',
        userId: 'u12',
        userName: 'Laura M.',
        rating: 5,
        comment: 'Best hand cream I\'ve ever used! Saved my hands during winter.',
        date: '2025-04-08',
        helpful: 45
      }
    ],
    stock: 45,
    ingredients: ['Aloe Vera Gel', 'Shea Butter', 'Vitamin E', 'Glycerin', 'Jojoba Oil'],
    benefits: ['Intense hydration', 'Repairs dry, cracked skin', 'Strengthens nails and cuticles', 'Non-greasy formula'],
    howToUse: 'Apply to clean hands as needed throughout the day. Pay special attention to dry areas and cuticles.',
    bestSeller: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return products
    .filter(p => p.id !== product.id && (p.category === product.category || p.tags.some(tag => product.tags.includes(tag))))
    .slice(0, limit);
};

export const getFeaturedProducts = (limit: number = 4): Product[] => {
  return products
    .filter(p => p.featured)
    .slice(0, limit);
};

export const getBestSellerProducts = (limit: number = 4): Product[] => {
  return products
    .filter(p => p.bestSeller)
    .slice(0, limit);
};

export const getNewProducts = (limit: number = 4): Product[] => {
  return products
    .filter(p => p.isNew)
    .slice(0, limit);
};

export const getOnSaleProducts = (limit: number = 4): Product[] => {
  return products
    .filter(p => p.onSale)
    .slice(0, limit);
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) || 
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};