import React, { useState, useRef, useEffect } from 'react';
import { IParentTestimonial, ModuleView } from '../../types';
import { TestimonialService, PARENT_TESTIMONIALS_DATA } from '../../services/TestimonialService';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Heart, 
  MessageCircle, 
  Send,
  X,
  Award
} from 'lucide-react';

interface ParentTestimonialsProps {
  onNavigate?: (view: ModuleView) => void;
}

export const ParentTestimonials: React.FC<ParentTestimonialsProps> = ({ onNavigate }) => {
  const { language, isRTL, t } = useLanguage();
  const isEn = language === 'en';

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [submittedFeedback, setSubmittedFeedback] = useState<boolean>(false);

  // Form states for new testimonial submission
  const [parentNameInput, setParentNameInput] = useState('');
  const [childNameInput, setChildNameInput] = useState('');
  const [programInput, setProgramInput] = useState('phonics');
  const [ratingInput, setRatingInput] = useState(5);
  const [storyInput, setStoryInput] = useState('');

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = selectedCategory === 'all' 
    ? PARENT_TESTIMONIALS_DATA 
    : PARENT_TESTIMONIALS_DATA.filter(t => t.programKey === selectedCategory);

  const categories = [
    { key: 'all', labelAr: 'جميع التجارب', labelEn: 'All Stories' },
    { key: 'phonics', labelAr: 'تأسيس الفونكس (Jolly Phonics)', labelEn: 'Phonics Foundation' },
    { key: 'daycare', labelAr: 'الضيافة والرعاية النهارية', labelEn: 'Daycare & Hospitality' },
    { key: 'school_support', labelAr: 'دعم المناهج العالمية', labelEn: 'Int’l School Support' },
    { key: 'speaking', labelAr: 'مسرح الطفل ونادي المحادثة', labelEn: 'Child Theatre & Speaking' },
  ];

  // Update active dot based on scroll position
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const cardWidth = 360;
    const index = Math.round(Math.abs(scrollLeft) / cardWidth);
    setActiveCardIndex(Math.min(index, testimonials.length - 1));
  };

  const scrollTo = (direction: 'prev' | 'next') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = 380;
    // In RTL, positive scrollLeft might be inverse or standard depending on browser.
    // Using scrollBy relative to current visible cards:
    const multiplier = direction === 'next' ? 1 : -1;
    const delta = (isRTL ? -multiplier : multiplier) * cardWidth;
    container.scrollBy({ left: delta, behavior: 'smooth' });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 380;
    const targetLeft = (isRTL ? -index : index) * cardWidth;
    scrollContainerRef.current.scrollTo({ left: targetLeft, behavior: 'smooth' });
    setActiveCardIndex(index);
  };

  const handleSubmitNewStory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentNameInput.trim() || !storyInput.trim()) return;

    // Simulate instant success
    setSubmittedFeedback(true);
    setTimeout(() => {
      setShowSubmitModal(false);
      setSubmittedFeedback(false);
      setParentNameInput('');
      setChildNameInput('');
      setStoryInput('');
    }, 2500);
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-linear-to-b from-white via-pink-50/20 to-white">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#9E1C58]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-72 h-72 bg-[#06B6D4]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9E1C58]/10 text-[#9E1C58] text-xs font-black border border-[#9E1C58]/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{isEn ? 'Voices of Kristina Kidz Families' : 'تجارب وقصص نجاح أولياء الأمور'}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              {isEn ? (
                <>
                  Inspiring Transformations & <span className="text-[#9E1C58]">Parent Success Stories</span>
                </>
              ) : (
                <>
                  قصص نجاح ملهمة وآراء <span className="text-[#9E1C58]">أولياء أمور أبطالنا</span> بالقطيف
                </>
              )}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isEn 
                ? 'Discover firsthand how our holistic Phonics approach, safe daycare, and caring educators empowered children at Sea Front Complex, Qatif.'
                : 'تعرف على التغيير الحقيقي والطلاقة التي اكتسبها أبناؤنا من خلال بيئة تعليمية آمنة ومبهجة ومناهج تفاعلية في مجمع سي فرونت بكورنيش القطيف.'}
            </p>
          </div>

          {/* Social Proof High-Trust Summary Box */}
          <div className="flex flex-wrap items-center gap-4 bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-slate-200 shadow-xs self-start md:self-auto">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center font-black">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-black text-slate-900 text-base">4.98</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">
                  {isEn ? 'Based on 186+ reviews' : 'من أكثر من 186 تقييماً موثقاً'}
                </span>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-200 hidden sm:block" />

            <button
              onClick={() => setShowSubmitModal(true)}
              className="bg-[#9E1C58] hover:bg-[#B32265] text-white font-bold text-xs px-3.5 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 text-pink-200 fill-pink-200" />
              <span>{isEn ? 'Share Your Story' : 'شارك تجربتك معنا'}</span>
            </button>
          </div>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex items-center justify-between gap-4 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2">
            {categories.map(cat => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    setSelectedCategory(cat.key);
                    setActiveCardIndex(0);
                    if (scrollContainerRef.current) {
                      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                >
                  {isEn ? cat.labelEn : cat.labelAr}
                </button>
              );
            })}
          </div>

          {/* Desktop Scroll Controls */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollTo('prev')}
              className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center transition-all shadow-xs cursor-pointer hover:border-[#9E1C58]"
              title={isEn ? 'Previous' : 'السابق'}
            >
              {isRTL ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
            <button
              onClick={() => scrollTo('next')}
              className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center transition-all shadow-xs cursor-pointer hover:border-[#9E1C58]"
              title={isEn ? 'Next' : 'التالي'}
            >
              {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Scrollable Testimonials Carousel */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory py-2 px-1 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item) => {
            const headline = isEn ? item.headlineEn : item.headlineAr;
            const feedback = isEn ? item.feedbackEn : item.feedbackAr;
            const result = isEn ? item.resultEn : item.resultAr;
            const parentName = isEn ? item.parentNameEn : item.parentName;
            const parentRole = isEn ? item.parentRoleEn : item.parentRole;
            const childName = isEn ? item.childNameEn : item.childName;
            const programName = isEn ? item.programNameEn : item.programName;
            const dateText = isEn ? item.dateEn : item.date;

            return (
              <div
                key={item.id}
                className="w-[85vw] sm:w-[400px] lg:w-[420px] shrink-0 snap-start bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group"
              >
                {/* Top Strip: Rating, Source Badge & Date */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-[11px] font-bold">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>
                        {item.verifiedSource === 'odoo_portal' 
                          ? (isEn ? 'Odoo Verified' : 'توثيق Odoo Portal')
                          : (isEn ? 'Google 5.0 ⭐' : 'تقييم خرائط جوجل')}
                      </span>
                    </div>
                  </div>

                  {/* Headline */}
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug group-hover:text-[#9E1C58] transition-colors">
                    "{headline}"
                  </h3>

                  {/* Quote Body */}
                  <div className="relative pt-1">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed relative z-10 line-clamp-4">
                      {feedback}
                    </p>
                  </div>

                  {/* Success Result Highlight Badge */}
                  <div className="mt-3 p-3 rounded-2xl bg-pink-50/70 border border-pink-100 flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#9E1C58] text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                      ✓
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-[#9E1C58] uppercase block">
                        {isEn ? 'Key Achievement / Result:' : 'النتيجة والإنجاز المحقق:'}
                      </span>
                      <p className="text-xs font-bold text-slate-800 leading-snug">
                        {result}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Parent & Child Info Strip */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-black flex items-center justify-center text-xs shadow-xs shrink-0`}>
                      {item.avatarInitials}
                    </div>
                    <div>
                      <div className="font-extrabold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5">
                        <span>{parentName}</span>
                        <span className="text-[11px] font-medium text-slate-400">({parentRole})</span>
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">
                        {isEn ? `Child: ${childName} (${item.childAge} yrs)` : `الطفل: ${childName} (${item.childAge} سنوات)`}
                      </div>
                      <div className="text-[10px] font-bold text-[#9E1C58]">
                        {programName}
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-medium text-slate-400 shrink-0">
                    {dateText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots & Mobile Controls */}
        <div className="flex items-center justify-between mt-6 pt-2">
          {/* Active indicator dots */}
          <div className="flex items-center gap-1.5 mx-auto sm:mx-0">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`h-2 transition-all rounded-full cursor-pointer ${
                  activeCardIndex === idx 
                    ? 'w-6 bg-[#9E1C58]' 
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                title={`Story ${idx + 1}`}
              />
            ))}
          </div>

          {/* Quick CTA to placement test */}
          {onNavigate && (
            <div className="hidden md:flex items-center gap-3">
              <span className="text-xs text-slate-500 font-medium">
                {isEn ? 'Ready to begin your child’s story?' : 'مستعد لبدء قصة نجاح طفلك معنا؟'}
              </span>
              <button
                onClick={() => onNavigate('placement')}
                className="text-[#9E1C58] hover:text-[#B32265] font-bold text-xs flex items-center gap-1 cursor-pointer underline underline-offset-4"
              >
                <span>{isEn ? 'Start Assessment (10% OFF)' : 'ابدأ اختبار تحديد المستوى (خصم 10%)'}</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              </button>
            </div>
          )}
        </div>

      </div>

      {/* MODAL: SUBMIT PARENT FEEDBACK / STORY */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
            
            <button
              onClick={() => setShowSubmitModal(false)}
              className="absolute top-5 left-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedFeedback ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  {isEn ? 'Thank you for sharing your journey!' : 'شكراً جزيلاً لمشاركتنا تجربتك!'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                  {isEn
                    ? 'Your feedback inspires our educational team and helps other families in Qatif choose the right path for their children.'
                    : 'رأيك يمنح فريقنا التربوي طاقة كبيرة ويساعد أولياء الأمور الآخرين في القطيف على اختيار المسار التعليمي الأنسب لأبنائهم.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitNewStory} className="space-y-4">
                <div className="text-start space-y-1">
                  <span className="text-xs font-bold text-[#9E1C58]">
                    {isEn ? 'Community Feedback' : 'مجتمع أكاديمية كريستينا كيدز'}
                  </span>
                  <h3 className="text-xl font-black text-slate-900">
                    {isEn ? 'Share Your Child’s Success Story' : 'شاركنا قصة نجاح طفلك وتجربتك معنا'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {isEn 
                      ? 'Help other Qatif parents discover how your child grew with us at Sea Front Mall.'
                      : 'ساعد أولياء الأمور في القطيف على معرفة أثر التجربة وتطور مهارات طفلك في الأكاديمية.'}
                  </p>
                </div>

                {/* Rating selection */}
                <div className="space-y-1 text-start">
                  <label className="text-xs font-bold text-slate-700 block">
                    {isEn ? 'Your Overall Rating:' : 'تقييمك العام للتجربة:'}
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRatingInput(star)}
                        className="text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Star 
                          className={`w-6 h-6 ${star <= ratingInput ? 'fill-amber-400' : 'stroke-slate-300'}`} 
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-slate-600 mr-2">
                      ({ratingInput} / 5)
                    </span>
                  </div>
                </div>

                {/* Parent & Child Names */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-start">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {isEn ? 'Parent Name:' : 'اسم ولي الأمر:'}
                    </label>
                    <input
                      type="text"
                      required
                      value={parentNameInput}
                      onChange={(e) => setParentNameInput(e.target.value)}
                      placeholder={isEn ? 'e.g. Um Rakan Al-Mohsen' : 'مثال: أم راكان المحسن'}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#9E1C58]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {isEn ? 'Child Name & Age:' : 'اسم الطفل وعمره:'}
                    </label>
                    <input
                      type="text"
                      value={childNameInput}
                      onChange={(e) => setChildNameInput(e.target.value)}
                      placeholder={isEn ? 'e.g. Rakan (6 years)' : 'مثال: راكان (6 سنوات)'}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#9E1C58]"
                    />
                  </div>
                </div>

                {/* Program Track */}
                <div className="text-start">
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    {isEn ? 'Enrolled Program Track:' : 'المسار التعليمي المسجل به:'}
                  </label>
                  <select
                    value={programInput}
                    onChange={(e) => setProgramInput(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#9E1C58]"
                  >
                    <option value="phonics">{isEn ? 'English Phonics Foundation (Jolly Phonics)' : 'تأسيس اللغة الإنجليزية وأصوات الفونكس'}</option>
                    <option value="daycare">{isEn ? 'Early Daycare & Hosting (2-5 yrs)' : 'الضيافة والرعاية النهارية المبكرة'}</option>
                    <option value="school_support">{isEn ? 'International School Support' : 'دعم وتقوية المناهج المدرسية'}</option>
                    <option value="speaking">{isEn ? 'Kids Theatre & Speaking Club' : 'مسرح الطفل ونادي المحادثة والطلاقة'}</option>
                  </select>
                </div>

                {/* Feedback text */}
                <div className="text-start">
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    {isEn ? 'Your Feedback & Success Story:' : 'قصتك وملاحظاتك حول تطور طفلك:'}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={storyInput}
                    onChange={(e) => setStoryInput(e.target.value)}
                    placeholder={isEn 
                      ? 'Tell us what you loved about our educators, facility at Sea Front, or changes in your child’s fluency and confidence...'
                      : 'أخبرنا عن تجربتك، ما الذي أعجبك في المعلمات، مرافق مجمع سي فرونت، والتطور الملحوظ في ثقة ونطق طفلك...'}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-[#9E1C58]"
                  />
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 cursor-pointer"
                  >
                    {isEn ? 'Cancel' : 'إلغاء'}
                  </button>

                  <button
                    type="submit"
                    className="bg-[#9E1C58] hover:bg-[#B32265] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Publish Review' : 'إرسال التقييم'}</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
