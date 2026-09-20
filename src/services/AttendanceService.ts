import { IAttendanceSlot, IStudentAttendanceRecord } from '../types';

export const SCHEDULE_SLOTS: IAttendanceSlot[] = [
  {
    id: 'slot-1',
    programName: 'برنامج الضيافة والرعاية المبكرة (Hosting 2-5 yrs)',
    programNameEn: 'Early Childhood Care & Hosting (2-5 yrs)',
    timeRange: '07:00 ص – 11:00 ص',
    timeRangeEn: '07:00 AM – 11:00 AM',
    days: 'الأحد إلى الخميس',
    daysEn: 'Sunday to Thursday',
    instructor: 'أ. مروة & أ. نرجس',
    instructorEn: 'Ms. Marwa & Ms. Narjes',
    room: 'قاعة منتسوري وبراعم المستقبل',
    roomEn: 'Montessori Early Sprouts Hall',
    currentAttendanceCount: 18,
    capacity: 20,
    status: 'in_session'
  },
  {
    id: 'slot-2',
    programName: 'تأسيس اللغة الإنجليزية (الفترة الأولى)',
    programNameEn: 'English Foundation (Slot 1)',
    timeRange: '12:30 م – 01:30 م',
    timeRangeEn: '12:30 PM – 01:30 PM',
    days: 'الأحد / الثلاثاء (أو 4 أيام)',
    daysEn: 'Sun / Tue (or 4 Days)',
    instructor: 'أ. كريستينا',
    instructorEn: 'Ms. Kristina',
    room: 'معمل اللغات الذكي (Smart Lab)',
    roomEn: 'Smart Language Lab',
    currentAttendanceCount: 12,
    capacity: 15,
    status: 'upcoming'
  },
  {
    id: 'slot-3',
    programName: 'تأسيس اللغة الإنجليزية (الفترة الثانية)',
    programNameEn: 'English Foundation (Slot 2)',
    timeRange: '01:30 م – 02:30 م',
    timeRangeEn: '01:30 PM – 02:30 PM',
    days: 'الاثنين / الأربعاء (أو 4 أيام)',
    daysEn: 'Mon / Wed (or 4 Days)',
    instructor: 'أ. سارة آل مبارك',
    instructorEn: 'Ms. Sarah Al-Mubarak',
    room: 'معمل اللغات الذكي (Smart Lab)',
    roomEn: 'Smart Language Lab',
    currentAttendanceCount: 14,
    capacity: 15,
    status: 'upcoming'
  },
  {
    id: 'slot-4',
    programName: 'دعم وتقوية المناهج (المدارس العالمية والأهلية)',
    programNameEn: 'Curriculum Support (International & Private)',
    timeRange: '02:00 م – 08:00 م (جلسات فردية/مجموعات)',
    timeRangeEn: '02:00 PM – 08:00 PM (1-on-1 / Groups)',
    days: 'الأحد إلى الخميس',
    daysEn: 'Sunday to Thursday',
    instructor: 'أ. أحمد & أ. فاطمة',
    instructorEn: 'Mr. Ahmed & Ms. Fatima',
    room: 'قاعة التفوق الأكاديمي',
    roomEn: 'Academic Excellence Hall',
    currentAttendanceCount: 22,
    capacity: 25,
    status: 'open'
  },
  {
    id: 'slot-5',
    programName: 'دورات اللغة الإنجليزية ونادي المحادثة والمسرح',
    programNameEn: 'English Language & Drama Club',
    timeRange: '04:00 م – 08:00 م',
    timeRangeEn: '04:00 PM – 08:00 PM',
    days: 'الأحد إلى الخميس',
    daysEn: 'Sunday to Thursday',
    instructor: 'أ. كريستينا & أ. دانيال',
    instructorEn: 'Ms. Kristina & Mr. Daniel',
    room: 'مسرح الطفل التفاعلي وقاعة الإلقاء',
    roomEn: 'Interactive Kids Theatre & Speech Hall',
    currentAttendanceCount: 28,
    capacity: 30,
    status: 'open'
  }
];

export const INITIAL_ATTENDANCE_LOGS: IStudentAttendanceRecord[] = [
  {
    id: 'att-01',
    studentName: 'ريان أحمد آل ناصر',
    programName: 'برنامج الضيافة والرعاية المبكرة',
    date: '2026-09-20',
    checkInTime: '07:15 ص',
    status: 'present',
    notes: 'شارك في نشاط الحواس ورسم الحروف بنشاط كبير.'
  },
  {
    id: 'att-02',
    studentName: 'ليان حسن الخنيزي',
    programName: 'تأسيس اللغة الإنجليزية',
    date: '2026-09-20',
    checkInTime: '12:28 م',
    status: 'present',
    notes: 'أتقنت نطق أصوات حرف P و B بامتياز.'
  },
  {
    id: 'att-03',
    studentName: 'سعود محمد الشماسي',
    programName: 'دعم المدارس العالمية (Grade 3)',
    date: '2026-09-20',
    checkInTime: '02:05 م',
    status: 'present',
    notes: 'أنهى مشروع مادة Science بنجاح.'
  },
  {
    id: 'att-04',
    studentName: 'جود خالد البيات',
    programName: 'دورات اللغة الإنجليزية المكثفة',
    date: '2026-09-20',
    checkInTime: '04:00 م',
    checkOutTime: '05:30 م',
    status: 'checked_out',
    notes: 'تم استلام الطالبة بواسطة والدتها.'
  }
];

export class AttendanceService {
  public static getScheduleSlots(): IAttendanceSlot[] {
    return SCHEDULE_SLOTS;
  }

  public static getAttendanceLogs(): IStudentAttendanceRecord[] {
    return INITIAL_ATTENDANCE_LOGS;
  }
}
