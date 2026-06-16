import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hackathons, type Hackathon } from "../data/achievements";
import "./HackathonsSection.css";

// ═══════════════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════════════

function getRankClass(rank: string): string {
  const r = rank.toLowerCase();
  if (r.includes("1st") || r.includes("winner")) return "rank-1";
  if (r.includes("2nd") || r.includes("runner")) return "rank-2";
  return "rank-default";
}

function getRankScore(rank: string): number {
  const r = rank.toLowerCase();
  if (r.includes("1st") || r.includes("winner")) return 1;
  if (r.includes("2nd") || r.includes("runner")) return 2;
  if (r.includes("3rd")) return 3;
  return 4; // default / participation
}

// ═══════════════════════════════════════════════════════
// CARD COMPONENT
// ═══════════════════════════════════════════════════════

function HackCard({
  hack,
  isOpen,
  onToggle,
}: {
  hack: Hackathon;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const rankClass = getRankClass(hack.rank);

  return (
    <motion.div
      layout
      className={`hack-card ${isOpen ? "expanded" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {hack.featured && <div className="hack-featured-ribbon">Featured</div>}

      <div className="hack-card-header" onClick={onToggle}>
        <div className="hack-info">
          <div className="hack-name">{hack.name}</div>
          <div className="hack-meta">
            <span className="org">{hack.organizer}</span> · {hack.date}
          </div>
          <div className="hack-tags">
            {hack.tags.map((tag) => (
              <span key={tag} className="hack-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <span className={`hack-rank-badge ${rankClass}`}>
          {hack.rank}
          {hack.totalParticipants && (
            <span style={{ opacity: 0.6, fontWeight: 400 }}>
              {" "}
              / {hack.totalParticipants}
            </span>
          )}
        </span>

        <motion.span
          className="hack-expand-icon"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "backOut" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="hack-expanded-wrapper"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="hack-expanded-content">
              <div style={{ paddingTop: 24 }}>
                <div className="hack-detail-group">
                  <div className="hack-label">Problem Statement</div>
                  <div className="hack-text">{hack.problemStatement}</div>
                </div>

                <div className="hack-detail-group">
                  <div className="hack-label">Our Solution & Approach</div>
                  <div className="hack-text">{hack.solution}</div>
                </div>

                <div className="hack-detail-group">
                  <div className="hack-label">Tech Used</div>
                  <div className="hack-tech-list">
                    {hack.techUsed.map((t) => (
                      <span key={t} className="hack-tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hack-detail-group">
                  <div className="hack-label">Key Learnings</div>
                  <div className="hack-text">{hack.keyLearnings}</div>
                </div>

                <div className="hack-detail-group">
                  <div className="hack-label">Outcome</div>
                  <div className="hack-text">{hack.outcome}</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════

export default function HackathonsSection() {
  const [filterTag, setFilterTag] = useState("All");
  const [sortBy, setSortBy] = useState<"Newest" | "Best Rank">("Newest");
  const [openHackId, setOpenHackId] = useState<string | null>(null);

  // Extract unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    hackathons.forEach((h) => h.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  // Filter and sort
  const processedHacks = useMemo(() => {
    let result = hackathons;

    // Filter
    if (filterTag !== "All") {
      result = result.filter((h) => h.tags.includes(filterTag));
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === "Newest") {
        return b.year - a.year; // Note: For a real app, you might parse date to timestamp
      } else {
        return getRankScore(a.rank) - getRankScore(b.rank);
      }
    });

    return result;
  }, [filterTag, sortBy]);

  return (
    <section id="hackathons" className="hackathons-section">
      <div className="hackathons-header">
        <h2 className="hackathons-title">Hackathons</h2>
        <p className="hackathons-subtitle">
          Competitive programming, system design, and product building.
        </p>
      </div>

      <div className="hack-controls">
        <button
          className={`hack-chip ${filterTag === "All" ? "active" : ""}`}
          onClick={() => setFilterTag("All")}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`hack-chip ${filterTag === tag ? "active" : ""}`}
            onClick={() => setFilterTag(filterTag === tag ? "All" : tag)}
          >
            {tag}
          </button>
        ))}

        <button
          className="hack-chip hack-sort-btn"
          onClick={() => setSortBy(sortBy === "Newest" ? "Best Rank" : "Newest")}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          Sort: {sortBy}
        </button>
      </div>

      <motion.div layout className="hack-list">
        <AnimatePresence mode="popLayout">
          {processedHacks.map((hack) => (
            <HackCard
              key={hack.id}
              hack={hack}
              isOpen={openHackId === hack.id}
              onToggle={() => setOpenHackId(openHackId === hack.id ? null : hack.id)}
            />
          ))}
          {processedHacks.length === 0 && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", padding: "40px 0" }}
            >
              No hackathons found matching this tag.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
