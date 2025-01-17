/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import ResumeViewer from "./ResumeViewer";
import { useEffect, useState } from "react";
import { Info } from "../User";
//@ts-expect-error
// import NET from "vanta/src/vanta.Net";
import NET from "vanta/dist/vanta.net.min";

import Typewriter from "typewriter-effect";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Particles from "./magicui/Particles";

const About = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: "#bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xb8f489,
          backgroundColor: 0x213555,
          size: 2.8,
          maxDistance: 17.0,
          spacing: 25.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden font-mono sm:min-h-[90vh] px-5 sm:px-20 md:px-20 lg:px-32 2xl:-mb-20"
      id="bg"
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color="#5bf960"
        refresh
      />
      <div className="relative z-10 text-textcolor flex flex-col justify-center items-center text-center h-full space-y-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl mb-2 text-greencolor">
          Hii, I am
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3">
          {Info.name}
        </h1>
        <div className="text-lg sm:text-xl md:text-2xl font-semibold">
          I'm a{" "}
          <span className="text-greencolor">
            <Typewriter
              options={{
                strings: Info.stack,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-6 md:max-w-5xl">
          {Info.Bio}
        </p>
        <Button
          onClick={open}
          className="text-bgColor"
          variant="filled"
          radius="md"
          color="#5bf960"
        >
          Check Resume
        </Button>
      </div>
      <ResumeViewer opened={opened} close={close} />
    </div>
  );
};

export default About;

