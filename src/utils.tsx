import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { TbBrandFiverr } from 'react-icons/tb';
import aonomy from './assets/aonomy.png';
import cherrystore from './assets/cherrystore.png';
import digimakers from './assets/digimakers.png';
import easybank from './assets/easybank.png';
import chatApp from './assets/chat-app.png';
import heatMap from './assets/transactions-carter.png';
import githubUsersOrgs from './assets/github-uo.png';
import wouldYou from './assets/would-you.png';
import myReads from './assets/myreads.png';
import countDownTimer from './assets/countdowntimer.png';

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
  { name: 'Email', url: 'obioraigboanusi@gmail.com', icon: <HiMail /> },
  {
    name: 'Fiverr',
    url: 'https://www.fiverr.com/obioraigboanusi',
    icon: <TbBrandFiverr />,
  },
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
  { value: '4', title: 'Years Experience', suffix: '+' },
  { value: '65', title: 'Completed Projects', suffix: '+' },
  { value: '45', title: 'Happy Customers', suffix: '+' },
  { value: '10', title: 'Honors and Awards', suffix: '+' },
];

export const services = [
  {
    name: 'Front-End Development',
    description:
      'I specialize in building user-friendly and responsive web interfaces using modern technologies such as React, Angular, and TypeScript. From static websites to dynamic, interactive platforms, I ensure seamless performance across all devices.Transform your design ideas into fully functional and visually appealing digital experiences.',
  },
  {
    name: 'Backend Development',
    description:
      "From database design to API integration, I build secure and scalable backends tailored to your project's specific needs. Leveraging technologies like Node.js, Express, and MongoDB, I create robust systems that ensure optimal performance and security. Power your application with a reliable backend infrastructure",
  },
  {
    name: 'Mobile App Development',
    description:
      "Whether you're targeting Android, iOS, or both, I create cross-platform mobile apps with React Native. These apps are designed to deliver smooth performance, intuitive user interfaces, and a consistent experience across different devices. Reach your audience anywhere with powerful mobile applications.",
  },
  {
    name: 'Career Coaching',
    description:
      'Looking to break into tech or elevate your software development career? I offer personalized career coaching sessions to guide you through building your portfolio, improving your coding skills, or navigating job opportunities in the tech industry.Unlock your potential with tailored career guidance and advice.',
  },
  {
    name: 'Bug Fixes',
    description:
      'Need urgent bug fixes for your web or mobile application? I offer fast and efficient troubleshooting services to identify and resolve issues, ensuring your platform runs smoothly without disruptions. Resolve issues quickly and keep your project running efficiently.',
  },
  {
    name: 'Maintenance & Optimization',
    description:
      "Keep your website or application running smoothly with ongoing maintenance and performance optimization services. I monitor, update, and fine-tune your system to ensure it's always at peak performance, scalable, and secure. Ensure long-term success with regular maintenance and optimization.",
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
    categories: [frontend],
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
    bannerUrl: heatMap,
    categories: [frontend],
    url: 'https://transactions-heatmap.netlify.app',
  },
  {
    title: 'GitHub Users and Organizations',
    description:
      "This app allows user to view list of GitHub users' and organizations' profiles, search by username, and view the details of a profile with public repositories.",
    bannerUrl: githubUsersOrgs,
    categories: [frontend],
    url: 'https://github-users-and-organisations.netlify.app',
  },
  {
    title: 'React Countdown Timer',
    description:
      'A countdown timer that counts down in seconds, minutes, and hours.',
    bannerUrl: countDownTimer,
    categories: [frontend],
    url: 'https://countdown-timer-obiora.netlify.app',
  },
  {
    title: 'React Chat App',
    description:
      'An app that allows users to send and receive messages on different tabs of the same browser.',
    bannerUrl: chatApp,
    categories: [frontend],
    url: 'https://channel-chat-app.netlify.app',
  },
  {
    title: 'Would-You-Rather Game',
    description:
      'Would-You-Rather is a React and Redux Application that allows a user to play the "Would You Rather?" Game.',
    bannerUrl: wouldYou,
    categories: [frontend],
    url: 'https://would-you-rather-proj.netlify.app',
  },
  {
    title: 'MyReads',
    description:
      'MyReads is a React Application that help users manage their books.',
    bannerUrl: myReads,
    categories: [frontend],
    url: 'https://myreads-proj.netlify.app',
  },
];

const notWorking = [
  {
    title: 'Last Postscript',
    description:
      'A celebration of life company, storing everything that is important for the world to remember you by.',
    skills: ' Next.js, Node.js, AWS, REST API',
    bannerUrl: myReads,
    categories: [fullstack],
    url: 'http://last-postscript-frontend.herokuapp.com',
    timeline: '2022',
  },
  {
    title: 'Poppers',
    description:
      'Poppers is a place to discover new dresses, lehenga, and everything in fashion, beauty, and lifestyle at one place and find new styles with honest reviews about the store and outfits!',
    skills: 'Next.js, GraphSCM, AWS, GraphQL',
    bannerUrl: myReads,
    categories: [fullstack],
    url: 'https://www.poppers.link/',
    timeline: '2022',
  },
  {
    title: 'Kaizen Apps Portfolio',
    description:
      'It is a portfolio website built with React, Bootstrap and CSS, It enables users to know more about Kaizen Apps, their services, previous works and contact them.',
    skills: 'React',
    bannerUrl: myReads,
    categories: [frontend],
    url: 'https://www.poppers.link/',
    timeline: '2022',
  },
  {
    title: 'Kondo',
    description: `Kondo is a real estate e-commerce website that enables users to view list of homes, details of a home, schedule to tour, apply to rent a home, list properties, pay for rent, and many favorites and property applications.

Tools Used: 
 - Next.js
 - React Hooks
 - TypeScript
 - Nest.js
 - Redux Toolkit
 - Styled Components
 - CSS3`,
    skills: 'React',
    bannerUrl: myReads,
    categories: [frontend],
    url: 'https://www.poppers.link/',
    timeline: '2021',
  },
];

export const serviceAddOns = [
  'Support 24/7',
  'Fast Delivery',
  'Dependability',
  'Excellent Communication',
  'Dependability',
  'Excellent Communication',
  'Excellent Communication',
];
