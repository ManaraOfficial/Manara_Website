import { memo } from "react";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../reusableComp/SectionHeader";

// Image assets
import CuriousMinds from "../../assets/images/CuriousMinds.jpg";
import Project28Img from "../../assets/images/Project28Img.jpg";
import CECSImg from "../../assets/images/CECSImg.png";
import OtherActivitiesImg from "../../assets/images/OtherActivitiesImg.png";

const projects = [
  {
    id: 1,
    number: "01",
    title: "CURIOUS MINDS",
    tagline: "Empowering Rural Classrooms Through E-Learning",
    description:
      "Bridging the digital divide in remote Nepalese schools by building interactive computer labs, delivering hands-on Teachers training, and fostering independent digital learning.",
    image: CuriousMinds,
    path: "/curious-minds",
    category: "Education",
    color: "green",
    highlights: ["Interactive ICT Labs", "Teacher Mentorship", "Long-Term Sustainability"],
  },
  {
    id: 2,
    number: "02",
    title: "PROJECT 28",
    tagline: "Promoting Menstrual Health & Gender Equity",
    description:
      "Breaking cultural taboos and health disparities through community-led menstrual hygiene education, reusable pad distribution, and dignity awareness programs.",
    image: Project28Img,
    path: "/project-28",
    category: "Health",
    color: "orange",
    highlights: ["Hygiene Education", "Dignity Kits", "Community Outreach"],
  },
  {
    id: 3,
    number: "03",
    title: "SPONSORSHIPS",
    tagline: "Unlocking Potential Through Educational Support",
    description:
      "Creating direct paths out of poverty by supporting children's academic fees, school supplies, medical care, and overall wellbeing.",
    image: CECSImg,
    path: "/cecs",
    category: "Support",
    color: "red",
    highlights: ["Direct Schooling", "Holistic Wellbeing", "Family Support"],
  },
  {
    id: 4,
    number: "04",
    title: "OTHER ACTIVITIES",
    tagline: "Fostering Resilient & Sustainable Communities",
    description:
      "Strengthening local capacity through environmental conservation, disaster preparedness, and sustainable community development projects.",
    image: OtherActivitiesImg,
    path: "/other-activities",
    category: "Community",
    color: "green",
    highlights: ["Ecology & Conservation", "Disaster Relief", "Livelihood Care"],
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
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-b from-[#366A35]/5 via-[#F8FAFC] to-hotpink font-['Nunito_Sans',sans-serif]" id="our-work">
      
      <div className="max-w-6xl mx-auto pb-20 px-6 space-b-16">
        
        <SectionHeader 
          title="Our Activities" 
          subtitle="Explore our key initiatives dedicated to long-term impact across Nepal." 
        />

        {/* Alternating Horizontal Split Showcase */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => {
            const theme = themeStyles[project.color];
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id}
                className={`group bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 ${theme.borderHover}`}
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
                      alt={project.title}
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
                        <span>{project.category}</span>
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
                          Initiative {project.number}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight font-['Montserrat',sans-serif]">
                        {project.title}
                      </h3>

                      <p className="text-sm font-bold text-gray-500 font-['Montserrat',sans-serif]">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Highlight Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.highlights.map((tag, idx) => (
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
                        <span>Explore Program Details</span>
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