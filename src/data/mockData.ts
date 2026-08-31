import { Course, Certificate, GalleryImage, AdmissionApplication } from '../types';

export const ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYLKspbizHiUO9aOaZMsQvHX1wO30iUi8ilrFKoGmnUEvK8loFOH5Y_ZpiR2rbtmkCRABYVWsv9XFKQjvpakhB3JPOZEJBUc11JVGrwK4Co7a36j2o2dtMrmkQ6U5CLmY9qfMEFvPHLq7FklnAv8pIMlzzY35-L3Ai403ockpW-5QRCSZUJid8Dvtk2do9DqU18tgvVUO40xWO5TASyi2ji-6Cun2_EragjNaKZBkTyUgAXOrxjV8S',
  heroLab: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzvZITskEvbgz7uQBR3n-Tiq5asireYkv6WPsvckje8sboi41CT3ZpbNTQnth98e9JMwh3W4E-bVF2RF5FnGVKD5nRTcZvXpcw7DQbnelo81KQJdCXhNR1mTr0P6XgxjW8mdHqYBh25y-K-q7Zj-7fqFuIeTos_EZd__b_v4t4ejQEwoVG3fX-KcxJ-uttdjtxQio_JwVnpVAtG1qZzV4D79cDgiKYJIsM3rS4M1rkTSLHnPB5EBSv',
  supportCounselor: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4wJvQRQNrx0TZdcUbDzCBr97XWGAJUJAKfUhgbQbzRTc4jjeVWLHO8g_7adewawh29pAxxS55iVdL2cayT6IlNJAjNHV4_0D46F-SNIgcfxNR3F8m62gBlfT4H4E1f4hQFp_cO0y8V5yHhG7UfoL3tspEPiJbXP2bIvxRxwLbxPqSS-KZ9JHZ-Qgc24e9rZY1dc-MPnJpO5HldA50HENA5rbiOJXoUMVuev9wpcJBFRoNptVwoRE7',
  aboutLab: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8vDpIiMnY9rfeGvnlLvQBNeqxFacU5L9jOQ6dy-R_tCyAjPv_Tjrz8XHcirZrG4r6E-ldM-Ow8sh2tuEl_LwQYB39-CSrM0LuveGjBcvR8fL_u2swU1ZydKv3P9c3WsPBh8JC9wOh1BMpekXAPRUFIZdxsyc4IFRIKRl-3WQ3fQG6w1EtLbRHX-04rmVQqtD-jb_8DvwP-xykkEanvAOUFRuiFgzPY9PcJ4kX4ufJ4R8OIhC7yXZz',
  aboutSupport: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwAtUbW1F2Wyn6KDFUfZqMz1yKDsWa05PBXm_Mij8pdwqQbfQ8E5nnhXLrHw2WXWxlEFC4_k4UjojPvJro5C5xfFRQmtL98F4SdGCkrizkr3C85lTTnhRVVjlUyTx9ZGLV6U6N8oUCHWGYHA1VOEPaQ8Co7gmzIUlfdeNKh1qlIUr6oT_YTLtBGDAbLOfmnbwruyT5SsxpoCW5IubIHzAHGRGHy6BEuXWaLqBoz4wW7k2fLhG64S9T',
  qrCode: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbbUpryvpEpQ4SF-sKKr22ca-hI5UucXTr9_bGQ7oJySV6LnWAxbsddiLnD6zI3fTJfiLKkcKQsxAAyn3D6i1vvQ5n8_Tvh9vTbI2exJre8ltlrRKEmpEQlmQHaW2A7OPHIbokucueGiIXIXtLkWN2aKyDDvOtwqupFHk9SO2PT20CiXmTXFClHeCynB0di61AL7TglcyfciGDgNYVU2n6qSssijVyZfXBiT2Y9ByGVdf__AsRb5dr',
  contactMap: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEcMT64SqQl5Ic1VvFwgPiOSpyAj-B-AZGgvzLnevXbu08sRKuiz4T4qWL2nt0i4kIb720J8yixY7Z4aOwREnnDPvshou8_pGZQY1kvlRQ4XvxZFp29RyZH5U0QXBEQZux5dQynH4TKkw7fddm5s85dcxUgm02Pu2C-KQeM3AMS9Mr9NqywlwgQbqEmXUbu3Aanm-CNoVPKOe7KB7gWUrqvHDU70NJltSnXzJDUseKgZwvxnNYjYcX',
  gallery1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBci9IZ-zby0ykuxZ4FlH2xnGewVG2HX7yFtPj1nCS9ed0nrGSA5hCCxvEeR1gGtoXWUKTnGmOX916gq01EYb-PQo73-OZy0BEzpa5FrSgIZR6t-wQD9Osn1oQZT6RCkDA7Y3PcaMpQ441x9btsBrLyRgCeCzhRZ4TC2EYjy3wzQoVrY5MHJpyRjKZZ4lt4HZ4QM1xPGxe_ZteAeNjnmtjpeN4SSVTHVFazKB57zh73PiZ0D1vvpqD9',
  gallery2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB20KELXst3JCWAlKCs451iWBffFzeA8ZqZuvcojw5JidB0vot_nvin-c1SeUEebqw-vwg3u7RoLyCpHaKFjcGXXNCKht_4xbV_z5-bdSXOGWN0K_O4z_05OvZJ70uRVZW_AHQjIaZD7k0_6HQuvFC2tFX6Adr_A0JRVQj1OydOdsD_kAM69KH2-lk7NuM1EX2b9zTwxZ2P4GuCcVMAAsQwkNnRxS0C9PiDnPiDHr6xYJrIyzljK3-7',
  gallery3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvEGFMTbKzAPAjjR2KQnOunPi68ON9MaRnE1p5_m5dtEkqFUafd5PIJ6nFyN144tTDCIxGuC41BO8-3RGfONitJ7pyDTbwtITR3IHghJDy6oH0dr3k3o2S_xJwS6dhOzaxC4aDuC2-PxbBPypL-5UQJQuWSYNC283KVfEFRwv-On2HShTMEaPWnxT_uvQlOxEgHjG05Yrp_5_J68_zpIbCIhFESIhp_VULsDoEmv56-CS3MaIPpDJz',
  gallery4: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBYsbx3-UlFY55WatB5vI2CGU34F8GVewMJZTLwy7jbqPK0DWIRCIV1GC-LJszEBn8ZyP__6Ll8hfjCu0ontbEr8CSN-hwopjZ3N02D5G-JiOl2YHHGl__o_F-gIsOCdgxwZayCEptkreaXsnWAuM4OkxgeJFxNeDxQwEqTAlw7-F9REzfCT4Jq-83KLoSzgzRtZvvQe40RAmHF_QL3R9ClHG_ql0x4U5uZ3hO2cCuqmq_9pI2qnHU',
  gallery5: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_9XS6qDijT-yukOFizoaC0bn1RSWJpS3y-i1K2ra_s8koE3euxi1zJ1r5Uvz0H4JychMQYb51rAdgJ_Ulq_nJJdgn9u8TcY4n1L2U6voXixIFAKKmNH_yzrI8f6Kvqt7H1rBN-pMKIs__X2fVY-YilqTxfjaeicSzpdzfnwE8VJp_MOkdgpvRLGj13bhITGer3bqimGH_YZ57lLaDeK54NnT-e6IqkvNX89YS7ioGYFmxfoZcnTKE',
  gallery6: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCgKfGZLipDm2hDfLYBfJudigdWCtOsInX7Gq5pf93YTmwlHQLEFqvlIyXC4MCcHWBPsJNeb8Y7IO1c9dTkrgDGV0jphG5XoSh8rgF_BOvgidmnbU4nnhVcUgUoOUYyuRFMpOus1JhrGxqqISjs7vhkCeA7MFCm22s0ykdgqDmIwbtiDOewEMz2hvFnrA7Ul4aJ0DLaFHhAKvbPjC7Ope2nAZO0ChwAbfP1JGgqPxM9AiIsU39Spq2',
};

export const COURSES: Course[] = [
  {
    id: 'bcc',
    title: 'Basic Computer Course',
    category: 'office',
    icon: 'computer',
    shortDesc: 'Fundamental skills for navigating the digital world, covering OS basics, internet usage, and essential software.',
    fullDesc: 'A foundational technology training program designed for beginners to develop complete digital literacy, including operating system navigation, Microsoft Office Suite (Word, Excel, PowerPoint), typing proficiency, cyber hygiene, and online collaboration tools.',
    duration: '3 Months',
    fee: 3000,
    feeFormatted: '₹ 3,000',
    topics: [
      'Computer Fundamentals & Operating Systems (Windows & Linux)',
      'MS Office Suite (Word, Excel, PowerPoint, Access)',
      'Internet Basics, Email Etiquette & Cloud Storage (Google Drive)',
      'English & Regional Typing Speed Building',
      'Cyber Safety, Password Hygiene & Digital Transactions'
    ],
    prerequisites: 'No prior coding or technical knowledge required. Open to all students.',
    level: 'Beginner',
    popular: true
  },
  {
    id: 'web-dev',
    title: 'Web Design & Dev',
    category: 'programming',
    icon: 'web',
    shortDesc: 'Master front-end and back-end technologies to build responsive, modern websites and applications.',
    fullDesc: 'Comprehensive full-stack web engineering program covering HTML5, CSS3, JavaScript ES6+, Tailwind CSS, React.js, Node.js backend services, RESTful APIs, Git version control, and production cloud deployment.',
    duration: '6 Months',
    fee: 12000,
    feeFormatted: '₹ 12,000',
    topics: [
      'Semantic HTML5, Modern CSS3, Flexbox, CSS Grid & Responsive Design',
      'Tailwind CSS & Utility-First Architecture',
      'JavaScript ES6+, Asynchronous Programming, DOM Manipulation',
      'React.js Components, State Hooks, Routing & API Integration',
      'Node.js, Express & Database Basics (MongoDB/PostgreSQL)',
      'Git, GitHub, CI/CD & Cloud Hosting Deployment'
    ],
    prerequisites: 'Basic familiarity with computer operations.',
    level: 'Intermediate',
    popular: true
  },
  {
    id: 'python-fullstack',
    title: 'Python Full Stack Development',
    category: 'programming',
    icon: 'code',
    shortDesc: 'Build robust web applications and automated data pipelines using Python, Django, and modern frontend tools.',
    fullDesc: 'Industry-standard Python development covering object-oriented programming, data structures, Django & FastAPI backend frameworks, PostgreSQL integration, authentication, and REST API development.',
    duration: '6 Months',
    fee: 15000,
    feeFormatted: '₹ 15,000',
    topics: [
      'Python Syntax, Core OOP, Exception Handling, File I/O',
      'Data Structures & Algorithms in Python',
      'Django Web Framework, ORM & Admin Panel',
      'FastAPI for High-Performance Microservices',
      'Relational Databases with PostgreSQL & SQLite',
      'Building RESTful APIs with Token Authentication'
    ],
    prerequisites: 'Basic logic understanding. Prior programming experience is a plus but not required.',
    level: 'Intermediate'
  },
  {
    id: 'ui-ux-design',
    title: 'Graphic & UI/UX Design',
    category: 'design',
    icon: 'palette',
    shortDesc: 'Design user-centric interfaces and compelling visual branding using Figma, Adobe Illustrator, and Photoshop.',
    fullDesc: 'Master human-centered UI/UX design and modern digital graphic production. Learn wireframing, interactive prototyping, typography, design systems, usability testing, and client branding guidelines.',
    duration: '4 Months',
    fee: 10000,
    feeFormatted: '₹ 10,000',
    topics: [
      'Design Fundamentals: Color Theory, Typography, Visual Hierarchy',
      'Figma: Wireframing, Auto Layout, Components & Interactive Prototypes',
      'Design Systems & Responsive Multi-Screen Layouts',
      'User Research, Information Architecture & User Journey Mapping',
      'Adobe Photoshop & Illustrator for Brand Identity & Vector Artwork',
      'Portfolio Construction & Case Study Presentation'
    ],
    prerequisites: 'Creative curiosity and basic computer familiarity.',
    level: 'Beginner',
    popular: true
  },
  {
    id: 'data-science',
    title: 'Data Science & Machine Learning',
    category: 'advanced',
    icon: 'database',
    shortDesc: 'Harness data with Python, Pandas, NumPy, statistical modeling, and machine learning algorithms.',
    fullDesc: 'Delve into practical data analysis, exploratory data visualization, predictive machine learning models, statistical inference, and real-world analytics dashboards using Python libraries and Scikit-Learn.',
    duration: '6 Months',
    fee: 18000,
    feeFormatted: '₹ 18,000',
    topics: [
      'NumPy, Pandas & Exploratory Data Analysis (EDA)',
      'Data Visualization with Matplotlib, Seaborn & PowerBI',
      'Supervised & Unsupervised Machine Learning with Scikit-Learn',
      'Linear Regression, Decision Trees, Random Forests, Clustering',
      'Feature Engineering & Model Performance Evaluation',
      'End-to-End Capstone Data Science Project'
    ],
    prerequisites: 'Basic knowledge of high school mathematics/statistics and programming basics.',
    level: 'Advanced'
  },
  {
    id: 'cloud-security',
    title: 'Cloud & Cybersecurity Fundamentals',
    category: 'advanced',
    icon: 'shield',
    shortDesc: 'Protect enterprise infrastructure, configure secure cloud servers, and understand modern network defense.',
    fullDesc: 'Hands-on practical training in cloud infrastructure (AWS/Google Cloud basics), Linux server administration, networking protocols (TCP/IP, DNS, SSL), vulnerability assessment, and defensive security essentials.',
    duration: '5 Months',
    fee: 16000,
    feeFormatted: '₹ 16,000',
    topics: [
      'Linux System Administration & Command-Line Fluency',
      'Computer Networking & Network Security Protocols',
      'Cloud Architecture Fundamentals (AWS / GCP Compute, Storage, VPC)',
      'Security Operations, Firewalls & Access Management (IAM)',
      'Vulnerability Scanning & Penetration Testing Basics',
      'Incident Response & Compliance Best Practices'
    ],
    prerequisites: 'Basic understanding of computer operating systems and networking.',
    level: 'Intermediate'
  },
  {
    id: 'office-excel',
    title: 'Advanced Excel & Office Automation',
    category: 'office',
    icon: 'table',
    shortDesc: 'Master data analysis, pivot tables, complex formulas, XLOOKUP, and automated business reporting.',
    fullDesc: 'Intensive corporate-ready Excel course for professionals and students seeking high-speed data manipulation, dynamic dashboard creation, financial modeling formulas, Power Query, and macro automation.',
    duration: '2 Months',
    fee: 4500,
    feeFormatted: '₹ 4,500',
    topics: [
      'Advanced Formulas (INDEX-MATCH, XLOOKUP, Dynamic Arrays, Nested IFs)',
      'Interactive Pivot Tables, Pivot Charts & Slicers',
      'Data Cleaning & Transformation with Power Query',
      'Conditional Formatting & Executive Management Dashboards',
      'Data Validation, Protection & Audit Features',
      'Introduction to Excel VBA & Macro Recording'
    ],
    prerequisites: 'Basic knowledge of computers.',
    level: 'Beginner'
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development (Flutter)',
    category: 'programming',
    icon: 'smartphone',
    shortDesc: 'Create cross-platform iOS and Android mobile apps using Dart and the Flutter framework.',
    fullDesc: 'Build high-performance, native-feel mobile applications for Android and iOS from a single Dart codebase. Learn widget architecture, state management (Provider/Bloc), local SQLite storage, Firebase backend, and app store deployment.',
    duration: '5 Months',
    fee: 14000,
    feeFormatted: '₹ 14,000',
    topics: [
      'Dart Programming Language Fundamentals & OOP',
      'Flutter Widget Tree, Custom Layouts & Material Design 3',
      'State Management Patterns (Provider & Riverpod)',
      'REST API Integration, JSON Parsing & Caching',
      'Firebase Auth, Cloud Firestore & Push Notifications',
      'Building APKs and Publishing to App Store & Google Play'
    ],
    prerequisites: 'Basic programming concepts in any language.',
    level: 'Intermediate'
  }
];

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 'g1',
    category: 'computer-lab',
    categoryLabel: 'Computer Lab',
    title: 'Advanced Computing Lab',
    description: 'State-of-the-art workstations for intensive coding sessions and project development.',
    imageUrl: ASSETS.gallery1,
    span: 'col-span-1 md:col-span-2 h-[320px] md:h-[400px]'
  },
  {
    id: 'g2',
    category: 'students',
    categoryLabel: 'Students',
    title: 'Collaborative Hub',
    description: 'Students working together on team capstone projects and peer programming.',
    imageUrl: ASSETS.gallery2,
    span: 'col-span-1 h-[320px]'
  },
  {
    id: 'g3',
    category: 'classroom',
    categoryLabel: 'Classroom',
    title: 'Interactive Lectures',
    description: 'Engaging smart-classroom environments with high-resolution digital displays.',
    imageUrl: ASSETS.gallery3,
    span: 'col-span-1 h-[320px]'
  },
  {
    id: 'g4',
    category: 'training',
    categoryLabel: 'Training Sessions',
    title: 'Hands-on Mentorship',
    description: '1-on-1 personalized guidance during intensive hands-on lab training.',
    imageUrl: ASSETS.gallery4,
    span: 'col-span-1 md:row-span-2 h-[320px] md:h-auto'
  },
  {
    id: 'g5',
    category: 'computer-lab',
    categoryLabel: 'Computer Lab',
    title: 'Facility Readiness',
    description: 'Prepared and modern lab environments for the next generation of IT leaders.',
    imageUrl: ASSETS.gallery5,
    span: 'col-span-1 h-[320px]'
  },
  {
    id: 'g6',
    category: 'students',
    categoryLabel: 'Students',
    title: 'Campus Atrium',
    description: 'Bright spaces for collaborative study, tech meetups, and campus relaxation.',
    imageUrl: ASSETS.gallery6,
    span: 'col-span-1 md:col-span-2 h-[320px]'
  }
];

export const VERIFIED_CERTIFICATES: Record<string, Certificate> = {
  'IA-2024-8942': {
    id: 'IA-2024-8942',
    certificateNumber: 'IA-2024-8942',
    studentName: 'Jane Doe',
    courseName: 'Advanced UI/UX Design',
    issueDate: 'October 15, 2024',
    grade: 'A+ (Distinction)',
    scorePercentage: 96,
    instructor: 'Prof. David Vance, Principal UX Lead',
    status: 'VALID',
    skills: ['Figma Design Systems', 'User Research', 'Interactive Prototyping', 'Design Sprint', 'Micro-Interactions']
  },
  'IA-2024-1021': {
    id: 'IA-2024-1021',
    certificateNumber: 'IA-2024-1021',
    studentName: 'Rahul Sharma',
    courseName: 'Web Design & Dev',
    issueDate: 'August 28, 2024',
    grade: 'A (First Class)',
    scorePercentage: 92,
    instructor: 'Er. Sandeep Patel, Head of Engineering',
    status: 'VALID',
    skills: ['HTML5/CSS3', 'React 19', 'Tailwind CSS', 'Node.js', 'REST APIs', 'Git/GitHub']
  },
  'IA-2023-5510': {
    id: 'IA-2023-5510',
    certificateNumber: 'IA-2023-5510',
    studentName: 'Amina Al-Mansoor',
    courseName: 'Python Full Stack Development',
    issueDate: 'December 12, 2023',
    grade: 'A+ (Distinction)',
    scorePercentage: 98,
    instructor: 'Dr. Michael Chang, AI & Python Architect',
    status: 'VALID',
    skills: ['Python 3.12', 'Django Framework', 'PostgreSQL', 'FastAPI', 'Data Pipelines', 'Docker']
  },
  'IA-2025-7721': {
    id: 'IA-2025-7721',
    certificateNumber: 'IA-2025-7721',
    studentName: 'Kanak Das',
    courseName: 'Data Science & Machine Learning',
    issueDate: 'January 20, 2025',
    grade: 'A+ (Distinction)',
    scorePercentage: 95,
    instructor: 'Dr. Elena Rostova, Chief AI Researcher',
    status: 'VALID',
    skills: ['Pandas & NumPy', 'Machine Learning', 'Predictive Modeling', 'PowerBI', 'Scikit-Learn']
  }
};

export const INITIAL_APPLICATIONS: Record<string, AdmissionApplication> = {
  'APP-2024-8921': {
    id: 'APP-2024-8921',
    fullName: 'Jane Doe',
    parentsName: 'Robert Doe',
    dob: '2002-05-14',
    gender: 'Female',
    mobile: '+1 (555) 000-0000',
    whatsapp: '+1 (555) 000-0000',
    email: 'jane.doe@example.com',
    address: '456 Academic Boulevard, Silicon Valley, CA 94016',
    courseId: 'web-dev',
    courseName: 'Web Design & Dev',
    qualification: 'Bachelor in Computer Applications',
    preferredBatch: 'Morning (09:00 AM - 11:30 AM)',
    submittedAt: 'Oct 12, 2024',
    status: 'under_verification',
    statusLabel: 'Under Verification',
    currentStepIndex: 1
  },
  'APP-2024-4102': {
    id: 'APP-2024-4102',
    fullName: 'Alexander Wright',
    parentsName: 'Thomas Wright',
    dob: '2001-09-22',
    gender: 'Male',
    mobile: '+1 (555) 345-6789',
    whatsapp: '+1 (555) 345-6789',
    email: 'alex.wright@example.com',
    address: '782 Innovation Parkway, Austin, TX 78701',
    courseId: 'python-fullstack',
    courseName: 'Python Full Stack Development',
    qualification: 'High School Diploma (12th Standard)',
    preferredBatch: 'Evening (05:00 PM - 07:30 PM)',
    submittedAt: 'Nov 04, 2024',
    status: 'admission_confirmed',
    statusLabel: 'Admission Confirmed',
    currentStepIndex: 4
  }
};
