import React from 'react';
import { ActiveScreen } from '../types';
import { ASSETS } from '../data/mockData';
import {
  GraduationCap,
  Users,
  Code2,
  BookOpen,
  Headphones,
  CheckCircle2,
  Award,
  Target,
  Compass,
  ArrowRight
} from 'lucide-react';

interface AboutScreenProps {
  setActiveScreen: (screen: ActiveScreen) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ setActiveScreen }) => {
  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 md:px-12 py-10 md:py-16">
      {/* Hero Section */}
      <section className="mb-14 md:mb-20 relative rounded-3xl overflow-hidden bg-[#f1f4f6] border border-[#c4c6cf]/30 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-14 z-10">
            <div className="inline-flex items-center gap-2 bg-[#002045]/10 text-[#1a365d] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-5">
              <GraduationCap className="w-4 h-4 text-[#006a63]" />
              Excellence in IT
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002045] leading-tight mb-5">
              About <span className="gradient-text-teal-blue">Icon Academy</span> of Information Technology
            </h1>

            <p className="text-base sm:text-lg text-[#43474e] mb-8 leading-relaxed">
              Empowering the next generation of tech leaders through quality computer education, hands-on practical training, and industry-experienced instructors. We are committed to making top-tier IT education accessible with affordable fees and flexible schedules.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setActiveScreen('courses');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="gradient-teal-blue text-white px-8 py-3 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                Explore Courses
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setActiveScreen('admission');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border border-[#1a365d] text-[#1a365d] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#1a365d] hover:text-white transition-all cursor-pointer"
              >
                Enroll Today
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-full min-h-[380px]">
            <img
              src={ASSETS.aboutLab}
              alt="Icon Academy Computer Lab with Students"
              className="absolute inset-0 w-full h-full object-cover rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f1f4f6]/80 via-transparent to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f1f4f6]/90 to-transparent block lg:hidden" />
          </div>
        </div>
      </section>

      {/* Bento Grid: Stats & Features */}
      <section className="mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Stat 1: 500+ Students Trained (Large Span: 8 cols) */}
          <div className="md:col-span-8 bg-white border border-[#c4c6cf]/30 rounded-3xl p-6 sm:p-10 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <Users className="w-36 h-36 text-[#002045]" />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
              <div>
                <h3 className="font-display text-5xl sm:text-6xl font-extrabold text-[#002045] leading-none mb-2">
                  500+
                </h3>
                <p className="font-display text-xl sm:text-2xl text-[#43474e] font-semibold">
                  Students Trained
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#74777f] max-w-lg leading-relaxed">
                Our alumni are successfully placed in leading tech companies globally, proving the effectiveness of our intensive training programs and industry-aligned capstones.
              </p>
            </div>
          </div>

          {/* Stat 2: 100% Practical Training (4 cols) */}
          <div className="md:col-span-4 bg-gradient-to-br from-[#1a365d] to-[#003765] rounded-3xl p-6 sm:p-10 shadow-xs text-white relative overflow-hidden flex flex-col justify-center items-center text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#79f7ea]/20 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-white/15 p-3.5 rounded-full mb-4 backdrop-blur-xs text-[#79f7ea]">
                <Code2 className="w-7 h-7" />
              </div>
              <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-1.5">
                100%
              </h3>
              <p className="text-base sm:text-lg text-white/90 font-medium">
                Practical Training Focus
              </p>
              <p className="text-xs text-white/70 mt-2 max-w-xs">
                Zero rote learning. All assignments run in live IDE and lab testbeds.
              </p>
            </div>
          </div>

          {/* Feature: 10+ Courses (5 cols) */}
          <div className="md:col-span-5 bg-white border border-[#c4c6cf]/30 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-center items-start group hover:border-[#79f7ea] transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-13 h-13 bg-[#e5e9eb] rounded-2xl flex items-center justify-center text-[#002045] group-hover:bg-[#79f7ea] group-hover:text-[#007169] transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#002045]">
                10+ Courses
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#43474e] leading-relaxed">
              From foundational programming to advanced AI, Cloud Computing, and UI/UX design, our curriculum is constantly updated each semester to meet changing corporate demands.
            </p>
          </div>

          {/* Feature: 24/7 Student Support (7 cols) */}
          <div className="md:col-span-7 bg-white border border-[#c4c6cf]/30 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center gap-6">
            <div className="w-full sm:w-1/2 rounded-2xl overflow-hidden h-48 relative shrink-0 shadow-xs border border-[#e0e3e5]">
              <img
                src={ASSETS.aboutSupport}
                alt="Student Mentor in Consultation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <div className="inline-flex items-center gap-1.5 bg-[#006a63]/10 text-[#006a63] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                <Headphones className="w-3.5 h-3.5" />
                Support
              </div>
              <h3 className="font-display text-2xl font-bold text-[#002045] mb-2">
                24/7 Student Support
              </h3>
              <p className="text-sm sm:text-base text-[#43474e] leading-relaxed">
                Dedicated mentorship, coding labs assistance, and career placement support available round the clock to ensure uninterrupted learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Statement */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-[#c4c6cf]/30 shadow-xs mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#002045] text-[#79f7ea] flex items-center justify-center shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-[#002045] mb-2">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-[#43474e] leading-relaxed">
                To democratize high-level IT education by bridging the gap between university theory and high-growth industry requirements through intensive, affordable, and practical pedagogy.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#006a63] text-[#79f7ea] flex items-center justify-center shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-[#002045] mb-2">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-[#43474e] leading-relaxed">
                To become the foremost technical learning benchmark, recognized globally for producing innovative engineers, proficient designers, and agile digital problem solvers.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#e0e3e5] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3 bg-[#f1f4f6] rounded-2xl">
            <CheckCircle2 className="w-5 h-5 text-[#006a63] mx-auto mb-1" />
            <p className="font-bold text-sm text-[#002045]">Certified Mentors</p>
            <p className="text-xs text-[#74777f]">Industry Veterans</p>
          </div>
          <div className="p-3 bg-[#f1f4f6] rounded-2xl">
            <Award className="w-5 h-5 text-[#006a63] mx-auto mb-1" />
            <p className="font-bold text-sm text-[#002045]">Recognized Badges</p>
            <p className="text-xs text-[#74777f]">QR Verifiable</p>
          </div>
          <div className="p-3 bg-[#f1f4f6] rounded-2xl">
            <Users className="w-5 h-5 text-[#006a63] mx-auto mb-1" />
            <p className="font-bold text-sm text-[#002045]">Placement Cell</p>
            <p className="text-xs text-[#74777f]">Top Tech Hiring</p>
          </div>
          <div className="p-3 bg-[#f1f4f6] rounded-2xl">
            <Code2 className="w-5 h-5 text-[#006a63] mx-auto mb-1" />
            <p className="font-bold text-sm text-[#002045]">Modern Labs</p>
            <p className="text-xs text-[#74777f]">High-End Hardware</p>
          </div>
        </div>
      </section>
    </div>
  );
};
