export type ProfileId = 'recruiter' | 'developer' | 'collaborator' | 'browsing';

export interface SkillItem {
  name: string;
  badge?: 'Familiarity' | 'Currently learning';
}

export interface SkillCategory {
  name: string;
  items: (string | SkillItem)[];
}

export interface ProjectHighlight {
  id: string;
  title: string;
  label: string;
  desc: string;
  highlights: string[];
  stack: string[];
  url: string;
  still: string;
  illustrationLabel: string;
  note?: string;
}

export interface AdditionalProject {
  id: string;
  title: string;
  label: string;
  desc: string;
  highlights: string[];
  stack: string[];
  url: string;
  note: string;
}

export interface PlannedProject {
  id: string;
  title: string;
  badge: 'Planned';
  desc: string;
}

export interface ExperienceRole {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  still: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  years: string;
  status: string;
}

export const PROFILE = {
  name: 'Maryam Abdul Karim',
  first: 'MARYAM',
  last: 'ABDUL KARIM',
  title: 'MARYAM',
  subtitle: 'ABDUL KARIM',
  headline: 'Software Developer | Python & Django | Web Applications',
  role: 'Software Developer',
  tagline: 'SOFTWARE DEVELOPER | PYTHON & DJANGO | WEB APPLICATIONS',
  email: 'maryamabdulkarim361@gmail.com',
  phone: '+92 318 4570361',
  phoneTel: 'tel:+923184570361',
  github: 'https://github.com/maryamabdulkarim361-lab',
  linkedin: 'https://www.linkedin.com/in/maryamabdulkarim361',
  heroIntro:
    'Computer Science graduate building Python, Django, and JavaScript applications, with experience in freelance front-end development and web and mobile project coordination.',
  aboutSummary:
    'I am a Computer Science graduate with freelance front-end development experience, web and mobile project coordination experience, and a growing portfolio of Python, Django, and JavaScript applications. My project work covers REST APIs, relational databases, authentication, responsive interfaces, and educational AI prototypes. I am seeking opportunities to contribute practical programming skills, clear communication, and a strong learning attitude while growing within an experienced engineering team.',
  resumeUrl: '/resume/Maryam-Abdul-Karim-Resume.pdf',
  resumeFileName: 'Maryam-Abdul-Karim-Resume.pdf',
};

// Subtitles shown while the hero canvas plays (keyed by hero scroll progress)
export const SUBTITLES: { from: number; to: number; text: string; sfx?: boolean }[] = [
  { from: 0.05, to: 0.22, text: 'Computer Science graduate building Python & Django solutions.' },
  { from: 0.22, to: 0.38, text: 'REST APIs, relational databases, and clean architecture.' },
  { from: 0.38, to: 0.55, text: 'Bridging responsive interfaces with backend systems.' },
  { from: 0.55, to: 0.72, text: 'Freelance front-end & project coordination experience.' },
  { from: 0.72, to: 0.905, text: 'Software Developer. Welcome to my portfolio.' },
];

// Factual highlights (strictly no fake percentages, ratings, or unverified claims)
export const FACTUAL_HIGHLIGHTS = [
  { value: 5, suffix: '', label: 'Featured & Design Projects' },
  { value: 3, suffix: '', label: 'Professional Positions' },
  { value: 3, suffix: '', label: 'Certifications & Training' },
  { value: 1, suffix: '', label: 'BSc Honours Degree' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Programming',
    items: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'HTML', 'CSS', 'SQL'],
  },
  {
    name: 'Web and mobile',
    items: [
      'Django',
      'Django REST Framework',
      'React',
      'React Native',
      'Flask',
      'Tailwind CSS',
      { name: 'Node.js', badge: 'Familiarity' },
      { name: 'Android Studio', badge: 'Familiarity' },
    ],
  },
  {
    name: 'Databases and development',
    items: [
      'MySQL',
      'SQLite',
      'PostgreSQL project work',
      'REST APIs',
      'CRUD operations',
      'Token authentication',
      'GitHub',
      'API testing',
      'Responsive UI development',
    ],
  },
  {
    name: 'AI learning and projects',
    items: [
      'PyTorch',
      'Image classification',
      'Grad-CAM',
      'AI agents',
      'Natural-language database interfaces',
      { name: 'Machine learning', badge: 'Currently learning' },
      { name: 'RAG', badge: 'Currently learning' },
    ],
  },
];

export const FEATURED_PROJECTS: ProjectHighlight[] = [
  {
    id: 'little-lemon',
    title: 'Little Lemon Restaurant Web Application',
    label: 'Django Capstone',
    desc: 'Restaurant menu and table-booking REST APIs built with Django REST Framework, database models, serializers, and CRUD endpoints.',
    highlights: [
      'Token-based authentication with Djoser.',
      'MySQL-ready configuration with SQLite fallback.',
      'API tests for menu retrieval, authenticated creation, and bookings.',
    ],
    stack: ['Python', 'Django', 'Django REST Framework', 'Djoser', 'MySQL', 'SQLite'],
    url: 'https://github.com/maryamabdulkarim361-lab/little-lemon-web-application',
    still: '/stills/masked.jpg',
    illustrationLabel: 'API Architecture & CRUD Endpoints',
  },
  {
    id: 'metriva',
    title: 'Metriva',
    label: 'Conversational Analytics Project',
    desc: 'A Django and React/TypeScript project for querying business data, exploring database schemas, and presenting analytics through a web interface.',
    highlights: [
      'Modules for SQL validation and data-source connections.',
      'Saved reports and predictive analytics modules.',
      'Automated test suites and Docker configuration.',
    ],
    stack: ['Django', 'React', 'TypeScript', 'SQL', 'Docker'],
    url: 'https://github.com/maryamabdulkarim361-lab/Metriva',
    still: '/stills/face.jpg',
    illustrationLabel: 'SQL Schema Exploration & Analytics Interface',
    note: 'Exploratory conversational analytics project. Does not claim production readiness or measured prediction accuracy.',
  },
  {
    id: 'zaiqa',
    title: 'Zaiqa',
    label: 'Front-end Prototype',
    desc: 'Restaurant customer-menu and administration interfaces with interactive 3D dish previews and AR support for compatible assets and devices.',
    highlights: [
      'HTML, CSS, and JavaScript interfaces.',
      'Shared JavaScript menu data.',
      'Export-based editing workflow.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', '3D Dish Previews', 'AR Support'],
    url: 'https://github.com/maryamabdulkarim361-lab/Zaiqa',
    still: '/stills/kunai.jpg',
    illustrationLabel: 'Interactive 3D Dish Previews & AR Workflow',
    note: 'Database-backed functionality is a planned extension.',
  },
];

export const ADDITIONAL_PROJECTS: AdditionalProject[] = [
  {
    id: 'breast-ultrasound',
    title: 'Breast Ultrasound Classifier',
    label: 'Educational AI Prototype',
    desc: 'Python/PyTorch training and prediction code for normal, benign, and malignant ultrasound image classification, with a Flask interface and Grad-CAM visualization support.',
    highlights: [
      'Training scripts and cross-validation procedures.',
      'Reproducible experimentation and model evaluation.',
      'Flask interface with Grad-CAM visualization support.',
    ],
    stack: ['Python', 'PyTorch', 'Flask', 'Grad-CAM'],
    url: 'https://github.com/maryamabdulkarim361-lab/Ultrasound-Diagnosis-for-Breast-Cancer',
    note: 'Educational research prototype. Does not claim clinical validation, diagnostic readiness, or unverified accuracy.',
  },
  {
    id: 'ai-database-assistant',
    title: 'AI Database Assistant',
    label: 'Documented System Design',
    desc: 'A documented natural-language-to-SQL workflow involving PostgreSQL, a Django REST API, and a React/TypeScript interface, including read-only query validation and analytics concepts.',
    highlights: [
      'Documented natural-language-to-SQL workflow.',
      'PostgreSQL schema and Django REST API integration concept.',
      'React/TypeScript interface with read-only query validation.',
    ],
    stack: ['PostgreSQL', 'Django REST API', 'React', 'TypeScript', 'System Design'],
    url: 'https://github.com/maryamabdulkarim361-lab/AI-Database-Assistant',
    note: 'Documented system design concept. Not a completed deployed application.',
  },
];

export const PLANNED_PROJECTS: PlannedProject[] = [
  {
    id: 'live-restaurant-app',
    title: 'Live Restaurant Application',
    badge: 'Planned',
    desc: 'Plan to develop a live restaurant application, building on existing restaurant menu and booking project experience.',
  },
  {
    id: 'cybersecurity-agent',
    title: 'Cybersecurity Attack Analysis Agent',
    badge: 'Planned',
    desc: 'Plan to explore an AI agent focused on cybersecurity attacks, combining AI-agent learning with prior ethical hacking training.',
  },
];

export const EXPERIENCE: ExperienceRole[] = [
  {
    role: 'Remote UI/UX Designer',
    company: 'Techno Logic Innovations Ltd',
    period: '2025 – Present',
    highlights: [
      'Lead and coordinate web and software projects, working with teams on delivery, testing, and client support.',
      'Oversee website, mobile application, and AI-based project development, connecting interface design with practical user requirements.',
    ],
    still: '/stills/pull.jpg',
  },
  {
    role: 'Compliance Head',
    company: 'UK-based energy insulation company',
    period: '2023 – 2026',
    highlights: [
      'Coordinated compliance activities across energy insulation projects, retrofit work, and property assessments.',
      'Managed team workflows and reporting standards, applying attention to detail and structured problem-solving to project delivery.',
    ],
    still: '/stills/vest.jpg',
  },
  {
    role: 'Administration Assistant and Computer Instructor',
    company: 'EDU HUB College',
    period: '2020 – 2023',
    highlights: [
      'Supported data collection and reporting automation, administrative operations, and academic scheduling.',
      'Provided computer instruction and IT support to students and staff.',
    ],
    still: '/stills/hand.jpg',
  },
];

export const EDUCATION: EducationEntry = {
  degree: 'Bachelor of Computer Science with Honours',
  institution: 'Lahore College for Women University',
  years: '2011 – 2015',
  status: 'Degree completed',
};

export const CERTIFICATIONS: { title: string; category: string }[] = [
  { title: 'Python Programming for All Levels', category: 'Software Development' },
  { title: 'Penetration Testing and Web Hacking / Ethical Hacking', category: 'Security' },
  { title: 'Red Hat Certified System Administrator (RHCSA)', category: 'System Administration' },
];
