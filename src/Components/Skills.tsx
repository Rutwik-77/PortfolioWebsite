/* eslint-disable @typescript-eslint/no-explicit-any */
import { SkillsInfo } from "../User";
import SkillsCard from "./SkillsCard";
const Skills = () => {
  return (
    <div className='md:px-20 px-10 font-mono mt-10'>
      <h1 className=' text-4xl text-center font-bold mt-11 md:mt-0 !text-greencolor mb-5'>Skills
        <div className="flex flex-wrap gap-5 justify-between mt-10">
        {
            SkillsInfo.map((skill:any,index:number)=><SkillsCard key={index} title={skill.title} skills={skill.skills}/>)
        }
        </div>
      </h1>
    </div>
  );
};

export default Skills;
