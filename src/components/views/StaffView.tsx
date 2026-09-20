import React from 'react';
import { StaffService } from '../../services/StaffService';
import { useLanguage } from '../../context/LanguageContext';
import { Users, Award, BookOpen, MessageCircle, Heart } from 'lucide-react';

export const StaffView: React.FC = () => {
  const { t, language } = useLanguage();
  const isEn = language === 'en';
  const staffMembers = StaffService.getAllStaff();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-[#9E1C58]/10 text-[#9E1C58] px-3.5 py-1 rounded-full text-xs font-bold mb-2">
          <Users className="w-4 h-4" />
          <span>{isEn ? 'Specialized Educational & Talent Faculty' : 'كادر تعليمي وتربوي متخصص'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
          {t('staff_title')}
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm mt-2">
          {isEn
            ? 'A dedicated team of childhood educators, ESL instructors, and talent mentors based in Qatif, Saudi Arabia.'
            : 'نخبة من المتخصصين في رياض الأطفال، تعليم اللغة الإنجليزية، واكتشاف وتوجيه مواهب الطفل في القطيف'}
        </p>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {staffMembers.map(member => {
          const sName = isEn ? (member.nameEn || member.name) : member.name;
          const sRole = isEn ? (member.roleEn || member.role) : member.role;
          const sBio = isEn ? (member.bioEn || member.bio) : member.bio;
          const specs = isEn ? (member.specialtiesEn || member.specialties) : member.specialties;

          return (
            <div
              key={member.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo & Role */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={member.avatar}
                    alt={sName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute bottom-3 ${isEn ? 'left-3' : 'right-3'} bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-xs`}>
                    {isEn ? `${member.experienceYears} Years Experience` : `خبرة ${member.experienceYears} سنوات`}
                  </div>
                </div>

                {/* Bio & Details */}
                <div className="p-5 space-y-3">
                  <h3 className="font-extrabold text-base text-slate-900">
                    {sName}
                  </h3>
                  <span className="text-xs font-bold text-[#9E1C58] block">
                    {sRole}
                  </span>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {sBio}
                  </p>

                  {/* Specialties */}
                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold block">{isEn ? 'Specialties:' : 'التخصصات:'}</span>
                    <div className="flex flex-wrap gap-1">
                      {specs.map((spec, i) => (
                        <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact Button */}
              <div className="p-5 pt-0">
                <a
                  href={`https://wa.me/966568826618?text=${encodeURIComponent(isEn ? `Hello, I would like to book an educational consultation with ${sName} at Kristina Kidz.` : `مرحباً، أرغب بحجز استشارة تعليمية لطفلي مع ${sName} في أكاديمية كريستينا كيدز`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Book Consultation' : 'حجز استشارة تعليمية'}</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
