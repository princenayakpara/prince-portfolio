import "./FloatingOrbs.css";

export default function FloatingOrbs() {
  return (
    <div className="floating-orbs-container">
      {/* Indigo Top-Left */}
      <div className="floating-orb orb-tl" />
      
      {/* Cyan Top-Right */}
      <div className="floating-orb orb-tr" />
      
      {/* Violet Bottom-Left */}
      <div className="floating-orb orb-bl" />
      
      {/* Purple Bottom-Right */}
      <div className="floating-orb orb-br" />
    </div>
  );
}
