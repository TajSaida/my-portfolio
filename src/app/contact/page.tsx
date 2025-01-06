'use client';
import Image from 'next/image';
import contactImag from '../../../public/saida1 (3).jpg';
import { CiMail } from 'react-icons/ci';
import { CiLinkedin } from 'react-icons/ci';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';
import React, { useState } from 'react';
import DownloadForm from './downloadForm';
function Contact() {
  const date = new Date();
  const year = date.getFullYear();
  const emailAddress = 'saidataj.mr@gmail.com';
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8 bg-black min-h-screen">
      {isModalOpen && (
        <div className="fixed top-0 right-0 z-50 bg-[#525B44] text-white p-4 flex flex-col items-end mt-4 mr-4 rounded-md">
          <DownloadForm
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      )}
      <div className="text-4xl flex justify-center font-bold  mb-16 fill-current text-[#D3F1DF] animate-colorChange  ">
        <h1 className="mt-20 lg:mt-0 ">Contact</h1>
      </div>

      <div className="flex flex-col lg:text-xl items-center justify-center gap-4  ">
        <div className=" lg:w-9/12 sm:w-11/12 md:w-10/12 cursor-pointer lg:text-2xl  h-full flex flex-col items-center border-[#252525]">
          <div className="">
            <Image
              className=" md:block rounded-full  lg:block "
              src={contactImag}
              alt="contact-img"
              width={200}
              height={200}
            />
          </div>

          <div className=" mx-auto mt-5 flex flex-col  pr-2">
            <div className="flex flex-col items-center">
              <h1 className="text-[#85A98F] font-bold text-left mb-0 text-xl sm:text-3xl md:text-4xl lg:text-6xl ">
                Let&apos;s Work Together!
              </h1>

              <p className=" text-white mt-2 text-base lg:text-xl  lg:w-3/5 m-2 p-4 ">
                Looking for an opportunity to work in a challenging position
                combining my skills in Software Engineering, which provides
                professional development, interesting experiences and personal
                growth.
                <br />
                <br />
              </p>
            </div>
            <span className="text-white text-right">
              — I can&apos;t wait to hear all about it!
            </span>

            <p className="text-right text-xl md:text-2xl lg:text-3xl  font-signature text-[#85A98F] py-3">
              Saida Taj M R
            </p>
            <span className="flex flex-row justify-end  mb-6">
              <Link
                href="https://www.linkedin.com/in/saida-taj-m-r-b3656495/"
                target="_blank"
              >
                <CiLinkedin
                  className="mr-2 animate-pulse"
                  size={30}
                  fill="#85A98F"
                />
              </Link>

              <Link href={`mailto:${emailAddress}`}>
                <CiMail
                  className="mr-2 animate-pulse"
                  size={30}
                  fill="#85A98F"
                  color=""
                />
              </Link>
              <button onClick={() => setIsModalOpen(true)}>
                <AiOutlineDownload
                  className="animate-pulse"
                  size={30}
                  fill="#85A98F"
                  color=""
                />
                <div></div>
              </button>
            </span>
            <hr className="border-b border-[#252525] mb-6" />
          </div>
          <footer>
            <div className="text-white">
              © {year} Made with <FaHeart fill="red" className="inline" /> By{' '}
              <Link
                className="text-[#F29F58]"
                href="https://www.linkedin.com/in/saida-taj-m-r-b3656495/"
                target="_blank"
              >
                Saida
              </Link>{' '}
            </div>
            <div className="text-sm">
              Next.js • Google Analytics • Seamless Experience
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Contact;
