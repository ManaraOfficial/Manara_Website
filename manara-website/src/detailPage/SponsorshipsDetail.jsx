import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
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

const SPONSORSHIP_BREAKDOWN = [
  { category: "Nutrition", percent: "30%", detail: "Healthy food, snacks for the sometimes very long walk to school." },
  { category: "School Supplies", percent: "15%", detail: "Bag, writing utensils, notepad or notebooks, textbooks." },
  { category: "Clothing", percent: "13%", detail: "Every child receives new school clothing once a year." },
  { category: "School Fees", percent: "13%", detail: "As needed, these do not apply at every school." },
  { category: "Development", percent: "12%", detail: "Strengthening the environment and village community, developing sustainable solutions." },
  { category: "Coaching & PM*", percent: "12%", detail: "Local partner coordination, support/coaching of foster parents, project management." },
  { category: "Buffer", percent: "5%", detail: "Respond to emergencies, compensate for price fluctuations." },
];

const REFINED_FAQS = [
  {
    q: "How does this program support long-term child development?",
    a: "The program provides continuous access to education in a familiar environment, protecting children and young people from child labor or early marriage while improving their overall quality of life.",
  },
  {
    q: "Where is the initiative implemented?",
    a: "The program operates primarily in remote villages of the Chumnubri and Dharche communities in the Gorkha District (Manaslu region) of Nepal.",
  },
  {
    q: "Who coordinates the project locally in Nepal?",
    a: "Our long-standing local partner, Manaslu Rural Development Society Nepal (MRDS Nepal), coordinates directly with local communities, foster families, and schools to manage and execute project activities on the ground.",
  },
  {
    q: "Until when do children remain supported under this initiative?",
    a: "Support continues until the children complete their 10th-grade Secondary Education Examination (SEE), equipping them with critical foundations for higher studies or vocational paths.",
  },
  {
    q: "How are project outcomes and transparency ensured?",
    a: "Detailed annual activity and impact reports are published regularly in accordance with international transparency standards to share ongoing progress and financial oversight.",
  },
];

const SponsorshipsDetailPage = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 pt-28 pb-16 px-4 sm:px-6 lg:px-8 font-['Nunito_Sans',sans-serif]">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Centered Heading & Meta */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D34A32]/10 text-[#D34A32] border border-[#D34A32]/20 text-xs font-extrabold uppercase tracking-widest mb-4 font-['Montserrat',sans-serif]">
            SPONSORSHIPS
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6 font-['Montserrat',sans-serif]">
            Fulfilling a Child's Wish for a Future: <br />
            <span className="text-[#D34A32]">SPONSORSHIPS</span>
          </h1>

          <p className="text-base sm:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto mb-8">
            Sponsorship can have a lasting positive impact on the lives of a child and the people around them. It's a structured program that fosters sustainable development, educational continuity, and community empowerment in remote regions of Nepal.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-gray-700">
            <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full font-medium">
              <FaMapMarkerAlt className="text-[#D34A32]" /> Nepal
            </span>
            <span className="bg-[#D34A32]/10 text-[#D34A32] border border-[#D34A32]/30 px-4 py-2 rounded-full font-bold">
              In Cooperation with MRDS Nepal & Menschen im Dialog
            </span>
          </div>
        </div>

        {/* FEATURED HERO IMAGE WITH OVERLAY CONTENT */}
        <div className="relative w-full h-[360px] sm:h-[480px] rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
            alt="Children in Nepal receiving sponsorship support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EC8134] text-white text-xs font-bold uppercase tracking-wider">
              Sponsorship Program
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-['Montserrat',sans-serif] leading-tight">
              Fulfilling a Child's Wish for a Future
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/90 pt-1">
              <span className="flex items-center gap-1.5 font-medium">
                <FaUser className="text-[#EC8134]" /> Initiated by Jürgen Lück
              </span>
              <span className="hidden sm:inline">•</span>
              <span>Gorkha District & Manaslu Region</span>
            </div>
          </div>
        </div>

        {/* INTRODUCTION & LOCATION OVERVIEW */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border-l-4 border-[#EC8134] border-y border-r border-gray-100 shadow-sm space-y-3">
          <div className="flex items-center gap-3 text-[#EC8134]">
            <FaMapMarkerAlt className="text-2xl" />
            <h2 className="text-xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
              Active in the Manaslu Region since 2017
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Children and young people living in the Manaslu region of Nepal are particularly affected by poverty; in some cases, they have lost one or more parents and are therefore at risk of child labor or early marriage. Structured sponsorship models sustainably improve the educational access and living conditions of these children and young people.
          </p>
        </div>

        {/* GOALS SECTION */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 font-['Montserrat',sans-serif]">
            Our Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Short-Term Goals */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-l-4 border-[#D34A32] border-y border-r border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-[#D34A32]">
                <FaShieldAlt className="text-2xl" />
                <h3 className="text-xl font-bold text-gray-900 font-['Montserrat',sans-serif]">Short-Term Goals</h3>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
                <li className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-[#366A35] shrink-0" />
                  <span>Avoid child labor</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-[#366A35] shrink-0" />
                  <span>Prevent early marriage</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-[#366A35] shrink-0" />
                  <span>Continuous access to education</span>
                </li>
              </ul>
            </div>

            {/* Long-Term Goals */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-l-4 border-[#366A35] border-y border-r border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-[#366A35]">
                <FaGraduationCap className="text-2xl" />
                <h3 className="text-xl font-bold text-gray-900 font-['Montserrat',sans-serif]">Long-Term Goals</h3>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
                <li className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-[#366A35] shrink-0" />
                  <span>Creating opportunities through education</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-[#366A35] shrink-0" />
                  <span>Improve living conditions sustainably</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-[#366A35] shrink-0" />
                  <span>Involve and promote the surrounding community</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-[#366A35] shrink-0" />
                  <span>Promote village communities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECONDARY GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="h-64 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
              alt="Education access for children"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-64 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
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
              Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
              How the Sponsorship Program Works
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Our holistic sponsorship model ensures that support directly addresses individual learning needs, community well-being, and localized oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center space-y-3">
              <div className="w-12 h-12 bg-[#EC8134]/10 text-[#EC8134] rounded-full flex items-center justify-center mx-auto text-xl">
                <FaBookReader />
              </div>
              <h3 className="font-bold text-lg text-gray-900 font-['Montserrat',sans-serif]">1. Educational Assistance</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Direct provision of textbooks, learning materials, school uniforms, and tuition assistance required to keep children enrolled through 10th grade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center space-y-3">
              <div className="w-12 h-12 bg-[#366A35]/10 text-[#366A35] rounded-full flex items-center justify-center mx-auto text-xl">
                <FaUsers />
              </div>
              <h3 className="font-bold text-lg text-gray-900 font-['Montserrat',sans-serif]">2. Local Partner Network</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Implementation is coordinated on the ground by MRDS Nepal, maintaining continuous dialogue with guardians, teachers, and local leaders.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center space-y-3">
              <div className="w-12 h-12 bg-[#D34A32]/10 text-[#D34A32] rounded-full flex items-center justify-center mx-auto text-xl">
                <FaChartLine />
              </div>
              <h3 className="font-bold text-lg text-gray-900 font-['Montserrat',sans-serif]">3. Sustainable Growth</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Beyond schooling, the program works to improve community nutrition, health awareness, and general living standards across target villages.
              </p>
            </div>
          </div>
        </div>

        {/* FINANCIAL ALLOCATION BREAKDOWN */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-100 pb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-['Montserrat',sans-serif]">Resource Allocation Framework</h2>
              <p className="text-gray-500 text-sm mt-1">
                How support and operational resources are structured across key child development areas.
              </p>
            </div>
            <span className="text-2xl font-extrabold text-[#EC8134] bg-[#EC8134]/10 px-4 py-2 rounded-xl border border-[#EC8134]/20 font-['Montserrat',sans-serif]">
              Impact Overview
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SPONSORSHIP_BREAKDOWN.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-gray-100 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900 text-sm font-['Montserrat',sans-serif]">{item.category}</span>
                  <span className="text-xs font-bold text-[#EC8134] bg-[#EC8134]/10 px-2 py-0.5 rounded">
                    {item.percent}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pt-1">{item.detail}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 italic">
            *PM = Project Management, includes payment to our local project partner for coordination, communication, support and coaching of foster parents, as well as development of village communities.
          </p>
        </div>

        {/* REFINED INFORMATIONAL FAQ ACCORDION */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-['Montserrat',sans-serif]">Project FAQ</h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Key insights into our sponsorship initiative and regional impact in Nepal.
            </p>
          </div>

          <div className="space-y-3">
            {REFINED_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-gray-900 cursor-pointer hover:text-[#EC8134] transition-colors font-['Montserrat',sans-serif]"
                >
                  <span className="pr-4">{faq.q}</span>
                  <FaChevronDown
                    className={`text-xs transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#EC8134]" : "text-gray-400"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 border-t border-gray-100 pt-3 leading-relaxed">
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
                  <h3 className="text-xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
                    Explore Other Core Focus Areas
                  </h3>
        
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div
                                  onClick={() => navigate("/curious-minds")}
                                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#366A35]/50 transition cursor-pointer group"
                                >
                                  <span className="text-xs font-bold text-[#366A35] uppercase tracking-wider font-['Montserrat',sans-serif]">
                                    Education Focus
                                  </span>
                                  <h4 className="text-base font-bold text-gray-900 mt-2 group-hover:text-[#366A35] transition font-['Montserrat',sans-serif]">
                                    CURIOUS MINDS
                                  </h4>
                                  <p className="text-xs text-gray-500 mt-1">
                                    Fostering digital literacy and ICT access for rural schools across Nepal.
                                  </p>
                                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#366A35] mt-4">
                                    View Program <FaArrowRight className="text-[10px]" />
                                  </span>
                                </div>
        
                    {/* Health-NOW (Orange #EC8134) */}
                    <div
                      onClick={() => navigate("/project-28")}
                      className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-[#EC8134]/50 transition cursor-pointer group space-y-2"
                    >
                      <span className="text-xs font-bold text-[#EC8134] uppercase tracking-wider font-['Montserrat',sans-serif]">
                        Health-NOW (Health)
                      </span>
                      <h4 className="text-base font-bold text-gray-900 group-hover:text-[#EC8134] transition font-['Montserrat',sans-serif]">
                        PROJECT 28
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Promoting menstrual health, dignity, and active care across remote communities in Nepal.
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#EC8134] pt-2">
                        View Program <FaArrowRight className="text-[10px]" />
                      </span>
                    </div>
        
                    {/* Let's Learn (Green #366A35) */}
                    <div
                      onClick={() => navigate("/other-activities")}
                      className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-[#366A35]/50 transition cursor-pointer group space-y-2"
                    >
                      <span className="text-xs font-bold text-[#366A35] uppercase tracking-wider font-['Montserrat',sans-serif]">
                        Let's Learn (Education)
                      </span>
                      <h4 className="text-base font-bold text-gray-900 group-hover:text-[#366A35] transition font-['Montserrat',sans-serif]">
                        OTHER ACTIVITIES
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Fostering environmental education, community livelihoods, and disaster preparedness.
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#366A35] pt-2">
                        View Program <FaArrowRight className="text-[10px]" />
                      </span>
                    </div>
                  </div>
                </div>

        {/* TRANSPARENCY & CONTACT FOOTER CALLOUT */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-bold text-gray-900 text-sm font-['Montserrat',sans-serif]">
              Inquire More About Sponsorships
            </h4>
            <p className="text-xs text-gray-600">
              Get in touch to review our annual transparency reports.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              to="/reports"
              className="inline-flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-3.5 py-2 rounded-xl border border-gray-200 transition"
            >
              <FaExternalLinkAlt /> Transparency
            </Link>
            <a
              href="mailto:info@menschen-dialog.de"
              className="inline-flex items-center gap-1.5 bg-[#EC8134] hover:bg-[#d4702b] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition"
            >
              <FaEnvelope /> Email Us
            </a>
            <a
              href="tel:+49000000000"
              className="inline-flex items-center gap-1.5 bg-[#366A35] hover:bg-[#2e592d] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition"
            >
              <FaPhoneAlt /> Call Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SponsorshipsDetailPage;