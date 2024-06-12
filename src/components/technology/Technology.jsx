import { useRef } from "react";

import "./Technology.scss";
import {
  animate,
  motion,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import { ImGithub } from "react-icons/im";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import {
  SiExpress,
  SiTailwindcss,
  SiShadcnui,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";

const Technology = () => {
  const enterRef = useRef();
  const { scrollYProgress } = useScroll({
    target: enterRef,
  });
  const scaleProgress = useTransform(scrollYProgress, [1, 0], [0.5, 1]);

  const variants = (duration) => ({
    inital: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <motion.div className="technology" ref={enterRef}>
      <motion.h1
        className="heading"
        initial={{ opacity: 0.1, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.9,
          // type: "spring",
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        TECHNOLOGIES
      </motion.h1>
      <motion.div
        initial={{ opacity: 0.3, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 4 }}
        className="items"
      >
        <motion.div
          variants={variants(2)}
          initial="initial"
          animate="animate"
          className="React"
          style={{ color: "DodgerBlue" }}
        >
          <FaReact />
        </motion.div>

        <motion.div
          variants={variants(2.4)}
          initial="initial"
          animate="animate"
          className="Express"
        >
          <SiExpress style={{ color: "MediumSeaGreen" }} />
        </motion.div>
        <motion.div
          className="NodeJs"
          variants={variants(2.1)}
          initial="initial"
          animate="animate"
        >
          <FaNodeJs style={{ color: "#34B41B" }} />
        </motion.div>
        <motion.div
          className="Tailwind"
          variants={variants(2.3)}
          initial="initial"
          animate="animate"
        >
          <SiTailwindcss style={{ color: "#33E0FF" }} />
        </motion.div>
        <motion.div
          className="MongoDb"
          variants={variants(2.2)}
          initial="initial"
          animate="animate"
        >
          <SiMongodb style={{ color: "#34B41B" }} />
        </motion.div>
        <motion.div
          className="Framer"
          variants={variants(2)}
          initial="initial"
          animate="animate"
        >
          <svg width="0" height="0">
            <linearGradient
              id="blue-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#AC2FB4" offset="10%" />
              <stop stopColor="blue" offset="30%" />
              <stop stopColor="#632374" offset="80%" />

              <stop stopColor="#591885" offset="20%" />
            </linearGradient>
          </svg>

          <FiFramer style={{ stroke: "url(#blue-gradient)" }} />
        </motion.div>
        <motion.div
          className="Figma"
          variants={variants(2.4)}
          initial="initial"
          animate="animate"
        >
          <FaFigma style={{ color: "white" }} />
        </motion.div>
        <motion.div
          className="Sql"
          variants={variants(2)}
          initial="initial"
          animate="animate"
        >
          <BsFiletypeSql
            style={{ color: "DodgerBlue", height: "130px", width: "200px" }}
          />
        </motion.div>
        <motion.div
          className="Figma"
          variants={variants(2.4)}
          initial="initial"
          animate="animate"
        >
          <ImGithub style={{ color: "green" }} />
        </motion.div>
        <motion.div
          className="Figma"
          variants={variants(2.4)}
          initial="initial"
          animate="animate"
        >
          <SiPostman style={{ color: "orange" }} />
        </motion.div>
      </motion.div>
      {/* <MouseMovement /> */}
    </motion.div>
  );
};

export default Technology;
