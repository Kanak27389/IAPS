import React, { useState } from 'react';
import { ActiveScreen } from '../types';
import { ASSETS } from '../data/mockData';
import {
  Menu,
  X,
  Home,
  Info,
  GraduationCap,
  FileCheck,
  CreditCard,
  Upload,
  Search,
  Award,
  Image,
  Mail
} from 'lucide-react';

interface HeaderProps {
  activeScreen: ActiveScreen;
  setActiveScreen: (screen: ActiveScreen) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeScreen, setActiveScreen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveScreen; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'courses', label: 'Courses', icon: GraduationCap },
    { id: 'admission', label: 'Admission', icon: FileCheck },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'upload', label: 'Upload', icon: Upload },
    { id: 'status', label: 'Status', icon: Search },
    { id: 'verify', label: 'Verify', icon: Award },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (screen: ActiveScreen) => {
    setActiveScreen(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#f7fafc]/90 backdrop-blur-md shadow-xs border-b border-[#c4c6cf]/30 transition-all">
        <div className="flex justify-between items-center px-4 md:px-12 py-3.5 max-w-[1320px] mx-auto">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Open Mobile Menu"
              className="lg:hidden text-[#002045] hover:text-[#006a63] p-1.5 rounded-lg hover:bg-[#ebeef0] transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left group transition-transform focus:outline-hidden"
            >
              <img
                alt="Icon Academy Logo"
                src={ASSETS.logo}
                className="h-10 w-10 object-contain rounded-full shadow-xs group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-[#002045] leading-none">
                  Icon Academy
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-[#006a63] uppercase hidden sm:block">
                  Of Information Technology
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#006a63] font-bold bg-[#79f7ea]/25 shadow-xs'
                      : 'text-[#43474e] hover:text-[#002045] hover:bg-[#ebeef0]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Trailing Action */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavClick('admission')}
              className="gradient-teal-blue text-white px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              Apply Now
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="fixed inset-0 bg-[#002045]/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 flex flex-col py-5 px-4 bg-[#f7fafc] shadow-2xl h-full w-[300px] sm:w-[320px] rounded-r-3xl z-10 transition-transform animate-in slide-in-from-left duration-300">
            <div className="flex justify-between items-center pb-4 border-b border-[#c4c6cf]/30">
              <div className="flex items-center gap-2.5">
                <img
                  alt="Icon Academy Logo"
                  src={ASSETS.logo}
                  className="h-9 w-9 object-contain rounded-full"
                />
                <span className="font-display text-lg font-bold text-[#002045]">
                  Icon Academy
                </span>
              </div>
              <button
                className="text-[#43474e] hover:text-[#002045] p-1.5 rounded-full hover:bg-[#ebeef0]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-3 px-1 text-xs font-semibold text-[#74777f] uppercase tracking-wider">
              Academy Portal Menu
            </div>

            <nav className="flex-1 overflow-y-auto flex flex-col gap-1 pr-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeScreen === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-3.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all text-left ${
                      isActive
                        ? 'bg-[#79f7ea] text-[#007169] font-bold shadow-xs'
                        : 'text-[#43474e] hover:bg-[#ebeef0] hover:text-[#002045]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#007169]' : 'text-[#74777f]'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-[#c4c6cf]/30 mt-auto flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('admission')}
                className="w-full gradient-teal-blue text-white py-2.5 rounded-full text-sm font-semibold shadow-sm text-center"
              >
                Apply for Admission
              </button>
              <p className="text-[11px] text-[#74777f] text-center">
                © 2026 Icon Academy of IT
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
