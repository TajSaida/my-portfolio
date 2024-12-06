import React from 'react';

interface Skill {
  id: number;
  icon: React.ReactNode;
  skill: string;
  yoe: string;
}

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills }) => (
  <div className="my-4">
    <div className="flex items-center justify-center  mb-8">
      <p className="text-white text-lg font-medium uppercase font-serif inline-block border border-[#85A98F]  rounded-md pl-4 pr-2 py-2  tracking-[0.5rem] ">
        {category}
      </p>
    </div>
    {/* <h2 className="text-white text-3xl font-bold text-center mb-16">{category}</h2> */}
    <div className="flex flex-wrap justify-center gap-4 ">
      {skills.map((skill) => (
        <div
          className="flex flex-row items-center justify-center text-center border h-[60px] w-[140px] sm:h-[100px] sm:w-[200px] cursor-pointer border-[#252525] gap-2"
          key={skill.id}
        >
          <div className=" ">{skill.icon}</div>
          <div className=" flex flex-col text-left">
            <span className="text-base lg:text-md">{skill.skill}</span>
            {skill.yoe && (
              <span className="text-xs text-[#525B44]">XP: {skill.yoe} YR</span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillCategory;
