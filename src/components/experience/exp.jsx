import { useRef } from "react";
import "./exp.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Exper = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yTransform = useTransform(scrollYProgress, [0, 0.05], [300, 500]);
  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["0%", "30%", "100%"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1.5, 0.2]);

  const imgScale = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1.5, 1]);
  return (
    <div className="background" ref={ref}>
      <motion.div
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 0.9 }}
        style={{ x: xTransform, scaleX: imgScale, scaleY: imgScale, opacity }}
        className="background-div"
      >
        {" "}
        {/* <svg
          width="100%"
          height="100%"
          viewBox="0 0 663 208"
          // fill="blue"
          xmlns="http://www.w3.org/2000/svg"
          stroke="white"
          id="svgimg"
        >
          <path d="M468.5 41.4335L475.104 59.1764L475.225 59.502H475.572H496.737L479.675 70.3237L479.333 70.5407L479.474 70.9203L486.028 88.5299L468.768 77.5818L468.5 77.412L468.232 77.5818L450.972 88.5299L457.526 70.9203L457.667 70.5407L457.325 70.3237L440.264 59.502H461.428H461.775L461.896 59.1764L468.5 41.4335Z" />
          <path d="M206.5 41.3948L210.411 51.5805L210.534 51.9012H210.878H223.278L213.322 58.0216L212.968 58.2391L213.117 58.6268L216.966 68.6495L206.762 62.3765L206.5 62.2155L206.238 62.3765L196.034 68.6495L199.883 58.6268L200.032 58.2391L199.678 58.0216L189.722 51.9012H202.122H202.466L202.589 51.5805L206.5 41.3948Z" />
          <path d="M30.5 1.43346L37.1036 19.1764L37.2248 19.502H37.5722H58.7365L41.6752 30.3237L41.3331 30.5407L41.4744 30.9203L48.0284 48.5299L30.7678 37.5818L30.5 37.412L30.2322 37.5818L12.9716 48.5299L19.5256 30.9203L19.6669 30.5407L19.3248 30.3237L2.2635 19.502H23.4278H23.7752L23.8964 19.1764L30.5 1.43346Z" />
          <path d="M81.5 132.185L86.9963 143.994L87.1308 144.283H87.4496H104.612L90.9005 151.238L90.4694 151.456L90.6734 151.895L96.0128 163.367L81.7262 156.12L81.5 156.006L81.2738 156.12L66.9872 163.367L72.3266 151.895L72.5306 151.456L72.0995 151.238L58.3881 144.283H75.5504H75.8692L76.0037 143.994L81.5 132.185Z" />
          <path d="M632.5 159.433L639.104 177.176L639.225 177.502H639.572H660.737L643.675 188.324L643.333 188.541L643.474 188.92L650.028 206.53L632.768 195.582L632.5 195.412L632.232 195.582L614.972 206.53L621.526 188.92L621.667 188.541L621.325 188.324L604.264 177.502H625.428H625.775L625.896 177.176L632.5 159.433Z" />
          <path d="M484 2.43632L487.123 10.8478L487.245 11.1738H487.592H497.498L489.544 16.2305L489.203 16.4475L489.344 16.8265L492.418 25.1068L484.268 19.9256L484 19.755L483.732 19.9256L475.582 25.1068L478.656 16.8265L478.797 16.4475L478.456 16.2305L470.502 11.1738H480.408H480.755L480.877 10.8478L484 2.43632Z" />
          <path d="M528.5 61.2971L531.07 67.4481L531.198 67.7553H531.531H539.438L533.158 71.3041L532.772 71.5225L532.943 71.9321L535.412 77.8421L528.746 74.0753L528.5 73.9363L528.254 74.0753L521.588 77.8421L524.057 71.9321L524.228 71.5225L523.842 71.3041L517.562 67.7553H525.469H525.802L525.93 67.4481L528.5 61.2971Z" />
          <path d="M526 20.2258L528.013 24.7318L528.145 25.0279H528.47H534.445L529.762 27.5022L529.349 27.7209L529.539 28.1482L531.418 32.3531L526.234 29.6136L526 29.4902L525.766 29.6136L520.582 32.3531L522.461 28.1482L522.651 27.7209L522.238 27.5022L517.555 25.0279H523.53H523.855L523.987 24.7318L526 20.2258Z" />
          <path d="M326.191 203.675C388.675 116.668 435.963 85.6389 451.797 81" />
          <path d="M292 142.496C380.473 82.1071 435.523 69.1226 451.988 70.179" />
          <path d="M307 173C383.643 98.1654 435.601 75.8189 452 74" />
        </svg> */}
      </motion.div>
      <motion.h1
        className="heading"
        initial={{ opacity: 0.1, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
          type: "spring",
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        EXPERIENCE
      </motion.h1>
      <div className="wrapper">
        <motion.div className="v1">
          <motion.div
            className="line1"
            style={{
              border: "1px solid white",
              width: " 1px",
              marginTop: "500px",
              height: yTransform,
              zIndex: 6,
            }}
          ></motion.div>
          <motion.div
            className="round1"
            initial={{ opacity: 0.2, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <motion.div className="speech-bubble-1">
              <div className="details1">
                <h2 className="year">2024-Present</h2>
                <h3 className="designation">FullStack Developer</h3>
                <h3 className="location">Capgemini, Airoli</h3>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="round2"
            initial={{ opacity: 0.2, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              ease: [0, 0.71, 0.2, 1.01],
            }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0.2, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="speech-bubble-2"
          >
            <div className="details2">
              <h2 className="year">2022-2024</h2>
              <h3 className="designation">Frontend Developer</h3>
              <h3 className="location">Capgemini, Airoli</h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Exper;
