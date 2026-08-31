import React, { useState } from 'react';
import { GalleryImage, ActiveScreen } from '../types';
import { GALLERY_ITEMS } from '../data/mockData';
import {
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Layers
} from 'lucide-react';

interface GalleryScreenProps {
  setActiveScreen: (screen: ActiveScreen) => void;
}

export const GalleryScreen: React.FC<GalleryScreenProps> = ({ setActiveScreen }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filterCategories = [
    { id: 'all', label: 'All Photos' },
    { id: 'computer-lab', label: 'Computer Lab' },
    { id: 'classroom', label: 'Classroom' },
    { id: 'students', label: 'Students' },
    { id: 'training', label: 'Training Sessions' },
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        activeLightboxIndex === 0 ? filteredItems.length - 1 : activeLightboxIndex - 1
      );
    }
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        activeLightboxIndex === filteredItems.length - 1 ? 0 : activeLightboxIndex + 1
      );
    }
  };

  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 md:px-12 py-10 md:py-16">
      {/* Title */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006a63] uppercase tracking-wider bg-[#79f7ea]/25 px-3.5 py-1 rounded-full mb-3">
          <ImageIcon className="w-3.5 h-3.5" /> Campus Tour & Facilities
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002045] mb-2">
          Campus Life in Pictures
        </h1>
        <p className="text-base sm:text-lg text-[#43474e] max-w-xl mx-auto">
          Explore our modern computing laboratories, collaborative learning pods, and hands-on classroom environments.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === cat.id
                ? 'bg-[#002045] text-white shadow-xs'
                : 'bg-white border border-[#c4c6cf]/60 text-[#43474e] hover:bg-[#ebeef0]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            className={`relative rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer border border-[#e0e3e5] bg-white ${
              item.span || 'h-[320px]'
            }`}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#002045]/90 via-[#002045]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

            {/* Top Category Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[11px] font-bold rounded-full border border-white/30">
                {item.categoryLabel}
              </span>
            </div>

            {/* Zoom Icon Button */}
            <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Bottom Caption Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#002045]/90 backdrop-blur-md animate-in fade-in duration-200">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Card */}
          <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col">
            <div className="relative flex-1 min-h-[300px] max-h-[65vh] bg-black">
              <img
                src={filteredItems[activeLightboxIndex].imageUrl}
                alt={filteredItems[activeLightboxIndex].title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-white flex justify-between items-center">
              <div>
                <span className="text-xs font-bold text-[#006a63] uppercase tracking-wider bg-[#79f7ea]/25 px-2.5 py-0.5 rounded-full mb-1 inline-block">
                  {filteredItems[activeLightboxIndex].categoryLabel}
                </span>
                <h3 className="font-display text-xl font-bold text-[#002045]">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#43474e] mt-0.5">
                  {filteredItems[activeLightboxIndex].description}
                </p>
              </div>

              <div className="text-xs text-[#74777f] font-mono shrink-0 ml-4">
                {activeLightboxIndex + 1} / {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
