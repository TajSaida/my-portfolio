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
import { LuRocket } from 'react-icons/lu';
import { BiLogoTypescript } from 'react-icons/bi';
import { LiaNode } from 'react-icons/lia';
import {
  RiShieldCheckLine,
  RiBugLine,
  RiCheckboxCircleLine,
  RiNodeTree,
  RiDeviceLine,
} from 'react-icons/ri';
import {
  SiRecoil,
  SiNextdotjs,
  SiTailwindcss,
  SiSonarqube,
  SiJest,
  SiWebpack,
} from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';

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
        yoe: '7',
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
      // {
      //   id: 40,
      //   icon: <FaVuejs size={50} color="green" />,
      //   skill: 'Vue.js',
      //   yoe: '1',
      // },
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
    icon: <LuRocket size={50} color="#f0cf0a" />,
    info: (
      <div className="text-center md:text-left">
        <span className="text-[#00ff2f]">
          Optimized initial webpage loading{' '}
        </span>
        by 70% using advanced techniques, resulting in a significantly faster
        user experience.
      </div>
    ),
  },
  {
    id: 2,
    icon: <RiCheckboxCircleLine size={50} color="#f0cf0a" />,
    info: (
      <div className="text-center md:text-left">
        <span className="text-[#00ff2f]">
          Implemented comprehensive Jest test cases 70% of the{' '}
        </span>
        current application, including NGRX state management integration,
        ensuring application stability and maintainability.
      </div>
    ),
  },
  {
    id: 3,
    icon: <RiBugLine size={50} color="#f0cf0a" />,
    info: (
      <div className="text-center md:text-left">
        <span className="text-[#00ff2f]">
          Successfully integrated SonarQube{' '}
        </span>
        into two projects, effectively resolving major bugs and achieving a{' '}
        <span className="text-[#00ff2f]">
          30–40% reduction in code duplication
        </span>
        , promoting cleaner and more efficient code.
      </div>
    ),
  },
  {
    id: 4,
    icon: <RiShieldCheckLine size={50} color="#f0cf0a" />,
    info: (
      <div className="text-center md:text-left">
        I focused on security by{' '}
        <span className="text-[#00ff2f]">preventing clickjacking</span>,{' '}
        <span className="text-[#00ff2f]">
          tokens both before and after authentication
        </span>{' '}
        and fixed most of the security related issues.
      </div>
    ),
  },
  {
    id: 5,
    icon: <RiNodeTree size={50} color="#f0cf0a" />,
    info: (
      <div className="text-center md:text-left">
        Gained experience working with{' '}
        <span className="text-[#00ff2f]">
          monolithic and microservices architectures
        </span>
        , implementing{' '}
        <span className="text-[#00ff2f]">CSR and SSR strategies</span>, and
        performing{' '}
        <span className="text-[#00ff2f]">
          manual deployments on hosting platforms
        </span>
        .
      </div>
    ),
  },
  {
    id: 6,
    icon: <RiDeviceLine size={50} color="#f0cf0a" />,
    info: (
      <div className="text-center md:text-left">
        Developed{' '}
        <span className="text-[#00ff2f]">web-to-mobile adaptations</span> for
        iPad apps, optimizing{' '}
        <span className="text-[#00ff2f]">cross-platform user experience</span>{' '}
        in{' '}
        <span className="text-[#00ff2f]">fintech and medical applications</span>
        .
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
          'Built and maintained scalable Angular13+ applications using Angular Material, RXJS, and NGRX Store, enhancing UI  performance by 35% ',
      },
      {
        id: 12,
        details:
          'Upgraded Angular from version 8 to 18, modernizing legacy code and improving developer efficiency.',
      },
      {
        id: 13,
        details:
          'Upgraded Node.js version and adjusted associated CI/CD pipelines, Docker configurations, and dependencies.',
      },

      {
        id: 16,
        details:
          'Separated Web UI from a monolithic architecture, refactored into microservices, and streamlined deployments',
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
          'Migrated legacy UIs to Angular10+, reducing page load time by 45% through named chunks and lazy loading.',
      },
      {
        id: 22,
        details:
          'Developed and integrated custom Angular directives and services, streamlining component reuse and development time.',
      },
      {
        id: 23,
        details:
          'Designed responsive UIs adhering to WCAG and cross-browser standards, improving mobile usability by 40% .',
      },
      {
        id: 14,
        details:
          'Applied NGRX state management to complex modules, resulting in better data consistency and maintainability .',
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
          'Designed and implemented user-facing features in Angular8, contributing to a 22% boost in user retention.',
      },
      {
        id: 32,
        details:
          'Conducted unit testing using  jest identifying bugs early and improving release reliability.',
      },
      {
        id: 33,
        details:
          'Integrated RESTful APIs using Angular services, ensuring seamless user experience across modules ',
      },
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
          'Assisted in frontend development using JavaScript and Bootstrap, implementing dynamic UI elements .',
      },
      {
        id: 42,
        details:
          'Wrote documentation and trained junior developers on HTML/CSS best practices.',
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
