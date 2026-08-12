import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeroTitle from "../components/reusableComp/HeroTitle";
import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaGlobe,
  FaArrowRight,
  FaBookOpen,
  FaLeaf,
  FaComments,
  FaSearch,
  FaCogs,
  FaChartLine,
  FaCheckCircle
} from "react-icons/fa";

// --- Icon/style metadata (text comes from i18n) ---

const focusIcons = [<FaBookOpen />, <FaLeaf />, <FaComments />];

const methodologyMeta = [
  { icon: <FaSearch />, color: "from-amber-500/10 to-orange-500/5 text-[#EC8134]", accent: "bg-[#EC8134]" },
  { icon: <FaCogs />, color: "from-emerald-500/10 to-green-500/5 text-[#366A35]", accent: "bg-[#366A35]" },
  { icon: <FaChartLine />, color: "from-[#D34A32]/10 to-red-500/5 text-[#D34A32]", accent: "bg-[#D34A32]" },
];

const coreValueMeta = [
  { icon: <FaHandshake />, color: "bg-[#EC8134]/10 text-[#EC8134]" },
  { icon: <FaUsers />, color: "bg-[#366A35]/10 text-[#366A35]" },
  { icon: <FaLightbulb />, color: "bg-[#D34A32]/10 text-[#D34A32]" },
  { icon: <FaGlobe />, color: "bg-blue-100 text-blue-600" },
];

const teamImages = [
  "https://i.pravatar.cc/300?img=11",
  "https://i.pravatar.cc/300?img=12 ",
  "https://i.pravatar.cc/300?img=47",
];

const AboutUsPage = () => {
  const { t } = useTranslation();

  const STATS = t("aboutUsDetail.stats", { returnObjects: true }).map((s, idx) => ({ id: idx + 1, ...s }));
  const FOCUS_AREAS = t("aboutUsDetail.focusAreas", { returnObjects: true }).map((f, idx) => ({ ...f, icon: focusIcons[idx] }));
  const METHODOLOGY = t("aboutUsDetail.methodology", { returnObjects: true }).map((m, idx) => ({ ...m, ...methodologyMeta[idx] }));
  const CORE_VALUES = t("aboutUsDetail.coreValues", { returnObjects: true }).map((v, idx) => ({ ...v, ...coreValueMeta[idx] }));
  const TEAM = t("aboutUsDetail.team", { returnObjects: true }).map((m, idx) => ({ ...m, image: teamImages[idx] }));
  const missionPoints = t("aboutUsDetail.missionPoints", { returnObjects: true });
  const visionPoints = t("aboutUsDetail.visionPoints", { returnObjects: true });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-200 pt-28 pb-16 font-['Nunito_Sans',sans-serif]">

      {/* 1. HERO SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20 text-center space-y-6">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EC8134]/10 text-[#EC8134] border border-[#EC8134]/20 text-xs font-extrabold uppercase tracking-widest font-['Montserrat',sans-serif]">
          {t("aboutUsDetail.heroBadge")}
        </span>
        <HeroTitle
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight font-['Montserrat',sans-serif] max-w-4xl mx-auto leading-tight"
          segments={[
            { text: t("aboutUsDetail.heroTitlePrefix") },
            { text: t("aboutUsDetail.heroTitleHighlight"), className: "text-[#EC8134]" },
          ]}
        />
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal max-w-3xl mx-auto">
          {t("aboutUsDetail.heroSubtitle")}
        </p>
      </section>

      {/* 2. OUR STORY */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#366A35]/10 text-[#366A35] text-xs font-extrabold uppercase tracking-widest font-['Montserrat',sans-serif]">
              {t("aboutUsDetail.journeyBadge")}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white font-['Montserrat',sans-serif] leading-tight">
              {t("aboutUsDetail.journeyTitlePrefix")} <span className="text-[#EC8134]">{t("aboutUsDetail.journeyTitleKathmandu")}</span> {t("aboutUsDetail.journeyTitleAnd")} <span className="text-[#366A35]">{t("aboutUsDetail.journeyTitleMunich")}</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              {t("aboutUsDetail.journeyText1")}
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              {t("aboutUsDetail.journeyText2Prefix")} <strong>{t("aboutUsDetail.journeyText2Bold")}</strong> {t("aboutUsDetail.journeyText2Suffix")}
            </p>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#EC8134]/10 via-[#366A35]/5 to-transparent border-l-4 border-[#EC8134] space-y-1">
              <p className="text-sm font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
                {t("aboutUsDetail.journeyQuote")}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {t("aboutUsDetail.journeyQuoteAuthor")}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative bg-white dark:bg-[#1f1f23] rounded-3xl p-8 border border-gray-100 dark:border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-6">
              <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest font-['Montserrat',sans-serif] mb-2">
                {t("aboutUsDetail.networkLabel")}
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100/80 dark:border-white/10 transition hover:bg-slate-100/60 dark:hover:bg-white/10">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold shrink-0">
                  🇩🇪
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">{t("aboutUsDetail.munichTitle")}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t("aboutUsDetail.munichText")}</p>
                </div>
              </div>

              <div className="flex items-center justify-center my-[-8px] relative z-10">
                <div className="bg-[#EC8134] text-white p-2.5 rounded-full shadow-md text-sm">
                  <FaGlobe className="animate-spin-slow" />
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100/80 dark:border-white/10 transition hover:bg-slate-100/60 dark:hover:bg-white/10">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl font-bold shrink-0">
                  🇳🇵
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">{t("aboutUsDetail.kathmanduTitle")}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t("aboutUsDetail.kathmanduText")}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100 dark:border-white/15 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-semibold font-['Montserrat',sans-serif]">
                <span>{t("aboutUsDetail.grassrootsOperations")}</span>
                <span className="text-[#366A35] font-bold">{t("aboutUsDetail.transparentLabel")}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MISSION & VISION (REDESIGNED) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-24">
        <div className="text-center space-y-4 mb-12">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#366A35]/10 text-[#366A35] text-xs font-extrabold uppercase tracking-widest font-['Montserrat',sans-serif]">
            {t("aboutUsDetail.purposeBadge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
            {t("aboutUsDetail.purposeTitlePrefix")} <span className="text-[#EC8134]">{t("aboutUsDetail.purposeTitleHighlight1")}</span>, {t("aboutUsDetail.purposeTitleMid")} <span className="text-[#366A35]">{t("aboutUsDetail.purposeTitleHighlight2")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="relative bg-white dark:bg-[#1f1f23] p-8 sm:p-10 rounded-3xl border border-gray-100 dark:border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-6 flex flex-col justify-between hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#EC8134]/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-110" />

            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#EC8134]/10 text-[#EC8134] flex items-center justify-center text-2xl">
                <FaBullseye />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
                {t("aboutUsDetail.missionTitle")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                {t("aboutUsDetail.missionText")}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-white/15 space-y-2.5 relative z-10">
              {missionPoints.map((point, idx) => (
                <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700 dark:text-gray-300" key={idx}>
                  <FaCheckCircle className="text-[#EC8134] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative bg-white dark:bg-[#1f1f23] p-8 sm:p-10 rounded-3xl border border-gray-100 dark:border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-6 flex flex-col justify-between hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#366A35]/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-110" />

            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#366A35]/10 text-[#366A35] flex items-center justify-center text-2xl">
                <FaEye />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
                {t("aboutUsDetail.visionTitle")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                {t("aboutUsDetail.visionText")}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-white/15 space-y-2.5 relative z-10">
              {visionPoints.map((point, idx) => (
                <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700 dark:text-gray-300" key={idx}>
                  <FaCheckCircle className="text-[#366A35] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY FOCUS AREAS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
            {t("aboutUsDetail.whatWeDoTitle")}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t("aboutUsDetail.whatWeDoSubtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FOCUS_AREAS.map((area, idx) => (
            <div key={idx} className="bg-white dark:bg-[#1f1f23] p-8 rounded-3xl border border-gray-100 dark:border-white/15 shadow-sm text-center space-y-4 group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center text-2xl text-[#EC8134] group-hover:bg-[#EC8134] group-hover:text-white transition-colors duration-300">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
                {area.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. IMPACT STATS */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 mb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-700/50">
            {STATS.map((stat) => (
              <div key={stat.id} className="text-center px-4">
                <div className="text-4xl sm:text-5xl font-black text-[#EC8134] font-['Montserrat',sans-serif] mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-widest font-['Montserrat',sans-serif]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR APPROACH / METHODOLOGY */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-24">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EC8134]/10 text-[#EC8134] text-xs font-extrabold uppercase tracking-widest font-['Montserrat',sans-serif]">
            {t("aboutUsDetail.processBadge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
            {t("aboutUsDetail.processTitlePrefix")} <span className="text-[#366A35]">{t("aboutUsDetail.processTitleHighlight")}</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t("aboutUsDetail.processSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {METHODOLOGY.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white dark:bg-[#1f1f23] rounded-3xl p-8 border border-gray-100 dark:border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl font-bold`}>
                    {item.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 font-extrabold text-xs uppercase tracking-wider font-['Montserrat',sans-serif]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-white/15 space-y-2.5">
                {item.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2.5 text-xs font-semibold text-gray-700 dark:text-gray-300">
                    <FaCheckCircle className="text-[#366A35] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CORE VALUES */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
            {t("aboutUsDetail.whatDrivesUsTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div key={idx} className="bg-white dark:bg-[#1f1f23] p-6 rounded-3xl border border-gray-100 dark:border-white/15 shadow-sm space-y-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${val.color}`}>
                {val.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
                {val.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. MEET THE TEAM */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
            {t("aboutUsDetail.teamSectionTitle")}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t("aboutUsDetail.teamSectionSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.map((member, idx) => (
            <div key={idx} className="group text-center space-y-4">
              <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-white dark:border-white/20 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
                  {member.name}
                </h3>
                <p className="text-sm text-[#EC8134] font-semibold tracking-wide uppercase mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. BOTTOM CALL TO ACTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-[#EC8134] rounded-3xl p-8 sm:p-12 text-center text-white shadow-lg space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Montserrat',sans-serif]">
            {t("aboutUsDetail.ctaTitle")}
          </h2>
          <p className="text-orange-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {t("aboutUsDetail.ctaText")}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#EC8134] px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-50 transition shadow-sm font-['Montserrat',sans-serif]"
          >
            {t("aboutUsDetail.ctaButton")} <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;