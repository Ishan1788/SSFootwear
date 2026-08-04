import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainLayout } from './layouts/MainLayout';
import './index.css';

// Lazy-load pages
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Factory = lazy(() => import('./pages/Factory'));
const DealerPortal = lazy(() => import('./pages/DealerPortal'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact')); // ← ADD THIS

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading…</div>}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/factory" element={<Factory />} />
              <Route path="/dealer" element={<DealerPortal />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />  {/* ← NOW WORKS */}
              <Route path="*" element={<div className="p-8 text-center">Page not found</div>} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);