import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import HeroTitle from "../components/reusableComp/HeroTitle";
import {
  FaGraduationCap,
  FaShieldAlt,
  FaChevronDown,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaUser,
  FaBookReader,
  FaUsers,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

const stepIcons = [<FaBookReader />, <FaUsers />, <FaChartLine />];
const stepIconBg = [
  "bg-[#EC8134]/10 text-[#EC8134]",
  "bg-[#366A35]/10 text-[#366A35]",
  "bg-[#D34A32]/10 text-[#D34A32]",
];

const SponsorshipsDetailPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const breakdown = t("sponsorshipsDetail.breakdown", { returnObjects: true });
  const faqs = t("sponsorshipsDetail.faqs", { returnObjects: true });
  const howItWorksSteps = t("sponsorshipsDetail.howItWorksSteps", { returnObjects: true });
  const shortTermGoals = t("sponsorshipsDetail.shortTermGoals", { returnObjects: true });
  const longTermGoals = t("sponsorshipsDetail.longTermGoals", { returnObjects: true });
  const otherAreas = t("sponsorshipsDetail.otherAreas", { returnObjects: true });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-200 pt-28 pb-16 px-4 sm:px-6 lg:px-8 font-['Nunito_Sans',sans-serif]">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Centered Heading & Meta */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D34A32]/10 text-[#D34A32] border border-[#D34A32]/20 text-xs font-extrabold uppercase tracking-widest mb-4 font-['Montserrat',sans-serif]">
            {t("sponsorshipsDetail.badge")}
          </div>

          <HeroTitle
            className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-6 font-['Montserrat',sans-serif]"
            segments={[
              { text: t("sponsorshipsDetail.heroTitleLine1") },
              { break: true },
              { text: t("sponsorshipsDetail.heroTitleHighlight"), className: "text-[#D34A32]" },
            ]}
          />

          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-normal max-w-3xl mx-auto mb-8">
            {t("sponsorshipsDetail.heroSubtitle")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            <span className="inline-flex items-center gap-1.5 bg-white dark:bg-[#1f1f23] border border-gray-200 dark:border-white/15 shadow-sm px-4 py-2 rounded-full font-medium">
              <FaMapMarkerAlt className="text-[#D34A32]" /> {t("sponsorshipsDetail.heroLocation")}
            </span>
            <span className="bg-[#D34A32]/10 text-[#D34A32] border border-[#D34A32]/30 px-4 py-2 rounded-full font-bold">
              {t("sponsorshipsDetail.heroCooperation")}
            </span>
          </div>
        </div>

        {/* FEATURED HERO IMAGE WITH OVERLAY CONTENT */}
        <div className="relative w-full h-[360px] sm:h-[480px] rounded-3xl overflow-hidden border border-gray-100 dark:border-white/15 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
            alt="Children in Nepal receiving sponsorship support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EC8134] text-white text-xs font-bold uppercase tracking-wider">
              {t("sponsorshipsDetail.imageBadge")}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-['Montserrat',sans-serif] leading-tight">
              {t("sponsorshipsDetail.imageTitle")}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/90 pt-1">
              <span className="flex items-center gap-1.5 font-medium">
                <FaUser className="text-[#EC8134]" /> {t("sponsorshipsDetail.initiatedBy")}
              </span>
              <span className="hidden sm:inline">•</span>
              <span>{t("sponsorshipsDetail.regionLabel")}</span>
            </div>
          </div>
        </div>

        {/* INTRODUCTION & LOCATION OVERVIEW */}
        <div className="bg-white dark:bg-[#1f1f23] p-6 sm:p-8 rounded-2xl border-l-4 border-[#EC8134] border-y border-r border-gray-100 dark:border-white/15 shadow-sm space-y-3">
          <div className="flex items-center gap-3 text-[#EC8134]">
            <FaMapMarkerAlt className="text-2xl" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
              {t("sponsorshipsDetail.introTitle")}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            {t("sponsorshipsDetail.introText")}
          </p>
        </div>

        {/* GOALS SECTION */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
            {t("sponsorshipsDetail.goalsTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Short-Term Goals */}
            <div className="bg-white dark:bg-[#1f1f23] p-6 sm:p-8 rounded-2xl border-l-4 border-[#D34A32] border-y border-r border-gray-100 dark:border-white/15 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-[#D34A32]">
                <FaShieldAlt className="text-2xl" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">{t("sponsorshipsDetail.shortTermGoalsTitle")}</h3>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {shortTermGoals.map((goal, idx) => (
                  <li className="flex items-center gap-2.5" key={idx}>
                    <FaCheckCircle className="text-[#366A35] shrink-0" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Long-Term Goals */}
            <div className="bg-white dark:bg-[#1f1f23] p-6 sm:p-8 rounded-2xl border-l-4 border-[#366A35] border-y border-r border-gray-100 dark:border-white/15 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-[#366A35]">
                <FaGraduationCap className="text-2xl" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">{t("sponsorshipsDetail.longTermGoalsTitle")}</h3>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {longTermGoals.map((goal, idx) => (
                  <li className="flex items-center gap-2.5" key={idx}>
                    <FaCheckCircle className="text-[#366A35] shrink-0" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SECONDARY GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="h-64 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/15 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
              alt="Education access for children"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-64 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/15 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop"
              alt="Community development in Nepal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* HOW THE PROGRAM WORKS (INFORMATIONAL) */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D34A32] font-['Montserrat',sans-serif]">
              {t("sponsorshipsDetail.frameworkLabel")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
              {t("sponsorshipsDetail.howItWorksTitle")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              {t("sponsorshipsDetail.howItWorksSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorksSteps.map((step, idx) => (
              <div className="bg-white dark:bg-[#1f1f23] p-6 rounded-2xl border border-gray-100 dark:border-white/15 shadow-sm text-center space-y-3" key={idx}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl ${stepIconBg[idx]}`}>
                  {stepIcons[idx]}
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white font-['Montserrat',sans-serif]">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FINANCIAL ALLOCATION BREAKDOWN */}
        <div className="bg-white dark:bg-[#1f1f23] p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-white/15 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-100 dark:border-white/15 pb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
                {t("sponsorshipsDetail.allocationTitle")}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                {t("sponsorshipsDetail.allocationSubtitle")}
              </p>
            </div>
            <span className="text-2xl font-extrabold text-[#EC8134] bg-[#EC8134]/10 px-4 py-2 rounded-xl border border-[#EC8134]/20 font-['Montserrat',sans-serif]">
              {t("sponsorshipsDetail.allocationBadge")}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {breakdown.map((item, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-gray-100 dark:border-white/10 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900 dark:text-white text-sm font-['Montserrat',sans-serif]">{item.category}</span>
                  <span className="text-xs font-bold text-[#EC8134] bg-[#EC8134]/10 px-2 py-0.5 rounded">
                    {item.percent}
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed pt-1">{item.detail}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 dark:text-gray-500 italic">
            {t("sponsorshipsDetail.allocationFootnote")}
          </p>
        </div>

        {/* REFINED INFORMATIONAL FAQ ACCORDION */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
              {t("sponsorshipsDetail.faqTitle")}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {t("sponsorshipsDetail.faqSubtitle")}
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#1f1f23] rounded-xl border border-gray-100 dark:border-white/15 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-gray-900 dark:text-white cursor-pointer hover:text-[#EC8134] transition-colors font-['Montserrat',sans-serif]"
                >
                  <span className="pr-4">{faq.q}</span>
                  <FaChevronDown
                    className={`text-xs transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#EC8134]" : "text-gray-400 dark:text-gray-500"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-white/15 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            EXPLORE OTHER CORE FOCUS AREAS
        ========================================== */}
        
                {/* NAVIGATION TO OTHER CORE ACTIVITIES */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-['Montserrat',sans-serif]">
                    {t("sponsorshipsDetail.exploreOtherTitle")}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div
                                  onClick={() => navigate("/curious-minds")}
                                  className="bg-white dark:bg-[#1f1f23] p-6 rounded-2xl border border-gray-100 dark:border-white/15 hover:border-[#366A35]/50 transition cursor-pointer group"
                                >
                                  <span className="text-xs font-bold text-[#366A35] uppercase tracking-wider font-['Montserrat',sans-serif]">
                                    {otherAreas[0].tag}
                                  </span>
                                  <h4 className="text-base font-bold text-gray-900 dark:text-white mt-2 group-hover:text-[#366A35] transition font-['Montserrat',sans-serif]">
                                    {otherAreas[0].title}
                                  </h4>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {otherAreas[0].text}
                                  </p>
                                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#366A35] mt-4">
                                    {t("sponsorshipsDetail.viewProgram")} <FaArrowRight className="text-[10px]" />
                                  </span>
                                </div>

                    {/* Health-NOW (Orange #EC8134) */}
                    <div
                      onClick={() => navigate("/project-28")}
                      className="bg-white dark:bg-[#1f1f23] p-5 rounded-xl border border-gray-100 dark:border-white/15 hover:border-[#EC8134]/50 transition cursor-pointer group space-y-2"
                    >
                      <span className="text-xs font-bold text-[#EC8134] uppercase tracking-wider font-['Montserrat',sans-serif]">
                        {otherAreas[1].tag}
                      </span>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-[#EC8134] transition font-['Montserrat',sans-serif]">
                        {otherAreas[1].title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        {otherAreas[1].text}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#EC8134] pt-2">
                        {t("sponsorshipsDetail.viewProgram")} <FaArrowRight className="text-[10px]" />
                      </span>
                    </div>

                    {/* Let's Learn (Green #366A35) */}
                    <div
                      onClick={() => navigate("/other-activities")}
                      className="bg-white dark:bg-[#1f1f23] p-5 rounded-xl border border-gray-100 dark:border-white/15 hover:border-[#366A35]/50 transition cursor-pointer group space-y-2"
                    >
                      <span className="text-xs font-bold text-[#366A35] uppercase tracking-wider font-['Montserrat',sans-serif]">
                        {otherAreas[2].tag}
                      </span>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-[#366A35] transition font-['Montserrat',sans-serif]">
                        {otherAreas[2].title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        {otherAreas[2].text}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#366A35] pt-2">
                        {t("sponsorshipsDetail.viewProgram")} <FaArrowRight className="text-[10px]" />
                      </span>
                    </div>
                  </div>
                </div>

        {/* TRANSPARENCY & CONTACT FOOTER CALLOUT */}
        <div className="bg-white dark:bg-[#1f1f23] p-6 rounded-2xl border border-gray-200 dark:border-white/15 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-bold text-gray-900 dark:text-white text-sm font-['Montserrat',sans-serif]">
              {t("sponsorshipsDetail.inquiryTitle")}
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              {t("sponsorshipsDetail.inquiryText")}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              to="/reports"
              className="inline-flex items-center gap-1.5 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-800 dark:text-gray-200 text-xs font-bold px-3.5 py-2 rounded-xl border border-gray-200 dark:border-white/15 transition"
            >
              <FaExternalLinkAlt /> {t("sponsorshipsDetail.transparency")}
            </Link>
            <a
              href="mailto:info@menschen-dialog.de"
              className="inline-flex items-center gap-1.5 bg-[#EC8134] hover:bg-[#d4702b] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition"
            >
              <FaEnvelope /> {t("sponsorshipsDetail.emailUs")}
            </a>
            <a
              href="tel:+49000000000"
              className="inline-flex items-center gap-1.5 bg-[#366A35] hover:bg-[#2e592d] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition"
            >
              <FaPhoneAlt /> {t("sponsorshipsDetail.callUs")}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SponsorshipsDetailPage;