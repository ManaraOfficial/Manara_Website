import Navigation from "../navigation/Navigation";
import { useState, useEffect } from "react";

// Full headline typewriter with forward & reverse typing
const FullSentenceTypewriter = ({
  text,
  typeSpeed = 90,
  deleteSpeed = 50,
  pause = 10000,
}) => {
  const [displayed, setDisplayed] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let charIndex = isDeleting ? text.length : 0;
    let interval;

    const type = () => {
      interval = setInterval(() => {
        setDisplayed(text.slice(0, charIndex));
        if (!isDeleting) {
          charIndex++;
          if (charIndex > text.length) {
            clearInterval(interval);
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          charIndex--;
          if (charIndex < 0) {
            clearInterval(interval);
            setIsDeleting(false);
          }
        }
      }, isDeleting ? deleteSpeed : typeSpeed);
    };

    type();
    return () => clearInterval(interval);
  }, [isDeleting, text, typeSpeed, deleteSpeed, pause]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span
      // style={{
      //   display: "inline-block",
      //   transition: isDeleting ? "opacity 0.3s" : "none",
      //   opacity: isDeleting ? 0.7 : 1,
      // }}
    >
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: "1ch",
          marginLeft: "2px",
          color: "#f227eb",
          visibility: cursorVisible ? "visible" : "hidden",
        }}
      >
        |
      </span>
    </span>
  );
};

const HomePage = () => {
  const sentence =
    "We connect people, ideas and resources to create new perspectives together.";

  return (
    <div className="relative h-screen font-montserrat bg-[url('https://gninepal.org/medias/about-us_2024_04_23_07_56_36.jpg??%20%27/images/logo.png%27')] bg-cover bg-center">
    {/* <div className=" flex items-center justify-center font-montserrat md:h-[calc(100vh-120px)]"> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center px-4 text-center pointer-events-none">
      {/* <div className=" inset-0 flex flex-col items-center justify-center px-4 text-center pointer-events-none"> */}
        {/* Headline */}
        <h1 className="text-3xl md:text-5xl h font-bold text-white max-w-5xl  mb-6 animate-fadeIn">
          <FullSentenceTypewriter
            text={sentence}
            typeSpeed={90}
            deleteSpeed={90}
            pause={100000}
          />
        </h1>

        {/* Subheading / Tagline */}
        <p className="text-white/80 text-lg md:text-xl max-w-3xl mb-8 animate-fadeIn delay-200 ">
          Empowering communities through education, innovation, and collaboration.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn delay-400">
          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition">
            Join Us
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 w-full flex justify-center">
  {/* Bouncing circle with arrow */}
  <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center animate-bounce">
    <span className="text-white text-2xl">&#x2193;</span>
  </div>
</div>
</div>


      {/* Tailwind Animations */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }
          .animate-fadeIn.delay-200 {
            animation-delay: 0.2s;
          }
          .animate-fadeIn.delay-400 {
            animation-delay: 0.4s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      
    </div>
  );
};

export default HomePage;
