import React from "react";
import { ReactNode } from "react";

interface Skill {
  id: number;
  icon: ReactNode; // Icons are React elements
  skill: string;
  color?:string;
  yoe: number;
}

const SkillItem: React.FC<Skill> = ({ id, icon, skill, yoe }) => (
  <div
    key={id}
    className="lg:text-lg md:text-md sm:text-sm  hover:scale-105 flex items-center justify-evenly w-full  h-24"
  >
    <div className=" ">{icon}</div>
    <div className=" flex flex-col text-left">
      <span className="text-sm">{skill}</span>
      {yoe && (
        <span className="text-xs dark:text-[#525B44]">
          XP: {yoe} YR
        </span>
      )}
    </div>
  </div>
);

export default SkillItem;

//   <div className="mb-6 cursor-pointer ">
//     <h3 className="text-2xl font-semibold text-[#D3F1DF] mb-4">{category}</h3>
//     <div className="flex flex-wrap justify-center gap-8 px-4">
//   {skills.map((skill) => (
//     <SkillItem  {...skill} />
//   ))}
// </div>
//   </div>