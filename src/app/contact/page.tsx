'use client';
import Image from 'next/image';
import contactImag from '../../../public/test4545.jpeg';
import { CiMail } from 'react-icons/ci';
import { CiLinkedin } from 'react-icons/ci';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function Contact() {
  const date = new Date();
  const year = date.getFullYear();
  const emailAddress = 'saidataj.mr@gmail.com';
  const [canDownload, setCanDownload] = useState(false);
  const [showCookiePrompt, setShowCookiePrompt] = useState(false);

  useEffect(() => {
    const hasSeenPrompt = localStorage.getItem('cookiePromptShown');
    if (!hasSeenPrompt) {
      setShowCookiePrompt(true);
      localStorage.setItem('cookiePromptShown', 'true');
    }
  }, []);

  const handleCookiePermission = () => {
    setCanDownload(true);
    setShowCookiePrompt(false);
  };

  const handleDownload = () => {
    console.log('clicked');
    if (canDownload) {
      const link = document.createElement('a');
      link.href = 'your_file_url';
      link.download = 'your_file_name';
      link.click();
    } else {
      setShowCookiePrompt(true);
    }
  };

  return (
    <div className="p-8 bg-black min-h-screen">
      {showCookiePrompt && (
        <div className="fixed top-0 right-0 z-50 bg-[#525B44] text-white p-4 flex flex-col items-end mt-4 mr-4 rounded-md">
          <p>
            We use cookies to enhance your experience. Please allow cookies.
          </p>
          <button
            onClick={handleCookiePermission}
            className="bg-white my-2 hover:bg-[#525B44] hover:text-white hover:border hover:border-white text-[#525B44] font-bold p-2 rounded"
          >
            Allow
          </button>
        </div>
      )}
      <div className="text-4xl flex justify-center font-bold  mb-16 fill-current text-[#D3F1DF] animate-colorChange  ">
        <h1 className="pr-2">Contact Me</h1>
      </div>

      <div className="flex flex-col lg:text-xl items-center justify-center gap-4  ">
        <div className=" w-9/12 sm:w-11/12 md:w-10/12 cursor-pointer lg:text-2xl  h-full flex flex-col items-center border-[#252525]">
          <div className="">
            <Image
              className="hidden md:block   lg:block opacity-70 ml-4 animate-pulse"
              src={contactImag}
              alt="contact-img"
              width={250}
              height={250}
            />
          </div>

          <div className=" mx-auto mt-5 flex flex-col  pr-2">
            <div className="flex flex-col items-center">
              <h1 className="text-[#85A98F] font-bold text-left mb-0 text-xl sm:text-3xl md:text-4xl lg:text-6xl ">
                Let&apos;s Work Together!
              </h1>

              <p className=" mt-2 text-base lg:text-xl  lg:w-3/5 m-2 p-4 ">
                Looking for an opportunity to work in a challenging position
                combining my skills in Software Engineering, which provides
                professional development, interesting experiences and personal
                growth.
                <br />
                <br />
              </p>
            </div>
            <span className="text-right">
              — I can&apos;t wait to hear all about it!
            </span>

            <p className="text-right text-xl sm:text-2xl md:text-4xl lg:text-6xl  font-signature text-[#85A98F] py-3">
              Saida Taj M R
            </p>
            <span className="flex flex-row justify-end   mb-6">
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
              <button onClick={handleDownload}>
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
          <div>
            © {year} Made with <FaHeart fill="red" className="inline" /> By{' '}
            <Link
              className="text-[#F29F58]"
              href="https://www.linkedin.com/in/saida-taj-m-r-b3656495/"
              target="_blank"
            >
              Saida
            </Link>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
