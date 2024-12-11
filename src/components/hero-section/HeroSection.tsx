import React from 'react';
import profileImage from '../../../public/heroSectionimg.webp';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-row inset-0 lg:w-1/2">
        <div className="hidden lg:block w-[600px] lg:w-[430px] h-full -left-60 absolute -bottom-10 scale-125"></div>

        <div className="flex flex-grow items-center justify-center relative lg:p-9">
          <div className=" w-3/4 h-full   overflow-hidden hidden lg:block  items-center justify-center">
            <Image
              className="w-full h-full object-contain "
              src={profileImage}
              alt="profile"
            />
          </div>
        </div>
      </div>

      <div className="text-left flex flex-col justify-center p-4 items-center lg:items-start">
        <div className="lg:hidden p-6 md:p-12">
          <Image
            alt="name"
            src={profileImage}
            className="mx-auto mb-6 w-42 h-42  object-contain sm:w-40 sm:h-40 md:w-[270px] md:h-[270px]"
          />
        </div>

        <h1 className="text-[#D3F1DF] text-3xl  sm:text-2xl font-serif font-bold text-center lg:text-left">
          - I&apos;M{' '}
          <span className="fill-current sm:text-3xl md:text-4xl xl:text-5xl text-[#764abc] animate-colorChange">
            Saida Taj M R.
          </span>
        </h1>
        <h2 className="text-white text-lg sm:text-2xl md:text-3xl xl:text-4xl mt-2 font-serif sm:mt-4 font-bold text-center lg:text-left">
          SENIOR UI DEVELOPER
        </h2>
        <p className="text-white text-sm sm:text-base md:text-xl xl:text-lg mt-4 w-full sm:w-[80%] lg:w-[50%] pb-8 text-center font-serif lg:text-left">
          Self-driven, quick starter, passionate UI Developer with a curious
          mind who enjoys solving a complex and challenging real-world problems.
        </p>
        <Link href="/contact">
          <button className=" lg:text-xl relative overflow-hidden border border-[#252525] transition-all duration-300 ease-in-out hover:bg-black text-white px-4 py-2 rounded bg-[#525B44]">
            Contact Me
          </button>
        </Link>
      </div>
    </>
  );
};

export default HeroSection;
