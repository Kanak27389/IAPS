export type ActiveScreen =
  | 'home'
  | 'about'
  | 'courses'
  | 'admission'
  | 'payment'
  | 'upload'
  | 'status'
  | 'verify'
  | 'gallery'
  | 'contact'
  | 'legal';

export interface Course {
  id: string;
  title: string;
  category: 'programming' | 'design' | 'office' | 'advanced';
  icon: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  fee: number;
  feeFormatted: string;
  topics: string[];
  prerequisites: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  popular?: boolean;
}

export interface AdmissionApplication {
  id: string;
  fullName: string;
  parentsName: string;
  dob: string;
  gender: string;
  mobile: string;
  whatsapp: string;
  email: string;
  address: string;
  courseId: string;
  courseName: string;
  qualification: string;
  preferredBatch: string;
  submittedAt: string;
  status: 'received' | 'under_verification' | 'documents_verified' | 'payment_verified' | 'admission_confirmed';
  statusLabel: string;
  currentStepIndex: number;
}

export interface PaymentRecord {
  id: string;
  transactionId: string;
  applicationId?: string;
  studentName?: string;
  courseName?: string;
  amount: string;
  paymentDate: string;
  screenshotUrl?: string;
  screenshotName?: string;
  submittedAt: string;
  verified: boolean;
}

export interface Certificate {
  id: string;
  certificateNumber: string;
  studentName: string;
  courseName: string;
  issueDate: string;
  grade: string;
  scorePercentage: number;
  instructor: string;
  status: 'VALID' | 'REVOKED' | 'EXPIRED';
  skills: string[];
}

export interface GalleryImage {
  id: string;
  category: 'computer-lab' | 'classroom' | 'students' | 'training';
  categoryLabel: string;
  title: string;
  description: string;
  imageUrl: string;
  span?: string;
}

export interface UploadedDoc {
  id: string;
  type: 'photo' | 'id_proof' | 'marksheet' | 'signature';
  title: string;
  description: string;
  fileName?: string;
  fileSize?: string;
  fileUrl?: string;
  status: 'pending' | 'uploaded' | 'verified';
  uploadedAt?: string;
}
