import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaUsers, 
  FaCheckCircle, 
  FaDownload, 
  FaShareAlt, 
  FaQuoteLeft, 
  FaHandHoldingHeart,
  FaGlobe,
  FaClock,
  FaTag,
  FaTooth,
  FaBuilding,
  FaSmile,
  FaShapes,
  FaCubes,
  FaFeather
} from "react-icons/fa";

const OtherActivitiesDetail = () => {
  const navigate = useNavigate();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "School Facilities Upgrade & Student Welfare Program",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  // Smooth scroll or navigate to home route if on a different page
  const handleScrollToOurWork = (e) => {
    e.preventDefault();
    const element = document.getElementById("our-work");

    if (element) {
      // If already on the home page where #our-work exists
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // If on /our-activities, navigate home and request scroll via state
      navigate("/", { state: { scrollTo: "our-work" } });
    }
  };

  const initiatives = [
    {
      id: "toilet-construction",
      title: "1. School Sanitation: Toilet Facility Construction",
      icon: <FaBuilding className="text-[#366A35] text-2xl" />,
      accentColor: "border-[#366A35]",
      badgeBg: "bg-[#366A35]/10 text-[#366A35]",
      description:
        "Access to proper sanitation facilities is essential for maintaining student health and encouraging daily school attendance, especially for young girls. We constructed new, separate, ventilated toilet blocks for boys and girls, complete with running water connections and hygienic handwashing stations.",
      details: [
        "Built separate, private toilet stalls for male and female students",
        "Installed continuous tap water supply systems and concrete handwash basins",
        "Constructed proper waste disposal and septic filtration tanks",
        "Provided soap dispensers and trained students on post-use sanitation practices"
      ]
    },
    {
      id: "roof-construction",
      title: "2. Infrastructure Support: Classroom Roof Construction & Repair",
      icon: <FaBuilding className="text-[#EC8134] text-2xl" />,
      accentColor: "border-[#EC8134]",
      badgeBg: "bg-[#EC8134]/10 text-[#EC8134]",
      description:
        "Damp and leaking roofs disrupt studies and create unsafe classroom environments during monsoon rains and extreme weather. We repaired damaged structural beams and fitted high-durability CGI corrugated steel roofing sheets across school blocks to keep classrooms dry, safe, and fully functional year-round.",
      details: [
        "Replaced damaged timber frameworks and cracked roofing materials",
        "Installed durable CGI steel corrugated sheets over leaking classroom blocks",
        "Sealed eaves and drainage gutters to prevent water accumulation",
        "Ensured zero classroom disruption during heavy seasonal rainfalls"
      ]
    },
    {
      id: "toothbrushing-demo",
      title: "3. Health & Hygiene: Student Toothbrushing Demonstrations",
      icon: <FaTooth className="text-blue-600 text-2xl" />,
      accentColor: "border-blue-600",
      badgeBg: "bg-blue-100 text-blue-700",
      description:
        "Preventive dental health education protects children from cavities, tooth loss, and school absenteeism due to pain. Using oversized 3D jaw models and giant brushes, our volunteer team conducted interactive step-by-step demonstrations showing students how to properly brush their teeth and clean their gums.",
      details: [
        "Led interactive group demonstrations on proper circular brushing techniques",
        "Handed out dental kits containing fluoride toothpaste, soft brushes, and rinsing cups",
        "Guided students through live, supervised tooth-brushing sessions on-site",
        "Distributed 30-day daily brushing habit tracking cards with stickers for home use"
      ]
    },
    {
      id: "ecd-play-materials",
      title: "4. Early Childhood Education: Play Materials & Learning Toys",
      icon: <FaCubes className="text-purple-600 text-2xl" />,
      accentColor: "border-purple-600",
      badgeBg: "bg-purple-100 text-purple-700",
      description:
        "Young children learn best through active play, tactile discovery, and social interaction. We equipped Early Childhood Development (ECD) classrooms with age-appropriate learning toys, puzzle sets, building blocks, and creative art materials to spark curiosity and cognitive development.",
      details: [
        "Supplied non-toxic wooden building blocks, shape sorters, and counting beads",
        "Provided picture books, drawing pads, crayons, and clay modeling kits",
        "Created dedicated story corner play sets for toddler creative play",
        "Oriented ECD teachers on integrating play-based methods into daily lesson plans"
      ]
    },
    {
      id: "ecd-carpet-flooring",
      title: "5. Classroom Comfort: Warm Floor Carpeting for ECD Rooms",
      icon: <FaShapes className="text-emerald-600 text-2xl" />,
      accentColor: "border-emerald-600",
      badgeBg: "bg-emerald-100 text-emerald-700",
      description:
        "Rural ECD classrooms frequently feature cold, hard concrete floors where young children spend hours sitting and playing. To create a warm, safe, and hygienic indoor space, we installed thick thermal insulating carpets and soft foam play mats throughout the early learning rooms.",
      details: [
        "Fitted thick thermal foam padding under heavy-duty carpet layers",
        "Transformed cold concrete floors into soft, warm, child-safe seating areas",
        "Reduced dust exposure and cushioned accidental falls during indoor activities",
        "Significantly improved daily attendance and comfort for young toddlers"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 pt-28 pb-20 font-['Nunito_Sans',sans-serif]">
      
      {/* 1. CENTERED HERO HEADER SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-4 max-w-4xl mx-auto text-center">
          
          {/* Category & Status Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest font-['Montserrat',sans-serif] bg-[#EC8134]/10 text-[#EC8134]">
              Community & Education Support
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-200 text-gray-700 text-xs font-bold uppercase tracking-wider font-['Montserrat',sans-serif]">
              Active Projects
            </span>
          </div>

          {/* Centered Balanced Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 font-['Montserrat',sans-serif] leading-tight">
            School Facilities Upgrade & Student Welfare Program
          </h1>

          {/* Key Event Details Pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 font-medium pt-2">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#EC8134]" />
              <span>Ongoing Community Project</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#366A35]" />
              <span>Rural School Districts</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-[#D34A32]" />
              <span>350+ Children Benefited</span>
            </div>
          </div>
        </div>

        {/* Hero Featured Image */}
        <div className="mt-10 relative rounded-3xl overflow-hidden shadow-xl max-h-[460px]">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200" 
            alt="School Facilities Upgrade Program" 
            className="w-full h-full object-cover min-h-[300px]"
          />
        </div>
      </section>

      {/* 2. MAIN CONTENT GRID */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT MAIN COLUMN (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview Summary */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
                Program Overview
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our initiative takes a holistic approach to improving school life in rural communities. By combining physical infrastructure enhancements—like toilet construction and roof repair—with personal health education and early childhood learning support, we help ensure every child studies in a safe, warm, and inspiring environment.
              </p>
            </div>

            {/* DETAILED SECTIONS */}
            <div className="space-y-8">
              <h2 className="text-2xl font-black text-gray-900 font-['Montserrat',sans-serif]">
                Detailed Project Breakdown
              </h2>

              {initiatives.map((item) => (
                <div 
                  key={item.id} 
                  className={`bg-white rounded-3xl p-6 sm:p-8 border-l-4 ${item.accentColor} border-y border-r border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-5`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-slate-50 rounded-2xl">
                      {item.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-['Montserrat',sans-serif]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>

                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-3">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 font-['Montserrat',sans-serif]">
                      Key Highlights & Actions Taken:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700 font-medium">
                      {item.details.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <FaCheckCircle className="text-[#366A35] text-base shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Overall Program Outcomes */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 shadow-md">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#EC8134] font-['Montserrat',sans-serif] mb-6">
                Combined Impact Metrics
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-white font-['Montserrat',sans-serif]">New</div>
                  <div className="text-xs font-semibold text-gray-300 font-['Montserrat',sans-serif]">Toilets Constructed</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-white font-['Montserrat',sans-serif]">100%</div>
                  <div className="text-xs font-semibold text-gray-300 font-['Montserrat',sans-serif]">Leak-Free Roofs</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-white font-['Montserrat',sans-serif]">180+</div>
                  <div className="text-xs font-semibold text-gray-300 font-['Montserrat',sans-serif]">Oral Kits Gifted</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-white font-['Montserrat',sans-serif]">Warm</div>
                  <div className="text-xs font-semibold text-gray-300 font-['Montserrat',sans-serif]">Carpeted ECD Rooms</div>
                </div>
              </div>
            </div>

            {/* Quote Block */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-[#EC8134]/10 via-[#366A35]/5 to-transparent border-l-4 border-[#EC8134] relative space-y-3">
              <FaQuoteLeft className="text-3xl text-[#EC8134]/30" />
              <p className="text-base sm:text-lg font-bold text-gray-900 italic font-['Montserrat',sans-serif] leading-relaxed">
                "Combining clean toilets, dry roofs, warm carpets, and hygiene demonstrations has completely changed our students' daily attitude toward coming to school."
              </p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider font-['Montserrat',sans-serif]">
                — Local School Headmaster & Community Representative
              </p>
            </div>

            {/* Photo Gallery */}
            {/* <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
                Activity Photo Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-sm h-48 group">
                  <img 
                    src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=600" 
                    alt="Classroom & Roof Repair" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-sm h-48 group">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600" 
                    alt="Toothbrushing Demonstration" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-sm h-48 group">
                  <img 
                    src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=600" 
                    alt="ECD Toys and Carpeted Classrooms" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div> */}

          </div>

          {/* RIGHT SIDEBAR (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Quick Summary Card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-6 sticky top-28">
              <h3 className="text-lg font-bold text-gray-900 font-['Montserrat',sans-serif] border-b border-gray-100 pb-4">
                Quick Info
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <FaTag className="text-[#EC8134] mt-1 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Focus Areas</span>
                    <span className="font-bold text-gray-800">Toilets, Roofs, Oral Health, ECD Toys & Carpets</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-600 mt-1 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Location</span>
                    <span className="font-bold text-gray-800">Community Primary & ECD Schools</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaGlobe className="text-[#366A35] mt-1 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Organizer</span>
                    <span className="font-bold text-gray-800">Community & School Outreach Team</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button 
                  onClick={handleShare}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 text-gray-700 py-3 rounded-xl font-bold text-sm hover:bg-slate-200 transition font-['Montserrat',sans-serif]"
                >
                  <FaShareAlt /> Share Project
                </button>

                <a 
                  href="mailto:contact@project28.org"
                  className="w-full flex items-center justify-center gap-2 bg-[#366A35] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#2e592d] transition font-['Montserrat',sans-serif]"
                >
                  <FaHandHoldingHeart /> Support This Cause
                </a>
              </div>
            </div>

            {/* Report Download Banner */}
            <div className="bg-gradient-to-br from-[#EC8134] to-[#d36f26] rounded-3xl p-6 text-white space-y-4 shadow-md">
              <h4 className="text-lg font-bold font-['Montserrat',sans-serif]">
                Full Program Documentation
              </h4>
              <p className="text-xs text-orange-100 leading-relaxed">
                Download the complete field report detailing toilet construction specs, roofing material logs, dental kit distributions, and ECD toy inventory.
              </p>
              <button 
                onClick={() => alert("Downloading activity briefing report...")}
                className="inline-flex items-center gap-2 bg-white text-[#EC8134] px-4 py-2.5 rounded-xl font-bold text-xs hover:bg-slate-50 transition shadow-sm font-['Montserrat',sans-serif]"
              >
                <FaDownload /> Download Report PDF
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 3. RELATED ACTIVITIES / FOOTER CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-['Montserrat',sans-serif]">
            Want to learn more about our school initiatives?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discover all our active projects across sanitation construction, health awareness campaigns, classroom weatherproofing, and early education support.
          </p>
          <button 
            onClick={handleScrollToOurWork}
            className="inline-flex items-center gap-2 bg-[#EC8134] text-[#FFFFFF] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#d9732b] transition font-['Montserrat',sans-serif] cursor-pointer"
          >
            Explore All Activities
          </button>
        </div>
      </section>

    </div>
  );
};

export default OtherActivitiesDetail;