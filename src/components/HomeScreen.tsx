import React from 'react';
import { ActiveScreen } from '../types';
import { ASSETS } from '../data/mockData';
import {
  TrendingUp,
  Laptop,
  Wrench,
  Award,
  Headphones,
  ArrowRight,
  Sparkles,
  ChevronRight,
  BookOpen
} from 'lucide-react';

interface HomeScreenProps {
  setActiveScreen: (screen: ActiveScreen) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ setActiveScreen }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 md:px-12 py-12 md:py-20 overflow-hidden bg-[#f1f4f6]/80 border-b border-[#c4c6cf]/20">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#79f7ea]/40 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 w-full">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col gap-5 text-left">
            <div className="inline-flex items-center gap-2 bg-[#002045]/10 text-[#1a365d] px-3.5 py-1.5 rounded-full w-max text-xs font-semibold tracking-wider uppercase shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#006a63] animate-pulse" />
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#006a63]" />
                ADMISSION OPEN 2026-2027
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#002045] leading-[1.1] tracking-tight">
              BUILD YOUR <br />
              <span className="gradient-text-teal-blue">DIGITAL FUTURE</span>
            </h1>

            <h2 className="font-display text-xl sm:text-2xl text-[#43474e] font-semibold">
              Learn. Develop. Succeed.
            </h2>

            <p className="text-base sm:text-lg text-[#181c1e]/85 max-w-xl leading-relaxed">
              Master practical computer skills with industry-leading experts. From foundational technology courses to advanced software development, we equip you for the modern digital landscape.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <button
                onClick={() => {
                  setActiveScreen('admission');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="gradient-teal-blue text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(43,108,176,0.25)] hover:shadow-[0_8px_24px_rgba(43,108,176,0.35)] transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                APPLY FOR ADMISSION
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setActiveScreen('courses');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border-2 border-[#1a365d] text-[#1a365d] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full hover:bg-[#1a365d] hover:text-white transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                EXPLORE COURSES
              </button>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="absolute inset-0 bg-[#006a63]/10 rounded-3xl blur-2xl transform translate-x-4 translate-y-4 pointer-events-none" />
            
            <div className="glass-panel p-2.5 sm:p-3.5 rounded-3xl shadow-xl relative z-10 border border-white/60">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full bg-[#ebeef0]">
                <img
                  src={ASSETS.heroLab}
                  alt="Modern Computer Lab at Icon Academy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002045]/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Stats Badge */}
            <div className="absolute -bottom-5 sm:-bottom-6 -left-3 sm:-left-6 glass-panel px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl shadow-xl z-20 flex items-center gap-3.5 border border-white/80 animate-in fade-in slide-in-from-bottom duration-500">
              <div className="bg-[#002045] text-white p-2.5 sm:p-3 rounded-xl shadow-xs">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#79f7ea]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#43474e] uppercase tracking-wide">
                  Success Rate
                </p>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#002045] leading-none">
                  98%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Why Choose Icon Academy */}
      <section className="py-16 md:py-24 px-4 md:px-12 max-w-[1320px] mx-auto bg-[#f7fafc]">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block text-xs font-bold text-[#006a63] uppercase tracking-widest bg-[#79f7ea]/25 px-3 py-1 rounded-full mb-3">
            Academic Excellence
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#002045] tracking-tight">
            Why Choose Icon Academy
          </h2>
          <p className="text-base sm:text-lg text-[#43474e] mt-3 max-w-2xl mx-auto">
            Premium IT education engineered for practical, real-world application and career leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-fr">
          {/* Card 1 (Spans 8 cols) - Online Admission */}
          <div className="md:col-span-8 bg-white rounded-3xl p-6 sm:p-8 shadow-[0_4px_16px_rgba(26,54,93,0.06)] hover:shadow-[0_12px_28px_rgba(26,54,93,0.1)] transition-all duration-300 group flex flex-col justify-between border border-[#e0e3e5] hover:border-[#79f7ea] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#1a365d]/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform pointer-events-none" />
            
            <div>
              <div className="w-13 h-13 rounded-2xl bg-[#1a365d] text-[#79f7ea] flex items-center justify-center mb-5 shadow-xs">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#002045] mb-2.5">
                Online Admission
              </h3>
              <p className="text-sm sm:text-base text-[#43474e] leading-relaxed max-w-xl">
                Streamlined, hassle-free enrollment process. Start your journey from anywhere in the world with our fully digital admission portal, transparent fee schedule, and instant application tracking.
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={() => {
                  setActiveScreen('admission');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-sm font-bold text-[#006a63] flex items-center gap-1.5 group-hover:gap-2.5 transition-all w-max cursor-pointer"
              >
                Learn more & register <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2 (Spans 4 cols) - Practical Training */}
          <div className="md:col-span-4 bg-gradient-to-br from-[#1a365d] to-[#003765] text-white rounded-3xl p-6 sm:p-8 shadow-[0_4px_16px_rgba(26,54,93,0.08)] hover:shadow-[0_12px_28px_rgba(26,54,93,0.15)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#79f7ea]/20 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
            
            <div>
              <div className="w-13 h-13 rounded-2xl bg-white/15 text-[#79f7ea] flex items-center justify-center mb-5 backdrop-blur-xs">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2.5">
                Practical Training
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                100% hands-on laboratory experience with industry-standard tools, real-time debugging, and live capstone projects.
              </p>
            </div>

            <div className="pt-6">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-[#79f7ea] border border-white/10">
                Project-First Pedagogy
              </span>
            </div>
          </div>

          {/* Card 3 (Spans 4 cols) - Certificate Courses */}
          <div className="md:col-span-4 bg-white rounded-3xl p-6 sm:p-8 shadow-[0_4px_16px_rgba(26,54,93,0.06)] hover:shadow-[0_12px_28px_rgba(26,54,93,0.1)] transition-all duration-300 group border border-[#e0e3e5] hover:border-[#79f7ea] flex flex-col justify-between">
            <div>
              <div className="w-13 h-13 rounded-2xl bg-[#79f7ea]/40 text-[#007169] flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#002045] mb-2.5">
                Certificate Courses
              </h3>
              <p className="text-sm sm:text-base text-[#43474e] leading-relaxed">
                Recognized certifications that validate your technical competence to top global employers and tech recruiters.
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={() => {
                  setActiveScreen('verify');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-bold text-[#006a63] hover:underline flex items-center gap-1"
              >
                Instant Online Verification <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4 (Spans 8 cols) - Dedicated Student Support */}
          <div className="md:col-span-8 bg-white rounded-3xl p-6 sm:p-8 shadow-[0_4px_16px_rgba(26,54,93,0.06)] hover:shadow-[0_12px_28px_rgba(26,54,93,0.1)] transition-all duration-300 group border border-[#e0e3e5] hover:border-[#79f7ea] flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1">
              <div className="w-13 h-13 rounded-2xl bg-[#1a365d] text-[#79f7ea] flex items-center justify-center mb-5 shadow-xs">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#002045] mb-2.5">
                Dedicated Student Support
              </h3>
              <p className="text-sm sm:text-base text-[#43474e] leading-relaxed">
                24/7 access to mentors, personalized career counseling, resume building, and academic guidance to ensure you never get stuck during your learning path.
              </p>
            </div>

            <div className="w-full md:w-5/12 h-44 sm:h-48 rounded-2xl overflow-hidden shrink-0 shadow-xs border border-[#e0e3e5]">
              <img
                src={ASSETS.supportCounselor}
                alt="Dedicated Student Support Counselor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-12 bg-[#1a365d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#79f7ea_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            START YOUR DIGITAL JOURNEY TODAY
          </h2>
          <p className="text-base sm:text-xl text-[#adc7f7] max-w-2xl mx-auto mb-8 leading-relaxed">
            Join thousands of students who have transformed their careers with our premium technical education programs and practical lab mentorship.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                setActiveScreen('admission');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="gradient-teal-blue text-white text-base font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95 tracking-wide cursor-pointer"
            >
              APPLY NOW
            </button>
            <button
              onClick={() => {
                setActiveScreen('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white/10 hover:bg-white/20 text-white text-base font-semibold px-8 py-4 rounded-full border border-white/20 transition-all cursor-pointer"
            >
              Contact Admissions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
