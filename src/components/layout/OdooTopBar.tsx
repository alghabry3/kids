import React from 'react';
import { Phone, MessageCircle, MapPin, Database, UserCheck, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface OdooTopBarProps {
  onOpenOdooBackend: () => void;
  onOpenParentPortal: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const OdooTopBar: React.FC<OdooTopBarProps> = ({
  onOpenOdooBackend,
  onOpenParentPortal,
  onOpenCart,
  cartCount,
}) => {
  const { language, t } = useLanguage();
  const isEn = language === 'en';

  return (
    <div className="bg-[#1E293B] text-slate-200 text-xs border-b border-slate-700/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
        {/* Contact info & Location */}
        <div className="flex items-center flex-wrap gap-4 sm:gap-6 text-[11px] sm:text-xs">
          <a
            href="tel:+966568826618"
            className="inline-flex items-center gap-1.5 hover:text-[#F59E0B] transition-colors"
            dir="ltr"
          >
            <Phone className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>+966 56 882 6618</span>
          </a>

          <a
            href="https://wa.me/966568826618?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AF%D9%88%D8%B1%D8%A7%D8%AA%20%D9%88%D8%A3%D9%86%D8%B4%D8%B7%D8%A9%20%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D9%8A%D9%86%D8%A7%20%D9%83%D9%8A%D8%AF%D8%B2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{isEn ? 'Academy WhatsApp' : 'واتساب الأكاديمية'}</span>
          </a>

          <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>{isEn ? 'Qatif • Sea Front Mall Complex' : 'القطيف • مجمع سي فرونت (Sea Front)'}</span>
          </span>
        </div>

        {/* Odoo 19 Simulation & Portals Bar */}
        <div className="flex items-center gap-2 sm:gap-3 mr-auto sm:mr-0">
          {/* Language Switcher Component */}
          <LanguageSwitcher />

          {/* Odoo 19 Ecosystem Badge & Switcher */}
          <button
            onClick={onOpenOdooBackend}
            className="inline-flex items-center gap-1.5 bg-[#714B67] hover:bg-[#8A5B7D] text-white px-2.5 py-1 rounded-md text-[11px] font-bold shadow-xs transition-all cursor-pointer border border-[#8A5B7D]/80"
            title={isEn ? 'Preview Odoo 19 modules and backend ERP view' : 'معاينة شاشات وموديولات أودو 19 كما في النظام'}
          >
            <Database className="w-3 h-3 text-amber-300" />
            <span className="font-sans">Odoo 19 ERP</span>
            <span className="hidden sm:inline bg-white/20 text-[10px] px-1.5 py-0.2 rounded font-normal">
              {isEn ? 'Dashboard' : 'لوحة التحكم'}
            </span>
          </button>

          {/* Parent Portal */}
          <button
            onClick={onOpenParentPortal}
            className="inline-flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-2.5 py-1 rounded-md text-[11px] transition-colors border border-slate-700 cursor-pointer"
          >
            <UserCheck className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>{isEn ? 'Parent Portal' : 'بوابة ولي الأمر'}</span>
          </button>

          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            className="relative inline-flex items-center gap-1 bg-[#9E1C58] hover:bg-[#B32265] text-white px-2.5 py-1 rounded-md text-[11px] font-bold transition-colors shadow-xs cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isEn ? 'Cart' : 'السلة'}</span>
            {cartCount > 0 && (
              <span className="bg-amber-400 text-slate-900 rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-extrabold -mr-1">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
