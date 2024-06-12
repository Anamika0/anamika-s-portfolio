import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { PiArrowBendDoubleUpRightFill } from "react-icons/pi";
import { HiOutlineArrowDown, HiOutlineArrowRight } from "react-icons/hi";
import { IoCheckmarkDone } from "react-icons/io5";
import { useState } from "react";
import copy from "copy-to-clipboard";
import NavbarBackground from "./navbar-bg.jsx";

const Navbar = () => {
  //Function to add text to clipboard

  const desigText = "Web Developer & UI Designer".split(" ");
  const copyToClipboard = () => {
    const copyText = "anamikasonawane43@gmail.com";
    let isCopy = copy(copyText);

    //Dispalying notification
    if (isCopy) {
      setIsClicked(true);
    }
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div className="navbar">
      <NavbarBackground />

      {/* <div className="navbar-gradient-container"> */}
      {/*sidebar*/}
      <Sidebar />
      <div className="wrapper">
        <div className="social">
          <motion.a className="linkedin" target="_blank" href="./cv.pdf">
            CV
            <PiArrowBendDoubleUpRightFill></PiArrowBendDoubleUpRightFill>
          </motion.a>
          <motion.a
            className="linkedin"
            target="_blank"
            href="https://in.linkedin.com/in/anamika-sonavane"
          >
            LinkedIn
            <PiArrowBendDoubleUpRightFill></PiArrowBendDoubleUpRightFill>
          </motion.a>
          <motion.a
            className="linkedin"
            target="_blank"
            href="https://github.com/Anamika0"
          >
            GitHub
            <PiArrowBendDoubleUpRightFill></PiArrowBendDoubleUpRightFill>
          </motion.a>
        </div>
      </div>
      <div className="name-detail">
        <motion.h1
          className="h1"
          initial={{ y: -100, opacity: 0.5 }}
          animate={{ y: [-100, -50, 0], opacity: [0, 0.5, 1] }}
          transition={{ delay: 3.5, duration: 1.5 }}
        >
          ANAMIKA SONAVANE
        </motion.h1>
        {desigText.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 7,
              delay: i / 3,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}

        <motion.p
          className="ptag"
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 4, duration: 2, ease: "easeIn" }}
        >
          I enjoy exploring new technologies and developing things <br /> for
          the web.
        </motion.p>

        {!isClicked ? (
          <motion.a
            onMouseOver={() => {
              setTimeout(() => {
                setIsHovered(true);
              }, 200);
            }}
            onMouseLeave={() => setIsHovered(false)}
            className="get-in-touch"
            onClick={copyToClipboard}
            animate={{ x: [-100, -50, 0], opacity: [0, 0.5, 1] }}
            transition={{ delay: 2.4, duration: 1 }}
          >
            <HiOutlineArrowRight />
            {isHovered ? "Copy email" : "Get in touch"}
          </motion.a>
        ) : (
          <motion.a
            className="get-in-touch"
            onMouseLeave={() => {
              setIsClicked(false), setIsHovered(false);
            }}
          >
            <IoCheckmarkDone />
            Mail Copied
          </motion.a>
        )}
      </div>
      <motion.a
        className="scroll"
        href="#Technologies"
        // animate={{ backgroundSize: "10000px" }}
        // transition={{ duration: 1 }}
      >
        Scroll to discover <HiOutlineArrowDown className="down-arrow" />
      </motion.a>
    </motion.div>
  );
};

export default Navbar;
