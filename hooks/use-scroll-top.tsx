import { useState, useEffect } from "react";
export const useScrollTaop = (threshould = 10) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshould) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroller", handleScroll);
  }, [threshould]);

  return scrolled;
};
