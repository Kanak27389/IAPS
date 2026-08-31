import React, { useState } from 'react';
import { Certificate, ActiveScreen } from '../types';
import { VERIFIED_CERTIFICATES, ASSETS } from '../data/mockData';
import {
  Award,
  Search,
  CheckCircle2,
  ShieldCheck,
  Download,
  Printer,
  Calendar,
  User,
  GraduationCap,
  Sparkles,
  AlertTriangle,
  QrCode,
  FileBadge
} from 'lucide-react';

interface VerifyCertificateScreenProps {
  setActiveScreen: (screen: ActiveScreen) => void;
}

export const VerifyCertificateScreen: React.FC<VerifyCertificateScreenProps> = ({
  setActiveScreen,
}) => {
  const [certInput, setCertInput] = useState('IA-2024-8942');
  const [currentCert, setCurrentCert] = useState<Certificate | null>(
    VERIFIED_CERTIFICATES['IA-2024-8942'] || null
  );
  const [searched, setSearched] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const handleVerify = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSearched(true);
    const key = certInput.trim().toUpperCase();
    if (VERIFIED_CERTIFICATES[key]) {
      setCurrentCert(VERIFIED_CERTIFICATES[key]);
      setNotFound(false);
    } else {
      setCurrentCert(null);
      setNotFound(true);
    }
  };

  const handleSelectPreset = (id: string) => {
    setCertInput(id);
    if (VERIFIED_CERTIFICATES[id]) {
      setCurrentCert(VERIFIED_CERTIFICATES[id]);
      setNotFound(false);
      setSearched(true);
    }
  };

  return (
    <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 py-10 md:py-16">
      {/* Title */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006a63] uppercase tracking-wider bg-[#79f7ea]/25 px-3.5 py-1 rounded-full mb-3">
          <ShieldCheck className="w-3.5 h-3.5" /> Public Credential Registry
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#002045] mb-2">
          Verify Your Certificate
        </h1>
        <p className="text-sm sm:text-base text-[#43474e] max-w-xl mx-auto">
          Authenticate student graduation certificates and professional credentials issued by the Icon Academy Examination Board.
        </p>
      </div>

      {/* Verification Lookup Input */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#e0e3e5] mb-10">
        <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <input
              type="text"
              required
              value={certInput}
              onChange={(e) => setCertInput(e.target.value.toUpperCase())}
              placeholder="Enter Certificate Number (e.g. IA-2024-8942)"
              className="w-full px-5 py-3.5 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] font-mono text-sm uppercase font-semibold focus:bg-white focus:outline-hidden focus:border-[#1a365d] focus:ring-1 focus:ring-[#1a365d]"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl gradient-teal-blue text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Search className="w-4 h-4" /> VERIFY CREDENTIAL
          </button>
        </form>

        {/* Quick Sample IDs */}
        <div className="mt-4 pt-4 border-t border-[#e0e3e5] flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[#74777f] font-semibold">Sample certified graduates:</span>
          {Object.keys(VERIFIED_CERTIFICATES).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => handleSelectPreset(id)}
              className={`px-3 py-1 rounded-full border transition-colors cursor-pointer ${
                certInput === id
                  ? 'bg-[#002045] text-white border-[#002045]'
                  : 'bg-[#f1f4f6] text-[#002045] border-[#c4c6cf] hover:bg-[#e0e3e5]'
              }`}
            >
              {id} ({VERIFIED_CERTIFICATES[id].studentName})
            </button>
          ))}
        </div>
      </div>

      {/* Verified Certificate Presentation */}
      {currentCert ? (
        <div className="animate-in fade-in zoom-in-95 duration-300">
          {/* Official Certificate Canvas Frame */}
          <div className="bg-gradient-to-b from-[#ffffff] to-[#f7fafc] rounded-3xl p-6 sm:p-12 border-4 border-[#1a365d] shadow-xl relative overflow-hidden">
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-3 left-3 w-12 h-12 border-t-2 border-l-2 border-[#006a63]" />
            <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-[#006a63]" />
            <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-[#006a63]" />
            <div className="absolute bottom-3 right-3 w-12 h-12 border-b-2 border-r-2 border-[#006a63]" />

            {/* Certificate Header */}
            <div className="text-center relative z-10 mb-8">
              <div className="flex justify-center items-center gap-3 mb-2">
                <img
                  src={ASSETS.logo}
                  alt="Icon Academy Crest"
                  className="w-16 h-16 object-contain rounded-full shadow-xs"
                />
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#002045] tracking-tight">
                ICON ACADEMY OF INFORMATION TECHNOLOGY
              </h2>
              <p className="text-xs text-[#006a63] uppercase tracking-widest font-bold mt-1">
                National IT Education & Skill Certification Board
              </p>
              <div className="w-24 h-1 bg-[#79f7ea] mx-auto mt-3 rounded-full" />
            </div>

            {/* Certificate Body */}
            <div className="text-center max-w-2xl mx-auto mb-8 space-y-4">
              <p className="text-xs sm:text-sm text-[#74777f] uppercase tracking-widest font-semibold">
                This is to officially certify that
              </p>

              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#002045] underline decoration-[#79f7ea] decoration-4 underline-offset-8">
                {currentCert.studentName}
              </h3>

              <p className="text-sm sm:text-base text-[#43474e] pt-2">
                has successfully fulfilled all curriculum requirements, practical laboratory examinations, and capstone project assessments for
              </p>

              <div className="p-4 bg-[#f1f4f6] rounded-2xl border border-[#e0e3e5] inline-block w-full">
                <h4 className="font-display text-xl sm:text-2xl font-bold text-[#006a63]">
                  {currentCert.courseName}
                </h4>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm">
                <div className="p-3 bg-white rounded-xl border border-[#e0e3e5]">
                  <span className="text-[#74777f] block text-[11px]">Academic Grade</span>
                  <span className="font-bold text-[#002045]">{currentCert.grade}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#e0e3e5]">
                  <span className="text-[#74777f] block text-[11px]">Evaluation Score</span>
                  <span className="font-bold text-[#006a63]">{currentCert.scorePercentage}%</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#e0e3e5] col-span-2 sm:col-span-1">
                  <span className="text-[#74777f] block text-[11px]">Date of Issue</span>
                  <span className="font-medium text-[#002045]">{currentCert.issueDate}</span>
                </div>
              </div>

              {/* Skills Verified */}
              <div className="pt-3">
                <p className="text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
                  Verified Core Competencies:
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {currentCert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#79f7ea]/25 text-[#007169] text-xs font-semibold rounded-full border border-[#79f7ea]"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certificate Footer / Signatures & QR */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end pt-8 border-t border-[#e0e3e5] relative z-10 text-center sm:text-left">
              <div>
                <div className="font-mono text-xs text-[#74777f]">Certificate Number:</div>
                <div className="font-mono text-sm font-bold text-[#002045]">
                  {currentCert.certificateNumber}
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mt-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Tamper-Proof Valid
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-20 h-20 p-1 bg-white rounded-xl border border-[#c4c6cf] shadow-xs">
                  <img
                    src={ASSETS.qrCode}
                    alt="Digital Credential QR"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="text-center sm:text-right">
                <div className="font-display font-bold text-sm text-[#002045]">
                  {currentCert.instructor}
                </div>
                <div className="text-xs text-[#74777f]">Academic Dean / Chief Examiner</div>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="mt-6 flex flex-wrap gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-[#e0e3e5]">
            <div className="flex items-center gap-2 text-xs text-[#006a63] font-semibold">
              <ShieldCheck className="w-4 h-4" /> This digital credential is authenticated on the official academy ledger.
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#002045] text-[#002045] font-semibold text-xs sm:text-sm hover:bg-[#002045]/5 cursor-pointer"
              >
                <Printer className="w-4 h-4" /> Print Certificate
              </button>
              <button
                onClick={() => {
                  alert(`Downloading cryptographic digital credential certificate for ${currentCert.studentName} (${currentCert.certificateNumber}).`);
                }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full gradient-teal-blue text-white font-semibold text-xs sm:text-sm shadow-xs hover:shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" /> Download Certified PDF
              </button>
            </div>
          </div>
        </div>
      ) : notFound ? (
        <div className="bg-white rounded-3xl p-10 text-center border border-[#e0e3e5] shadow-xs">
          <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-3" />
          <h3 className="font-display text-xl font-bold text-[#002045] mb-1">
            Certificate Not Found
          </h3>
          <p className="text-sm text-[#74777f] max-w-md mx-auto mb-6">
            We could not verify any official diploma or certificate matching ID "{certInput}". Please check the serial number on your printed document.
          </p>
          <button
            onClick={() => handleSelectPreset('IA-2024-8942')}
            className="px-6 py-2.5 rounded-full gradient-teal-blue text-white text-xs sm:text-sm font-semibold"
          >
            Load Sample Certificate
          </button>
        </div>
      ) : null}
    </div>
  );
};
