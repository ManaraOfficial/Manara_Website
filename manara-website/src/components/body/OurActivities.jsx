import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SectionHeader from "../reusableComp/SectionHeader";

// Image assets
import CuriousMinds from "../../assets/images/CuriousMinds.jpg";
import Project28Img from "../../assets/images/Project28Img.jpg";
import CECSImg from "../../assets/images/CECSImg.png";
import OtherActivitiesImg from "../../assets/images/OtherActivitiesImg.png";

// Static project metadata — text content comes from i18next locales
const PROJECTS = [
  {
    id: 1,
    number: "01",
    image: CuriousMinds,
    path: "/curious-minds",
    categoryKey: "education",
    color: "green",
  },
  {
    id: 2,
    number: "02",
    image: Project28Img,
    path: "/project-28",
    categoryKey: "health",
    color: "orange",
  },
  {
    id: 3,
    number: "03",
    image: CECSImg,
    path: "/sponsorship",
    categoryKey: "support",
    color: "red",
  },
  {
    id: 4,
    number: "04",
    image: OtherActivitiesImg,
    path: "/other-activities",
    categoryKey: "community",
    color: "green",
  },
];

// Color configuration for accents, badges, and pulsing dots
const themeStyles = {
  green: {
    accentText: "text-[#366A35]",
    badge: "bg-[#366A35]/10 text-[#366A35] border-[#366A35]/20",
    pill: "bg-emerald-50 text-[#366A35] border-emerald-100",
    button: "bg-[#366A35] hover:bg-[#2e592d] text-white shadow-[#366A35]/20",
    borderHover: "hover:border-[#366A35]/30",
    dot: "bg-[#366A35]",
  },
  orange: {
    accentText: "text-[#EC8134]",
    badge: "bg-[#EC8134]/10 text-[#EC8134] border-[#EC8134]/20",
    pill: "bg-orange-50 text-[#EC8134] border-orange-100",
    button: "bg-[#EC8134] hover:bg-[#d4702b] text-white shadow-[#EC8134]/20",
    borderHover: "hover:border-[#EC8134]/30",
    dot: "bg-[#EC8134]",
  },
  red: {
    accentText: "text-[#D34A32]",
    badge: "bg-[#D34A32]/10 text-[#D34A32] border-[#D34A32]/20",
    pill: "bg-rose-50 text-[#D34A32] border-rose-100",
    button: "bg-[#D34A32] hover:bg-[#b83e29] text-white shadow-[#D34A32]/20",
    borderHover: "hover:border-[#D34A32]/30",
    dot: "bg-[#D34A32]",
  },
};

const OurActivities = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const projects = t("home.activities.projects", { returnObjects: true });

  return (
    <section className="bg-gradient-to-b from-[#366A35]/5 via-[#F8FAFC] to-hotpink dark:from-[#366A35]/10 dark:via-[#0c0c0c] dark:to-[#0a0a0a] font-['Nunito_Sans',sans-serif]" id="our-work">
      
      <div className="max-w-6xl mx-auto pb-20 px-6 space-b-16">
        
        <SectionHeader 
          title={t("home.activities.title")} 
          subtitle={t("home.activities.subtitle")} 
        />

        {/* Alternating Horizontal Split Showcase */}
        <div className="space-y-12 sm:space-y-16">
          {PROJECTS.map((project, index) => {
            const theme = themeStyles[project.color];
            const isEven = index % 2 === 1;
            const copy = projects[index];

            return (
              <div
                key={project.id}
                className={`group bg-white dark:bg-[#1f1f23] rounded-3xl border border-gray-200/80 dark:border-white/15 p-6 sm:p-8 lg:p-10 shadow-sm dark:shadow-xl dark:shadow-black/30 hover:shadow-xl transition-all duration-500 ${theme.borderHover}`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 relative h-64 sm:h-80 lg:h-[380px] rounded-2xl overflow-hidden bg-slate-100 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={copy.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />

                    {/* Category Floating Tag with Pulsing Dot on the Left */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border backdrop-blur-md bg-white/90 shadow-xs ${theme.badge} font-['Montserrat',sans-serif]`}
                      >
                        <span className="relative flex h-2 w-2">
                          <span
                            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${theme.dot}`}
                          />
                          <span
                            className={`relative inline-flex rounded-full h-2 w-2 ${theme.dot}`}
                          />
                        </span>
                        <span>{t(`home.activities.categories.${project.categoryKey}`)}</span>
                      </span>
                    </div>

                    {/* Muted Index Number Overlay */}
                    <div className="absolute bottom-3 right-5 pointer-events-none">
                      <span className="text-6xl sm:text-7xl font-black text-white/30 font-['Montserrat',sans-serif] select-none">
                        {project.number}
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 space-y-5 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-black tracking-widest font-mono uppercase ${theme.accentText}`}>
                          {t("home.activities.initiative", { number: project.number })}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight font-['Montserrat',sans-serif]">
                        {copy.title}
                      </h3>

                      <p className="text-sm font-bold text-gray-500 dark:text-gray-400 font-['Montserrat',sans-serif]">
                        {copy.tagline}
                      </p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                      {copy.description}
                    </p>

                    {/* Key Highlight Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {copy.highlights.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-lg text-xs font-semibold border ${theme.pill}`}
                        >
                          ✓ {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-3">
                      <button
                        onClick={() => navigate(project.path)}
                        className={`inline-flex items-center gap-3 px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95 font-['Montserrat',sans-serif] ${theme.button}`}
                      >
                        <span>{t("home.activities.exploreProgramDetails")}</span>
                        <svg
                          className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default memo(OurActivities);
