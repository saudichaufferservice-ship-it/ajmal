"use client";

import { useState } from 'react';
import { Calendar, Clock, Users, MapPin, Briefcase, MessageCircle, Navigation } from 'lucide-react';

interface BookingFormProps {
  dark?: boolean;
  title?: string;
}

export default function BookingForm({ dark = false, title = "General Inquiry" }: BookingFormProps) {
  const [formData, setFormData] = useState({
    pickup: '', drop: '', date: '', time: '', passengers: '5', luggage: '1',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*BOOKING REQUEST: ${title.toUpperCase()}*\n\n` + 
      `📍 *Pickup:* ${formData.pickup}\n` +
      `🏁 *Destination:* ${formData.drop}\n` +
      `📅 *Date:* ${formData.date}\n` +
      `🕒 *Time:* ${formData.time}\n` +
      `👥 *Passengers:* ${formData.passengers}\n` +
      `🧳 *Luggage:* ${formData.luggage} bags\n\n` +
      `_Please provide a quote for this journey._`;
    
    window.open(`https://wa.me/966549100151?text=${encodeURIComponent(message)}`, '_blank');
  };

  const inputClass = dark
    ? "w-full pl-11 pr-4 py-4 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl text-sm focus:border-[#C49A6C] focus:outline-none transition-colors"
    : "w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl text-sm focus:border-[#701D45] focus:outline-none transition-colors";

  const labelClass = `text-[10px] font-black uppercase tracking-[0.2em] block mb-2 ${dark ? 'text-slate-400' : 'text-slate-500'}`;
  const iconClass = `absolute left-4 top-1/2 -translate-y-1/2 ${dark ? 'text-slate-500' : 'text-slate-300'}`;

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2 w-full">
          <label className={labelClass}>Pickup Location</label>
          <div className="relative">
            <MapPin className={iconClass} size={16} />
            <input type="text" name="pickup" required placeholder="City, hotel, or address" className={inputClass} onChange={handleChange} />
          </div>
        </div>
        <div className="space-y-2 w-full">
          <label className={labelClass}>Destination</label>
          <div className="relative">
            <Navigation className={iconClass} size={16} />
            <input type="text" name="drop" required placeholder="City, hotel, or address" className={inputClass} onChange={handleChange} />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 mb-10">
        <div className="space-y-2 w-full">
          <label className={labelClass}>Date</label>
          <div className="relative">
            <Calendar className={iconClass} size={16} />
            <input type="date" name="date" required className={inputClass} onChange={handleChange} />
          </div>
        </div>
        <div className="space-y-2 w-full">
          <label className={labelClass}>Time</label>
          <div className="relative">
            <Clock className={iconClass} size={16} />
            <input type="time" name="time" required className={inputClass} onChange={handleChange} />
          </div>
        </div>
        <div className="space-y-2 w-full">
          <label className={labelClass}>Passengers</label>
          <div className="relative">
            <Users className={iconClass} size={16} />
            <select name="passengers" value={formData.passengers} className={`${inputClass} appearance-none cursor-pointer`} onChange={handleChange}>
              {[1,2,3,4,5,6,7].map(n => <option key={n} value={n}>{n} {n === 1 ? 'passenger' : 'passengers'}</option>)}
            </select>
          </div>
        </div>
        <div className="space-y-2 w-full">
          <label className={labelClass}>Luggage</label>
          <div className="relative">
            <Briefcase className={iconClass} size={16} />
            <select name="luggage" value={formData.luggage} className={`${inputClass} appearance-none cursor-pointer`} onChange={handleChange}>
              {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'bag' : 'bags'}</option>)}
            </select>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#25D366] text-white font-black text-sm rounded-xl hover:bg-[#128C7E] transition-colors shadow-lg shadow-[#25D366]/20 uppercase tracking-widest"
      >
        <MessageCircle size={18} />
        Secure Protocol
      </button>
    </form>
  );
}
