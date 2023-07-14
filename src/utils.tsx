import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import work1 from "./assets/work-1.jpg"

export const keyInfo = [
  { name: 'Residence', value: 'Nigeria' },
  { name: 'City', value: 'FCT, Abuja 901101' },
];

export const spokenLanguages = [
  { name: 'English', value: 80 },
  { name: 'Igbo', value: 100 },
  { name: 'German', value: 45 },
];

export const socials = [
  {
    name: 'LinkedIn',
    url: 'http://www.linkedin.com/in/obioraigboanusi',
    icon: <FaLinkedin />,
  },
  {
    name: 'GitHub',
    url: 'http://github.com/obioraigboanusi',
    icon: <FaGithub />,
  },
  {
    name: 'Twitter',
    url: 'http://twitter.com/igboanusiobiora',
    icon: <FaTwitter />,
  },
  { name: 'Email', url: 'mailto:obioraigboanusi@gmail.com', icon: <HiMail /> },
];

export const tools = [
  {
    name: 'React.js',
    value: 9,
  },
  {
    name: 'Next.js',
    value: 10,
  },
  {
    name: 'Node.js',
    value: 10,
  },
  {
    name: 'TypeScript',
    value: 10,
  },
  {
    name: 'Python',
    value: 9,
  },
  {
    name: 'Django',
    value: 10,
  },
  {
    name: 'JavaScript',
    value: 10,
  },
];

export const attributes = [
  { value: '10', title: 'Years Experience', suffix: '+' },
  { value: '143', title: 'Completed Projects', suffix: '' },
  { value: '114', title: 'Happy Customers', suffix: '' },
  { value: '20', title: 'Honors and Awards', suffix: '+' },
];

export const services = [
  {
    name: 'Front-End Development',
    description:
      'lorem ipsum dolor sit amet, consectetur adip eu nonummy just   et accusam et. Lorem ipsum dolor sit amet, consectetur',
  },
  {
    name: 'Backend Development',
    description:
      'lorem ipsum dolor sit amet, consectetur adip eu nonummy just   et accusam et. Lorem ipsum dolor sit amet, consectetur',
  },
  {
    name: 'Mobile App Development',
    description:
      'lorem ipsum dolor sit amet, consectetur adip eu nonummy just   et accusam et. Lorem ipsum dolor sit amet, consectetur',
  },
  {
    name: 'Career Coaching',
    description:
      'lorem ipsum dolor sit amet, consectetur adip eu nonummy just   et accusam et. Lorem ipsum dolor sit amet, consectetur',
  },
  {
    name: 'Bug Fixes',
    description:
      'lorem ipsum dolor sit amet, consectetur adip eu nonummy just   et accusam et. Lorem ipsum dolor sit amet, consectetur',
  },
  {
    name: 'Maintenance & Optimization',
    description:
      'lorem ipsum dolor sit amet, consectetur adip eu nonummy just   et accusam et. Lorem ipsum dolor sit amet, consectetur',
  },
];

const { fullstack, frontend, backend, mobileApp } = {
  fullstack: 'Fullstack',
  frontend: 'Frontend',
  backend: 'Backend',
  mobileApp: 'Mobile Application',
};

export const projects = [
  {
    title: 'Project title',
    description: 'Sit amet, consectetur adipisicing elit. Quas, architecto.',
    bannerUrl:
      work1,
    categories: [frontend],
  },
  {
    title: 'Project title',
    description: 'Sit amet, consectetur adipisicing elit. Quas, architecto.',
    bannerUrl:
      work1,
    categories: [backend],
  },
  {
    title: 'Project title',
    description: 'Sit amet, consectetur adipisicing elit. Quas, architecto.',
    bannerUrl:
      work1,
    categories: [frontend],
  },
  {
    title: 'Project title',
    description: 'Sit amet, consectetur adipisicing elit. Quas, architecto.',
    bannerUrl:
      work1,
    categories: [frontend],
  },
  {
    title: 'Project title',
    description: 'Sit amet, consectetur adipisicing elit. Quas, architecto.',
    bannerUrl:
      work1,
    categories: [frontend],
  },
  {
    title: 'Project title',
    description: 'Sit amet, consectetur adipisicing elit. Quas, architecto.',
    bannerUrl:
      work1,
    categories: [backend],
  },
  {
    title: 'Project title',
    description: 'Sit amet, consectetur adipisicing elit. Quas, architecto.',
    bannerUrl:
      work1,
    categories: [fullstack],
  },
  {
    title: 'Project title',
    description: 'Sit amet, consectetur adipisicing elit. Quas, architecto.',
    bannerUrl:
      work1,
    categories: [frontend],
  },
  {
    title: 'Project title',
    description: 'Sit amet, consectetur adipisicing elit. Quas, architecto.',
    bannerUrl:
      work1,
    categories: [mobileApp],
  },
];
