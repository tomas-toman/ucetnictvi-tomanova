"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach(({ target }, order) => {
            if (target instanceof HTMLElement) {
              target.style.setProperty("--reveal-order", String(order));
            }
            target.setAttribute("data-revealed", "");
            observer.unobserve(target);
          });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    document
      .querySelectorAll("[data-reveal]:not([data-revealed])")
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
