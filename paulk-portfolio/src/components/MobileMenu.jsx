import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Animate menu in
      gsap.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    } else {
      // Animate menu out
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: "10px 20px",
          background: "tomato",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>

      {/* Overlay Menu */}
      <div
        ref={menuRef}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "70%",
          height: "100%",
          background: "#191923",
          color: "white",
          padding: "30px",
          transform: "translateX(100%)", // start hidden off-screen
          opacity: 0,
          zIndex: 1000,
        }}
      >
        <h2>Menu</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ margin: "20px 0" }}>Home</li>
          <li style={{ margin: "20px 0" }}>About</li>
          <li style={{ margin: "20px 0" }}>Services</li>
          <li style={{ margin: "20px 0" }}>Contact</li>
        </ul>
      </div>
    </div>
  );
}
