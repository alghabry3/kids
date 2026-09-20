import { IEvent } from '../types';

export const ACADEMY_EVENTS: IEvent[] = [
  {
    id: 'evt-seafront-festival',
    odooEventId: 1,
    titleAr: 'مهرجان مواهب الطفل السنوي – مجمع سي فرونت القطيف',
    titleEn: 'Annual Child Talent Festival - Sea Front Mall Qatif',
    organizer: 'كريستينا كيدز (Kristina Kidz)',
    organizerEn: 'Kristina Kidz Academy',
    responsiblePerson: 'Ali',
    locationName: 'القطيف – مجمع سي فرونت (Sea Front Mall), SA-0 32641',
    locationNameEn: 'Qatif - Sea Front Mall, SA-0 32641',
    postalCode: 'SA-0 32641',
    dateRange: '20 سبتمبر – 21 سبتمبر',
    dateRangeEn: 'September 20 – 21',
    time: '2:30 م – 9:00 م',
    timeEn: '2:30 PM – 9:00 PM',
    status: 'announced',
    description: 'فعالية ترفيهية وتعليمية ضخمة تنظمها أكاديمية كريستينا كيدز بكورنيش القطيف ومجمع سي فرونت لاكتشاف مواهب الأطفال في التحدث بالإنجليزية، الرسم، الفنون المسرحية، وورش العمل التفاعلية، مع تخصيص أجنحة للأنشطة ومنصات للمشاركين.',
    descriptionEn: 'A flagship community festival hosted by Kristina Kidz Academy at Sea Front Complex Qatif to uncover child talents in English speech, arts, theatre, and interactive workshops with exhibition booths and attendee passes.',
    coverImage: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop',
    registeredAttendeesCount: 240,
    booths: [
      {
        id: 'booth-main',
        name: 'جناح الفعالية – Event Booth',
        nameEn: 'Official Event Booth',
        code: 'EVENT_BOOTH',
        price: 100.0,
        available: 8,
        total: 12,
        perks: [
          'مساحة مخصصة مجهزة داخل مجمع سي فرونت',
          'شاشة عرض أو بنر تعريفي للمشارك',
          'تغطية إعلامية وتوثيق بالصور على إنستجرام الأكاديمية',
          'شهادة شكر وتقدير من إدارة أكاديمية كريستينا كيدز'
        ],
        perksEn: [
          'Dedicated equipped booth space inside Sea Front Mall',
          'Exhibitor banner / digital display screen',
          'Media coverage and photo highlights on Academy Instagram',
          'Certificate of Appreciation from Kristina Kidz Academy'
        ]
      }
    ],
    tickets: [
      {
        id: 'tkt-free',
        name: 'تذكرة حضور عامة للطفل وولي الأمر',
        nameEn: 'General Admission Ticket (Child & Parent)',
        price: 0,
        description: 'دخول مجاني للفعالية والمعارض العامة والاستمتاع بالمسابقات التفاعلية للأطفال.',
        descriptionEn: 'Free entry to the general festival, open exhibitions, and interactive children competitions.',
        seatsTotal: 500,
        seatsTaken: 382
      },
      {
        id: 'tkt-workshop',
        name: 'تذكرة ورشة اكتشاف المواهب الإنجليزية (Talent Lab)',
        nameEn: 'English Talent Discovery Lab Ticket',
        price: 50.0,
        description: 'جلسة تدريبية عملية وتطبيقية مع معلمات الأكاديمية وتقرير فوري بموهبة الطفل.',
        descriptionEn: 'Hands-on interactive session with academy teachers plus instant child talent assessment report.',
        seatsTotal: 100,
        seatsTaken: 76
      },
      {
        id: 'tkt-booth',
        name: 'حجز جناح متكامل (Event Booth)',
        nameEn: 'Full Booth Reservation (Event Booth)',
        price: 100.0,
        description: 'حجز الركن الرسمي للعرض والمشاركة في الفعالية بمجمع سي فرونت بالقطيف.',
        descriptionEn: 'Official booth reservation for exhibition at Sea Front Mall festival in Qatif.',
        seatsTotal: 12,
        seatsTaken: 4
      }
    ]
  },
  {
    id: 'evt-national-day',
    odooEventId: 2,
    titleAr: 'احتفال اليوم الوطني مع كريستينا كيدز – نحلم ونحقق',
    titleEn: 'Saudi National Day Celebration with Kristina Kidz',
    organizer: 'كريستينا كيدز',
    organizerEn: 'Kristina Kidz Academy',
    responsiblePerson: 'فريق الأنشطة',
    locationName: 'مقر أكاديمية كريستينا كيدز – القطيف سي فرونت',
    locationNameEn: 'Kristina Kidz Academy - Qatif Sea Front',
    postalCode: 'SA-0 32641',
    dateRange: '23 سبتمبر',
    dateRangeEn: 'September 23',
    time: '4:00 م – 8:00 م',
    timeEn: '4:00 PM – 8:00 PM',
    status: 'new',
    description: 'يوم مفتوح حافل بالأنشطة الوطنية التراثية باللغتين العربية والإنجليزية، عروض مسرحية للأطفال، مسابقات وطنية وجوائز وهدايا لجميع الأطفال المشاركين.',
    descriptionEn: 'An open carnival celebrating national heritage in Arabic & English, with puppet theatre, cultural quizzes, and gifts for every participating child.',
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    registeredAttendeesCount: 150,
    booths: [],
    tickets: [
      {
        id: 'tkt-nat-free',
        name: 'تذكرة الاحتفال العائلي الوطني',
        nameEn: 'Family National Celebration Ticket',
        price: 0,
        description: 'حضور الاحتفال ومسرح الطفل والاستمتاع بضيافة اليوم الوطني السعودي.',
        descriptionEn: 'Free admission to family celebrations, children’s theater, and traditional Saudi hospitality.',
        seatsTotal: 250,
        seatsTaken: 190
      }
    ]
  }
];

export class EventService {
  public static getAllEvents(): IEvent[] {
    return ACADEMY_EVENTS;
  }

  public static getEventById(id: string): IEvent | undefined {
    return ACADEMY_EVENTS.find(e => e.id === id);
  }
}
