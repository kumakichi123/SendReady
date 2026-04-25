"use client";

import { useEffect } from "react";

const selector = [
  ".reveal",
  ".worry-item",
  ".ui-panel",
  ".outcome-line",
  ".pricing-band > *",
].join(",");

export function AnimationBoot() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(selector));
    const pending = new Set(targets);

    targets.forEach((target, index) => {
      target.style.setProperty("--reveal-index", String(index % 4));
    });

    const show = (target: HTMLElement) => {
      target.classList.add("animate-in");
      pending.delete(target);
    };

    const revealVisible = () => {
      pending.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const entersViewport = rect.top < window.innerHeight * 0.96 && rect.bottom > 0;
        if (entersViewport) show(target);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px 10% 0px",
        threshold: 0.04,
      },
    );

    targets.forEach((target) => observer.observe(target));
    revealVisible();
    window.addEventListener("scroll", revealVisible, { passive: true });
    window.addEventListener("resize", revealVisible);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", revealVisible);
      window.removeEventListener("resize", revealVisible);
    };
  }, []);

  return null;
}
