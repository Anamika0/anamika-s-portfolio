import "./app.scss";
import Navbar from "./components/navbar/Navbar.jsx";
import Technology from "./components/technology/Technology.jsx";
import Exper from "./components/experience/exp.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import PreLoader from "./components/preloader/PreLoader.jsx";

const App = () => {
  return (
    <div>
      <PreLoader />
      <section id="Homepage">
        <Navbar />
      </section>
      <section id="Technologies">
        <Technology />
      </section>
      <section id="Experience">
        <Exper />
      </section>
      <section id="Projects">
        <Portfolio />
      </section>

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
