import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

import loadingGif from "../assets/loadingGif.gif";

const Loader = () => {
  const name = "Omobolaji".split("");

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      <img src={loadingGif} className="mx-auto block w-full max-w-96" />

      <div>
        {name.map((letter, index) => {
          return <NameSpan key={index}>{letter}</NameSpan>;
        })}
      </div>
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
