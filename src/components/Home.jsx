import { useState } from "react";

import About from "./About";
import Skills from "./Skills";
import MainPage from "./MainPage";
import Projects from "./Projects";
import ShineEffect from "./ShineEffect";

const Home = () => {
  const [sectionID, setSectionID] = useState("");
  const [linkActive, setLinkActive] = useState(false);

  return (
    <div
      style={{ backgroundColor: "#112130" }}
      className="relative flex flex-col justify-between px-4 lg:h-screen lg:flex-row lg:overflow-hidden lg:px-0"
    >
      <div className="pt-6 lg:flex lg:w-1/2 lg:flex-col lg:justify-between lg:py-20 lg:pl-20 xl:pl-36">
        <MainPage sectionID={sectionID} linkActive={linkActive} />
      </div>

      <div className="pb-4 pt-16 lg:w-1/2 lg:flex-1 lg:overflow-y-auto lg:py-20 lg:pr-20 xl:pr-36">
        <About setSectionID={setSectionID} setLinkActive={setLinkActive} />
        <Skills setSectionID={setSectionID} setLinkActive={setLinkActive} />
        <Projects setSectionID={setSectionID} setLinkActive={setLinkActive} />

        <footer className="w-full text-center text-sm">
          <p className="text-gray-300">
            Built from scratch with 💙
            <span>&copy; </span>All rights reserved. {new Date().getFullYear()}
          </p>
        </footer>
      </div>

      <ShineEffect />
    </div>
  );
};

export default Home;
