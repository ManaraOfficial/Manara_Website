// One-off/occasional maintenance script — NOT part of the site build.
// Regenerate src/data/nepaliFestivals.json whenever you need to extend coverage to a new
// BS year: `npm i -D nepali-calendar-panchang && node scripts/generate-festivals.cjs`
//
// Pulls real, astronomically-computed Bikram Sambat calendar data (cross-checked against
// Nepali almanacs) instead of hand-guessing Gregorian dates for lunar festivals.
const fs = require("fs");
const path = require("path");
const { getYear } = require("nepali-calendar-panchang");

const BS_YEARS = [2082, 2083]; // ≈ 2025-04 through 2027-04 in Gregorian

// Drop UN/international observance days and the twice-monthly minor fasting day (ekadashi) —
// the library flags these as holidays too, but they aren't Nepali festivals worth a greeting.
const DROP_PATTERNS = [/^अन्तर्राष्ट्रिय/, /^विश्व/, /एकादशी$/, /^भ्यालेन्टाइन/, /^मण्डेला/];

const EMOJI_BY_KEYWORD = [
  [/दशैं|घटस्थापना|फूलपाती|अष्टमी|नवमी|दशमी/, "🪁"],
  [/तिहार|दीपावली|लक्ष्मी पूजा|तिका|धनतेरस|कुकुर|गाई|गोवर्धन/, "🪔"],
  [/होली|फागु/, "🎨"],
  [/तीज/, "🌺"],
  [/बुद्ध जयन्ती/, "🪷"],
  [/जनै पूर्णिमा|रक्षाबन्धन/, "🧵"],
  [/कृष्ण जन्माष्टमी/, "🪈"],
  [/शिवरात्री|शिवरात्रि/, "🔱"],
  [/सङ्क्रान्ति|संक्रान्ति/, "🌾"],
  [/छठ/, "🌅"],
  [/सरस्वती|श्रीपञ्चमी/, "📚"],
  [/नयाँ वर्ष/, "🎉"],
];

const emojiFor = (names) => {
  const joined = names.join(" ");
  const match = EMOJI_BY_KEYWORD.find(([pattern]) => pattern.test(joined));
  return match ? match[1] : "🎉";
};

// English names for the Nepali festival labels the library returns — the calendar
// computation itself (which dates are festivals) stays entirely library-driven; this is
// just a display translation for the same computed occasions.
const ENGLISH_NAMES = {
  "बुद्ध जयन्ती": "Buddha Jayanti",
  "जनै पूर्णिमा / रक्षाबन्धन": "Janai Purnima / Raksha Bandhan",
  "कृष्ण जन्माष्टमी": "Krishna Janmashtami",
  "हरितालिका तीज": "Teej",
  "घटस्थापना (दशैं आरम्भ)": "Ghatasthapana (Dashain begins)",
  "फूलपाती": "Fulpati",
  "महाअष्टमी": "Maha Ashtami",
  "महानवमी": "Maha Navami",
  "विजया दशमी": "Vijaya Dashami",
  "गोवर्धन पूजा / म्ह पूजा": "Govardhan Puja / Mha Puja",
  "भाइटीका / किजा पूजा": "Bhai Tika",
  "छठ पर्व": "Chhath Parva",
  "लक्ष्मी पूजा / दीपावली": "Lakshmi Puja / Deepawali",
  "पौष पूर्णिमा": "Poush Purnima",
  "श्रीपञ्चमी / सरस्वती पूजा": "Shree Panchami / Saraswati Puja",
  "होली / फागु पूर्णिमा": "Holi / Fagu Purnima",
  "महाशिवरात्री": "Maha Shivaratri",
  "राम नवमी": "Ram Nawami",
  "राधाष्टमी": "Radha Ashtami",
  "माघी पूर्णिमा": "Maghi Purnima",
};

const englishNameFor = (name) => ENGLISH_NAMES[name] || name;

const MONTHS = {
  Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
  Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
};

// english_date looks like "2026 Jul 30, Thursday" — `new Date(...)` chokes on this exact
// non-standard format, so parse it explicitly instead of relying on loose Date parsing.
const parseEnglishDate = (str) => {
  const match = str.match(/^(\d{4}) (\w{3}) (\d{1,2})/);
  if (!match) return null;
  const [, year, monthName, day] = match;
  const month = MONTHS[monthName];
  if (!month) return null;
  return `${year}-${month}-${day.padStart(2, "0")}`;
};

const results = [];

for (const bsYear of BS_YEARS) {
  const year = getYear(bsYear);
  for (const month of year.months) {
    for (const day of month.days) {
      if (!day.is_holiday || !day.events.length) continue;

      const names = day.events.filter((name) => !DROP_PATTERNS.some((p) => p.test(name)));
      if (!names.length) continue;

      const iso = parseEnglishDate(day.english_date);
      if (!iso) continue;

      const englishNames = names.map(englishNameFor);

      results.push({
        date: iso,
        bsDate: day.bikram_sambat,
        names,
        emoji: emojiFor(names),
        message: {
          ne: `${names.join(" / ")} को हार्दिक शुभकामना!`,
          en: `Happy ${englishNames.join(" / ")}!`,
        },
      });
    }
  }
}

results.sort((a, b) => a.date.localeCompare(b.date));

const outPath = path.join(__dirname, "..", "src", "data", "nepaliFestivals.json");
fs.writeFileSync(outPath, JSON.stringify(results, null, 2) + "\n");
console.log(`Wrote ${results.length} festival days to ${outPath}`);
