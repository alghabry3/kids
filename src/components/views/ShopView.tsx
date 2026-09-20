import React, { useState } from 'react';
import { IProduct, IPricingOption, ProductCategory } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { 
  ShoppingBag, 
  Check, 
  Clock, 
  Users, 
  Sparkles, 
  Tag, 
  ArrowLeft,
  ArrowRight,
  CheckCircle2, 
  Info,
  X,
  Heart,
  Plus
} from 'lucide-react';

interface ShopViewProps {
  products: IProduct[];
  onAddToCart: (product: IProduct, option: IPricingOption, studentName: string, studentAge: number) => void;
  selectedProductModal?: IProduct | null;
  onCloseModal?: () => void;
  onOpenProductModal: (product: IProduct) => void;
}

export const ShopView: React.FC<ShopViewProps> = ({
  products,
  onAddToCart,
  selectedProductModal,
  onCloseModal,
  onOpenProductModal,
}) => {
  const { t, language } = useLanguage();
  const isEn = language === 'en';
  const NextIcon = isEn ? ArrowRight : ArrowLeft;

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<IProduct | null>(selectedProductModal || null);
  const [selectedOption, setSelectedOption] = useState<IPricingOption | null>(null);
  const [studentName, setStudentName] = useState('');
  const [studentAge, setStudentAge] = useState<number>(5);
  const [addedNotification, setAddedNotification] = useState<string | null>(null);

  // Sync with prop if it changes
  React.useEffect(() => {
    if (selectedProductModal) {
      setActiveModalProduct(selectedProductModal);
      setSelectedOption(selectedProductModal.pricingOptions[0] || null);
    }
  }, [selectedProductModal]);

  const categories = [
    { id: 'all', labelAr: 'كافة البرامج والدورات', labelEn: 'All Programs & Courses', odooCode: 'all' },
    { id: 'hosting', labelAr: 'الضيافة والرعاية (2-5 سنوات)', labelEn: 'Daycare & Hosting (2-5 yrs)', odooCode: 'SERV_HOSTING' },
    { id: 'foundation', labelAr: 'تأسيس الإنجليزية (6+ سنوات)', labelEn: 'English Foundations (6+ yrs)', odooCode: 'SERV_ENG_FND' },
    { id: 'school_support', labelAr: 'دعم وتقوية المناهج', labelEn: 'School Curriculum Support', odooCode: 'SERV_SUP' },
    { id: 'english_courses', labelAr: 'دورات الإنجليزية المتكاملة', labelEn: 'Integrated English Courses', odooCode: 'SERV_ENG_CRS' },
    { id: 'packages', labelAr: 'باقات الفصول المخفضة', labelEn: 'Term Bundles & Packages', odooCode: 'PACKAGES' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleOpenProduct = (product: IProduct) => {
    setActiveModalProduct(product);
    setSelectedOption(product.pricingOptions[0] || null);
    onOpenProductModal(product);
  };

  const handleClose = () => {
    setActiveModalProduct(null);
    if (onCloseModal) onCloseModal();
  };

  const handleConfirmAddToCart = () => {
    if (!activeModalProduct || !selectedOption) return;
    if (!studentName.trim()) {
      alert(isEn ? 'Please enter the student full name to proceed with booking.' : 'فضلاً قم بكتابة اسم الطفل لاستكمال الحجز');
      return;
    }
    onAddToCart(activeModalProduct, selectedOption, studentName, studentAge);
    const prodName = isEn ? (activeModalProduct.nameEn || activeModalProduct.nameAr) : activeModalProduct.nameAr;
    setAddedNotification(
      isEn 
        ? `"${prodName}" added to cart successfully!`
        : `تمت إضافة "${prodName}" إلى السلة بنجاح!`
    );
    setTimeout(() => {
      setAddedNotification(null);
      handleClose();
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#714B67]/10 text-[#714B67] px-3 py-1 rounded-full text-xs font-bold mb-2">
              <span>{t('odoo_module_badge')}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              {t('shop_title')}
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              {t('shop_subtitle')}
            </p>
          </div>

          {/* Active Offers Pill */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 max-w-sm">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-xs mb-1">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{t('available_discount_codes')}</span>
            </div>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              <span className="bg-white px-2 py-0.5 rounded font-mono font-bold text-[#9E1C58] border border-amber-200">
                KIDZ-NATIONAL (-15%)
              </span>
              <span className="bg-white px-2 py-0.5 rounded font-mono font-bold text-[#06B6D4] border border-amber-200">
                KIDZ-SIBLINGS (-10%)
              </span>
              <span className="bg-white px-2 py-0.5 rounded font-mono font-bold text-emerald-600 border border-amber-200">
                KIDZ-LEVEL10 (-10%)
              </span>
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pt-6 border-t border-slate-100 no-scrollbar">
          {categories.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#9E1C58] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {isEn ? cat.labelEn : cat.labelAr}
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProducts.map(product => {
          const minPrice = Math.min(...product.pricingOptions.map(p => p.price));
          const maxPrice = Math.max(...product.pricingOptions.map(p => p.price));
          const prodName = isEn ? (product.nameEn || product.nameAr) : product.nameAr;
          const prodShortDesc = isEn ? (product.shortDescEn || product.shortDesc) : product.shortDesc;
          const prodAge = isEn ? (product.ageRangeEn || product.ageRange) : product.ageRange;
          const prodTiming = isEn ? (product.timingEn || product.timing) : product.timing;
          const prodFeatures = isEn && product.featuresEn ? product.featuresEn : product.features;

          return (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={prodName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-3 ${isEn ? 'right-3' : 'right-3'} bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-bold text-slate-800 shadow-xs`}>
                    {prodAge}
                  </div>
                  <div className={`absolute top-3 ${isEn ? 'left-3' : 'left-3'} bg-[#1E293B]/80 text-white px-2 py-0.5 rounded text-[10px] font-mono`}>
                    {product.code}
                  </div>
                  <div className="absolute bottom-3 right-3 left-3 bg-slate-950/75 backdrop-blur-xs px-3 py-1.5 rounded-xl text-[11px] text-white flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{prodTiming}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-black text-lg text-slate-900 group-hover:text-[#9E1C58] transition-colors">
                    {prodName}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {prodShortDesc}
                  </p>

                  {/* Features list */}
                  <div className="space-y-1.5 pt-2">
                    {prodFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Options preview pills */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 block mb-1.5">
                      {t('available_pricing_options')}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.pricingOptions.slice(0, 3).map(opt => {
                        const optLabel = isEn ? (opt.durationLabelEn || opt.durationLabel) : opt.durationLabel;
                        return (
                          <span key={opt.id} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                            {optLabel.split('(')[0]}: <strong className="text-slate-900">{opt.price} {t('sar')}</strong>
                          </span>
                        );
                      })}
                      {product.pricingOptions.length > 3 && (
                        <span className="text-[10px] text-slate-400 self-center">
                          +{product.pricingOptions.length - 3} {isEn ? 'more options' : 'خيارات أخرى'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bottom */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">{t('starts_from')}</span>
                    <div className="text-lg font-black text-[#9E1C58]">
                      {minPrice} <span className="text-xs font-bold text-slate-500">{isEn ? `to ${maxPrice} SAR` : `إلى ${maxPrice} ر.س`}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenProduct(product)}
                    className="bg-[#9E1C58] hover:bg-[#B32265] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
                  >
                    <span>{t('choose_package_and_book')}</span>
                    <NextIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* PRODUCT CONFIGURATION & ADD TO CART MODAL */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200 my-8">
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className={`absolute top-5 ${isEn ? 'right-5' : 'left-5'} p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors`}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="space-y-2 pb-4 border-b border-slate-100">
              <div className="inline-flex items-center gap-2 bg-[#9E1C58]/10 text-[#9E1C58] px-2.5 py-0.5 rounded-full text-xs font-bold">
                <span>{activeModalProduct.code}</span>
                <span>•</span>
                <span>{isEn ? (activeModalProduct.ageRangeEn || activeModalProduct.ageRange) : activeModalProduct.ageRange}</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900">
                {isEn ? (activeModalProduct.nameEn || activeModalProduct.nameAr) : activeModalProduct.nameAr}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                {isEn ? (activeModalProduct.fullDescEn || activeModalProduct.fullDesc) : activeModalProduct.fullDesc}
              </p>
            </div>

            {/* Notification alert */}
            {addedNotification && (
              <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{addedNotification}</span>
              </div>
            )}

            {/* Pricing Options Selector */}
            <div className="mt-5 space-y-3">
              <label className="block text-xs font-extrabold text-slate-800">
                {isEn ? 'Select Package Duration & Attendance:' : 'اختر الباقة ومدة الاشتراك المطلوبة:'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-56 overflow-y-auto p-1">
                {activeModalProduct.pricingOptions.map(option => {
                  const isSelected = selectedOption?.id === option.id;
                  const optLabel = isEn ? (option.durationLabelEn || option.durationLabel) : option.durationLabel;
                  const optHours = isEn ? (option.hoursPerWeekOrDayEn || option.hoursPerWeekOrDay) : option.hoursPerWeekOrDay;
                  const optBadge = isEn ? (option.badgeEn || option.badge) : option.badge;

                  return (
                    <div
                      key={option.id}
                      onClick={() => setSelectedOption(option)}
                      className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#9E1C58] bg-[#9E1C58]/5 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-bold text-xs sm:text-sm text-slate-900">
                            {optLabel}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            {optHours} • {option.totalHours} {isEn ? 'hrs' : 'ساعة'}
                          </div>
                        </div>
                        {optBadge && (
                          <span className="bg-amber-400 text-slate-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full shrink-0">
                            {optBadge}
                          </span>
                        )}
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-100 flex items-baseline justify-between">
                        <span className="text-base font-black text-[#9E1C58]">
                          {option.price} <span className="text-xs font-bold text-slate-600">{t('sar')}</span>
                        </span>
                        {option.pricePerHour && (
                          <span className="text-[10px] text-slate-400">
                            ({option.pricePerHour.toFixed(1)} {isEn ? 'SAR/hr' : 'ر.س / ساعة'})
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Child Name & Age input */}
            <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t('student_full_name')}: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder={isEn ? 'e.g. Rayan Hassan Al-Nasser' : 'مثال: ريان حسن آل ناصر'}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#9E1C58] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t('student_age')}:
                </label>
                <input
                  type="number"
                  min={2}
                  max={14}
                  value={studentAge}
                  onChange={(e) => setStudentAge(Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#9E1C58] focus:bg-white"
                />
              </div>
            </div>

            {/* Footer Action */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-slate-400 block">{isEn ? 'Total for selected package:' : 'إجمالي السعر للباقة المختارة:'}</span>
                <span className="text-2xl font-black text-[#9E1C58]">
                  {selectedOption ? selectedOption.price : 0} <span className="text-sm font-bold">{t('sar')}</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleClose}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  {isEn ? 'Cancel' : 'إلغاء'}
                </button>
                <button
                  onClick={handleConfirmAddToCart}
                  className="bg-[#9E1C58] hover:bg-[#B32265] text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t('add_to_cart')}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
