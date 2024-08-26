import React from "react";
import Image from "next/image"
import { FloatingDock } from "./ui/FloatingDocs";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  const links = [
    {
      title: "LinkedIn",
      icon: <FaLinkedin/>,
      href: "https://www.linkedin.com/in/vardan-mittal-53837521a",
    },
    {
      title: "Github",
      icon: <FaGithub/>,
      href: "https://github.com/VardanMittal",
    },
    {
      title: "Email",
      icon: <CiMail/>,
      href: "mailto:mittalvardan101@gmail.com",
    },
  ];
  return (
    <div className="pb-20 pt-36 text-text">
      <div className="h-screen w-full dark:bg-background bg-white  dark:bg-dot-dotGrid/[0.5] bg-dot-black/[0.5] absolute flex items-center justify-center top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex flex-col md:flex-row relative z-10 mx-10">
        {/* Text column */}
        <div className="flex-1">
          <h2 className="font-montserrat text-text mb-4 md:text-lg sm:text-sm">
            Robotics and Automation Engineer
          </h2>
          <h1 className="font-montserrat text-text font-bold md:text-6xl sm:text-2xl mb-4 text-wrap">
            Hi, I&apos;m{" "}
            <span className="font-roboto italic text-highlight">
              Vardan Mittal
            </span>
          </h1>
          <p className="font-montserrat md:text-lg sm:text-sm">
            Automating boring stuff...
          </p>
          <div className="my-5">
            <MagicButton
              text="Download CV"
              feature="download"
              icon={<FaDownload />}
              href="../public/Vardan_Mittal.pdf"
            />
          </div>
            <FloatingDock items={links} />
        </div>
        {/* Animation Column */}
        <div className="flex-1">
          <Image src="" width={500} height={500} alt="Robotics Animation" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
