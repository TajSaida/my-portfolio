'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RiHomeHeartFill } from 'react-icons/ri';
import { IoMdContact } from 'react-icons/io';
import { MdWorkHistory } from 'react-icons/md';
import { RiToolsFill } from 'react-icons/ri';
import { IoMailSharp } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { usePathname } from 'next/navigation';
const navData = [
  {
    id: 1,
    href: '/',
    name: 'HOME',
    icon: <RiHomeHeartFill className="w-7 h-7" />,
  },
  {
    id: 2,
    href: '/about',
    name: 'ABOUT',
    icon: <IoMdContact className="w-7 h-7" />,
  },
  {
    id: 3,
    href: '/experience',
    name: 'EXPERIENCE',
    icon: <MdWorkHistory className="w-7 h-7" />,
  },
  {
    id: 4,
    href: '/skills',
    name: 'SKILLS',
    icon: <RiToolsFill className="w-7 h-7" />,
  },
  {
    id: 5,
    href: '/contact',
    name: 'CONTACT',
    icon: <IoMailSharp className="w-7 h-7" />,
  },
];
interface UserInfo {
  name?: string;
  email?: string;
  city?: string;
  country?: string;
}
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const pathname = usePathname();
  const [userInfo, setUserInfo] = useState<UserInfo>({});

  useEffect(() => {
    const consent = localStorage.getItem('analyticsConsent');
    if (consent === null) {
      setShowCookieConsent(true);
    } else {
      setAnalyticsConsent(consent === 'true');
    }
  }, []);
  const fetchLocation = async (): Promise<{
    city?: string;
    country?: string;
  } | null> => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      if (response.ok) {
        const location = await response.json();
        return { city: location.city, country: location.country_name };
      }
    } catch (error) {
      console.error('Error fetching location:', error);
    }
    return null;
  };
  const sendToAnalytics = (userInfo: {
    name?: string;
    email?: string;
    city?: string;
    country?: string;
  }) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'user_info', {
        name: userInfo.name,
        email: userInfo.email,
        city: userInfo.city,
        country: userInfo.country,
      });
    } else {
      console.warn(
        'Google Analytics is not initialized or gtag is unavailable.'
      );
    }
  };

  const handleConsent = async (consent: boolean) => {
    setShowCookieConsent(false);
    if (consent) {
      const location = await fetchLocation();
      const cookies = parseCookies();

      const userDetails = {
        name: cookies.username || 'Guest',
        email: cookies.email || 'N/A',
        city: location?.city,
        country: location?.country,
      };

      console.log('User Details:', userDetails);
      setUserInfo(userDetails);
      sendToAnalytics(userDetails);
    } else {
      console.log('Cookie consent denied.');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const parseCookies = (): Record<string, string> => {
    const cookies = document.cookie.split('; ');
    const cookieData: Record<string, string> = {};
    cookies.forEach((cookie) => {
      const [key, value] = cookie.split('=');
      cookieData[key] = decodeURIComponent(value);
    });
    return cookieData;
  };
  return (
    <>
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0  bg-[#5A6C57] text-white p-4  z-50 sm:">
          <p className=" text-center text-base mb-2 ">
            We use cookies to enhance your experience. By continuing, you agree
            to our use of cookies.
          </p>
          <div className="flex space-x-4 justify-center">
            <button
              className="bg-[#D3F1DF] text-[#525B44] py-1 px-3 rounded hover:bg-[#5A6C57] hover:text-white"
              onClick={() => handleConsent(true)}
            >
              Allow
            </button>
            <button
              onClick={() => handleConsent(false)}
              className="bg-[#91AC8F] text-[#525B44] py-1 px-3 rounded hover:bg-[#5A6C57] hover:text-white"
            >
              Deny
            </button>
          </div>
        </div>
      )}

      <nav className="w-32 pr-8 flex-col items-end justify-center hidden lg:flex lg:justify-center md:flex md: gap-4 fixed right-0 top-1/2 transform -translate-y-1/2">
        {navData.map((data) => (
          <div
            key={data.id}
            className="flex items-center rounded-full bg-[#525B44] group transition-all duration-700 ease-in-out hover:bg-[#525B44]"
          >
            <p className="p-3 text-white text-lg font-medium hidden group-hover:inline-block transition-all duration-700 ease-in-out font-serif">
              {data.name}
            </p>
            <Link
              href={data.href}
              className={`${
                pathname === data.href ? 'bg-white text-[#525B44]' : ''
              } flex items-center justify-center w-14 h-14 rounded-full transition-all  group-hover:bg-[#91AC8F] duration-700 ease-in-out bg-[#525B44]`}
            >
              {data.icon}
            </Link>
          </div>
        ))}
      </nav>

      <nav className="bg-[#525B44] border-[#5A6C57] fixed w-full z-10 md:hidden">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex-1">
            <span className="self-center text-2xl font-semibold  whitespace-nowrap text-[#D3F1DF] mr-3 font-serif">
              Hi
            </span>
            <span className="self-center text-2xl font-semibold  whitespace-nowrap text-white font-serif">
              Welcome,
            </span>
          </div>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#B2C9AD] rounded-lg hover:bg-[#66785F] focus:outline-none focus:ring-2 focus:ring-[#66785F]  "
          >
            <RxHamburgerMenu className="w-20 h-20" color="D3F1DF" />
          </button>
          <div className="block w-full">
            {isMenuOpen && (
              <div className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-[#5A6C57] md:bg-[#5A6C57] border-[#D7D3BF]">
                {navData.map((data) => (
                  <Link
                    key={data.id}
                    href={data.href}
                    onClick={closeMenu}
                    className="block py-2 px-3 text-white rounded-full font-serif hover:bg-[#D7D3BF] md:hover:bg-transparent md:p-0 "
                  >
                    {data.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
