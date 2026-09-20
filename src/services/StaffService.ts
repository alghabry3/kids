import { IStaffMember } from '../types';

export const ACADEMY_STAFF: IStaffMember[] = [
  {
    id: 'staff-1',
    name: 'أ. كريستينا (Ms. Kristina)',
    nameEn: 'Ms. Kristina',
    role: 'المشرفة العامة ومدربة اللغة الإنجليزية للأطفال',
    roleEn: 'Academic Director & Senior Kids English Coach',
    qualifications: 'ماجستير في طرق تدريس اللغات الحديثة للأطفال وشهادة CELTA الدولية',
    qualificationsEn: 'Master’s in Modern Language Teaching & Certified CELTA Educator',
    experienceYears: 11,
    specialties: ['تعليم الفونكس الحديث (Phonics)', 'مسرح الطفل التفاعلي باللغة الإنجليزية', 'اكتشاف وتنمية مواهب التعبير اللغوي'],
    specialtiesEn: ['Modern Phonics & Early Literacy', 'Interactive Kids English Drama', 'Talent Discovery & Speaking Confidence'],
    bio: 'شغوفة بتعليم الأطفال منذ أكثر من عقد، أسست منهجية قائمة على المرح وكسر حاجز الخوف من التحدث باللغات الأجنبية.',
    bioEn: 'Passionate about child development for over a decade, founding a joyful pedagogical method that dissolves hesitation in second-language speaking.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'staff-2',
    name: 'أ. علي (Ali)',
    nameEn: 'Mr. Ali',
    role: 'مدير الفعاليات والشراكات الأكاديمية',
    roleEn: 'Events & Community Partnerships Director',
    qualifications: 'بكالوريوس إدارة أعمال وإدارة المشاريع الفعالية معتمدة',
    qualificationsEn: 'B.S. in Business Administration & Certified Event Project Manager',
    experienceYears: 8,
    specialties: ['تنظيم مهرجانات مواهب الطفل', 'إدارة فعاليات سي فرونت ومشاركات المعارض', 'التنسيق مع أولياء الأمور والمؤسسات'],
    specialtiesEn: ['Child Talent Festivals Organization', 'Sea Front Mall Activities Management', 'Community & Parent Relations'],
    bio: 'المسؤول التنفيذي عن فعاليات وأجنحة الأكاديمية الميدانية، والحرص على توفير تجارب آمنة ومبهجة للمجتمع.',
    bioEn: 'Leads our on-ground community festivals and exhibitions at Sea Front Qatif, ensuring inspiring and secure experiences for every family.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'staff-3',
    name: 'أ. سارة آل مبارك',
    nameEn: 'Ms. Sarah Al-Mubarak',
    role: 'أخصائية التأسيس اللغوي والطفولة المبكرة',
    roleEn: 'Early Childhood & Language Foundations Specialist',
    qualifications: 'بكالوريوس رياض أطفال ودبلوم منتسوري المعتمد عالمياً',
    qualificationsEn: 'B.A. in Early Childhood Education & Certified Montessori Diploma',
    experienceYears: 7,
    specialties: ['منتسوري واللعب الهادف', 'تأسيس القراءة والكتابة', 'تعديل السلوك وبناء الثقة بالنفس'],
    specialtiesEn: ['Purposeful Montessori Play', 'Reading & Penmanship Readiness', 'Confidence Building & Positive Guidance'],
    bio: 'تؤمن بأن كل طفل يحمل موهبة فريدة تحتاج فقط لبيئة محبة ومحفزة لتزهر وتنطلق.',
    bioEn: 'Believes that every child is endowed with a unique gift awaiting a warm, encouraging environment to flourish.',
    avatar: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'staff-4',
    name: 'أ. أحمد المعلم',
    nameEn: 'Mr. Ahmed Al-Moallem',
    role: 'منسق دعم المناهج المدرسية (International & Private)',
    roleEn: 'Curriculum Support Lead (International & Private Schools)',
    qualifications: 'بكالوريوس لغة إنجليزية وتدريس العلوم للمناهج الأمريكية والبريطانية',
    qualificationsEn: 'B.A. in English & Cambridge/Oxford Science Education',
    experienceYears: 9,
    specialties: ['مناهج Cambridge & Oxford', 'دعم الرياضيات والعلوم بالإنجليزية', 'إعداد الطلاب للاختبارات القياسية'],
    specialtiesEn: ['Cambridge & Oxford Curricula', 'Bilingual Math & Science Reinforcement', 'Standardized Exam Readiness'],
    bio: 'يمتلك أسلوباً مبسطاً يحول أصعب المفاهيم الرياضية والعلمية في المناهج العالمية إلى متعة حقيقية لدى الطالب.',
    bioEn: 'Excels at breaking down complex concepts in international science and math into delightful, accessible learning milestones.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
  }
];

export class StaffService {
  public static getAllStaff(): IStaffMember[] {
    return ACADEMY_STAFF;
  }
}
