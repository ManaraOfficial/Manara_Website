import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaXmark } from "react-icons/fa6";
import { getActiveFestival } from "../../data/nepaliFestivals";

const STORAGE_PREFIX = "manara-festival-seen-";

const FestivalGreetingModal = () => {
  const { i18n } = useTranslation();
  const [festival, setFestival] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const active = getActiveFestival();
    if (!active) return;

    const seenKey = `${STORAGE_PREFIX}${active.date}`;
    if (localStorage.getItem(seenKey)) return;

    setFestival(active);

    // Small delay so the greeting appears after the page has settled in, not instantly on load
    const timer = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    if (festival) {
      localStorage.setItem(`${STORAGE_PREFIX}${festival.date}`, "1");
    }
  };

  if (!festival) return null;

  const isNepali = i18n.language === "ne";
  const thankYou = isNepali ? "धन्यवाद" : "Thank You";

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center p-4 transition-opacity duration-300 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={festival.message.ne}
    >
      {/* Backdrop — kept light so the page behind stays visible */}
      <div
        className="absolute inset-0 bg-black/25 backdrop-blur-[2px]"
        onClick={handleClose}
      />

      {/* Card */}
      <div
        className={`relative w-full max-w-sm bg-white dark:bg-[#1f1f23] rounded-3xl border border-gray-100 dark:border-white/15 shadow-2xl p-8 text-center space-y-4 transition-all duration-300 ${
          visible ? "scale-100 translate-y-0" : "scale-90 translate-y-4"
        }`}
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition cursor-pointer"
        >
          <FaXmark />
        </button>

        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#EC8134]/15 via-[#D34A32]/10 to-[#366A35]/15 flex items-center justify-center text-4xl">
          {festival.emoji}
        </div>

        <div className="space-y-1.5">
          <p className="text-lg font-extrabold text-gray-900 dark:text-white font-['Montserrat',sans-serif] leading-snug">
            {festival.message.ne}
          </p>
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 leading-snug">
            {festival.message.en}
          </p>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          — Manara Foundation
        </p>

        <button
          onClick={handleClose}
          className="mt-2 w-full py-3 bg-[#EC8134] hover:bg-[#d4702b] text-white font-bold text-sm rounded-xl transition cursor-pointer font-['Montserrat',sans-serif]"
        >
          {thankYou}
        </button>
      </div>
    </div>
  );
};

export default FestivalGreetingModal;
