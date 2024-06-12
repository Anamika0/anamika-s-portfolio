import { useEffect, useRef, useState } from "react";
import "./navbar-bg.scss";
import { motion, transform } from "framer-motion";

const NavbarBackground = () => {
  // const sectionRef = useRef();

  // function move() {
  //   let curX = 0;
  //   let curY = 0;
  //   let tgX = 0;
  //   let tgY = 0;
  //   curX += (tgX - curX) / 20;
  //   curY += (tgY - curY) / 20;
  //   sectionRef.current.style.transform = `translate(${Math.round(
  //     curX
  //   )}px, ${Math.round(curY)}px)`;
  //   requestAnimationFrame(() => {
  //     move();
  //   });
  // }

  // useEffect(() => {
  //   if (sectionRef) {
  //     sectionRef.current.addEventListener("mousemove", move);
  //   }
  //   // don't forget to *remove* the eventListener
  //   // when your component unmounts!
  //   return () => sectionRef.current.removeEventListener("mousemove", move);
  // }, [sectionRef]);

  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });

  // useEffect(() => {
  //   const updateMousePosition = (e) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };

  //   window.addEventListener("mousemove", updateMousePosition);

  //   return () => {
  //     window.removeEventListener("mousemove", updateMousePosition);
  //   };
  // }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 200,
  //     y: mousePosition.y - 200,
  //     scale: [1, 2, 2, 1, 1],
  //     rotate: [0, 0, 270, 270, 0],
  //     borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  //   },
  // };

  // const style = {
  //   transform: "translate(-50%, -50%)",
  //   width: "400px",
  //   height: "400px",
  //   borderRadius: "50% 22% 40% 80%",
  //   filter: " blur(100px)",
  //   background: "rgb(255, 67, 75)",
  //   background: "linear-gradient(#43d9ad, #4d5bce)",
  //   opacity: 0.4,
  //   zIndex: 2,
  // };

  return (
    <div>
      {" "}
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <motion.div
            className="interactive"
            // ref={sectionRef}
            // variants={variants}
            // animate="default"
            // transition={{
            //   x: {
            //     duration: 0.3,
            //     ease: "linear",
            //     repeat: 0,
            //     type: "spring",
            //     stiffness: 80,
            //   },
            //   y: {
            //     duration: 0.3,
            //     ease: "linear",
            //     repeat: 0,
            //     type: "spring",
            //     stiffness: 80,
            //   },
            //   default: {
            //     duration: 2.5,
            //     repeat: Infinity,
            //   },
            // }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBackground;
