import { Link } from "react-router-dom";
import { FaXTwitter, FaGithub, FaDev } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

import wavingRobot from "../assets/wavingRobot.gif";
import Reveal from "./Reveal";

const MainPage = () => {
  return (
    <>
      <div className="my-4 mb-8 flex w-full flex-col md:mb-6 md:flex-row md:items-center md:justify-between md:gap-4 lg:my-2 lg:mb-6 lg:flex-col lg:items-start">
        <Reveal className="my-0 flex items-center justify-center md:w-1/2 md:flex-col lg:flex-row lg:justify-normal">
          <img width={70} height={70} src={wavingRobot} alt="Hello" />
          <h3
            style={{ transform: "scaleY(2)" }}
            className="mx-4 my-2 ml-6 whitespace-nowrap font-PermanentMarker text-3xl font-bold uppercase leading-10 lg:text-5xl"
          >
            hi there
          </h3>
        </Reveal>

        <Reveal className="xs:text-center px-2 pl-4 sm:text-left md:w-1/2 md:pl-2">
          <h1 className="my-2 whitespace-nowrap text-2xl font-bold md:text-3xl lg:text-3xl">
            Omobolaji (Squady)
          </h1>
          <h3 className="my-2 text-xl font-bold md:text-xl lg:text-2xl">
            Freelancer
          </h3>
          <p className="break-words text-sm text-gray-300 md:mt-5 md:max-w-[450px] md:text-base lg:mt-2 lg:w-96">
            Full stack developer in the JS ecosystem.
          </p>
        </Reveal>
      </div>

      <div className="my-4 flex w-full justify-center px-2 pr-4 md:my-0 lg:mb-10 lg:justify-normal lg:pr-6">
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

export default MainPage;
