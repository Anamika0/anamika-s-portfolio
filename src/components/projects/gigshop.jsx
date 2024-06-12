import "./project.styles.scss";
import { useInView } from "react-intersection-observer";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const GigShop = () => {
  const { ref: overview, inView: overviewIsVisible } = useInView();
  const { ref: discover, inView: discoverIsVisible } = useInView();
  const { ref: review, inView: reviewIsVisible } = useInView();
  const { ref: seller, inView: sellerIsVisible } = useInView();
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
      <h1 className="project-title">GigShop</h1>
      <div className="right-sidebar">
        <a className={`${overviewIsVisible ? "active" : ""}`} href="#overview">
          Overview
        </a>
        <a className={`${discoverIsVisible ? "active" : ""}`} href="#discover">
          Discover Gigs
        </a>
        <a className={`${reviewIsVisible ? "active" : ""}`} href="#review">
          Review and Order
        </a>
        <a className={`${sellerIsVisible ? "active" : ""}`} href="#seller">
          Seller Actions
        </a>
        <a className={`${chatIsVisible ? "active" : ""}`} href="#chat">
          Chat
        </a>
      </div>
      <div className="content">
        <div className="overview" ref={overview}>
          Overview
          <p>
            GigShop is an online marketplace for{" "}
            <span>freelance services </span>
            similar to Fiverr. Allows sellers to <span>create gigs</span> and
            buyers to <span>place an order & buy services</span>
          </p>
          <h3>CREATED USING:</h3>
          <div className="tech">
            <span className="tech-name">ReactJs</span>
            <span className="tech-name">ExpressJs</span>
            <span className="tech-name">MongoDB</span>
            <span className="tech-name">CSS</span>
          </div>
        </div>

        <div ref={discover} id="discover" className="section-title">
          Discover Gigs
          <p>
            Users can <span>search</span> for gigs. Gigs can be{" "}
            <span>sorted and filtered</span> as required.
          </p>
          <video
            width={1200}
            loop={Infinity}
            autoPlay
            muted //controls
            src="/GigShop/GigShop_Gig Operations.mp4"
          ></video>
        </div>
        <div ref={review} id="review" className="section-title">
          Review and Order
          <p>
            Users can <span>review and rate</span> gigs. Services can be bought
            by <span> placing orders</span>
          </p>
          <video
            width={1200}
            loop={Infinity}
            autoPlay
            muted
            // controls
            src="/GigShop/GigShop_Review_Order.mp4"
          ></video>
        </div>
        <div ref={seller} id="seller" className="section-title">
          Seller Actions
          <p>
            Sellers can <span> create gigs</span> and view
            <span> order status</span>
          </p>
          <video
            width={1200}
            loop={Infinity}
            autoPlay
            muted
            src="/GigShop/GigShop_Orders_NewGigs.mp4"
          ></video>
        </div>
        <div ref={chat} id="chat" className="section-title">
          Chat
          <p>
            Sellers and buyers can <span>chat</span> with each other about the
            gig orders once they are logged in
          </p>
          <video
            width={1200}
            loop={Infinity}
            autoPlay
            muted
            src="/GigShop/GigShop_LoginChat.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default GigShop;
