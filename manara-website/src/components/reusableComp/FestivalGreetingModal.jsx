import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaXmark } from "react-icons/fa6";
import { getActiveFestival } from "../../data/nepaliFestivals";

const STORAGE_PREFIX = "manara-festival-seen-";
const CONFETTI_COLORS = ["#EC8134", "#D34A32", "#366A35", "#FBBF24", "#EC4899", "#38BDF8", "#A78BFA"];
const CONFETTI_TOTAL_MS = 2800; // matches the longest piece duration + delay below

const random = (min, max) => Math.random() * (max - min) + min;

// Full-screen falling confetti shower — sits above the modal card so it covers the whole viewport
const ConfettiShower = () => {
  const pieces = useMemo(
    () =>
      Array.from({ length: 140 }, (_, i) => ({
        id: i,
        left: random(0, 100),
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        size: random(6, 13),
        shape: i % 3 === 0 ? "9999px" : "2px",
        duration: random(1800, 2600),
        delay: random(0, 500),
        drift: random(-80, 80),
        rotate: random(360, 1080),
      })),
    []
  );

  return (
    <div className="fixed inset-0 z-[1000] pointer-events-none overflow-hidden">
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translate(0, -10vh) rotate(0deg); opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translate(var(--drift), 110vh) rotate(var(--rot)); opacity: 0; }
        }
      `}</style>
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.shape,
            "--drift": `${p.drift}px`,
            "--rot": `${p.rotate}deg`,
            animation: `confetti-fall ${p.duration}ms ease-in forwards`,
            animationDelay: `${p.delay}ms`,
          }}
        />
      ))}
    </div>
  );
};

const FestivalGreetingModal = () => {
  const { i18n } = useTranslation();
  const [festival, setFestival] = useState(null);
  const [visible, setVisible] = useState(false);
  const [celebrating, setCelebrating] = useState(false);

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

  const handleThankYou = () => {
    setCelebrating(true);
    setTimeout(handleClose, CONFETTI_TOTAL_MS);
  };

  if (!festival) return null;

  const isNepali = i18n.language === "ne";
  const thankYou = isNepali ? "धन्यवाद" : "Thank You";

  return (
    <>
      {celebrating && <ConfettiShower />}

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
            onClick={handleThankYou}
            disabled={celebrating}
            className="mt-2 w-full py-3 bg-[#EC8134] hover:bg-[#d4702b] disabled:opacity-90 text-white font-bold text-sm rounded-xl transition cursor-pointer font-['Montserrat',sans-serif]"
          >
            {thankYou}
          </button>
        </div>
      </div>
    </>
  );
};

export default FestivalGreetingModal;
