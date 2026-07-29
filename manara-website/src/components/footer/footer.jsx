import { memo } from 'react';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#121212] text-white/80 select-none border-t border-white/10 relative z-10">
      
      {/* Main Grid Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Branding, Logo & Social Links */}
        <div className="flex flex-col items-start text-left space-y-5 lg:col-span-2">
          <a href="/" className="flex items-center gap-3 group shrink-0">
            <img
              src={logo}
              className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              alt="Menschen im Dialog e.V. Logo"
            />
          </a>
          
          <p className="text-xs text-white/60 leading-relaxed font-normal max-w-sm">
            Fostering dialogue, driving structural change, and building resilient international communities through sustainable grassroots initiatives.
          </p>

          {/* Social Icons Hovering with Brand Accent */}
          <div className="flex items-center gap-2.5 pt-2">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#366A35] hover:border-[#366A35] hover:-translate-y-1 transition-all duration-300"
              aria-label="Twitter"
            >
              <FaXTwitter size={14} />
            </a>
            <a 
              href="https://www.instagram.com/MenschenDialog/" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#EC8134] hover:border-[#EC8134] hover:-translate-y-1 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={15} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#366A35] hover:border-[#366A35] hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={14} />
            </a>
            <a 
              href="https://www.facebook.com/MenschenDialog/" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#D34A32] hover:border-[#D34A32] hover:-translate-y-1 transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF size={14} />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col items-start text-left space-y-4">
  <h4 className="text-xs font-black text-white tracking-widest uppercase">Quick Links</h4>
  <ul className="space-y-3 text-xs font-medium text-white/60">
    <li>
      <Link to="/" className="hover:text-[#EC8134] transition-colors duration-200">
        Home
      </Link>
    </li>
    <li>
      <Link to="/about" className="hover:text-[#EC8134] transition-colors duration-200">
        About Us
      </Link>
    </li>
    <li>
      <Link to="/curious-minds" className="hover:text-[#366A35] transition-colors duration-200">
        Curious Minds
      </Link>
    </li>
    <li>
      <Link to="/project-28" className="hover:text-[#D34A32] transition-colors duration-200">
        Project 28
      </Link>
    </li>
    <li>
      <Link to="/sponsorships" className="hover:text-[#D34A32] transition-colors duration-200">
        Sponsorships
      </Link>
    </li>
    <li>
      <Link to="/contact" className="hover:text-[#EC8134] transition-colors duration-200">
        Contact Us
      </Link>
    </li>
  </ul>
</div>

        {/* Column 3: Direct Contact Information */}
        <div className="flex flex-col items-start text-left space-y-4">
          <h4 className="text-xs font-black text-white tracking-widest uppercase">Contact</h4>
          <ul className="space-y-3.5 text-xs font-medium text-white/60">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#EC8134] text-[12px] shrink-0" />
              <a href="mailto:info@menschen-dialog.de" className="hover:text-white transition-colors duration-200">info@menschen-dialog.de</a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#366A35] text-[12px] shrink-0" />
              <a href="tel:+4900000000" className="hover:text-white transition-colors duration-200">+49 (0) 123 456789</a>
            </li>
            <li className="flex items-start gap-3 leading-relaxed">
              <FaMapMarkerAlt className="text-[#D34A32] text-[13px] mt-0.5 shrink-0" />
              <span>Germany • Nepal</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-xs font-medium">
          <div>
            © {currentYear} Menschen im Dialog e.V. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors duration-200">Impressum</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default memo(Footer);