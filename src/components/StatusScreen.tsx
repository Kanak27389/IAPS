import React, { useState } from 'react';
import { ActiveScreen, AdmissionApplication } from '../types';
import {
  Search,
  CheckCircle2,
  Clock,
  FileCheck,
  CreditCard,
  GraduationCap,
  Sparkles,
  AlertCircle,
  Download,
  Calendar,
  User,
  Phone,
  BookOpen
} from 'lucide-react';

interface StatusScreenProps {
  applications: Record<string, AdmissionApplication>;
  setActiveScreen: (screen: ActiveScreen) => void;
}

export const StatusScreen: React.FC<StatusScreenProps> = ({
  applications,
  setActiveScreen,
}) => {
  const [appIdInput, setAppIdInput] = useState('APP-2024-8921');
  const [mobileInput, setMobileInput] = useState('');
  const [currentApp, setCurrentApp] = useState<AdmissionApplication | null>(
    applications['APP-2024-8921'] || null
  );
  const [searched, setSearched] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const steps = [
    { title: 'Application Received', desc: 'Form submitted & registered' },
    { title: 'Under Verification', desc: 'Admin reviewing credentials' },
    { title: 'Documents Verified', desc: 'Academic records approved' },
    { title: 'Payment Verified', desc: 'Fee ledger confirmed' },
    { title: 'Admission Confirmed', desc: 'Roll number & student portal issued' },
  ];

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSearched(true);
    const key = appIdInput.trim();
    if (applications[key]) {
      setCurrentApp(applications[key]);
      setNotFound(false);
    } else {
      // Also try case-insensitive or partial match
      const found = (Object.values(applications) as AdmissionApplication[]).find(
        (a: AdmissionApplication) =>
          a.id.toLowerCase() === key.toLowerCase() ||
          (mobileInput && a.mobile.includes(mobileInput))
      );
      if (found) {
        setCurrentApp(found);
        setNotFound(false);
      } else {
        setCurrentApp(null);
        setNotFound(true);
      }
    }
  };

  const handlePresetSelect = (id: string) => {
    setAppIdInput(id);
    if (applications[id]) {
      setCurrentApp(applications[id]);
      setNotFound(false);
      setSearched(true);
    }
  };

  return (
    <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 py-10 md:py-16">
      {/* Title */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006a63] uppercase tracking-wider bg-[#79f7ea]/25 px-3.5 py-1 rounded-full mb-3">
          <Search className="w-3.5 h-3.5" /> Real-Time Tracking
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#002045] mb-2">
          Check Application Status
        </h1>
        <p className="text-sm sm:text-base text-[#43474e] max-w-xl mx-auto">
          Enter your Application Number and registered Mobile Number to track the live progress of your admission enrollment.
        </p>
      </div>

      {/* Lookup Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#e0e3e5] mb-10">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          <div className="md:col-span-5">
            <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
              Application Number
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={appIdInput}
                onChange={(e) => setAppIdInput(e.target.value)}
                placeholder="e.g. APP-2024-8921"
                className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] font-mono text-sm uppercase focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
              />
            </div>
          </div>

          <div className="md:col-span-4">
            <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
              Mobile Number (Optional)
            </label>
            <input
              type="tel"
              value={mobileInput}
              onChange={(e) => setMobileInput(e.target.value)}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
            />
          </div>

          <div className="md:col-span-3">
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl gradient-teal-blue text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4" /> Check Status
            </button>
          </div>
        </form>

        {/* Quick Sample Presets */}
        <div className="mt-4 pt-4 border-t border-[#e0e3e5] flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[#74777f] font-semibold">Quick test IDs:</span>
          {Object.keys(applications).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => handlePresetSelect(id)}
              className={`px-3 py-1 rounded-full border transition-colors cursor-pointer ${
                appIdInput === id
                  ? 'bg-[#002045] text-white border-[#002045]'
                  : 'bg-[#f1f4f6] text-[#002045] border-[#c4c6cf] hover:bg-[#e0e3e5]'
              }`}
            >
              {id}
            </button>
          ))}
        </div>
      </div>

      {/* Result Presentation */}
      {currentApp ? (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Status Header Badge */}
          <div className="bg-[#002045] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#79f7ea]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="text-xs uppercase font-bold text-[#79f7ea] tracking-wider mb-1">
                Application Verified
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                {currentApp.fullName}
              </h2>
              <p className="text-xs sm:text-sm text-[#adc7f7] mt-1 font-mono">
                ID: {currentApp.id} • Registered: {currentApp.submittedAt}
              </p>
            </div>

            <div className="px-5 py-2.5 rounded-full bg-[#79f7ea] text-[#007169] font-bold text-sm tracking-wide shadow-xs flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#007169] animate-pulse" />
              {currentApp.statusLabel}
            </div>
          </div>

          {/* Stepper Timeline */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e0e3e5] shadow-xs">
            <h3 className="font-display text-lg font-bold text-[#002045] mb-6">
              Application Journey Timeline
            </h3>

            <div className="relative">
              {/* Timeline Track */}
              <div className="hidden md:block absolute top-5 left-8 right-8 h-1 bg-[#ebeef0] -z-0" />

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                {steps.map((step, idx) => {
                  const isCompleted = idx <= currentApp.currentStepIndex;
                  const isCurrent = idx === currentApp.currentStepIndex;

                  return (
                    <div
                      key={idx}
                      className="flex md:flex-col items-start md:items-center gap-4 md:gap-3 text-left md:text-center"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-all ${
                          isCompleted
                            ? 'bg-[#006a63] text-white ring-4 ring-[#79f7ea]/40 shadow-xs'
                            : 'bg-[#ebeef0] text-[#74777f]'
                        }`}
                      >
                        {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                      </div>

                      <div>
                        <p
                          className={`text-sm font-bold ${
                            isCurrent ? 'text-[#006a63]' : isCompleted ? 'text-[#002045]' : 'text-[#74777f]'
                          }`}
                        >
                          {step.title}
                        </p>
                        <p className="text-xs text-[#74777f] mt-0.5 max-w-[150px]">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Detailed Application Information */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e0e3e5] shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#e0e3e5]">
              <h3 className="font-display text-lg font-bold text-[#002045]">
                Candidate & Program Details
              </h3>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#002045] bg-[#f1f4f6] px-3.5 py-1.5 rounded-full hover:bg-[#e0e3e5] transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Print Receipt
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-[#74777f] uppercase tracking-wide">Candidate Name</p>
                <p className="font-bold text-[#002045]">{currentApp.fullName}</p>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-semibold text-[#74777f] uppercase tracking-wide">Parent / Guardian</p>
                <p className="font-bold text-[#002045]">{currentApp.parentsName}</p>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-semibold text-[#74777f] uppercase tracking-wide">Selected Course</p>
                <p className="font-bold text-[#006a63]">{currentApp.courseName}</p>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-semibold text-[#74777f] uppercase tracking-wide">Batch Schedule</p>
                <p className="font-medium text-[#181c1e]">{currentApp.preferredBatch}</p>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-semibold text-[#74777f] uppercase tracking-wide">Contact Phone</p>
                <p className="font-medium text-[#181c1e]">{currentApp.mobile}</p>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-semibold text-[#74777f] uppercase tracking-wide">Email Address</p>
                <p className="font-medium text-[#181c1e]">{currentApp.email}</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#e0e3e5] flex flex-wrap gap-4 justify-end">
              <button
                onClick={() => setActiveScreen('payment')}
                className="px-6 py-2.5 rounded-full gradient-teal-blue text-white font-semibold text-xs sm:text-sm shadow-xs"
              >
                Submit Fee Settlement
              </button>
              <button
                onClick={() => setActiveScreen('upload')}
                className="px-6 py-2.5 rounded-full border border-[#1a365d] text-[#1a365d] font-semibold text-xs sm:text-sm hover:bg-[#1a365d]/5"
              >
                Upload Documents
              </button>
            </div>
          </div>
        </div>
      ) : notFound ? (
        <div className="bg-white rounded-3xl p-10 text-center border border-[#e0e3e5] shadow-xs">
          <AlertCircle className="w-12 h-12 text-[#74777f] mx-auto mb-3" />
          <h3 className="font-display text-xl font-bold text-[#002045] mb-1">
            No Application Found
          </h3>
          <p className="text-sm text-[#74777f] max-w-md mx-auto mb-6">
            We couldn't locate any application matching ID "{appIdInput}". Please check the spelling or submit a new admission form.
          </p>
          <button
            onClick={() => setActiveScreen('admission')}
            className="px-6 py-2.5 rounded-full gradient-teal-blue text-white text-xs sm:text-sm font-semibold"
          >
            Fill Admission Form
          </button>
        </div>
      ) : null}
    </div>
  );
};
