import { useRef, useState } from "react";
import "./portfolio.scss";
import {
  easeInOut,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
//import TiltComponent from "./TiltComponent.jsx";
import Tilt from "react-parallax-tilt";

const items = [
  {
    id: 1,
    title: "GitSnap",
    img: "./GitSnap/GitSnap_HomePage.png",
    path: "/gitsnap",
    website: true,
    demo: true,
    webaddress: "https://git-snap.vercel.app/",
    desc: " GitSnap is a SnapChat alternative for programmers. You can share code with your friends, get feedback and improve your code",
  },

  {
    id: 2,
    title: "FuturePrompt",
    video: "./Prompto_Feed.mp4",
    img: "./Prompto/prompto.png",
    path: "/prompto",
    website: true,
    demo: true,
    webaddress: "https://future-prompt.vercel.app/",
    desc: "FuturePrompt is an open-source AI prompting tool allowing users to create, discover and share prompts",
  },

  {
    id: 3,
    title: "GigShop",
    img: "./GigShop/GigShop_Homepage.png",
    path: "/gigshop",
    website: false,
    demo: true,
    desc: "GigShop is an online marketplace for freelance services similar to Fiverr. Allows sellers to create gigs and buyers to place an order or and buy services. ",
  },
  {
    id: 4,
    title: "Portfolio",
    img: "./PortFolio_Homepage.png",
    path: "/",
    website: true,
    demo: false,
    webaddress: "/",

    desc: "Portfolio website created using ReactJS, Framer Motion, Gsap and CSS",
  },
];

const Single = ({ item }) => {
  const navigate = useNavigate();
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 200]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.89],
    easeInOut
  );
  const rotateXaxis = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [-10, 10, 0, -10],
    easeInOut
  );
  const scaleYaxis = useTransform(
    scrollYProgress,
    [0, 0.45, 0.7, 1],
    [1.3, 1.2, 1.3, 1],
    easeInOut
  );
  const scrollOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 0.7, 1],
    [0.4, 0.85, 0.9, 0.4]
  );

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <Tilt
            glareEnable={false}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
          >
            <motion.div className="imageContainer" ref={ref}>
              <motion.img
                // rotateX={rotateXaxis}
                src={item.img}
                alt=""
                style={{
                  // rotateX: rotateXaxis,
                  // scaleY: scaleYaxis,
                  scale,
                  opacity: scrollOpacity,
                }}
              />
            </motion.div>
          </Tilt>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div class="btncontainer">
              {item.demo && (
                <a
                  href="#"
                  class="btn"
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  See Demo
                </a>
              )}
              {item.website && (
                <a
                  href={item.webaddress}
                  target="_blank"
                  class="btn"
                  // onClick={() => {
                  //   navigate(item.webaddress);
                  // }}
                >
                  Visit website
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <motion.h1
          initial={{ opacity: 0.2, y: 30, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
