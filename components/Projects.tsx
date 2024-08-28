import React from 'react'
import { ExpandableCardDemo } from './ui/ProjectGrid';
import {cards} from "../data/fetchProjects"
const Projects = () => {
  return (
    <div className="pb-20 pt-26 relative z-10">
      <h1 className="flex flex-col justify-center items-center text-7xl font-roboto mb-10">
        Projects
      </h1>
      <hr className="my-8 border-t-2 border-highlight w-1/2 mx-auto mb-20" />
      <ExpandableCardDemo
      cards={cards}/>
    </div>
  );
}

export default Projects