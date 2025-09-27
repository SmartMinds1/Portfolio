import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function ImageSlider() {
  const imagesRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0); // track active image

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    imagesRef.current.forEach((img, i) => {
      tl.fromTo(
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

  const images = [
    "https://picsum.photos/id/1015/400/250",
    "https://picsum.photos/id/1016/400/250",
    "https://picsum.photos/id/1018/400/250",
    "https://picsum.photos/id/1020/400/250",
  ];

  return (
    <div
      style={{
        width: "400px",
        height: "250px",
        overflow: "hidden",
        position: "relative",
        margin: "auto",
        border: "3px solid #ccc",
        borderRadius: "12px",
      }}
    >
      {/* Images */}
      {images.map((src, i) => (
        <img
          key={i}
          ref={(el) => (imagesRef.current[i] = el)}
          src={src}
          alt={`slide-${i}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0,
          }}
        />
      ))}

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {images.map((_, i) => (
          <div
            key={i}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: activeIndex === i ? "tomato" : "#ccc",
              transition: "background 0.3s",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
