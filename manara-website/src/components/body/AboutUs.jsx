import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  FaArrowRight, 
  FaBullseye, 
  FaEye, 
  FaHeart, 
  FaGraduationCap, 
  FaMedkit, 
  FaHandsHelping,
  FaCheckCircle,
  FaQuoteLeft
} from "react-icons/fa";

// Import your uniform SectionHeader component
import SectionHeader from "../reusableComp/SectionHeader";

const AboutSummarySection = () => {
  const { t } = useTranslation();

  const pillars = t("home.about.pillars", { returnObjects: true });
  const commitments = t("home.about.commitments", { returnObjects: true });

  return (
    <div className="relative bg-gradient-to-b from-[#EC8134]/5 via-[#F8FAFC] to-white dark:from-[#EC8134]/10 dark:via-[#0c0c0c] dark:to-[#0a0a0a] overflow-hidden"
    >
      
      {/* 🌈 TOP TRI-COLOR BRAND ACCENT STRIP */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#EC8134] via-[#D34A32] to-[#366A35]" />

      {/* 🌟 3-COLOR AMBIENT GRADIENT MESH BACKDROPS */}
      {/* 1. Orange (#EC8134) Top-Left Glow */}
      <div 
        className="absolute -top-32 -left-20 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-25"
        style={{
          background: "radial-gradient(circle, #EC8134 0%, transparent 70%)"
        }}
      />
      
      {/* 2. Red (#D34A32) Middle-Right Glow */}
      <div 
        className="absolute top-1/3 -right-20 w-[550px] h-[550px] rounded-full blur-[150px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, #D34A32 0%, transparent 70%)"
        }}
      />

      {/* 3. Green (#366A35) Bottom-Left Glow */}
      <div 
        className="absolute bottom-10 -left-20 w-[550px] h-[550px] rounded-full blur-[150px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, #366A35 0%, transparent 70%)"
        }}
      />

      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-['Nunito_Sans',sans-serif] relative z-10">
        
        {/* 1. Uniform Section Header */}
        <SectionHeader 
          title={t("home.about.title")} 
          subtitle={t("home.about.subtitle")} 
        />

        {/* 2. Top Overview: Visual Column + Core Narrative */}
        <div className=" grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Card with Overlay Stats & Badge */}
          <div className="lg:col-span-5 relative">
            
            {/* Backing Accent Aura (Blending all 3 brand colors) */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#EC8134]/30 via-[#D34A32]/20 to-[#366A35]/30 rounded-[2.5rem] blur-xl -z-10" />

            {/* Main Photo Frame */}
            <div className="relative rounded-[2rem] overflow-hidden bg-slate-900 border border-slate-200/80 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
                alt="Children in Nepal participating in educational activities"
                loading="lazy"
                className="w-full h-[480px] sm:h-[520px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/50 shadow-md flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EC8134] animate-pulse" />
                <span className="text-xs font-black text-slate-800 font-['Montserrat',sans-serif] tracking-wider uppercase">
                  {t("home.about.tag")}
                </span>
              </div>

              {/* Quote Overlay at Bottom */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <FaQuoteLeft className="text-[#EC8134] text-xl opacity-80" />
                <p className="text-sm font-medium text-slate-100 italic leading-snug">
                  {t("home.about.quote")}
                </p>
                <div className="pt-1 flex items-center gap-2 text-xs font-bold text-amber-300 font-['Montserrat',sans-serif]">
                  <span>{t("home.about.quoteLabel")}</span>
                </div>
              </div>
            </div>

            {/* Floating Impact Badge (Bottom Right) */}
            <div className="mt-6 bg-white/90 dark:bg-[#1f1f23] backdrop-blur-md p-4 sm:p-2 rounded-2xl border border-slate-100 dark:border-white/15 shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#EC8134] flex items-center justify-center text-xl shrink-0">
                <FaHeart />
              </div>
              <div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white font-['Montserrat',sans-serif]">
                  {t("home.about.badgeTitle")}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {t("home.about.badgeText")}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Deep Narrative & Key Takeaways */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Subheading */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EC8134]/10 text-[#EC8134] text-xs font-bold uppercase tracking-wider font-['Montserrat',sans-serif]">
                {t("home.about.pill")}
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-['Montserrat',sans-serif] leading-[1.25]">
                {t("home.about.headline")}
              </h3>
            </div>

            {/* Comprehensive Narrative Copy */}
            <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-slate-900 dark:text-white font-bold">{t("home.about.tag")}</strong> {t("home.about.p1")}
              </p>
              <p>
                {t("home.about.p2")}
              </p>
            </div>

            {/* Key Organizational Commitments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">
              {commitments.map((commitment, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2 rounded-lg bg-white/70 dark:bg-[#1f1f23] backdrop-blur-sm border border-slate-100 dark:border-white/15">
                  <FaCheckCircle className="text-[#366A35] text-base shrink-0" />
                  <span>{commitment}</span>
                </div>
              ))}
            </div>

            {/* Call To Action Button */}
            <div className="pt-2">
              <Link
                to="/about-us"
                className="inline-flex items-center gap-3 bg-[#EC8134] hover:bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300 shadow-lg shadow-[#EC8134]/25 hover:shadow-slate-900/20 group font-['Montserrat',sans-serif]"
              >
                <span>{t("common.learnMoreAbout")}</span>
                <FaArrowRight className="group-hover:translate-x-1.5 transition-transform text-xs" />
              </Link>
            </div>

          </div>

        </div>

        {/* 3. Core Strategic Pillars (3 Feature Cards Grid matching 3 Brand Colors) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1: Education (Orange Accent) */}
          <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#1f1f23] backdrop-blur-sm border border-slate-200/70 dark:border-white/15 hover:bg-white dark:hover:bg-white/10 hover:shadow-xl hover:border-[#EC8134]/40 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#EC8134] flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
              <FaGraduationCap />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white font-['Montserrat',sans-serif] mb-2">
              {pillars[0].title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {pillars[0].text}
            </p>
          </div>

          {/* Pillar 2: Health & Nutrition (Green Accent) */}
          <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#1f1f23] backdrop-blur-sm border border-slate-200/70 dark:border-white/15 hover:bg-white dark:hover:bg-white/10 hover:shadow-xl hover:border-[#366A35]/40 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#366A35] flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
              <FaMedkit />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white font-['Montserrat',sans-serif] mb-2">
              {pillars[1].title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {pillars[1].text}
            </p>
          </div>

          {/* Pillar 3: Community Empowerment (Red Accent) */}
          <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#1f1f23] backdrop-blur-sm border border-slate-200/70 dark:border-white/15 hover:bg-white dark:hover:bg-white/10 hover:shadow-xl hover:border-[#D34A32]/40 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-[#D34A32] flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
              <FaHandsHelping />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white font-['Montserrat',sans-serif] mb-2">
              {pillars[2].title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {pillars[2].text}
            </p>
          </div>

        </div>

        {/* 4. Mission & Vision Cards Side-by-Side */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Mission Card (Orange Header Accent) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#1f1f23] backdrop-blur-sm border border-slate-200/80 dark:border-white/15 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#EC8134]" />
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#EC8134]/10 text-[#EC8134] flex items-center justify-center text-lg font-bold">
                <FaBullseye />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 dark:text-white font-['Montserrat',sans-serif]">
                {t("home.about.missionTitle")}
              </h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {t("home.about.missionText")}
            </p>
          </div>

          {/* Vision Card (Green Header Accent) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#1f1f23] backdrop-blur-sm border border-slate-200/80 dark:border-white/15 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#366A35]" />
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#366A35]/10 text-[#366A35] flex items-center justify-center text-lg font-bold">
                <FaEye />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 dark:text-white font-['Montserrat',sans-serif]">
                {t("home.about.visionTitle")}
              </h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {t("home.about.visionText")}
            </p>
          </div>

        </div>

      </section>
    </div>
  );
};

export default AboutSummarySection;
