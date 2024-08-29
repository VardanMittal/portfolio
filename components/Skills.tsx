import React from 'react'
import { FocusCards } from './ui/FocusCard';
import { cards } from '@/data/fetchSkills';


const Skills = () => {
  return (
    <div className="pb-5 pt-36 relative z-10" id="Skills">
      <h1 className="flex flex-col justify-center items-center text-7xl font-roboto mb-10">
        Skills
      </h1>
      <hr className="my-8 border-t-2 border-highlight w-1/2 mx-auto mb-20" />
      <FocusCards cards={cards}/>
    </div>
  );
}

export default Skills