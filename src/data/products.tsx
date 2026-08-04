// src/data/products.ts

import blackImg from '../assets/black.png';
import doco2Img from '../assets/doco 2.jpg';
import eilaImg from '../assets/eila.jpg';
import gumyellowImg from '../assets/gumyellow.jpg';
import pandaBkImg from '../assets/panda bk.jpg';
import patternImg from '../assets/pattern.png';
import pinkImg from '../assets/pink.png';
import schoolblackImg from '../assets/schoolblack.jpg';
import sportImg from '../assets/sport.png';
import sportshoeImg from '../assets/sportshoe.jpg';
import tradImg from '../assets/trad.png';
import whiteImg from '../assets/white.jpg';

export const allProducts = [
  {
    id: '1',
    name: 'The Kathmandu Oxford',
    category: 'men',
    price: 8500,
    rating: 4.8,
    colors: ['#2C1810', '#4A3728', '#1A1A1A'],
    sizes: ['7', '8', '9', '10', '11'],
    image: blackImg,
    hoverImage: patternImg,
    badge: 'Bestseller',
    description: 'A contemporary reinterpretation of a timeless classic. Handcrafted in the Kathmandu Valley, this oxford merges traditional shoemaking techniques with an unyielding commitment to modern, architectural minimalism.',
  },
  {
    id: '2',
    name: 'Alpine Low-Top',
    category: 'sports',
    price: 5200,
    rating: 4.6,
    colors: ['#F5F5F5', '#D4D4D4', '#1A1A1A'],
    sizes: ['8', '9', '10', '11', '12'],
    image: pinkImg,
    hoverImage: sportshoeImg,
    badge: 'New',
    description: 'Lightweight and breathable, the Alpine Low-Top is built for everyday comfort. Perfect for the modern urban explorer.',
  },
  // ... all other products from earlier
  {
    id: '12',
    name: 'Gum Yellow Sneaker',
    category: 'sports',
    price: 4500,
    rating: 4.5,
    colors: ['#F5D76E', '#1A1A1A'],
    sizes: ['8', '9', '10', '11'],
    image: gumyellowImg,
    hoverImage: pinkImg,
    badge: 'New',
    description: 'Bold and vibrant, the Gum Yellow Sneaker makes a statement. Designed for those who dare to stand out.',
  },
];

export const categoryNames: Record<string, string> = {
  men: 'Men',
  women: 'Women',
  kids: 'Kids',
  school: 'School',
  sports: 'Sports',
  industrial: 'Industrial',
  winter: 'Winter',
};

// Define a type for product
export type Product = typeof allProducts[0];