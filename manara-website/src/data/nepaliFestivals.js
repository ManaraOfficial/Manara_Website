// Generated from src/data/nepaliFestivals.json — see scripts/generate-festivals.cjs to
// regenerate/extend coverage to further Bikram Sambat years.
import festivals from "./nepaliFestivals.json";

// Returns today's festival entry (if any), or null.
export const getActiveFestival = (today = new Date()) => {
  const pad = (n) => String(n).padStart(2, "0");
  const iso = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;

  return festivals.find((festival) => festival.date === iso) || null;
};
