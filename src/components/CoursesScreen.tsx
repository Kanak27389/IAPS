import React, { useState } from 'react';
import { Course, ActiveScreen } from '../types';
import { COURSES } from '../data/mockData';
import { CourseDetailModal } from './CourseDetailModal';
import {
  Search,
  Clock,
  Banknote,
  Computer,
  Globe,
  Code,
  Palette,
  Database,
  Shield,
  Table,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Filter
} from 'lucide-react';

interface CoursesScreenProps {
  setActiveScreen: (screen: ActiveScreen) => void;
  setSelectedCourseForAdmission: (courseId: string) => void;
}

export const CoursesScreen: React.FC<CoursesScreenProps> = ({
  setActiveScreen,
  setSelectedCourseForAdmission,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modalCourse, setModalCourse] = useState<Course | null>(null);

  const getIconComponent = (icon: string) => {
    switch (icon) {
      case 'computer':
        return <Computer className="w-6 h-6" />;
      case 'web':
        return <Globe className="w-6 h-6" />;
      case 'code':
        return <Code className="w-6 h-6" />;
      case 'palette':
        return <Palette className="w-6 h-6" />;
      case 'database':
        return <Database className="w-6 h-6" />;
      case 'shield':
        return <Shield className="w-6 h-6" />;
      case 'table':
        return <Table className="w-6 h-6" />;
      case 'smartphone':
        return <Smartphone className="w-6 h-6" />;
      default:
        return <Computer className="w-6 h-6" />;
    }
  };

  const filteredCourses = COURSES.filter((c) => {
    const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleApply = (course: Course) => {
    setSelectedCourseForAdmission(course.id);
    setActiveScreen('admission');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 md:px-12 py-10 md:py-16">
      {/* Title & Introduction */}
      <div className="mb-10 md:mb-14 text-center">
        <div className="inline-block text-xs font-bold text-[#006a63] uppercase tracking-wider bg-[#79f7ea]/25 px-3.5 py-1 rounded-full mb-3">
          Curriculum Catalogue
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002045] mb-4">
          Explore Our Courses
        </h1>
        <p className="text-base sm:text-lg text-[#43474e] max-w-2xl mx-auto leading-relaxed">
          Discover a wide range of programs designed to elevate your skills and career. From foundational computer literacy to advanced design and development, find the perfect course for you.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
          {[
            { id: 'all', label: 'All Courses' },
            { id: 'programming', label: 'Programming & Web' },
            { id: 'design', label: 'Graphic & UI/UX' },
            { id: 'office', label: 'Computer Basics & Office' },
            { id: 'advanced', label: 'Data & Security' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#002045] text-white shadow-xs'
                  : 'bg-white border border-[#c4c6cf]/60 text-[#43474e] hover:bg-[#ebeef0]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#74777f]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search course title or topic..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#c4c6cf]/80 text-sm focus:outline-hidden focus:border-[#1a365d] focus:ring-1 focus:ring-[#1a365d] transition-all"
          />
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/80 group relative overflow-hidden"
          >
            {course.popular && (
              <div className="absolute top-0 right-0 bg-[#79f7ea] text-[#007169] text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                Popular
              </div>
            )}

            <div>
              <div className="w-13 h-13 rounded-2xl bg-[#d6e3ff]/60 text-[#002045] flex items-center justify-center mb-5 group-hover:bg-[#79f7ea]/40 group-hover:text-[#007169] transition-colors">
                {getIconComponent(course.icon)}
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#002045] mb-2.5">
                {course.title}
              </h3>

              <p className="text-sm text-[#43474e] mb-6 leading-relaxed line-clamp-3">
                {course.shortDesc}
              </p>
            </div>

            <div>
              {/* Meta pills */}
              <div className="space-y-2 mb-6 pt-4 border-t border-[#e0e3e5]/70 text-xs sm:text-sm text-[#43474e]">
                <div className="flex items-center gap-2 font-medium">
                  <Clock className="w-4 h-4 text-[#006a63]" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-[#002045]">
                  <Banknote className="w-4 h-4 text-[#006a63]" />
                  <span>{course.feeFormatted}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2.5">
                <button
                  onClick={() => setModalCourse(course)}
                  className="flex-1 rounded-full border border-[#002045] text-[#002045] py-2.5 text-xs sm:text-sm font-semibold hover:bg-[#002045]/5 transition-colors cursor-pointer text-center"
                >
                  VIEW DETAILS
                </button>
                <button
                  onClick={() => handleApply(course)}
                  className="flex-1 rounded-full gradient-teal-blue text-white py-2.5 text-xs sm:text-sm font-semibold hover:shadow-md transition-shadow cursor-pointer text-center"
                >
                  APPLY NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#c4c6cf]/30">
          <Filter className="w-10 h-10 text-[#74777f] mx-auto mb-3" />
          <h3 className="font-display text-lg font-bold text-[#002045]">No courses found</h3>
          <p className="text-sm text-[#74777f] mt-1">
            Try adjusting your search query or switching the category filter.
          </p>
        </div>
      )}

      {/* Details Modal */}
      <CourseDetailModal
        course={modalCourse}
        onClose={() => setModalCourse(null)}
        onApply={handleApply}
      />
    </div>
  );
};
