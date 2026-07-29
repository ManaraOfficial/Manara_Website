import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SectionHeader from "../reusableComp/SectionHeader";

import person1 from "../../assets/images/person1.jpg";
import person2 from "../../assets/images/person2.jpeg";
import person3 from "../../assets/images/person3.jpeg";
import person4 from "../../assets/images/person4.jpeg";
import person5 from "../../assets/images/person5.png";
import person6 from "../../assets/images/rajesh3.jpg";
import person7 from "../../assets/images/person7.jpeg";

const teamData = {
  leader: {
    name: "RALF LEDL",
    role: "CHIEF EXECUTIVE OFFICER",
    dept: "MENSCHEN IM DIALOG",
    image: person1,
  },
  managers: [
    {
      name: "JURGEN LUCK",
      role: "PROJECT MANAGER",
      dept: "CECS",
      image: person2,
    },
    {
      name: "ANDREA SPIETH",
      role: "PROJECT MANAGER",
      dept: "PROJECT28",
      image: person3,
    },
  ],
  executives: [
    {
      name: "RIDAM GURUNG",
      role: "EXECUTIVE",
      dept: "CECS",
      image: person4,
    },
    {
      name: "ANJU DEVKOTA",
      role: "EXECUTIVE",
      dept: "PROJECT28",
      image: person5,
    },
    {
      name: "RAJESH JACKO",
      role: "EXECUTIVE",
      dept: "CURIOUS MINDS",
      image: person6,
    },
    {
      name: "NEHA ADHIKARI",
      role: "EXECUTIVE",
      dept: "PROJECT28",
      image: person7,
    },
  ],
};

export default function EditorialTeam() {
  const sectionRef = useRef(null);
  const hasFired = useRef(false);

  // High-power continuous corner confetti loop (4 seconds)
  const startContinuousConfetti = () => {
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;

    const colors = ["#e5005a", "#3b82f6", "#10b981", "#f59e0b", "#ec4899"];

    const frame = () => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) return;

      // Left Cannon
      confetti({
        particleCount: 3,
        angle: 50,
        spread: 70,
        startVelocity: 85,
        ticks: 300,
        gravity: 0.9,
        scalar: 1.1,
        origin: { x: 0, y: 0.95 },
        colors: colors,
        disableForReducedMotion: true,
      });

      // Right Cannon
      confetti({
        particleCount: 3,
        angle: 130,
        spread: 70,
        startVelocity: 85,
        ticks: 300,
        gravity: 0.9,
        scalar: 1.1,
        origin: { x: 1, y: 0.95 },
        colors: colors,
        disableForReducedMotion: true,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFired.current) {
          startContinuousConfetti();
          hasFired.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-white text-slate-800 py-20 px-6 sm:px-12 flex flex-col items-center select-none overflow-hidden "
    >
      <div className="w-full max-w-7xl relative z-10 flex flex-col">
        {/* SECTION HEADER */}
        <SectionHeader
          title="OUR TEAM"
          subtitle="Get to know the passionate team behind our innovation."
        />

        {/* TOP LEVEL: CEO Node with Side Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 lg:mb-24">
          <div className="hidden lg:block lg:col-span-3 text-left">
            <span className="text-xs font-black uppercase tracking-widest text-[#e5005a] block mb-1">
              Leadership
            </span>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Guiding our global vision and strategic partnerships across all
              initiative branches.
            </p>
          </div>

          {/* CEO Card (Larger image & text) */}
          <div className="lg:col-span-6 flex flex-col items-center text-center">
            <div className="group cursor-pointer flex flex-col items-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-slate-50 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.06),_8px_8px_20px_rgba(0,0,0,0.03)] border-[10px] border-slate-100 flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_20px_40px_-10px_rgba(229,0,90,0.15)] group-hover:border-[#e5005a]/20">
                <img
                  src={teamData.leader.image}
                  alt={teamData.leader.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-5">
                <h2 className="text-2xl sm:text-3xl font-black tracking-wide uppercase text-slate-900 group-hover:text-[#e5005a] transition-colors">
                  {teamData.leader.name}
                </h2>
                <p className="text-sm sm:text-base font-bold text-[#e5005a] uppercase tracking-widest mt-1">
                  {teamData.leader.role}
                </p>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mt-1">
                  {teamData.leader.dept}
                </span>
              </div>

              <div className="flex items-center gap-4 mt-4 opacity-40 group-hover:opacity-100 transition-opacity">
                <a href="#" className="text-slate-800 hover:text-[#e5005a] transition-colors">
                  <FaXTwitter size={14} />
                </a>
                <a href="#" className="text-slate-800 hover:text-[#e5005a] transition-colors">
                  <FaInstagram size={15} />
                </a>
                <a href="#" className="text-slate-800 hover:text-[#e5005a] transition-colors">
                  <FaLinkedinIn size={15} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 text-center lg:text-left text-sm text-slate-500 leading-relaxed max-w-sm mx-auto lg:mx-0">
            <h3 className="font-bold text-slate-900 text-base mb-2 uppercase tracking-wide">
              MENSCHEN IM DIALOG & PARTNERS
            </h3>
            <p>
              We collaborate across dedicated departments—CECS, PROJECT28, and
              CURIOUS MINDS—combining expert project management and executive
              drive.
            </p>
          </div>
        </div>

        {/* MID LEVEL: Project Managers */}
        <div className="flex flex-wrap justify-center gap-14 sm:gap-28 mb-20 lg:mb-24">
          {teamData.managers.map((member, idx) => (
            <div
              key={idx}
              className="group cursor-pointer flex items-center gap-5 sm:gap-6"
            >
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-slate-50 shadow-md border-4 border-slate-100 shrink-0 transition-all duration-500 group-hover:scale-105 group-hover:border-[#e5005a]/30">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase tracking-wide group-hover:text-[#e5005a] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#e5005a] uppercase tracking-wider mt-0.5">
                  {member.role}
                </p>
                <span className="text-xs font-semibold text-slate-400 uppercase block mt-0.5">
                  {member.dept}
                </span>

                <div className="flex items-center gap-3 mt-2.5 opacity-40 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="text-slate-800 hover:text-[#e5005a] transition-colors">
                    <FaXTwitter size={13} />
                  </a>
                  <a href="#" className="text-slate-800 hover:text-[#e5005a] transition-colors">
                    <FaInstagram size={14} />
                  </a>
                  <a href="#" className="text-slate-800 hover:text-[#e5005a] transition-colors">
                    <FaLinkedinIn size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM LEVEL: Executives Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.executives.map((member, idx) => (
            <div
              key={idx}
              className="group cursor-pointer flex items-center gap-4 p-4 rounded-2xl transition-all hover:bg-slate-50"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-slate-50 shadow-sm border-2 border-slate-200 shrink-0 transition-all duration-500 group-hover:scale-105 group-hover:border-[#e5005a]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-left">
                <h4 className="text-base font-black text-slate-900 uppercase tracking-wide group-hover:text-[#e5005a] transition-colors">
                  {member.name}
                </h4>
                <p className="text-xs font-bold text-[#e5005a] uppercase tracking-wider mt-0.5">
                  {member.role}
                </p>
                <span className="text-[10px] font-semibold text-slate-400 uppercase block mt-0.5">
                  {member.dept}
                </span>

                <div className="flex items-center gap-2.5 mt-2.5 opacity-40 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="text-slate-800 hover:text-[#e5005a] transition-colors">
                    <FaXTwitter size={12} />
                  </a>
                  <a href="#" className="text-slate-800 hover:text-[#e5005a] transition-colors">
                    <FaInstagram size={13} />
                  </a>
                  <a href="#" className="text-slate-800 hover:text-[#e5005a] transition-colors">
                    <FaLinkedinIn size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}