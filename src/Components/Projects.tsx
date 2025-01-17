/* eslint-disable @typescript-eslint/no-explicit-any */

import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="md:px-20 px-10 font-mono">
            <h1 className=" text-4xl text-center font-bold mt-11 md:mt-0 !text-greencolor mb-5"><span>Projects</span></h1>
            <div className="flex gap-7 flex-wrap">
            {
                ProjectInfo.map((project:any,index:number)=>{
                    return <ProjectCard key={index}
                    title={project.title}
                    desc={project.desc}
                    image={project.image}
                    live={project.live}
                    github={project.github}
                    technologies={project.technologies}
                    link={project.link}
                    
                    
                    />

                })
            }
            </div>
    </div>
  );
}

export default Projects