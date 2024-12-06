import React from 'react';
import { aboutMe } from '@/utils/constant';

function About() {
  return (
    <div className="p-8 bg-black min-h-screen">
      <div className=" text-4xl flex justify-center font-bold  mb-16 fill-current text-[#D3F1DF] animate-colorChange  ">
        <h1 className="pr-2">About Me </h1>
      </div>

      <div className="flex flex-col  text-base lg:text-xl items-center justify-center gap-4 ">
        <p className="lg:text-xl w-9/12 sm:w-11/12 md:w-10/12  text-center font-serif ">
          Bringing 7 years of experience, I'm committed to progression and
          continuous improvement, actively engaging in solution-oriented
          thinking and action.
        </p>
        {aboutMe.map((about) => (
          <ul
            key={about.id}
            className="border w-9/12 sm:w-11/12 md:w-10/12 cursor-pointer border-[#252525] lg:text-2xl"
          >
            <li className="p-4 flex flex-col md:flex-row md:justify-between items-center gap-4">
              <span className="animate-float">{about.icon}</span>
              <div className="text-center md:text-left">{about.info}</div>
            </li>
          </ul>
        ))}

      </div>
    </div>
  );
}

export default About;
