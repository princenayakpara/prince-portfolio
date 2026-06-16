import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProjectsSection.css";

// --- Project Data ---
const projectsData = [
  {
    id: 1,
    title: "AlgoNexus",
    description: [
      "Built interactive platform with step-by-step algorithm animation for sorting, searching, and graph traversal",
      "Designed fully responsive UI deployed on Vercel; enhanced DSA conceptual understanding and learner engagement"
    ],
    techStack: ["React", "JavaScript", "DSA"],
    imagePath: "/images/prince.png",
    liveUrl: "https://algonexus.vercel.app/",
    githubUrl: "https://github.com/princenayakpara/algonexus",
    tag: "DSA Tools"
  },
  {
    id: 2,
    title: "AutoSense-X",
    description: [
      "Full-stack AI system guardian with Python/FastAPI backend, React frontend, and Flutter mobile app for real-time PC monitoring",
      "Integrated IsolationForest + LSTM models for failure prediction, AI malware scanning, and voice assistant",
      "20+ REST API endpoints — system health, process management, security, JWT + Google OAuth, and AI-generated PDF reports"
    ],
    techStack: ["Python", "FastAPI", "React", "Flutter"],
    imagePath: "/autosense.png",
    liveUrl: "",
    githubUrl: "https://github.com/princenayakpara/AutoSense-X",
    tag: "AI / ML"
  },
  {
    id: 3,
    title: "NeuralArchitect",
    description: [
      "Implemented forward/backpropagation, activation functions, and loss optimization entirely in pure Python with no ML libraries",
      "Integrated Adam optimizer and dropout regularization to prevent overfitting; deepened understanding of ML internals"
    ],
    techStack: ["Python", "ML", "Neural Networks"],
    imagePath: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "",
    githubUrl: "https://github.com/princenayakpara/NeuralArchitect",
    tag: "AI / ML"
  },
  {
    id: 4,
    title: "DeployFlow",
    description: [
      "Built automated CI/CD pipeline for build, test, and deployment; containerized apps with Docker for consistent environments",
      "Reduced deployment time and improved reliability through end-to-end automation across multiple deployment environments"
    ],
    techStack: ["Node.js", "Docker", "WebSockets", "React"],
    imagePath: "/deployflow.png",
    liveUrl: "https://client-omega-olive-79.vercel.app/",
    githubUrl: "https://github.com/princenayakpara/Deployflow",
    tag: "DevOps"
  },
  {
    id: 5,
    title: "PINAtlas",
    description: [
      "Full-stack MERN app to explore 154,000+ Indian post offices with filtering, search, charts, and CSV export",
      "10 REST API endpoints with MongoDB Atlas indexing; cascading dropdowns, debounced search, and interactive bar/pie charts"
    ],
    techStack: ["MERN", "MongoDB Atlas", "Chart.js"],
    imagePath: "/pinatlas.png",
    liveUrl: "https://pin-atlas.vercel.app/",
    githubUrl: "https://github.com/princenayakpara/PINAtlas",
    tag: "Full Stack"
  }
];

const filters = ["All", "Full Stack", "AI / ML", "DSA Tools", "DevOps"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projectsData.filter((project) => 
    activeFilter === "All" ? true : project.tag === activeFilter
  );

  return (
    <section id="projects" className="new-projects-section">
      <div className="new-projects-header">
        <h2 className="new-projects-title">
          Featured <span>Projects</span>
        </h2>
        <p className="new-projects-desc">
          A selection of my recent work, ranging from full-stack web applications to educational tools and algorithm visualizers.
        </p>
      </div>

      <div className="new-projects-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`new-filter-btn ${activeFilter === filter ? "active" : ""}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="new-projects-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="new-project-card"
            >
              <div className="new-project-img-wrapper">
                <img src={project.imagePath} alt={project.title} loading="lazy" />
                <div className="new-project-tag-overlay">{project.tag}</div>
              </div>

              <div className="new-project-content">
                <h3 className="new-project-title">{project.title}</h3>
                
                <ul className="new-project-bullets">
                  {project.description.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                <div className="new-project-tech">
                  {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="new-project-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="new-btn-primary"
                  >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="new-btn-icon"
                    aria-label="GitHub Repository"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
