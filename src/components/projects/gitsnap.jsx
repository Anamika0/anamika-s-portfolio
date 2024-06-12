import "./project.styles.scss";
import { useInView } from "react-intersection-observer";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const GitSnap = () => {
  const { ref: overview, inView: overviewIsVisible } = useInView();
  const { ref: homepage, inView: homepageIsVisible } = useInView();
  const { ref: login, inView: loginIsVisible } = useInView();
  const { ref: chat, inView: chatIsVisible } = useInView();
  const navigate = useNavigate();
  return (
    <div className="main">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <HiArrowLeft />
        Back
      </button>
      <h1 className="project-title">GitSnap</h1>
      <div className="right-sidebar">
        <a className={`${overviewIsVisible ? "active" : ""}`} href="#overview">
          Overview
        </a>
        <a className={`${homepageIsVisible ? "active" : ""}`} href="#homepage">
          Homepage
        </a>
        <a className={`${loginIsVisible ? "active" : ""}`} href="#login">
          Login
        </a>
        <a className={`${chatIsVisible ? "active" : ""}`} href="#chat">
          Chat
        </a>
      </div>
      <div className="content">
        <div className="overview" id="overview" ref={overview}>
          Overview
          <p>
            GitSnap is a <span>SnapChat alternative</span> for programmers. You
            can <span>share code</span> with your friends, get feedback and
            improve your code. Users can login using their GitHub account and
            send images, text or emojis indicating reactions to the code.
          </p>
          <h3>CREATED USING:</h3>
          <div className="tech">
            <span className="tech-name">NextJs</span>
            <span className="tech-name">Tailwind CSS</span>
            <span className="tech-name">MongoDB</span>
            <span className="tech-name">TypeScript</span>
            <span className="tech-name">React Three fiber</span>
          </div>
        </div>

        <div ref={homepage} id="homepage" className="section-title">
          Homepage
          <p>
            Homepage contains an option to <span>login</span> and a
            <span> 3D rotating cube</span> which can move with mouse move and
            drag events
          </p>
          <video
            width={1200}
            loop={Infinity}
            autoPlay
            muted //controls
            src="/GitSnap/GitSnap_Homepage.mp4"
          ></video>
        </div>
        <div ref={login} id="login" className="section-title">
          Login
          <p>
            Users can log in using <span>GitHub</span> account. Once logged in,
            users can access the chat page and send messages to their friends
          </p>
          <video
            width={1200}
            loop={Infinity}
            autoPlay
            muted
            // controls
            src="/GitSnap/GitSnap_Login.mp4"
          ></video>
        </div>
        <div ref={chat} id="chat" className="section-title">
          Chat
          <p>
            Users can send <span>image, text and emoji</span> to other users.
            The chat can be deleted using <span>delete</span> option
          </p>
          <video
            width={1200}
            loop={Infinity}
            autoPlay
            muted
            src="/GitSnap/GitSnap_Chat.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default GitSnap;
