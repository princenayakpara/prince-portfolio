import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  certificates,
  hackathons,
  type Certificate,
  type Hackathon,
} from "../data/achievements";
import "./AchievementsSection.css";

// ═══════════════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════════════

type TabId = "All" | "Certificates" | "Hackathons";

function getRankStyle(rank: string): string {
  const r = rank.toLowerCase();
  if (r.includes("1st") || r.includes("gold") || r.includes("winner"))
    return "gold";
  if (r.includes("2nd") || r.includes("silver") || r.includes("runner"))
    return "silver";
  return "default";
}

// ═══════════════════════════════════════════════════════
// STATS ROW — animated count-up numbers
// ═══════════════════════════════════════════════════════

function StatsRow({
  certs,
  hacks,
  featured,
}: {
  certs: number;
  hacks: number;
  featured: number;
}) {
  return (
    <div className="stats-row">
      <CountUp value={certs} />
      <span className="stat-label">Certificates</span>
      <span className="stat-dot" />
      <CountUp value={hacks} />
      <span className="stat-label">Hackathons</span>
      <span className="stat-dot" />
      <CountUp value={featured} />
      <span className="stat-label">Featured</span>
    </div>
  );
}

function CountUp({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1200;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="stat-number">
      {count}
    </span>
  );
}

// ═══════════════════════════════════════════════════════
// TAB BAR — sliding underline indicator
// ═══════════════════════════════════════════════════════

function TabBar({
  active,
  onChange,
}: {
  active: TabId;
  onChange: (t: TabId) => void;
}) {
  const tabs: TabId[] = ["All", "Certificates", "Hackathons"];

  return (
    <div className="tab-bar">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`tab-button ${active === tab ? "active" : ""}`}
        >
          {tab}
          {active === tab && (
            <motion.div
              layoutId="tab-indicator"
              className="tab-indicator"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: -1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// CERTIFICATE CARD
// ═══════════════════════════════════════════════════════

function CertCard({ cert }: { cert: Certificate }) {
  return (
    <motion.div
      layout
      className="cert-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      whileHover={{
        y: -3,
        borderColor: "rgba(255,255,255,0.2)",
        transition: { duration: 0.2 },
      }}
    >
      {cert.featured && <div className="featured-ribbon">Featured</div>}

      <div className="cert-card-top">
        <div className="platform-badge">
          {cert.issuerLogo ? (
            <img src={cert.issuerLogo} alt={cert.issuer} />
          ) : (
            <span className="platform-initial">
              {cert.issuer.charAt(0)}
            </span>
          )}
        </div>

        {cert.isVerified && (
          <span className="verified-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Verified
          </span>
        )}
      </div>

      <h3 className="cert-title">{cert.title}</h3>
      <div className="cert-meta">
        <span className="issuer">{cert.issuer}</span> · {cert.date}
      </div>
      <p className="cert-desc">{cert.description}</p>

      <div className="cert-tags">
        {cert.tags.map((tag) => (
          <span key={tag} className="cert-tag">
            {tag}
          </span>
        ))}
      </div>

      <a
        href={cert.verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="verify-link"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        Verify Certificate
      </a>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════
// HACKATHON CARD — accordion
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
  const rankClass = getRankStyle(hack.rank);

  return (
    <motion.div
      layout
      className={`hack-card ${isOpen ? "expanded" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {hack.featured && <div className="featured-ribbon">Featured</div>}

      <div className="hack-card-header" onClick={onToggle}>
        <div className="hack-info">
          <div className="hack-name">{hack.name}</div>
          <div className="hack-meta">
            <span className="org">{hack.organizer}</span> · {hack.date}
          </div>
          <div className="hack-tags-row">
            {hack.tags.map((tag) => (
              <span key={tag} className="hack-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <span className={`hack-rank-badge ${rankClass}`}>
          {rankClass === "gold" ? "🥇" : rankClass === "silver" ? "🥈" : "🏆"}{" "}
          {hack.rank}
          {hack.totalParticipants && (
            <span style={{ opacity: 0.6, fontWeight: 400 }}>
              {" "}
              / {hack.totalParticipants}
            </span>
          )}
        </span>

        <motion.span
          className="expand-icon"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" />
          </svg>
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="hack-expanded"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ paddingTop: 20 }}>
              <div className="hack-detail-block">
                <div className="hack-detail-label">Problem Statement</div>
                <div className="hack-detail-text">{hack.problemStatement}</div>
              </div>
              <div className="hack-detail-block">
                <div className="hack-detail-label">Our Solution</div>
                <div className="hack-detail-text">{hack.solution}</div>
              </div>
              <div className="hack-detail-block">
                <div className="hack-detail-label">Technologies Used</div>
                <div className="tech-pills">
                  {hack.techUsed.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hack-detail-block">
                <div className="hack-detail-label">Key Learnings</div>
                <div className="hack-detail-text">{hack.keyLearnings}</div>
              </div>
              <div className="hack-detail-block">
                <div className="hack-detail-label">Outcome</div>
                <div className="hack-detail-text">{hack.outcome}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════
// MAIN — AchievementsSection
// ═══════════════════════════════════════════════════════

const ITEMS_PER_PAGE = 6;
const ITEMS_INCREMENT = 3;

export default function AchievementsSection() {
  // ── State ────────────────────────────────
  const [activeTab, setActiveTab] = useState<TabId>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [filterYear, setFilterYear] = useState<string>("All");
  const [filterPlatform, setFilterPlatform] = useState<string>("All");
  const [newestFirst, setNewestFirst] = useState(true);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [openHackId, setOpenHackId] = useState<string | null>(null);

  // Debounce 300ms
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(searchQuery), 300);
    return () => clearTimeout(t);
  }, [searchQuery]);

  // Reset visible count on filter change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeTab, debouncedQuery, filterYear, filterPlatform, newestFirst]);

  // ── Derived data ─────────────────────────
  const allYears = Array.from(
    new Set([
      ...certificates.map((c) => c.year),
      ...hackathons.map((h) => h.year),
    ])
  ).sort((a, b) => b - a);

  const allPlatforms = Array.from(
    new Set(certificates.map((c) => c.platform))
  ).sort();

  const totalFeatured =
    certificates.filter((c) => c.featured).length +
    hackathons.filter((h) => h.featured).length;

  // ── Filter logic ─────────────────────────
  const matchSearch = useCallback(
    (text: string, tags: string[]) => {
      if (!debouncedQuery) return true;
      const q = debouncedQuery.toLowerCase();
      return (
        text.toLowerCase().includes(q) ||
        tags.some((t) => t.toLowerCase().includes(q))
      );
    },
    [debouncedQuery]
  );

  const filteredCerts = certificates
    .filter((c) => {
      if (filterYear !== "All" && c.year.toString() !== filterYear)
        return false;
      if (filterPlatform !== "All" && c.platform !== filterPlatform)
        return false;
      return matchSearch(`${c.title} ${c.issuer}`, c.tags);
    })
    .sort((a, b) => (newestFirst ? b.year - a.year : a.year - b.year));

  const filteredHacks = hackathons
    .filter((h) => {
      if (filterYear !== "All" && h.year.toString() !== filterYear)
        return false;
      return matchSearch(`${h.name} ${h.organizer}`, h.tags);
    })
    .sort((a, b) => (newestFirst ? b.year - a.year : a.year - b.year));

  // What to show based on tab
  const showCerts = activeTab === "All" || activeTab === "Certificates";
  const showHacks = activeTab === "All" || activeTab === "Hackathons";

  // Combined for "All" tab pagination
  type AnyItem =
    | { kind: "cert"; data: Certificate }
    | { kind: "hack"; data: Hackathon };

  let allItems: AnyItem[] = [];
  if (showCerts) allItems.push(...filteredCerts.map((c) => ({ kind: "cert" as const, data: c })));
  if (showHacks) allItems.push(...filteredHacks.map((h) => ({ kind: "hack" as const, data: h })));

  // Sort combined
  allItems.sort((a, b) => {
    const ya = a.kind === "cert" ? a.data.year : a.data.year;
    const yb = b.kind === "cert" ? b.data.year : b.data.year;
    return newestFirst ? yb - ya : ya - yb;
  });

  const visibleItems = allItems.slice(0, visibleCount);
  const hasMore = visibleCount < allItems.length;

  const visibleCerts = visibleItems
    .filter((i): i is Extract<AnyItem, { kind: "cert" }> => i.kind === "cert")
    .map((i) => i.data);
  const visibleHacks = visibleItems
    .filter((i): i is Extract<AnyItem, { kind: "hack" }> => i.kind === "hack")
    .map((i) => i.data);

  // ── Reset ────────────────────────────────
  const resetFilters = () => {
    setSearchQuery("");
    setDebouncedQuery("");
    setFilterYear("All");
    setFilterPlatform("All");
    setActiveTab("All");
    setNewestFirst(true);
  };

  // ═══════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════

  return (
    <section id="achievements" className="achievements-section">
      {/* ── Header ──────────────────────────── */}
      <div className="achievements-header">
        <h2 className="achievements-title">
          Achievements & <span>Credentials</span>
        </h2>
        <p className="achievements-subtitle">
          Certifications, competitive hackathons, and technical milestones.
        </p>
      </div>

      {/* ── Stats ───────────────────────────── */}
      <StatsRow
        certs={certificates.length}
        hacks={hackathons.length}
        featured={totalFeatured}
      />

      {/* ── Tabs ────────────────────────────── */}
      <TabBar active={activeTab} onChange={setActiveTab} />

      {/* ── Controls ────────────────────────── */}
      <div className="controls-row">
        <div className="search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search by title, issuer, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-chips">
          {/* Year chips */}
          <button
            className={`chip ${filterYear === "All" ? "active" : ""}`}
            onClick={() => setFilterYear("All")}
          >
            All Years
          </button>
          {allYears.map((y) => (
            <button
              key={y}
              className={`chip ${filterYear === y.toString() ? "active" : ""}`}
              onClick={() =>
                setFilterYear(filterYear === y.toString() ? "All" : y.toString())
              }
            >
              {y}
            </button>
          ))}

          {/* Platform chips — only visible on Certificates or All tab */}
          {(activeTab === "Certificates" || activeTab === "All") &&
            allPlatforms.map((p) => (
              <button
                key={p}
                className={`chip ${filterPlatform === p ? "active" : ""}`}
                onClick={() =>
                  setFilterPlatform(filterPlatform === p ? "All" : p)
                }
              >
                {p}
              </button>
            ))}
        </div>

        <button
          className="chip sort-toggle"
          onClick={() => setNewestFirst(!newestFirst)}
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
          {newestFirst ? "Newest" : "Oldest"}
        </button>
      </div>

      {/* ── Content ─────────────────────────── */}
      {allItems.length === 0 ? (
        <div className="empty-state">
          <p>No results found. Try adjusting your filters.</p>
          <button className="empty-reset-btn" onClick={resetFilters}>
            Reset All Filters
          </button>
        </div>
      ) : (
        <>
          {/* Certificate grid */}
          {visibleCerts.length > 0 && (
            <div className="cert-grid">
              <AnimatePresence mode="popLayout">
                {visibleCerts.map((cert) => (
                  <CertCard key={cert.id} cert={cert} />
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Hackathon accordion list */}
          {visibleHacks.length > 0 && (
            <div
              className="hack-list"
              style={visibleCerts.length > 0 ? { marginTop: 32 } : undefined}
            >
              <AnimatePresence mode="popLayout">
                {visibleHacks.map((hack) => (
                  <HackCard
                    key={hack.id}
                    hack={hack}
                    isOpen={openHackId === hack.id}
                    onToggle={() =>
                      setOpenHackId(openHackId === hack.id ? null : hack.id)
                    }
                  />
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="load-more-wrap">
              <motion.button
                className="load-more-btn"
                onClick={() =>
                  setVisibleCount((v) => v + ITEMS_INCREMENT)
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Load More
              </motion.button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
