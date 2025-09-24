import  React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const StatsBox = () => {
      const countersRef = useRef([]);

      useGSAP(() => {
        countersRef.current.forEach((el, i) => {
          let target = el.getAttribute("data-target"); // target value
          let counter = { val: 0 };

          gsap.to(counter, {
            val: target,
            duration: 2,
            ease: "power1.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse"
            },
            onUpdate: () => {
              el.textContent = Math.floor(counter.val) + "+";
            }
          });
        });
      }, []);

    return(
        <div className="w-2/3 m-auto h-fit flex flex-row items-center justify-evenly flex-wrap gap-4 mt-10">
            <div className="w-fit h-fit">
                <div className="bg-background mb-4 shadow-xl w-50 h-50 p-5 rounded-full flex flex-col items-center justify-evenly">
                  <div ref={(el) => (countersRef.current[0] = el)} data-target="500" className="text-3xl font-bold text-center text-secondary">0+</div>
                  <p>Clients</p>
                </div>
            </div>
            <div className="w-fit h-fit">
                <div className="bg-background mb-4 shadow-xl w-50 h-50 p-5 rounded-full flex flex-col items-center justify-evenly">
                  <div ref={(el) => (countersRef.current[1] = el)} data-target="100" className="text-3xl font-bold text-center text-secondary">0+</div>
                  <p>Businesses</p>
                </div>
            </div>
            <div className="w-fit h-fit">
                <div className="bg-background mb-4 shadow-xl w-50 h-50 p-5 rounded-full flex flex-col items-center justify-evenly">
                  <div ref={(el) => (countersRef.current[2] = el)} data-target="50" className="text-3xl font-bold text-center text-secondary">0+</div>
                  <p>Websites</p>
                </div>
            </div>
        </div>
    );

}

export default StatsBox