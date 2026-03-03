import { useRouter } from "next/router";
export default function ScrollingWave() {
  const router = useRouter()
  return (
    <div className="relative w-full h-64 overflow-hidden bg-transparent hidden lg:block">      
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className={`absolute bottom-0 w-[200%] h-40 ${router.pathname === "/" ? "fill-cyan-900" : "fill-indigo-950" } opacity-50 animate-slide-wave`}
      >
        <path d="M0,160 C360,320 360,0 720,160 C1080,320 1080,0 1440,160 V320 H0 Z" />        
        <path d="M1440,160 C1800,320 1800,0 2160,160 C2520,320 2520,0 2880,160 V320 H1440 Z" />
      </svg>
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className={`absolute bottom-0 w-[200%] h-40 ${router.pathname === "/" ? "fill-cyan-800" : "fill-indigo-200" } opacity-50 animate-slide-wave2`}
      >
        <path d="M0,160 C360,320 360,0 720,160 C1080,320 1080,0 1440,160 V320 H0 Z" />        
        <path d="M1440,160 C1800,320 1800,0 2160,160 C2520,320 2520,0 2880,160 V320 H1440 Z" />
      </svg>
    </div>
  );
}
