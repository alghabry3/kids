/**
 * SOLID Interfaces for Kristina Kidz Academy (Odoo 19 Simulation)
 * Segregated Interfaces for Modules: Website, eCommerce (website_sale),
 * eLearning (website_slides), Events (website_event), HR Attendance (hr_attendance),
 * and Parent Portal (portal).
 */

export type ModuleView = 'home' | 'shop' | 'elearning' | 'events' | 'placement' | 'schedule' | 'staff' | 'contact';

// ==================== eCommerce (website_sale) Types ====================
export type ProductCategory = 'hosting' | 'foundation' | 'school_support' | 'english_courses' | 'packages';

export interface IPricingOption {
  id: string;
  durationLabel: string; // e.g., 'أسبوعي (ساعتان)', 'شهري (4 ساعات)', 'فصلي (يومان)'
  durationLabelEn?: string; // e.g., 'Weekly (2 hrs/day)', 'Monthly (4 hrs/day)'
  hoursPerWeekOrDay: string;
  hoursPerWeekOrDayEn?: string;
  price: number;
  totalHours: number;
  pricePerHour?: number;
  badge?: string;
  badgeEn?: string;
}

export interface IProduct {
  id: string;
  code: string; // e.g. SERV_HOSTING, SERV_ENG_FND, etc. matching Odoo
  nameAr: string;
  nameEn: string;
  category: ProductCategory;
  ageRange: string; // e.g. '2-5 سنوات', '6+ سنوات', '5+ سنوات'
  ageRangeEn?: string;
  timing: string; // e.g. '7:00 ص - 11:00 ص', '12:30 م - 3:30 م', '4:00 م - 8:00 م'
  timingEn?: string;
  shortDesc: string;
  shortDescEn?: string;
  fullDesc: string;
  fullDescEn?: string;
  features: string[];
  featuresEn?: string[];
  pricingOptions: IPricingOption[];
  isPopular?: boolean;
  image: string;
}

export interface ICartItem {
  id: string;
  productId: string;
  productName: string;
  category: ProductCategory;
  selectedOption: IPricingOption;
  studentName: string;
  studentAge: number;
  quantity: number;
  notes?: string;
}

export interface IDiscountCoupon {
  code: string;
  name: string;
  discountType: 'percentage' | 'fixed';
  value: number; // 10% or 100 SAR
  description: string;
}

// ==================== eLearning (website_slides) Types ====================
export type ContentType = 'article' | 'video' | 'quiz' | 'document' | 'interactive';

export interface IQuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface IQuizQuestion {
  id: string;
  question: string;
  options: IQuizOption[];
  explanation?: string;
}

export interface ILesson {
  id: string;
  number: number;
  titleAr: string;
  titleEn: string;
  type: ContentType;
  durationMinutes: number;
  summary: string;
  contentMarkdown?: string;
  videoUrl?: string;
  audioPronunciation?: string; // audio word
  quiz?: IQuizQuestion[];
  isCompleted?: boolean;
  slideViews?: number;
}

export interface ICourseLevel {
  id: string;
  titleAr: string;
  titleEn: string;
  description: string;
  lessons: ILesson[];
}

export interface ICourse {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  odooCode: string; // e.g. 'English for Kids'
  level: string; // 'المستوى الأول', 'المبتدئ', etc.
  ageGroup: string;
  rating: number;
  reviewsCount: number;
  enrolledStudents: number;
  totalLessons: number;
  description: string;
  objectives: string[];
  levels: ICourseLevel[];
  certificateAvailable: boolean;
  instructorName: string;
  coverImage: string;
}

// ==================== Events (website_event) Types ====================
export interface IEventBooth {
  id: string;
  name: string;
  nameEn?: string;
  code: string; // 'Event Booth'
  price: number; // 100 SR
  available: number;
  total: number;
  perks: string[];
  perksEn?: string[];
}

export interface IEventTicket {
  id: string;
  name: string;
  nameEn?: string;
  price: number;
  description: string;
  descriptionEn?: string;
  seatsTotal: number;
  seatsTaken: number;
}

export interface IEvent {
  id: string;
  odooEventId: number; // e.g. 1 or 2 matching Odoo screenshot
  titleAr: string;
  titleEn?: string;
  organizer: string; // 'كريستينا كيدز'
  organizerEn?: string;
  responsiblePerson: string; // 'Ali'
  locationName: string; // 'القطيف - مجمع سي فرونت'
  locationNameEn?: string;
  postalCode: string; // 'SA-0 32641'
  dateRange: string; // '20 سبتمبر - 21 سبتمبر'
  dateRangeEn?: string;
  time: string; // '2:30 ص / م'
  timeEn?: string;
  status: 'new' | 'reserved' | 'announced' | 'ended'; // جديد / محجوز / معلن عنه / انتهى
  description: string;
  descriptionEn?: string;
  booths: IEventBooth[];
  tickets: IEventTicket[];
  coverImage: string;
  registeredAttendeesCount: number;
}

// ==================== Placement Test Types ====================
export interface IPlacementQuestion {
  id: string;
  skill: 'alphabet' | 'phonics' | 'colors' | 'numbers' | 'vocabulary';
  questionPrompt: string;
  questionPromptEn?: string;
  audioPrompt?: string;
  imagePrompt?: string;
  options: {
    id: string;
    text: string;
    textEn?: string;
    imageEmoji?: string;
    isCorrect: boolean;
  }[];
}

export interface IPlacementResult {
  childName: string;
  childAge: number;
  score: number;
  totalQuestions: number;
  recommendedLevel: string;
  recommendedLevelEn?: string;
  recommendedCourseId: string;
  recommendedCourseName: string;
  recommendedCourseNameEn?: string;
  feedbackAr: string;
  feedbackEn?: string;
  discountCode: string;
  discountValue: number;
}

// ==================== Attendance & Schedule (hr_attendance) Types ====================
export interface IAttendanceSlot {
  id: string;
  programName: string;
  programNameEn?: string;
  timeRange: string;
  timeRangeEn?: string;
  days: string;
  daysEn?: string;
  instructor: string;
  instructorEn?: string;
  room: string;
  roomEn?: string;
  currentAttendanceCount: number;
  capacity: number;
  status: 'open' | 'in_session' | 'upcoming';
}

export interface IStudentAttendanceRecord {
  id: string;
  studentName: string;
  studentNameEn?: string;
  programName: string;
  programNameEn?: string;
  date: string;
  checkInTime: string;
  checkOutTime?: string;
  status: 'present' | 'late' | 'excused' | 'checked_out';
  notes?: string;
  notesEn?: string;
}

// ==================== Staff / Instructors Types ====================
export interface IStaffMember {
  id: string;
  name: string;
  nameEn?: string;
  role: string;
  roleEn?: string;
  qualifications: string;
  qualificationsEn?: string;
  experienceYears: number;
  specialties: string[];
  specialtiesEn?: string[];
  bio: string;
  bioEn?: string;
  avatar: string;
}

// ==================== Parent Testimonials & Success Stories ====================
export interface IParentTestimonial {
  id: string;
  parentName: string;
  parentNameEn: string;
  parentRole: string;
  parentRoleEn: string;
  childName: string;
  childNameEn: string;
  childAge: number;
  programKey: 'phonics' | 'daycare' | 'school_support' | 'speaking';
  programName: string;
  programNameEn: string;
  rating: number;
  date: string;
  dateEn: string;
  headlineAr: string;
  headlineEn: string;
  feedbackAr: string;
  feedbackEn: string;
  resultAr: string;
  resultEn: string;
  verifiedSource: 'odoo_portal' | 'google_maps' | 'parent_council';
  avatarBg: string;
  avatarInitials: string;
}

// ==================== Frequently Asked Questions (FAQ) ====================
export type FaqCategory = 'all' | 'enrollment' | 'classes' | 'placement';

export interface IFaqItem {
  id: string;
  category: FaqCategory;
  categoryNameAr: string;
  categoryNameEn: string;
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
  actionType?: 'placement' | 'shop' | 'whatsapp' | 'schedule';
  actionLabelAr?: string;
  actionLabelEn?: string;
}


