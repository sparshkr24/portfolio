import { BrowserRouter } from "react-router-dom";

import "./app.scss";
import { About, Contact, Experience, Navbar, Works, StarsCanvas, Footer } from "./components";
import Parallax from "./components/parallax/Parallax";
import FloatingDock from "./components/floatingDock/FloatingDock";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <FloatingDock />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          {/* <Hero /> */}
          {/* <section id="Services" className="h-[120vh]"> */}
          <section id="Services" className="h-screen">
            <Parallax type="services" />
          </section>
        </div>
        <About />
        <Experience />
        {/* <Tech /> */}
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
