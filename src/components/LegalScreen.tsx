import React, { useState } from 'react';
import { ActiveScreen } from '../types';
import {
  FileText,
  ShieldCheck,
  Lock,
  RotateCcw,
  AlertCircle,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

interface LegalScreenProps {
  setActiveScreen: (screen: ActiveScreen) => void;
}

export const LegalScreen: React.FC<LegalScreenProps> = ({ setActiveScreen }) => {
  const [activeSection, setActiveSection] = useState<'privacy' | 'terms' | 'refund' | 'security'>('privacy');

  const sections = [
    { id: 'privacy', title: 'Privacy Policy', icon: Lock },
    { id: 'terms', title: 'Terms of Service & Enrollment', icon: FileText },
    { id: 'refund', title: 'Refund & Cancellation Policy', icon: RotateCcw },
    { id: 'security', title: 'Campus Security & Integrity', icon: ShieldCheck },
  ];

  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 md:px-8 py-10 md:py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006a63] uppercase tracking-wider bg-[#79f7ea]/25 px-3.5 py-1 rounded-full mb-3">
          <FileText className="w-3.5 h-3.5" /> Institutional Governance
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002045] mb-2">
          Academic Policies & Legal Terms
        </h1>
        <p className="text-sm sm:text-base text-[#43474e] max-w-xl mx-auto">
          Transparency and academic integrity are fundamental to Icon Academy. Review our institutional policies below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar Nav */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-[#e0e3e5] sticky top-24">
          <h3 className="text-xs font-bold text-[#74777f] uppercase tracking-wider mb-4 px-2">
            Policy Navigation
          </h3>
          <div className="space-y-1">
            {sections.map((sec) => {
              const Icon = sec.icon;
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSection(sec.id as any)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-[#002045] text-white shadow-xs'
                      : 'text-[#43474e] hover:bg-[#ebeef0] hover:text-[#002045]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#79f7ea]' : 'text-[#74777f]'}`} />
                  <span>{sec.title}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-[#e0e3e5] px-2 text-xs text-[#74777f]">
            <p className="font-bold text-[#002045]">Last Updated:</p>
            <p>January 15, 2026</p>
            <p className="mt-2">Icon Academy Regulatory Compliance Office</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#e0e3e5]">
          {activeSection === 'privacy' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center gap-3 pb-4 border-b border-[#e0e3e5]">
                <div className="p-3 rounded-2xl bg-[#002045] text-[#79f7ea]">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-[#002045]">
                    Privacy Policy
                  </h2>
                  <p className="text-xs text-[#74777f]">Student Data Protection & Compliance</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#43474e] leading-relaxed">
                <p>
                  Icon Academy of Information Technology is dedicated to safeguarding the privacy and confidential personal data of our applicants, enrolled students, alumni, and campus visitors.
                </p>

                <h3 className="font-display text-base font-bold text-[#002045] pt-2">
                  1. Information We Collect
                </h3>
                <p>
                  When you register for courses, fill out online admission applications, or submit payment verifications, we collect identity information including your legal full name, contact numbers, email addresses, date of birth, educational records, and payment reference numbers.
                </p>

                <h3 className="font-display text-base font-bold text-[#002045] pt-2">
                  2. Use of Student Data
                </h3>
                <p>
                  Student information is used exclusively for admission processing, attendance tracking, issuance of verifiable graduation credentials, academic progress reporting, and authorized corporate placement services. We do not sell or lease personal data to external advertisers.
                </p>

                <h3 className="font-display text-base font-bold text-[#002045] pt-2">
                  3. Digital Security Standards
                </h3>
                <p>
                  All database records and uploaded identification documents are secured using TLS encryption in transit and encrypted data-at-rest storage compliant with international educational security protocols.
                </p>
              </div>
            </div>
          )}

          {activeSection === 'terms' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center gap-3 pb-4 border-b border-[#e0e3e5]">
                <div className="p-3 rounded-2xl bg-[#002045] text-[#79f7ea]">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-[#002045]">
                    Terms of Service & Enrollment
                  </h2>
                  <p className="text-xs text-[#74777f]">Academic Guidelines & Student Responsibilities</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#43474e] leading-relaxed">
                <h3 className="font-display text-base font-bold text-[#002045]">
                  1. Enrollment Eligibility & Seat Allotment
                </h3>
                <p>
                  Admission to all training tracks is confirmed only upon successful verification of prerequisite educational qualification documents and settlement of the prescribed course registration fee. Seats are allotted on a first-come, first-served merit basis.
                </p>

                <h3 className="font-display text-base font-bold text-[#002045] pt-2">
                  2. Attendance & Lab Requirements
                </h3>
                <p>
                  To qualify for certificate examination and placement assistance, students must maintain a minimum of 80% attendance in scheduled laboratory sessions and submit all designated weekly code assignments.
                </p>

                <h3 className="font-display text-base font-bold text-[#002045] pt-2">
                  3. Intellectual Property
                </h3>
                <p>
                  All software source code, proprietary course notes, lab exercises, and video lectures provided during the training curriculum remain the intellectual property of Icon Academy. Redistribution is strictly prohibited.
                </p>
              </div>
            </div>
          )}

          {activeSection === 'refund' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center gap-3 pb-4 border-b border-[#e0e3e5]">
                <div className="p-3 rounded-2xl bg-[#002045] text-[#79f7ea]">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-[#002045]">
                    Refund & Cancellation Policy
                  </h2>
                  <p className="text-xs text-[#74777f]">Transparent Fee Reversal Schedule</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#43474e] leading-relaxed">
                <p>
                  We aim to provide exceptional learning experiences. If your circumstances change prior to batch commencement, our refund schedule applies as follows:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#e0e3e5] my-4">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#f1f4f6] text-[#002045] font-bold border-b border-[#e0e3e5]">
                      <tr>
                        <th className="p-3.5">Cancellation Timing</th>
                        <th className="p-3.5">Refund Percentage</th>
                        <th className="p-3.5">Deduction Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e0e3e5]">
                      <tr>
                        <td className="p-3.5 font-medium">7+ days before batch starts</td>
                        <td className="p-3.5 font-bold text-emerald-600">100% Refund</td>
                        <td className="p-3.5 text-[#74777f]">Less ₹500 administrative processing</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium">1 - 6 days before batch starts</td>
                        <td className="p-3.5 font-bold text-blue-600">80% Refund</td>
                        <td className="p-3.5 text-[#74777f]">20% seat allocation retention</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium">Within first week of classes</td>
                        <td className="p-3.5 font-bold text-amber-600">50% Refund</td>
                        <td className="p-3.5 text-[#74777f]">Courseware & lab access fee deducted</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium">After 7 days of batch start</td>
                        <td className="p-3.5 font-bold text-red-600">Non-Refundable</td>
                        <td className="p-3.5 text-[#74777f]">Transfer to future batch permitted</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-[#79f7ea]/15 rounded-2xl border border-[#79f7ea] text-xs text-[#007169]">
                  <p className="font-bold mb-1">How to request a refund:</p>
                  <p>
                    Submit a formal written request along with your Application ID and transaction proof to <strong>admissions@iconacademy.edu</strong>. Processed within 5-7 working bank days.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'security' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center gap-3 pb-4 border-b border-[#e0e3e5]">
                <div className="p-3 rounded-2xl bg-[#002045] text-[#79f7ea]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-[#002045]">
                    Campus Security & Code of Conduct
                  </h2>
                  <p className="text-xs text-[#74777f]">Safety, Respect & Professional Ethics</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#43474e] leading-relaxed">
                <div className="p-4 bg-[#f1f4f6] rounded-2xl border border-[#e0e3e5] flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#006a63] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#002045] text-xs uppercase tracking-wider mb-1">
                      Zero-Tolerance Policy
                    </h4>
                    <p className="text-xs text-[#43474e]">
                      Icon Academy enforces zero tolerance for academic plagiarism, cyber tampering, unauthorized access to academy networks, and harassment of any nature.
                    </p>
                  </div>
                </div>

                <h3 className="font-display text-base font-bold text-[#002045] pt-2">
                  Laboratory Equipment Guidelines
                </h3>
                <p>
                  Students are provided high-performance computing terminals. Installation of unapproved third-party software, mining scripts, or bypassing network firewalls is grounds for immediate termination of enrollment.
                </p>

                <h3 className="font-display text-base font-bold text-[#002045] pt-2">
                  Emergency Assistance
                </h3>
                <p>
                  Campus security officers and emergency medical first-responders are stationed on-site during all operational hours. Contact the campus desk immediately in any emergency.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
