import React from "react";
import { Link } from "react-router-dom";
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
    badge: "Stage 01",
    icon: <FaSearch />,
    title: "Listen & Assess",
    description: "We start on the ground before designing any project. Our team conducts field research and holds open dialogues with community members to identify genuine needs.",
    highlights: ["On-the-ground surveys", "Community consultations", "Resource mapping"],
    color: "from-amber-500/10 to-orange-500/5 text-[#EC8134]",
    accent: "bg-[#EC8134]",
  },
  {
    step: "02",
    badge: "Stage 02",
    icon: <FaCogs />,
    title: "Co-Design & Execute",
    description: "Collaborating with local leaders and international partners, we build tailored action plans like Project-28 and execute them with complete financial and operational clarity.",
    highlights: ["Local leadership input", "Cross-border teamwork", "Direct resource delivery"],
    color: "from-emerald-500/10 to-green-500/5 text-[#366A35]",
    accent: "bg-[#366A35]",
  },
  {
    step: "03",
    badge: "Stage 03",
    icon: <FaChartLine />,
    title: "Evaluate & Scale",
    description: "We measure impact, gather feedback from local participants, publish transparent reports, and scale effective models across other communities.",
    highlights: ["Impact reporting", "Open financial audits", "Long-term sustainability"],
    color: "from-[#D34A32]/10 to-red-500/5 text-[#D34A32]",
    accent: "bg-[#D34A32]",
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
    name: "Random Doe",
    role: "Executive Director",
    image: "https://i.pravatar.cc/300?img=47", 
  },
  {
    name: "Random Smith",
    role: "Head of Operations (Munich)",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    name: "Random Sharma",
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

      {/* 2. OUR STORY */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#366A35]/10 text-[#366A35] text-xs font-extrabold uppercase tracking-widest font-['Montserrat',sans-serif]">
              Our Journey
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-['Montserrat',sans-serif] leading-tight">
              Bridging Ideas Between <span className="text-[#EC8134]">Kathmandu</span> & <span className="text-[#366A35]">Munich</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-base">
              It all started with a simple conversation between curious minds across two distinct regions. We recognized a universal truth: while resources are often unevenly distributed, the passion for progress and community development knows no borders.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-base">
              What began as a grassroots initiative has evolved into an international collective. Through flagship efforts like <strong>Project-28</strong> and our community dialogue programs, we turn global solidarity into tangible, local action.
            </p>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#EC8134]/10 via-[#366A35]/5 to-transparent border-l-4 border-[#EC8134] space-y-1">
              <p className="text-sm font-bold text-gray-900 font-['Montserrat',sans-serif]">
                "Dialogue is the bridge; action is the destination."
              </p>
              <p className="text-xs text-gray-500 font-medium">
                Connecting volunteer networks in Nepal with international advocates in Germany.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-6">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest font-['Montserrat',sans-serif] mb-2">
                Cross-Continental Network
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100/80 transition hover:bg-slate-100/60">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold shrink-0">
                  🇩🇪
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 font-['Montserrat',sans-serif]">Munich, Germany</h4>
                  <p className="text-xs text-gray-500">Resource Coordination & Global Outreach</p>
                </div>
              </div>

              <div className="flex items-center justify-center my-[-8px] relative z-10">
                <div className="bg-[#EC8134] text-white p-2.5 rounded-full shadow-md text-sm">
                  <FaGlobe className="animate-spin-slow" />
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100/80 transition hover:bg-slate-100/60">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl font-bold shrink-0">
                  🇳🇵
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 font-['Montserrat',sans-serif]">Kathmandu, Nepal</h4>
                  <p className="text-xs text-gray-500">On-the-Ground Execution & Community Leadership</p>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-semibold font-['Montserrat',sans-serif]">
                <span>Grassroots Operations</span>
                <span className="text-[#366A35] font-bold">100% Transparent</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MISSION & VISION (REDESIGNED) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-24">
        <div className="text-center space-y-4 mb-12">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#366A35]/10 text-[#366A35] text-xs font-extrabold uppercase tracking-widest font-['Montserrat',sans-serif]">
            Our Purpose
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-['Montserrat',sans-serif]">
            Driven by <span className="text-[#EC8134]">Purpose</span>, Guided by <span className="text-[#366A35]">Impact</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="relative bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-6 flex flex-col justify-between hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#EC8134]/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-110" />
            
            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#EC8134]/10 text-[#EC8134] flex items-center justify-center text-2xl">
                <FaBullseye />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                To provide equitable access to resources, education, and opportunities for underprivileged communities. We implement sustainable projects that foster independence, resilience, and cross-cultural understanding.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-2.5 relative z-10">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                <FaCheckCircle className="text-[#EC8134] shrink-0" />
                <span>Grassroots Community Support</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                <FaCheckCircle className="text-[#EC8134] shrink-0" />
                <span>Sustainable & Independent Development</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                <FaCheckCircle className="text-[#EC8134] shrink-0" />
                <span>Cross-Cultural Collaboration</span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-6 flex flex-col justify-between hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#366A35]/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-110" />

            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#366A35]/10 text-[#366A35] flex items-center justify-center text-2xl">
                <FaEye />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                A world where geographic and socioeconomic boundaries do not dictate a person's potential. We envision thriving, interconnected communities built on a foundation of transparency, empathy, and mutual respect.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-2.5 relative z-10">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                <FaCheckCircle className="text-[#366A35] shrink-0" />
                <span>Boundary-Free Educational Access</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                <FaCheckCircle className="text-[#366A35] shrink-0" />
                <span>Empowered Local Leadership</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                <FaCheckCircle className="text-[#366A35] shrink-0" />
                <span>Transparent & Interconnected Governance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY FOCUS AREAS */}
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

      {/* 6. OUR APPROACH / METHODOLOGY */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-24">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EC8134]/10 text-[#EC8134] text-xs font-extrabold uppercase tracking-widest font-['Montserrat',sans-serif]">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-['Montserrat',sans-serif]">
            How We Turn Dialogue Into <span className="text-[#366A35]">Impact</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Sustainable change requires structure. We follow a clear, three-stage framework to ensure transparency, community ownership, and measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {METHODOLOGY.map((item, idx) => (
            <div 
              key={idx} 
              className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl font-bold`}>
                    {item.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-gray-500 font-extrabold text-xs uppercase tracking-wider font-['Montserrat',sans-serif]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-2.5">
                {item.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
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
            Whether you are looking to volunteer, partner, or just want to learn more about our projects, our inbox is always open.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-white text-[#EC8134] px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-50 transition shadow-sm font-['Montserrat',sans-serif]"
          >
            Contact Us Today <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;