import { IFaqItem, FaqCategory } from '../types';

export const FAQ_DATA: IFaqItem[] = [
  // ==================== ENROLLMENT ====================
  {
    id: 'faq-enr-1',
    category: 'enrollment',
    categoryNameAr: 'التسجيل والقبول',
    categoryNameEn: 'Enrollment & Admissions',
    questionAr: 'كيف يمكنني تسجيل طفلي في الأكاديمية وما هي المتطلبات؟',
    questionEn: 'How can I enroll my child in the academy and what are the requirements?',
    answerAr: 'التسجيل متاح بسهولة عبر المتجر الإلكتروني المرتبط بنظام أودو 19، أو بزيارة مقرنا في مجمع سي فرونت بكورنيش القطيف. المتطلبات بسيطة: تعبئة بيانات الطفل (الاسم، العمر، وأي ملاحظات صحية أو غذائية)، وإرفاق صورة بطاقة العائلة أو شهادة الميلاد، وكرت التطعيمات لبرامج الضيافة النهارية.',
    answerEn: 'Enrollment is seamless through our Odoo 19-powered web store, or by visiting our Sea Front Mall campus at Qatif Corniche. The requirements are simple: complete your child’s information (name, age, health/dietary notes), and provide a copy of the family record/birth certificate and vaccination card for daycare programs.',
    actionType: 'shop',
    actionLabelAr: 'تصفح البرامج والتسجيل',
    actionLabelEn: 'Browse Programs & Enroll'
  },
  {
    id: 'faq-enr-2',
    category: 'enrollment',
    categoryNameAr: 'التسجيل والقبول',
    categoryNameEn: 'Enrollment & Admissions',
    questionAr: 'ما هي الفئات العمرية المقبولة في برامج الأكاديمية المختلفة؟',
    questionEn: 'What age groups are accepted across the academy programs?',
    answerAr: 'نستقبل الأطفال من عمر سنتين حتى 12 سنة مقسمين إلى مسارات محددة: برامج الضيافة النهارية والمنتسوري المبكر (2 - 5 سنوات)، تأسيس اللغة الإنجليزية وأصوات الفونكس (4 - 8 سنوات)، ومسار دعم المناهج والمدارس العالمية ونادي المحادثة والمسرح (6 - 12 سنة).',
    answerEn: 'We welcome children aged 2 to 12 years categorized into tailored developmental tracks: Early Daycare & Montessori (2 - 5 years), English Jolly Phonics Foundation (4 - 8 years), and International School Academic Support & Conversation Theatre Club (6 - 12 years).',
    actionType: 'placement',
    actionLabelAr: 'اختبار تحديد المستوى المناسب',
    actionLabelEn: 'Check Appropriate Track'
  },
  {
    id: 'faq-enr-3',
    category: 'enrollment',
    categoryNameAr: 'التسجيل والقبول',
    categoryNameEn: 'Enrollment & Admissions',
    questionAr: 'هل تتوفر خيارات اشتراك مرنة (أسبوعية / شهرية / فصلية) وخصومات للأخوة؟',
    questionEn: 'Are flexible subscription options (weekly / monthly / term) and sibling discounts available?',
    answerAr: 'نعم، نوفر باقات مرنة تناسب احتياجات كل عائلة: اشتراك أسبوعي للرعاية المؤقتة، اشتراك شهري، واشتراك فصلي شامل مع توفير خصم خاص بنسبة 10% للأخوة والمسجلين لأكثر من برنامج، بالإضافة إلى كوبون الخصم الترويجي (KIDZ-LEVEL10) الذي يمنحه اختبار تحديد المستوى الذكي.',
    answerEn: 'Yes, we provide flexible subscription plans tailored to every family: weekly drop-in hospitality, monthly memberships, and full-term packages. We also grant a 10% sibling discount and multi-program bundles, alongside our promotional code (KIDZ-LEVEL10) awarded after completing the digital placement test.',
    actionType: 'whatsapp',
    actionLabelAr: 'طلب تسعيرة خاصة للأخوة',
    actionLabelEn: 'Request Sibling Quotation'
  },
  {
    id: 'faq-enr-4',
    category: 'enrollment',
    categoryNameAr: 'التسجيل والقبول',
    categoryNameEn: 'Enrollment & Admissions',
    questionAr: 'هل يمكننا زيارة الأكاديمية وحجز جلسة تعريفية قبل الدفع؟',
    questionEn: 'Can we visit the academy for an orientation tour before finalizing payment?',
    answerAr: 'بالتأكيد، نرحب بزيارة أولياء الأمور وأطفالهم إلى مقرنا بمجمع سي فرونت بكورنيش القطيف للتعرف على القاعات والاطلاع على بيئة العمل ومقابلة المعلمات مجاناً. يمكنك التنسيق المسبق مع خدمة العملاء عبر الواتساب لاختيار الوقت المناسب.',
    answerEn: 'Absolutely! We warmly welcome parents and their little ones to tour our facility at Sea Front Mall, inspect the classrooms, and meet our teachers free of charge. You can coordinate your visit via WhatsApp at any time.',
    actionType: 'whatsapp',
    actionLabelAr: 'تنسيق زيارة تعريفية',
    actionLabelEn: 'Book Orientation Visit'
  },

  // ==================== CLASSES & ENVIRONMENT ====================
  {
    id: 'faq-cls-1',
    category: 'classes',
    categoryNameAr: 'هيكل الصفوف والبيئة التعليمية',
    categoryNameEn: 'Class Structure & Environment',
    questionAr: 'كم عدد الأطفال في المجموعة الواحدة وما هي نسبة المعلمات للطلاب؟',
    questionEn: 'What is the student-to-teacher ratio and group capacity per class?',
    answerAr: 'نلتزم بنظام المجموعات الصغيرة (Boutique Classes) لضمان أعلى مستويات الرعاية والاهتمام الفردي: من 6 إلى 8 أطفال كحد أقصى في فصول الفونكس والتعليم، مع وجود معلمة رئيسية معتمدة ومساعدة لكل مجموعة في برامج الرعاية والضيافة النهارية.',
    answerEn: 'We adhere to small boutique class sizes ensuring focused individual attention: a maximum of 6 to 8 children per group in phonics and academic sessions, staffed by a certified lead instructor plus an assistant for early daycare groups.',
    actionType: 'schedule',
    actionLabelAr: 'عرض جدول الحضور',
    actionLabelEn: 'View Class Timetable'
  },
  {
    id: 'faq-cls-2',
    category: 'classes',
    categoryNameAr: 'هيكل الصفوف والبيئة التعليمية',
    categoryNameEn: 'Class Structure & Environment',
    questionAr: 'ما هي مواعيد وأوقات الدوام اليومي في فرع سي فرونت بالقطيف؟',
    questionEn: 'What are the daily operating hours at our Sea Front Qatif campus?',
    answerAr: 'تعمل الأكاديمية على فترتين: الفترة الصباحية (7:30 صباحاً - 1:30 ظهراً) مخصصة للضيافة والرعاية النهارية المبكرة والمنتسوري، والفترة المسائية (4:00 عصراً - 8:30 مساءً) مخصصة لدورات تأسيس الفونكس، دعم المناهج المدرسية، ومسرح الطفل ونادي المحادثة.',
    answerEn: 'The academy operates across two dedicated shifts: Morning Session (7:30 AM - 1:30 PM) dedicated to early daycare and sensory Montessori activities, and Afternoon/Evening Session (4:00 PM - 8:30 PM) dedicated to Phonics courses, school homework support, and speaking theatre clubs.',
    actionType: 'schedule',
    actionLabelAr: 'استعراض أوقات الجلسات',
    actionLabelEn: 'Explore Shift Hours'
  },
  {
    id: 'faq-cls-3',
    category: 'classes',
    categoryNameAr: 'هيكل الصفوف والبيئة التعليمية',
    categoryNameEn: 'Class Structure & Environment',
    questionAr: 'ما هي معايير السلامة والنظافة المطبقة داخل الفصول ومجمع سي فرونت؟',
    questionEn: 'What safety and sanitization standards are implemented inside classrooms?',
    answerAr: 'سلامة أطفالكم أولويتنا القصوى: قاعات مجهزة بأثاث ذي زوايا دائرية آمنة، أرضيات ماصة للصدمات، نظام مراقبة تلفزيونية متواصل (CCTV)، أجهزة تعقيم هواء متطورة بتقنية HEPA، فحص حراري دوري، وتوثيق رقمي للدخول والخروج عبر نظام أودو للحضور (hr_attendance).',
    answerEn: 'Your child’s well-being is our top priority: rounded ergonomic child-safe furniture, cushioned shock-absorbent flooring, 24/7 CCTV monitoring, medical-grade HEPA air purifiers, and digital check-in/out verification synced with Odoo attendance (hr_attendance).',
    actionType: 'whatsapp',
    actionLabelAr: 'استفسار عن اشتراطات السلامة',
    actionLabelEn: 'Inquire About Safety'
  },
  {
    id: 'faq-cls-4',
    category: 'classes',
    categoryNameAr: 'هيكل الصفوف والبيئة التعليمية',
    categoryNameEn: 'Class Structure & Environment',
    questionAr: 'كيف يتابع ولي الأمر تقدم طفله وملاحظات المعلمات اليومية؟',
    questionEn: 'How can parents monitor their child’s daily progress and teacher remarks?',
    answerAr: 'من خلال "بوابة ولي الأمر" المرتبطة بنظام Odoo 19 Portal؛ حيث يتمكن الأب والأم من متابعة سجل الحضور والانصراف اللحظي، الملاحظات السلوكية والأكاديمية، الصور التذكارية للأنشطة، والتقارير الدورية لنقاط قوة وتطور مهارات الطفل.',
    answerEn: 'Through our dedicated Odoo 19 Parent Portal; parents can view live check-in timestamps, behavior and learning milestones, activity photos, and quarterly assessment reports outlining their child’s progress.',
    actionType: 'schedule',
    actionLabelAr: 'سجل الحضور والأنشطة',
    actionLabelEn: 'Attendance & Reports'
  },

  // ==================== PLACEMENT & CURRICULUM ====================
  {
    id: 'faq-plc-1',
    category: 'placement',
    categoryNameAr: 'اختبار تحديد المستوى والمناهج',
    categoryNameEn: 'Placement Test & Curriculum',
    questionAr: 'كيف يعمل اختبار تحديد المستوى الرقمي وهل هو مجاني؟',
    questionEn: 'How does the digital placement test work and is it free?',
    answerAr: 'نعم، الاختبار مجاني تماماً ومصمم بأسلوب تفاعلي مرح يشبه الألعاب لا يتجاوز 3 دقائق. يقيس الاختبار معرفة الطفل بأصوات الحروف، التمييز السمعي، واستيعاب المفردات الإنجليزية، ويقدم توصية دقيقة بالمسار الأنسب لطفلك مع كوبون خصم فوري 10% (KIDZ-LEVEL10).',
    answerEn: 'Yes! The assessment is 100% free and designed as a fun, stress-free 3-minute quiz. It evaluates auditory phonics, letter-sound recognition, and vocabulary, delivering an instant customized track recommendation along with a 10% discount coupon (KIDZ-LEVEL10).',
    actionType: 'placement',
    actionLabelAr: 'بدء اختبار تحديد المستوى',
    actionLabelEn: 'Start Free Assessment'
  },
  {
    id: 'faq-plc-2',
    category: 'placement',
    categoryNameAr: 'اختبار تحديد المستوى والمناهج',
    categoryNameEn: 'Placement Test & Curriculum',
    questionAr: 'ما هو المنهج المعتمد في تعليم أصوات اللغة الإنجليزية وقراءتها؟',
    questionEn: 'What certified curriculum is adopted for English phonics and reading?',
    answerAr: 'نعتمد منهج الفونكس البريطاني التفاعلي (Jolly Phonics Synthetic Methodology)، وهو المنهج العالمي الأقوى في تدريس 42 صوتاً للغة الإنجليزية بالحركات والقصص والأغاني، ما يمكّن الطفل من تهجئة وقراءة أي كلمة مجهولة باستقلالية تامة دون حفظ تلقيني أعمى.',
    answerEn: 'We implement the renowned British Jolly Phonics synthetic phonics framework, globally acclaimed for teaching the 42 letter sounds through multi-sensory actions, storytelling, and musical rhymes, empowering children to decode and read unfamiliar words independently.',
    actionType: 'shop',
    actionLabelAr: 'استعراض حقائب الفونكس',
    actionLabelEn: 'Explore Phonics Kits'
  },
  {
    id: 'faq-plc-3',
    category: 'placement',
    categoryNameAr: 'اختبار تحديد المستوى والمناهج',
    categoryNameEn: 'Placement Test & Curriculum',
    questionAr: 'هل تقدم الأكاديمية دعماً للطلاب الدارسين في المدارس العالمية (International)؟',
    questionEn: 'Does the academy offer curriculum support for International School students?',
    answerAr: 'نعم، لدينا مسار متخصص لدعم طلاب المناهج الدولية (American & British Curriculums مثل Cambridge و Oxford). نركز على مهارات الفهم القرائي (Reading Comprehension)، التعبير الإنشائي، مصطلحات العلوم والرياضيات بالإنجليزية، وتأهيل الطلاب لاختبارات القبول والتقييمات المدرسية.',
    answerEn: 'Yes, we provide specialized tutoring and curriculum support for international school students (Cambridge & American frameworks). We focus on reading comprehension, creative writing, science terminology in English, and prep for school exams and entrance interviews.',
    actionType: 'placement',
    actionLabelAr: 'تقييم منهج المدارس العالمية',
    actionLabelEn: 'Assess International Level'
  },
  {
    id: 'faq-plc-4',
    category: 'placement',
    categoryNameAr: 'اختبار تحديد المستوى والمناهج',
    categoryNameEn: 'Placement Test & Curriculum',
    questionAr: 'ما هو مسرح الطفل وكيف يساعد في تطوير المحادثة والطلاقة؟',
    questionEn: 'What is Child Theatre and how does it foster English conversational fluency?',
    answerAr: 'مسرح الطفل ونادي المحادثة (Drama & Speaking Club) هو نشاط تطبيقي ممتع يرتدي فيه الأطفال أزياء الشخصيات ويمثلون مشاهد حوارية وقصصاً بالإنجليزية. يساعد هذا الأسلوب على كسر حاجز الخجل، وتعزيز نبرة الصوت الواثقة، وتثبيت التراكيب اللغوية بسلاسة ومرح أمام الجمهور.',
    answerEn: 'Our Kids Drama & Speaking Club is an experiential program where children wear character costumes and reenact conversational English plays. It breaks shyness, strengthens public speaking posture, and naturally instills vocabulary through roleplay.',
    actionType: 'shop',
    actionLabelAr: 'التسجيل في نادي المسرح',
    actionLabelEn: 'Join Theatre Club'
  }
];

export class FaqService {
  static getAll(): IFaqItem[] {
    return FAQ_DATA;
  }

  static getByCategory(category: FaqCategory): IFaqItem[] {
    if (category === 'all') return FAQ_DATA;
    return FAQ_DATA.filter(item => item.category === category);
  }

  static search(query: string, language: 'ar' | 'en'): IFaqItem[] {
    const q = query.trim().toLowerCase();
    if (!q) return FAQ_DATA;

    return FAQ_DATA.filter(item => {
      const qText = language === 'en' ? item.questionEn.toLowerCase() : item.questionAr.toLowerCase();
      const aText = language === 'en' ? item.answerEn.toLowerCase() : item.answerAr.toLowerCase();
      const catText = language === 'en' ? item.categoryNameEn.toLowerCase() : item.categoryNameAr.toLowerCase();
      return qText.includes(q) || aText.includes(q) || catText.includes(q);
    });
  }
}
