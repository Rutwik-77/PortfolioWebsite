/** @format */

import Header from "./Header";
import Mail from "./Mail";
import Social from "./Social";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Experiance from "./Experiance";
import Contact from "./Contact";
import Footer from "./Footer";
import { Loader } from "../Components/magicui/Loader";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 4000);
  }, []);

  return (
    <div className={`min-h-[100vh] ${loading ? "flex":""} items-center justify-center overflow-hidden`}>
      {loading !== true ? (
        <>
          <Header />
          <About />
          <Projects></Projects>
          <Skills></Skills>
          <Experiance></Experiance>
          <Contact></Contact>
          <Footer></Footer>
          <Mail></Mail>
          <Social></Social>
        </>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
};

export default HomePage;
