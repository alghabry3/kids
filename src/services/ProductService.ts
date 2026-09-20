import { IProduct, IDiscountCoupon } from '../types';

export const PRODUCTS_CATALOG: IProduct[] = [
  {
    id: 'prod-hosting',
    code: 'SERV_HOSTING',
    nameAr: 'برنامج الضيافة والرعاية المبكرة',
    nameEn: 'Early Childhood Hosting & Daycare',
    category: 'hosting',
    ageRange: '2 - 5 سنوات',
    ageRangeEn: '2 - 5 Years Old',
    timing: '7:00 ص - 11:00 ص (أيام الأسبوع)',
    timingEn: '7:00 AM - 11:00 AM (Weekdays)',
    shortDesc: 'بيئة آمنة محفزة تحتضن طفلك وتكتشف مواهبه المبكرة عبر اللعب التعليمي وتنمية الحواس والتواصل الاجتماعي.',
    shortDescEn: 'A safe, stimulating environment nurturing your child and uncovering early talents through purposeful play and sensory growth.',
    fullDesc: 'صُمم برنامج الضيافة في أكاديمية كريستينا كيدز ليكون البيت الثاني لطفلك. نوفر رعاية شاملة وأنشطة منتسوري، تفاعل باللغة الإنجليزية البسيطة، ركن الفنون، وتنمية المهارات الحركية الدقيقة تحت إشراف معلمات ومربيات متخصصات.',
    fullDescEn: 'Designed as a warm second home for your little one. We provide comprehensive Montessori sensory care, gentle English exposure through storytelling, arts corner, and fine-motor development by certified early-childhood educators.',
    features: [
      'أنشطة منتسوري حسية وإبداعية',
      'تهيئة لغوية بالإنجليزية من خلال الأغاني والقصص',
      'وجبة صحية خفيفة ورعاية متكاملة',
      'تقرير يومي لولي الأمر عبر البوابة والواتساب',
      'مرونة في الساعات (ساعتان أو أربع ساعات)'
    ],
    featuresEn: [
      'Creative & sensory Montessori activities',
      'Early English language songs & storytime',
      'Nutritious healthy snack & attentive care',
      'Daily progress reports via Parent Portal & WhatsApp',
      'Flexible options (2 hours or 4 hours daily)'
    ],
    pricingOptions: [
      { id: 'host-w-2h', durationLabel: 'أسبوعي (ساعتان يومياً)', durationLabelEn: 'Weekly (2 hrs/day)', hoursPerWeekOrDay: '2 ساعة / 5 أيام', hoursPerWeekOrDayEn: '2 hrs / 5 days', price: 250, totalHours: 8, pricePerHour: 31.25 },
      { id: 'host-w-4h', durationLabel: 'أسبوعي (4 ساعات يومياً)', durationLabelEn: 'Weekly (4 hrs/day)', hoursPerWeekOrDay: '4 ساعات / 5 أيام', hoursPerWeekOrDayEn: '4 hrs / 5 days', price: 400, totalHours: 16, pricePerHour: 25.00 },
      { id: 'host-m-2h', durationLabel: 'شهري (ساعتان يومياً)', durationLabelEn: 'Monthly (2 hrs/day)', hoursPerWeekOrDay: '2 ساعة / مرن', hoursPerWeekOrDayEn: '2 hrs / flexible', price: 850, totalHours: 32, pricePerHour: 26.56, badge: 'الأكثر طلباً', badgeEn: 'Most Popular' },
      { id: 'host-m-4h', durationLabel: 'شهري (4 ساعات يومياً)', durationLabelEn: 'Monthly (4 hrs/day)', hoursPerWeekOrDay: '4 ساعات / كامل', hoursPerWeekOrDayEn: '4 hrs / full day', price: 1500, totalHours: 64, pricePerHour: 23.44 },
      { id: 'host-t-2h', durationLabel: 'فصلي Term (ساعتان يومياً)', durationLabelEn: 'Full Term (2 hrs/day)', hoursPerWeekOrDay: 'فصل دراسي كامل', hoursPerWeekOrDayEn: 'Complete Academic Term', price: 3000, totalHours: 128, pricePerHour: 23.44 },
      { id: 'host-t-4h', durationLabel: 'فصلي Term (4 ساعات يومياً)', durationLabelEn: 'Full Term (4 hrs/day)', hoursPerWeekOrDay: 'فصل دراسي كامل', hoursPerWeekOrDayEn: 'Complete Academic Term', price: 5000, totalHours: 256, pricePerHour: 19.53, badge: 'أفضل توفير', badgeEn: 'Best Value' },
    ],
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod-foundation',
    code: 'SERV_ENG_FND',
    nameAr: 'تأسيس اللغة الإنجليزية (English Foundation)',
    nameEn: 'English Foundation for Kids',
    category: 'foundation',
    ageRange: '6+ سنوات',
    ageRangeEn: '6+ Years Old',
    timing: 'فترات مرنة: 12:30-1:30 | 1:30-2:30 | 2:30-3:30',
    timingEn: 'Flexible slots: 12:30-1:30 | 1:30-2:30 | 2:30-3:30',
    shortDesc: 'تأسيس متين وممتع في أصوات الحروف (Phonics)، المحادثة، القراءة والكتابة، لإعداد الطفل لطلاقة حقيقية.',
    shortDescEn: 'A joyful and solid foundation in Phonics letter-sounds, conversation, reading, and writing for authentic fluency.',
    fullDesc: 'يعتمد البرنامج منهجاً تفاعلياً يكسر حاجز الخوف عند الطفل، يبدأ من أصوات الحروف وتكوين الكلمات، والتحدث بجمل إنجليزية سليمة بالربط مع الحياة اليومية والأنشطة البصرية والألعاب اللغوية.',
    fullDescEn: 'Our interactive curriculum eliminates child hesitation, starting from phonetic letter sounds, word building, and everyday English conversational patterns reinforced with visual games.',
    features: [
      'منهج فونكس دولي (Jolly Phonics)',
      'التركيز على النطق الصحيح وتكوين الجمل',
      'تدريبات إلكترونية مكملة عبر موديول التعليم',
      'اختبارات قصيرة وشهادات إتقان لكل مرحلة',
      'مجموعات صغيرة تضمن تفاعل كل طفل'
    ],
    featuresEn: [
      'International Jolly Phonics framework',
      'Focus on accurate pronunciation & sentence building',
      'Complimentary digital exercises on Odoo eLearning',
      'Stage quizzes and certificates of achievement',
      'Small interactive classes for individualized attention'
    ],
    pricingOptions: [
      { id: 'fnd-m-2d', durationLabel: 'شهري (يومان أسبوعياً)', durationLabelEn: 'Monthly (2 days/week)', hoursPerWeekOrDay: 'يومان / أسبوعياً', hoursPerWeekOrDayEn: '2 days / week', price: 350, totalHours: 8, pricePerHour: 43.75 },
      { id: 'fnd-m-4d', durationLabel: 'شهري (4 أيام أسبوعياً)', durationLabelEn: 'Monthly (4 days/week)', hoursPerWeekOrDay: '4 أيام / أسبوعياً', hoursPerWeekOrDayEn: '4 days / week', price: 700, totalHours: 16, pricePerHour: 43.75, badge: 'الموصى به', badgeEn: 'Recommended' },
      { id: 'fnd-t-2d', durationLabel: 'فصلي Term (يومان أسبوعياً)', durationLabelEn: 'Full Term (2 days/week)', hoursPerWeekOrDay: 'فصل دراسي كامل', hoursPerWeekOrDayEn: 'Complete Academic Term', price: 1200, totalHours: 32, pricePerHour: 37.50 },
      { id: 'fnd-t-4d', durationLabel: 'فصلي Term (4 أيام أسبوعياً)', durationLabelEn: 'Full Term (4 days/week)', hoursPerWeekOrDay: 'فصل دراسي كامل', hoursPerWeekOrDayEn: 'Complete Academic Term', price: 2600, totalHours: 64, pricePerHour: 40.63, badge: 'توفير فصلي', badgeEn: 'Term Savings' },
    ],
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod-sup-international',
    code: 'SERV_SUP_INT',
    nameAr: 'دعم وتقوية طلاب المدارس العالمية (International)',
    nameEn: 'International School Curriculum Support',
    category: 'school_support',
    ageRange: '6+ سنوات',
    ageRangeEn: '6+ Years Old',
    timing: '2:00 م - 8:00 م (ساعة يومياً)',
    timingEn: '2:00 PM - 8:00 PM (1 hr/day)',
    shortDesc: 'متابعة يومية متخصصة لمناهج المدارس العالمية (American / British)، تدريس العلوم والرياضيات واللغة الإنجليزية والمشاريع.',
    shortDescEn: 'Daily specialized support for American & British international curricula: English, Math, Science, and class projects.',
    fullDesc: 'نوفر لكادر تدريسي متمرس في مناهج المدارس الدولية المعتمدة بالمنطقة الشرقية. مساعدة الطالب في حل الواجبات، الاستعداد للاختبارات الدورية، وتنمية مهارات التفكير النقدي والعرض التقديمي.',
    fullDescEn: 'Experienced instructors in accredited international school programs across Eastern Province. Homework assistance, exam prep, critical thinking, and student presentation skills.',
    features: [
      'متابعة مناهج المدارس العالمية المعتمدة',
      'دعم الواجبات والاختبارات والمشاريع (Projects)',
      'تقوية مهارات الفهم والاستيعاب والطلاقة',
      'تواصل مستمر مع ولي الأمر حول تقدم الطالب'
    ],
    featuresEn: [
      'Accredited International Curriculum following',
      'Homework, exam preparation & school projects',
      'Comprehension, fluency & critical thinking',
      'Direct parent communication on student progress'
    ],
    pricingOptions: [
      { id: 'sup-int-m-2d', durationLabel: 'شهري (يومان أسبوعياً)', durationLabelEn: 'Monthly (2 days/week)', hoursPerWeekOrDay: 'يومان / أسبوعياً', hoursPerWeekOrDayEn: '2 days / week', price: 700, totalHours: 8, pricePerHour: 87.50 },
      { id: 'sup-int-m-4d', durationLabel: 'شهري (4 أيام أسبوعياً)', durationLabelEn: 'Monthly (4 days/week)', hoursPerWeekOrDay: '4 أيام / أسبوعياً', hoursPerWeekOrDayEn: '4 days / week', price: 1150, totalHours: 16, pricePerHour: 71.88, badge: 'الأكثر اختياراً', badgeEn: 'Top Choice' },
      { id: 'sup-int-t-2d', durationLabel: 'فصلي Term (يومان أسبوعياً)', durationLabelEn: 'Full Term (2 days/week)', hoursPerWeekOrDay: 'فصل دراسي كامل', hoursPerWeekOrDayEn: 'Complete Academic Term', price: 2400, totalHours: 32, pricePerHour: 75.00 },
      { id: 'sup-int-t-4d', durationLabel: 'فصلي Term (4 أيام أسبوعياً)', durationLabelEn: 'Full Term (4 days/week)', hoursPerWeekOrDay: 'فصل دراسي كامل', hoursPerWeekOrDayEn: 'Complete Academic Term', price: 4000, totalHours: 64, pricePerHour: 62.50, badge: 'خصم فصلي', badgeEn: 'Term Discount' },
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod-sup-private',
    code: 'SERV_SUP_PRV',
    nameAr: 'دعم وتقوية طلاب المدارس الأهلية (Private School)',
    nameEn: 'Private School Support',
    category: 'school_support',
    ageRange: '6+ سنوات',
    ageRangeEn: '6+ Years Old',
    timing: '2:00 م - 8:00 م',
    timingEn: '2:00 PM - 8:00 PM',
    shortDesc: 'متابعة شاملة لمناهج المدارس الأهلية ولغتها الإنجليزية المكثفة مع تأسيس قواعد الفهم وحل الواجبات.',
    shortDescEn: 'Comprehensive follow-up for private school curricula and intensive English with grammar and homework mastery.',
    fullDesc: 'برنامج مخصص لطلاب المدارس الأهلية، يقدم إسناداً تعليمياً مكثفاً لجميع المواد مع تركيز خاص على اللغة الإنجليزية والرياضيات ومراجعة الدروس اليومية لتحقيق أعلى الدرجات.',
    fullDescEn: 'Dedicated to private school pupils, providing solid reinforcement across subjects with heavy focus on English, Math, and daily lessons review.',
    features: [
      'شرح مبسط وممتع للمقررات الدراسية',
      'مراجعات ما قبل الامتحانات وتدريبات نموذجية',
      'بيئة دراسية هادئة تشجع التركيز والإنجاز'
    ],
    featuresEn: [
      'Simplified and engaging lessons explanations',
      'Pre-exam revision & practice quizzes',
      'Calm academic atmosphere fostering focus'
    ],
    pricingOptions: [
      { id: 'sup-prv-m-2d', durationLabel: 'شهري (يومان أسبوعياً)', durationLabelEn: 'Monthly (2 days/week)', hoursPerWeekOrDay: 'يومان / أسبوعياً', hoursPerWeekOrDayEn: '2 days / week', price: 630, totalHours: 8, pricePerHour: 78.75 },
      { id: 'sup-prv-m-4d', durationLabel: 'شهري (4 أيام أسبوعياً)', durationLabelEn: 'Monthly (4 days/week)', hoursPerWeekOrDay: '4 أيام / أسبوعياً', hoursPerWeekOrDayEn: '4 days / week', price: 1035, totalHours: 16, pricePerHour: 64.69, badge: 'شائع', badgeEn: 'Popular' },
      { id: 'sup-prv-t-2d', durationLabel: 'فصلي Term (يومان أسبوعياً)', durationLabelEn: 'Full Term (2 days/week)', hoursPerWeekOrDay: 'فصل دراسي كامل', hoursPerWeekOrDayEn: 'Complete Academic Term', price: 2160, totalHours: 32, pricePerHour: 67.50 },
      { id: 'sup-prv-t-4d', durationLabel: 'فصلي Term (4 أيام أسبوعياً)', durationLabelEn: 'Full Term (4 days/week)', hoursPerWeekOrDay: 'فصل دراسي كامل', hoursPerWeekOrDayEn: 'Complete Academic Term', price: 3600, totalHours: 64, pricePerHour: 56.25 },
    ],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod-sup-government',
    code: 'SERV_SUP_GOV',
    nameAr: 'دعم وتقوية طلاب المدارس الحكومية (Government School)',
    nameEn: 'Government School Support',
    category: 'school_support',
    ageRange: '6+ سنوات',
    ageRangeEn: '6+ Years Old',
    timing: '2:00 م - 8:00 م',
    timingEn: '2:00 PM - 8:00 PM',
    shortDesc: 'متابعة يومية لمقررات وزارة التعليم مع تمكين الطفل من إتقان اللغة الإنجليزية وتحسين تحصيله الدراسي.',
    shortDescEn: 'Daily guidance in Ministry of Education curricula empowering children in English and overall scholastic excellence.',
    fullDesc: 'يساعد أبناءنا وبناتنا على التفوق في مقرراتهم المدرسية، مع دروس لغوية داعمة تسد فجوة التعلم وتمنح الطفل ثقة بالنفس في الفصل الدراسي.',
    fullDescEn: 'Helps students excel in Ministry books and Madrasati platform, with supportive language classes closing learning gaps and building confidence.',
    features: [
      'متابعة منهج وزارة التعليم (منصة مدرستي والكتب الوزارية)',
      'تقوية مهارات القراءة والحساب والإملاء',
      'تحفيز يومي وأنشطة لاصفية ممتعة'
    ],
    featuresEn: [
      'Following Ministry syllabus & Madrasati materials',
      'Strengthening reading, math & spelling',
      'Daily positive motivation & enjoyable activities'
    ],
    pricingOptions: [
      { id: 'sup-gov-m-2d', durationLabel: 'شهري (يومان أسبوعياً)', durationLabelEn: 'Monthly (2 days/week)', hoursPerWeekOrDay: 'يومان / أسبوعياً', hoursPerWeekOrDayEn: '2 days / week', price: 450, totalHours: 8, pricePerHour: 56.25 },
      { id: 'sup-gov-m-4d', durationLabel: 'شهري (4 أيام أسبوعياً)', durationLabelEn: 'Monthly (4 days/week)', hoursPerWeekOrDay: '4 أيام / أسبوعياً', hoursPerWeekOrDayEn: '4 days / week', price: 800, totalHours: 16, pricePerHour: 50.00, badge: 'القيمة الأفضل', badgeEn: 'Best Value' },
      { id: 'sup-gov-t-2d', durationLabel: 'فصلي Term (يومان أسبوعياً)', durationLabelEn: 'Full Term (2 days/week)', hoursPerWeekOrDay: 'فصل دراسي كامل', hoursPerWeekOrDayEn: 'Complete Academic Term', price: 1620, totalHours: 32, pricePerHour: 50.63 },
      { id: 'sup-gov-t-4d', durationLabel: 'فصلي Term (4 أيام أسبوعياً)', durationLabelEn: 'Full Term (4 days/week)', hoursPerWeekOrDay: 'فصل دراسي كامل', hoursPerWeekOrDayEn: 'Complete Academic Term', price: 3000, totalHours: 64, pricePerHour: 46.88 },
    ],
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod-english-courses',
    code: 'SERV_ENG_CRS',
    nameAr: 'دورات اللغة الإنجليزية المتكاملة (English Courses)',
    nameEn: 'Comprehensive English Language Courses',
    category: 'english_courses',
    ageRange: '5+ سنوات',
    ageRangeEn: '5+ Years Old',
    timing: '4:00 م - 8:00 م',
    timingEn: '4:00 PM - 8:00 PM',
    shortDesc: 'دورات مستويات متقدمة لتعزيز الطلاقة والاستماع والتحدث والحصيلة اللغوية عبر مشاريع تفاعلية ومسرحيات.',
    shortDescEn: 'Progressive levels enhancing fluency, listening, speaking, and rich vocabulary through drama and projects.',
    fullDesc: 'رحلة تعلم متكاملة من الصفر حتى الإتقان. يتدرج الطفل عبر مستويات تفاعلية مع أنشطة مسرحية، نادي القراءة الإنجليزي، وتطبيقات عملية متزامنة مع منصة التعليم الإلكتروني لأودو 19.',
    fullDescEn: 'A complete journey from scratch to mastery. Progressive tiers featuring drama club, reading circle, and interactive assignments on Odoo 19.',
    features: [
      'مستويات متدرجة وفق الإطار الأوروبي CEFR',
      'نادي محادثة أسبوعي ونشاط درامي بالإنجليزية',
      'وصول مجاني لمنصة التعليم الإلكتروني والاختبارات',
      'شهادة معتمدة بعد اجتياز كل مستوى بنجاح'
    ],
    featuresEn: [
      'Graded levels aligned with CEFR standards',
      'Weekly English conversation club & theatre games',
      'Full access to Odoo eLearning modules & quizzes',
      'Accredited certificate upon completing each level'
    ],
    pricingOptions: [
      { id: 'eng-m-4d', durationLabel: 'شهري (4 أيام أسبوعياً)', durationLabelEn: 'Monthly (4 days/week)', hoursPerWeekOrDay: '4 أيام / أسبوعياً', hoursPerWeekOrDayEn: '4 days / week', price: 1000, totalHours: 16, pricePerHour: 62.50 },
      { id: 'eng-t-2d', durationLabel: 'فصلي Term (يومان أسبوعياً)', durationLabelEn: 'Full Term (2 days/week)', hoursPerWeekOrDay: 'فصل كامل (يومان)', hoursPerWeekOrDayEn: 'Full Term (2 days)', price: 1700, totalHours: 32, pricePerHour: 53.13 },
      { id: 'eng-t-4d', durationLabel: 'فصلي Term (4 أيام أسبوعياً)', durationLabelEn: 'Full Term (4 days/week)', hoursPerWeekOrDay: 'فصل كامل (4 أيام)', hoursPerWeekOrDayEn: 'Full Term (4 days)', price: 3000, totalHours: 64, pricePerHour: 46.88, badge: 'الأكثر شعبية', badgeEn: 'Most Popular' },
      { id: 'eng-yr-2d', durationLabel: 'سنة كاملة Full Year (يومان)', durationLabelEn: 'Full Year (2 days/week)', hoursPerWeekOrDay: 'سنة دراسية كاملة حتى 30 سبتمبر', hoursPerWeekOrDayEn: 'Complete Academic Year', price: 2500, totalHours: 96, pricePerHour: 26.04, badge: 'عرض سنوي', badgeEn: 'Annual Offer' },
      { id: 'eng-yr-4d', durationLabel: 'سنة كاملة Full Year (4 أيام)', durationLabelEn: 'Full Year (4 days/week)', hoursPerWeekOrDay: 'سنة دراسية كاملة حتى 30 سبتمبر', hoursPerWeekOrDayEn: 'Complete Academic Year', price: 5000, totalHours: 192, pricePerHour: 26.04, badge: 'الباقة الذهبية', badgeEn: 'Golden Bundle' },
    ],
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'prod-term1-packages',
    code: 'SERV_TERM1_PACK',
    nameAr: 'باقات الفصل الأول المرنة (Term 1 Packages)',
    nameEn: 'Flexible Term 1 Bundles',
    category: 'packages',
    ageRange: 'كافة الأعمار',
    ageRangeEn: 'All Ages',
    timing: 'صباحي أو مسائي حسب الاختيار',
    timingEn: 'Morning or Evening as selected',
    shortDesc: 'باقات اشتراك فصلية مخفضة تمنح ولي الأمر مرونة عالية ومزايا استثنائية مع جدول الحصص.',
    shortDescEn: 'Discounted multi-month bundles giving parents high schedule flexibility and savings.',
    fullDesc: 'توفير استثنائي عند الحجز لعدة أشهر، تشمل كافة برامج الأنشطة واكتشاف المواهب واللغة الإنجليزية مع خصم مباشر على المجموع.',
    fullDescEn: 'Exceptional savings on multi-month bookings covering talent discovery, activities, and English mastery.',
    features: [
      'سعر مخفض لكل شهر ضمن الباقة',
      'إمكانية تجميد الاشتراك لأسبوع في حال السفر أو العذر الطبي',
      'تقرير تقدم دوري وشهادة نهاية الفصل'
    ],
    featuresEn: [
      'Discounted monthly rate included in bundle',
      '1-week pause policy for travel or medical reasons',
      'Periodic progress report & end-of-term diploma'
    ],
    pricingOptions: [
      { id: 'term-1m', durationLabel: 'اشتراك شهر واحد (1 Month)', durationLabelEn: '1 Month Enrollment', hoursPerWeekOrDay: 'شهر تدريبي كامل', hoursPerWeekOrDayEn: '1 Full Training Month', price: 1150, totalHours: 20 },
      { id: 'term-2m', durationLabel: 'اشتراك شهرين (2 Months - 950/شهر)', durationLabelEn: '2 Months (950/mo)', hoursPerWeekOrDay: 'شهران دراسيان', hoursPerWeekOrDayEn: '2 Academic Months', price: 1900, totalHours: 40, badge: 'وفر 400 ريال', badgeEn: 'Save 400 SAR' },
      { id: 'term-3m', durationLabel: 'اشتراك فصل دراسي كامل (3 Months - 850/شهر)', durationLabelEn: 'Full 3 Months Term (850/mo)', hoursPerWeekOrDay: '3 أشهر دراسية كاملة', hoursPerWeekOrDayEn: '3 Full Academic Months', price: 2550, totalHours: 60, badge: 'الخيار الأذكى - وفر 900 ريال', badgeEn: 'Smart Choice - Save 900 SAR' },
    ],
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop',
  }
];

export const AVAILABLE_COUPONS: IDiscountCoupon[] = [
  {
    code: 'KIDZ-NATIONAL',
    name: 'خصم اليوم الوطني',
    discountType: 'percentage',
    value: 15,
    description: 'خصم احتفالي 15% على جميع الدورات والاشتراكات'
  },
  {
    code: 'KIDZ-SIBLINGS',
    name: 'خصم الأخوة',
    discountType: 'percentage',
    value: 10,
    description: 'خصم 10% عند تسجيل الطفل الثاني أو أكثر'
  },
  {
    code: 'KIDZ-LEVEL10',
    name: 'خصم اختبار تحديد المستوى',
    discountType: 'percentage',
    value: 10,
    description: 'مكافأة اجتياز اختبار تحديد المستوى عبر المنصة'
  },
  {
    code: 'KIDZ-SPECIAL',
    name: 'خصم خاص للأعضاء',
    discountType: 'fixed',
    value: 50,
    description: 'خصم نقدي مباشر 50 ريال سعودي'
  }
];

export class ProductService {
  public static getAllProducts(): IProduct[] {
    return PRODUCTS_CATALOG;
  }

  public static getProductById(id: string): IProduct | undefined {
    return PRODUCTS_CATALOG.find(p => p.id === id);
  }

  public static getProductsByCategory(category: string): IProduct[] {
    if (category === 'all') return PRODUCTS_CATALOG;
    return PRODUCTS_CATALOG.filter(p => p.category === category);
  }

  public static calculateDiscount(subtotal: number, coupon?: IDiscountCoupon): number {
    if (!coupon) return 0;
    if (coupon.discountType === 'percentage') {
      return Math.round((subtotal * coupon.value) / 100);
    }
    return Math.min(subtotal, coupon.value);
  }

  public static validateCoupon(code: string): IDiscountCoupon | null {
    const cleanCode = code.trim().toUpperCase();
    return AVAILABLE_COUPONS.find(c => c.code.toUpperCase() === cleanCode) || null;
  }
}
