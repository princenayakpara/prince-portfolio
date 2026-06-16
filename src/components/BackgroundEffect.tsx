import './BackgroundEffect.css';

/**
 * BackgroundEffect — Pure-black layered background system
 *
 * Layer 1:  Animated dot grid (radial-gradient, 28px spacing, gridShift keyframe)
 * Layer 1b: Radial fade overlay (ellipse gradient fading grid at edges)
 * Layer 2:  4 monochrome orbs (dark gray, heavy blur, slow pulse)
 * Layer 3:  SVG noise texture overlay (feTurbulence, ultra-low opacity)
 * Layer 4:  Radial vignette (darkens edges for depth)
 *
 * All animations are pure CSS keyframes — zero JS overhead.
 */
export default function BackgroundEffect() {
  return (
    <div className="bg-effect-wrapper" aria-hidden="true">
      {/* LAYER 1 — Animated Dot Grid */}
      <div className="bg-dot-grid" />

      {/* LAYER 1b — Radial Fade (fades grid at edges) */}
      <div className="bg-grid-fade" />

      {/* LAYER 2 — Soft Monochrome Orbs */}
      <div className="bg-monochrome-orb orb-1" />
      <div className="bg-monochrome-orb orb-2" />
      <div className="bg-monochrome-orb orb-3" />
      <div className="bg-monochrome-orb orb-4" />

      {/* LAYER 3 — Noise Texture Overlay */}
      <div className="bg-noise-overlay" />

      {/* LAYER 4 — Vignette Contrast */}
      <div className="bg-contrast-vignette" />
    </div>
  );
}
