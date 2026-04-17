export type Project = {
  id: string;
  categories: string[]; // games, clones, fullstack, frontend
  num: string;
  type: string;
  date: string;
  name: string;
  desc: string;
  stack: string[];
  github?: string;
  githubDisabled?: boolean;
  live?: string;
  liveDisabled?: boolean;
  postman?: string;
  figma?: string;
  youtube: string;
  media: 'fallback' | 'image';
  fallbackLabel?: string;
  fallbackBg?: string;
  imageUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'autosense',
    categories: ['frontend'],
    num: '01',
    type: 'AI / OS Guardian',
    date: 'Featured',
    name: 'AutoSense X',
    desc: 'An AI-powered Windows system guardian that uses machine learning to detect anomalies and optimize system performance in real-time.',
    stack: ['FastAPI', 'Python', 'IsolationForest ML', 'React'],
    github: 'https://github.com/princenayakpara/AutoSense-X',
    liveDisabled: true,
    figma: 'https://www.figma.com/community/file/123456789',
    youtube: 'https://www.youtube.com/@princenayakpara',
    media: 'image',
    imageUrl: '/autosense.png',
  },
  {
    id: 'deployflow',
    categories: ['fullstack'],
    num: '02',
    type: 'DevOps / CI-CD',
    date: 'GitHub',
    name: 'DeployFlow',
    desc: 'Streamlined deployment pipeline with real-time logging and container management for modern web applications.',
    stack: ['Node.js', 'Docker', 'WebSockets', 'React'],
    github: 'https://github.com/princenayakpara/Deployflow',
    live: 'https://client-omega-olive-79.vercel.app/',
    postman: 'https://documenter.getpostman.com/view/deployflow',
    youtube: 'https://www.youtube.com/@princenayakpara',
    media: 'image',
    imageUrl: '/deployflow.png',
  },
  {
    id: 'pinatlas',
    categories: ['fullstack'],
    num: '03',
    type: 'Data Visualization',
    date: 'MERN',
    name: 'PINAtlas',
    desc: 'A pincode data visualization dashboard for analyzing geographic and demographic distributions across India.',
    stack: ['MERN', 'MongoDB', 'Chart.js'],
    github: 'https://github.com/princenayakpara/PINAtlas',
    live: 'https://pin-atlas.vercel.app/',
    postman: 'https://documenter.getpostman.com/view/pinatlas',
    youtube: 'https://www.youtube.com/@princenayakpara',
    media: 'image',
    imageUrl: '/pinatlas.png',
  },
  {
    id: 'instagram',
    categories: ['clones', 'fullstack'],
    num: '04',
    type: 'Social / Clone',
    date: 'Portfolio',
    name: 'Instagram Clone',
    desc: 'A full-featured social media clone with image uploads, likes, comments, and real-time activity feeds.',
    stack: ['React', 'Appwrite', 'Tailwind', 'React Query'],
    github: 'https://github.com/princenayakpara/instagram-clone',
    live: 'https://insta-clone-prince.vercel.app/',
    postman: 'https://documenter.getpostman.com/view/insta-clone',
    youtube: 'https://www.youtube.com/@princenayakpara',
    media: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1611223235982-5f504179bc94?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'leetcity',
    categories: ['games', 'frontend'],
    num: '05',
    type: '3D / Gamified',
    date: 'Next.js',
    name: 'LeetCode City',
    desc: 'Visualize your LeetCode journey in a 3D city environment where buildings grow with your problem-solving progress.',
    stack: ['Next.js', 'Three.js', 'Supabase', 'Tailwind'],
    githubDisabled: true,
    live: 'https://princenayakpara.vercel.app/',
    youtube: 'https://www.youtube.com/@princenayakpara',
    media: 'image',
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'neural',
    categories: ['frontend'],
    num: '06',
    type: 'AI / Deep Learning',
    date: 'GitHub',
    name: 'Neural Architect',
    desc: 'An interactive deep learning model architecture builder and visualizer, with intuitive design of neural networks and training insights.',
    stack: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    github: 'https://github.com/princenayakpara/NeuralArchitect',
    liveDisabled: true,
    youtube: 'https://www.youtube.com/@princenayakpara',
    media: 'fallback',
    fallbackLabel: 'Neural Architect',
    fallbackBg: 'linear-gradient(135deg,#0f2027,#203a43,#2c5364)',
  },
];
