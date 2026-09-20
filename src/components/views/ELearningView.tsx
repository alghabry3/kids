import React, { useState } from 'react';
import { ICourse, ILesson, IQuizQuestion } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import confetti from 'canvas-confetti';
import { 
  GraduationCap, 
  PlayCircle, 
  FileText, 
  HelpCircle, 
  CheckCircle, 
  Award, 
  ChevronRight, 
  Volume2, 
  Sparkles, 
  Download, 
  RotateCcw,
  Star,
  Check
} from 'lucide-react';

interface ELearningViewProps {
  course: ICourse;
}

export const ELearningView: React.FC<ELearningViewProps> = ({ course }) => {
  const { t, language } = useLanguage();
  const isEn = language === 'en';

  const allLessons = course.levels[0]?.lessons || [];
  const [activeLessonId, setActiveLessonId] = useState<string>(allLessons[0]?.id || '');
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(['les-01']);
  
  // Interactive Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [childStudentName, setChildStudentName] = useState(isEn ? 'Champion Ryan' : 'ريان البطل');
  const [showCertificate, setShowCertificate] = useState(false);

  // Audio simulation state for phonics
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);

  const activeLesson = allLessons.find(l => l.id === activeLessonId) || allLessons[0];

  // Speech synthesis for kids
  const speakText = (text: string) => {
    setSpeakingWord(text);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85; // slightly slower for kids
      utterance.onend = () => setSpeakingWord(null);
      utterance.onerror = () => setSpeakingWord(null);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setSpeakingWord(null), 1000);
    }
  };

  const handleSelectLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    setQuizSubmitted(false);
    setShowCertificate(false);
  };

  const handleMarkComplete = (lessonId: string) => {
    if (!completedLessonIds.includes(lessonId)) {
      setCompletedLessonIds([...completedLessonIds, lessonId]);
    }
  };

  const handleQuizAnswer = (questionId: string, optionId: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const calculateQuizScore = () => {
    if (!activeLesson?.quiz) return 0;
    let correct = 0;
    activeLesson.quiz.forEach(q => {
      const selected = quizAnswers[q.id];
      const opt = q.options.find(o => o.id === selected);
      if (opt?.isCorrect) correct++;
    });
    return correct;
  };

  const handleFinishQuiz = () => {
    setQuizSubmitted(true);
    handleMarkComplete(activeLesson.id);
    const score = calculateQuizScore();
    if (score >= 4) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setShowCertificate(true);
    }
  };

  const courseTitle = isEn ? (course.titleEn || course.titleAr) : course.titleAr;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Odoo 19 website_slides Meta Bar */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#714B67]/10 text-[#714B67] px-3 py-1 rounded-full text-xs font-bold mb-2">
              <span>{t('odoo_module_badge')} • website_slides</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              {courseTitle}
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              {isEn 
                ? 'Interactive digital curriculum building English foundation for children through phonics, audio flashcards, and fun quizzes.'
                : 'المنهج الرقمي التفاعلي لبناء مهارات اللغة الإنجليزية للأطفال من خلال الحروف والأصوات والمفردات'}
            </p>
          </div>

          {/* Odoo Stats Badges */}
          <div className="flex items-center gap-3 text-xs">
            <div className="bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-2xl text-center">
              <span className="text-[10px] text-slate-400 block font-bold">{isEn ? 'Rating' : 'التقييم'}</span>
              <span className="font-extrabold text-[#9E1C58] flex items-center gap-1 justify-center">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>5.0 / 5</span>
              </span>
            </div>
            <div className="bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-2xl text-center">
              <span className="text-[10px] text-slate-400 block font-bold">{isEn ? 'Lessons' : 'الدروس المنشورة'}</span>
              <span className="font-extrabold text-slate-800">{allLessons.length} {isEn ? 'lessons' : 'درساً'}</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-2xl text-center">
              <span className="text-[10px] text-slate-400 block font-bold">{isEn ? 'Level' : 'المستوى'}</span>
              <span className="font-extrabold text-[#06B6D4]">{isEn ? 'Level 1' : 'المستوى 1'}</span>
            </div>
          </div>
        </div>

        {/* Course Progress Bar */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-4">
          <div className="text-xs font-bold text-slate-700 whitespace-nowrap">
            {isEn ? 'Child Progress:' : 'تقدم الطفل:'} {Math.round((completedLessonIds.length / allLessons.length) * 100)}%
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-linear-to-r from-[#9E1C58] to-[#06B6D4] h-full transition-all duration-500 rounded-full"
              style={{ width: `${(completedLessonIds.length / allLessons.length) * 100}%` }}
            />
          </div>
          <span className="text-xs font-bold text-slate-500 whitespace-nowrap">
            {completedLessonIds.length} {isEn ? `of ${allLessons.length} lessons` : `من ${allLessons.length} دروس`}
          </span>
        </div>
      </div>

      {/* Main Learning Classroom Layout: Sidebar Lessons + Stage Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Lessons List Sidebar */}
        <div className="lg:col-span-4 order-2 lg:order-1 space-y-4">
          <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs">
            <h3 className="font-black text-slate-900 text-sm mb-3 pb-2 border-b border-slate-100 flex items-center justify-between">
              <span>{isEn ? 'Level 1 Lessons Syllabus' : 'قائمة دروس المستوى الأول (Level 1)'}</span>
              <span className="text-[11px] text-slate-400 font-normal">{allLessons.length} {isEn ? 'units' : 'أقسام'}</span>
            </h3>

            <div className="space-y-1.5">
              {allLessons.map(lesson => {
                const isActive = lesson.id === activeLessonId;
                const isCompleted = completedLessonIds.includes(lesson.id);
                const lTitle = isEn ? (lesson.titleEn || lesson.titleAr) : lesson.titleAr;

                return (
                  <button
                    key={lesson.id}
                    onClick={() => handleSelectLesson(lesson.id)}
                    className={`w-full p-3 rounded-2xl transition-all flex items-center justify-between gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-[#9E1C58] text-white shadow-xs font-bold'
                        : isCompleted
                        ? 'bg-emerald-50/70 text-slate-800 hover:bg-emerald-50 border border-emerald-100'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                        isActive 
                          ? 'bg-white text-[#9E1C58]' 
                          : isCompleted 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {isCompleted ? <Check className="w-3.5 h-3.5" /> : lesson.number}
                      </span>
                      <span className="text-xs truncate">{lTitle}</span>
                    </div>

                    <div className="shrink-0 flex items-center gap-1.5 text-[10px]">
                      {lesson.type === 'video' && <PlayCircle className="w-3.5 h-3.5 opacity-80" />}
                      {lesson.type === 'quiz' && <HelpCircle className="w-3.5 h-3.5 opacity-80" />}
                      {lesson.type === 'interactive' && <Volume2 className="w-3.5 h-3.5 opacity-80" />}
                      <span className="opacity-80">{lesson.durationMinutes} {isEn ? 'm' : 'د'}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Left/Main Stage: Lesson Player & Interactive Activities */}
        <div className="lg:col-span-8 order-1 lg:order-2 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            
            {/* Active Lesson Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-[#9E1C58]">
                  {isEn ? `Lesson #${activeLesson.number}` : `الدرس رقم ${activeLesson.number}`} • {activeLesson.titleEn}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  {isEn ? (activeLesson.titleEn || activeLesson.titleAr) : activeLesson.titleAr}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleMarkComplete(activeLesson.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                    completedLessonIds.includes(activeLesson.id)
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>{completedLessonIds.includes(activeLesson.id) ? (isEn ? 'Completed' : 'مكتمل') : (isEn ? 'Mark Complete' : 'تحديد كمكتمل')}</span>
                </button>
              </div>
            </div>

            {/* Lesson Body Content depending on Type */}
            <div className="py-6 space-y-6">
              
              {/* Summary */}
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 text-amber-900 text-xs sm:text-sm">
                <strong>{isEn ? 'Lesson Objective:' : 'الهدف من هذا الدرس:'}</strong> {activeLesson.summary}
              </div>

              {/* VIDEO TYPE */}
              {activeLesson.type === 'video' && (
                <div className="space-y-4">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 shadow-md">
                    <iframe
                      src={activeLesson.videoUrl}
                      title={activeLesson.titleAr}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* INTERACTIVE PHONICS / AUDIO LESSON */}
              {activeLesson.id === 'les-03' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-extrabold text-slate-900 text-sm">
                      {isEn ? 'Click letter to hear its phonics sound & word:' : 'اضغط على الحرف واستمع إلى صوته (Phonics Audio):'}
                    </h4>
                    <span className="text-xs text-slate-400">{isEn ? 'Interactive Audio 🔊' : 'نطق صوتي تفاعلي 🔊'}</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { letter: 'A a', word: 'Apple', sound: '/æ/', emoji: '🍎' },
                      { letter: 'B b', word: 'Ball', sound: '/b/', emoji: '⚽' },
                      { letter: 'C c', word: 'Cat', sound: '/k/', emoji: '🐱' },
                      { letter: 'D d', word: 'Duck', sound: '/d/', emoji: '🦆' },
                      { letter: 'E e', word: 'Elephant', sound: '/e/', emoji: '🐘' },
                      { letter: 'F f', word: 'Fish', sound: '/f/', emoji: '🐟' },
                      { letter: 'S s', word: 'Sun', sound: '/s/', emoji: '☀️' },
                      { letter: 'T t', word: 'Tiger', sound: '/t/', emoji: '🐯' },
                    ].map(item => (
                      <button
                        key={item.letter}
                        onClick={() => speakText(`${item.letter}, ${item.word}`)}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer text-center group ${
                          speakingWord === `${item.letter}, ${item.word}`
                            ? 'border-[#9E1C58] bg-[#9E1C58]/10 scale-105'
                            : 'border-slate-200 hover:border-[#06B6D4] bg-slate-50 hover:bg-white'
                        }`}
                      >
                        <span className="text-3xl block mb-1 group-hover:scale-110 transition-transform">{item.emoji}</span>
                        <div className="font-black text-lg text-slate-900 font-sans">{item.letter}</div>
                        <div className="text-xs font-bold text-[#06B6D4]">{item.word}</div>
                        <div className="text-[10px] text-slate-400 font-mono mt-1">{item.sound}</div>
                        <div className="mt-2 text-[10px] text-slate-500 flex items-center justify-center gap-1">
                          <Volume2 className="w-3 h-3 text-[#9E1C58]" />
                          <span>{isEn ? 'Listen' : 'استمع'}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* INTERACTIVE COLORS LESSON */}
              {activeLesson.id === 'les-04' && (
                <div className="space-y-4">
                  <h4 className="font-extrabold text-slate-900 text-sm">
                    {isEn ? 'Click colors to practice pronunciation:' : 'تعلم أسماء الألوان بالنقر عليها للاستماع لنطقها بالإنجليزية:'}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { nameAr: 'أحمر', nameEn: 'Red', colorBg: 'bg-red-500' },
                      { nameAr: 'أزرق', nameEn: 'Blue', colorBg: 'bg-blue-500' },
                      { nameAr: 'أصفر', nameEn: 'Yellow', colorBg: 'bg-amber-400' },
                      { nameAr: 'أخضر', nameEn: 'Green', colorBg: 'bg-emerald-500' },
                      { nameAr: 'وردي', nameEn: 'Pink', colorBg: 'bg-pink-400' },
                      { nameAr: 'بنفسجي', nameEn: 'Purple', colorBg: 'bg-purple-600' },
                    ].map(col => (
                      <button
                        key={col.nameEn}
                        onClick={() => speakText(col.nameEn)}
                        className="p-4 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-all text-center flex flex-col items-center gap-2 cursor-pointer"
                      >
                        <div className={`w-12 h-12 rounded-full ${col.colorBg} shadow-sm`} />
                        <span className="font-black text-base text-slate-900 font-sans">{col.nameEn}</span>
                        <span className="text-xs text-slate-500">{isEn ? col.nameEn : col.nameAr}</span>
                        <span className="text-[10px] text-[#9E1C58] flex items-center gap-1 font-bold">
                          <Volume2 className="w-3 h-3" />
                          <span>{isEn ? 'Speak' : 'نطق الكلمة'}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* INTERACTIVE NUMBERS LESSON */}
              {activeLesson.id === 'les-05' && (
                <div className="space-y-4">
                  <h4 className="font-extrabold text-slate-900 text-sm">
                    {isEn ? 'English Numbers 1-10 – Click to count aloud:' : 'الأرقام الإنجليزية من 1 إلى 10 – انقر للعد بصوت واضح:'}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                    {[
                      { num: 1, word: 'One', countEmoji: '☝️' },
                      { num: 2, word: 'Two', countEmoji: '✌️' },
                      { num: 3, word: 'Three', countEmoji: '🤟' },
                      { num: 4, word: 'Four', countEmoji: '🖐️' },
                      { num: 5, word: 'Five', countEmoji: '✋' },
                      { num: 6, word: 'Six', countEmoji: '🖐️☝️' },
                      { num: 7, word: 'Seven', countEmoji: '🖐️✌️' },
                      { num: 8, word: 'Eight', countEmoji: '🖐️🤟' },
                      { num: 9, word: 'Nine', countEmoji: '🖐️🖐️' },
                      { num: 10, word: 'Ten', countEmoji: '👐' },
                    ].map(n => (
                      <button
                        key={n.num}
                        onClick={() => speakText(n.word)}
                        className="p-3 bg-slate-50 hover:bg-amber-50 border border-slate-200 rounded-2xl text-center transition-all cursor-pointer"
                      >
                        <span className="text-2xl block mb-1">{n.countEmoji}</span>
                        <span className="text-xl font-black text-[#9E1C58] font-sans block">{n.num}</span>
                        <span className="text-xs font-bold text-slate-700">{n.word}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* TEXT CONTENT / EXPLANATION */}
              {activeLesson.contentMarkdown && (
                <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 bg-slate-50/50 p-5 rounded-2xl border border-slate-100 whitespace-pre-line leading-relaxed">
                  {activeLesson.contentMarkdown}
                </div>
              )}

              {/* QUIZ SECTION */}
              {activeLesson.quiz && (
                <div className="space-y-6 pt-4 border-t border-slate-200">
                  <div className="bg-pink-50/60 p-4 rounded-2xl border border-pink-100">
                    <h3 className="font-extrabold text-[#9E1C58] text-base mb-1">
                      {isEn ? 'Level 1 Mastery Quiz' : 'اختبار إتقان المستوى الأول (Quiz)'}
                    </h3>
                    <p className="text-xs text-slate-600">
                      {isEn 
                        ? 'Answer the following questions. Scoring 4 out of 5 awards you an official Level 1 Completion Certificate!'
                        : 'أجب على الأسئلة الخمسة التالية. تحقيق 4 من 5 يمنحك شهادة إتمام المستوى المعتمدة!'}
                    </p>
                  </div>

                  {/* Questions List */}
                  <div className="space-y-5">
                    {activeLesson.quiz.map((q, qIndex) => (
                      <div key={q.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                        <div className="font-bold text-xs sm:text-sm text-slate-900">
                          {qIndex + 1}. {q.question}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {q.options.map(opt => {
                            const isSelected = quizAnswers[q.id] === opt.id;
                            let style = 'bg-white border-slate-200 hover:border-slate-300 text-slate-800';

                            if (quizSubmitted) {
                              if (opt.isCorrect) {
                                style = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold';
                              } else if (isSelected && !opt.isCorrect) {
                                style = 'bg-red-100 border-red-400 text-red-800';
                              }
                            } else if (isSelected) {
                              style = 'bg-[#9E1C58]/10 border-[#9E1C58] text-[#9E1C58] font-bold';
                            }

                            return (
                              <button
                                key={opt.id}
                                disabled={quizSubmitted}
                                onClick={() => handleQuizAnswer(q.id, opt.id)}
                                className={`p-3 rounded-xl border text-xs transition-all cursor-pointer ${style}`}
                              >
                                {opt.text}
                              </button>
                            );
                          })}
                        </div>

                        {quizSubmitted && q.explanation && (
                          <div className="text-[11px] text-slate-500 pt-1">
                            💡 {q.explanation}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Quiz Submit & Certificate generation */}
                  <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {!quizSubmitted ? (
                      <button
                        onClick={handleFinishQuiz}
                        disabled={Object.keys(quizAnswers).length < activeLesson.quiz.length}
                        className="w-full sm:w-auto bg-[#9E1C58] hover:bg-[#B32265] disabled:opacity-50 text-white px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
                      >
                        {isEn ? 'Submit Answers & View Score' : 'تسليم الإجابات وعرض النتيجة'}
                      </button>
                    ) : (
                      <div className="w-full space-y-4">
                        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between">
                          <div>
                            <span className="text-xs text-emerald-700 block font-bold">{isEn ? 'Final Score:' : 'النتيجة النهائية:'}</span>
                            <span className="text-lg font-black text-emerald-900">
                              {calculateQuizScore()} {isEn ? `out of ${activeLesson.quiz.length} correct` : `من ${activeLesson.quiz.length} أسئلة صحيحة`}
                            </span>
                          </div>
                          <button
                            onClick={() => {
                              setQuizSubmitted(false);
                              setQuizAnswers({});
                              setShowCertificate(false);
                            }}
                            className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>{isEn ? 'Retake Quiz' : 'إعادة الاختبار'}</span>
                          </button>
                        </div>

                        {showCertificate && (
                          <div className="p-6 bg-linear-to-b from-amber-50 to-white border-2 border-amber-300 rounded-3xl text-center space-y-4 shadow-lg">
                            <div className="flex justify-center">
                              <Award className="w-12 h-12 text-amber-500 animate-bounce" />
                            </div>
                            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                              {isEn ? 'Official Level 1 Completion Certificate' : 'شهادة إتمام المستوى الأول المعتمدة'}
                            </span>
                            <h3 className="text-2xl font-black text-slate-900">
                              {isEn ? `Congratulations, ${childStudentName}! 🎓` : `مبروك يا ${childStudentName}! 🎓`}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                              {isEn 
                                ? 'Kristina Kidz Academy proudly certifies that the student has successfully completed English Foundations Level 1, mastering phonics sounds, colors, numbers, and basic classroom English.'
                                : 'تشهد أكاديمية كريستينا كيدز بأن البطل الصغير قد أتم بنجاح متطلبات المستوى الأول في اللغة الإنجليزية (English Foundations) وأتقن أصوات الفونكس والألوان والأرقام والكلمات الأساسية.'}
                            </p>

                            <div className="pt-2 flex justify-center gap-3">
                              <button
                                onClick={() => window.print()}
                                className="bg-[#9E1C58] hover:bg-[#B32265] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-xs flex items-center gap-2 cursor-pointer"
                              >
                                <Download className="w-4 h-4" />
                                <span>{isEn ? 'Print & Download Certificate' : 'طباعة وحفظ الشهادة'}</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
