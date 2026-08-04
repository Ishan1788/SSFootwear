import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-primary/95 text-white border-t border-white/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-heading text-headline-lg-mobile font-bold text-white mb-4">SS FOOTWEAR</h3>
            <p className="font-body text-body-md text-white/70 max-w-xs">
              Crafting excellence in Nepal since 1995. Bridging traditional craftsmanship with modern luxury.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <span className="material-symbols-outlined">instagram</span>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <span className="material-symbols-outlined">linkedin</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-technical text-label-technical uppercase tracking-widest text-white/60 mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/products/men" className="hover:text-white transition-colors">Men</Link></li>
              <li><Link to="/products/women" className="hover:text-white transition-colors">Women</Link></li>
              <li><Link to="/products/kids" className="hover:text-white transition-colors">Kids</Link></li>
              <li><Link to="/products/school" className="hover:text-white transition-colors">School</Link></li>
              <li><Link to="/products/sports" className="hover:text-white transition-colors">Sports</Link></li>
              <li><Link to="/products/industrial" className="hover:text-white transition-colors">Industrial</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-technical text-label-technical uppercase tracking-widest text-white/60 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/factory" className="hover:text-white transition-colors">Factory</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/dealer" className="hover:text-white transition-colors">Become Dealer</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-technical text-label-technical uppercase tracking-widest text-white/60 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping</Link></li>
              <li><Link to="/returns" className="hover:text-white transition-colors">Returns</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© 2024 SS Footwear Nepal. All Rights Reserved.</span>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}