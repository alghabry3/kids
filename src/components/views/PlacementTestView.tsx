import React, { useState } from 'react';
import { PlacementTestService } from '../../services/PlacementTestService';
import { IPlacementQuestion, IPlacementResult, ModuleView } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  ArrowLeft,
  ArrowRight, 
  RotateCcw, 
  CheckCircle, 
  Award, 
  ShoppingBag, 
  Volume2, 
  Star,
  Clock,
  User
} from 'lucide-react';

interface PlacementTestViewProps {
  onNavigate: (view: ModuleView) => void;
  onApplyCouponAndGoShop: (couponCode: string) => void;
}

export const PlacementTestView: React.FC<PlacementTestViewProps> = ({
  onNavigate,
  onApplyCouponAndGoShop,
}) => {
  const { t, language } = useLanguage();
  const isEn = language === 'en';

  const questions = PlacementTestService.getQuestions();
  const [currentStep, setCurrentStep] = useState<'intro' | 'test' | 'result'>('intro');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState<number>(6);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [testResult, setTestResult] = useState<IPlacementResult | null>(null);

  const activeQuestion = questions[currentQIndex];

  const handleStartTest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!childName.trim()) {
      alert(isEn ? 'Please enter the child name to start.' : 'فضلاً اكتب اسم طفلك أو طفلتك للبدء');
      return;
    }
    setCurrentStep('test');
    setCurrentQIndex(0);
    setAnswers({});
  };

  const handleSelectOption = (optionId: string) => {
    const updated = { ...answers, [activeQuestion.id]: optionId };
    setAnswers(updated);

    if (currentQIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQIndex(currentQIndex + 1);
      }, 300);
    } else {
      // Finished all questions!
      const result = PlacementTestService.evaluateTest(childName, childAge, updated);
      setTestResult(result);
      setCurrentStep('result');
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  const handleReset = () => {
    setCurrentStep('intro');
    setCurrentQIndex(0);
    setAnswers({});
    setTestResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Intro Step */}
      {currentStep === 'intro' && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm text-center space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-[#9E1C58]/10 text-[#9E1C58] flex items-center justify-center mx-auto shadow-xs">
            <Sparkles className="w-8 h-8 text-[#9E1C58]" />
          </div>

          <div className="max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">
              <span>{isEn ? 'Free 3-min assessment • Instant 10% coupon' : 'اختبار مجاني في 3 دقائق • خصم فوري 10%'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              {t('placement_title')}
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {t('placement_subtitle')}
            </p>
          </div>

          <form onSubmit={handleStartTest} className="max-w-md mx-auto space-y-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t('student_full_name')}: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                placeholder={isEn ? 'e.g. Saud Al-Khunaizi' : 'مثال: سعود الخنيزي'}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#9E1C58] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t('student_age')}:
              </label>
              <select
                value={childAge}
                onChange={(e) => setChildAge(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#9E1C58] focus:bg-white"
              >
                {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(age => (
                  <option key={age} value={age}>
                    {age} {isEn ? 'years old' : 'سنوات'}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#9E1C58] hover:bg-[#B32265] text-white font-black py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>{isEn ? 'Start Interactive Test Now' : 'بدء الاختبار التفاعلي الآن'}</span>
            </button>
          </form>
        </div>
      )}

      {/* Test Questions Step */}
      {currentStep === 'test' && activeQuestion && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          {/* Progress Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 text-xs">
            <span className="font-bold text-[#9E1C58]">
              {isEn ? `Question ${currentQIndex + 1} of ${questions.length}` : `السؤال ${currentQIndex + 1} من ${questions.length}`}
            </span>
            <span className="font-bold text-slate-500">
              {isEn ? 'Student:' : 'البطل:'} {childName}
            </span>
          </div>

          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#9E1C58] h-full transition-all duration-300"
              style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Prompt */}
          <div className="text-center py-4 space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {isEn ? (activeQuestion.questionPromptEn || activeQuestion.questionPrompt) : activeQuestion.questionPrompt}
            </h2>
            <p className="text-xs text-slate-400">
              {isEn ? 'Select the answer that your child thinks is most appropriate:' : 'اختر الإجابة الصحيحة التي يعتقد طفلك أنها الأنسب'}
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {activeQuestion.options.map(opt => {
              const isSelected = answers[activeQuestion.id] === opt.id;
              const optText = isEn ? (opt.textEn || opt.text) : opt.text;

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'border-[#9E1C58] bg-[#9E1C58]/10 shadow-xs'
                      : 'border-slate-200 hover:border-[#06B6D4] bg-slate-50 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {opt.imageEmoji && (
                      <span className="text-2xl">{opt.imageEmoji}</span>
                    )}
                    <span className="font-bold text-sm sm:text-base text-slate-800">
                      {optText}
                    </span>
                  </div>

                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    isSelected ? 'border-[#9E1C58] bg-[#9E1C58]' : 'border-slate-300'
                  }`}>
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation helpers */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <button
              onClick={() => {
                if (currentQIndex > 0) setCurrentQIndex(currentQIndex - 1);
              }}
              disabled={currentQIndex === 0}
              className="disabled:opacity-40 hover:text-slate-700 cursor-pointer"
            >
              {isEn ? 'Previous Question' : 'السؤال السابق'}
            </button>
            <span>{t('odoo_module_badge')}</span>
          </div>
        </div>
      )}

      {/* Result Step */}
      {currentStep === 'result' && testResult && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-emerald-300 shadow-lg text-center space-y-6 animate-in fade-in zoom-in-95">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
            <Award className="w-9 h-9" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
              {isEn 
                ? `Evaluation Completed • Score: ${testResult.score} of ${testResult.totalQuestions}`
                : `تم التقييم بنجاح • النتيجة: ${testResult.score} من ${testResult.totalQuestions}`}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {isEn ? `Well done, ${testResult.childName}! 🌟` : `أحسنت يا ${testResult.childName}! 🌟`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              {isEn ? (testResult.feedbackEn || testResult.feedbackAr) : testResult.feedbackAr}
            </p>
          </div>

          {/* Recommendation Box */}
          <div className="p-5 bg-pink-50/70 border border-pink-200 rounded-2xl max-w-lg mx-auto space-y-2">
            <span className="text-xs font-bold text-[#9E1C58] block">{isEn ? 'Recommended Program for Your Child:' : 'البرنامج الموصى به لطفلك:'}</span>
            <h3 className="font-extrabold text-base text-slate-900">
              {isEn ? (testResult.recommendedCourseNameEn || testResult.recommendedCourseName) : testResult.recommendedCourseName}
            </h3>
            <p className="text-xs text-slate-600">
              {isEn ? 'Suggested Level:' : 'المستوى المقترح:'} <strong>{isEn ? (testResult.recommendedLevelEn || testResult.recommendedLevel) : testResult.recommendedLevel}</strong>
            </p>
          </div>

          {/* Discount Voucher Box */}
          <div className="p-4 bg-linear-to-r from-amber-50 to-amber-100/60 border border-amber-300 rounded-2xl max-w-md mx-auto flex items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold text-amber-800 block">{isEn ? 'Your Instant Discount Coupon (10%):' : 'كوبون خصمك الفوري (10%):'}</span>
              <span className="font-mono text-base font-black text-slate-900 tracking-wider">
                {testResult.discountCode}
              </span>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(testResult.discountCode);
                alert(isEn ? 'Coupon code copied! You can use it in the shop cart now.' : 'تم نسخ كود الخصم! يمكنك استخدامه في سلة المتجر الآن.');
              }}
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-xl cursor-pointer shadow-xs"
            >
              {isEn ? 'Copy Code' : 'نسخ الكود'}
            </button>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onApplyCouponAndGoShop(testResult.discountCode)}
              className="w-full sm:w-auto bg-[#9E1C58] hover:bg-[#B32265] text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{isEn ? 'Book Recommended Course with Discount' : 'حجز الدورة الموصى بها مع الخصم'}</span>
            </button>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{isEn ? 'Test Another Child' : 'اختبار طفل آخر'}</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
