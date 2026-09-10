/**
 * Every piece of personal content on the site lives here.
 * Edit this file and the whole portfolio updates — you should not
 * need to touch the component files to change your details.
 */

import portraitImg from './assets/about.jpg';

export const profile = {
  /** Shown in the nav, top-left. */
  navName: 'ANSH.',
  /** Used for the browser tab title and image alt text. */
  fullName: 'Ansh Arora',
  /** The handwritten-script signature in the hero and on the portrait. */
  signature: 'Ansh',
  /** Single letter used for the emblem watermark over the hero video. */
  monogram: 'A',
  /** The three big stacked words in the hero headline. */
  headline: ['I SCALE', 'BRANDS', 'NATIONWIDE'],
  /** The small spaced-out line under the headline. */
  disciplines: ['GROWTH & STRATEGY', 'E-COMMERCE', 'OPERATIONS'],
  /** One or two sentences under the disciplines. */
  tagline:
    'I turn market opportunity into operating reality — from a single-city launch to 350+ dark stores across 7 states, with 52% revenue growth along the way.',
  /** The two short uppercase lines in the hero's quote card. */
  motto: ['STRATEGY IS THE CRAFT.', 'GROWTH IS THE PROOF.'],
  /**
   * Your CV, served from public/resume.pdf. BASE_URL keeps this correct when
   * the site is deployed under a sub-path such as /portfolio/.
   */
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
} as const;

/** Nav links across the top of the hero. */
export const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'WORK', href: '#work' },
  { name: 'EXPERTISE', href: '#skills' },
  { name: 'JOURNEY', href: '#experience' },
  { name: 'AWARDS', href: '#awards' },
  { name: 'CONTACT', href: '#contact' },
];

/** The small gold eyebrow label above each section. */
export const sectionLabels = {
  about: '01 / ABOUT ME',
  work: '02 / SELECTED WORK',
  skills: '03 / CAPABILITY MATRIX',
  experience: '04 / JOURNEY',
  awards: '05 / ACHIEVEMENTS',
  contact: '06 / CONTACT',
};

export const about = {
  /** Two stacked lines of the About headline. */
  headline: ["I DON'T JUST PITCH GROWTH.", 'I GO OUT AND BUILD IT.'],
  /** Your bio. Your name is bolded automatically at the front. */
  bio:
    'a business graduate with 14 months across e-commerce, growth and operations. I owned the end-to-end scale-up of a brand from one city to 350+ dark stores across 7 states, drove 52% revenue growth, and opened enterprise accounts worth ₹30L. IESEG France graduate and merit scholarship recipient, now on the Young Leaders Cohort at Masters’ Union.',
  /** Four headline numbers. An empty array hides the whole strip. */
  stats: [
    { value: '350+', label: 'Dark Stores Scaled', gold: false },
    { value: '52%', label: 'Revenue Growth', gold: true },
    { value: '₹30L', label: 'Enterprise Revenue', gold: false },
    { value: '5X', label: 'Competition Podiums', gold: true },
  ],
  /**
   * Your portrait, imported at the top of this file. To change it, replace
   * src/assets/about.jpg. Set this to null to fall back to the monogram plate.
   * The frame is 4:5 and crops from the top, so a portrait-orientation photo
   * with the face in the upper half sits best.
   */
  portrait: portraitImg as string | null,
};

export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  /** Optional CTA at the bottom of the card. Omit both to hide the button. */
  linkUrl?: string;
  linkLabel?: string;
  /** Levers, tools and channels used — rendered as pills. */
  tech: string[];
  metrics: { label: string; value: string }[];
}

/** The scroll-stacked cards in the Selected Work section. */
export const projects: Project[] = [
  {
    number: '01',
    title: 'National Dark-Store Scale-Up',
    category: 'GROWTH / RETAIL DISTRIBUTION',
    description:
      'Owned launch execution end to end as the brand went from a single city to 350+ dark stores across 7 states. Rebuilt the funnel, pricing and paid-channel mix behind that footprint, driving 52% revenue growth over the same period.',
    linkUrl: 'https://www.linkedin.com/in/ansh-arora-44b51a257',
    linkLabel: 'VIEW ON LINKEDIN',
    tech: [
      'Launch Execution',
      'Funnel Analysis',
      'Pricing Strategy',
      'Paid Channels',
      'Distribution',
      'GTM',
    ],
    metrics: [
      { label: 'FOOTPRINT', value: '350+ dark stores' },
      { label: 'REACH', value: '7 states' },
      { label: 'REVENUE', value: '+52%' },
    ],
  },
  {
    number: '02',
    title: 'Marketplace Launch & Ops Automation',
    category: 'E-COMMERCE / OPERATIONS',
    description:
      'Led marketplace launch execution on Meesho and Blinkit, lifting conversion through listing optimisation. Automated the forecasting and planning workflow behind packaging, cutting box-design turnaround time by 86%.',
    linkUrl: 'https://www.linkedin.com/in/ansh-arora-44b51a257',
    linkLabel: 'VIEW ON LINKEDIN',
    tech: [
      'Meesho',
      'Blinkit',
      'Listing Optimisation',
      'Demand Forecasting',
      'Process & SOP Design',
      'Advanced Excel',
    ],
    metrics: [
      { label: 'CHANNELS', value: 'Meesho & Blinkit' },
      { label: 'TURNAROUND', value: '−86% time' },
      { label: 'LEVER', value: 'Listings + Forecasting' },
    ],
  },
  {
    number: '03',
    title: 'Enterprise Gifting Accounts',
    category: 'B2B SALES / KEY ACCOUNTS',
    description:
      'Opened corporate gifting as a revenue line — securing ₹30L by spearheading the Adani Group gifting acquisition within the first month, then winning the marquee Holi gifting business through partnership development with Shree Cement.',
    linkUrl: 'https://www.linkedin.com/in/ansh-arora-44b51a257',
    linkLabel: 'VIEW ON LINKEDIN',
    tech: [
      'Enterprise Sales',
      'Partnership Development',
      'Key Account Management',
      'Negotiation',
      'Stakeholder Management',
    ],
    metrics: [
      { label: 'REVENUE', value: '₹30L secured' },
      { label: 'ACCOUNTS', value: 'Adani, Shree Cement' },
      { label: 'TIME TO CLOSE', value: 'Within month 1' },
    ],
  },
  {
    number: '04',
    title: 'EmpowerLille',
    category: 'SOCIAL ENTERPRISE / IESEG CAPSTONE',
    description:
      'Co-researcher and strategy lead on a B2B2C social enterprise linking waste management with homeless reintegration. Built a dual-revenue model validating unit economics across B2B partnerships and B2C sales, backed by hypothesis-driven primary research.',
    linkUrl: 'https://www.linkedin.com/in/ansh-arora-44b51a257',
    linkLabel: 'VIEW ON LINKEDIN',
    tech: [
      'Business Modelling',
      'Unit Economics',
      'Primary Research',
      'Hypothesis Testing',
      'Go-to-Market',
    ],
    metrics: [
      { label: 'VALIDATION', value: '80% of concept' },
      { label: 'MODEL', value: 'Dual-revenue B2B2C' },
      { label: 'GRADE', value: 'A' },
    ],
  },
];

/** The four bento cards in the Capability Matrix section. */
export const skills = [
  {
    title: 'GROWTH & E-COMMERCE',
    badge: 'CORE PILLAR',
    items: ['Funnel Analysis', 'Paid Channels', 'Pricing', 'Marketplace Ops', 'Listing Optimisation'],
    description:
      'Owning the commercial funnel end to end — acquisition, pricing and channel mix — and the marketplace operations that turn a listing into repeat revenue.',
    stat: '+52% REVENUE',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'OPERATIONS & SCALE',
    badge: 'EXECUTION',
    items: ['Launch Execution', 'Process & SOP Design', 'Forecasting', 'Timeline Management'],
    description:
      'Building the operating machinery that lets a launch repeat itself across states without losing speed or margin.',
    stat: '350+ STORES',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'DATA & INSIGHTS',
    badge: 'MEASUREMENT',
    items: ['Advanced Excel', 'Tableau', 'Power BI', 'SPSS', 'Google Sheets'],
    description:
      'KPI tracking, funnel and trend analysis, and reporting that makes the next decision obvious.',
    stat: 'KPI & FUNNEL',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'STRATEGY & ENTERPRISE SALES',
    badge: 'COMMERCIAL',
    items: [
      'Market Sizing',
      'Competitive Benchmarking',
      'Unit Economics',
      'Stakeholder Management',
      'First-Principles Thinking',
    ],
    description:
      'Sizing the opportunity, benchmarking the field, then carrying it into the room — enterprise accounts closed on the strength of the case.',
    stat: '₹30L SECURED',
    colSpan: 'lg:col-span-7',
  },
];

export interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

/** The vertical timeline. Newest first — it renders top to bottom. */
export const journey: RouteStop[] = [
  {
    id: '01',
    year: 'PURSUING',
    title: 'PGP, TECHNOLOGY & BUSINESS MANAGEMENT',
    organization: "MASTERS' UNION — NEW DELHI",
    description:
      'Selected for the Young Leaders Cohort, building on an operating track record in growth and e-commerce.',
  },
  {
    id: '02',
    year: "SEPT '25 – JUN '26",
    title: 'MARKETING EXECUTIVE',
    organization: 'INDO DIVINE SPIRITUAL SOLUTIONS PVT. LTD. — JAIPUR',
    description:
      'Scaled the brand to 350+ dark stores across 7 states, drove 52% revenue growth, and secured ₹30L in enterprise gifting revenue.',
  },
  {
    id: '03',
    year: "APR '25 – AUG '25",
    title: 'SALES & MARKETING INTERN',
    organization: 'JK CEMENTS LTD. — GURGAON',
    description:
      'Ran competitive analysis on construction chemicals and shaped regional planning with the Zonal Head, coordinating 16 Area Sales Managers across 5 zones.',
  },
  {
    id: '04',
    year: '2024 – 2025',
    title: 'BBA — INTERNATIONAL DEGREE',
    organization: 'IESEG SCHOOL OF MANAGEMENT — LILLE, FRANCE',
    description:
      "Grade 'A' with a EUR 1,241 merit scholarship. Led the EmpowerLille capstone on B2B2C social enterprise design.",
  },
  {
    id: '05',
    year: "MAY '24 – JUL '24",
    title: 'MARKETING INTERN',
    organization: 'SVATANTRA MICRO HOUSING FINANCE — JAIPUR',
    description:
      'Mapped customer segments across 12 primary field studies, improved onboarding by 17%, and supported ₹50L+ in loan disbursement within two months.',
  },
  {
    id: '06',
    year: "AUG '23 – FEB '24",
    title: 'MARKETING TEAM MEMBER',
    organization: 'AIESEC IN BENGALURU',
    description:
      'Grew youth-exchange enrollments 12% through social and digital content execution, aligning stakeholders across international chapters.',
  },
  {
    id: '07',
    year: '2022 – 2024',
    title: 'BBA (HONOURS)',
    organization: 'CHRIST UNIVERSITY — BENGALURU',
    description:
      'GPA 3.36/4, top 20% of cohort. Selected from 400+ students across 4 campuses for the IESEG credit transfer programme.',
  },
];

export interface Award {
  placement: string;
  level: string;
  event: string;
  detail: string;
}

/** Competition wins and honours. */
export const awards: Award[] = [
  {
    placement: '2ND',
    level: 'NATIONAL',
    event: 'Sustainathon',
    detail: 'Sustainability-driven business solutions.',
  },
  {
    placement: '2ND',
    level: 'NATIONAL',
    event: 'Enchainer Business Fest',
    detail: 'Problem-solving and business strategy.',
  },
  {
    placement: '1ST',
    level: 'INTER-COLLEGE',
    event: 'Marketing Premier League',
    detail: 'Head-to-head marketing challenges.',
  },
  {
    placement: '1ST',
    level: 'INTRA-COLLEGE',
    event: 'Colossus Business Fest',
    detail: 'Competed as PR & Marketing Manager.',
  },
  {
    placement: '2ND',
    level: 'INTRA-COLLEGE',
    event: 'Novice Business Fest',
    detail: 'Strategic marketing and execution.',
  },
  {
    placement: 'AWARD',
    level: 'IESEG, FRANCE',
    event: 'EUR 1,241 Merit Scholarship',
    detail: "Grade 'A' on the international degree.",
  },
  {
    placement: '400+',
    level: 'SELECTION',
    event: 'IESEG Credit Transfer Programme',
    detail: 'Chosen from 400+ students across 4 campuses.',
  },
];

/** Positions of responsibility, shown under the awards grid. */
export const leadership = {
  note: 'All at Christ University, Bengaluru',
  roles: [
    { org: 'SDG CELL', role: 'Sub-Head, Logistics' },
    { org: 'CUSBMA', role: 'Organisational Committee, Logistics' },
    { org: 'SWO', role: 'Stage Committee' },
    { org: 'CAPS', role: 'Research Team Member' },
  ],
};

export const contact = {
  headline: ['START A', 'CONVERSATION.'],
  blurb:
    'Have a brand to scale, a growth problem worth solving, or a role you think I would fit? Send a note below and I will come back to you.',
  /**
   * Where the contact form posts. Empty means the form falls back to opening
   * the visitor's mail client, so nothing is silently dropped. Paste a
   * Formspree (or similar) endpoint here to collect submissions properly.
   */
  formEndpoint: '' as string,
  email: 'ansharora116@gmail.com',
  phone: '+91 98291 17034',
  linkedin: 'https://www.linkedin.com/in/ansh-arora-44b51a257',
  footerNote: 'ANSH ARORA // PORTFOLIO 2026',
  footerTagline: 'BUILT WITH INTENT',
};
