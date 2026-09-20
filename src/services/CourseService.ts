import { ICourse, ILesson } from '../types';

export const ELEARNING_COURSES: ICourse[] = [
  {
    id: 'course-english-kids',
    slug: 'english-for-kids',
    odooCode: 'SLIDES_ENG_KIDZ',
    titleAr: 'اللغة الإنجليزية للأطفال – English for Kids',
    titleEn: 'English for Kids - Interactive Journey',
    level: 'المستوى الأول – التأسيس',
    ageGroup: '4 - 10 سنوات',
    rating: 4.9,
    reviewsCount: 142,
    enrolledStudents: 380,
    totalLessons: 13,
    description: 'المنهج الرقمي التفاعلي المعتمد في أكاديمية كريستينا كيدز عبر منصة أودو 19 التعليمية. يتعلم الطفل الحروف والأصوات والألوان والأرقام من خلال أسلوب شيق، بطاقات ناطقة، ألعاب، واختبارات مرحة تمنحه أوسمة وشهادة رسمية باسمه.',
    objectives: [
      'التعرف على جميع الحروف الإنجليزية شكلاً وصوتاً (Phonics)',
      'نطق الألوان والأرقام والأشكال بطلاقة تامة',
      'فهم أكثر من 50 كلمة صفية شائعة وجمل الترحيب',
      'بناء الثقة بالنفس عند التحدث باللغة الإنجليزية بدون تردد',
      'الحصول على شهادة إتمام المستوى الأول من الأكاديمية'
    ],
    instructorName: 'أ. كريستينا & فريق أكاديمية كريستينا كيدز',
    certificateAvailable: true,
    coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
    levels: [
      {
        id: 'lvl-1',
        titleAr: 'المستوى الأول / Level 1 – English Foundations (أساسيات اللغة الإنجليزية)',
        titleEn: 'Level 1 - English Foundations',
        description: 'المرحلة التأسيسية التي تبني القاعدة اللغوية السليمة للطفل',
        lessons: [
          {
            id: 'les-01',
            number: 1,
            titleAr: 'مرحباً بك في اللغة الإنجليزية – Welcome to English',
            titleEn: 'Welcome to English',
            type: 'article',
            durationMinutes: 5,
            summary: 'مقدمة ترحيبية تشرح للطفل وولي الأمر خطة التعلم والمكافآت والأوسمة.',
            contentMarkdown: `### مرحباً بك يا بطل في عالم الإنجليزية مع كريستينا كيدز! 🎉
أهلاً بك في رحلتك الممتعة لاكتشاف لغة جديدة تفتح لك أبواب العالم. 
هنا ستتعلم بالصوت والصورة، وتلعب، وتجمع النجوم والشهادات.

**نصائح لولي الأمر:**
- شجع طفلك على ترديد الكلمات بصوت مسموع ومبهج.
- خصص 15 دقيقة يومياً للدرس والاختبار التفاعلي.
- احتفل بكل وسام يحققه طفلك معنا في المنصة!`
          },
          {
            id: 'les-02',
            number: 2,
            titleAr: 'الأبجدية الإنجليزية من A إلى Z – The Alphabet',
            titleEn: 'The Alphabet',
            type: 'video',
            durationMinutes: 10,
            summary: 'تعلم كتابة ونطق الحروف الإنجليزية الكبيرة والصغيرة (Uppercase & Lowercase) بأناشيد محببة.',
            videoUrl: 'https://www.youtube-nocookie.com/embed/HQSN7B0Yk5A',
            contentMarkdown: `الحروف الإنجليزية عددها 26 حرفاً. لكل حرف اسم وصوت مميز.
- **A a** (Apple - تفاحة 🍎)
- **B b** (Ball - كرة ⚽)
- **C c** (Cat - قطة 🐱)
- **D d** (Duck - بطة 🦆)
- **E e** (Elephant - فيل 🐘)`
          },
          {
            id: 'les-03',
            number: 3,
            titleAr: 'أصوات الحروف – Letter Sounds & Phonics',
            titleEn: 'Letter Sounds (Phonics)',
            type: 'interactive',
            durationMinutes: 12,
            summary: 'كيف ننطق الحروف داخل الكلمات بالطريقة الصحيحة (Phonics) لتمكين الطفل من القراءة السريعة.',
            contentMarkdown: `في أكاديمية كريستينا كيدز، نركز على صوت الحرف وليس فقط اسمه:
- **A** يقول: /æ/ كما في Ant 🐜
- **B** يقول: /b/ كما في Bear 🐻
- **C** يقول: /k/ كما في Cup ☕
- **S** يقول: /s/ كما في Sun ☀️
اضغط على بطاقات الأصوات بالأسفل لتستمع إلى نطق المعلمة وتكرر خلفها!`
          },
          {
            id: 'les-04',
            number: 4,
            titleAr: 'عالم الألوان – Fun with Colors',
            titleEn: 'Colors',
            type: 'interactive',
            durationMinutes: 8,
            summary: 'تعرف على أسماء الألوان المبهجة بالإنجليزية وربطها بالأشياء من حولنا.',
            contentMarkdown: `الألوان تجعل عالمنا جميلاً ومبهجاً:
- **Red** 🔴 أحمر (Like an apple)
- **Blue** 🔵 أزرق (Like the sky & the sea)
- **Yellow** 🟡 أصفر (Like the sun)
- **Green** 🟢 أخضر (Like trees & grass)
- **Pink** 🌸 وردي (Like flowers)
- **Purple** 🟣 بنفسجي (Like grapes)`
          },
          {
            id: 'les-05',
            number: 5,
            titleAr: 'الأرقام السحرية من 1 إلى 10 – Numbers 1 to 10',
            titleEn: 'Numbers 1 to 10',
            type: 'interactive',
            durationMinutes: 10,
            summary: 'العد باللغة الإنجليزية وربط الأرقام بالأصابع والمجموعات بطريقة حركية ممتعة.',
            contentMarkdown: `هيا نعد معاً بأصابعنا:
1 = One ☝️ | 2 = Two ✌️ | 3 = Three 🤟 | 4 = Four 🖐️
5 = Five ✋ | 6 = Six 🖐️☝️ | 7 = Seven 🖐️✌️ | 8 = Eight
9 = Nine | 10 = Ten 👐`
          },
          {
            id: 'les-06',
            number: 6,
            titleAr: 'الأشكال الهندسية – Shapes All Around Us',
            titleEn: 'Shapes',
            type: 'article',
            durationMinutes: 7,
            summary: 'استكشاف الدائرة والمربع والمثلث والنجمة والقلب في غرفتنا وبيئتنا.',
            contentMarkdown: `الأشكال موجودة في كل مكان نراه:
- **Circle** ⚪ دائرة (مثل الساعة وكرة القدم)
- **Square** ⬛ مربع (مثل الصندوق والنافذة)
- **Triangle** 🔺 مثلث (مثل شريحة البيتزا)
- **Star** ⭐ نجمة (في سماء الليل)
- **Heart** ❤️ قلب (رمز المحبة في شعار كريستينا كيدز!)`
          },
          {
            id: 'les-07',
            number: 7,
            titleAr: 'كلمات الصف الأساسية – Basic Classroom Words',
            titleEn: 'Classroom Words',
            type: 'article',
            durationMinutes: 8,
            summary: 'الكلمات التي يستخدمها الطفل والمعلم في الصف اليومي.',
            contentMarkdown: `كلمات لا يستغني عنها أي بطل في صفه:
- **Teacher** 👩‍🏫 المعلم / المعلمة
- **Book** 📖 كتاب
- **Pencil** ✏️ قلم رصاص
- **Backpack** 🎒 حقيبة مدرسية
- **Chair & Desk** 🪑 كرسي وطاولة
- **Listen!** 👂 استمع
- **Good Job!** 🌟 أحسنت عملاً`
          },
          {
            id: 'les-08',
            number: 8,
            titleAr: 'تدريبات واختبار المستوى الأول – Level 1 Quiz & Certificate',
            titleEn: 'Level 1 Exercises & Quiz',
            type: 'quiz',
            durationMinutes: 15,
            summary: 'اختبار تفاعلي قصير للتحقق من إتقان المستوى الأول والحصول على الشهادة المعتمدة!',
            quiz: [
              {
                id: 'q1',
                question: 'ما هو الحرف الأول من كلمة "Apple" (تفاحة)؟',
                options: [
                  { id: 'q1-a', text: 'B', isCorrect: false },
                  { id: 'q1-b', text: 'A', isCorrect: true },
                  { id: 'q1-c', text: 'C', isCorrect: false },
                  { id: 'q1-d', text: 'D', isCorrect: false }
                ],
                explanation: 'Apple تبدأ بحرف A بصوت /æ/.'
              },
              {
                id: 'q2',
                question: 'ما هو لون الشمس "The Sun" بالإنجليزية؟',
                options: [
                  { id: 'q2-a', text: 'Blue', isCorrect: false },
                  { id: 'q2-b', text: 'Yellow', isCorrect: true },
                  { id: 'q2-c', text: 'Green', isCorrect: false },
                  { id: 'q2-d', text: 'Red', isCorrect: false }
                ],
                explanation: 'الشمس لونها أصفر أي Yellow!'
              },
              {
                id: 'q3',
                question: 'ما هو الرقم الذي يلي رقم Four (4)؟',
                options: [
                  { id: 'q3-a', text: 'Three (3)', isCorrect: false },
                  { id: 'q3-b', text: 'Five (5)', isCorrect: true },
                  { id: 'q3-c', text: 'Six (6)', isCorrect: false },
                  { id: 'q3-d', text: 'Seven (7)', isCorrect: false }
                ],
                explanation: 'بعد رقم Four (4) يأتي رقم Five (5)!'
              },
              {
                id: 'q4',
                question: 'ما هو الشكل الذي يشبه شريحة البيتزا الشهية؟',
                options: [
                  { id: 'q4-a', text: 'Triangle (مثلث)', isCorrect: true },
                  { id: 'q4-b', text: 'Circle (دائرة)', isCorrect: false },
                  { id: 'q4-c', text: 'Square (مربع)', isCorrect: false }
                ],
                explanation: 'شريحة البيتزا مثلثة الشكل Triangle.'
              },
              {
                id: 'q5',
                question: 'كيف نقول "معلمة / معلم" بالإنجليزية؟',
                options: [
                  { id: 'q5-a', text: 'Pencil', isCorrect: false },
                  { id: 'q5-b', text: 'Teacher', isCorrect: true },
                  { id: 'q5-c', text: 'Chair', isCorrect: false }
                ],
                explanation: 'المعلم هو Teacher!'
              }
            ]
          }
        ]
      }
    ]
  }
];

export class CourseService {
  public static getAllCourses(): ICourse[] {
    return ELEARNING_COURSES;
  }

  public static getPrimaryCourse(): ICourse {
    return ELEARNING_COURSES[0];
  }

  public static getCourseBySlug(slug: string): ICourse | undefined {
    return ELEARNING_COURSES.find(c => c.slug === slug) || ELEARNING_COURSES[0];
  }

  public static getLesson(courseId: string, lessonId: string): ILesson | undefined {
    const course = ELEARNING_COURSES.find(c => c.id === courseId);
    if (!course) return undefined;
    for (const lvl of course.levels) {
      const match = lvl.lessons.find(l => l.id === lessonId);
      if (match) return match;
    }
    return undefined;
  }
}
