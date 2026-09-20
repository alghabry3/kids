import { IPlacementQuestion, IPlacementResult } from '../types';

export const PLACEMENT_QUESTIONS: IPlacementQuestion[] = [
  {
    id: 'pq-1',
    skill: 'alphabet',
    questionPrompt: 'أي من الحروف التالية يبدأ به اسم "حرف الشمس" (Sun)؟ ☀️',
    questionPromptEn: 'Which letter does the word "Sun" begin with? ☀️',
    options: [
      { id: 'opt-1a', text: 'حرف S (صوت /s/)', textEn: 'Letter S (/s/ sound)', imageEmoji: '☀️', isCorrect: true },
      { id: 'opt-1b', text: 'حرف M (صوت /m/)', textEn: 'Letter M (/m/ sound)', imageEmoji: '🌙', isCorrect: false },
      { id: 'opt-1c', text: 'حرف T (صوت /t/)', textEn: 'Letter T (/t/ sound)', imageEmoji: '⭐', isCorrect: false },
      { id: 'opt-1d', text: 'حرف B (صوت /b/)', textEn: 'Letter B (/b/ sound)', imageEmoji: '🎈', isCorrect: false }
    ]
  },
  {
    id: 'pq-2',
    skill: 'colors',
    questionPrompt: 'ما هو اسم اللون "الأزرق" باللغة الإنجليزية؟ 🌊',
    questionPromptEn: 'What is the English word for the color "أزرق"? 🌊',
    options: [
      { id: 'opt-2a', text: 'Red', textEn: 'Red', imageEmoji: '🔴', isCorrect: false },
      { id: 'opt-2b', text: 'Blue', textEn: 'Blue', imageEmoji: '🔵', isCorrect: true },
      { id: 'opt-2c', text: 'Yellow', textEn: 'Yellow', imageEmoji: '🟡', isCorrect: false },
      { id: 'opt-2d', text: 'Green', textEn: 'Green', imageEmoji: '🟢', isCorrect: false }
    ]
  },
  {
    id: 'pq-3',
    skill: 'phonics',
    questionPrompt: 'أي كلمة من الكلمات التالية تنطق بنفس صوت القافية لكلمة "Cat" (قطة)؟ 🐱',
    questionPromptEn: 'Which of the following words rhymes with "Cat"? 🐱',
    options: [
      { id: 'opt-3a', text: 'Hat (قبعة)', textEn: 'Hat', imageEmoji: '🎩', isCorrect: true },
      { id: 'opt-3b', text: 'Dog (كلب)', textEn: 'Dog', imageEmoji: '🐶', isCorrect: false },
      { id: 'opt-3c', text: 'Fish (سمكة)', textEn: 'Fish', imageEmoji: '🐟', isCorrect: false },
      { id: 'opt-3d', text: 'Cup (كوب)', textEn: 'Cup', imageEmoji: '☕', isCorrect: false }
    ]
  },
  {
    id: 'pq-4',
    skill: 'numbers',
    questionPrompt: 'إذا كان لديك 3 تفاحات وأعطاك المعلم 2 إضافيتين، كم المجموع بالإنجليزية؟ 🍎',
    questionPromptEn: 'If you have 3 apples and the teacher gives you 2 more, how many in total? 🍎',
    options: [
      { id: 'opt-4a', text: 'Four (4)', textEn: 'Four (4)', isCorrect: false },
      { id: 'opt-4b', text: 'Five (5)', textEn: 'Five (5)', isCorrect: true },
      { id: 'opt-4c', text: 'Six (6)', textEn: 'Six (6)', isCorrect: false },
      { id: 'opt-4d', text: 'Seven (7)', textEn: 'Seven (7)', isCorrect: false }
    ]
  },
  {
    id: 'pq-5',
    skill: 'vocabulary',
    questionPrompt: 'عندما تقابل صديقك في الصباح بالإنجليزية، ماذا تقول له بحماس؟ 👋',
    questionPromptEn: 'When you meet your friend in the morning, what cheerful greeting do you say? 👋',
    options: [
      { id: 'opt-5a', text: 'Good morning!', textEn: 'Good morning!', isCorrect: true },
      { id: 'opt-5b', text: 'Good night!', textEn: 'Good night!', isCorrect: false },
      { id: 'opt-5c', text: 'Thank you!', textEn: 'Thank you!', isCorrect: false },
      { id: 'opt-5d', text: 'Excuse me!', textEn: 'Excuse me!', isCorrect: false }
    ]
  }
];

export class PlacementTestService {
  public static getQuestions(): IPlacementQuestion[] {
    return PLACEMENT_QUESTIONS;
  }

  public static evaluateTest(
    childName: string,
    childAge: number,
    answers: Record<string, string>
  ): IPlacementResult {
    let score = 0;
    for (const q of PLACEMENT_QUESTIONS) {
      const selectedOptionId = answers[q.id];
      const opt = q.options.find(o => o.id === selectedOptionId);
      if (opt && opt.isCorrect) {
        score += 1;
      }
    }

    let recommendedLevel = 'المستوى التأسيسي الأول (Level 1 Foundation)';
    let recommendedLevelEn = 'Level 1 Foundation & Phonics';
    let recommendedCourseId = 'prod-foundation';
    let recommendedCourseName = 'تأسيس اللغة الإنجليزية (English Foundation)';
    let recommendedCourseNameEn = 'English Foundation for Kids';
    let feedbackAr = 'طفلك يتمتع باستعداد ذهني رائع لبدء تعلم الحروف وأصوات الفونكس وبناء الثقة اللغوية.';
    let feedbackEn = 'Your child demonstrates excellent readiness for phonics sounds, early vocabulary, and speaking confidence.';

    if (score >= 4) {
      recommendedLevel = 'المستوى الثاني – الطلاقة والمحادثة (Level 2 Intermediate)';
      recommendedLevelEn = 'Level 2 Intermediate – Fluency & Conversation';
      recommendedCourseId = 'prod-english-courses';
      recommendedCourseName = 'دورات اللغة الإنجليزية المتكاملة (English Courses)';
      recommendedCourseNameEn = 'Comprehensive English Language Courses';
      feedbackAr = 'ما شاء الله! طفلك يمتلك حصيلة لغوية ممتازة وأساساً متيناً، وهو مؤهل مباشرة للانضمام إلى برامج المحادثة والتوسع اللغوي.';
      feedbackEn = 'Wonderful! Your child possesses great vocabulary and a strong base, qualifying directly for conversation and drama clubs.';
    } else if (score >= 2) {
      recommendedLevel = 'مستوى تأسيس الفونكس والقراءة (Phonics & Reading)';
      recommendedLevelEn = 'Level 1 – Phonics & Reading Readiness';
      recommendedCourseId = 'prod-foundation';
      recommendedCourseName = 'تأسيس اللغة الإنجليزية (English Foundation)';
      recommendedCourseNameEn = 'English Foundation for Kids';
      feedbackAr = 'لدى طفلك مهارات تمييز جيدة وسيتألق سريعاً مع دورة تأسيس الفونكس وأصوات الحروف التفاعلية.';
      feedbackEn = 'Your child has solid recognition skills and will thrive quickly with our interactive phonics program.';
    }

    return {
      childName: childName.trim() || 'البطل الصغير',
      childAge: childAge || 6,
      score,
      totalQuestions: PLACEMENT_QUESTIONS.length,
      recommendedLevel,
      recommendedLevelEn,
      recommendedCourseId,
      recommendedCourseName,
      recommendedCourseNameEn,
      feedbackAr,
      feedbackEn,
      discountCode: 'KIDZ-LEVEL10',
      discountValue: 10
    };
  }
}
