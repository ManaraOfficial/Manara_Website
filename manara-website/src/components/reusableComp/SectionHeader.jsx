import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SectionHeader({ title, subtitle }) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const barRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(
    () => {
      const words = titleRef.current.querySelectorAll(".word");
      if (!words.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        barRef.current,
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 0.6, ease: "power2.out", transformOrigin: "top" }
      )
        .fromTo(
          words,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.08 },
          "<0.1"
        );

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.35"
        );
      }

      // Recalculate trigger positions once fonts/images finish loading,
      // otherwise late layout shifts can leave the title stuck hidden.
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      document.fonts?.ready.then(refresh);

      return () => window.removeEventListener("load", refresh);
    },
    { scope: containerRef, dependencies: [title, subtitle] }
  );

  const words = String(title).split(" ");

  return (
    <div ref={containerRef} className="w-full flex justify-center py-20 select-none font-sans ">
      <div className="flex items-start gap-8 text-left">
        <div ref={barRef} className="w-1.5 h-20 bg-[#D34A32] rounded-full will-change-transform" />
        <div>
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none uppercase"
          >
            {words.map((word, idx) => (
              <span key={idx} className="word-mask inline-block overflow-y-hidden overflow-x-visible pt-1 pb-2 mr-[0.35em] align-top">
                <span className="word inline-block will-change-transform">{word}</span>
              </span>
            ))}
          </h1>
          {subtitle && (
            <p ref={subtitleRef} className="text-sm text-slate-500 dark:text-slate-400 font-medium tracking-wide mt-2 will-change-transform">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
