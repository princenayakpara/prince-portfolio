import { motion } from "framer-motion";
import "./VideoSection.css";

const videos = [
  {
    id: "7xHrRgab4r4",
    title: "LeetCode 762 - Prime Number of Set Bits in Binary Representation | C++ Solution",
    description: "Step-by-step C++ solution for LeetCode 762. Learn how to count set bits and check for prime set bits efficiently with dry runs.",
  },
  {
    id: "IHtOLOXS78k",
    title: "LeetCode 2124 - Check if All A's Appears Before All B's | C++ Solution Explained",
    description: "C++ tutorial for LeetCode 2124. Detailed logic explanation, time & space complexity, and optimal code walkthrough.",
  },
  {
    id: "MWv2rbYDBH4",
    title: "LeetCode 1876 - Substrings of Size Three with Distinct Characters | C++ Solution Explained",
    description: "Learn how to solve LeetCode 1876 in C++ using a sliding window approach to find substrings with unique characters.",
  },
];

export default function VideoSection() {
  return (
    <section id="content" className="video-section">
      <div className="video-container">
        
        {/* Section Header */}
        <div className="video-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="video-title">
              Featured <span>Videos</span>
            </h2>
            <p className="video-desc">
              Level up your problem-solving skills! Check out my latest LeetCode tutorials, algorithmic deep-dives, and coding masterclasses.
            </p>
          </motion.div>
        </div>

        {/* Video Grid */}
        <div className="video-grid">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="video-card"
            >
              {/* 16:9 Responsive Wrapper */}
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              {/* Video Info */}
              <div className="video-info">
                <h3 className="video-card-title">{video.title}</h3>
                <p className="video-card-desc">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="video-cta-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://youtube.com/@princenayakpara"
            target="_blank"
            rel="noopener noreferrer"
            className="video-cta-btn"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            View All Videos
          </a>
        </motion.div>

      </div>
    </section>
  );
}
