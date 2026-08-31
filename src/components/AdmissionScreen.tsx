import React, { useState, useEffect } from 'react';
import { ActiveScreen, AdmissionApplication } from '../types';
import { COURSES } from '../data/mockData';
import {
  FileCheck,
  CheckCircle2,
  Bookmark,
  Send,
  Sparkles,
  ArrowRight,
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';

interface AdmissionScreenProps {
  setActiveScreen: (screen: ActiveScreen) => void;
  selectedCourseForAdmission: string;
  onApplicationSubmitted: (app: AdmissionApplication) => void;
}

export const AdmissionScreen: React.FC<AdmissionScreenProps> = ({
  setActiveScreen,
  selectedCourseForAdmission,
  onApplicationSubmitted,
}) => {
  const [fullName, setFullName] = useState('');
  const [parentsName, setParentsName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('Male');
  const [mobile, setMobile] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(selectedCourseForAdmission || 'web-dev');
  const [qualification, setQualification] = useState('High School (12th Grade)');
  const [preferredBatch, setPreferredBatch] = useState('Morning (09:00 AM - 11:30 AM)');
  const [declarationAgreed, setDeclarationAgreed] = useState(false);

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [submittedApp, setSubmittedApp] = useState<AdmissionApplication | null>(null);
  const [copiedAppId, setCopiedAppId] = useState(false);

  // Sync selectedCourse if prop changes
  useEffect(() => {
    if (selectedCourseForAdmission) {
      setSelectedCourse(selectedCourseForAdmission);
    }
  }, [selectedCourseForAdmission]);

  // Load saved draft on mount
  useEffect(() => {
    const saved = localStorage.getItem('icon_admission_draft');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.fullName) setFullName(data.fullName);
        if (data.parentsName) setParentsName(data.parentsName);
        if (data.dob) setDob(data.dob);
        if (data.gender) setGender(data.gender);
        if (data.mobile) setMobile(data.mobile);
        if (data.whatsapp) setWhatsapp(data.whatsapp);
        if (data.email) setEmail(data.email);
        if (data.address) setAddress(data.address);
        if (data.selectedCourse) setSelectedCourse(data.selectedCourse);
        if (data.qualification) setQualification(data.qualification);
        if (data.preferredBatch) setPreferredBatch(data.preferredBatch);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSaveDraft = () => {
    const draft = {
      fullName,
      parentsName,
      dob,
      gender,
      mobile,
      whatsapp,
      email,
      address,
      selectedCourse,
      qualification,
      preferredBatch
    };
    localStorage.setItem('icon_admission_draft', JSON.stringify(draft));
    setToastMessage('Application draft saved successfully to local browser state.');
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !mobile || !email || !address) {
      alert('Please fill in all mandatory contact & personal details.');
      return;
    }

    if (!declarationAgreed) {
      alert('Please accept the declaration agreement before submitting.');
      return;
    }

    const courseObj = COURSES.find((c) => c.id === selectedCourse);
    const courseName = courseObj ? courseObj.title : 'General IT Course';
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const generatedId = `APP-2026-${randomNum}`;

    const newApp: AdmissionApplication = {
      id: generatedId,
      fullName,
      parentsName,
      dob,
      gender,
      mobile,
      whatsapp: whatsapp || mobile,
      email,
      address,
      courseId: selectedCourse,
      courseName,
      qualification,
      preferredBatch,
      submittedAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }),
      status: 'received',
      statusLabel: 'Application Received',
      currentStepIndex: 0
    };

    onApplicationSubmitted(newApp);
    localStorage.removeItem('icon_admission_draft');
    setSubmittedApp(newApp);
  };

  const copyAppId = () => {
    if (submittedApp) {
      navigator.clipboard.writeText(submittedApp.id);
      setCopiedAppId(true);
      setTimeout(() => setCopiedAppId(false), 2000);
    }
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-10 md:py-16">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#002045] text-white px-5 py-3 rounded-2xl shadow-xl border border-[#79f7ea]/40 flex items-center gap-3 animate-in fade-in slide-in-from-bottom duration-300">
          <CheckCircle2 className="w-5 h-5 text-[#79f7ea]" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Submission Success Modal */}
      {submittedApp && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-[#002045]/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-[#e0e3e5] animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-2xl bg-[#79f7ea]/40 text-[#007169] flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8" />
            </div>

            <h3 className="font-display text-2xl font-bold text-center text-[#002045] mb-1">
              Application Submitted!
            </h3>
            <p className="text-sm text-center text-[#43474e] mb-6">
              Your admission registration has been recorded with Icon Academy.
            </p>

            <div className="bg-[#f1f4f6] p-4 rounded-2xl border border-[#e0e3e5] mb-6">
              <div className="text-xs text-[#74777f] uppercase font-bold tracking-wider mb-1">
                Your Application ID
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xl font-bold text-[#002045]">
                  {submittedApp.id}
                </span>
                <button
                  onClick={copyAppId}
                  className="flex items-center gap-1 text-xs font-semibold text-[#006a63] bg-white px-3 py-1.5 rounded-lg border border-[#c4c6cf] hover:bg-[#ebeef0]"
                >
                  {copiedAppId ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedAppId ? 'Copied' : 'Copy ID'}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-[#e0e3e5] text-xs text-[#43474e] space-y-1">
                <p><strong>Candidate:</strong> {submittedApp.fullName}</p>
                <p><strong>Selected Course:</strong> {submittedApp.courseName}</p>
                <p><strong>Batch:</strong> {submittedApp.preferredBatch}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setSubmittedApp(null);
                  setActiveScreen('payment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-full gradient-teal-blue text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                Proceed to Fee Payment
              </button>
              <button
                onClick={() => {
                  setSubmittedApp(null);
                  setActiveScreen('status');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-full border border-[#1a365d] text-[#1a365d] font-semibold text-sm hover:bg-[#1a365d]/5 transition-colors"
              >
                Track Application Status
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Title & Description */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006a63] uppercase tracking-wider bg-[#79f7ea]/25 px-3.5 py-1 rounded-full mb-3">
          <FileCheck className="w-3.5 h-3.5" /> Official Admission Portal
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#002045] mb-2">
          Online Admission Registration
        </h1>
        <p className="text-sm sm:text-base text-[#43474e] max-w-xl mx-auto">
          Please fill out the form below carefully to secure your seat. You will receive an application number for future reference and fee settlement.
        </p>
      </div>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#e0e3e5] space-y-10"
      >
        {/* Step 1: Personal Details */}
        <div>
          <div className="flex items-center gap-3 pb-3 mb-6 border-b border-[#e0e3e5]">
            <div className="w-8 h-8 rounded-full bg-[#002045] text-white flex items-center justify-center text-sm font-bold">
              1
            </div>
            <h2 className="font-display text-xl font-bold text-[#002045]">
              Personal Details
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Johnathan Miller"
                className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d] focus:ring-1 focus:ring-[#1a365d]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
                Parent / Guardian Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={parentsName}
                onChange={(e) => setParentsName(e.target.value)}
                placeholder="e.g. Robert Miller"
                className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d] focus:ring-1 focus:ring-[#1a365d]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other / Non-Binary</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
                WhatsApp Number
              </label>
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="+1 (555) 000-0000 (Optional if same as mobile)"
                className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student.name@example.com"
                className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
                Full Residential Address <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Street address, apartment, city, state, postal zip code..."
                className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
              />
            </div>
          </div>
        </div>

        {/* Step 2: Course & Batch Preference */}
        <div>
          <div className="flex items-center gap-3 pb-3 mb-6 border-b border-[#e0e3e5]">
            <div className="w-8 h-8 rounded-full bg-[#002045] text-white flex items-center justify-center text-sm font-bold">
              2
            </div>
            <h2 className="font-display text-xl font-bold text-[#002045]">
              Course & Batch Selection
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
                Select Course <span className="text-red-500">*</span>
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm font-medium focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
              >
                {COURSES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title} — {c.duration} ({c.feeFormatted})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
                Highest Qualification <span className="text-red-500">*</span>
              </label>
              <select
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
              >
                <option value="High School (10th Grade)">High School (10th Grade)</option>
                <option value="Intermediate / 12th Standard">Intermediate / 12th Standard</option>
                <option value="Bachelor Degree (Ongoing)">Bachelor Degree (Ongoing)</option>
                <option value="Graduate (BCA / B.Tech / B.Sc / B.Com / BA)">Graduate Degree</option>
                <option value="Post Graduate (MCA / M.Tech / M.Sc / MBA)">Post Graduate</option>
                <option value="Working Professional">Working Professional</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
                Preferred Batch Timing <span className="text-red-500">*</span>
              </label>
              <select
                value={preferredBatch}
                onChange={(e) => setPreferredBatch(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
              >
                <option value="Morning (09:00 AM - 11:30 AM)">Morning (09:00 AM - 11:30 AM)</option>
                <option value="Afternoon (12:00 PM - 02:30 PM)">Afternoon (12:00 PM - 02:30 PM)</option>
                <option value="Evening (04:00 PM - 06:30 PM)">Evening (04:00 PM - 06:30 PM)</option>
                <option value="Weekend Intensive (Sat & Sun)">Weekend Intensive (Sat & Sun)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Step 3: Declaration & Agreements */}
        <div>
          <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[#e0e3e5]">
            <div className="w-8 h-8 rounded-full bg-[#002045] text-white flex items-center justify-center text-sm font-bold">
              3
            </div>
            <h2 className="font-display text-xl font-bold text-[#002045]">
              Student Declaration
            </h2>
          </div>

          <label className="flex items-start gap-3 p-4 bg-[#f7fafc] rounded-2xl border border-[#c4c6cf]/60 cursor-pointer hover:bg-[#ebeef0]/60 transition-colors">
            <input
              type="checkbox"
              checked={declarationAgreed}
              onChange={(e) => setDeclarationAgreed(e.target.checked)}
              className="mt-1 w-4 h-4 text-[#006a63] rounded-sm focus:ring-[#006a63]"
            />
            <span className="text-xs sm:text-sm text-[#43474e] leading-relaxed">
              I hereby declare that all the information provided in this admission form is complete, true, and correct to the best of my knowledge. I agree to abide by the academic code of conduct, computer lab safety rules, and attendance policies of Icon Academy of Information Technology.
            </span>
          </label>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#e0e3e5]">
          <button
            type="button"
            onClick={handleSaveDraft}
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#1a365d] text-[#1a365d] font-semibold text-sm hover:bg-[#1a365d]/5 flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <Bookmark className="w-4 h-4" /> Save Draft
          </button>

          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-3.5 rounded-full gradient-teal-blue text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" /> SUBMIT APPLICATION
          </button>
        </div>
      </form>
    </div>
  );
};
