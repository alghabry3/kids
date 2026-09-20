import React, { useState } from 'react';
import { IEvent, IEventTicket, IEventBooth } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  User, 
  Check, 
  Ticket, 
  QrCode, 
  Share2, 
  Building, 
  Sparkles,
  Download,
  CheckCircle2,
  X
} from 'lucide-react';

interface EventsViewProps {
  events: IEvent[];
}

export const EventsView: React.FC<EventsViewProps> = ({ events }) => {
  const { t, language } = useLanguage();
  const isEn = language === 'en';

  const [selectedEvent, setSelectedEvent] = useState<IEvent>(events[0]);
  const [activeTicket, setActiveTicket] = useState<IEventTicket | null>(selectedEvent.tickets[0] || null);
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeePhone, setAttendeePhone] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [bookedPass, setBookedPass] = useState<{
    id: string;
    ticketName: string;
    attendeeName: string;
    eventTitle: string;
    date: string;
    location: string;
  } | null>(null);

  const handleRegisterTicket = (ticket: IEventTicket) => {
    setActiveTicket(ticket);
  };

  const handleConfirmRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!attendeeName.trim() || !attendeePhone.trim()) {
      alert(isEn ? 'Please provide your name and phone number to issue your ticket.' : 'فضلاً قم بإدخال الاسم ورقم الجوال لاستلام التذكرة');
      return;
    }

    const pass = {
      id: `TKT-${Math.floor(100000 + Math.random() * 900000)}`,
      ticketName: (isEn ? activeTicket?.nameEn : activeTicket?.name) || (isEn ? 'General Admission' : 'تذكرة حضور عامة'),
      attendeeName,
      eventTitle: (isEn ? selectedEvent.titleEn : selectedEvent.titleAr) || selectedEvent.titleAr,
      date: (isEn ? selectedEvent.dateRangeEn : selectedEvent.dateRange) || selectedEvent.dateRange,
      location: (isEn ? selectedEvent.locationNameEn : selectedEvent.locationName) || selectedEvent.locationName,
    };

    setBookedPass(pass);
    setActiveTicket(null);
  };

  const eventTitle = isEn ? (selectedEvent.titleEn || selectedEvent.titleAr) : selectedEvent.titleAr;
  const eventDesc = isEn ? (selectedEvent.descriptionEn || selectedEvent.description) : selectedEvent.description;
  const eventLocation = isEn ? (selectedEvent.locationNameEn || selectedEvent.locationName) : selectedEvent.locationName;
  const eventDate = isEn ? (selectedEvent.dateRangeEn || selectedEvent.dateRange) : selectedEvent.dateRange;
  const eventTime = isEn ? (selectedEvent.timeEn || selectedEvent.time) : selectedEvent.time;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Odoo 19 website_event Meta Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#714B67]/10 text-[#714B67] px-3 py-1 rounded-full text-xs font-bold mb-2">
              <span>{t('odoo_module_badge')} • website_event</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              {t('events_title')}
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              {isEn 
                ? 'Kids festivals, event booths, and talent discovery workshops at Sea Front Mall, Qatif.'
                : 'مهرجانات الطفل، أجنحة الفعاليات (Event Booths)، ورش اكتشاف المواهب بمجمع سي فرونت بالقطيف'}
            </p>
          </div>

          {/* Odoo Events Status */}
          <div className="flex items-center gap-3 text-xs">
            <div className="bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-2xl text-center">
              <span className="text-[10px] text-slate-400 block font-bold">{isEn ? 'Organizer' : 'المنظم'}</span>
              <span className="font-extrabold text-[#9E1C58]">{isEn ? 'Kristina Kidz' : 'كريستينا كيدز'}</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-2xl text-center">
              <span className="text-[10px] text-slate-400 block font-bold">{isEn ? 'Odoo Manager' : 'المسؤول في أودو'}</span>
              <span className="font-extrabold text-slate-800">Ali</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-2xl text-center">
              <span className="text-[10px] text-slate-400 block font-bold">{isEn ? 'Status' : 'الحالة'}</span>
              <span className="font-extrabold text-emerald-600">{isEn ? 'Published (Registration Open)' : 'معلن عنه (متاح للتسجيل)'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Event Card */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Image */}
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
            <img
              src={selectedEvent.coverImage}
              alt={eventTitle}
              className="w-full h-full object-cover"
            />
            <div className={`absolute top-4 ${isEn ? 'left-4' : 'right-4'} bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-black text-[#9E1C58] shadow-xs`}>
              {isEn ? 'Official Certified Event' : 'فعالية رسمية معتمدة'}
            </div>
            <div className="absolute bottom-4 right-4 left-4 bg-slate-950/80 backdrop-blur-xs p-3 rounded-2xl text-white text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>{eventLocation}</span>
              </div>
            </div>
          </div>

          {/* Details & Tickets Selection */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-xs text-slate-500 font-bold">
                <span className="flex items-center gap-1 text-[#9E1C58]">
                  <Calendar className="w-4 h-4" />
                  <span>{eventDate}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[#06B6D4]">
                  <Clock className="w-4 h-4" />
                  <span>{eventTime}</span>
                </span>
              </div>

              <h2 className="text-2xl font-black text-slate-900">
                {eventTitle}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {eventDesc}
              </p>
            </div>

            {/* Odoo Booths & Tickets */}
            <div className="space-y-3 pt-2">
              <h3 className="font-extrabold text-sm text-slate-900 flex items-center justify-between">
                <span>{isEn ? 'Available Passes & Event Tickets:' : 'التذاكر والأجنحة المتاحة في الفعالية:'}</span>
                <span className="text-xs text-slate-400 font-normal">{isEn ? 'Instant Confirmation' : 'تسجيل فوري مؤكد'}</span>
              </h3>

              <div className="space-y-2.5">
                {selectedEvent.tickets.map(ticket => {
                  const tName = isEn ? (ticket.nameEn || ticket.name) : ticket.name;
                  const tDesc = isEn ? (ticket.descriptionEn || ticket.description) : ticket.description;

                  return (
                    <div
                      key={ticket.id}
                      className="p-4 rounded-2xl border border-slate-200 hover:border-[#9E1C58]/40 bg-slate-50/70 hover:bg-white transition-all flex items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                          <span>{tName}</span>
                          {ticket.price === 0 ? (
                            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                              {isEn ? 'Free Entry' : 'دخول مجاني'}
                            </span>
                          ) : (
                            <span className="bg-[#9E1C58]/10 text-[#9E1C58] text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                              {ticket.price} {t('sar')}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500">
                          {tDesc}
                        </p>
                      </div>

                      <button
                        onClick={() => handleRegisterTicket(ticket)}
                        className="bg-[#9E1C58] hover:bg-[#B32265] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer shadow-xs"
                      >
                        {isEn ? 'Book Now' : 'احجز الآن'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Odoo Event Booth Feature Highlight */}
            {selectedEvent.booths.length > 0 && (
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-black text-amber-900 text-xs sm:text-sm">
                    <Building className="w-4 h-4 text-amber-700" />
                    <span>{isEn ? 'Participant Booths (Event Booths – 100.00 SAR)' : 'أجنحة المشاركين (Event Booths – 100.00 SR)'}</span>
                  </div>
                  <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full font-bold">
                    {isEn ? 'Only 8 Booths Left' : 'متبقي 8 أجنحة فقط'}
                  </span>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  {isEn
                    ? 'Would you like to participate with your own branded booth or educational activity at the Kristina Kidz Festival at Sea Front Mall? Reserve your booth now for 100 SAR, including setup and coverage.'
                    : 'هل ترغب بالمشاركة بركن تعريفي أو نشاط خاص بك في مهرجان كريستينا كيدز بمجمع سي فرونت؟ احجز جناحك الآن بسعر 100 ريال سعودي شاملاً التجهيز والتغطية.'}
                </p>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* REGISTRATION MODAL */}
      {activeTicket && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveTicket(null)}
              className={`absolute top-5 ${isEn ? 'right-5' : 'left-5'} text-slate-400 hover:text-slate-600 p-1`}
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-black text-slate-900">
              {isEn ? 'Booking:' : 'حجز:'} {isEn ? (activeTicket.nameEn || activeTicket.name) : activeTicket.name}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {eventTitle} • {eventDate}
            </p>

            <form onSubmit={handleConfirmRegistration} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isEn ? 'Parent / Attendee Name:' : 'اسم المستفيد / ولي الأمر:'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={attendeeName}
                  onChange={(e) => setAttendeeName(e.target.value)}
                  placeholder={isEn ? 'Full Name' : 'الاسم الكريم'}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#9E1C58]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isEn ? 'Phone Number (WhatsApp):' : 'رقم الجوال (واتساب):'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={attendeePhone}
                  onChange={(e) => setAttendeePhone(e.target.value)}
                  placeholder="05xxxxxxxx"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#9E1C58]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isEn ? 'Email (Optional):' : 'البريد الإلكتروني (اختياري):'}
                </label>
                <input
                  type="email"
                  value={attendeeEmail}
                  onChange={(e) => setAttendeeEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#9E1C58]"
                />
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">{isEn ? 'Total Amount:' : 'المبلغ الإجمالي:'}</span>
                  <span className="text-lg font-black text-[#9E1C58]">
                    {activeTicket.price === 0 ? (isEn ? 'Free' : 'مجاناً') : `${activeTicket.price} ${t('sar')}`}
                  </span>
                </div>

                <button
                  type="submit"
                  className="bg-[#9E1C58] hover:bg-[#B32265] text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-md cursor-pointer"
                >
                  {isEn ? 'Confirm & Get Pass' : 'تأكيد واستلام التذكرة'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CONFIRMED PASS POPUP */}
      {bookedPass && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border-2 border-emerald-400 text-center relative">
            <button
              onClick={() => setBookedPass(null)}
              className={`absolute top-4 ${isEn ? 'right-4' : 'left-4'} text-slate-400 hover:text-slate-600`}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <span className="text-xs font-bold text-emerald-700 block">{isEn ? 'Booking Confirmed Successfully!' : 'تم تأكيد الحجز بنجاح!'}</span>
            <h3 className="text-lg font-black text-slate-900 mt-1">{isEn ? 'Event Admission Pass' : 'تذكرة دخول الفعالية'}</h3>

            {/* Simulated QR Code Card */}
            <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
              <div className="w-24 h-24 bg-white border border-slate-300 rounded-xl mx-auto flex items-center justify-center p-2 shadow-inner">
                <QrCode className="w-20 h-20 text-slate-800" />
              </div>
              <div className="font-mono text-xs font-bold text-slate-700">{bookedPass.id}</div>
              <div className="text-xs font-bold text-[#9E1C58]">{bookedPass.ticketName}</div>
              <div className="text-[11px] text-slate-500">
                {isEn ? 'Attendee:' : 'المستفيد:'} <strong>{bookedPass.attendeeName}</strong>
              </div>
              <div className="text-[10px] text-slate-400">
                {bookedPass.location}
              </div>
            </div>

            <button
              onClick={() => window.print()}
              className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{isEn ? 'Save or Print Pass' : 'حفظ أو طباعة التذكرة'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
