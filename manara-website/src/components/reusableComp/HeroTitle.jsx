import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

/**
 * Word-by-word staggered reveal for hero/detail-page titles.
 * Plays on mount (these titles sit above the fold, so a scroll trigger
 * would either never fire or fire before the user can see it).
 *
 * segments: Array<{ text: string, className?: string } | { break: true }>
 */
export default function HeroTitle({ segments, as, className = "" }) {
  const Tag = as || "h1";
  const rootRef = useRef(null);
  const depsKey = segments.map((s) => (s.break ? "|" : s.text)).join("");

  useGSAP(
    () => {
      const words = rootRef.current.querySelectorAll(".word:not(.highlight)");
      const highlight = rootRef.current.querySelectorAll(".word.highlight");
      if (!words.length && !highlight.length) return;

      const tl = gsap.timeline({ delay: 0.15 });

      if (words.length) {
        tl.fromTo(
          words,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.045 }
        );
      }

      if (highlight.length) {
        tl.fromTo(
          highlight,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.045 },
          words.length ? "-=0.35" : 0
        );
      }
    },
    { scope: rootRef, dependencies: [depsKey] }
  );

  return (
    <Tag ref={rootRef} className={className}>
      {segments.map((seg, i) => {
        if (seg.break) return <br key={i} />;
        return String(seg.text)
          .split(" ")
          .map((word, wi) => (
            <span key={`${i}-${wi}`} className="word-mask inline-block overflow-y-hidden overflow-x-visible pt-1 pb-2 mr-[0.35em] align-top">
              <span
                className={`word inline-block will-change-transform ${seg.className ? `highlight ${seg.className}` : ""}`}
              >
                {word}
              </span>
            </span>
          ));
      })}
    </Tag>
  );
}
