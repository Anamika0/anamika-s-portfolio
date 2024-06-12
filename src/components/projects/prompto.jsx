import "./project.styles.scss";
import { useInView } from "react-intersection-observer";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Prompto = () => {
  const { ref: overview, inView: overviewIsVisible } = useInView();
  const { ref: feed, inView: feedIsVisible } = useInView();
  const { ref: posts, inView: postsIsVisible } = useInView();
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
      <h1 className="project-title">FuturePrompt</h1>
      <div className="right-sidebar">
        <a className={`${overviewIsVisible ? "active" : ""}`} href="#overview">
          Overview
        </a>
        <a className={`${feedIsVisible ? "active" : ""}`} href="#feed">
          Feed
        </a>
        <a className={`${postsIsVisible ? "active" : ""}`} href="#posts">
          Posts
        </a>
      </div>
      <div className="content">
        <div className="overview" id="overview" ref={overview}>
          Overview
          <p>
            FuturePrompt is an open-source <span>AI prompting tool</span>{" "}
            allowing you to create, discover and share prompts which you can
            immediately paste into ChatGPT and other AI tools
          </p>
          <h3>CREATED USING:</h3>
          {/* <p classname='tech'>NextJs, Tailwind CSS, MongoDB and JavaScript</p> */}
          <div className="tech">
            <span className="tech-name">NextJs</span>
            <span className="tech-name">Tailwind CSS</span>
            <span className="tech-name">MongoDB</span>
            <span className="tech-name">Javascript</span>
          </div>
        </div>

        <div ref={feed} id="feed" className="section-title">
          Feed
          <p>
            Users can login using their <span>Google account</span>,{" "}
            <span>like and unlike</span> posts and search for different prompts
            using <span>tags, keywords or usernames</span>
          </p>
          <video
            width={1200}
            loop={Infinity}
            autoPlay
            muted //controls
            src="/Prompto/Prompto_Feed.mp4"
          ></video>
        </div>
        <div ref={posts} id="posts" className="section-title">
          Posts
          <p>
            Users can <span>create, edit and delete</span> their posts
          </p>
          <video
            width={1200}
            loop={Infinity}
            autoPlay
            muted
            // controls
            src="/Prompto/Prompto_posts.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Prompto;
