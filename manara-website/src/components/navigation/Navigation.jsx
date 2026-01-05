import React, { useEffect, useState } from "react";
import logo from "../../assets/images/manara-logo.png";
import {
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa"; // Importing social icons

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // check if page is scrolled down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`fixed top-0 w-full flex justify-around items-center z-[1] transition-all duration-500 ${
        scrolled ? "px-5  backdrop-blur-md" : "p-5"
      }`}
    >
      {/* Logo */}
      <div>
        <a href="/">
          <img
            src={logo}
            className="object-contain nav-btn h-20 w-25"
            alt="Logo"
            style={{
              transform: "translateY(7px)",
              cursor: "pointer",
              filter: "brightness(10)",
            }}
          />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-between gap-6">
        <span className="text-lg font-semibold nav-btn">Home</span>
        <span className="text-lg font-semibold nav-btn">About us</span>
        <span className="text-lg font-semibold nav-btn">Projects</span>
        <span className="text-lg font-semibold nav-btn">Our Work</span>
        <span className="text-lg font-semibold nav-btn">Contact us</span>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4">
        <a
          href="https://www.instagram.com/MenschenDialog/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="text-2xl nav-social" />
        </a>
        <a href="mailto:info@menschen-dialog.de" target="_blank" rel="noreferrer">
          <FaEnvelope className="text-2xl nav-social" />
        </a>
        <a
          href="https://www.facebook.com/MenschenDialog/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className="text-2xl nav-social" />
        </a>
      </div>
    </section>
  );
};

export default Navigation;
