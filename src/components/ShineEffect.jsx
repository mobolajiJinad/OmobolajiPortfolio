import { useEffect, useRef } from "react";

const ShineEffect = () => {
  const shineRef = useRef(null);
  const shineSize = 800;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const shine = shineRef.current;
      const x = e.clientX - shineSize / 2;
      const y = e.clientY - shineSize / 2;

      shine.style.left = `${x}px`;
      shine.style.top = `${y}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={shineRef}
      className="pointer-events-none fixed left-[-116px] top-[-306px] h-[800px] w-[800px] rounded-full opacity-10 lg:absolute"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 255, 255, 0.5), transparent)",
      }}
    ></div>
  );
};
export default ShineEffect;
