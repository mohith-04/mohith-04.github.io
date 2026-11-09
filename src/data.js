// All portfolio content lives here — edit this file to update the site.

// Prefixes files in /public with the deploy base path (needed for GitHub Pages).
const asset = (path) => (path ? import.meta.env.BASE_URL + path.replace(/^\//, '') : '')

export const profile = {
  logo: 'S. Mohith',
  name: 'Mohith Savaram',
  firstName: 'Mohith',
  role: 'Software Developer',
  location: 'Vijayawada, India',
  coords: '16.5062° N, 80.6480° E',
  timezone: 'Asia/Kolkata',
  email: 'mohith.savaram09@gmail.com',
  photo: asset('/profile.webp'), // image in /public
  resume: asset(''), // put e.g. '/Mohith_Savaram_Resume.pdf' in /public and set the path here
  socials: {
    github: 'https://github.com/mohith-04',
    linkedin: 'https://www.linkedin.com/in/mohith-1896-/',
    leetcode: 'https://leetcode.com/u/mohith09/',
  },
}

export const stats = [
  { value: '9.27', label: 'CGPA at VIT-AP' },
  { value: '8+', label: 'Projects shipped' },
  { value: '1', label: 'Internship' },
]

export const about = [
  "I'm a Computer Science undergraduate at VIT-AP University who likes building things that hold up in the real world: backends that don't fall over, data that stays consistent, and AI features you can actually measure.",
  "Most of my work sits where full-stack engineering meets applied AI. I've shipped a multi-tenant compliance platform with row-level locking and immutable audit trails, built RAG pipelines and evaluated them with metrics I wrote from scratch, and routed ambulances across a real city road graph. I care about the boring parts too: clean APIs, tests, and code the next person can read.",
]

export const projects = [
  {
    title: 'DueProof',
    subtitle: 'Recurring compliance & audit management platform',
    year: '2026',
    tags: ['Django', 'DRF', 'React 19', 'TypeScript', 'PostgreSQL', 'Docker'],
    points: [
      'Multi-tenant platform with an RFC 5545 RRULE engine that generates rolling 12-month obligations and immutable audit trails.',
      'Atomic state changes with Django transactions and select_for_update, enforcing a "Done Means Proven" rule that blocks completion until evidence is attached.',
      'Idempotent notification and escalation engine; N+1-free reporting and CSV exports hardened against formula injection.',
    ],
    github: 'https://github.com/mohith-04/dueProof',
  },
  {
    title: 'RAG Evaluation Pipeline',
    subtitle: 'Benchmarking chunking strategies × embedding models',
    year: '2026',
    tags: ['Python', 'LangChain', 'Pinecone', 'HuggingFace', 'PyTorch'],
    points: [
      'Modular RAG pipeline comparing fixed-size vs recursive chunking and MiniLM-L6-v2 vs OpenAI embeddings across 4 configurations.',
      'Implemented context precision, context recall, faithfulness and answer relevancy from scratch, without external evaluation APIs.',
      'Recursive chunking + MiniLM came out on top: 0.81 context precision and 0.89 context recall on a custom 15-question QA set.',
    ],
    github: 'https://github.com/mohith-04/RAGAS',
  },
  {
    title: 'Emergency Route Optimization',
    subtitle: 'Ambulance routing with traffic-signal synchronization',
    year: '2026',
    tags: ['FastAPI', 'OSMnx', 'NetworkX', 'React', 'WebSockets'],
    points: [
      'Routes ambulances over the real Vijayawada road network (OSMnx graph) with congestion-aware edge weights.',
      'Simulates signal pre-emption along the route so lights turn green ahead of the vehicle, streamed live over WebSockets.',
      'Hospital dashboard with triage, capacity and arrival alerts; benchmarked routing algorithms against each other.',
    ],
    github: 'https://github.com/mohith-04/Capstone',
  },
  {
    title: 'Multi-Source AI Tutor',
    subtitle: 'Cross-source synthesis with conflict detection',
    year: '2026',
    tags: ['Llama 3 70B', 'Groq', 'FastAPI', 'Next.js', 'FAISS'],
    points: [
      'Keeps each source separate, with per-source top-k retrieval so no single source drowns out the others.',
      'Two-step LLM flow: first classifies sources as agree / partial / conflict, then synthesizes an answer conditioned on that.',
      'Every answer carries inline [Source X] citations, so disagreements are surfaced instead of hidden.',
    ],
    github: 'https://github.com/mohith-04/DL-Project',
  },
  {
    title: 'Breathe ESG',
    subtitle: 'Emissions data ingestion & review prototype',
    year: '2026',
    tags: ['Django REST', 'React', 'Vite', 'PostgreSQL', 'Docker'],
    points: [
      'Ingests emissions data from SAP (EN/DE CSV), utility exports and Concur-style travel JSON into one normalized model.',
      'Canonicalizes units, derives Scope 1/2/3 and computes CO2e from seeded emission factors.',
      'Analyst dashboard to fix, approve and lock rows before audit; incomplete rows are flagged, never silently dropped.',
    ],
    github: 'https://github.com/mohith-04/breathe-esg',
  },
  {
    title: 'College Calendar',
    subtitle: 'Timetable → Google Calendar in one click',
    year: '2026',
    tags: ['JavaScript', 'Google Calendar API', 'OAuth 2.0'],
    points: [
      'Signs in with Google and turns the college slot-based timetable into recurring Google Calendar events.',
      'Maps slot codes to real class times and fills the whole semester between the chosen start and end dates.',
    ],
    github: 'https://github.com/mohith-04/College-Calendar',
  },
]

export const moreProjects = [
  { title: 'Movie Playlist', desc: 'React app for curating movie lists', github: 'https://github.com/mohith-04/Movie-playlist', live: 'https://movie-playlist-eta.vercel.app' },
  { title: 'AI-Learning', desc: 'Notebooks and ML experiments from my learning journey', github: 'https://github.com/mohith-04/AI-Learning' },
]

export const experience = [
  {
    company: 'Critzo',
    tagline: 'Pet care platform',
    role: 'Software Developer Intern',
    period: 'May 2026 – Jul 2026',
    mode: 'Remote',
    points: [
      'Designed and built an automated pet-care reminder system for vaccinations, appointments and pet birthdays.',
      'Implemented cron-based schedulers that scan hospital and pet records to find upcoming events and trigger reminder workflows.',
      'Built REST API endpoints for each reminder type, delivering through WhatsApp, email and SMS providers.',
      'Structured notifications as modular, provider-specific workflows so new channels plug in cleanly.',
    ],
    tags: ['REST APIs', 'Cron', 'WhatsApp / SMS / Email', 'Backend'],
  },
]

export const education = [
  {
    school: 'VIT-AP University',
    place: 'Amaravati, Andhra Pradesh',
    degree: 'B.Tech in Computer Science',
    period: '2023 – 2027',
    score: '9.27',
    scoreLabel: 'CGPA',
  },
  {
    school: 'Sri Chaitanya Junior College',
    place: 'Vijayawada, Andhra Pradesh',
    degree: 'Intermediate (MPC)',
    period: '2021 – 2023',
    score: '98.4%',
    scoreLabel: 'Score',
  },
  {
    school: 'Sri Chaitanya School',
    place: 'Morampudi, Rajahmundry',
    degree: 'Secondary School (Class 10)',
    period: '2021',
    score: '99%',
    scoreLabel: 'Score',
  },
]

export const certifications = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    period: '2025',
  },
]

export const stack = [
  {
    group: 'Languages',
    note: 'What I think in',
    items: [['Java', 'OOP'], ['Python', 'AI / Backend'], ['JavaScript', 'Web'], ['TypeScript', 'Web'], ['C / C++', 'Systems']],
  },
  {
    group: 'Frameworks',
    note: 'What I build with',
    items: [['React', 'Frontend'], ['Django', 'Backend'], ['Django REST', 'APIs'], ['FastAPI', 'APIs'], ['PyTorch', 'Deep Learning'], ['LangChain', 'LLM apps']],
  },
  {
    group: 'AI / ML',
    note: 'The other half',
    items: [['RAG Systems', 'Retrieval'], ['Vector DBs', 'Pinecone / FAISS'], ['LLM Evaluation', 'Metrics'], ['Machine Learning', 'Models'], ['Deep Learning', 'Neural nets']],
  },
  {
    group: 'Systems & Tools',
    note: 'Where it runs',
    items: [['PostgreSQL', 'Database'], ['Docker', 'Containers'], ['Git & GitHub', 'Version control'], ['Multithreading', 'Concurrency'], ['REST API Design', 'Architecture'], ['OS & DBMS', 'Fundamentals']],
  },
]
