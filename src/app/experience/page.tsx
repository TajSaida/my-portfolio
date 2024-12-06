'use client';
import { education, experienceData } from '@/utils/constant';
import React, { useState } from 'react';
import { MdWorkHistory } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';
const options = ['Experience', 'Education'];
function Experience() {
  const [isExp, setIsExp] = useState(true);
  const [selected, setSelected] = useState(options[0]);

  const handleToggle = (option: string) => {
    setSelected(option);
    setIsExp(!isExp);
  };
  const data = isExp ? experienceData : education;
  return (
    <div className="p-8 bg-black min-h-screen">
      <div className="text-4xl flex justify-center font-bold mb-16 text-[#D3F1DF] animate-colorChange">
        <h1 className="pr-2">{isExp ? 'Experience' : 'Education'}</h1>
      </div>
      <div className="text-center">
        {options.map((option, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              selected === option
                ? 'bg-[#525B44] text-white'
                : 'bg-[#D3F1DF] text-black'
            }`}
            onClick={() => handleToggle(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div
        className={`flex cursor-pointer  ${
          isExp
            ? '  flex-wrap justify-center gap-8'
            : 'flex flex-col  items-center  mt-8'
        }`}
      >
        {data?.map((exp, index) => (
          <div
            key={index}
            className=" flex w-full md:w-[600px]  rounded-lg p-4"
          >
            {/* Timeline Indicator */}
            <div className="basis-1/4 flex flex-col items-center">
              <span className="flex items-center justify-center w-10 h-10 bg-[#525B44] rounded-full">
                {isExp ? <MdWorkHistory /> : <FaUserGraduate />}
              </span>
              <div className="w-[2px] flex-1 bg-gray-500"></div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-2 ml-4">
              <span className=" text-white font-medium text-lg">
                {exp?.role && (
                  <span className="text-[#EFB6C8]"> {exp?.role} - </span>
                )}{' '}
                <span className="text-[#F29F58] uppercase font-bold lg:text-xl text-base">
                  {exp.company || exp?.institute}
                </span>
              </span>
              {exp?.location && (
                <span className="text-[#EFB6C8]">{exp?.location}</span>
              )}
              <span className="text-sm font-semibold text-[#85A98F]">
                {exp?.date}
              </span>

              {exp?.info?.map((info) => (
                <p key={info?.id} className="text-base lg:text:xl text-white">
                  {info?.details}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
