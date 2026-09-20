import React, { useState } from 'react';
import { ICartItem, IDiscountCoupon } from '../../types';
import { ProductService, AVAILABLE_COUPONS } from '../../services/ProductService';
import { useLanguage } from '../../context/LanguageContext';
import { 
  ShoppingBag, 
  X, 
  Trash2, 
  Tag, 
  Check, 
  MessageCircle, 
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: ICartItem[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  activeCoupon?: IDiscountCoupon | null;
  onApplyCoupon: (coupon: IDiscountCoupon | null) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onClearCart,
  activeCoupon,
  onApplyCoupon,
}) => {
  const { language, isRTL, t } = useLanguage();
  const isEn = language === 'en';

  const [couponCodeInput, setCouponCodeInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.selectedOption.price * item.quantity, 0);
  const discountAmount = ProductService.calculateDiscount(subtotal, activeCoupon || undefined);
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const vatAmount = Math.round(taxableAmount * 0.15); // 15% VAT
  const total = taxableAmount + vatAmount;

  const currencyLabel = isEn ? 'SAR' : 'ر.س';

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    if (!couponCodeInput.trim()) return;

    const coupon = ProductService.validateCoupon(couponCodeInput);
    if (coupon) {
      onApplyCoupon(coupon);
      setCouponCodeInput('');
    } else {
      setCouponError(isEn ? 'Invalid or expired coupon code' : 'كود الخصم غير صالح أو منتهي الصلاحية');
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    const orderNumber = `SO-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderConfirmed(orderNumber);
  };

  const handleSendWhatsAppOrder = () => {
    const summaryLines = cartItems.map(
      (item, idx) => `${idx + 1}) ${item.productName} - ${item.selectedOption.durationLabel} (${item.studentName}) [${item.selectedOption.price} ${currencyLabel}]`
    );

    const message = encodeURIComponent(
      isEn
        ? `Hello Kristina Kidz Academy,\nI would like to complete enrollment for Order (${orderConfirmed}):\n${summaryLines.join('\n')}\nTotal incl. VAT: ${total} ${currencyLabel}.`
        : `مرحباً أكاديمية كريستينا كيدز،\nأود إتمام حجز الطلب رقم (${orderConfirmed}):\n${summaryLines.join('\n')}\nالإجمالي شامل الضريبة: ${total} ريال سعودي.`
    );

    window.open(`https://wa.me/966568826618?text=${message}`, '_blank');
  };

  return (
    <div className={`fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
      <div className={`bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between animate-in ${isRTL ? 'slide-in-from-right' : 'slide-in-from-left'} duration-200`}>
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <h3 className="font-black text-lg text-slate-900">
              {t('cart.title', 'سلة الاشتراكات والحجز')}
            </h3>
            <ShoppingBag className="w-5 h-5 text-[#9E1C58]" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          
          {orderConfirmed ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-slate-900">
                {isEn ? 'Sales Order Created Successfully!' : 'تم إنشاء أمر البيع بنجاح!'}
              </h4>
              <p className="text-xs font-mono font-bold text-slate-500">
                {isEn ? 'Odoo 19 Order Reference:' : 'رقم الأمر في Odoo 19:'} <strong className="text-[#9E1C58]">{orderConfirmed}</strong>
              </p>
              <p className="text-xs text-slate-600 leading-relaxed px-4">
                {isEn
                  ? 'Thank you for choosing Kristina Kidz Academy. You can now send reservation details via WhatsApp to confirm the seat and schedule induction.'
                  : 'شكراً لاختيارك أكاديمية كريستينا كيدز. يمكنك الآن إرسال تفاصيل الحجز مباشرة عبر الواتساب لتأكيد المقعد وتحديد موعد المقابلة والتهيئة.'}
              </p>

              <div className="pt-4 space-y-2">
                <button
                  onClick={handleSendWhatsAppOrder}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isEn ? 'Confirm Instantly via Academy WhatsApp' : 'تأكيد الحجز فوراً عبر واتساب الأكاديمية'}</span>
                </button>

                <button
                  onClick={() => {
                    setOrderConfirmed(null);
                    onClearCart();
                    onClose();
                  }}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-xl text-xs cursor-pointer"
                >
                  {isEn ? 'Close & Continue Browsing' : 'إغلاق السلة ومتابعة التصفح'}
                </button>
              </div>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="text-center py-16 text-slate-400 space-y-3">
              <ShoppingBag className="w-12 h-12 mx-auto stroke-1 text-slate-300" />
              <p className="text-sm font-bold">{t('cart.empty.title', 'السلة فارغة حالياً')}</p>
              <p className="text-xs text-slate-400">
                {t('cart.empty.subtitle', 'تصفح البرامج والدورات واختر الباقة المناسبة لطفلك')}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 relative"
                >
                  <div className="flex items-start justify-between gap-2">
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-slate-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
                      title={isEn ? 'Remove item' : 'حذف من السلة'}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="space-y-0.5">
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                        {item.productName}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {item.selectedOption.durationLabel}
                      </p>
                      <div className="text-[11px] text-[#9E1C58] font-bold">
                        {isEn ? `Child: ${item.studentName} (${item.studentAge} yrs)` : `الطفل: ${item.studentName} (${item.studentAge} سنوات)`}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-500">{isEn ? `Qty: ${item.quantity}` : `الكمية: ${item.quantity}`}</span>
                    <span className="font-black text-slate-900">
                      {item.selectedOption.price * item.quantity} {currencyLabel}
                    </span>
                  </div>
                </div>
              ))}

              {/* Coupon Form */}
              <div className="pt-3 border-t border-slate-200">
                {activeCoupon ? (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-emerald-600" />
                      <div>
                        <span className="font-bold text-emerald-900">{activeCoupon.name}</span>
                        <span className="text-[10px] text-emerald-600 block">
                          {isEn
                            ? `Applied: ${activeCoupon.discountType === 'percentage' ? `${activeCoupon.value}% OFF` : `${activeCoupon.value} SAR OFF`}`
                            : `تم تطبيق خصم ${activeCoupon.discountType === 'percentage' ? `${activeCoupon.value}%` : `${activeCoupon.value} ر.س`}`}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => onApplyCoupon(null)}
                      className="text-red-500 text-[11px] hover:underline cursor-pointer"
                    >
                      {isEn ? 'Remove' : 'إلغاء الكود'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="space-y-1.5">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={couponCodeInput}
                        onChange={(e) => setCouponCodeInput(e.target.value)}
                        placeholder={isEn ? 'Discount code (e.g. KRISTINA10)' : 'أدخل كود الخصم (مثال: KRISTINA10)'}
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#9E1C58]"
                      />
                      <button
                        type="submit"
                        className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-2 rounded-xl text-xs font-bold shrink-0 cursor-pointer"
                      >
                        {isEn ? 'Apply' : 'تطبيق'}
                      </button>
                    </div>
                    {couponError && (
                      <p className="text-[10px] text-red-500">{couponError}</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Footer Totals & Checkout */}
        {!orderConfirmed && cartItems.length > 0 && (
          <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>{isEn ? 'Subtotal:' : 'المجموع الفرعي:'}</span>
                <span>{subtotal} {currencyLabel}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>{isEn ? 'Applied Discount:' : 'الخصم المطبق:'}</span>
                  <span>- {discountAmount} {currencyLabel}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-500 text-[11px]">
                <span>{isEn ? 'Value Added Tax (15% VAT):' : 'ضريبة القيمة المضافة (15%):'}</span>
                <span>{vatAmount} {currencyLabel}</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between text-base font-black text-slate-900">
                <span>{isEn ? 'Grand Total:' : 'المبلغ الإجمالي النهائي:'}</span>
                <span className="text-[#9E1C58]">{total} {currencyLabel}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-[#9E1C58] hover:bg-[#B32265] text-white font-black py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isEn ? 'Checkout & Create Sales Order (Odoo SO)' : 'إتمام الحجز وإنشاء أمر البيع (Odoo SO)'}</span>
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
