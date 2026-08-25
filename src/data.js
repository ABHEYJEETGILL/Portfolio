// Everything the page says lives here. Edit this file, not the components.

export const profile = {
  first: 'Abheyjeet',
  last: 'Singh Gill',
  eyebrow: 'McMaster University · CS (Honours Co-op) · Level 3',
  thesis:
    'I build security-minded systems end to end — model, API, interface, deploy — and I usually build them alone.',
  location: 'Hamilton, Ontario',
  email: 'abheyjeetsinghgill5@gmail.com',
  github: 'https://github.com/ABHEYJEETGILL',
  githubHandle: 'ABHEYJEETGILL',
  linkedin: 'https://www.linkedin.com/in/abheyjeet-singh-gill',
  linkedinHandle: 'abheyjeet-singh-gill'
};

export const about = {
  paragraphs: [
    'I’m a third-year Computer Science student at McMaster, focused on security. Most of what I’ve shipped, I’ve shipped solo — training the model, writing the API, building the frontend, putting it on a domain — because I’d rather understand a whole system than one slice of it.',
    'That habit produced Vangill: a satellite-plus-machine-learning platform that tells rice farmers which fields to spray and which to skip. I trained the detection model, wrote the Flask API, built the React frontend, and tested it on a real field.',
    'The security work runs alongside it — a log-based intrusion detector, a summer at Oxford on the history of cyber-espionage, and a lot of time spent reading about how systems actually fail.'
  ],
  now: [
    ['Studying', 'B.Sc. Computer Science (Hons Co-op), Level 3'],
    ['Looking for', 'Summer 2027 software / security internship'],
    ['Based in', 'Hamilton, Ontario'],
    ['Building', 'Vangill — crop-disease detection from orbit']
  ]
};

export const projects = [
  {
    id: 'vangill',
    name: 'Vangill',
    tagline: 'Crop-disease detection from satellite imagery, built and shipped solo.',
    status: ['Solo build', 'Live', '2026'],
    href: 'https://www.vangill.com/',
    hrefLabel: 'vangill.com',
    featured: true,
    body: [
      'A farmer-facing spray/skip map that starts at satellite imagery and ends at a decision someone can act on that morning. I founded it, built every layer of it, and applied to Y Combinator (Fall 2026) with it.',
      'The detection model is a YOLOv8m trained on an open dataset of more than 43,000 labelled rice-disease images. Around it: a Flask API, a React + Vite frontend, and Firebase/Firestore for storage and auth.'
    ],
    metrics: [
      ['91.7%', 'aggregate mAP50'],
      ['10', 'rice-disease classes'],
      ['43,000+', 'labelled training images']
    ],
    stack: ['Python', 'YOLOv8', 'Google Earth Engine', 'React', 'Vite', 'Flask', 'Firebase']
  },
  {
    id: 'ids',
    name: 'Intrusion Detection System',
    tagline: 'Log-based detection for brute-force attempts and anomalous IP behaviour.',
    status: ['Solo build', 'Dec 2025'],
    body: [
      'Reads server logs and flags two things: credential brute-forcing, caught by pattern analysis, and IPs that simply behave unlike the rest of the traffic, caught by an Isolation Forest anomaly model.',
      'The interesting part was tuning the alert threshold. I measured the false-positive / false-negative trade-off explicitly rather than picking a number that looked reasonable — an alert nobody trusts is worse than no alert.'
    ],
    stack: ['Python', 'Isolation Forest', 'Security analytics']
  },
  {
    id: 'macpoll',
    name: 'MacPoll',
    tagline: 'Live classroom polling for university lectures.',
    status: ['Solo build', 'Feb 2026'],
    body: [
      'Students join a session and answer; the room watches results aggregate in real time. Instructors and students get different views of the same session, with role-based access on top of Supabase’s realtime channels.',
      'Built for the lecture-hall case: works on a phone, on the projector, and on a laggy campus network.'
    ],
    stack: ['Next.js', 'React', 'Tailwind', 'Supabase']
  }
];

export const toolkit = [
  { label: 'Languages', items: ['Python', 'Java', 'JavaScript', 'C', 'Haskell', 'SQL'] },
  {
    label: 'Web & tools',
    items: ['React', 'Next.js', 'Node / Flask', 'Tailwind', 'Supabase', 'Firebase', 'Git', 'HTML / CSS']
  },
  {
    label: 'ML & data',
    items: ['YOLOv8', 'Isolation Forest', 'Google Earth Engine', 'Security analytics']
  },
  {
    label: 'Certifications',
    items: ['Introduction to Cybersecurity — Codecademy, 2025', 'Cybersecurity 101 — TryHackMe']
  }
];

export const education = [
  {
    when: '2024 — 2028',
    what: 'McMaster University',
    detail: 'B.Sc. Computer Science (Honours Co-op) · Hamilton, ON · Currently Level 3',
    note: 'Dean’s Global Distinction Scholarship, 2024'
  },
  {
    when: 'Jul 2025',
    what: 'Oxford University Summer School',
    detail: '“Cyberspies: A Revolution in Espionage?” · Oxford, United Kingdom'
  },
  {
    when: '2012 — 2024',
    what: 'St. Xavier’s School, Bathinda',
    detail: 'Grade XII — 90%'
  }
];

export const awards = [
  { when: '2024', what: 'Dean’s Global Distinction Scholarship, McMaster University' },
  { when: '2022', what: 'Best Player, District Basketball Competition (SXS)' },
  { when: '2020', what: 'National Shooting Championship, Air Pistol — qualified District & State Open' },
  { when: '2020', what: 'Gold Medallist, Discus Throw, Athletic Meet' }
];
