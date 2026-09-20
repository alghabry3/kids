import React, { useState } from 'react';
import { IFaqItem, FaqCategory, ModuleView } from '../../types';
import { FAQ_DATA } from '../../services/FaqService';
import { useLanguage } from '../../context/LanguageContext';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Sparkles, 
  MessageCircle, 
  Phone, 
  ArrowRight, 
  ArrowLeft,
  BookOpen, 
  Users, 
  CheckCircle2,
  Layers,
  X
} from 'lucide-react';

interface HomeFaqAccordionProps {
  onNavigate?: (view: ModuleView) => void;
}

export const HomeFaqAccordion: React.FC<HomeFaqAccordionProps> = ({ onNavigate }) => {
  const { language, isRTL, t } = useLanguage();
  const isEn = language === 'en';

  const [activeCategory, setActiveCategory] = useState<FaqCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'faq-enr-1': true, // Open the first item by default for inviting UX
    'faq-plc-1': true, // Open the placement test question by default
  });

  const categories: { key: FaqCategory; labelAr: string; labelEn: string; icon: React.ReactNode }[] = [
    { key: 'all', labelAr: 'جميع الأسئلة', labelEn: 'All Questions', icon: <Layers className="w-4 h-4" /> },
    { key: 'enrollment', labelAr: 'التسجيل والقبول', labelEn: 'Enrollment & Fees', icon: <CheckCircle2 className="w-4 h-4" /> },
    { key: 'classes', labelAr: 'هيكل الصفوف والبيئة', labelEn: 'Class Structure & Safety', icon: <Users className="w-4 h-4" /> },
    { key: 'placement', labelAr: 'تحديد المستوى والمناهج', labelEn: 'Placement & Curriculum', icon: <BookOpen className="w-4 h-4" /> },
  ];

  const toggleItem = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    FAQ_DATA.forEach(item => {
      allExpanded[item.id] = true;
    });
    setExpandedIds(allExpanded);
  };

  const collapseAll = () => {
    setExpandedIds({});
  };

  // Filter items by category & search query
  const filteredItems = FAQ_DATA.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;

    const q = searchQuery.toLowerCase().trim();
    const qText = (isEn ? item.questionEn : item.questionAr).toLowerCase();
    const aText = (isEn ? item.answerEn : item.answerAr).toLowerCase();
    const catText = (isEn ? item.categoryNameEn : item.categoryNameAr).toLowerCase();
    return qText.includes(q) || aText.includes(q) || catText.includes(q);
  });

  const handleActionClick = (item: IFaqItem) => {
    if (!item.actionType) return;
    if (item.actionType === 'placement' && onNavigate) {
      onNavigate('placement');
    } else if (item.actionType === 'shop' && onNavigate) {
      onNavigate('shop');
    } else if (item.actionType === 'schedule' && onNavigate) {
      onNavigate('schedule');
    } else if (item.actionType === 'whatsapp') {
      const text = isEn 
        ? `Hello Kristina Kidz Academy, I have an inquiry about: ${item.questionEn}` 
        : `مرحباً أكاديمية كريستينا كيدز، أود الاستفسار حول: ${item.questionAr}`;
      window.open(`https://wa.me/966568826618?text=${encodeURIComponent(text)}`, '_blank');
    }
  };

  return (
    <section id="faq-section" className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/70 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9E1C58]/10 text-[#9E1C58] text-xs font-black border border-[#9E1C58]/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isEn ? 'Parent Knowledge Base & Answers' : 'الأسئلة الأكثر شيوعاً وإجابات أولياء الأمور'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            {isEn ? (
              <>
                Got Questions? <span className="text-[#9E1C58]">We Have Answers</span>
              </>
            ) : (
              <>
                كل ما ترغب بمعرفته عن <span className="text-[#9E1C58]">أكاديمية كريستينا كيدز</span>
              </>
            )}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {isEn 
              ? 'Find answers to common questions about admissions, student-teacher ratios, daily schedules, Jolly Phonics curriculum, and our smart placement test at Sea Front Mall, Qatif.'
              : 'إجابات وافية وشاملة حول آلية التسجيل، أعداد الطلاب في الصف، مواعيد الدوام، مناهج الفونكس المعتمدة، واختبار تحديد المستوى في مجمع سي فرونت بكورنيش القطيف.'}
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="relative max-w-xl mx-auto mb-8">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute start-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isEn ? 'Search questions (e.g., ages, phonics, fees, test)...' : 'ابحث عن سؤالك (مثل: الأعمار، الفونكس، الرسوم، الاختبار)...'}
              className="w-full bg-white border border-slate-200 rounded-2xl py-3 ps-10 pe-10 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:outline-none focus:border-[#9E1C58] focus:ring-2 focus:ring-[#9E1C58]/10 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute end-3 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                title={isEn ? 'Clear search' : 'مسح البحث'}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Categories Bar & Expand/Collapse Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                >
                  {cat.icon}
                  <span>{isEn ? cat.labelEn : cat.labelAr}</span>
                </button>
              );
            })}
          </div>

          {/* Expand/Collapse All Buttons */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto text-xs font-bold text-slate-500">
            <button
              onClick={expandAll}
              className="hover:text-[#9E1C58] transition-colors cursor-pointer py-1 px-2 rounded-md hover:bg-white"
            >
              {isEn ? 'Expand All' : 'فتح الكل'}
            </button>
            <span>•</span>
            <button
              onClick={collapseAll}
              className="hover:text-[#9E1C58] transition-colors cursor-pointer py-1 px-2 rounded-md hover:bg-white"
            >
              {isEn ? 'Collapse All' : 'إغلاق الكل'}
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredItems.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center space-y-3 shadow-xs">
              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="text-base font-bold text-slate-800">
                {isEn ? 'No questions matched your search' : 'لم نجد سؤالاً يطابق بحثك'}
              </h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                {isEn 
                  ? 'Try searching with different keywords, or directly consult our academy coordinator on WhatsApp.'
                  : 'جرب البحث بكلمات أخرى أو تواصل مباشرة مع منسقة الأكاديمية عبر الواتساب للإجابة عن استفسارك.'}
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="inline-flex items-center gap-1.5 text-[#9E1C58] font-bold text-xs hover:underline cursor-pointer pt-2"
              >
                <span>{isEn ? 'Reset Search' : 'إعادة ضبط البحث'}</span>
              </button>
            </div>
          ) : (
            filteredItems.map((item) => {
              const isExpanded = !!expandedIds[item.id];
              const question = isEn ? item.questionEn : item.questionAr;
              const answer = isEn ? item.answerEn : item.answerAr;
              const categoryName = isEn ? item.categoryNameEn : item.categoryNameAr;
              const actionLabel = isEn ? item.actionLabelEn : item.actionLabelAr;

              return (
                <div
                  key={item.id}
                  id={item.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs ${
                    isExpanded
                      ? 'border-[#9E1C58]/40 ring-1 ring-[#9E1C58]/10'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Accordion Header / Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`answer-${item.id}`}
                    className="w-full text-start p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none select-none"
                  >
                    <div className="space-y-1.5 flex-1 pe-2">
                      <span className="inline-block text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                        {categoryName}
                      </span>
                      <h3 className={`text-sm sm:text-base font-extrabold transition-colors leading-snug ${
                        isExpanded ? 'text-[#9E1C58]' : 'text-slate-900'
                      }`}>
                        {question}
                      </h3>
                    </div>

                    {/* Chevron Indicator */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isExpanded
                        ? 'bg-[#9E1C58]/10 text-[#9E1C58] rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Body / Content */}
                  {isExpanded && (
                    <div
                      id={`answer-${item.id}`}
                      className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100 animate-in fade-in-50 duration-150"
                    >
                      <div className="pt-4 space-y-4">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {answer}
                        </p>

                        {/* Direct Contextual Action Button */}
                        {item.actionType && actionLabel && (
                          <div className="pt-1 flex items-center justify-start">
                            <button
                              type="button"
                              onClick={() => handleActionClick(item)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-pink-50 text-[#9E1C58] border border-pink-200/80 hover:bg-[#9E1C58] hover:text-white transition-all cursor-pointer shadow-2xs group"
                            >
                              {item.actionType === 'placement' && <Sparkles className="w-3.5 h-3.5 text-amber-500 group-hover:text-amber-300" />}
                              {item.actionType === 'whatsapp' && <MessageCircle className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />}
                              <span>{actionLabel}</span>
                              {isRTL ? (
                                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                              ) : (
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions? Help Card */}
        <div className="mt-12 bg-linear-to-r from-slate-900 to-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-md border border-slate-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-start">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{isEn ? 'Direct Academy Support' : 'فريق خدمة أولياء الأمور'}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black">
                {isEn ? 'Have a special inquiry or want to tour our Sea Front branch?' : 'لديك استفسار خاص أو ترغب بزيارة مقرنا بكورنيش القطيف؟'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                {isEn 
                  ? 'Our educational advisory team is available via WhatsApp or phone to guide you through your child’s enrollment steps and arrange an orientation visit.'
                  : 'منسقات الأكاديمية متاحات عبر الواتساب والمكالمات لمساعدتك في خطوات التسجيل والإجابة عن جميع استفسارات طفلك.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={isEn 
                  ? "https://wa.me/966568826618?text=Hello%20Kristina%20Kidz%2C%20I%20have%20an%20inquiry%20regarding%20enrollment" 
                  : "https://wa.me/966568826618?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9%20%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D9%8A%D9%86%D8%A7%20%D9%83%D9%8A%D8%AF%D8%B2%D8%8C%20%D9%84%D8%AF%D9%8A%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AA%D8%B3%D8%AC%D9%8A%D9%84"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-3 rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isEn ? 'Chat via WhatsApp' : 'محادثة فورية عبر واتساب'}</span>
              </a>

              <a
                href="tel:+966568826618"
                className="bg-slate-700/80 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs px-4 py-3 rounded-xl border border-slate-600 transition-all flex items-center gap-2 cursor-pointer"
                dir="ltr"
              >
                <Phone className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>+966 56 882 6618</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
