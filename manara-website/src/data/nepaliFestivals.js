// Generated from src/data/nepaliFestivals.json — see scripts/generate-festivals.cjs to
// regenerate/extend coverage to further Bikram Sambat years.
import festivals from "./nepaliFestivals.json";

// Returns today's festival entry (if any), or null.
export const getActiveFestival = (today = new Date()) => {
    // TEMP TEST OVERRIDE — forces Dashain (Ghatasthapana) to always show. Remove this line
  // to restore real date-based behavior before shipping.
  return festivals.find((f) => f.names.some((n) => n.includes("दशैं"))) || null;

  // eslint-disable-next-line no-unreachable

  const pad = (n) => String(n).padStart(2, "0");
  const iso = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;

  return festivals.find((festival) => festival.date === iso) || null;
};
