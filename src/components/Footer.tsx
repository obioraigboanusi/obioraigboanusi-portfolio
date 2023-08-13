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
    <footer className="relative bg-[rgb(226,232,240)]">
      <div className="container">
        <div className="pb-5 pt-10">
          {pages.length > 0 && (
            <nav className="mb-5">
              <ul className="flex flex-wrap justify-center items-center gap-4">
                {pages.map(({ name, url }: IPage) => (
                  <li key={name}>
                    <Link
                      to={url}
                      className="text-base leading-6 text-gray-500 hover:text-gray-900"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <ul className="flex justify-center items-center gap-5 mt-3 mb-5">
            {socials.map(({ name, url, icon }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-slate-500 hover:text-slate-700"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-base text-center leading-6 text-center text-gray-400">
            © 2021 Obiora Igboanusi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
