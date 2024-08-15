import Skills from "./Skills";
import MainPage from "./MainPage";
import Projects from "./Projects";
import ShineEffect from "./ShineEffect";

const Home = () => {
  return (
    <div
      style={{ backgroundColor: "#112130" }}
      className="relative flex flex-col justify-between px-4 lg:h-screen lg:flex-row lg:overflow-hidden lg:px-0"
    >
      <div className="pt-4 lg:flex lg:w-1/2 lg:flex-col lg:justify-between lg:py-20 lg:pl-20 xl:pl-36">
        <MainPage />
      </div>

      <div className="pb-4 pt-16 lg:w-1/2 lg:flex-1 lg:overflow-y-auto lg:py-20 lg:pr-20 xl:pr-36">
        <Skills />
        <Projects />

        <footer className="w-full text-center text-sm">
          <p className="text-gray-300">
            Built from scratch with 💙 {"   "}
            <span className="block md:inline">&copy; </span>All rights reserved.{" "}
            {new Date().getFullYear()}
          </p>
        </footer>
      </div>

      <ShineEffect />
    </div>
  );
};

export default Home;
