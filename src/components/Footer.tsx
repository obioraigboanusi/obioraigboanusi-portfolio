import { Link } from 'react-router-dom';
import { socials } from '../utils';

interface IPage {
  name: string;
  url: string;
}
const pages: IPage[] = [
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'Portfolio',
    url: '/projects',
  },
  {
    name: 'Education',
    url: '/education',
  },
];

function Footer() {
  return (
    <footer className="relative bg-[rgb(226,232,240)]">
      <div className="container">
        <div className="lg:flex justify-between items-end py-10">
          <div>
            <h2 className="text-3xl font-semibold ">Let's keep in touch!</h2>
            <p className="text-lg leading-6 mt-0 mb-3">
              Find us on any of these platforms, we respond 1-2 business days.
            </p>
            <ul className="flex gap-5 mt-3">
              {socials.map(({ name, url, icon }) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-slate-500 hover:text-slate-700"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <nav>
              <ul className="flex flex-wrap justify-center gap-4">
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
          </div>
        </div>
        <hr className="border-slate-300"></hr>
        <div className="py-5">
          <p className="text-sm text-center leading-6 text-center text-gray-400">
            © 2021 Obiora Igboanusi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
