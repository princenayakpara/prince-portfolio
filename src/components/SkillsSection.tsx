import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  SiCplusplus, SiJavascript, SiTypescript, SiReact, 
  SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss,
  SiLeetcode, SiYoutube 
} from "react-icons/si";
import { FaTrophy } from "react-icons/fa";
import "./SkillsSection.css";

// --- Data ---
const skills = [
  { name: "C++", icon: SiCplusplus, level: 95, color: "#3b82f6" },
  { name: "JavaScript", icon: SiJavascript, level: 90, color: "#facc15" },
  { name: "TypeScript", icon: SiTypescript, level: 85, color: "#2563eb" },
  { name: "React", icon: SiReact, level: 90, color: "#22d3ee" },
  { name: "Next.js", icon: SiNextdotjs, level: 80, color: "#ffffff" },
  { name: "Node.js", icon: SiNodedotjs, level: 85, color: "#22c55e" },
  { name: "MongoDB", icon: SiMongodb, level: 80, color: "#16a34a" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 95, color: "#06b6d4" },
];

const achievements = [
  {
    id: "leetcode",
    label: "Problems Solved",
    targetNumber: 234,
    suffix: "",
    icon: SiLeetcode,
    color: "#f97316",
    link: "https://leetcode.com/u/Prince27507/",
    linkText: "View LeetCode",
  },
  {
    id: "youtube",
    label: "Videos Published",
    targetNumber: 41,
    suffix: "",
    icon: SiYoutube,
    color: "#ef4444",
    link: "https://youtube.com/@princenayakpara",
    linkText: "View Channel",
  },
  {
    id: "rating",
    label: "Contest Rating",
    targetNumber: 1480,
    suffix: "",
    icon: FaTrophy,
    color: "#eab308",
    link: "https://leetcode.com/u/Prince27507/",
    linkText: "View Profile",
  },
];

// --- Custom Animated Number Component ---
function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref} className="achievement-number">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="new-skills-section">
      <div className="new-skills-container">
        
        <div className="new-skills-header">
          <h2 className="new-skills-title">
            Skills & <span>Achievements</span>
          </h2>
          <p className="new-skills-desc">
            A snapshot of my technical proficiency and the milestones I've hit along my journey as a developer and educator.
          </p>
        </div>

        {/* --- Achievements Row --- */}
        <div className="achievements-row">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="achievement-card"
              >
                <div className="achievement-top">
                  <div className="achievement-icon-wrap">
                    <Icon style={{ width: '28px', height: '28px', color: item.color }} />
                  </div>
                  
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievement-link"
                  >
                    {item.linkText}
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                <AnimatedNumber target={item.targetNumber} suffix={item.suffix} />
                <p className="achievement-label">{item.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* --- Skills Grid --- */}
        <div className="skills-box">
          <h3 className="skills-box-title">Technical Proficiency</h3>
          
          <div className="skills-grid">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="skill-item"
                >
                  <div className="skill-info">
                    <Icon style={{ width: '20px', height: '20px', color: skill.color }} />
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.level}%</span>
                  </div>
                  
                  <div className="skill-bar-bg">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1, delay: 0.2 + idx * 0.05, ease: "easeOut" }}
                      className="skill-bar-fill"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
