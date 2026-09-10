/**
 * Every piece of personal content on the site lives here.
 * Edit this file and the whole portfolio updates — you should not
 * need to touch the component files to change your details.
 *
 * Anything marked TODO is a placeholder waiting for your real information.
 */

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
  headline: ['I BUILD', 'DIGITAL', 'EXPERIENCES'],
  /** The small spaced-out line under the headline. */
  disciplines: ['FULL STACK DEVELOPER', 'UI/UX DESIGNER', 'DATA SCIENCE'],
  /** One or two sentences under the disciplines. */
  tagline:
    'I turn bold ideas into seamless digital experiences. Where frontend meets powerful backend, and code transforms vision into impact.',
  /** The two short uppercase lines in the hero's quote card. */
  motto: ['CODE IS MY CRAFT.', 'IMPACT IS MY GOAL.'],
  /** Put your CV at portfolio/public/resume.pdf, or point this elsewhere. */
  resumeUrl: '/resume.pdf',
  /** Default GitHub link used by any project that does not set its own. */
  githubUrl: 'https://github.com/ansharora116-collab',
} as const;

export const about = {
  /** Two stacked lines of the About headline. */
  headline: ["I DON'T JUST WRITE CODE.", "I BUILD WHAT'S NEXT."],
  /** Your bio. The name is bolded automatically. */
  bio:
    'a developer focused on building scalable web architectures, AI-integrated platforms, and refined digital experiences. TODO: replace this with two or three sentences about what you actually build and what you are good at.',
  /**
   * Four headline numbers. Put in figures you can back up —
   * an empty array hides the whole strip.
   */
  stats: [
    { value: 'TODO', label: 'DSA Solved', gold: false },
    { value: 'TODO', label: 'CGPA', gold: true },
    { value: 'TODO', label: 'Projects Shipped', gold: false },
    { value: 'TODO', label: 'Notable Result', gold: true },
  ],
  /**
   * Your portrait. Drop a photo at src/assets/about.png and set this to
   * `import aboutImg from './assets/about.png'` in AboutSection, or leave
   * null to render the monogram placeholder frame.
   */
  portrait: null as string | null,
};

export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

/** The scroll-stacked cards in the Featured Work section. */
export const projects: Project[] = [
  {
    number: '01',
    title: 'TODO — Project One',
    category: 'CATEGORY / DOMAIN',
    description:
      'TODO: two or three sentences on what this project does, the interesting engineering problem behind it, and what you personally built.',
    tech: ['React', 'TypeScript', 'Node.js'],
    metrics: [
      { label: 'STACK', value: 'TODO' },
      { label: 'SCALE', value: 'TODO' },
      { label: 'ROLE', value: 'TODO' },
    ],
  },
  {
    number: '02',
    title: 'TODO — Project Two',
    category: 'CATEGORY / DOMAIN',
    description:
      'TODO: describe the second project. Lead with the outcome, then the stack.',
    tech: ['Python', 'FastAPI', 'PostgreSQL'],
    metrics: [
      { label: 'STACK', value: 'TODO' },
      { label: 'SCALE', value: 'TODO' },
      { label: 'ROLE', value: 'TODO' },
    ],
  },
  {
    number: '03',
    title: 'TODO — Project Three',
    category: 'CATEGORY / DOMAIN',
    description: 'TODO: describe the third project.',
    tech: ['Docker', 'REST APIs'],
    metrics: [
      { label: 'STACK', value: 'TODO' },
      { label: 'SCALE', value: 'TODO' },
      { label: 'ROLE', value: 'TODO' },
    ],
  },
];

/** The four bento cards in the Tech Matrix section. */
export const skills = [
  {
    title: 'FRONTEND ARCHITECTURE',
    badge: 'CORE PILLAR',
    items: ['React.js', 'TypeScript', 'Tailwind CSS'],
    description:
      'TODO: one sentence on what you build on the frontend and what you are known for.',
    stat: 'TODO',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'BACKEND & INFRASTRUCTURE',
    badge: 'SYSTEMS',
    items: ['Node.js', 'Express.js', 'Docker'],
    description: 'TODO: one sentence on your backend and infrastructure work.',
    stat: 'TODO',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'DATA PLATFORMS',
    badge: 'PERSISTENCE',
    items: ['PostgreSQL', 'MongoDB'],
    description: 'TODO: one sentence on how you model and query data.',
    stat: 'TODO',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'ALGORITHMS & MACHINE LEARNING',
    badge: 'INTELLIGENCE',
    items: ['Python', 'C++', 'scikit-learn'],
    description: 'TODO: one sentence on your algorithms or ML background.',
    stat: 'TODO',
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
    year: 'TODO — e.g. MAY - JUL 2026',
    title: 'TODO — ROLE TITLE',
    organization: 'TODO — COMPANY',
    description: 'TODO: one sentence on what you did and what you shipped.',
  },
  {
    id: '02',
    year: 'TODO — e.g. 2025',
    title: 'TODO — MILESTONE OR ROLE',
    organization: 'TODO — ORGANIZATION',
    description: 'TODO: one sentence.',
  },
  {
    id: '03',
    year: 'TODO — e.g. 2023 - 2027',
    title: 'TODO — YOUR DEGREE',
    organization: 'TODO — YOUR COLLEGE',
    description: 'TODO: one sentence on your specialization.',
  },
];

export const contact = {
  headline: ['INITIALIZE', 'TRANSMISSION.'],
  blurb:
    'Have an ambitious system to architect, an engineering opportunity, or a collaborative inquiry? Send a direct dispatch below.',
  /**
   * Where the contact form sends to. The form is front-end only until you
   * set this — sign up at formspree.io (or similar) and paste the endpoint,
   * otherwise submissions are just acknowledged in the UI and discarded.
   */
  formEndpoint: '' as string,
  /** Fallback so people can always reach you even without the form. */
  email: 'ansharora116@gmail.com',
  footerNote: 'PORTFOLIO // EDITION 2026',
};
