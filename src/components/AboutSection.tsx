import { motion } from "framer-motion";
import { 
  SiCplusplus, SiJavascript, SiTypescript, SiPython,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiGit, SiDocker, SiVercel, SiFigma
} from "react-icons/si";
import "./AboutSection.css";

const techCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "#3b82f6" },
      { name: "JavaScript", icon: SiJavascript, color: "#facc15" },
      { name: "TypeScript", icon: SiTypescript, color: "#2563eb" },
      { name: "Python", icon: SiPython, color: "#60a5fa" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#22d3ee" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
      { name: "Motion", icon: SiFramer, color: "#a855f7" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#22c55e" },
      { name: "Express", icon: SiExpress, color: "#6b7280" },
      { name: "MongoDB", icon: SiMongodb, color: "#16a34a" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#60a5fa" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#f97316" },
      { name: "Docker", icon: SiDocker, color: "#3b82f6" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Figma", icon: SiFigma, color: "#ec4899" },
    ],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Left Column: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="about-left"
        >
          <div className="about-image-wrap">
            <img
              src="/images/prince.png"
              alt="Prince Nayakpara"
              className="about-image"
              loading="lazy"
            />
          </div>
          
          {/* Status Badge */}
          <div className="status-badge">
            <span className="status-dot-container">
              <span className="status-dot-ping"></span>
              <span className="status-dot-solid"></span>
            </span>
            <span className="status-text">
              Open to opportunities
            </span>
          </div>
        </motion.div>

        {/* Right Column: Text & Skills */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="about-right"
        >
          <h2 className="about-title">
            Behind the <span>Code</span>
          </h2>
          
          <p className="about-text">
            My journey into Computer Science Engineering started with a simple curiosity about how software works under the hood. Since then, I've transformed that curiosity into a career, continuously pushing myself to build complex, scalable, and beautifully designed web applications.
          </p>
          
          <p className="about-text">
            While my expertise lies in building robust full-stack applications using React, Next.js, and Node.js, my heart belongs equally to the world of low-level algorithms. I am immensely passionate about C++ and actively teach it, empowering the next generation of developers to understand memory management and algorithmic thinking from the ground up.
          </p>
          
          <p className="about-text">
            When I'm not architecting databases or refining pixel-perfect interfaces, you can find me solving algorithmic challenges on LeetCode or exploring the latest advancements in AI and web infrastructure.
          </p>

          {/* Tech Stack Grid */}
          <div className="tech-grid-section">
            <h3 className="tech-grid-title">My Toolkit</h3>
            
            <div className="tech-grid">
              {techCategories.map((category, idx) => (
                <div key={idx}>
                  <h4 className="tech-category-title">{category.title}</h4>
                  <div className="tech-items">
                    {category.skills.map((skill, sIdx) => {
                      const Icon = skill.icon;
                      return (
                        <div key={sIdx} className="tech-item">
                          <Icon style={{ width: '24px', height: '24px', color: skill.color }} />
                          <span className="tech-item-name">{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
