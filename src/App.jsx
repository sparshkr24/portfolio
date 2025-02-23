import { BrowserRouter } from "react-router-dom";

import "./app.scss";
import { About, Contact, Experience, Hero, Feedbacks, Navbar, Tech, Works, StarsCanvas } from "./components";
// import Hero2 from "./components/Hero2";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
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
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
