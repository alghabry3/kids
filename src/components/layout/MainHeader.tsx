import React, { useState } from 'react';
import { KristinaLogo } from '../brand/KristinaLogo';
import { ModuleView } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { 
  Home, 
  ShoppingBag, 
  GraduationCap, 
  Calendar, 
  Sparkles, 
  Clock, 
  Users, 
  Menu, 
  X, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface MainHeaderProps {
  currentView: ModuleView;
  onNavigate: (view: ModuleView) => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const MainHeader: React.FC<MainHeaderProps> = ({
  currentView,
  onNavigate,
  onOpenCart,
  cartCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, isRTL, t } = useLanguage();
  const isEn = language === 'en';

  const navItems: { id: ModuleView; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'home', label: t('nav.home', 'الرئيسية'), icon: <Home className="w-4 h-4" /> },
    { id: 'shop', label: t('nav.shop', 'المتجر والدورات'), icon: <ShoppingBag className="w-4 h-4" />, badge: 'website_sale' },
    { id: 'elearning', label: t('nav.elearning', 'التعليم الإلكتروني'), icon: <GraduationCap className="w-4 h-4" />, badge: 'website_slides' },
    { id: 'events', label: t('nav.events', 'الفعاليات والأنشطة'), icon: <Calendar className="w-4 h-4" />, badge: 'website_event' },
    { id: 'placement', label: t('nav.placement', 'تحديد المستوى'), icon: <Sparkles className="w-4 h-4 text-amber-500" />, badge: t('nav.discountBadge', 'خصم 10%') },
    { id: 'schedule', label: t('nav.schedule', 'جدول الحضور'), icon: <Clock className="w-4 h-4" /> },
    { id: 'staff', label: t('nav.staff', 'فريق المعلمين'), icon: <Users className="w-4 h-4" /> },
  ];

  const handleNavClick = (view: ModuleView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer py-2 transition-transform active:scale-98"
          >
            <KristinaLogo size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#9E1C58]/10 text-[#9E1C58]'
                      : 'text-slate-700 hover:text-[#9E1C58] hover:bg-slate-100/70'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                      isActive 
                        ? 'bg-[#9E1C58] text-white' 
                        : 'bg-slate-200/80 text-slate-600'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 right-3 left-3 h-0.5 bg-[#9E1C58] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Placement Test CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleNavClick('placement')}
              className="hidden sm:inline-flex items-center gap-1.5 bg-linear-to-r from-[#9E1C58] to-[#B32265] text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-sm hover:shadow-md hover:brightness-105 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>{t('nav.placementCta', 'اختبار موهبة طفلك')}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden cursor-pointer"
              aria-label={t('nav.menu', 'القائمة')}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="pb-2 border-b border-slate-100 mb-3 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">{t('nav.odooModules', 'أقسام وموديولات أودو 19')}</span>
            <LanguageSwitcher />
          </div>
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#9E1C58] text-white'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {item.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  {isRTL ? <ChevronLeft className="w-4 h-4 opacity-70" /> : <ChevronRight className="w-4 h-4 opacity-70" />}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
