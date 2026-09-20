import React, { useState } from 'react';
import { ModuleView, IProduct, IPricingOption, ICartItem, IDiscountCoupon } from './types';
import { ProductService } from './services/ProductService';
import { CourseService } from './services/CourseService';
import { EventService } from './services/EventService';
import { useLanguage } from './context/LanguageContext';
import { OdooTopBar } from './components/layout/OdooTopBar';
import { MainHeader } from './components/layout/MainHeader';
import { Footer } from './components/layout/Footer';
import { HomeView } from './components/views/HomeView';
import { ShopView } from './components/views/ShopView';
import { ELearningView } from './components/views/ELearningView';
import { EventsView } from './components/views/EventsView';
import { AttendanceScheduleView } from './components/views/AttendanceScheduleView';
import { StaffView } from './components/views/StaffView';
import { PlacementTestView } from './components/views/PlacementTestView';
import { CartDrawer } from './components/modals/CartDrawer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const { language, isRTL, t } = useLanguage();
  const isEn = language === 'en';

  const [currentView, setCurrentView] = useState<ModuleView>('home');
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [activeCoupon, setActiveCoupon] = useState<IDiscountCoupon | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductModal, setSelectedProductModal] = useState<IProduct | null>(null);

  // Services instances
  const products = ProductService.getAllProducts();
  const primaryCourse = CourseService.getPrimaryCourse();
  const events = EventService.getAllEvents();

  // Cart actions
  const handleAddToCart = (
    product: IProduct,
    option: IPricingOption,
    studentName: string,
    studentAge: number
  ) => {
    const newItem: ICartItem = {
      id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      productId: product.id,
      productName: isEn ? product.nameEn : product.nameAr,
      category: product.category,
      selectedOption: option,
      studentName,
      studentAge,
      quantity: 1,
    };

    setCart(prev => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const handleRemoveCartItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleOpenProduct = (product: IProduct) => {
    setSelectedProductModal(product);
    setCurrentView('shop');
  };

  const handleApplyCouponAndGoShop = (couponCode: string) => {
    const coupon = ProductService.validateCoupon(couponCode);
    if (coupon) {
      setActiveCoupon(coupon);
    }
    setCurrentView('shop');
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div 
      className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#9E1C58] selection:text-white" 
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      
      {/* Odoo 19 Enterprise Top Bar */}
      <OdooTopBar
        onOpenOdooBackend={() => setCurrentView('schedule')}
        onOpenParentPortal={() => setCurrentView('schedule')}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Brand & Module Header */}
      <MainHeader
        currentView={currentView}
        onNavigate={setCurrentView}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Active View Container */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={setCurrentView}
            featuredProducts={products}
            onSelectProduct={handleOpenProduct}
          />
        )}

        {currentView === 'shop' && (
          <ShopView
            products={products}
            onAddToCart={handleAddToCart}
            selectedProductModal={selectedProductModal}
            onCloseModal={() => setSelectedProductModal(null)}
            onOpenProductModal={handleOpenProduct}
          />
        )}

        {currentView === 'elearning' && (
          <ELearningView course={primaryCourse} />
        )}

        {currentView === 'events' && (
          <EventsView events={events} />
        )}

        {currentView === 'schedule' && (
          <AttendanceScheduleView />
        )}

        {currentView === 'staff' && (
          <StaffView />
        )}

        {currentView === 'placement' && (
          <PlacementTestView
            onNavigate={setCurrentView}
            onApplyCouponAndGoShop={handleApplyCouponAndGoShop}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={setCurrentView} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        activeCoupon={activeCoupon}
        onApplyCoupon={setActiveCoupon}
      />

      {/* Floating WhatsApp Consultation Button */}
      <a
        href={isEn 
          ? "https://wa.me/966568826618?text=Hello%20Kristina%20Kidz%20Academy%2C%20I%20would%20like%20to%20inquire%20about%20your%20programs%20and%20courses"
          : "https://wa.me/966568826618?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9%20%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D9%8A%D9%86%D8%A7%20%D9%83%D9%8A%D8%AF%D8%B2%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A8%D8%B1%D8%A7%D9%85%D8%AC%20%D9%88%D8%AF%D9%88%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9"
        }
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 font-bold text-xs sm:text-sm group cursor-pointer`}
        title={isEn ? "Contact us via Academy WhatsApp" : "تواصل معنا عبر واتساب الأكاديمية"}
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="hidden sm:inline">
          {isEn ? "Contact Academy Admin" : "تواصل مع إدارة الأكاديمية"}
        </span>
      </a>

    </div>
  );
}
