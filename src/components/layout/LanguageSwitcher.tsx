import React from 'react';
import { Globe, Check } from 'lucide-react';
import { useLanguage, Language } from '../../context/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'topbar' | 'compact' | 'header';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  variant = 'topbar',
}) => {
  const { language, setLanguage, isRTL, t } = useLanguage();

  const handleSelectLanguage = (lang: Language) => {
    if (language !== lang) {
      setLanguage(lang);
    }
  };

  const isEn = language === 'en';

  if (variant === 'compact') {
    return (
      <button
        onClick={() => setLanguage(isEn ? 'ar' : 'en')}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all border shadow-xs cursor-pointer ${
          isEn
            ? 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
            : 'bg-[#9E1C58] text-white border-[#9E1C58] hover:bg-[#B32265]'
        } ${className}`}
        title={isEn ? t('lang.switchToAr', 'التبديل إلى الواجهة العربية') : t('lang.switchToEn', 'Switch to English Interface')}
        aria-label={t('lang.switcher', 'مبدل اللغة')}
      >
        <Globe className="w-3.5 h-3.5 text-[#06B6D4]" />
        <span>{isEn ? 'العربية' : 'English'}</span>
      </button>
    );
  }

  return (
    <div
      role="radiogroup"
      aria-label={t('lang.switcher', 'Language Switcher')}
      className={`inline-flex items-center bg-slate-900/90 border border-slate-700/80 rounded-lg p-0.5 shadow-inner transition-colors ${className}`}
    >
      {/* Globe indicator icon */}
      <div 
        className="px-1.5 py-1 text-slate-400 flex items-center justify-center" 
        title={`${isEn ? 'Current interface: English (LTR)' : 'الواجهة الحالية: العربية (RTL)'}`}
        aria-hidden="true"
      >
        <Globe className="w-3.5 h-3.5 text-[#06B6D4]" />
      </div>

      {/* Arabic Switch Button */}
      <button
        type="button"
        role="radio"
        aria-checked={!isEn}
        onClick={() => handleSelectLanguage('ar')}
        className={`relative inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-extrabold transition-all duration-200 cursor-pointer select-none ${
          !isEn
            ? 'bg-[#9E1C58] text-white shadow-sm ring-1 ring-white/10'
            : 'text-slate-300 hover:text-white hover:bg-slate-800'
        }`}
        title={t('lang.switchToAr', 'التبديل إلى الواجهة العربية (RTL)')}
      >
        <span className="text-xs leading-none" aria-hidden="true">🇸🇦</span>
        <span>العربية</span>
        {!isEn && (
          <Check className="w-3 h-3 text-pink-200 ml-0.5 shrink-0" strokeWidth={3} />
        )}
      </button>

      {/* English Switch Button */}
      <button
        type="button"
        role="radio"
        aria-checked={isEn}
        onClick={() => handleSelectLanguage('en')}
        className={`relative inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-extrabold transition-all duration-200 cursor-pointer select-none ${
          isEn
            ? 'bg-[#9E1C58] text-white shadow-sm ring-1 ring-white/10'
            : 'text-slate-300 hover:text-white hover:bg-slate-800'
        }`}
        title={t('lang.switchToEn', 'Switch to English interface (LTR)')}
      >
        <span className="text-xs leading-none" aria-hidden="true">🇬🇧</span>
        <span>English</span>
        {isEn && (
          <Check className="w-3 h-3 text-pink-200 ml-0.5 shrink-0" strokeWidth={3} />
        )}
      </button>
    </div>
  );
};
