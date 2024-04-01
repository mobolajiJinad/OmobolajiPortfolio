import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { FaXTwitter, FaGithub, FaDev } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

import wavingRobot from "../assets/wavingRobot.gif";
import { navs } from "../data";
import Reveal from "./Reveal";

const MainPage = () => {
  return (
    <>
      <div className="my-4 mb-8 flex w-full flex-col md:mb-6 md:flex-row md:justify-between md:gap-4 lg:my-2 lg:mb-6 lg:flex-col">
        <Reveal className="my-0 flex items-center justify-center md:w-1/2 md:flex-col lg:flex-row lg:justify-normal">
          <img width={70} height={70} src={wavingRobot} alt="Hello" />
          <h3
            style={{ transform: "scaleY(2)" }}
            className="mx-4 my-2 whitespace-nowrap font-PermanentMarker text-3xl font-bold uppercase leading-10 lg:text-5xl"
          >
            hi there
          </h3>
        </Reveal>

        <Reveal className="px-2 md:w-1/2">
          <h1 className="my-2 whitespace-nowrap text-2xl font-bold md:text-3xl lg:text-3xl">
            AbdulQuadri Jinad
          </h1>
          <h3 className="my-2 text-xl font-bold md:text-xl lg:text-2xl">
            Freelancer
          </h3>
          <p className="break-words text-sm text-gray-300 md:mt-5 md:max-w-[450px] md:text-base lg:mt-2 lg:w-96">
            I build pixel-perfect and accessible software with care and
            creativity.
          </p>
        </Reveal>
      </div>

      <Navs />

      <div className="my-4 flex w-full justify-center px-2 pr-4 md:my-0 lg:justify-normal lg:pr-6">
        <Link
          to="https://github.com/mobolajiJinad"
          target="_blank"
          className="mr-7"
        >
          <FaGithub className="h-5 w-5 stroke-gray-300 lg:h-7 lg:w-7" />
        </Link>
        <Link to="https://dev.to/0mobolaji" target="_blank" className="mr-7">
          <FaDev className="h-5 w-5 stroke-gray-300 lg:h-7 lg:w-7" />
        </Link>
        <Link
          to="https://twitter.com/mobolajiSquady"
          target="_blank"
          className="mr-7"
        >
          <FaXTwitter className="h-5 w-5 stroke-gray-300 lg:h-7 lg:w-7" />
        </Link>

        <Link to="mailto:abdjinadquadri@gmail.com" className="mr-7">
          <SiGmail className="h-5 w-5 stroke-gray-300 lg:h-7 lg:w-7" />
        </Link>
      </div>
    </>
  );
};

const Navs = () => {
  const { hash } = useLocation();

  return (
    <div className="hidden w-fit lg:mb-14 lg:block">
      {navs.map((nav, index) => {
        console.log(hash === `#${nav.name}`);
        return (
          <NavHashLink
            key={index}
            to={nav.path}
            smooth
            className={`${hash === `#${nav.name}` && "translate-x-5"} group my-2 flex cursor-pointer items-center transition-all duration-100 hover:translate-x-5`}
          >
            <div
              className={`${hash === `#${nav.name}` && "-scale-x-150 bg-white"} mr-4 h-0.5 w-6 bg-gray-500 group-hover:-scale-x-150 group-hover:bg-white`}
            ></div>
            <nav
              className={`${hash === `#${nav.name}` && "text-white"}text-base uppercase text-gray-300 group-hover:text-white`}
            >
              {nav.name}
            </nav>
          </NavHashLink>
        );
      })}
    </div>
  );
};

export default MainPage;
