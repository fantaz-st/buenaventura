"use client";
import { useEffect } from "react";

export default function useFix100vh() {
  useEffect(() => {
    const set = () => {
      const h = window.visualViewport?.height || window.innerHeight;
      document.documentElement.style.setProperty("--fixvh", `${h}px`);
    };
    set();
    window.addEventListener("resize", set);
    window.addEventListener("orientationchange", set);
    window.visualViewport?.addEventListener("resize", set);
    return () => {
      window.removeEventListener("resize", set);
      window.removeEventListener("orientationchange", set);
      window.visualViewport?.removeEventListener("resize", set);
    };
  }, []);
}
