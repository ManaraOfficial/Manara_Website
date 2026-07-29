import React from "react";
import SectionHeader from "../reusableComp/SectionHeader";
import whoWeAreImg from "../../assets/images/WhoWeAre.png";
import { Link } from "react-router-dom";
const cards = [
  {
    id: 1,
    icon: "🌱",
    title: "Community Driven Development",
    description:
      "We work hand-in-hand with local communities to understand their needs and create sustainable solutions that bring real change.",
    bg: "from-[#F4F9F4] via-white to-[#F4F9F4]",
    iconBg: "bg-[#366A35]",
    titleColor: "text-[#366A35]",
    lineColor: "bg-[#366A35]",
  },
  {
    id: 2,
    icon: "🎓",
    title: "Education & Innovation",
    description:
      "We promote quality education and integrate ICT in schools to empower students and teachers with 21st-century skills and opportunities.",
    bg: "from-[#FFF6F0] via-white to-[#FFF6F0]",
    iconBg: "bg-[#EC8134]",
    titleColor: "text-[#EC8134]",
    lineColor: "bg-[#EC8134]",
  },
  {
    id: 3,
    icon: "🍃",
    title: "Sustainable Impact",
    description:
      "Our programs are designed for long-term impact, focusing on environmental sustainability, livelihood improvement, and community resilience.",
    bg: "from-[#FFF5F3] via-white to-[#FFF5F3]",
    iconBg: "bg-[#D34A32]",
    titleColor: "text-[#D34A32]",
    lineColor: "bg-[#D34A32]",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-[#F8FAFC] pb-20" id="about-us">
    <div className="max-w-6xl mx-auto text-left   ">
      <SectionHeader title="Who We Are" subtitle= "The minds, mission, and vision driving our journey." />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Top Section */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left Image */}
            <div>
              <img
                src={whoWeAreImg}
                alt="MRDS Nepal"
                className="w-full h-[560px] object-cover rounded-3xl shadow-xl"
              />
            </div>

            {/* Right Content */}
            <div>
              <p className="text-[#404040] text-lg leading-9 mt-4">
                MRDS Nepal is a non-profit, non-governmental organization
                committed to improving the quality of life of rural communities
                across Nepal. Since our establishment in 2017, we have been
                working with local communities, schools, government agencies,
                and development partners to promote education, innovation,
                health, environmental conservation, and sustainable livelihoods.
              </p>

              <p className="text-[#404040] text-lg leading-9 mt-6">
                We believe that lasting change happens when communities are
                empowered with knowledge, skills, and opportunities. Our
                community-centered approach ensures local participation,
                inclusion, and long-term impact in everything we do.
              </p>
<Link to="/about-us">
              <button className="mt-10 inline-flex items-center gap-3 bg-[#366A35] hover:bg-[#2E5A2D] hover:cursor-pointer transition duration-300 text-white px-8 py-4 rounded-xl font-semibold shadow-lg">
                <span className="text-xl">👥</span>
                Learn More About Us
              </button>
              </Link>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`rounded-3xl p-8 bg-gradient-to-br ${card.bg} shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-full ${card.iconBg} flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-lg`}
                  >
                    {card.icon}
                  </div>

                  <h3
                    className={`text-2xl font-bold ${card.titleColor} leading-tight`}
                  >
                    {card.title}
                  </h3>
                </div>

                <p className="text-[#404040] text-lg leading-8">
                  {card.description}
                </p>

                {/* Uncomment if you want the colored line */}
                {/*
                <div
                  className={`w-16 h-1 ${card.lineColor} rounded-full mt-6`}
                ></div>
                */}
              </div>
            ))}
          </div>
        </div>
    </div>
    </div>
  );
};

export default AboutUs;