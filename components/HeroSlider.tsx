"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Users, Briefcase } from 'lucide-react';
import { vehicles, Vehicle } from '@/data/fleet';

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const selectedVehicles = vehicles.filter(v => v && v.image && v.image.length > 5);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % selectedVehicles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + selectedVehicles.length) % selectedVehicles.length);
  };

  useEffect(() => {
    if (selectedVehicles.length === 0) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [selectedVehicles.length]);

  if (selectedVehicles.length === 0) return null;

  const currentCar = selectedVehicles[currentIndex];

  return (
    <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center p-4 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="relative w-full h-full flex flex-col items-center justify-center pt-8"
        >
          {/* Car Image */}
          <div className="relative w-full h-2/3 md:h-full group">
            <Image
              src={currentCar.image}
              alt={currentCar.name}
              fill
              className="object-contain transition-transform duration-1000 group-hover:scale-105"
              priority
            />
          </div>

          {/* Floating Car Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden md:block absolute bottom-4 left-4 right-4 md:left-auto md:right-10 md:bottom-12 bg-black/60 backdrop-blur-xl p-4 md:p-6 rounded-3xl border border-white/10 shadow-2xl max-w-xs"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-gold-accent bg-gold-accent/10 px-3 py-1 rounded-full">
                  {currentCar.category}
                </span>
                <div className="flex gap-2">
                   <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-lg border border-white/5">
                      <Users size={12} className="text-slate-400" />
                      <span className="text-[10px] font-bold text-white">{currentCar.passengers}</span>
                   </div>
                   <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-lg border border-white/5">
                      <Briefcase size={12} className="text-slate-400" />
                      <span className="text-[10px] font-bold text-white">{currentCar.luggage}</span>
                   </div>
                </div>
              </div>
              <h4 className="text-lg md:text-xl font-black text-white">{currentCar.name}</h4>
              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed font-light">
                {currentCar.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-gold-accent hover:text-[#0c1320] transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex gap-2">
          {selectedVehicles.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 transition-all duration-300 rounded-full ${currentIndex === i ? 'w-8 bg-gold-accent' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-gold-accent hover:text-[#0c1320] transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
