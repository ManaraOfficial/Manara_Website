import { useMemo } from "react";

const random = (min, max) => Math.random() * (max - min) + min;

const NavAmbientEffect = ({ theme }) => {
  const snow = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: random(2, 98),
        delay: random(0, 6),
        duration: random(4, 7.5),
        size: random(2, 4),
      })),
    []
  );

  const stars = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: random(2, 98),
        delay: random(0, 5),
        duration: random(2.2, 4),
        size: random(2, 3),
      })),
    []
  );

  const birds = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => ({
        id: i,
        top: random(15, 60),
        delay: random(0, 10),
        duration: random(9, 13),
        scale: random(0.7, 1.1),
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <style>{`
        @keyframes nav-snow-fall {
          0% { transform: translateY(-10px) translateX(0); opacity: 0; }
          10% { opacity: 0.9; }
          50% { transform: translateY(32px) translateX(4px); }
          90% { opacity: 0.9; }
          100% { transform: translateY(72px) translateX(-3px); opacity: 0; }
        }
        @keyframes nav-star-fall {
          0% { transform: translateY(-10px) translateX(0); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(72px) translateX(6px); opacity: 0; }
        }
        @keyframes nav-bird-fly {
          0% { transform: translateX(110vw) translateY(0); opacity: 0; }
          8% { opacity: 0.85; }
          50% { transform: translateX(0vw) translateY(-8px); }
          92% { opacity: 0.85; }
          100% { transform: translateX(-110vw) translateY(0); opacity: 0; }
        }
        @keyframes nav-bird-flap {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.4); }
        }
        .nav-snowflake {
          animation-name: nav-snow-fall;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        .nav-starfall {
          animation-name: nav-star-fall;
          animation-timing-function: ease-in;
          animation-iteration-count: infinite;
        }
        .nav-bird {
          animation-name: nav-bird-fly;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .nav-bird svg {
          animation: nav-bird-flap 0.6s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>

      {theme === "dark"
        ? stars.map((star) => (
            <span
              key={star.id}
              className="nav-starfall absolute top-0 rounded-full bg-amber-100"
              style={{
                left: `${star.left}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
                boxShadow: "0 0 4px 1px rgba(255, 244, 200, 0.9)",
              }}
            />
          ))
        : (
          <>
            {snow.map((flake) => (
              <span
                key={flake.id}
                className="nav-snowflake absolute top-0 rounded-full bg-white/90"
                style={{
                  left: `${flake.left}%`,
                  width: `${flake.size}px`,
                  height: `${flake.size}px`,
                  animationDelay: `${flake.delay}s`,
                  animationDuration: `${flake.duration}s`,
                  boxShadow: "0 0 3px rgba(255,255,255,0.8)",
                }}
              />
            ))}
            {birds.map((bird) => (
              <span
                key={bird.id}
                className="nav-bird absolute left-0"
                style={{
                  top: `${bird.top}%`,
                  animationDelay: `${bird.delay}s`,
                  animationDuration: `${bird.duration}s`,
                }}
              >
                <svg
                  width={14 * bird.scale}
                  height={8 * bird.scale}
                  viewBox="0 0 24 14"
                  fill="none"
                  stroke="rgba(255,255,255,0.85)"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M1 7 Q6 0 12 7 Q18 0 23 7" />
                </svg>
              </span>
            ))}
          </>
        )}
    </div>
  );
};

export default NavAmbientEffect;
