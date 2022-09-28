import React, { useEffect } from "react";

export default function KeyboardNav() {
  function downHandler(event) {
    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(event.key)) return

    const slides = Array.from(document.querySelectorAll("section"));
    let index = Math.floor(window.scrollY / window.innerHeight)

    if (["ArrowDown", "ArrowRight"].includes(event.key) && index < slides.length-1) {
      index++
    } else if (["ArrowUp", "ArrowLeft"].includes(event.key) && index > 0) {
      index--
    }

    slides[index]?.scrollIntoView()

    console.log("hwllo")

    event.preventDefault()
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);

    // Remove event listeners on cleanup
    // return () => {
    //   window.removeEventListener("keydown", downHandler);
    // };
  });
}