import "./Background.css";

export default function Background() {
  return (
    <div className="background-container">
      {/* Soft Top-Left Orb */}
      <div className="orb orb-top-left" />
      
      {/* Soft Bottom-Right Orb */}
      <div className="orb orb-bottom-right" />
      
      {/* Readability overlay */}
      <div className="background-overlay" />
    </div>
  );
}
