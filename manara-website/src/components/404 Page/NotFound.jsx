import React from "react";
import { useNavigate } from "react-router-dom";
import cavemanVideo from "../../assets/images/404.mp4";
import logo from "../../assets/images/recolored_logo.svg";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full text-white flex flex-col justify-between items-center px-6 py-8 select-none overflow-hidden">
      
      {/* 1. Full-Screen Background Video */}
      <video
        src={cavemanVideo}
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* 2. Top Header Logo */}
      <header className="z-10">
        <a href="/">
          <img
            src={logo}
            alt="Menschen im Dialog e.V."
            className="h-30 sm:h-30 w-auto object-contain drop-shadow-md"
          />
        </a>
      </header>

      {/* 3. Bottom Text & Button Section (Positioned low on screen) */}
      <main className="z-10 flex flex-col items-center justify-end text-center mb-12 sm:mb-42  mx-auto">
        
        {/* Exact Heading */}
        <h1 className="text-3xl sm:text-6xl font-black tracking-wide text-white uppercase drop-shadow-lg">
          404 - PAGE NOT FOUND
        </h1>

        {/* Exact Subtitle Text */}
        <p className="text-xs sm:text- text-white/90 mt-3 font-normal tracking-wide drop-shadow-md">
          We've dispatched a rescue murloc to guide you back to safety.
        </p>

        {/* Exact Pill Button */}
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-9 py-4 rounded-full bg-[#0084ff] hover:bg-[#0073e6] text-sm sm:text-base font-bold text-white transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
        >
          Mmmmrrgmgrrrgmmll!
        </button>
        {/* 4. Footer */}
      <footer className="z-10 text-[11px] absolute bottom-5 text-white/50 font-normal drop-shadow">
        © {new Date().getFullYear()} Menschen im Dialog e.V.
      </footer>
      </main>

      
    </div>
  );
};

export default NotFound;