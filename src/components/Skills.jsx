import { skills } from "../data";
import Reveal from "./Reveal";

const Skills = () => {
  return (
    <section id="skills" className="mb-14 md:mb-16 lg:mb-24">
      <Reveal className="sticky top-0 my-4 w-full bg-[#112130]/40  px-3 py-5 shadow-md backdrop-blur lg:hidden">
        <h2 className="text-lg uppercase">skills</h2>
      </Reveal>

      <Reveal className="flex flex-wrap items-center gap-x-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="my-1 flex w-fit cursor-pointer items-center 
              rounded-lg bg-teal-400/10 px-4 py-4 font-medium uppercase hover:shadow-md"
            >
              <Icon className="mr-2 h-6 w-6 fill-teal-400 stroke-teal-300" />
              <h4 className="text-sm text-teal-300">{skill.name}</h4>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
};

export default Skills;
