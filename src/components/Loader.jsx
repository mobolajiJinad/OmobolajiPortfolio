import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const Loader = () => {
  const name = "Omobolaji".split("");

  return (
    <div
      style={{ backgroundColor: "#112130" }}
      className="flex h-screen w-screen justify-center"
    >
      <motion.h1
        animate={{ y: ["0vh", "90vh", "50vh"] }}
        transition={{ duration: 2.5 }}
      >
        {name.map((letter, index) => {
          return <NameSpan key={index}>{letter}</NameSpan>;
        })}
      </motion.h1>
    </div>
  );
};

const NameSpan = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const controls = useAnimationControls();

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, 0.55, 1)",
        "scale3d(0.75, 1.25, 1)",
        "scale3d(1.25, 0.85, 1)",
        "scale3d(0.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
    });
    setIsPlaying(true);
  };

  return (
    <motion.span
      className="font-PermanentMarker inline-block text-5xl text-white sm:text-6xl lg:text-7xl"
      animate={controls}
      whileInView={() => {
        if (!isPlaying) {
          rubberBand();
        }
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </motion.span>
  );
};

export default Loader;
