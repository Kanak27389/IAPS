import React from 'react';
import { X, MapPin, Navigation, Bus, Car, Train } from 'lucide-react';
import { ASSETS } from '../data/mockData';

interface DirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DirectionsModal: React.FC<DirectionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-[#002045]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-xl w-full p-6 sm:p-8 z-10 border border-[#e0e3e5] animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#ebeef0] text-[#74777f] hover:text-[#002045] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#002045] text-[#79f7ea] flex items-center justify-center">
            <Navigation className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-[#002045]">
              Campus Transit & Directions
            </h3>
            <p className="text-xs text-[#74777f]">123 Innovation Drive, Tech District, City 90210</p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden mb-6 border border-[#e0e3e5]">
          <img
            src={ASSETS.contactMap}
            alt="Campus Map Location"
            className="w-full h-48 object-cover"
          />
        </div>

        <div className="space-y-3 mb-6 text-xs sm:text-sm text-[#43474e]">
          <div className="flex items-start gap-2.5 p-3 bg-[#f1f4f6] rounded-xl">
            <Train className="w-4 h-4 text-[#006a63] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[#002045]">Metro / Subway</p>
              <p className="text-xs text-[#74777f]">Tech Hub Station (Line 2 Blue), Exit 4 — 2 min walk.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 bg-[#f1f4f6] rounded-xl">
            <Bus className="w-4 h-4 text-[#006a63] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[#002045]">City Bus Routes</p>
              <p className="text-xs text-[#74777f]">Routes 42, 88, 104 stop directly at Innovation Parkway Gate.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 bg-[#f1f4f6] rounded-xl">
            <Car className="w-4 h-4 text-[#006a63] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[#002045]">Parking Available</p>
              <p className="text-xs text-[#74777f]">Free student parking in underground Campus Lot B.</p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-full gradient-teal-blue text-white font-semibold text-sm shadow-md"
        >
          Close Directions
        </button>
      </div>
    </div>
  );
};
