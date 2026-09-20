import React, { useState } from 'react';
import { AttendanceService } from '../../services/AttendanceService';
import { IAttendanceSlot, IStudentAttendanceRecord } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Clock, 
  UserCheck, 
  Search, 
  MapPin, 
  Users, 
  CalendarCheck, 
  CheckCircle2, 
  AlertCircle,
  Building2,
  Calendar
} from 'lucide-react';

export const AttendanceScheduleView: React.FC = () => {
  const { t, language } = useLanguage();
  const isEn = language === 'en';

  const slots = AttendanceService.getScheduleSlots();
  const initialLogs = AttendanceService.getAttendanceLogs();

  const [studentSearch, setStudentSearch] = useState('');
  const [filterDay, setFilterDay] = useState<string>('all');

  const filteredLogs = studentSearch.trim()
    ? initialLogs.filter(l => {
        const nameAr = l.studentName.toLowerCase();
        const nameEn = (l.studentNameEn || '').toLowerCase();
        const query = studentSearch.trim().toLowerCase();
        return nameAr.includes(query) || nameEn.includes(query);
      })
    : initialLogs;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Odoo 19 hr_attendance Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#714B67]/10 text-[#714B67] px-3 py-1 rounded-full text-xs font-bold mb-2">
              <span>{t('odoo_module_badge')} • hr_attendance</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              {t('attendance_title')}
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              {isEn
                ? 'Monitoring morning hospitality sessions, evening courses, and student attendance logs at the academy.'
                : 'متابعة فترات الضيافة الصباحية ودورات المساء وحالة دوام الطلاب والمعلمين في الأكاديمية'}
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-2xl text-center">
              <span className="text-[10px] text-emerald-700 block font-bold">{isEn ? "Today's Status" : 'حالة الدوام اليوم'}</span>
              <span className="font-extrabold text-emerald-900 flex items-center gap-1 justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{isEn ? 'Active Now (Sea Front)' : 'نشط الآن (قاعات سي فرونت)'}</span>
              </span>
            </div>
            <div className="bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-2xl text-center">
              <span className="text-[10px] text-slate-400 block font-bold">{isEn ? 'Date' : 'التاريخ'}</span>
              <span className="font-extrabold text-slate-800">{isEn ? 'Current School Day' : 'اليوم الدراسي الحالي'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Main Timetable Slots */}
      <div className="mb-12">
        <h2 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#9E1C58]" />
          <span>{isEn ? 'Approved Session Schedules (Morning & Evening)' : 'جدول الفترات المعتمدة (الصباحية والمسائية)'}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {slots.map(slot => {
            const pName = isEn ? (slot.programNameEn || slot.programName) : slot.programName;
            const tRange = isEn ? (slot.timeRangeEn || slot.timeRange) : slot.timeRange;
            const sDays = isEn ? (slot.daysEn || slot.days) : slot.days;
            const sRoom = isEn ? (slot.roomEn || slot.room) : slot.room;
            const sInstructor = isEn ? (slot.instructorEn || slot.instructor) : slot.instructor;

            return (
              <div
                key={slot.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all space-y-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">
                    {pName}
                  </h3>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full shrink-0 ${
                    slot.status === 'in_session'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {slot.status === 'in_session' ? (isEn ? 'In Session' : 'جارية الآن') : (isEn ? 'Open' : 'مفتوحة')}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#9E1C58] shrink-0" />
                    <span className="font-bold text-slate-900">{tRange}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="w-4 h-4 text-[#06B6D4] shrink-0" />
                    <span>{sDays}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{isEn ? 'Instructor:' : 'المعلم المسؤول:'} <strong>{sInstructor}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{sRoom}</span>
                  </div>
                </div>

                {/* Attendance capacity pill */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{isEn ? 'Hall Occupancy:' : 'حضور القاعة:'}</span>
                  <span className="font-extrabold text-slate-800">
                    {isEn ? `${slot.currentAttendanceCount} of ${slot.capacity} seats` : `${slot.currentAttendanceCount} من ${slot.capacity} مقعداً`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Parent Live Attendance Lookup */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-black text-slate-900">
              {isEn ? "Parent Inquiries: Today's Attendance Record" : 'استعلام ولي الأمر عن حضور الطفل اليوم'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {isEn ? 'Search by your child’s name to check check-in time and pick-up status.' : 'ابحث باسم طفلك المسجل للتحقق من تسجيل الحضور ووقت الاستلام'}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative max-w-xs w-full">
            <Search className={`w-4 h-4 text-slate-400 absolute top-3 ${isEn ? 'left-3' : 'right-3'}`} />
            <input
              type="text"
              value={studentSearch}
              onChange={(e) => setStudentSearch(e.target.value)}
              placeholder={isEn ? 'Search student name...' : 'ابحث باسم الطالب...'}
              className={`w-full bg-slate-50 border border-slate-200 rounded-xl ${isEn ? 'pl-9 pr-3' : 'pr-9 pl-3'} py-2 text-xs focus:outline-none focus:border-[#9E1C58]`}
            />
          </div>
        </div>

        {/* Logs Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold">
                <th className="py-3 px-4">{isEn ? 'Student Name' : 'اسم الطالب'}</th>
                <th className="py-3 px-4">{isEn ? 'Registered Program' : 'البرنامج المسجل'}</th>
                <th className="py-3 px-4">{isEn ? 'Check-in Time' : 'وقت تسجيل الحضور'}</th>
                <th className="py-3 px-4">{isEn ? 'Check-out Time' : 'وقت الانصراف'}</th>
                <th className="py-3 px-4">{isEn ? 'Status' : 'الحالة'}</th>
                <th className="py-3 px-4">{isEn ? 'Daily Notes' : 'الملاحظات اليومية'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLogs.map(log => {
                const sName = isEn ? (log.studentNameEn || log.studentName) : log.studentName;
                const pName = isEn ? (log.programNameEn || log.programName) : log.programName;
                const sNotes = isEn ? (log.notesEn || log.notes) : log.notes;

                return (
                  <tr key={log.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      {sName}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {pName}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#06B6D4]">
                      {log.checkInTime}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-600">
                      {log.checkOutTime || '—'}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        log.status === 'present'
                          ? 'bg-emerald-100 text-emerald-800'
                          : log.status === 'checked_out'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{log.status === 'present' ? (isEn ? 'Present in Class' : 'حاضر بالقاعة') : (isEn ? 'Checked Out' : 'تم الانصراف')}</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 text-[11px]">
                      {sNotes || '—'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
