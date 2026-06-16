// ─── Types ───────────────────────────────────────────

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerLogo?: string;
  date: string;
  year: number;
  platform: string;
  description: string;
  verifyUrl: string;
  isVerified: boolean;
  featured: boolean;
  tags: string[];
}

export interface Hackathon {
  id: string;
  name: string;
  organizer: string;
  date: string;
  year: number;
  rank: string;
  totalParticipants: string;
  featured: boolean;
  tags: string[];
  problemStatement: string;
  solution: string;
  techUsed: string[];
  keyLearnings: string;
  outcome: string;
}

// ─── Sample Certificates ────────────────────────────

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    date: "January 2025",
    year: 2025,
    platform: "Kaggle",
    description:
      "Deep dive into regression models, decision trees, random forests, and model evaluation techniques using scikit-learn in Python.",
    verifyUrl:
      "https://www.kaggle.com/learn/certification/prince27507/intro-to-machine-learning",
    isVerified: true,
    featured: true,
    tags: ["Machine Learning", "Python", "scikit-learn"],
  },
  {
    id: "cert-2",
    title: "Google Crash Course on Python",
    issuer: "Coursera",
    date: "November 2024",
    year: 2024,
    platform: "Coursera",
    description:
      "Learned fundamentals of Python programming, basic data structures, OOP principles, and using Python to write automated scripts.",
    verifyUrl: "https://coursera.org/verify/google-python-crash",
    isVerified: true,
    featured: false,
    tags: ["Python", "Automation", "OOP"],
  },
  {
    id: "cert-3",
    title: "Advanced DSA Milestone",
    issuer: "Coding Ninjas",
    date: "August 2024",
    year: 2024,
    platform: "Coding Ninjas",
    description:
      "Mastered advanced data structures including graphs, trees, tries, Segment Trees, and dynamic programming algorithms with C++.",
    verifyUrl: "https://codingninjas.com/verify/dsa-milestone",
    isVerified: false,
    featured: false,
    tags: ["C++", "DSA", "Algorithms"],
  },
  {
    id: "cert-4",
    title: "Data Science Foundations",
    issuer: "Kaggle",
    date: "September 2024",
    year: 2024,
    platform: "Kaggle",
    description:
      "Learned essential data manipulation skills with pandas, exploratory data analysis (EDA), and data visualization with seaborn.",
    verifyUrl:
      "https://www.kaggle.com/learn/certification/prince27507/pandas",
    isVerified: true,
    featured: true,
    tags: ["Data Science", "Pandas", "Python"],
  },
];

// ─── Sample Hackathons ──────────────────────────────

export const hackathons: Hackathon[] = [
  {
    id: "hack-1",
    name: "Odoo x Adani University Hackathon '26",
    organizer: "Adani University & Odoo",
    date: "February 2026",
    year: 2026,
    rank: "Practical Value Award",
    totalParticipants: "50+ Teams",
    featured: true,
    tags: ["Python", "ERP Tools", "Data Science"],
    problemStatement:
      "Automate inventory forecasting for Odoo ERP to reduce manual stock audits and prevent shortages.",
    solution:
      "Built a custom Odoo module using sales trend analysis and time-series forecasting to dynamically predict restock needs.",
    techUsed: ["Python", "Odoo ERP", "Pandas", "Scikit-Learn"],
    keyLearnings:
      "Learned how to integrate ML models directly into ERP workflows and handle real-world messy inventory data.",
    outcome:
      "Awarded 'Practical Value' recognition for building the most production-ready module among all teams.",
  },
  {
    id: "hack-2",
    name: "ArtPark CodeForge Hackathon",
    organizer: "IISc Bangalore & ArtPark",
    date: "November 2025",
    year: 2025,
    rank: "Robust Design Winner",
    totalParticipants: "100+ Teams",
    featured: true,
    tags: ["C++", "Robotics", "Algorithms"],
    problemStatement:
      "Navigate an autonomous robot through complex costmap grids with obstacles using optimal path-planning algorithms.",
    solution:
      "Implemented a modified A* algorithm with LiDAR-based costmap integration for real-time obstacle avoidance in simulation.",
    techUsed: ["C++", "ROS", "A* Algorithm", "LiDAR Sim"],
    keyLearnings:
      "Deepened understanding of graph-based search algorithms and real-time sensor data processing for robotics.",
    outcome:
      "Won 'Robust Design' award for the most reliable pathfinding solution under edge-case scenarios.",
  },
  {
    id: "hack-3",
    name: "Code Clash — Elan & nVision 2026",
    organizer: "IIT Hyderabad & Unstop",
    date: "January 2026",
    year: 2026,
    rank: "2nd Place",
    totalParticipants: "1000+ Competitors",
    featured: false,
    tags: ["DSA", "System Design"],
    problemStatement:
      "Design a high-concurrency live scoring system that handles thousands of simultaneous score updates without data loss.",
    solution:
      "Architected a Redis-backed WebSocket system in Go with batched writes and optimistic locking for concurrent score mutations.",
    techUsed: ["Go", "Redis", "WebSockets", "Concurrency API"],
    keyLearnings:
      "Gained deep insight into concurrent systems design, event-driven architectures, and cache invalidation strategies.",
    outcome:
      "Secured 2nd place overall in a national-level competitive programming and system design contest.",
  },
];
