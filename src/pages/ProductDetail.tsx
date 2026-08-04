import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';


// Import the same product data (you can move it to a shared file later)
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

// ========== FULL PRODUCT LIST (same as Products page) ==========
const allProducts = [
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
  },
  {
    id: '3',
    name: 'Everest Logger',
    category: 'industrial',
    price: 9800,
    rating: 4.9,
    colors: ['#3D2B1F', '#5C4033', '#1A1A1A'],
    sizes: ['7', '8', '9', '10', '11'],
    image: tradImg,
    hoverImage: doco2Img,
    badge: 'Industrial',
  },
  {
    id: '4',
    name: 'City Chelsea',
    category: 'women',
    price: 7500,
    rating: 4.7,
    colors: ['#1A1A1A', '#2C1810', '#4A3728'],
    sizes: ['8', '9', '10', '11'],
    image: gumyellowImg,
    hoverImage: pandaBkImg,
    badge: '',
  },
  {
    id: '5',
    name: 'School Classic',
    category: 'school',
    price: 3200,
    rating: 4.5,
    colors: ['#1A1A1A', '#2C1810'],
    sizes: ['5', '6', '7', '8', '9'],
    image: schoolblackImg,
    hoverImage: whiteImg,
    badge: 'Popular',
  },
  {
    id: '6',
    name: 'Winter Boot',
    category: 'winter',
    price: 11200,
    rating: 4.9,
    colors: ['#3D2B1F', '#1A1A1A'],
    sizes: ['8', '9', '10', '11', '12'],
    image: gumyellowImg,
    hoverImage: tradImg,
    badge: 'Winter',
  },
  {
    id: '7',
    name: 'Panda Sneaker',
    category: 'kids',
    price: 2800,
    rating: 4.4,
    colors: ['#FFFFFF', '#1A1A1A'],
    sizes: ['3', '4', '5', '6'],
    image: pandaBkImg,
    hoverImage: blackImg,
    badge: 'Kids',
  },
  {
    id: '8',
    name: 'Eila Runner',
    category: 'sports',
    price: 4800,
    rating: 4.7,
    colors: ['#E8D5C4', '#2C1810'],
    sizes: ['7', '8', '9', '10'],
    image: eilaImg,
    hoverImage: sportImg,
    badge: 'New',
  },
  {
    id: '9',
    name: 'Doco Work Boot',
    category: 'industrial',
    price: 10500,
    rating: 4.8,
    colors: ['#1A1A1A', '#3D2B1F'],
    sizes: ['8', '9', '10', '11'],
    image: doco2Img,
    hoverImage: blackImg,
    badge: 'Industrial',
  },
  {
    id: '10',
    name: 'Pattern Oxford',
    category: 'men',
    price: 8900,
    rating: 4.6,
    colors: ['#2C1810', '#4A3728'],
    sizes: ['8', '9', '10', '11'],
    image: patternImg,
    hoverImage: tradImg,
    badge: '',
  },
  {
    id: '11',
    name: 'White Low-Top',
    category: 'sports',
    price: 3900,
    rating: 4.3,
    colors: ['#FFFFFF', '#D4D4D4'],
    sizes: ['7', '8', '9', '10', '11'],
    image: whiteImg,
    hoverImage: sportshoeImg,
    badge: 'Sale',
  },
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
  },
];

// ========== MAIN COMPONENT ==========
export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');

  // Find the product by ID
  const product = allProducts.find((p) => p.id === id);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} – SS Footwear`;
    }
  }, [product]);

  // If product not found, redirect to 404 or product list
  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // Build image array – use main image and hover image as additional views
  const images = [product.image, product.hoverImage, product.image]; // For demo, you can add more

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Gallery */}
        <div className="lg:w-2/3">
          <div className="aspect-square bg-surface-container-low overflow-hidden rounded-sm mb-4">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-20 h-20 shrink-0 border-2 ${
                  selectedImage === idx ? 'border-primary' : 'border-transparent'
                } overflow-hidden rounded-sm`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product info – sticky */}
        <div className="lg:w-1/3 sticky top-[100px] self-start">
          <h1 className="font-display-lg text-[40px] lg:text-display-lg text-primary mb-2">
            {product.name}
          </h1>
          <p className="font-heading text-headline-lg text-primary mb-4">
            NPR {product.price.toLocaleString()}
          </p>
          <p className="font-body text-body-md text-text-secondary mb-8">
            A contemporary reinterpretation of a timeless classic. Handcrafted in the Kathmandu Valley, this {product.category} shoe merges traditional techniques with modern minimalism.
          </p>

          {/* Size selector */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="font-technical text-label-technical uppercase text-primary">
                Select Size (US)
              </span>
              <button className="font-technical text-label-technical uppercase text-text-secondary underline">
                Size Guide
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-14 border ${
                    selectedSize === size
                      ? 'border-primary bg-primary text-white'
                      : 'border-border hover:border-primary'
                  } transition-colors font-technical text-label-technical uppercase`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Bag */}
          <button className="w-full h-16 bg-primary text-white font-technical text-label-technical uppercase tracking-widest hover:bg-primary/90 transition-colors flex justify-between items-center px-6 mb-12">
            <span>Add to Bag</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>

          {/* Features accordion */}
          <div className="border-t border-border divide-y divide-border">
            <details className="group py-4 cursor-pointer">
              <summary className="flex justify-between items-center font-technical text-label-technical uppercase tracking-wider text-primary list-none">
                <span>Craft</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-45">
                  add
                </span>
              </summary>
              <div className="pt-4 font-body text-body-md text-text-secondary">
                Goodyear welted, 140-step process. Hand-stitched by master artisans.
              </div>
            </details>
            <details className="group py-4 cursor-pointer">
              <summary className="flex justify-between items-center font-technical text-label-technical uppercase tracking-wider text-primary list-none">
                <span>Materials</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-45">
                  add
                </span>
              </summary>
              <div className="pt-4 font-body text-body-md text-text-secondary">
                Premium full-grain calf leather, breathable leather lining, stacked leather sole.
              </div>
            </details>
            <details className="group py-4 cursor-pointer">
              <summary className="flex justify-between items-center font-technical text-label-technical uppercase tracking-wider text-primary list-none">
                <span>Shipping &amp; Returns</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-45">
                  add
                </span>
              </summary>
              <div className="pt-4 font-body text-body-md text-text-secondary">
                Free worldwide shipping. 30‑day returns on unworn items in original packaging.
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}