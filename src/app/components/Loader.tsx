import { useEffect, useState } from "react";

export function FuturisticLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Keep the loader visible for a minimum of 2 seconds for dramatic effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-1000 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Glowing orb in the background */}
        <div className="absolute size-40 animate-pulse rounded-full bg-brand-blue/30 blur-3xl"></div>

        {/* Hexagon/dna shape */}
        <div className="relative size-24 animate-spin-slow">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-brand-secondary"
          >
            <polygon
              points="50 1, 93 25, 93 75, 50 99, 7 75, 7 25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="animate-pulse"
            />
            <circle
              cx="50"
              cy="50"
              r="10"
              fill="currentColor"
              className="animate-ping"
            />
          </svg>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <img
          src="/assets/logo.webp"
          alt="Medicacom Logo"
          className="h-8 w-auto mb-2 object-contain mix-blend-multiply"
        />
        <div className="h-1 w-48 overflow-hidden rounded-full bg-brand-primary/10">
          <div className="h-full w-1/2 animate-shimmer bg-gradient-to-r from-brand-secondary via-brand-blue to-brand-accent"></div>
        </div>
        <p className="mt-2 text-xs font-mono tracking-widest text-brand-secondary/80">
          INITIALIZING NEURAL PHARMA NETWORK...
        </p>
      </div>
    </div>
  );
}
