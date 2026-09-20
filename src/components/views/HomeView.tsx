import React from 'react';
import { ModuleView, IProduct } from '../../types';
import { KristinaMascot } from '../brand/KristinaMascot';
import { useLanguage } from '../../context/LanguageContext';
import { ParentTestimonials } from '../home/ParentTestimonials';
import { HomeFaqAccordion } from '../home/HomeFaqAccordion';
import { 
  Sparkles, 
  ArrowLeft,
  ArrowRight,
  BookOpen, 
  Smile, 
  CheckCircle2, 
  GraduationCap, 
  Clock, 
  Calendar, 
  ShoppingBag, 
  Award, 
  HeartHandshake, 
  MapPin, 
  Phone,
  MessageCircle,
  Star,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: ModuleView) => void;
  featuredProducts: IProduct[];
  onSelectProduct: (product: IProduct) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  featuredProducts,
  onSelectProduct,
}) => {
  const { t, language } = useLanguage();
  const isEn = language === 'en';
  const NextIcon = isEn ? ArrowRight : ArrowLeft;
  const ChevronIcon = isEn ? ChevronRight : ChevronLeft;

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F8] via-[#FAF9F6] to-white pt-10 sm:pt-16 pb-16 border-b border-pink-100/60">
        {/* Subtle decorative background circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#9E1C58]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-[#06B6D4]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 right-1/3 w-64 h-64 bg-[#F59E0B]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left/Main Column: Headings & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9E1C58]/10 text-[#9E1C58] text-xs sm:text-sm font-extrabold border border-[#9E1C58]/20">
                <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
                <span>{t('hero_badge')}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight sm:leading-snug">
                {isEn ? (
                  <>
                    Unlocking your <span className="text-[#9E1C58]">child's talent</span> & fostering <span className="text-[#06B6D4]">English fluency</span> with love
                  </>
                ) : (
                  <>
                    نكتشف <span className="text-[#9E1C58]">موهبة طفلك</span> ونبني طلاقته في <span className="text-[#06B6D4]">اللغة الإنجليزية</span> بحب وإبداع
                  </>
                )}
              </h1>

              {/* Sub-text */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
                {t('hero_subtitle')}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => onNavigate('placement')}
                  className="bg-linear-to-r from-[#9E1C58] to-[#B32265] hover:brightness-105 text-white font-black px-6 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 text-sm sm:text-base cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 text-amber-300" />
                  <span>{t('start_placement_test')}</span>
                </button>

                <button
                  onClick={() => onNavigate('shop')}
                  className="bg-white hover:bg-slate-50 text-slate-800 font-bold px-5 py-3.5 rounded-2xl border-2 border-slate-200 hover:border-[#9E1C58]/40 transition-all flex items-center gap-2 text-sm sm:text-base cursor-pointer shadow-xs"
                >
                  <ShoppingBag className="w-5 h-5 text-[#9E1C58]" />
                  <span>{t('explore_courses_cta')}</span>
                </button>

                <a
                  href="https://wa.me/966568826618?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D9%8A%D9%86%D8%A7%20%D9%83%D9%8A%D8%AF%D8%B2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold px-4 py-3.5 rounded-2xl border border-emerald-200 transition-all flex items-center gap-2 text-sm"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <span>{t('whatsapp_consultation')}</span>
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-200/80 max-w-xl">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#06B6D4] shrink-0" />
                  <span className="text-xs text-slate-700 font-bold">{isEn ? 'Safe & Certified' : 'بيئة آمنة ومعتمدة'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs text-slate-700 font-bold">{isEn ? 'Certified Educators' : 'معلمات متخصصات'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#9E1C58] shrink-0 fill-[#9E1C58]" />
                  <span className="text-xs text-slate-700 font-bold">{isEn ? '4.9/5 Parents Rating' : 'تقييم 4.9 من الأهالي'}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Mascot Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative bg-white/90 p-6 sm:p-8 rounded-3xl shadow-xl border border-pink-100 max-w-md w-full text-center">
                <div className="absolute -top-4 -right-4 bg-amber-400 text-slate-900 font-black text-xs px-3 py-1 rounded-full shadow-xs transform rotate-6">
                  {isEn ? 'Welcome to our world! 🎈' : 'مرحباً بك في عالمنا! 🎈'}
                </div>

                {/* The Mascot Emblem */}
                <div className="py-2 flex justify-center">
                  <KristinaMascot size={210} animate={true} />
                </div>

                <h3 className="text-xl font-extrabold text-[#9E1C58] mt-2">
                  {isEn ? 'Welcome to Kristina Kidz' : 'أهلاً بك في أكاديمية كريستينا كيدز'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {isEn 
                    ? 'Located at Sea Front Mall Qatif, crafting unforgettable educational memories for your child'
                    : 'نحن بجوارك في كورنيش القطيف – مجمع سي فرونت لنصنع مع طفلك أوقاتاً لا تُنسى'}
                </p>

                {/* Quick Info Strip */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-around text-center text-xs">
                  <div>
                    <span className="block font-black text-base text-[#9E1C58]">+500</span>
                    <span className="text-slate-500 font-medium">{isEn ? 'Bright Students' : 'طفل مبدع'}</span>
                  </div>
                  <div className="h-8 w-px bg-slate-200" />
                  <div>
                    <span className="block font-black text-base text-[#06B6D4]">100%</span>
                    <span className="text-slate-500 font-medium">{isEn ? 'Interactive' : 'تعليم تفاعلي'}</span>
                  </div>
                  <div className="h-8 w-px bg-slate-200" />
                  <div>
                    <span className="block font-black text-base text-amber-500">Odoo 19</span>
                    <span className="text-slate-500 font-medium">{isEn ? 'Digital Hub' : 'منصة رقمية'}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ODOO 19 INTEGRATED MODULES (website, website_sale, website_slides, website_event) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-2">
            <span>{isEn ? 'Seamless Odoo 19 Architecture' : 'منظومة متكاملة متوافقة مع أودو 19'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {t('integrated_modules_title')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {isEn 
              ? 'Our website synchronizes effortlessly with eCommerce, interactive eLearning, Events, and Attendance'
              : 'تم ربط الموقع الإلكتروني بسلاسة مع المتجر، والتعليم التفاعلي، والفعاليات، وسجلات الحضور'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: eCommerce / website_sale */}
          <div 
            onClick={() => onNavigate('shop')}
            className="group bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-[#9E1C58]/50 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#9E1C58]/10 text-[#9E1C58] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-[#9E1C58] tracking-wider uppercase">website_sale</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-[#9E1C58] transition-colors">
                {isEn ? 'Course & Bundles Shop' : 'متجر الدورات والاشتراكات'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                {isEn 
                  ? 'Hosting daycare, phonics, curriculum support, and flexible term bundles with instant coupons.' 
                  : 'باقات الضيافة، دورات الفونكس، دعم المناهج، وباقات الفصول مع خيارات الحجز والخصومات المباشرة.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#9E1C58]">
              <span>{isEn ? 'Explore Shop' : 'تصفح المتجر'}</span>
              <ChevronIcon className={`w-4 h-4 transition-transform ${isEn ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
            </div>
          </div>

          {/* Card 2: eLearning / website_slides */}
          <div 
            onClick={() => onNavigate('elearning')}
            className="group bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-[#06B6D4]/50 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#06B6D4]/10 text-[#06B6D4] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-[#06B6D4] tracking-wider uppercase">website_slides</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-[#06B6D4] transition-colors">
                {isEn ? 'Interactive eLearning' : 'التعليم الإلكتروني التفاعلي'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                {isEn 
                  ? 'Interactive lessons, phonics audio cards, quizzes, badges, and verified graduation certificates.'
                  : 'دروس تفاعلية، بطاقات صوتية لنطق الحروف، كويزات ممتعة، وأوسمة وشهادات إتمام للمستوى الأول.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#06B6D4]">
              <span>{isEn ? 'Open Learning Portal' : 'دخول المنصة التعليمية'}</span>
              <ChevronIcon className={`w-4 h-4 transition-transform ${isEn ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
            </div>
          </div>

          {/* Card 3: Events / website_event */}
          <div 
            onClick={() => onNavigate('events')}
            className="group bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-amber-400/50 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-amber-600 tracking-wider uppercase">website_event</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-amber-600 transition-colors">
                {isEn ? 'Events & Activities' : 'الفعاليات والأنشطة'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                {isEn 
                  ? 'Child talent festivals at Sea Front, commercial event booths booking, and workshop passes.'
                  : 'مهرجان مواهب الطفل في سي فرونت، حجز الأجنحة (Event Booths)، وتذاكر الورش والاحتفالات.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600">
              <span>{isEn ? 'View Events' : 'استعراض الفعاليات'}</span>
              <ChevronIcon className={`w-4 h-4 transition-transform ${isEn ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
            </div>
          </div>

          {/* Card 4: Attendance / hr_attendance */}
          <div 
            onClick={() => onNavigate('schedule')}
            className="group bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-emerald-400/50 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-emerald-600 tracking-wider uppercase">hr_attendance</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-emerald-600 transition-colors">
                {isEn ? 'Attendance & Schedule' : 'جداول الحضور والانصراف'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                {isEn 
                  ? 'Real-time monitoring of morning and evening slots, room allocations, and student check-ins.'
                  : 'متابعة الحصص، أوقات الفترات الصباحية والمسائية، وحالة حضور وانصراف الأبناء في الوقت الفعلي.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
              <span>{isEn ? 'View Schedules' : 'عرض الجداول'}</span>
              <ChevronIcon className={`w-4 h-4 transition-transform ${isEn ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PILLARS */}
      <section className="bg-slate-50/80 py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#9E1C58] tracking-wide">{isEn ? 'Our Educational Vision' : 'رؤيتنا التعليمية'}</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              {isEn ? 'Four Pillars Powering Kristina Kidz Academy' : 'أربعة أركان أساسية ترتكز عليها أكاديمية كريستينا كيدز'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-pink-100 text-[#9E1C58] flex items-center justify-center mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {isEn ? 'Early Talent Discovery' : 'اكتشاف موهبة الطفل المبكرة'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isEn 
                  ? 'Identifying genuine passions in languages, drama, arts, and leadership through structured activities.'
                  : 'نلاحظ شغف طفلك في الرسم، الخطابة، القيادة، واللغات من خلال أنشطة مراقبة علمية وتوجيهه لتنميتها.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-cyan-100 text-[#06B6D4] flex items-center justify-center mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {isEn ? 'Joyful & Playful Learning' : 'التعليم باللعب والمرح'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isEn 
                  ? 'No dry memorization; children learn English fluently through lively songs, movement, and theatre.'
                  : 'لا نعتمد أساليب التلقين الجافة؛ يتعلم طفلك الإنجليزية عبر الأناشيد، الحركة، التمثيل، والألعاب التفاعلية.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {isEn ? 'Safe Nurturing Hosting' : 'بيئة آمنة دافئة (الضيافة)'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isEn 
                  ? 'Daycare hosting for toddlers aged 2-5 giving parents complete peace of mind during working hours.'
                  : 'رعاية نهارية للأطفال من عمر 2 إلى 5 سنوات تمنح الأمهات والآباء راحة البال التامة طوال ساعات العمل.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80">
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4 font-bold text-lg">
                4
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {isEn ? 'Curriculum Academic Support' : 'دعم المناهج المدرسية'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isEn 
                  ? 'Specialized reinforcement for international, private, and government school students to excel.'
                  : 'إسناد دراسي متخصص لطلاب المدارس العالمية والأهلية والحكومية للتفوق في الواجبات والاختبارات.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED COURSES & SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-extrabold text-[#9E1C58]">{isEn ? 'Featured Programs' : 'البرامج الأكثر طلباً'}</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              {isEn ? 'Select the Ideal Program for Your Child' : 'اختر البرنامج الأنسب لعمر واحتياج طفلك'}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="text-[#9E1C58] hover:text-[#B32265] font-bold text-sm flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
          >
            <span>{isEn ? 'View all courses & rates in Shop' : 'عرض كافة البرامج والأسعار في المتجر'}</span>
            <NextIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.slice(0, 3).map((product) => {
            const minPrice = Math.min(...product.pricingOptions.map(p => p.price));
            const prodName = isEn ? (product.nameEn || product.nameAr) : product.nameAr;
            const prodShortDesc = isEn ? (product.shortDescEn || product.shortDesc) : product.shortDesc;
            const prodAge = isEn ? (product.ageRangeEn || product.ageRange) : product.ageRange;
            const prodTiming = isEn ? (product.timingEn || product.timing) : product.timing;
            const prodFeatures = isEn && product.featuresEn ? product.featuresEn : product.features;

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Image banner */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={prodName}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-bold text-slate-800 shadow-xs">
                      {prodAge}
                    </div>
                    <div className="absolute bottom-3 right-3 left-3 bg-slate-900/70 backdrop-blur-xs px-3 py-1 rounded-lg text-[11px] text-white flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-300" />
                      <span>{prodTiming}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-extrabold text-lg text-slate-900">
                      {prodName}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {prodShortDesc}
                    </p>

                    {/* Features pill list */}
                    <div className="space-y-1.5 pt-2">
                      {prodFeatures.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with price and booking CTA */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">{t('starts_from')}</span>
                      <span className="text-lg font-black text-[#9E1C58]">{minPrice} <span className="text-xs font-bold">{t('sar')}</span></span>
                    </div>
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="bg-[#9E1C58] hover:bg-[#B32265] text-white text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer shadow-xs"
                    >
                      {t('details_and_enroll')}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. PARENT TESTIMONIALS & SUCCESS STORIES */}
      <ParentTestimonials onNavigate={onNavigate} />

      {/* 6. PLACEMENT TEST PROMO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-r from-[#9E1C58] via-[#801646] to-[#54082B] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full text-xs font-bold border border-amber-400/30">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{isEn ? 'Smart & Interactive Child Assessment' : 'اختبار ذكي وتفاعلي مخصص للأطفال'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
                {isEn 
                  ? "Want to discover your child's English proficiency & hidden talents?"
                  : 'هل ترغب بمعرفة مستوى طفلك في اللغة الإنجليزية واكتشاف مواهبه؟'}
              </h2>
              <p className="text-pink-100 text-sm sm:text-base leading-relaxed max-w-xl">
                {isEn 
                  ? 'In just 3 fun, stress-free minutes, discover your child’s level and receive an instant 10% discount coupon (Code: KIDZ-LEVEL10) towards enrollment!'
                  : 'في 3 دقائق فقط وبأسلوب ممتع مصور بدون ضغط، يتعرف طفلك على مستواه ويحصل على كوبون خصم مباشر 10% (كود: KIDZ-LEVEL10) عند التسجيل!'}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('placement')}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-6 py-3.5 rounded-2xl text-sm sm:text-base shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-slate-900" />
                  <span>{isEn ? 'Start Free Assessment Now' : 'بدء الاختبار التفاعلي المجاني الآن'}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center max-w-xs w-full">
                <span className="text-4xl">🏆</span>
                <h4 className="font-black text-lg text-white mt-2">
                  {isEn ? 'Instant Report & Recommendation' : 'تقييم معتمد وتوصية فورية'}
                </h4>
                <p className="text-xs text-pink-100 mt-1">
                  {isEn 
                    ? 'Accurate placement recommendation matching your child’s learning style.'
                    : 'تحديد دقيق للمستوى والصف والبرنامج المناسب لطفلك فور الانتهاء.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
      <HomeFaqAccordion onNavigate={onNavigate} />

      {/* 8. LOCATION & CONTACT HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-extrabold text-[#9E1C58]">{isEn ? 'Our Qatif Campus' : 'موقعنا في القطيف'}</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {isEn ? 'Welcome to Sea Front Mall Campus' : 'أهلاً وسهلاً بكم في مقرنا بمجمع سي فرونت'}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {isEn 
                  ? 'We are delighted to welcome you and your children to our modern facility equipped with smart language labs, sensory Montessori rooms, and dedicated children’s theatre.'
                  : 'يسعدنا استقبالكم واستقبال أطفالكم في بيئتنا التعليمية المجهزة بأحدث الوسائل التفاعلية والقاعات الذكية وركن المنتسوري المبهج.'}
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#9E1C58] shrink-0 mt-0.5" />
                  <span>{isEn ? 'Qatif – Sea Front Mall Complex, Qatif Corniche, SA-0 32641' : 'القطيف – مجمع سي فرونت (Sea Front Mall)، كورنيش القطيف، SA-0 32641'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#06B6D4] shrink-0" />
                  <span>{isEn ? 'Saturday – Thursday: 7:00 AM – 8:00 PM' : 'السبت إلى الخميس: من 7:00 صباحاً وحتى 8:00 مساءً'}</span>
                </div>
                <div className="flex items-center gap-3" dir="ltr">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>+966 56 882 6618 / +966 56 595 8548</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://www.google.com/maps/place/%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9+%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D9%8A%D9%86%D8%A7+%D9%83%D9%8A%D8%AF%D8%B2%E2%80%AD/@26.5854188,50.0201666,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>{isEn ? 'Open in Google Maps' : 'فتح الموقع في خرائط جوجل'}</span>
                </a>
              </div>
            </div>

            {/* Visual Location Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-72 lg:h-84">
              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800&auto=format&fit=crop"
                alt="Kristina Kidz Sea Front Qatif"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs text-amber-400 font-bold block">{isEn ? 'Prime Location on Qatif Corniche' : 'موقع استراتيجي على كورنيش القطيف'}</span>
                  <h4 className="text-lg font-black">{isEn ? 'Sea Front Mall – Kristina Kidz Academy' : 'مجمع سي فرونت – أكاديمية كريستينا كيدز'}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
