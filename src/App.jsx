import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import Services from "./component/Services";
import Moreser from "./component/Moreser";
import Loader from "./component/Loader";
import Review from "./component/Review";
import Footer from "./component/Footer";
import Work from "./component/Work";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";


import "./App.css";

function App() {
  AOS.init({
    duration: 800, // Animation duration
    once: false, // Whether animation should only happen once
    // mirror: false, // Whether elements should animate out while scrolling past them in reverse
  });
  return (
    <>
      <div className="">
        <Loader />
        <Header />
        <Hero />
        <About />
        <Services />
        <Moreser />
        <Work />

        <div className=" overflow-x-hidden">
          <Review />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
