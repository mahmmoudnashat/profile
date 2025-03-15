import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'skincare',
    name: 'Skincare',
    description: 'Nourish and protect your skin with our aloe vera-infused skincare products.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'body',
    name: 'Body Care',
    description: 'Pamper your body with our soothing and hydrating aloe vera body products.',
    image: 'https://images.unsplash.com/photo-1608248543542-b4d3d407a225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hair',
    name: 'Hair Care',
    description: 'Revitalize your hair with our nourishing aloe vera hair treatments.',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sun',
    name: 'Sun Care',
    description: 'Protect and soothe your skin before and after sun exposure.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};