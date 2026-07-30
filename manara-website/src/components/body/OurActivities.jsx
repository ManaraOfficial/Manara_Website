import { memo } from "react";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../reusableComp/SectionHeader";

import CuriousMinds from "../../assets/images/CuriousMinds.jpg";
import Project28Img from "../../assets/images/Project28Img.jpg";
import CECSImg from "../../assets/images/CECSImg.png";
import OtherActivitiesImg from "../../assets/images/OtherActivitiesImg.png";

const projects = [
  {
    id: 1,
    title: "CURIOUS MINDS",
    description:
      "Curiosity fuels education by inspiring students and teachers through innovative ICT-based learning opportunities.",
    image: CuriousMinds,
    path: "/curious-minds",
    category: "Education",
    color: "green",
  },
  {
    id: 2,
    title: "PROJECT 28",
    description:
      "Promoting menstrual dignity, health awareness, and empowerment for girls and women across Nepal.",
    image: Project28Img,
    path: "/project-28",
    category: "Health",
    color: "orange",
  },
  {
    id: 3,
    title: "SPONSORSHIPS",
    description:
      "Creating brighter futures by supporting children's education, wellbeing, and personal development.",
    image: CECSImg,
    path: "/cecs",
    category: "Support",
    color: "red",
  },
  {
    id: 4,
    title: "OTHER ACTIVITIES",
    description:
      "Supporting communities through environmental conservation, livelihoods, disaster response, and social development.",
    image: OtherActivitiesImg,
    path: "/other-activities",
    category: "Community",
    color: "green",
  },
];

const colorClasses = {
  green: {
    text: "text-[#366A35]",
    dot: "bg-[#366A35]",
    button: "bg-[#366A35] hover:bg-[#2E5A2D]",
  },
  orange: {
    text: "text-[#EC8134]",
    dot: "bg-[#EC8134]",
    button: "bg-[#EC8134] hover:bg-[#D9722C]",
  },
  red: {
    text: "text-[#D34A32]",
    dot: "bg-[#D34A32]",
    button: "bg-[#D34A32] hover:bg-[#B53F2A]",
  },
};

const OurActivities = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      <SectionHeader title="Our Activities" subtitle="What we do, how we work, and the impact we create." />

      <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const style = colorClasses[project.color];

          return (
            <div
              key={project.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col"
            >
              {/* Image */}
              <div className="p-5 pb-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 rounded-2xl object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {/* Category with Wave Blinking Dot */}
<div className="flex items-center gap-2.5">
  <div className="relative flex h-3 w-3 items-center justify-center">
    {/* Outer Expanding Wave Ring */}
    <span
      className={`absolute inline-flex h-full w-full rounded-full animate-ping opacity-75 ${style.dot}`}
    />
    {/* Inner Glowing/Pulsing Dot */}
    <span
      className={`relative inline-flex h-2.5 w-2.5 rounded-full animate-pulse ${style.dot}`}
    />
  </div>

  <span
    className={`text-sm font-semibold uppercase tracking-wider ${style.text}`}
  >
    {project.category}
  </span>
</div>

                {/* Title */}
                <h3
                  className={`mt-5 text-2xl font-bold ${style.text} leading-tight min-h-[64px]`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#404040] leading-7 flex-1">
                  {project.description}
                </p>

                {/* Button */}
                <button
                  onClick={() => navigate(project.path)}
                  className={`mt-8 inline-flex items-center gap-2 w-fit px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 ${style.button}`}
                >
                  Learn More
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(OurActivities);