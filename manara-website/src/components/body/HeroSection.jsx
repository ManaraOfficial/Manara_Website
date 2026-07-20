import React, { useState, useEffect } from "react";
import { FaGlobe, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const PROJECTS = [
  {
    title: "Curious Minds",
    tagline: "Knowledge Foundations",
    headline: "We connect people, ideas, and resources to create new perspectives together.",
    desc: "Building schools and providing digital learning infrastructure to remote mountain villages across Nepal.",
    bgColor: "#366A35", // Green
    image: "https://copilot.microsoft.com/th/id/BCO.649c9cd4-4fe5-48c2-a980-c2b27c147ebb.png"
  },
  {
    title: "CECS",
    tagline: "Medical Alliances",
    headline: "Deploying healthcare and emergency response infrastructure where it is needed most.",
    desc: "Deploying mobile medical camps and basic maternal health infrastructure across high-altitude regions.",
    bgColor: "#EC8134", // Orange
    image: "https://image.jimcdn.com/app/cms/image/transf/none/path/sf1c2e8936baa157c/image/i3d20b382755784f3/version/1629045977/image.jpg"
  },
  {
    title: "Project 28",
    tagline: "Global Cooperation",
    headline: "Empowering community leaders with sustainable international partnerships.",
    desc: "Connecting local leaders with global resources for long-term ecological and economic growth.",
    bgColor: "#D34A32", // Red
    image: "https://image.jimcdn.com/app/cms/image/transf/none/path/sf1c2e8936baa157c/image/i6c19cf6e7a8ea749/version/1730550822/image.jpg"
  }
];

// Typewriter Text Component
const TypewriterText = ({ text, speed = 50 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      <span className="inline-block w-[1ch] ml-1 text-[#EC8134] animate-pulse">|</span>
    </span>
  );
};

export default function HomePage() {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Auto-rotate background and carousel track together
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % PROJECTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  const activeProject = PROJECTS[currentIdx];

  return (
    <div className="relative w-full min-h-screen bg-[#0A0A0A] text-white overflow-hidden font-sans flex items-center justify-center">
      
      {/* 1. FULL-SCREEN DYNAMIC BACKGROUND SLIDER */}
      {PROJECTS.map((project, idx) => (
        <div
          key={project.title}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            idx === currentIdx ? "opacity-45 scale-100" : "opacity-0 scale-105"
          }`}
          style={{ backgroundImage: `url('${project.image}')` }}
        />
      ))}

      {/* Dark Readability Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 z-0" />

      {/* 2. CENTERED RESPONSIVE CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col justify-center items-center text-center px-4 sm:px-8 py-20 lg:py-24">
        
        {/* Top Region Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm mb-4 sm:mb-6">
          <FaGlobe className="text-[#EC8134] text-xs sm:text-sm shrink-0 animate-pulse" />
          <span className="text-[clamp(0.65rem,0.75vw,0.875rem)] font-black tracking-widest uppercase text-white/90">
            Nepal • Germany • USA
          </span>
        </div>

        {/* Dynamic Typewriter Headline (Fluid Font Sizing) */}
        <div className="min-h-[80px] sm:min-h-[110px] md:min-h-[140px] flex items-center justify-center max-w-5xl mb-3 sm:mb-4">
          <h1 className="text-[clamp(1.25rem,2.8vw,3.25rem)] font-black tracking-tight leading-snug sm:leading-tight text-white uppercase">
            <TypewriterText text={activeProject.headline} speed={35} />
          </h1>
        </div>

        {/* Active Project Description (Fluid Font Sizing) */}
        <p className="text-white/80 text-[clamp(0.75rem,1.1vw,1.125rem)] max-w-3xl mb-6 sm:mb-8 font-medium transition-opacity duration-500 leading-relaxed px-2">
          {activeProject.desc}
        </p>

        {/* TRIPLE-CIRCLE CAROUSEL TRACK (Fluid Sizing & Positioning) */}
        <div className="relative w-full max-w-2xl h-[120px] sm:h-[160px] md:h-[190px] lg:h-[210px] flex items-center justify-center overflow-visible my-2">
          {PROJECTS.map((item, idx) => {
            const isActive = idx === currentIdx;
            const isNext = idx === (currentIdx + 1) % PROJECTS.length;
            const isPrevious = idx === (currentIdx - 1 + PROJECTS.length) % PROJECTS.length;

            let circleClasses = "opacity-0 scale-50 pointer-events-none z-0";
            let dynamicStyle = {};

            if (isActive) {
              // Active Main Center Circle
              circleClasses = "w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] opacity-100 translate-x-0 z-20 shadow-2xl shadow-black/50 text-white scale-100 border-2 border-white/30";
              dynamicStyle = { backgroundColor: item.bgColor };
            } else if (isNext) {
              // Right Preview Circle
              circleClasses = "w-[70px] h-[70px] sm:w-[95px] sm:h-[95px] md:w-[115px] md:h-[115px] lg:w-[130px] lg:h-[130px] translate-x-[90px] sm:translate-x-[140px] md:translate-x-[180px] lg:translate-x-[220px] z-10 cursor-pointer scale-100 hover:scale-105 border border-white/20";
              dynamicStyle = { backgroundColor: item.bgColor, opacity: 0.45, color: "#FFFFFF" };
            } else if (isPrevious) {
              // Left Preview Circle
              circleClasses = "w-[70px] h-[70px] sm:w-[95px] sm:h-[95px] md:w-[115px] md:h-[115px] lg:w-[130px] lg:h-[130px] translate-x-[-90px] sm:translate-x-[-140px] md:translate-x-[-180px] lg:translate-x-[-220px] z-10 cursor-pointer scale-100 hover:scale-105 border border-white/20";
              dynamicStyle = { backgroundColor: item.bgColor, opacity: 0.45, color: "#FFFFFF" };
            }

            return (
              <div
                key={item.title}
                onClick={() => !isActive && setCurrentIdx(idx)}
                style={dynamicStyle}
                className={`absolute rounded-full flex flex-col justify-center items-center text-center p-2 sm:p-4 transform-gpu transition-all duration-[750ms] cubic-bezier(0.4, 0, 0.2, 1) ${circleClasses}`}
              >
                <h3 className={`font-black uppercase tracking-wider text-center leading-tight ${
                  isActive 
                    ? "text-[clamp(0.65rem,0.85vw,0.95rem)]" 
                    : "text-[clamp(0.55rem,0.7vw,0.8rem)] font-bold"
                }`}>
                  {item.title}
                </h3>

                {isActive && (
                  <p className="text-[clamp(0.55rem,0.75vw,0.85rem)] text-white/90 text-center leading-tight mt-1 max-w-[80px] sm:max-w-[110px] md:max-w-[130px] line-clamp-2">
                    {item.tagline}
                  </p>
                )}

                {isActive && <span className="text-white text-xs sm:text-sm font-bold mt-1 animate-bounce">+</span>}
              </div>
            );
          })}
        </div>

        {/* Manual Arrow Controls */}
        <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button
            onClick={handlePrev}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition active:scale-95 cursor-pointer"
            aria-label="Previous Project"
          >
            <FaArrowLeft className="text-xs sm:text-sm" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition active:scale-95 cursor-pointer"
            aria-label="Next Project"
          >
            <FaArrowRight className="text-xs sm:text-sm" />
          </button>
        </div>

      </div>

    </div>
  );
}