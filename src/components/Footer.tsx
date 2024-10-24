import { Link } from 'react-router-dom';
import { socials } from '../utils';

interface IPage {
  name: string;
  url: string;
}
const pages: IPage[] = [
  // {
  //   name: 'About',
  //   url: '/about',
  // },
  // {
  //   name: 'Blog',
  //   url: '/blog',
  // },
  // {
  //   name: 'Portfolio',
  //   url: '/projects',
  // },
  // {
  //   name: 'Education',
  //   url: '/education',
  // },
];

function Footer() {
  return (
    <footer className="relative border-t border-gray-600">
      <div className="container">
        <div className="py-5  ">
          <p className="text-base text-center text-gray-400">
            ©{new Date().getFullYear()} Obiora Igboanusi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
