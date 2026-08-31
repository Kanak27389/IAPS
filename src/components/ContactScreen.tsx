import React, { useState } from 'react';
import { ActiveScreen } from '../types';
import { ASSETS } from '../data/mockData';
import { DirectionsModal } from './DirectionsModal';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Send,
  Navigation,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface ContactScreenProps {
  setActiveScreen: (screen: ActiveScreen) => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ setActiveScreen }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Admission Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [directionsOpen, setDirectionsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in all mandatory fields.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setSubmitted(false);
    }, 4500);
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 md:px-8 py-10 md:py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006a63] uppercase tracking-wider bg-[#79f7ea]/25 px-3.5 py-1 rounded-full mb-3">
          <Mail className="w-3.5 h-3.5" /> Admissions & Student Helpdesk
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002045] mb-3">
          Get in Touch
        </h1>
        <p className="text-base sm:text-lg text-[#43474e] max-w-xl mx-auto leading-relaxed">
          Have questions about our courses, admissions, or schedule? We're here to help you start your journey in tech.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
        {/* Left Column: Academy Info & Quick Actions */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#e0e3e5] space-y-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-[#002045] mb-1">
              Icon Academy
            </h2>
            <p className="text-xs font-semibold text-[#006a63] uppercase tracking-wider">
              Academy of Information Technology
            </p>
          </div>

          <div className="space-y-4 text-sm text-[#43474e]">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-[#002045]/10 text-[#002045] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-[#006a63]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#002045] uppercase tracking-wide">Campus Address</p>
                <p className="mt-0.5 leading-relaxed">123 Innovation Drive, Tech District, City 90210</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-[#002045]/10 text-[#002045] shrink-0 mt-0.5">
                <Phone className="w-4 h-4 text-[#006a63]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#002045] uppercase tracking-wide">Admissions Phone</p>
                <a href="tel:+15551234567" className="mt-0.5 hover:text-[#006a63] font-medium block">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-[#002045]/10 text-[#002045] shrink-0 mt-0.5">
                <MessageCircle className="w-4 h-4 text-[#006a63]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#002045] uppercase tracking-wide">WhatsApp Support</p>
                <a
                  href="https://wa.me/15559876543"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-0.5 hover:text-[#006a63] font-medium block"
                >
                  +1 (555) 987-6543
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-[#002045]/10 text-[#002045] shrink-0 mt-0.5">
                <Mail className="w-4 h-4 text-[#006a63]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#002045] uppercase tracking-wide">Official Email</p>
                <a
                  href="mailto:admissions@iconacademy.edu"
                  className="mt-0.5 hover:text-[#006a63] font-medium block"
                >
                  admissions@iconacademy.edu
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-[#002045]/10 text-[#002045] shrink-0 mt-0.5">
                <Clock className="w-4 h-4 text-[#006a63]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#002045] uppercase tracking-wide">Operating Hours</p>
                <p className="mt-0.5 text-xs text-[#74777f]">
                  Monday – Saturday: 8:00 AM – 8:00 PM <br />
                  Sunday: 10:00 AM – 4:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Quick Action Pills Grid */}
          <div className="pt-4 border-t border-[#e0e3e5] grid grid-cols-2 gap-2.5">
            <a
              href="tel:+15551234567"
              className="py-2.5 px-3 rounded-xl border border-[#002045] text-[#002045] text-xs font-bold text-center hover:bg-[#002045]/5 transition-colors flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" /> CALL NOW
            </a>
            <a
              href="https://wa.me/15559876543"
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-3 rounded-xl bg-[#25D366]/15 text-[#128C7E] border border-[#25D366]/40 text-xs font-bold text-center hover:bg-[#25D366]/25 transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WHATSAPP
            </a>
            <a
              href="mailto:admissions@iconacademy.edu"
              className="py-2.5 px-3 rounded-xl border border-[#002045] text-[#002045] text-xs font-bold text-center hover:bg-[#002045]/5 transition-colors flex items-center justify-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" /> EMAIL
            </a>
            <button
              onClick={() => setDirectionsOpen(true)}
              className="py-2.5 px-3 rounded-xl gradient-teal-blue text-white text-xs font-bold text-center shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5" /> DIRECTIONS
            </button>
          </div>
        </div>

        {/* Right Column: Send us a Message Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#e0e3e5]">
          <h2 className="font-display text-2xl font-bold text-[#002045] mb-1">
            Send us a Message
          </h2>
          <p className="text-xs text-[#74777f] mb-6">
            Fill out the inquiry form and our course counselors will get in touch with you within 2 hours.
          </p>

          {submitted ? (
            <div className="p-8 bg-[#79f7ea]/20 rounded-2xl border border-[#79f7ea] text-center animate-in zoom-in-95">
              <CheckCircle2 className="w-12 h-12 text-[#007169] mx-auto mb-3" />
              <h3 className="font-display text-xl font-bold text-[#002045] mb-1">
                Thank You, {name || 'Student'}!
              </h3>
              <p className="text-sm text-[#43474e]">
                Your message has been received. Our senior academic counselor will call you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@domain.com"
                    className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-1.5">
                    Enquiry Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
                  >
                    <option value="Admission Enquiry">Admission Enquiry</option>
                    <option value="Course Syllabus & Fees">Course Syllabus & Fees</option>
                    <option value="Certificate Verification">Certificate Verification</option>
                    <option value="Corporate / Group Training">Corporate / Group Training</option>
                    <option value="Career & Placement Assistance">Career & Placement Assistance</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-1.5">
                  Message / Questions <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your educational background and which course you wish to join..."
                  className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full gradient-teal-blue text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Map Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#e0e3e5]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h3 className="font-display text-xl font-bold text-[#002045]">
              Find Our Campus on the Map
            </h3>
            <p className="text-xs text-[#74777f]">
              Located in the heart of the innovation corridor with convenient public transit.
            </p>
          </div>

          <button
            onClick={() => setDirectionsOpen(true)}
            className="px-5 py-2.5 rounded-full gradient-teal-blue text-white text-xs font-bold shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5" /> View Transit Map
          </button>
        </div>

        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] min-h-[260px] bg-[#ebeef0] border border-[#e0e3e5]">
          <img
            src={ASSETS.contactMap}
            alt="Icon Academy Map Overview"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#002045] text-white px-4 py-2 rounded-2xl shadow-xl border-2 border-[#79f7ea] flex items-center gap-2 animate-bounce">
            <MapPin className="w-4 h-4 text-[#79f7ea]" />
            <span className="font-display text-xs font-bold">Icon Academy IT Campus</span>
          </div>
        </div>
      </div>

      {/* Directions Modal */}
      <DirectionsModal
        isOpen={directionsOpen}
        onClose={() => setDirectionsOpen(false)}
      />
    </div>
  );
};
