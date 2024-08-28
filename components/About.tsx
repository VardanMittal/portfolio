import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div className="pb-20 pt-36 relative z-10 " id="/About">
      <h1 className="flex flex-col justify-center items-center text-7xl font-roboto mb-10">
        About
      </h1>
      <hr className="my-8 border-t-2 border-highlight w-1/2 mx-auto mb-20" />
      <div className="flex flex-col md:flex-row relative z-10 mx-10">
        {/* Text column */}
        <div className="flex-1">
          <p className="font-montserrat md:text-lg sm:text-sm leading-relaxed">
            Hello! I&apos;m currently pursuing my post-graduation in Mechanical
            Engineering at
            <strong className="text-highlight">
              {" "}
              Indian Institute of Technology, Gandhinagar
            </strong>
            , where I am expanding my expertise in advanced engineering
            concepts.
            <br />
            <br />
            My academic journey began at{" "}
            <strong className="text-highlight">
              National Institute of Technology Surat
            </strong>
            , where I earned my Bachelor&apos;s degree in Mechanical
            Engineering, building a solid foundation in the core principles of
            engineering.
            <br />
            <br />I have a deep passion for{" "}
            <strong className="text-highlight">robotics</strong> and a strong
            drive to explore various interdisciplinary fields. This passion led
            me to a semester-long internship at
            <strong className="text-highlight"> IIT Delhi</strong>, where I had
            the opportunity to work on cutting-edge projects in{" "}
            <strong className="text-highlight">soft robotics</strong>.
            <br />
            <br />
            My dedication to robotics has been recognized in competitions as
            well. I was proud to be the runner-up in the final round of
            <strong className="text-highlight"> Robofest 3.0</strong>, organized
            by the{" "}
            <strong className="text-highlight">
              Gujarat Council of Science and Technology
            </strong>
            . I am always eager to learn and take on new challenges, with a keen
            interest in pushing the boundaries of technology.
          </p>
        </div>
        {/* Animation Column */}
        <div className="flex-1">
          <Image src="" width={500} height={500} alt="Vardan" />
        </div>
      </div>
    </div>
  );
}

export default About