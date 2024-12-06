import SkillCategory from './SkillCategory';
import { skills } from '@/utils/constant';

const SkillList: React.FC = () => (
  <div className="p-8 bg-black min-h-screen overflow-y-scroll no-scrollbar">
    <div className=" text-4xl flex justify-center font-bold  mb-16 fill-current text-[#D3F1DF] animate-colorChange  ">
      <h1 className="pr-2">My Skills</h1>
    </div>

    <div className="flex lg:text-xl items-center justify-center gap-4  ">
      <div className=" w-9/12 sm:w-11/12 md:w-10/12 scrollbar-left overflow-y:auto  cursor-pointer lg:text-2xl flex flex-col h-full  ">
        {skills.map((categorySkills) => (
          <SkillCategory key={categorySkills.category} {...categorySkills} />
        ))}
      </div>
    </div>
  </div>
);

export default SkillList;
