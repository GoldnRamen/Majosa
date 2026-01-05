export default function ScrollingWave() {
  return (
    <div className="relative w-full h-64 overflow-hidden bg-transparent">
      {/* We use a very wide SVG (200% width) to allow it to scroll infinitely */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-[200%] h-40 fill-cyan-900 opacity-50 animate-slide-wave"
      >
        <path d="M0,160 C360,320 360,0 720,160 C1080,320 1080,0 1440,160 V320 H0 Z" />
        {/* We repeat the path exactly once more inside the same SVG to make it seamless */}
        <path d="M1440,160 C1800,320 1800,0 2160,160 C2520,320 2520,0 2880,160 V320 H1440 Z" />
      </svg>
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-[200%] h-40 fill-cyan-800 opacity-50 animate-slide-wave2"
      >
        <path d="M0,160 C360,320 360,0 720,160 C1080,320 1080,0 1440,160 V320 H0 Z" />
        {/* We repeat the path exactly once more inside the same SVG to make it seamless */}
        <path d="M1440,160 C1800,320 1800,0 2160,160 C2520,320 2520,0 2880,160 V320 H1440 Z" />
      </svg>
    </div>
  );
}
