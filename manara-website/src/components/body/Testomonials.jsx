import { useState, useRef } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import SectionHeader from "../reusableComp/SectionHeader";

import "swiper/css";
import "swiper/css/effect-fade";

// Replace these with your actual image assets
import person1 from "../../assets/images/person1.jpg";
import person4 from "../../assets/images/person4.jpeg";
import person5 from "../../assets/images/person5.png";

const testimonials = [
  {
    id: 0,
    name: "Ralf Schmid",
    position: "CEO, Menschen im Dialog",
    image: person1, 
    title: "Building Brighter Futures",
    text: "MRDS Nepal has demonstrated exceptional dedication in improving rural education through ICT. Their commitment, professionalism, and passion continue to inspire us.",
  },
  {
    id: 1,
    name: "Ridam Gurung",
    position: "CECS Manager",
    image: person4,
    title: "INCREDIBLE SPEED & QUALITY",
    text: "The Curious Minds project transformed the learning experience in our school. Teachers and students are now much more confident using digital learning tools.",
  },
  {
    id: 2,
    name: "Anju Devkota",
    position: "Project 28",
    image: person5,
    title: "Breaking the Silence, Building Dignity",
    text: "Empowering girls and women through menstrual health education, dignity, and access to sustainable menstrual hygiene solutions.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="relative w-full pb-20 bg-[#F8FAFC] flex items-center justify-center overflow-hidden flex flex-col  select-none" id="testimonials">
        <SectionHeader title="What People Say" subtitle="Real experiences, shared by those who know us best."/>
      
      {/* Background soft ambient lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl px-4 md:px-6">
        
        {/* Main Clean White Card container */}
        <div className="relative bg-white rounded-[32px] border border-slate-100 p-8 sm:p-12 md:p-16 shadow-2xl shadow-slate-100/80 flex flex-col lg:flex-row items-center gap-10 lg:gap-14 min-h-[460px]">
          
          {/* Decorative Floating Quote Tag */}
          <div className="absolute -top-6 left-12 w-12 h-12 rounded-2xl bg-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/30">
            <FaQuoteLeft className="text-white text-lg" />
          </div>

          {/* LEFT: Elegant Double-Ring Avatar Container */}
          <div className="relative flex-shrink-0 flex items-center justify-center">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full p-2 bg-slate-50 border border-slate-100 shadow-inner">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md">
                <img
                  src={testimonials[activeIndex]?.image}
                  alt={testimonials[activeIndex]?.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Sophisticated Text & Navigation Area */}
          <div className="flex-1 w-full text-slate-800 relative flex flex-col justify-between overflow-hidden">
            
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect={"fade"}
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 5500,
                disableOnInteraction: false,
              }}
              loop={true}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="w-full">
                  <div className="w-full pr-1">
                    
                    {/* Header: Name, Title & Star Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-slate-900 text-lg sm:text-xl">
                          {item.name}
                        </span>
                        <span className="text-slate-300 hidden sm:inline">•</span>
                        <span className="text-slate-500 text-sm font-medium">
                          {item.position}
                        </span>
                      </div>
                      
                      <div className="flex gap-0.5 text-amber-400 flex-shrink-0">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-sm flex-shrink-0" />
                        ))}
                      </div>
                    </div>

                    {/* Bold Testimonial Headline */}
                    <h3 className="text-lg md:text-xl font-extrabold text-slate-900 tracking-wide mb-3 break-words">
                      {item.title}
                    </h3>

                    {/* Review Body Copy */}
                    <p className="text-sm md:text-lg  leading-relaxed text-slate-600 font-normal break-words max-w-2xl">
                      "{item.text}"
                    </p>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Bottom Row: Dynamic Progress Bars & Side Arrows */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-8 pt-4 border-t border-slate-100/60">
              
              {/* Dynamic Line-Slide Progress Pagination */}
              <div className="flex gap-2.5">
                {testimonials.map((_, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={index}
                      onClick={() => swiperRef.current?.slideToLoop(index)}
                      className="group relative py-2 focus:outline-none"
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      <div className={`h-1.5 rounded-full transition-all duration-300 ${
                        isActive 
                          ? "w-12 bg-slate-800" 
                          : "w-4 bg-slate-200 group-hover:bg-slate-300"
                      }`} />
                    </button>
                  );
                })}
              </div>

              {/* Minimalist Navigation Arrow Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-800 text-slate-400 hover:text-slate-800 flex items-center justify-center transition-all duration-200 active:scale-95"
                  aria-label="Previous review"
                >
                  <FaChevronLeft className="text-xs" />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-800 text-slate-400 hover:text-slate-800 flex items-center justify-center transition-all duration-200 active:scale-95"
                  aria-label="Next review"
                >
                  <FaChevronRight className="text-xs" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}