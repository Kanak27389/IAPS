import React, { useState } from 'react';
import { ActiveScreen, UploadedDoc } from '../types';
import {
  Upload,
  FileCheck,
  CheckCircle2,
  Image as ImageIcon,
  FileText,
  Trash2,
  Sparkles,
  ShieldCheck,
  UploadCloud,
  Clock,
  ArrowRight
} from 'lucide-react';

interface UploadScreenProps {
  setActiveScreen: (screen: ActiveScreen) => void;
}

export const UploadScreen: React.FC<UploadScreenProps> = ({ setActiveScreen }) => {
  const [appId, setAppId] = useState('APP-2024-8921');
  const [docs, setDocs] = useState<UploadedDoc[]>([
    {
      id: 'doc-photo',
      type: 'photo',
      title: 'Passport Size Photograph',
      description: 'Recent clear color photograph with white or light background (JPG/PNG).',
      status: 'pending',
    },
    {
      id: 'doc-id',
      type: 'id_proof',
      title: 'Identity Proof (Aadhaar / Passport / ID)',
      description: 'Government-issued photo identification card with date of birth (PDF/JPG).',
      status: 'pending',
    },
    {
      id: 'doc-marksheet',
      type: 'marksheet',
      title: 'Educational Qualification Marksheet',
      description: 'Highest educational certificate or 10th/12th grade passing certificate.',
      status: 'pending',
    },
    {
      id: 'doc-sig',
      type: 'signature',
      title: 'Applicant Signature Scan',
      description: 'Clean specimen signature signed in dark ink on blank white paper.',
      status: 'pending',
    }
  ]);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleFileUpload = (docId: string, file: File) => {
    setDocs((prev) =>
      prev.map((d) => {
        if (d.id === docId) {
          const fileSizeFormatted = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;
          return {
            ...d,
            fileName: file.name,
            fileSize: fileSizeFormatted,
            status: 'uploaded',
            uploadedAt: new Date().toLocaleDateString('en-US', {
              month: 'short',
              day: '2-digit',
              year: 'numeric'
            })
          };
        }
        return d;
      })
    );

    setToastMessage(`Uploaded ${file.name} successfully.`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleRemoveDoc = (docId: string) => {
    setDocs((prev) =>
      prev.map((d) => {
        if (d.id === docId) {
          return {
            ...d,
            fileName: undefined,
            fileSize: undefined,
            status: 'pending',
            uploadedAt: undefined
          };
        }
        return d;
      })
    );
  };

  const uploadedCount = docs.filter((d) => d.status === 'uploaded' || d.status === 'verified').length;

  return (
    <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 py-10 md:py-16">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#002045] text-white px-5 py-3 rounded-2xl shadow-xl border border-[#79f7ea]/40 flex items-center gap-3 animate-in fade-in duration-200">
          <CheckCircle2 className="w-5 h-5 text-[#79f7ea]" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Title */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006a63] uppercase tracking-wider bg-[#79f7ea]/25 px-3.5 py-1 rounded-full mb-3">
          <Upload className="w-3.5 h-3.5" /> Student Verification Desk
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#002045] mb-2">
          Upload Admission Documents
        </h1>
        <p className="text-sm sm:text-base text-[#43474e] max-w-xl mx-auto">
          Please upload your supporting identification, educational records, and photograph to expedite document verification.
        </p>
      </div>

      {/* Application Reference Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#e0e3e5] mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-[#002045] text-[#79f7ea] flex items-center justify-center font-bold">
            <FileCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-[#74777f] font-semibold uppercase">Current Admission File</div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={appId}
                onChange={(e) => setAppId(e.target.value)}
                placeholder="Enter Application ID"
                className="font-mono font-bold text-[#002045] bg-[#f7fafc] px-3 py-1 rounded-lg border border-[#c4c6cf] text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-[#f1f4f6] px-4 py-2.5 rounded-2xl">
          <div className="text-xs text-[#74777f]">Upload Progress:</div>
          <div className="font-display font-bold text-sm text-[#006a63]">
            {uploadedCount} of {docs.length} Completed
          </div>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {docs.map((doc) => {
          const isUploaded = doc.status === 'uploaded' || doc.status === 'verified';

          return (
            <div
              key={doc.id}
              className="bg-white rounded-3xl p-6 shadow-sm border border-[#e0e3e5] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#002045]/10 text-[#002045] flex items-center justify-center">
                      {doc.type === 'photo' ? (
                        <ImageIcon className="w-5 h-5" />
                      ) : (
                        <FileText className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#002045]">
                        {doc.title}
                      </h3>
                      <p className="text-xs text-[#74777f] line-clamp-2 mt-0.5">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Upload Action Zone */}
                {isUploaded ? (
                  <div className="mt-4 p-4 bg-[#79f7ea]/15 rounded-2xl border border-[#79f7ea] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#007169] shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-[#002045] truncate max-w-[200px]">
                          {doc.fileName}
                        </p>
                        <p className="text-[11px] text-[#74777f]">
                          {doc.fileSize} • Uploaded on {doc.uploadedAt}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveDoc(doc.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                      title="Remove file"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                        handleFileUpload(doc.id, e.dataTransfer.files[0]);
                      }
                    }}
                    onClick={() => {
                      document.getElementById(`upload-${doc.id}`)?.click();
                    }}
                    className="mt-4 border-2 border-dashed border-[#c4c6cf] rounded-2xl p-6 text-center hover:border-[#006a63] hover:bg-[#f1f4f6] transition-colors cursor-pointer"
                  >
                    <input
                      id={`upload-${doc.id}`}
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleFileUpload(doc.id, e.target.files[0]);
                        }
                      }}
                    />
                    <UploadCloud className="w-8 h-8 text-[#006a63] mx-auto mb-1.5" />
                    <p className="text-xs font-bold text-[#002045]">
                      Click to upload or drag & drop file
                    </p>
                    <p className="text-[11px] text-[#74777f] mt-0.5">
                      Max file size: 10MB
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion Banner */}
      <div className="bg-[#1a365d] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="font-display text-xl font-bold text-white mb-1">
            Ready to track your admission status?
          </h3>
          <p className="text-xs sm:text-sm text-[#adc7f7]">
            Once all documents are uploaded, our verification team reviews your credentials within 24 business hours.
          </p>
        </div>

        <button
          onClick={() => {
            setActiveScreen('status');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="gradient-teal-blue text-white px-8 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 shrink-0 flex items-center gap-2 cursor-pointer"
        >
          Check Application Status
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
