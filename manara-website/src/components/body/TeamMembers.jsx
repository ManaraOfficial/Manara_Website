import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SectionHeader from "../reusableComp/SectionHeader";

import person1 from "../../assets/images/person1.jpg";
import person2 from "../../assets/images/person2.jpeg";
import person3 from "../../assets/images/person3.jpeg";
import person4 from "../../assets/images/person4.jpeg";
import person5 from "../../assets/images/person5.png";
import person6 from "../../assets/images/rajesh3.jpg";
import person7 from "../../assets/images/person7.jpeg";

const teamMembers = [
  { name: "RALF LEDL", role: "CHIEF EXECUTIVE OFFICER", dept: "MENSCHEN IM DIALOG", image: person1 },
  { name: "JURGEN LUCK", role: "PROJECT MANAGER", dept: "CECS", image: person2 },
  { name: "ANDREA SPIETH", role: "PROJECT MANAGER", dept: "PROJECT28", image: person3 },
  { name: "RIDAM GURUNG", role: "EXECUTIVE", dept: "CECS", image: person4 },
  { name: "ANJU DEVKOTA", role: "EXECUTIVE", dept: "PROJECT28", image: person5 },
  { name: "RAJESH JACKO", role: "EXECUTIVE", dept: "CURIOUS MINDS", image: person6 },
  { name: "NEHA ADHIKARI", role: "EXECUTIVE", dept: "PROJECT28", image: person7 }
];

export default function EditorialTeam() {
  return (
    <section className="relative pb-20 w-full min-h-screen bg-white flex flex-col items-center select-none overflow-hidden">
      
      <div className="w-full max-w-6xl px-8 relative z-10  flex flex-col">
        
        {/* Dynamic Editorial Left-Aligned Header */}
        <SectionHeader 
          title="OUR TEAM" 
          subtitle="Get to know the passionate team behind our innovation." 
        />

        {/* Cascading Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 w-full">
          {teamMembers.map((member, index) => {
            const isStaggered = index % 2 !== 0;
            return (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu hover:-translate-y-2 group cursor-pointer ${
                  isStaggered ? "lg:translate-y-10" : ""
                }`}
              >
                
                {/* Embedded Soft Depth Inner-Shadow Ring Container */}
                <div className="relative mb-6">
                  <div className="relative w-44 h-44 md:w-48 md:h-48 rounded-full overflow-hidden bg-slate-50 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.06),_8px_8px_20px_rgba(0,0,0,0.03)] border-[10px] border-slate-100/50 flex items-center justify-center transition-shadow duration-500 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)]">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover rounded-full transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-106"
                    />
                  </div>
                </div>

                {/* Typography */}
                <div className="space-y-1 px-4">
                  <h3 className="text-md md:text-lg font-black text-slate-900 tracking-wide uppercase transition-colors duration-300 group-hover:text-[#e5005a]">
                    {member.name}
                  </h3>
                  <p className="text-[11px] font-bold text-[#e5005a] tracking-widest uppercase">
                    {member.role}
                  </p>
                  <p className="text-[9px] font-semibold text-slate-400 tracking-wider uppercase">
                    {member.dept}
                  </p>
                </div>

                {/* Social Footers */}
                <div className="flex items-center gap-3.5 mt-4 opacity-40 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-0">
                  <a href="#" className="text-slate-800 hover:text-[#e5005a] transition-colors duration-200">
                    <FaXTwitter size={13} />
                  </a>
                  <a href="#" className="text-slate-800 hover:text-[#e5005a] transition-colors duration-200">
                    <FaInstagram size={14} />
                  </a>
                  <a href="#" className="text-slate-800 hover:text-[#e5005a] transition-colors duration-200">
                    <FaLinkedinIn size={14} />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}