import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { homeSliderImages } from "../../constants";

export default function ImageSlider() {
  const imagesRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {

    const imgTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    imagesRef.current.forEach((img, i) => {
      imgTimeline.fromTo(
        img,
        { x: "100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          onStart: () => setActiveIndex(i), // update dot when slide starts
        }
      ).to(img, { x: "-100%", opacity: 0, duration: 1, delay: 1 });
    });
  }, []);


  return (
    <div className="w-200 h-125 overflow-hidden relative m-auto border-gray-400 border-2 rounded-lg">
      {/* Images */}
      {homeSliderImages.map((src, i) => (
        <img
          className="absolute top-0 left-0 w-[100%] h-[100%] object-cover object-top opacity-0"
          key={i}
          ref={(el) => (imagesRef.current[i] = el)}
          src={src}
          alt={`slide-${i}`}
        />
      ))}

      {/* Dots */}
      <div className="absolute bottom-2 left-[50%] translate-x-[-50%] flex gap-2">
        {homeSliderImages.map((_, i) => (
          <div 
            className="w-2 h-2 rounded-full"
            key={i}
            style={{
              background: activeIndex === i ? "tomato" : "#ccc",
              transition: "background 0.3s",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
