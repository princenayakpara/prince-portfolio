import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates, type Certificate } from "../data/achievements";
import "./CertificatesSection.css";

const ITEMS_PER_PAGE = 6;
const ITEMS_INCREMENT = 3;

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

function CertCard({ cert }: { cert: Certificate }) {
  return (
    <motion.div
      layout
      variants={cardVariants}
      className="cert-card"
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
            <span className="platform-initial">{cert.issuer.charAt(0)}</span>
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

export default function CertificatesSection() {
  const [filterPlatform, setFilterPlatform] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Dynamic platforms from data
  const allPlatforms = Array.from(
    new Set(certificates.map((c) => c.platform))
  ).sort();

  // Filter items
  const filteredCerts = certificates
    .filter((c) => {
      if (filterPlatform !== "All" && c.platform !== filterPlatform)
        return false;
      return true;
    })
    // Sort newest first
    .sort((a, b) => b.year - a.year);

  const visibleCerts = filteredCerts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCerts.length;

  return (
    <section id="certificates" className="certificates-section">
      {/* Header */}
      <div className="certificates-header">
        <h2 className="certificates-title">Certificates</h2>
        <p className="certificates-subtitle">
          Professional certifications and online coursework.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="filter-row">
        <button
          className={`chip ${filterPlatform === "All" ? "active" : ""}`}
          onClick={() => {
            setFilterPlatform("All");
            setVisibleCount(ITEMS_PER_PAGE);
          }}
        >
          All
        </button>
        {allPlatforms.map((p) => (
          <button
            key={p}
            className={`chip ${filterPlatform === p ? "active" : ""}`}
            onClick={() => {
              setFilterPlatform(filterPlatform === p ? "All" : p);
              setVisibleCount(ITEMS_PER_PAGE);
            }}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        className="cert-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <AnimatePresence mode="popLayout">
          {visibleCerts.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More */}
      {hasMore && (
        <div className="load-more-wrap">
          <motion.button
            className="load-more-btn"
            onClick={() => setVisibleCount((v) => v + ITEMS_INCREMENT)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Load More
          </motion.button>
        </div>
      )}
    </section>
  );
}
