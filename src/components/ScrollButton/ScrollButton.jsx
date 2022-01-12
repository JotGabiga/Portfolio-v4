import React, { useState } from "react";
import "./ScrollButton.scss";
import arrow from "./assets/arrow-up-solid.svg";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <section className="scrollButton">
      <button
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <img src={arrow} alt="scroll up" />
      </button>
    </section>
  );
};
export default ScrollButton;
