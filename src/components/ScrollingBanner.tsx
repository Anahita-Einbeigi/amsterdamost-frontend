

'use client';
import React from "react";

interface ScrollingBannerProps {
  variant?: "light" | "dark";
}

export default function ScrollingBanner({ variant = "light" }: ScrollingBannerProps) {
  const isDark = variant === "dark";

  return (
    <section className={`scrollingBanner-banner ${isDark ? 'scrollingBanner-dark' : 'scrollingBanner-light'}`}>
      <div className="scrollingBanner-marquee">
        <span>OST </span>
        <span>Krämig . Lagrad . Smakrik </span>
        <span>Premiumost för alla stunder</span>
        <span>En bit av Holland</span>
        <span>Tradition möter innovation</span>
        <span>Äkta holländsk ost</span>
      </div>
    </section>
  );
}
