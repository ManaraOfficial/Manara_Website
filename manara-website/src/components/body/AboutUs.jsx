import React from "react";
import { Link } from "react-router-dom";
import { 
  FaArrowRight, 
  FaBullseye, 
  FaEye, 
  FaHeart, 
  FaGraduationCap, 
  FaMedkit, 
  FaHandsHelping,
  FaCheckCircle,
  FaUsers,
  FaSchool,
  FaQuoteLeft
} from "react-icons/fa";

// Import your uniform SectionHeader component
import SectionHeader from "../reusableComp/SectionHeader";

const AboutSummarySection = () => {
  return (
    <div className="bg-[#F8FAFC]">
    <section className="pb-20  px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-['Nunito_Sans',sans-serif] relative">
      
      {/* 1. Uniform Section Header */}
      <SectionHeader 
        title="Who We Are" 
        subtitle="The minds, mission, and vision driving our journey." 
      />

      {/* 2. Top Overview: Visual Column + Core Narrative */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Visual Card with Overlay Stats & Badge */}
        <div className="lg:col-span-5 relative">
          
          {/* Backing Accent Aura */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#EC8134]/20 via-slate-100 to-[#366A35]/20 rounded-[2.5rem] blur-xl -z-10" />

          {/* Main Photo Frame */}
          <div className="relative rounded-[2rem] overflow-hidden bg-slate-900 border border-slate-200/80 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
              alt="Children in Nepal participating in educational activities"
              className="w-full h-[480px] sm:h-[520px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            {/* Top Tag */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/50 shadow-md flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EC8134] animate-pulse" />
              <span className="text-xs font-black text-slate-800 font-['Montserrat',sans-serif] tracking-wider uppercase">
                Manara Nepal
              </span>
            </div>

            {/* Quote Overlay at Bottom */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <FaQuoteLeft className="text-[#EC8134] text-xl opacity-80" />
              <p className="text-sm font-medium text-slate-100 italic leading-snug">
                "Every child in Nepal deserves a safe environment, quality education, and the opportunity to build a self-reliant future."
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs font-bold text-amber-300 font-['Montserrat',sans-serif]">
                <span>Grassroots Non-Profit Action</span>
              </div>
            </div>
          </div>

          {/* Floating Impact Badge (Bottom Right) */}
          <div className=" mt-6 bg-white p-4 sm:p-2 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#EC8134] flex items-center justify-center text-xl shrink-0">
              <FaHeart />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900 font-['Montserrat',sans-serif]">
                100% Non-Profit Organization
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Transparent operations focused on child welfare
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Deep Narrative & Key Takeaways */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Main Subheading */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EC8134]/10 text-[#EC8134] text-xs font-bold uppercase tracking-wider font-['Montserrat',sans-serif]">
              Empowering The Next Generation
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-['Montserrat',sans-serif] leading-[1.25]">
              Transforming Lives Through Education, Health & Compassion in <span className="text-[#EC8134]">Nepal</span>
            </h3>
          </div>

          {/* Comprehensive Narrative Copy */}
          <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              <strong className="text-slate-900 font-bold">Manara Nepal</strong> is a grassroots non-profit organization established to break the cycle of poverty and hardship for vulnerable children and rural communities across Nepal. We operate on the conviction that real social change starts when a child is supported holistically—spiritually, intellectually, and physically.
            </p>
            <p>
              By partnering directly with local schools, healthcare professionals, and village leaders, we bridge critical resource gaps. From distributing essential learning materials and funding scholarships to hosting health camps and providing nutritional support, our initiatives ensure that no child is left behind due to economic hardship.
            </p>
          </div>

          {/* Key Organizational Commitments List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm font-bold text-slate-700">
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
              <FaCheckCircle className="text-[#366A35] text-base shrink-0" />
              <span>Equal Access to Primary Education</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
              <FaCheckCircle className="text-[#EC8134] text-base shrink-0" />
              <span>Preventative & Urgent Health Care</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
              <FaCheckCircle className="text-[#EC8134] text-base shrink-0" />
              <span>Community-Led Development</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
              <FaCheckCircle className="text-[#366A35] text-base shrink-0" />
              <span>Transparent & Accountable Operations</span>
            </div>
          </div>

          {/* Call To Action Button */}
          <div className="pt-2">
            <Link
              to="/about-us"
              className="inline-flex items-center gap-3 bg-[#EC8134] hover:bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300 shadow-lg shadow-[#EC8134]/25 hover:shadow-slate-900/20 group font-['Montserrat',sans-serif]"
            >
              <span>Learn More About Our Journey</span>
              <FaArrowRight className="group-hover:translate-x-1.5 transition-transform text-xs" />
            </Link>
          </div>

        </div>

      </div>

      {/* 3. Core Strategic Pillars (3 Feature Cards Grid) */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Pillar 1: Education */}
        <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/70 hover:bg-white hover:shadow-xl hover:border-[#EC8134]/40 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#EC8134] flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
            <FaGraduationCap />
          </div>
          <h4 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif] mb-2">
            Child Education & Literacy
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Providing scholarships, classroom supplies, school infrastructure repairs, and digital learning tools to empower young minds across rural Nepal.
          </p>
        </div>

        {/* Pillar 2: Health & Nutrition */}
        <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/70 hover:bg-white hover:shadow-xl hover:border-[#366A35]/40 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#366A35] flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
            <FaMedkit />
          </div>
          <h4 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif] mb-2">
            Healthcare & Nutrition
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Conducting rural health checkups, hygiene awareness workshops, and nutritional meal support programs for growing children.
          </p>
        </div>

        {/* Pillar 3: Community Empowerment */}
        <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/70 hover:bg-white hover:shadow-xl hover:border-[#D34A32]/40 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-2xl bg-rose-100 text-[#D34A32] flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
            <FaHandsHelping />
          </div>
          <h4 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif] mb-2">
            Community Protection
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Working alongside families to build safe spaces, foster child protection awareness, and deliver emergency relief during local crises.
          </p>
        </div>

      </div>

      {/* 4. Mission & Vision Cards Side-by-Side */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Mission Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#EC8134]" />
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#EC8134]/10 text-[#EC8134] flex items-center justify-center text-lg font-bold">
              <FaBullseye />
            </div>
            <h4 className="text-xl font-extrabold text-slate-900 font-['Montserrat',sans-serif]">
              Our Mission
            </h4>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            To eliminate poverty barriers by delivering equal access to quality education, essential healthcare services, and protective social environments for underprivileged children throughout Nepal.
          </p>
        </div>

        {/* Vision Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#366A35]" />
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#366A35]/10 text-[#366A35] flex items-center justify-center text-lg font-bold">
              <FaEye />
            </div>
            <h4 className="text-xl font-extrabold text-slate-900 font-['Montserrat',sans-serif]">
              Our Vision
            </h4>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            A resilient Nepal where every child—regardless of gender or socio-economic background—grows up healthy, well-educated, and fully equipped to build a self-reliant future.
          </p>
        </div>

      </div>

    </section>
    </div>
  );
};

export default AboutSummarySection;