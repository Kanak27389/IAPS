import React from 'react';
import { ActiveScreen } from '../types';
import { Mail, Phone, MapPin, ShieldCheck, FileText, Lock, Globe } from 'lucide-react';

interface FooterProps {
  setActiveScreen: (screen: ActiveScreen) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveScreen }) => {
  const handleNav = (screen: ActiveScreen) => {
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#002045] text-white w-full relative mt-auto border-t border-[#1a365d]">
      <div className="max-w-[1320px] mx-auto px-4 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="font-display text-2xl md:text-3xl font-bold text-[#79f7ea] tracking-tight mb-3">
                Icon Academy
              </div>
              <p className="text-sm font-medium text-[#adc7f7] mb-2">
                Academy of Information Technology
              </p>
              <p className="text-sm text-white/75 leading-relaxed max-w-sm mb-6">
                Empowering the next generation of tech leaders through quality computer education, hands-on practical training, and globally recognized certifications.
              </p>
            </div>
            <div className="text-xs text-white/50 space-y-1">
              <p>© 2026 Icon Academy of IT. All rights reserved.</p>
              <p className="flex items-center gap-1.5 text-[#79f7ea]/80">
                <Globe className="w-3.5 h-3.5" /> ISO 9001:2015 Certified IT Institute
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">
              Explore Academy
            </span>
            <button
              onClick={() => handleNav('home')}
              className="text-sm text-white/80 hover:text-[#79f7ea] text-left transition-colors"
            >
              Home & Overview
            </button>
            <button
              onClick={() => handleNav('about')}
              className="text-sm text-white/80 hover:text-[#79f7ea] text-left transition-colors"
            >
              About Our Campus & Faculty
            </button>
            <button
              onClick={() => handleNav('courses')}
              className="text-sm text-white/80 hover:text-[#79f7ea] text-left transition-colors"
            >
              Certified Courses & Syllabus
            </button>
            <button
              onClick={() => handleNav('admission')}
              className="text-sm text-white/80 hover:text-[#79f7ea] text-left transition-colors"
            >
              Online Admission Registration
            </button>
            <button
              onClick={() => handleNav('payment')}
              className="text-sm text-white/80 hover:text-[#79f7ea] text-left transition-colors"
            >
              UPI Fee Payment & UTR Verification
            </button>
            <button
              onClick={() => handleNav('gallery')}
              className="text-sm text-white/80 hover:text-[#79f7ea] text-left transition-colors"
            >
              Campus Life in Pictures
            </button>
          </div>

          {/* Policies & Verification */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <span className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">
              Verification & Legal
            </span>
            <button
              onClick={() => handleNav('verify')}
              className="text-sm text-white/80 hover:text-[#79f7ea] text-left transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#79f7ea]" /> Verify Certificate
            </button>
            <button
              onClick={() => handleNav('status')}
              className="text-sm text-white/80 hover:text-[#79f7ea] text-left transition-colors"
            >
              Check Application Status
            </button>
            <button
              onClick={() => handleNav('upload')}
              className="text-sm text-white/80 hover:text-[#79f7ea] text-left transition-colors"
            >
              Student Document Upload
            </button>
            <button
              onClick={() => handleNav('legal')}
              className="text-sm text-white/80 hover:text-[#79f7ea] text-left transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#79f7ea]" /> Academic & Privacy Policy
            </button>
            <button
              onClick={() => handleNav('legal')}
              className="text-sm text-white/80 hover:text-[#79f7ea] text-left transition-colors flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5 text-[#79f7ea]" /> Terms & Refund Policy
            </button>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 flex flex-col gap-3.5">
            <span className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">
              Connect With Us
            </span>
            <div className="text-sm text-white/80 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#79f7ea] shrink-0 mt-1" />
              <span>123 Innovation Drive, Tech District, City 90210</span>
            </div>
            <a
              href="tel:+15551234567"
              className="text-sm text-white/80 hover:text-[#79f7ea] flex items-center gap-2.5 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#79f7ea] shrink-0" />
              <span>+1 (555) 123-4567</span>
            </a>
            <a
              href="mailto:admissions@iconacademy.edu"
              className="text-sm text-white/80 hover:text-[#79f7ea] flex items-center gap-2.5 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#79f7ea] shrink-0" />
              <span>admissions@iconacademy.edu</span>
            </a>
            <button
              onClick={() => handleNav('contact')}
              className="mt-2 text-xs font-semibold text-[#002045] bg-[#79f7ea] px-4 py-2 rounded-full hover:bg-white transition-colors self-start"
            >
              Contact Campus Office
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
