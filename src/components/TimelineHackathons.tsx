import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./TimelineHackathons.css";

// ═══════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════

export interface TimelineHackathon {
  id: string;
  name: string;
  organizer: string;
  date: string;
  rank: string;
  totalParticipants: string;
  featured: boolean;
  tags: string[];
  summary: string;
  techUsed: string[];
}

const hackathons: TimelineHackathon[] = [
  {
    id: "hack-1",
    name: "Odoo x Adani University Hackathon '26",
    organizer: "Adani University & Odoo",
    date: "February 2026",
    rank: "1st Place",
    totalParticipants: "50+ Teams",
    featured: true,
    tags: ["Python", "ERP Tools", "Data Science"],
    summary:
      "Automated inventory forecasting for Odoo ERP to reduce manual stock audits and prevent shortages. Built a custom Odoo module using sales trend analysis and time-series forecasting to dynamically predict restock needs.",
    techUsed: ["Python", "Odoo ERP", "Pandas", "Scikit-Learn"],
  },
  {
    id: "hack-2",
    name: "ArtPark CodeForge Hackathon",
    organizer: "IISc Bangalore & ArtPark",
    date: "November 2025",
    rank: "2nd Place",
    totalParticipants: "100+ Teams",
    featured: true,
    tags: ["C++", "Robotics", "Algorithms"],
    summary:
      "Navigated an autonomous robot through complex costmap grids with obstacles using optimal path-planning algorithms. Implemented a modified A* algorithm with LiDAR-based costmap integration for real-time obstacle avoidance.",
    techUsed: ["C++", "ROS", "A* Algorithm", "LiDAR Sim"],
  },
  {
    id: "hack-3",
    name: "Code Clash — Elan & nVision 2026",
    organizer: "IIT Hyderabad & Unstop",
    date: "January 2026",
    rank: "3rd Place",
    totalParticipants: "1000+ Competitors",
    featured: false,
    tags: ["DSA", "System Design"],
    summary:
      "Designed a high-concurrency live scoring system that handles thousands of simultaneous score updates without data loss. Architected a Redis-backed WebSocket system in Go with batched writes.",
    techUsed: ["Go", "Redis", "WebSockets"],
  },
  {
    id: "hack-4",
    name: "K Hacks 3.0",
    organizer: "K Hacks Community",
    date: "October 2025",
    rank: "Top 10 Finalist",
    totalParticipants: "80+ Teams",
    featured: false,
    tags: ["Fintech", "Web3"],
    summary:
      "Developed a secure identity management framework mapping smart credentials dynamically using blockchain technology. Enabled zero-knowledge proofs for verifying user identity without exposing personal data.",
    techUsed: ["React", "Solidity", "Web3.js"],
  },
];

// ═══════════════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════════════

function getRankBadgeClass(rank: string): string {
  const r = rank.toLowerCase();
  if (r.includes("1st") || r.includes("winner")) return "rank-1";
  if (r.includes("2nd") || r.includes("runner")) return "rank-2";
  if (r.includes("3rd")) return "rank-3";
  return "rank-default";
}

function getNodeClass(rank: string): string {
  const r = rank.toLowerCase();
  if (r.includes("1st") || r.includes("winner")) return "node-1st";
  if (r.includes("2nd") || r.includes("runner")) return "node-2nd";
  if (r.includes("3rd")) return "node-3rd";
  return "node-default";
}

// ═══════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════

export default function TimelineHackathons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="hackathons" className="timeline-section">
      <div className="timeline-header">
        <h2 className="timeline-title">Hackathons</h2>
        <p className="timeline-subtitle">
          Competitive programming, system design, and product building.
        </p>
      </div>

      <div className="timeline-container" ref={containerRef}>
        {/* Background Line */}
        <div className="timeline-line-bg" />
        
        {/* Animated Progress Line */}
        <motion.div
          className="timeline-line-progress"
          style={{ height: lineHeight }}
        />

        {hackathons.map((hack, index) => {
          const isLeft = index % 2 === 0;
          const nodeClass = getNodeClass(hack.rank);
          const badgeClass = getRankBadgeClass(hack.rank);

          return (
            <div
              key={hack.id}
              className={`timeline-item ${isLeft ? "left" : "right"}`}
            >
              {/* Central Node */}
              <div className={`timeline-node ${nodeClass}`} />

              <div className="timeline-card-wrap">
                <motion.div
                  className="timeline-card"
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {hack.featured && (
                    <div className="timeline-featured-ribbon">Featured</div>
                  )}

                  <span className={`timeline-rank-badge ${badgeClass}`}>
                    {hack.rank}
                    {hack.totalParticipants && (
                      <span style={{ fontWeight: 400, opacity: 0.6 }}>
                        {" "}
                        / {hack.totalParticipants}
                      </span>
                    )}
                  </span>

                  <h3 className="timeline-hack-name">{hack.name}</h3>
                  <div className="timeline-hack-meta">
                    <span className="org">{hack.organizer}</span> · {hack.date}
                  </div>

                  <div className="timeline-tags-row">
                    {hack.tags.map((tag) => (
                      <span key={tag} className="timeline-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="timeline-hack-summary">{hack.summary}</p>

                  <div className="timeline-tech-row">
                    {hack.techUsed.map((t) => (
                      <span key={t} className="timeline-tech">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
