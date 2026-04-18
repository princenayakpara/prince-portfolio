import { useState, useRef, type MouseEvent } from 'react';

type TiltSkillCardProps = {
  name: string;
  desc: string;
  icon: React.ReactNode;
};

export function TiltSkillCard({ name, desc, icon }: TiltSkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Magnetic pull & subtle 3D tilt
    const rotateX = ((y - centerY) / centerY) * -8; // Max 8 deg
    const rotateY = ((x - centerX) / centerX) * 8;
    
    const translateX = ((x - centerX) / centerX) * 4; // Max 4px movement
    const translateY = ((y - centerY) / centerY) * 4;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) scale(1.05)`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(1000px) rotateX(0) rotateY(0) translateX(0) translateY(0) scale(1)');
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-skill-card ${isHovered ? 'hovered' : ''}`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tsc-icon">{icon}</div>
      <div className="tsc-info">
        <div className="tsc-name">{name}</div>
        <div className="tsc-desc">{desc}</div>
      </div>
    </div>
  );
}
