import React from 'react'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="h-screen w-full dark:bg-background bg-white  dark:bg-dot-dotGrid/[0.5] bg-dot-black/[0.5] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
    </div>
  );
}

export default Hero