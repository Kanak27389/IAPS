import React, { useState, useEffect } from 'react';
import { ActiveScreen, AdmissionApplication, PaymentRecord } from './types';
import { INITIAL_APPLICATIONS } from './data/mockData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { AboutScreen } from './components/AboutScreen';
import { CoursesScreen } from './components/CoursesScreen';
import { AdmissionScreen } from './components/AdmissionScreen';
import { PaymentScreen } from './components/PaymentScreen';
import { UploadScreen } from './components/UploadScreen';
import { StatusScreen } from './components/StatusScreen';
import { VerifyCertificateScreen } from './components/VerifyCertificateScreen';
import { GalleryScreen } from './components/GalleryScreen';
import { ContactScreen } from './components/ContactScreen';
import { LegalScreen } from './components/LegalScreen';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('home');
  const [selectedCourseForAdmission, setSelectedCourseForAdmission] = useState<string>('web-dev');
  const [applications, setApplications] = useState<Record<string, AdmissionApplication>>(() => {
    const saved = localStorage.getItem('icon_applications_db');
    if (saved) {
      try {
        return { ...INITIAL_APPLICATIONS, ...JSON.parse(saved) };
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_APPLICATIONS;
  });

  const [payments, setPayments] = useState<PaymentRecord[]>(() => {
    const saved = localStorage.getItem('icon_payments_db');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [];
  });

  const handleApplicationSubmitted = (app: AdmissionApplication) => {
    const updated = { ...applications, [app.id]: app };
    setApplications(updated);
    localStorage.setItem('icon_applications_db', JSON.stringify(updated));
  };

  const handlePaymentSubmitted = (payment: PaymentRecord) => {
    const updated = [payment, ...payments];
    setPayments(updated);
    localStorage.setItem('icon_payments_db', JSON.stringify(updated));

    // If payment belongs to an application, update its status
    if (payment.applicationId && applications[payment.applicationId]) {
      const targetApp = applications[payment.applicationId];
      const updatedApp: AdmissionApplication = {
        ...targetApp,
        status: 'payment_verified',
        statusLabel: 'Payment Verified',
        currentStepIndex: Math.max(targetApp.currentStepIndex, 3)
      };
      const updatedApps = { ...applications, [targetApp.id]: updatedApp };
      setApplications(updatedApps);
      localStorage.setItem('icon_applications_db', JSON.stringify(updatedApps));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7fafc] text-[#181c1e] selection:bg-[#79f7ea] selection:text-[#007169]">
      {/* Persistent Navigation Header */}
      <Header
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
      />

      {/* Main Screen Content Body with Spacing for Fixed Header */}
      <main className="flex-1 pt-18">
        {activeScreen === 'home' && (
          <HomeScreen setActiveScreen={setActiveScreen} />
        )}

        {activeScreen === 'about' && (
          <AboutScreen setActiveScreen={setActiveScreen} />
        )}

        {activeScreen === 'courses' && (
          <CoursesScreen
            setActiveScreen={setActiveScreen}
            setSelectedCourseForAdmission={setSelectedCourseForAdmission}
          />
        )}

        {activeScreen === 'admission' && (
          <AdmissionScreen
            setActiveScreen={setActiveScreen}
            selectedCourseForAdmission={selectedCourseForAdmission}
            onApplicationSubmitted={handleApplicationSubmitted}
          />
        )}

        {activeScreen === 'payment' && (
          <PaymentScreen
            setActiveScreen={setActiveScreen}
            onPaymentSubmitted={handlePaymentSubmitted}
          />
        )}

        {activeScreen === 'upload' && (
          <UploadScreen setActiveScreen={setActiveScreen} />
        )}

        {activeScreen === 'status' && (
          <StatusScreen
            applications={applications}
            setActiveScreen={setActiveScreen}
          />
        )}

        {activeScreen === 'verify' && (
          <VerifyCertificateScreen setActiveScreen={setActiveScreen} />
        )}

        {activeScreen === 'gallery' && (
          <GalleryScreen setActiveScreen={setActiveScreen} />
        )}

        {activeScreen === 'contact' && (
          <ContactScreen setActiveScreen={setActiveScreen} />
        )}

        {activeScreen === 'legal' && (
          <LegalScreen setActiveScreen={setActiveScreen} />
        )}
      </main>

      {/* Institutional Footer */}
      <Footer setActiveScreen={setActiveScreen} />
    </div>
  );
}
