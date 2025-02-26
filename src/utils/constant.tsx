import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaJira,
} from 'react-icons/fa';
import { TbBrandRedux, TbBrandAngular, TbBrandBitbucket } from 'react-icons/tb';
import { FaVuejs } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { LiaNode } from 'react-icons/lia';
import {
  SiRecoil,
  SiNextdotjs,
  SiTailwindcss,
  SiSonarqube,
  SiJest,
  SiWebpack,
} from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';
import { GrDocumentTest } from 'react-icons/gr';
import { AiOutlineSecurityScan } from 'react-icons/ai';
import { LuFileBadge2 } from 'react-icons/lu';
import { BsFileEarmarkBarGraph } from 'react-icons/bs';

interface Skill {
  id: number;
  icon: React.ReactNode;
  skill: string;
  yoe: string;
}

interface CategorySkills {
  category: string;
  skills: Skill[];
}
interface AboutMe {
  id: number;
  icon: React.ReactNode;
  info: React.ReactNode;
}
interface Info {
  id: number;
  details: string;
}
interface ExperienceData {
  id: number;
  date: string;
  company: string;
  role: string;
  info: Info[];
  institute?: string;
  location?: string;
  addMrgin?: boolean;
  addMrginExp?: boolean;
}
interface Education {
  id: string;
  institute: string;
  location: string;
  date: string;
  company?: string;
  role?: string;
  addMrginExp?: boolean;
  info?: Info[];
  addMrgin?: boolean;
}

export const options: string[] = ['Experience', 'Education'];

export const skills: CategorySkills[] = [
  {
    category: 'Languages',
    skills: [
      {
        id: 1,
        icon: <FaHtml5 size={50} color="#ff5722" />,
        skill: 'HTML',
        yoe: '7',
      },
      {
        id: 2,
        icon: <FaCss3Alt size={50} color="#0789b9" />,
        skill: 'CSS',
        yoe: '7',
      },
      {
        id: 3,
        icon: <FaJsSquare size={45} color="#f0cf0a" />,
        skill: 'JavaScript',
        yoe: '7',
      },
    ],
  },
  {
    category: 'Libraries',
    skills: [
      {
        id: 4,
        icon: <FaReact size={50} color="#61dafb" />,
        skill: 'React',
        yoe: '6',
      },
      {
        id: 5,
        icon: <TbBrandRedux size={50} color="#764abc" />,
        skill: 'Redux',
        yoe: '7',
      },
      {
        id: 6,
        icon: <BiLogoTypescript size={50} color="#3178c6" />,
        skill: 'TypeScript',
        yoe: '3',
      },
      {
        id: 18,
        icon: <SiJest size={45} color="#f0cf0a" />,
        skill: 'Jest',
        yoe: '5',
      },
      {
        id: 18,
        icon: <LiaNode size={45} color="green" />,
        skill: 'Node.js',
        yoe: '1',
      },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      {
        id: 40,
        icon: <FaVuejs size={50} color="green" />,
        skill: 'Vue.js',
        yoe: '1',
      },
      {
        id: 8,
        icon: <TbBrandAngular size={50} color="#dd0031" />,
        skill: 'Angular',
        yoe: '1.5',
      },
      {
        id: 9,
        icon: <SiNextdotjs size={45} color="green" />,
        skill: 'Next.js',
        yoe: '1',
      },
      {
        id: 10,
        icon: <SiTailwindcss size={45} color="#38b2ac" />,
        skill: 'Tailwind CSS',
        yoe: '2',
      },
      {
        id: 11,
        icon: <FaBootstrap size={50} color="#563d7c" />,
        skill: 'Bootstrap',
        yoe: '3',
      },
    ],
  },
  {
    category: 'Tools',
    skills: [
      {
        id: 12,
        icon: <FaGitAlt size={50} color="#f05033" />,
        skill: 'Git',
        yoe: '6',
      },
      {
        id: 13,
        icon: <TbBrandBitbucket size={45} color="#2684ff" />,
        skill: 'Bitbucket',
        yoe: '4',
      },
      {
        id: 14,
        icon: <VscAzureDevops size={45} color="#0078d7" />,
        skill: 'Azure DevOps',
        yoe: '3',
      },
      {
        id: 15,
        icon: <FaJira size={50} color="#0052cc" />,
        skill: 'Jira',
        yoe: '6',
      },
    ],
  },
  {
    category: 'Others',
    skills: [
      {
        id: 19,
        icon: <SiSonarqube size={40} color="#0052cc" />,
        skill: 'SonarQube',
        yoe: '5',
      },
      {
        id: 20,
        icon: <SiWebpack size={40} color="#61dafb" />,
        skill: 'WebPack',
        yoe: '5',
      },
      {
        id: 7,
        icon: <SiRecoil size={50} color="#61dafb" />,
        skill: 'Recoil',
        yoe: '2',
      },
    ],
  },
];

export const aboutMe: AboutMe[] = [
  {
    id: 1,
    icon: <BsFileEarmarkBarGraph size={50} color="#f0cf0a" />,
    info: (
      <div className="text-center md:text-left">
        <span className="text-[#00ff2f]">
          Optimized initial webpage loading{' '}
        </span>
        by 70% using advanced techniques in React.js and using webpack,
        resulting in a significantly faster user experience.{' '}
      </div>
    ),
  },
  {
    id: 2,
    icon: <GrDocumentTest className="scale-x-75" size={50} color="#f0cf0a" />,
    info: (
      <div className="text-center md:text-left">
        <span className="text-[#00ff2f]">
          Implemented comprehensive Jest test cases 70% of the{' '}
        </span>
        current application, including Redux integration, ensuring application
        stability and maintainability.
      </div>
    ),
  },
  {
    id: 3,
    icon: (
      <LuFileBadge2
        className="transform scale-x-75"
        size={60}
        color="#f0cf0a"
      />
    ),
    info: (
      <div className="text-center md:text-left">
        <span className="text-[#00ff2f]">
          Successfully integrated SonarQube{' '}
        </span>
        into two projects, effectively resolving major bugs and achieving a{' '}
        <span className="text-[#00ff2f]">
          30-40% reduction in code duplication
        </span>
        ,promoting cleaner and more efficient code.
      </div>
    ),
  },
  {
    id: 4,
    icon: <AiOutlineSecurityScan size={60} color="#f0cf0a" />,
    info: (
      <div className="text-center md:text-left">
        I focused on security by{' '}
        <span className="text-[#00ff2f]">preventing clickjacking</span> ,
        <span className="text-[#00ff2f]">
          tokens both before and after authentication
        </span>{' '}
        and fixed most of the security related issues.
      </div>
    ),
  },
];
export const experienceData: ExperienceData[] = [
  {
    id: 1,
    date: 'Dec 2021 - Current | Bengaluru, India',
    company: 'Finastra',
    role: 'Senior UI Developer',
    info: [
      {
        id: 11,
        details:
          'Communicated with product managers and UX designers to translate project requirements and business objectives into polished user interfaces',
      },
      {
        id: 12,
        details:
          'Improved and expanded project platforms using React js to develop rich User Interfaces.',
      },
      {
        id: 13,
        details:
          'Collaborated with teammates to deliver valuable features meeting business and customer needs.',
      },

      {
        id: 16,
        details:
          'Worked in an Agile team, using Azure DevOps for task tracking and actively participated in daily sync-up calls for team alignment',
      },
    ],
  },

  {
    id: 2,
    date: 'Aug 2020 - Dec 2021 | Bengaluru, India',
    company: 'Cognizant',
    role: 'Software Developer',
    info: [
      {
        id: 21,
        details:
          'Worked closely with global customers spanning to troubleshoot software problems.',
      },
      {
        id: 22,
        details: 'I&apos;m skilled at updating build files in CI/CD pipelines.',
      },
      {
        id: 23,
        details:
          'Applied emerging technologies to update and maintain site applicability.',
      },
      {
        id: 14,
        details:
          'Revised, modularized, and updated old code bases to modern development standards, reducing operating costs and improving functionality.',
      },
    ],
  },
  {
    id: 3,
    date: 'Feb 2019 - Jul 2020 | Bengaluru, India',
    company: 'Medtronic',
    role: 'Associate IT Support Developer',
    info: [
      {
        id: 31,
        details:
          'Developed and managed the frontend e-commerce platform using riot js.',
      },
      {
        id: 32,
        details:
          'Worked on three web applications targeting customers, selling vendors, and admin users and created global components as per the requirement.',
      },
      // {
      //   id: 33,
      //   details:
      //     'Improved the response time by 20% by updating components to pure components and imported required components from library / utilites',
      // },
    ],
  },
  {
    id: 4,
    date: 'Jul 2016 - Feb 2019 | Bengaluru, India',
    company: 'CGI',
    role: 'Associate System Engineer',
    addMrginExp: true,
    info: [
      {
        id: 41,
        details:
          'Performed unit testing of web applications and troubleshoot issues.',
      },
      {
        id: 42,
        details:
          'Developed user-friendly components with validation and error handling.',
      },
      {
        id: 15,
        details:
          'Resolve defects/bugs during QA testing, pre-production, production, and post-release patches',
      },
    ],
  },
];

export const education: Education[] = [
  {
    id: '1',
    institute: `SIETK (Bachelor of ECE)`.padEnd(40, ' '),
    location: 'Puttur , Andhra Pradesh , India',
    date: 'Sep 2011 - May 2015',
    addMrgin: true,
  },
  {
    id: '2',
    institute: 'Sri Chaitanya Junior Collage (MPC)',
    location: 'Tirupati , Andhra Pradesh , India',
    date: 'Aug 2009 - May 2011',
  },
  {
    id: '3',
    institute: 'Viswam Talent School (SSC)',
    location: 'Tirupati , Andhra Pradesh , India',
    date: 'Jun 2007 - May 2009',
  },
];
