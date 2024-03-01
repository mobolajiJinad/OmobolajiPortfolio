import { FiExternalLink } from "react-icons/fi";

import { projects } from "../data";
import Reveal from "./Reveal";

const Projects = () => {
  return (
    <section id="projects" className="mb-16 md:mb-24 lg:mb-36">
      <Reveal className="sticky top-0 my-4 w-full bg-[#112130]/40  px-3 py-5 shadow-md backdrop-blur lg:hidden">
        <h2 className="text-lg uppercase">projects</h2>
      </Reveal>

      {projects.map((project, index) => {
        return (
          <Reveal
            key={index}
            className="mb-2 flex flex-col items-center justify-between gap-2 rounded-xl border border-[#112130] px-2 py-8 hover:bg-slate-800/50 hover:opacity-80 hover:shadow-md md:flex-row md:px-4"
          >
            <img
              src={project.imgSrc}
              alt="Project Image Source"
              className="my-4 mr-2 h-fit w-full md:w-1/3"
            />

            <div className="md:w-2/3">
              <a href={project.projectLink} target="_blank" className="group">
                <h3 className="mb-4 flex items-center text-xl capitalize group-hover:text-teal-300">
                  {project.name}{" "}
                  <FiExternalLink className="ml-1 group-hover:stroke-teal-300 lg:ml-2" />
                </h3>
              </a>
              <p className="text-sm text-gray-300 md:text-base">
                {project.shortText}
              </p>

              <div>
                <ul className="my-3 flex flex-wrap items-center gap-x-5">
                  {project.tools.map((tool, index) => {
                    return (
                      <li
                        key={index}
                        className="my-1 w-fit cursor-pointer rounded-lg bg-teal-400/10 px-3 py-1 font-medium uppercase text-teal-300"
                      >
                        {tool}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Reveal>
        );
      })}

      <a href="/" className="group">
        <h3 className="mb-5 flex cursor-pointer items-center justify-center text-center text-gray-300 hover:text-teal-300">
          View full project archive
          <FiExternalLink className="ml-2 group-hover:stroke-teal-300 lg:ml-2" />
        </h3>
      </a>
    </section>
  );
};

export default Projects;
