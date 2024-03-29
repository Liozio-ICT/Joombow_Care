import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import Services from "./component/Services";
import Moreser from "./component/Moreser";
import Loader from "./component/Loader";
import Work from "./Work";
import Review from "./component/Review";
import Footer from "./component/Footer";


import "./App.css";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Loader />
        <Header />
        <Hero />
        <About />
        <Services />
        <Moreser />
        <Work />
        <Review />
        <Footer />
      </div>
    </>
  );
}

export default App;
