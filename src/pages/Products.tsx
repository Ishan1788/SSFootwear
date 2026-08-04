import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/Shared/ProductCard';

// ========== LOCAL IMAGES ==========
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

// ========== FULL PRODUCT LIST ==========
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

// ========== CATEGORY DISPLAY NAMES ==========
const categoryNames: Record<string, string> = {
  men: 'Men',
  women: 'Women',
  kids: 'Kids',
  school: 'School',
  sports: 'Sports',
  industrial: 'Industrial',
  winter: 'Winter',
};

// ========== AVAILABLE SIZES ==========
const allSizes = ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

// ========== MAIN COMPONENT ==========
export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam && categoryParam !== 'all' ? [categoryParam] : []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 12000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  // Update category filter when URL param changes
  useEffect(() => {
    if (categoryParam && categoryParam !== 'all' && !selectedCategories.includes(categoryParam)) {
      setSelectedCategories([categoryParam]);
    } else if (!categoryParam) {
      // If param is removed, keep selectedCategories as is
      // but we only clear when user clicks "Clear All"
    }
  }, [categoryParam]);

  // Apply filters
  const filteredProducts = allProducts.filter((product) => {
    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    // Size filter
    if (selectedSizes.length > 0 && !product.sizes.some((s) => selectedSizes.includes(s))) {
      return false;
    }
    return true;
  });

  const handleCategoryToggle = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newCategories);
    // Update URL: if exactly one category, set it; otherwise remove param
    if (newCategories.length === 1) {
      setSearchParams({ category: newCategories[0] });
    } else {
      // If multiple or zero, remove category param but keep others (none)
      setSearchParams({});
    }
  };

  const handleSizeToggle = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 12000]);
    setSelectedSizes([]);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-background py-12 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <h1 className="font-display-lg text-display-lg text-primary mb-8">All Products</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* ===== SIDEBAR FILTERS ===== */}
          <aside className="w-full md:w-72 flex-shrink-0">
            <div className="bg-surface p-6 border border-border/20 rounded-sm sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-heading text-headline-lg-mobile text-primary">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="font-technical text-label-technical text-text-secondary hover:text-primary transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Category filter */}
              <div className="mb-6">
                <h4 className="font-technical text-label-technical uppercase tracking-widest text-text-secondary mb-3">
                  Category
                </h4>
                <div className="space-y-2">
                  {Object.entries(categoryNames).map(([key, label]) => (
                    <label key={key} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(key)}
                        onChange={() => handleCategoryToggle(key)}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="text-text-secondary">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price range */}
              <div className="mb-6">
                <h4 className="font-technical text-label-technical uppercase tracking-widest text-text-secondary mb-3">
                  Price Range
                </h4>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-text-secondary">NPR {priceRange[0]}</span>
                  <input
                    type="range"
                    min="0"
                    max="12000"
                    step="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-primary"
                  />
                  <span className="text-sm text-text-secondary">NPR {priceRange[1]}</span>
                </div>
              </div>

              {/* Size filter */}
              <div className="mb-6">
                <h4 className="font-technical text-label-technical uppercase tracking-widest text-text-secondary mb-3">
                  Size (US)
                </h4>
                <div className="flex flex-wrap gap-2">
                  {allSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeToggle(size)}
                      className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${
                        selectedSizes.includes(size)
                          ? 'bg-primary text-white'
                          : 'bg-muted-background text-text-secondary hover:bg-border'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-sm text-text-secondary">
                {filteredProducts.length} product{filteredProducts.length !== 1 && 's'} found
              </div>
            </div>
          </aside>

          {/* ===== PRODUCT GRID ===== */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-body text-body-md text-text-secondary">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-primary font-technical text-label-technical uppercase tracking-widest hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard {...product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}