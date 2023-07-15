import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import aonomy from './assets/aonomy.png';
import cherrystore from './assets/cherrystore.png';
import digimakers from './assets/digimakers.png';
import easybank from './assets/easybank.png';

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
    title: 'Aonomy',
    description:
      'A website that helps clients in clearing goods in and out of Nigerian ports.',
    bannerUrl: aonomy,
    categories: [frontend],
    url: 'https://www.aonomy.ng/',
  },
  {
    title: 'DigiMakers',
    description:
      'The project involves design to development the online presence for a digital agency.',
    bannerUrl: digimakers,
    categories: [backend],
    url: 'https://luxt-tech-javascript-peer2.github.io/Digimakers-Landing-Page/',
  },
  {
    title: 'Cherry Afican Store',
    description:
      'An e-commerce site for marketing african food stuffs in the UK.',
    bannerUrl: cherrystore,
    categories: [frontend],
    url: 'https://cherrysafricanstore.com/',
  },
  {
    title: 'EasyBank Landing Page',
    description: 'A responsive implementation of easybank landing page.',
    bannerUrl: easybank,
    categories: [frontend],
    url: 'https://obioraigboanusi.github.io/EasyBank-Landing-Page/',
  },
  {
    title: 'Transactions HeatMap Chart',
    description:
      'A from-crash implementation of heatmap(Matrix chart) to visualize transactions data and see when people transact the most throughout a year.',
    bannerUrl: easybank,
    categories: [frontend],
    url: 'https://obioraigboanusi.github.io/EasyBank-Landing-Page/',
  },
  {
    title: 'GitHub Users and Organizations',
    description:
      "This app allows user to view list of GitHub users' and organizations' profiles, search by username, and view the details of a profile with public repositories.",
    bannerUrl: easybank,
    categories: [frontend],
    url: 'https://obioraigboanusi.github.io/EasyBank-Landing-Page/',
  },
  {
    title: 'React Countdown Timer',
    description:
      'A countdown timer that counts down in seconds, minutes, and hours.',
    bannerUrl: easybank,
    categories: [frontend],
    url: 'https://obioraigboanusi.github.io/EasyBank-Landing-Page/',
  },
  {
    title: 'React Chat App',
    description:
      'An app that allows users to send and receive messages on different tabs of the same browser.',
    bannerUrl: easybank,
    categories: [frontend],
    url: 'https://obioraigboanusi.github.io/EasyBank-Landing-Page/',
  },
  {
    title: 'Would-You-Rather Game',
    description:
      'Would-You-Rather is a React and Redux Application that allows a user to play the "Would You Rather?" Game.',
    bannerUrl: easybank,
    categories: [frontend],
    url: 'https://obioraigboanusi.github.io/EasyBank-Landing-Page/',
  },
  {
    title: 'MyReads',
    description:
      'MyReads is a React Application that help users manage their books.',
    bannerUrl: easybank,
    categories: [frontend],
    url: 'https://obioraigboanusi.github.io/EasyBank-Landing-Page/',
  },
];
