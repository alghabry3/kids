import React from 'react';
import { KristinaLogo } from '../brand/KristinaLogo';
import { ModuleView } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  ExternalLink, 
  Heart, 
  ShieldCheck, 
  Sparkles,
  Award
} from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ModuleView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const isEn = language === 'en';

  return (
    <footer className="bg-[#111827] text-slate-300 border-t border-slate-800">
      {/* Top Value Banner */}
      <div className="bg-linear-to-r from-[#9E1C58] via-[#B32265] to-[#801646] text-white py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-300 shrink-0" />
            <p className="font-bold text-sm sm:text-base">
              {t('footer.value', 'نكتشف موهبة طفلك ونبني طلاقته في اللغة الإنجليزية من خلال التعليم الممتع والتفاعلي!')}
            </p>
          </div>
          <button
            onClick={() => onNavigate('placement')}
            className="bg-white text-[#9E1C58] hover:bg-amber-100 font-extrabold px-4 py-1.5 rounded-full text-xs shadow-xs transition-all cursor-pointer"
          >
            {t('footer.startTestNow', 'ابدأ اختبار تحديد المستوى الآن مجاناً')}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block">
              <KristinaLogo size="md" showSubtitle={false} />
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t('footer.about', 'أكاديمية تعليمية وترفيهية متخصصة في اكتشاف مواهب الأطفال ورعايتهم، وتقديم مناهج لغة إنجليزية تفاعلية، وبرامج الضيافة، ودعم المناهج المدرسية بالقطيف.')}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/kristinakidz.sa/?hl=ar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#E1306C] text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                title={isEn ? 'Kristina Kidz on Instagram' : 'حساب الأكاديمية على إنستجرام'}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.google.com/maps/place/%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9+%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D9%8A%D9%86%D8%A7+%D9%83%D9%8A%D8%AF%D8%B2%E2%80%AD/@26.5854188,50.0201666,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                title={isEn ? 'Kristina Kidz on Google Maps' : 'موقع الأكاديمية على خرائط جوجل'}
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 border-b border-slate-700 pb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#F59E0B]" />
              <span>{t('footer.quickLinks', 'موديولات المنصة (Odoo 19)')}</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9E1C58]"></span>
                  <span>{isEn ? 'Course & Subscriptions Store (website_sale)' : 'متجر الدورات والاشتراكات (website_sale)'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('elearning')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]"></span>
                  <span>{isEn ? 'eLearning Platform for Kids (website_slides)' : 'التعليم الإلكتروني للأطفال (website_slides)'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('events')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span>
                  <span>{isEn ? 'Sea Front Events & Activities (website_event)' : 'فعاليات وأنشطة سي فرونت (website_event)'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('schedule')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{isEn ? 'Attendance & Logs (hr_attendance)' : 'سجل الحضور والانصراف (hr_attendance)'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('staff')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  <span>{isEn ? 'Teaching & Academic Staff' : 'الكادر التعليمي والتربوي'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 border-b border-slate-700 pb-2">
              {t('footer.programs', 'برامج ومسارات الأكاديمية')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-1.5">
                <span className="text-amber-400">•</span>
                <span>{isEn ? 'Early Daycare & Hospitality (2 - 5 years)' : 'برنامج الضيافة والرعاية المبكرة (2 - 5 سنوات)'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-amber-400">•</span>
                <span>{isEn ? 'English Phonics Foundation (6+ years)' : 'تأسيس اللغة الإنجليزية وأصوات الفونكس (6+ سنوات)'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-amber-400">•</span>
                <span>{isEn ? 'International School Curriculum Support' : 'دعم وتقوية المدارس العالمية (International School)'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-amber-400">•</span>
                <span>{isEn ? 'Private & Public School Academic Support' : 'دعم وتقوية المدارس الأهلية والحكومية'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-amber-400">•</span>
                <span>{isEn ? 'Interactive Drama & Kids Speaking Club' : 'مسرح الطفل التفاعلي ونادي المحادثة والطلاقة'}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Legal */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 border-b border-slate-700 pb-2">
              {t('footer.contact', 'التواصل والموقع الرسمي')}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>{isEn ? 'Qatif – Sea Front Complex, Qatif Corniche, SA-0 32641, Saudi Arabia' : 'القطيف – مجمع سي فرونت، كورنيش القطيف، SA-0 32641، المملكة العربية السعودية'}</span>
              </div>
              <div className="flex items-center gap-2" dir="ltr">
                <Phone className="w-4 h-4 text-[#06B6D4] shrink-0" />
                <span className={isEn ? 'text-left' : 'text-right'}>+966 56 882 6618 / +966 56 595 8548</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#9E1C58] shrink-0" />
                <span>kristinakidz.sa@gmail.com</span>
              </div>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                <p>{t('footer.vat', 'الرقم الضريبي (VAT):')} <span className="font-mono text-slate-200">310892348500003</span></p>
                <p>{t('footer.cr', 'السجل التجاري:')} <span className="font-mono text-slate-200">2051239841</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            {isEn 
              ? `All Rights Reserved © ${new Date().getFullYear()} Kristina Kidz Academy.` 
              : `جميع الحقوق محفوظة © ${new Date().getFullYear()} لأكاديمية كريستينا كيدز (Kristina Kidz Academy).`}
          </p>
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{t('footer.odooCertified', 'نظام محاكي ومعتمد لموديولات Odoo 19 ERP التعليمية')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
