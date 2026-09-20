import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ar' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRTL: boolean;
  dir: 'rtl' | 'ltr';
  t: (key: string, fallback?: string) => string;
}

export const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Brand & General
    'brand.name': 'أكاديمية كريستينا كيدز',
    'brand.subtitle': 'لاكتشاف مواهب الطفل وتعليم الإنجليزية',
    'brand.location': 'القطيف • مجمع سي فرونت (Sea Front)',
    'brand.phone': '+966 56 882 6618',
    'brand.whatsapp': 'واتساب الأكاديمية',
    'brand.contactUs': 'تواصل مع إدارة الأكاديمية',
    'currency': 'ر.س',
    'currency.full': 'ريال سعودي',

    // Top Bar & Odoo Navigation
    'odoo.erp': 'Odoo 19 ERP',
    'odoo.dashboard': 'لوحة التحكم',
    'odoo.parentPortal': 'بوابة ولي الأمر',
    'odoo.cart': 'السلة',
    'odoo.simulationTitle': 'محاكاة موديولات أودو 19 الرسمية',
    'lang.switcher': 'مبدل اللغة',
    'lang.arabic': 'العربية',
    'lang.english': 'English',
    'lang.switchToEn': 'التبديل إلى الواجهة الإنجليزية',
    'lang.switchToAr': 'التبديل إلى الواجهة العربية',
    'lang.active': 'مفعّل',

    // Main Navigation
    'nav.home': 'الرئيسية',
    'nav.shop': 'المتجر والدورات',
    'nav.elearning': 'التعليم الإلكتروني',
    'nav.events': 'الفعاليات والأنشطة',
    'nav.placement': 'تحديد المستوى',
    'nav.schedule': 'جدول الحضور',
    'nav.staff': 'فريق المعلمين',
    'nav.placementCta': 'اختبار موهبة طفلك',
    'nav.discountBadge': 'خصم 10%',
    'nav.menu': 'القائمة',
    'nav.odooModules': 'أقسام وموديولات أودو 19',

    // Hero Section
    'hero.badge': 'أكاديمية كريستينا كيدز • مجمع سي فرونت بالقطيف',
    'hero.title.part1': 'نكتشف',
    'hero.title.highlight1': 'موهبة طفلك',
    'hero.title.part2': 'ونبني طلاقته في',
    'hero.title.highlight2': 'اللغة الإنجليزية',
    'hero.title.part3': 'بحب وإبداع',
    'hero.desc': 'في كريستينا كيدز، نؤمن بأن كل طفل عالم من المواهب. نوفر لطفلك بيئة تعليمية دافئة تجمع بين متعة التعلم، برامج الفونكس التفاعلية، الرعاية النهارية (الضيافة)، ودعم المناهج المدرسية العالمية والأهلية، عبر منصة متوافقة بالكامل مع موديولات أودو 19.',
    'hero.cta.placement': 'ابدأ اختبار تحديد المستوى (خصم 10%)',
    'hero.cta.courses': 'تصفح الدورات والأسعار',
    'hero.cta.whatsapp': 'استشارة عبر الواتساب',
    'hero.trust.safe': 'بيئة آمنة ومعتمدة',
    'hero.trust.licensed': 'موقع رسمي في سي فرونت',
    'hero.trust.modern': 'أحدث مناهج الفونكس',

    // Home Highlights & Values
    'home.stats.students': 'طالب وطالبة تخرجوا',
    'home.stats.rating': 'تقييم أولياء الأمور',
    'home.stats.experience': 'سنوات خبرة تعليمية',
    'home.stats.programs': 'برامج متخصصة معتمدة',
    'home.tracks.title': 'المسارات التعليمية المعتمدة في الأكاديمية',
    'home.tracks.subtitle': 'برامج مخصصة لكل فئة عمرية تراعي الفروق الفردية وتصنع قادة الغد',
    'home.interactive.title': 'تعليم تفاعلي ينبض بالحياة والمرح',
    'home.interactive.subtitle': 'نحوّل دراسة الإنجليزية من حفظ تقليدي إلى تجربة ساحرة من خلال اللعب، المسرح، والأفلام والقصص المصورة',
    'home.mascot.banner': 'صديق الأطفال "كريس" يرافق طفلك خطوة بخطوة في رحلة تعلم الإنجليزية!',
    'home.testimonials.title': 'ماذا يقول أولياء الأمور عن كريستينا كيدز بالقطيف؟',
    'home.testimonials.subtitle': 'تجارب حقيقية من مجتمعنا المتميز',

    // Shop View (website_sale)
    'shop.header.title': 'متجر البرامج والدورات (Odoo eCommerce)',
    'shop.header.subtitle': 'اختر البرنامج المناسب لطفلك، وحدد الباقة المفضلة (أسبوعي، شهري، فصلي)، مع إمكانية الدفع والتسجيل الفوري',
    'shop.filter.all': 'جميع البرامج',
    'shop.filter.hosting': 'الضيافة والرعاية (2-5 سنوات)',
    'shop.filter.foundation': 'تأسيس اللغة الإنجليزية (Phonics)',
    'shop.filter.school_support': 'دعم المناهج (عالمية / أهلية)',
    'shop.filter.english_courses': 'دورات المحادثة والطلاقة',
    'shop.filter.packages': 'الباقات الشاملة والمكثفة',
    'shop.product.age': 'العمر المناسب',
    'shop.product.timing': 'أوقات الدوام',
    'shop.product.startingFrom': 'يبدأ من',
    'shop.product.subscribeNow': 'تفاصيل وباقات الاشتراك',
    'shop.product.popular': 'الأكثر طلباً',
    'shop.modal.title': 'حجز وتسجيل في البرنامج',
    'shop.modal.selectTier': 'اختر الباقة / المدة الزمنية المناسبة:',
    'shop.modal.childName': 'اسم الطفل / الطالب:',
    'shop.modal.childAge': 'عمر الطفل (سنوات):',
    'shop.modal.addToCart': 'إضافة إلى سلة التسجيل',
    'shop.modal.hours': 'ساعة',
    'shop.modal.ratePerHour': 'معدل الساعة:',

    // Cart Drawer
    'cart.title': 'سلة التسجيلات والاشتراكات',
    'cart.empty.title': 'السلة فارغة حالياً',
    'cart.empty.subtitle': 'استكشف برامجنا المميزة وأضف الدورة المناسبة لطفلك',
    'cart.coupon.placeholder': 'أدخل كود الخصم (مثال: KRISTINA10)',
    'cart.coupon.apply': 'تطبيق الكود',
    'cart.coupon.applied': 'تم تطبيق الخصم بنجاح!',
    'cart.coupon.invalid': 'كود الخصم غير صالح',
    'cart.subtotal': 'المجموع الفرعي',
    'cart.discount': 'قيمة الخصم',
    'cart.total': 'المجموع الإجمالي',
    'cart.checkout': 'إتمام التسجيل والدفع الفوري (Odoo Checkout)',
    'cart.clear': 'تفريغ السلة',
    'cart.student': 'الطفل:',
    'cart.years': 'سنوات',
    'cart.checkoutSuccess.title': 'تم استلام طلب التسجيل بنجاح! 🎉',
    'cart.checkoutSuccess.desc': 'تم إنشاء أمر البيع وحجز مقعد طفلك في نظام أودو 19. سيتواصل معك فريق الأكاديمية لتأكيد موعد البدء وتفاصيل الحضور.',
    'cart.close': 'إغلاق',

    // eLearning View (website_slides)
    'elearning.header.title': 'منصة التعليم الإلكتروني (website_slides)',
    'elearning.header.subtitle': 'دروس تفاعلية، بطاقات صوتية، وألعاب تعليمية لتعزيز طلاقة طفلك في المنزل بالتكامل مع حصص الأكاديمية',
    'elearning.courseTitle': 'اللغة الإنجليزية للأطفال – English for Kids',
    'elearning.rating': 'تقييم',
    'elearning.students': 'طالب مسجل',
    'elearning.lessonsCount': 'درساً تفاعلياً',
    'elearning.certificate': 'شهادة إتقان معتمدة',
    'elearning.lessonsList': 'محتوى الدورة والدروس',
    'elearning.listenPronunciation': 'استمع للنطق الصوتي',
    'elearning.takeQuiz': 'بدء الاختبار التفاعلي',
    'elearning.quizCompleted': 'أحسنت! أتممت الاختبار بنجاح 🎉',
    'elearning.congrats': 'مبروك! لقد حصلت على وسام الإتقان ونجمتك الذهبية 🌟',
    'elearning.nextLesson': 'الدرس التالي',
    'elearning.prevLesson': 'الدرس السابق',

    // Events View (website_event)
    'events.header.title': 'الفعاليات والأنشطة (website_event)',
    'events.header.subtitle': 'مهرجانات ومسابقات مواهب الطفل في مجمع سي فرونت بالقطيف، وحجز أجنحة المعارض والتذاكر',
    'events.date': 'التاريخ:',
    'events.time': 'الوقت:',
    'events.location': 'الموقع:',
    'events.status.announced': 'معلن عنه ومتاح للحجز',
    'events.status.reserved': 'محجوز بالكامل',
    'events.tickets.title': 'تذاكر الحضور وورش العمل',
    'events.tickets.seats': 'مقعد متاح',
    'events.tickets.book': 'حجز التذكرة',
    'events.booths.title': 'حجز أجنحة الفعالية (Event Booths)',
    'events.booths.available': 'أجنحة متبقية',
    'events.booths.book': 'حجز الجناح',
    'events.bookingSuccess': 'تم تأكيد حجزك في الفعالية بنجاح!',

    // Attendance & Schedule View (hr_attendance)
    'schedule.header.title': 'جدول الحصص وسجل الحضور (hr_attendance)',
    'schedule.header.subtitle': 'محاكاة لنظام تسجيل الحضور والانصراف لمتابعة دوام الطفل ومواعيد الحصص بأكاديمية كريستينا كيدز',
    'schedule.kiosk.title': 'جهاز الحضور الذكي (Attendance Kiosk)',
    'schedule.kiosk.enterName': 'أدخل اسم الطفل لتسجيل الحضور:',
    'schedule.kiosk.checkIn': 'تسجيل دخول (Check In)',
    'schedule.kiosk.checkOut': 'تسجيل خروج (Check Out)',
    'schedule.rooms.title': 'مواعيد الفترات والقاعات الحالية',
    'schedule.status.in_session': 'جارية الآن',
    'schedule.status.upcoming': 'قادمة',
    'schedule.status.open': 'متاحة للتسجيل',
    'schedule.capacity': 'الطاقة الاستيعابية:',
    'schedule.studentsCount': 'طالباً حاضراً',
    'schedule.recentLog': 'سجل الحضور اليومي اللحظي',
    'schedule.status.present': 'حاضر في الموعد',
    'schedule.status.late': 'تأخر بسيط',
    'schedule.status.checked_out': 'انصرف مع ولي أمره',

    // Staff View
    'staff.header.title': 'الكادر التعليمي والتربوي',
    'staff.header.subtitle': 'نخبة من المعلمات والمتخصصين في رياض الأطفال، مناهج الفونكس، والدعم الأكاديمي الدولي بالقطيف',
    'staff.experience': 'سنوات خبرة',
    'staff.specialties': 'المجالات التخصصية:',
    'staff.qualifications': 'المؤهلات العلمية:',
    'staff.contact': 'استشارة المعلم عبر الإدارة',

    // Placement Test View
    'placement.header.title': 'اختبار تحديد المستوى واكتشاف موهبة الطفل',
    'placement.header.subtitle': 'اختبار ذكي وتفاعلي ممتع يقيس قدرات طفلك في الحروف، الألوان، الأصوات، ويمنحك كود خصم فوري 10%!',
    'placement.start.title': 'بيانات الطفل قبل البدء:',
    'placement.childName': 'اسم طفلك البطل:',
    'placement.childAge': 'عمر الطفل:',
    'placement.startBtn': 'ابدأ الاختبار المرح الآن 🚀',
    'placement.question': 'السؤال',
    'placement.of': 'من',
    'placement.nextQuestion': 'السؤال التالي',
    'placement.finishTest': 'عرض النتيجة واستلام الخصم',
    'placement.result.congrats': 'رائع جداً! تم تحليل إجابات طفلك 🎉',
    'placement.result.score': 'الدرجة المحققة:',
    'placement.result.recommended': 'المسار الموصى به:',
    'placement.result.couponTitle': 'هدية إتمام الاختبار: كود خصم 10% فوري',
    'placement.result.applyAndShop': 'تطبيق الخصم والانتقال لمتجر الدورات',

    // Footer
    'footer.value': 'نكتشف موهبة طفلك ونبني طلاقته في اللغة الإنجليزية من خلال التعليم الممتع والتفاعلي!',
    'footer.startTestNow': 'ابدأ اختبار تحديد المستوى الآن مجاناً',
    'footer.about': 'أكاديمية تعليمية وترفيهية متخصصة في اكتشاف مواهب الأطفال ورعايتهم، وتقديم مناهج لغة إنجليزية تفاعلية، وبرامج الضيافة، ودعم المناهج المدرسية بالقطيف.',
    'footer.quickLinks': 'موديولات المنصة (Odoo 19)',
    'footer.programs': 'برامج ومسارات الأكاديمية',
    'footer.contact': 'التواصل والموقع الرسمي',
    'footer.vat': 'الرقم الضريبي (VAT):',
    'footer.cr': 'السجل التجاري:',
    'footer.allRights': 'جميع الحقوق محفوظة © لأكاديمية كريستينا كيدز (Kristina Kidz Academy).',
    'footer.odooCertified': 'نظام محاكي ومعتمد لموديولات Odoo 19 ERP التعليمية',

    // Language Toggle
    'lang.toggle': 'English',
    'lang.current': 'العربية'
  },
  en: {
    // Brand & General
    'brand.name': 'Kristina Kidz Academy',
    'brand.subtitle': 'Discover Child Talents & English Mastery',
    'brand.location': 'Qatif • Sea Front Complex, Eastern Province',
    'brand.phone': '+966 56 882 6618',
    'brand.whatsapp': 'Academy WhatsApp',
    'brand.contactUs': 'Contact Academy Administration',
    'currency': 'SAR',
    'currency.full': 'Saudi Riyals',

    // Top Bar & Odoo Navigation
    'odoo.erp': 'Odoo 19 ERP',
    'odoo.dashboard': 'Admin Dashboard',
    'odoo.parentPortal': 'Parent Portal',
    'odoo.cart': 'Cart',
    'odoo.simulationTitle': 'Official Odoo 19 Modules Simulation',
    'lang.switcher': 'Language Switcher',
    'lang.arabic': 'العربية',
    'lang.english': 'English',
    'lang.switchToEn': 'Switch to English Interface',
    'lang.switchToAr': 'Switch to Arabic Interface',
    'lang.active': 'Active',

    // Main Navigation
    'nav.home': 'Home',
    'nav.shop': 'Shop & Courses',
    'nav.elearning': 'eLearning & Lessons',
    'nav.events': 'Events & Activities',
    'nav.placement': 'Level & Talent Test',
    'nav.schedule': 'Attendance & Schedule',
    'nav.staff': 'Our Teachers',
    'nav.placementCta': 'Discover Child Talent',
    'nav.discountBadge': '10% OFF',
    'nav.menu': 'Menu',
    'nav.odooModules': 'Odoo 19 Modules & Apps',

    // Hero Section
    'hero.badge': 'Kristina Kidz Academy • Sea Front Complex, Qatif',
    'hero.title.part1': 'We Discover',
    'hero.title.highlight1': 'Your Child’s Talent',
    'hero.title.part2': '& Build Fluency in',
    'hero.title.highlight2': 'English',
    'hero.title.part3': 'with Love & Joy',
    'hero.desc': 'At Kristina Kidz, we believe every child is a world of potential. We provide a warm, nurturing environment combining interactive learning, certified Phonics programs, day hosting (daycare), and international & private school curriculum support, fully synchronized with Odoo 19 modules.',
    'hero.cta.placement': 'Take Talent Test (10% OFF)',
    'hero.cta.courses': 'Explore Courses & Pricing',
    'hero.cta.whatsapp': 'Consult via WhatsApp',
    'hero.trust.safe': 'Safe & Certified Space',
    'hero.trust.licensed': 'Sea Front Mall Location',
    'hero.trust.modern': 'Modern Phonics Curriculum',

    // Home Highlights & Values
    'home.stats.students': 'Graduated Students',
    'home.stats.rating': 'Parent Satisfaction Rating',
    'home.stats.experience': 'Years of Excellence',
    'home.stats.programs': 'Accredited Tracks',
    'home.tracks.title': 'Accredited Educational Tracks at the Academy',
    'home.tracks.subtitle': 'Tailored programs for each age group, respecting individual learning styles and empowering tomorrow’s leaders',
    'home.interactive.title': 'Interactive Learning Bursting with Fun & Life',
    'home.interactive.subtitle': 'We transform English learning from rote memorization into a captivating journey of games, theater, stories, and audio-visual discovery',
    'home.mascot.banner': 'Meet "Kris", your child’s enthusiastic buddy guiding every step of their English learning adventure!',
    'home.testimonials.title': 'What Parents in Qatif Say About Kristina Kidz',
    'home.testimonials.subtitle': 'Genuine experiences from our thriving learning community',

    // Shop View (website_sale)
    'shop.header.title': 'Courses & Programs Catalog (Odoo eCommerce)',
    'shop.header.subtitle': 'Choose the ideal program for your child, select your preferred duration (Weekly, Monthly, Term), with instant enrollment and checkout',
    'shop.filter.all': 'All Programs',
    'shop.filter.hosting': 'Daycare & Hosting (2-5 yrs)',
    'shop.filter.foundation': 'English Foundation (Phonics)',
    'shop.filter.school_support': 'School Support (Int’l / National)',
    'shop.filter.english_courses': 'Speaking & Fluency Clubs',
    'shop.filter.packages': 'Comprehensive Value Bundles',
    'shop.product.age': 'Target Age',
    'shop.product.timing': 'Class Timings',
    'shop.product.startingFrom': 'Starting from',
    'shop.product.subscribeNow': 'View Plans & Enroll',
    'shop.product.popular': 'Most Popular',
    'shop.modal.title': 'Program Enrollment & Plan Selection',
    'shop.modal.selectTier': 'Choose the Duration / Tier:',
    'shop.modal.childName': 'Child / Student Full Name:',
    'shop.modal.childAge': 'Child Age (Years):',
    'shop.modal.addToCart': 'Add to Enrollment Cart',
    'shop.modal.hours': 'Hours',
    'shop.modal.ratePerHour': 'Hourly Rate:',

    // Cart Drawer
    'cart.title': 'Enrollment & Checkout Cart',
    'cart.empty.title': 'Your Cart is Currently Empty',
    'cart.empty.subtitle': 'Explore our programs and enroll your child in an enriching journey',
    'cart.coupon.placeholder': 'Enter Promo Code (e.g., KRISTINA10)',
    'cart.coupon.apply': 'Apply Code',
    'cart.coupon.applied': 'Discount applied successfully!',
    'cart.coupon.invalid': 'Invalid promo code',
    'cart.subtotal': 'Subtotal',
    'cart.discount': 'Discount Amount',
    'cart.total': 'Grand Total',
    'cart.checkout': 'Complete Enrollment (Odoo Checkout)',
    'cart.clear': 'Clear Cart',
    'cart.student': 'Student:',
    'cart.years': 'yrs old',
    'cart.checkoutSuccess.title': 'Registration Order Received! 🎉',
    'cart.checkoutSuccess.desc': 'A sales order has been generated and a seat reserved in our Odoo 19 system. Our team will contact you shortly to confirm start dates and orientation.',
    'cart.close': 'Close',

    // eLearning View (website_slides)
    'elearning.header.title': 'eLearning Platform (website_slides)',
    'elearning.header.subtitle': 'Interactive lessons, speaking cards, and quizzes reinforcing your child’s fluency at home in harmony with classroom sessions',
    'elearning.courseTitle': 'English for Kids - Interactive Journey',
    'elearning.rating': 'Rating',
    'elearning.students': 'Enrolled Students',
    'elearning.lessonsCount': 'Interactive Lessons',
    'elearning.certificate': 'Certificate Available',
    'elearning.lessonsList': 'Course Content & Lessons',
    'elearning.listenPronunciation': 'Listen to Pronunciation',
    'elearning.takeQuiz': 'Start Interactive Quiz',
    'elearning.quizCompleted': 'Great Job! Quiz Completed 🎉',
    'elearning.congrats': 'Congratulations! You earned an Achievement Badge and a Gold Star 🌟',
    'elearning.nextLesson': 'Next Lesson',
    'elearning.prevLesson': 'Previous Lesson',

    // Events View (website_event)
    'events.header.title': 'Events & Community Activities (website_event)',
    'events.header.subtitle': 'Child talent festivals, speech competitions at Sea Front Complex Qatif, booth bookings, and admission tickets',
    'events.date': 'Date:',
    'events.time': 'Time:',
    'events.location': 'Location:',
    'events.status.announced': 'Announced & Open for Booking',
    'events.status.reserved': 'Fully Booked',
    'events.tickets.title': 'Admission Tickets & Workshops',
    'events.tickets.seats': 'seats available',
    'events.tickets.book': 'Book Ticket',
    'events.booths.title': 'Event Booth Reservations',
    'events.booths.available': 'booths remaining',
    'events.booths.book': 'Reserve Booth',
    'events.bookingSuccess': 'Your booking has been successfully confirmed!',

    // Attendance & Schedule View (hr_attendance)
    'schedule.header.title': 'Timetable & Attendance Log (hr_attendance)',
    'schedule.header.subtitle': 'Simulation of Kristina Kidz Academy kiosk check-in/out and schedule tracking',
    'schedule.kiosk.title': 'Smart Attendance Kiosk',
    'schedule.kiosk.enterName': 'Enter child name to check in/out:',
    'schedule.kiosk.checkIn': 'Check In',
    'schedule.kiosk.checkOut': 'Check Out',
    'schedule.rooms.title': 'Active Timetable & Rooms',
    'schedule.status.in_session': 'In Session',
    'schedule.status.upcoming': 'Upcoming',
    'schedule.status.open': 'Open for Enrollment',
    'schedule.capacity': 'Capacity:',
    'schedule.studentsCount': 'students attending',
    'schedule.recentLog': 'Live Daily Attendance Record',
    'schedule.status.present': 'Present on Time',
    'schedule.status.late': 'Short Delay',
    'schedule.status.checked_out': 'Checked Out with Parent',

    // Staff View
    'staff.header.title': 'Our Teaching & Educational Staff',
    'staff.header.subtitle': 'Certified educators specializing in early childhood, Jolly Phonics, and international curriculum support in Qatif',
    'staff.experience': 'Years Experience',
    'staff.specialties': 'Specialties:',
    'staff.qualifications': 'Qualifications:',
    'staff.contact': 'Consult Teacher via Admin',

    // Placement Test View
    'placement.header.title': 'Talent Assessment & Level Placement Test',
    'placement.header.subtitle': 'A delightful, game-like quiz evaluating your child’s letter, color, and phonics skills with an instant 10% discount coupon!',
    'placement.start.title': 'Child Information Before Starting:',
    'placement.childName': 'Child’s Full Name:',
    'placement.childAge': 'Child’s Age:',
    'placement.startBtn': 'Start Fun Assessment 🚀',
    'placement.question': 'Question',
    'placement.of': 'of',
    'placement.nextQuestion': 'Next Question',
    'placement.finishTest': 'View Assessment & Claim Coupon',
    'placement.result.congrats': 'Awesome Job! Child Assessment Complete 🎉',
    'placement.result.score': 'Score Achieved:',
    'placement.result.recommended': 'Recommended Learning Path:',
    'placement.result.couponTitle': 'Completion Reward: Instant 10% OFF Promo Code',
    'placement.result.applyAndShop': 'Apply Coupon & Browse Courses',

    // Footer
    'footer.value': 'Discover your child’s talent and build English fluency through interactive, joyful learning!',
    'footer.startTestNow': 'Take Level Assessment for Free',
    'footer.about': 'An educational and developmental academy dedicated to discovering children’s talents, offering interactive English curricula, daycare hosting, and school support in Qatif.',
    'footer.quickLinks': 'Platform Modules (Odoo 19)',
    'footer.programs': 'Academy Programs & Tracks',
    'footer.contact': 'Official Location & Contact',
    'footer.vat': 'VAT Number:',
    'footer.cr': 'Commercial Registration:',
    'footer.allRights': 'All Rights Reserved © Kristina Kidz Academy.',
    'footer.odooCertified': 'Simulated & Aligned with Odoo 19 ERP Educational Modules',

    // Language Toggle
    'lang.toggle': 'العربية',
    'lang.current': 'English'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('kristina_kidz_lang');
      if (saved === 'en' || saved === 'ar') return saved;
    } catch {
      // ignore
    }
    return 'ar';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('kristina_kidz_lang', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const isRTL = language === 'ar';
  const dir = isRTL ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    if (language === 'ar') {
      document.title = 'أكاديمية كريستينا كيدز | منصة أودو 19 التعليمية';
    } else {
      document.title = 'Kristina Kidz Academy | Odoo 19 Educational Platform';
    }
  }, [language, dir]);

  const keyAliases: Record<string, string> = {
    'sar': 'currency',
    'odoo_module_badge': 'odoo.erp',
    'events_title': 'events.header.title',
    'placement_title': 'placement.header.title',
    'placement_subtitle': 'placement.header.subtitle',
    'student_full_name': 'placement.childName',
    'student_age': 'placement.childAge',
    'staff_title': 'staff.header.title',
    'attendance_title': 'schedule.header.title',
    'cart_title': 'cart.title',
    'cart_empty': 'cart.empty.title',
    'total_amount': 'cart.total',
    'subtotal': 'cart.subtotal',
    'discount_amount': 'cart.discount',
    'checkout_btn': 'cart.checkout',
    'apply_code': 'cart.coupon.apply',
    'nav_home': 'nav.home',
    'nav_shop': 'nav.shop',
    'nav_elearning': 'nav.elearning',
    'nav_events': 'nav.events',
    'nav_placement': 'nav.placement',
    'nav_schedule': 'nav.schedule',
    'nav_staff': 'nav.staff',
  };

  const t = (key: string, fallback?: string): string => {
    const direct = translations[language]?.[key];
    if (direct) return direct;

    const mappedKey = keyAliases[key];
    if (mappedKey && translations[language]?.[mappedKey]) {
      return translations[language][mappedKey];
    }

    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isRTL, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
