import React from 'react';
import { Course } from '../types';
import {
  X,
  Clock,
  Banknote,
  CheckCircle2,
  BookOpen,
  GraduationCap,
  Calendar,
  Layers
} from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onApply: (course: Course) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onApply,
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-[#002045]/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-10 border border-[#e0e3e5] animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#ebeef0] text-[#74777f] hover:text-[#002045] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6 pr-8">
          <div className="w-14 h-14 rounded-2xl bg-[#002045] text-[#79f7ea] flex items-center justify-center shrink-0 shadow-xs">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div>
            <div className="inline-block text-xs font-bold text-[#006a63] uppercase tracking-wider bg-[#79f7ea]/25 px-2.5 py-0.5 rounded-full mb-1.5">
              {course.level} Level
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#002045]">
              {course.title}
            </h2>
          </div>
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-[#f1f4f6] rounded-2xl mb-6">
          <div className="flex items-center gap-2 text-sm text-[#002045]">
            <Clock className="w-4 h-4 text-[#006a63]" />
            <div>
              <p className="text-[11px] text-[#74777f]">Duration</p>
              <p className="font-bold">{course.duration}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#002045]">
            <Banknote className="w-4 h-4 text-[#006a63]" />
            <div>
              <p className="text-[11px] text-[#74777f]">Total Fee</p>
              <p className="font-bold">{course.feeFormatted}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#002045] col-span-2 sm:col-span-1">
            <Layers className="w-4 h-4 text-[#006a63]" />
            <div>
              <p className="text-[11px] text-[#74777f]">Format</p>
              <p className="font-bold">100% Practical Labs</p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="mb-6">
          <h3 className="font-display text-lg font-bold text-[#002045] mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#006a63]" /> Course Overview
          </h3>
          <p className="text-sm sm:text-base text-[#43474e] leading-relaxed">
            {course.fullDesc}
          </p>
        </div>

        {/* Curriculum Modules */}
        <div className="mb-6">
          <h3 className="font-display text-lg font-bold text-[#002045] mb-3">
            What You Will Master
          </h3>
          <div className="space-y-2.5">
            {course.topics.map((topic, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-[#181c1e]">
                <CheckCircle2 className="w-4 h-4 text-[#006a63] shrink-0 mt-0.5" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prerequisites */}
        <div className="p-4 bg-[#ebeef0]/70 rounded-2xl mb-8">
          <h4 className="text-xs font-bold text-[#1a365d] uppercase tracking-wider mb-1">
            Prerequisites & Eligibility
          </h4>
          <p className="text-xs sm:text-sm text-[#43474e]">
            {course.prerequisites}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#e0e3e5]">
          <button
            onClick={onClose}
            className="w-full sm:w-1/2 py-3 rounded-full border border-[#74777f] text-[#002045] font-semibold text-sm hover:bg-[#ebeef0] transition-colors"
          >
            Close Details
          </button>
          <button
            onClick={() => {
              onApply(course);
              onClose();
            }}
            className="w-full sm:w-1/2 py-3 rounded-full gradient-teal-blue text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
          >
            Apply for this Course
          </button>
        </div>
      </div>
    </div>
  );
};
