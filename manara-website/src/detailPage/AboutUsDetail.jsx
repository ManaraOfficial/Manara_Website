import React from "react";
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
  FaChartLine
} from "react-icons/fa";

// --- Data Arrays ---

const STATS = [
  { id: 1, label: "Active Initiatives", value: "28+" },
  { id: 2, label: "Lives Impacted", value: "10,000+" },
  { id: 3, label: "Global Partners", value: "15+" },
  { id: 4, label: "Years of Service", value: "5+" },
];

const FOCUS_AREAS = [
  {
    icon: <FaBookOpen />,
    title: "Education & Curious Minds",
    description: "Fostering environments where continuous learning and curiosity thrive, providing educational resources to underserved areas.",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainable Development",
    description: "Executing eco-friendly infrastructure and resource management projects to ensure long-term community health.",
  },
  {
    icon: <FaComments />,
    title: "Civic Dialogue",
    description: "Creating safe spaces for community discussions, bridging cultural divides between our global and local networks.",
  }
];

const METHODOLOGY = [
  {
    step: "01",
    icon: <FaSearch />,
    title: "Research & Assess",
    description: "We start by listening. Our team conducts on-the-ground research to understand the unique needs of the community.",
  },
  {
    step: "02",
    icon: <FaCogs />,
    title: "Design & Implement",
    description: "Collaborating with local leaders, we design tailored initiatives (like Project-28) and execute them with transparency.",
  },
  {
    step: "03",
    icon: <FaChartLine />,
    title: "Evaluate & Scale",
    description: "We rigorously track our impact, publish our financial reports, and scale the models that prove most successful.",
  }
];

const CORE_VALUES = [
  {
    icon: <FaHandshake />,
    title: "Radical Transparency",
    description: "We believe in open governance. Our financial disclosures and impact reports are always accessible to the public.",
    color: "bg-[#EC8134]/10 text-[#EC8134]"
  },
  {
    icon: <FaUsers />,
    title: "Community First",
    description: "Everything we do is centered around empowering communities and fostering meaningful dialogue across borders.",
    color: "bg-[#366A35]/10 text-[#366A35]"
  },
  {
    icon: <FaLightbulb />,
    title: "Curious Minds",
    description: "We encourage innovation, continuous learning, and creative problem-solving in all of our active projects.",
    color: "bg-[#D34A32]/10 text-[#D34A32]"
  },
  {
    icon: <FaGlobe />,
    title: "Global Connection",
    description: "Bridging the gap between our offices in Kathmandu and Munich to create a unified, worldwide impact.",
    color: "bg-blue-100 text-blue-600"
  }
];

const TEAM = [
  {
    name: "Jane Doe",
    role: "Executive Director",
    image: "https://i.pravatar.cc/300?img=47", 
  },
  {
    name: "John Smith",
    role: "Head of Operations (Munich)",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    name: "Aayush Sharma",
    role: "Project Manager (Kathmandu)",
    image: "https://i.pravatar.cc/300?img=12",
  },
];

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 pt-28 pb-16 font-['Nunito_Sans',sans-serif]">
      
      {/* 1. HERO SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20 text-center space-y-6">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EC8134]/10 text-[#EC8134] border border-[#EC8134]/20 text-xs font-extrabold uppercase tracking-widest font-['Montserrat',sans-serif]">
          Who We Are
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight font-['Montserrat',sans-serif] max-w-4xl mx-auto leading-tight">
          Empowering Communities Through <span className="text-[#EC8134]">Dialogue & Action</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto">
          We are a dedicated collective operating across borders to drive sustainable change. From curious minds to large-scale initiatives, we bridge gaps and build futures.
        </p>
      </section>

      {/* 2. OUR STORY (NEW) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-20">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto text-left sm:text-center">
            <p>
              It started with a simple conversation between curious minds in Kathmandu and Munich. We realized that while resources were often unevenly distributed, the desire for progress and community development was universal. 
            </p>
            <p>
              What began as a small grassroots initiative has now grown into a cross-continental organization. Through efforts like <strong>Project-28</strong> and our ongoing community dialogues, we are committed to building bridges that turn international solidarity into tangible, local action.
            </p>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION SPLIT */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4 transition hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <div className="w-14 h-14 rounded-2xl bg-[#EC8134]/10 text-[#EC8134] flex items-center justify-center text-2xl mb-6">
              <FaBullseye />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              To provide equitable access to resources, education, and opportunities for underprivileged communities. We strive to implement sustainable projects that foster independence, resilience, and cross-cultural understanding.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4 transition hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <div className="w-14 h-14 rounded-2xl bg-[#366A35]/10 text-[#366A35] flex items-center justify-center text-2xl mb-6">
              <FaEye />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              A world where geographic and socioeconomic boundaries do not dictate a person's potential. We envision thriving, interconnected communities built on a foundation of transparency, empathy, and mutual respect.
            </p>
          </div>
        </div>
      </section>

      {/* 4. KEY FOCUS AREAS (NEW) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
            What We Do
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            Our initiatives are heavily focused on three main pillars to ensure holistic and sustainable growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FOCUS_AREAS.map((area, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center space-y-4 group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-50 flex items-center justify-center text-2xl text-[#EC8134] group-hover:bg-[#EC8134] group-hover:text-white transition-colors duration-300">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
                {area.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
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

      {/* 6. OUR APPROACH / METHODOLOGY (NEW) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
            How We Work
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            Sustainable impact requires a strategic approach. Here is how we turn ideas into reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {METHODOLOGY.map((item, idx) => (
            <div key={idx} className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <div className="absolute top-6 right-6 text-5xl font-black text-gray-50 opacity-50 font-['Montserrat',sans-serif]">
                {item.step}
              </div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-gray-700 flex items-center justify-center text-xl relative z-10">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-['Montserrat',sans-serif] relative z-10">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CORE VALUES */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
            What Drives Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${val.color}`}>
                {val.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-['Montserrat',sans-serif]">
                {val.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. MEET THE TEAM */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
            Meet the Team
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            The passionate individuals coordinating our efforts across our Kathmandu and Munich offices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.map((member, idx) => (
            <div key={idx} className="group text-center space-y-4">
              <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-white shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
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
            Want to be part of the change?
          </h2>
          <p className="text-orange-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Whether you are looking to volunteer, partner, or just want to learn more about Project-28, our inbox is always open.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-[#EC8134] px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-50 transition shadow-sm font-['Montserrat',sans-serif]"
          >
            Contact Us Today <FaArrowRight />
          </a>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;