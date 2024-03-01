import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="mb-16 md:mb-24 lg:mb-36">
      <Reveal className="sticky top-0 my-4 w-full bg-[#112130]/40 px-3 py-5 shadow-md backdrop-blur lg:hidden">
        <h2 className="text-lg uppercase">about</h2>
      </Reveal>

      <Reveal className="py-4">
        <p className="my-4 text-base text-gray-300 lg:text-lg">
          I'm AbdulQuadri Jinad pka Omobolaji (Squady), a second-year student
          studying{" "}
          <span className="hover:text-teal-300">
            Mechanical Engineering at Olabisi Onabanjo University, Ibogun Campus
            in Ogun, Nigeria.
          </span>
        </p>
        <p className="my-4 text-base text-gray-300 lg:text-lg">
          I have experience developing and designing various web applications,
          ranging from simple landing pages to complex progressive web
          applications. Work, for me, is an ongoing education, and I'm always
          eager to collaborate with those who are willing to share their
          knowledge.
        </p>
        <p className="my-4 text-base text-gray-300 lg:text-lg">
          As a software engineer, I enjoy bridging the gap between engineering
          and design — combining my technical knowledge with my keen eye for
          design to create beautiful and functional products.
        </p>
      </Reveal>
    </section>
  );
};

export default About;
