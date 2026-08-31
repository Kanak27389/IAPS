import React, { useState } from 'react';
import { ActiveScreen, PaymentRecord } from '../types';
import { ASSETS } from '../data/mockData';
import {
  CreditCard,
  QrCode,
  Copy,
  Check,
  UploadCloud,
  FileImage,
  Trash2,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Info
} from 'lucide-react';

interface PaymentScreenProps {
  setActiveScreen: (screen: ActiveScreen) => void;
  onPaymentSubmitted: (payment: PaymentRecord) => void;
}

export const PaymentScreen: React.FC<PaymentScreenProps> = ({
  setActiveScreen,
  onPaymentSubmitted,
}) => {
  const [transactionId, setTransactionId] = useState('');
  const [paymentDate, setPaymentDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [studentRef, setStudentRef] = useState('');
  const [amount, setAmount] = useState('₹ 3,000');
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);

  const [copiedUpi, setCopiedUpi] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [receiptRecord, setReceiptRecord] = useState<PaymentRecord | null>(null);

  const officialUpiId = 'iconacademy.official@upi';

  const copyUpiId = () => {
    navigator.clipboard.writeText(officialUpiId);
    setCopiedUpi(true);
    setToastMessage('Official UPI ID copied to clipboard!');
    setTimeout(() => {
      setCopiedUpi(false);
      setToastMessage(null);
    }, 2500);
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelected(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelected = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image receipt (JPEG, PNG, WEBP).');
      return;
    }
    setScreenshotFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setScreenshotPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!transactionId || transactionId.trim().length < 8) {
      alert('Please enter a valid 12-digit UTR / Bank Transaction Reference Number.');
      return;
    }

    const record: PaymentRecord = {
      id: `PAY-${Date.now().toString().slice(-6)}`,
      transactionId: transactionId.trim(),
      applicationId: studentRef.startsWith('APP-') ? studentRef.trim() : undefined,
      studentName: studentRef && !studentRef.startsWith('APP-') ? studentRef.trim() : 'Enrolled Student',
      amount,
      paymentDate,
      screenshotUrl: screenshotPreview || undefined,
      screenshotName: screenshotFile?.name || 'payment_receipt.jpg',
      submittedAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }),
      verified: true
    };

    onPaymentSubmitted(record);
    setReceiptRecord(record);
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 md:px-8 py-10 md:py-16">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#002045] text-white px-5 py-3 rounded-2xl shadow-xl border border-[#79f7ea]/40 flex items-center gap-3 animate-in fade-in duration-200">
          <CheckCircle2 className="w-5 h-5 text-[#79f7ea]" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Payment Success Confirmation Modal */}
      {receiptRecord && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-[#002045]/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-[#e0e3e5] animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-2xl bg-[#79f7ea]/40 text-[#007169] flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <h3 className="font-display text-2xl font-bold text-center text-[#002045] mb-1">
              Payment Verification Submitted!
            </h3>
            <p className="text-sm text-center text-[#43474e] mb-6">
              Your transaction details have been queued for administrative ledger verification.
            </p>

            <div className="bg-[#f1f4f6] p-4 rounded-2xl border border-[#e0e3e5] mb-6 text-xs text-[#181c1e] space-y-2">
              <div className="flex justify-between pb-2 border-b border-[#e0e3e5]">
                <span className="text-[#74777f]">Verification Receipt ID:</span>
                <span className="font-mono font-bold text-[#002045]">{receiptRecord.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#74777f]">Transaction / UTR:</span>
                <span className="font-mono font-semibold">{receiptRecord.transactionId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#74777f]">Payment Date:</span>
                <span className="font-medium">{receiptRecord.paymentDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#74777f]">Recorded Amount:</span>
                <span className="font-bold text-[#006a63]">{receiptRecord.amount}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setReceiptRecord(null);
                  setActiveScreen('status');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-full gradient-teal-blue text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                Track Status & Receipt
              </button>
              <button
                onClick={() => {
                  setReceiptRecord(null);
                  setActiveScreen('upload');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-full border border-[#1a365d] text-[#1a365d] font-semibold text-sm hover:bg-[#1a365d]/5 transition-colors"
              >
                Upload Supporting Documents
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Title */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006a63] uppercase tracking-wider bg-[#79f7ea]/25 px-3.5 py-1 rounded-full mb-3">
          <CreditCard className="w-3.5 h-3.5" /> Instant & Secure UPI Settlement
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#002045] mb-2">
          REGISTRATION FEE PAYMENT
        </h1>
        <p className="text-sm sm:text-base text-[#43474e] max-w-xl mx-auto">
          Complete your registration fee via secure UPI QR Code and submit your 12-digit transaction UTR number below for immediate verification.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Scan to Pay */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#e0e3e5] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#002045] text-[#79f7ea]">
                  <QrCode className="w-5 h-5" />
                </div>
                <h2 className="font-display text-xl font-bold text-[#002045]">
                  Scan to Pay
                </h2>
              </div>
              <span className="text-[11px] font-bold bg-[#006a63]/10 text-[#006a63] px-2.5 py-1 rounded-full">
                Zero Convenience Fee
              </span>
            </div>

            <p className="text-xs text-[#74777f] mb-6">
              Use any authorized UPI app (Google Pay, PhonePe, Paytm, BHIM, Axis Bank, etc.)
            </p>

            {/* QR Code Container */}
            <div className="bg-[#f7fafc] p-4 rounded-2xl border border-[#c4c6cf]/60 max-w-[280px] mx-auto mb-6 shadow-inner text-center">
              <img
                src={ASSETS.qrCode}
                alt="Icon Academy Official UPI QR Code"
                className="w-full h-auto object-contain rounded-xl mx-auto"
              />
              <p className="text-[11px] font-semibold text-[#002045] mt-2">
                Scan with any UPI Banking App
              </p>
            </div>

            {/* Official UPI ID with Copy Button */}
            <div className="bg-[#f1f4f6] p-3.5 rounded-2xl border border-[#e0e3e5] mb-6">
              <div className="text-[11px] text-[#74777f] font-semibold uppercase tracking-wider mb-1">
                Official UPI VPA / ID
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-[#002045] truncate mr-2">
                  {officialUpiId}
                </span>
                <button
                  type="button"
                  onClick={copyUpiId}
                  className="flex items-center gap-1 text-xs font-semibold text-[#006a63] bg-white px-3 py-1.5 rounded-lg border border-[#c4c6cf] hover:bg-[#ebeef0] transition-colors shrink-0"
                >
                  {copiedUpi ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedUpi ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Step-by-Step Guide */}
            <div className="space-y-2.5 text-xs text-[#43474e] border-t border-[#e0e3e5] pt-4">
              <h3 className="font-bold text-[#002045] uppercase tracking-wider mb-2">
                5-Step Payment Guide:
              </h3>
              <div className="flex items-start gap-2">
                <span className="font-bold text-[#006a63]">1.</span>
                <span>Open Google Pay, PhonePe, Paytm, or BHIM.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-[#006a63]">2.</span>
                <span>Scan the QR code above or enter the official UPI ID.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-[#006a63]">3.</span>
                <span>Complete the course registration fee payment.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-[#006a63]">4.</span>
                <span>Copy the 12-digit UTR / Transaction Reference number.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-[#006a63]">5.</span>
                <span>Submit the form on the right with payment screenshot.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Payment Verification Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#e0e3e5]">
          <div className="flex items-center gap-3 pb-3 mb-6 border-b border-[#e0e3e5]">
            <div className="w-8 h-8 rounded-full bg-[#002045] text-white flex items-center justify-center text-sm font-bold">
              ✓
            </div>
            <h2 className="font-display text-xl font-bold text-[#002045]">
              Payment Verification Details
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
                Transaction ID / 12-Digit UTR Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                placeholder="e.g. 428190382910"
                className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] font-mono text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
              />
              <p className="text-[11px] text-[#74777f] mt-1">
                You can find this 12-digit number in your UPI transaction receipt details.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
                  Payment Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={paymentDate}
                  onChange={(e) => setPaymentDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
                  Fee Amount Paid
                </label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="₹ 3,000 / ₹ 12,000"
                  className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm font-semibold focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
                Student Name / Application Number
              </label>
              <input
                type="text"
                value={studentRef}
                onChange={(e) => setStudentRef(e.target.value)}
                placeholder="e.g. APP-2026-8921 or Jane Doe"
                className="w-full px-4 py-3 rounded-2xl bg-[#f7fafc] border border-[#c4c6cf] text-sm focus:bg-white focus:outline-hidden focus:border-[#1a365d]"
              />
            </div>

            {/* Drag & Drop Screenshot Upload */}
            <div>
              <label className="block text-xs font-bold text-[#002045] uppercase tracking-wider mb-2">
                Payment Screenshot / Receipt <span className="text-red-500">*</span>
              </label>

              {!screenshotPreview ? (
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleFileDrop}
                  className="border-2 border-dashed border-[#c4c6cf] rounded-2xl p-6 text-center hover:border-[#006a63] hover:bg-[#f1f4f6] transition-colors cursor-pointer"
                  onClick={() => {
                    document.getElementById('receipt-upload-input')?.click();
                  }}
                >
                  <input
                    id="receipt-upload-input"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleFileSelected(e.target.files[0]);
                      }
                    }}
                  />
                  <UploadCloud className="w-10 h-10 text-[#006a63] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-[#002045]">
                    Click to browse or drag & drop payment screenshot
                  </p>
                  <p className="text-xs text-[#74777f] mt-1">
                    Supports JPG, PNG, WEBP (Max 5MB)
                  </p>
                </div>
              ) : (
                <div className="relative p-3 bg-[#f7fafc] rounded-2xl border border-[#c4c6cf] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={screenshotPreview}
                      alt="Uploaded Receipt"
                      className="w-16 h-16 object-cover rounded-xl border border-[#e0e3e5]"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#002045] truncate max-w-[200px] sm:max-w-xs">
                        {screenshotFile?.name || 'receipt_screenshot.png'}
                      </p>
                      <p className="text-[11px] text-[#006a63] flex items-center gap-1 font-semibold mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Ready for submission
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setScreenshotFile(null);
                      setScreenshotPreview(null);
                    }}
                    className="p-2 rounded-xl text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-[#e0e3e5]">
              <button
                type="submit"
                className="w-full py-4 rounded-full gradient-teal-blue text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-5 h-5" /> SUBMIT PAYMENT DETAILS
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
