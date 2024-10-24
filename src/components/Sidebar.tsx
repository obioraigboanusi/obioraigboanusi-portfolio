import face from '../assets/face-1.jpeg';
import { keyInfo, socials, spokenLanguages, tools } from '../utils';
import CircularProgress from './CircularProgress';
import HorizontalProgress from './HorizontalProgress';

function Sidebar() {
  return (
    <aside>
      <div className="max-w-[250px] w-[30vw] max-h-screen h-screen flex flex-col relative border">
        <div className="flex flex-col items-center text-center py-10 sticky top-0 bg-[#fff]">
          <div className="w-[90px] h-[90px] mb-4 rounded-full">
            <img
              src={face}
              alt="Obiora Igboanusi"
              className="rounded-full h-full w-full object-cover"
            />
            <span className="relative flex h-3 w-3 top-0 left-full">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
          <div>
            <h2 className="font-bold">Obiora Igboanusi</h2>
            <p className="text-xs text-[#C7C7C7]">Software Developer</p>
          </div>
        </div>

        <div className="lg:px-7 grow overflow-y-hidden">
          <div className="h-full  overflow-y-auto no-scrollbar ">
            <div>
              <ul>
                {keyInfo.map(item => (
                  <li key={item.name} className="mb-3">
                    <div className="flex items-center justify-between">
                      <h3 className="mb-0 text-sm">{item.name}:</h3>
                      <span className="text-[#C7C7C7] text-xs mb-0">
                        {item.value}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="my-5" />
            <div>
              <h3 className="text-sm mb-3">Spoken Languages</h3>
              <ul className="flex justify-between">
                {spokenLanguages.map(({ name }) => (
                  <li key={name} className="mb-3 w-1/3">
                    <div className="flex flex-col items-center">
                      <div className="w-[30px] mb-3">
                        <CircularProgress />
                      </div>
                      <h4 className="mb-0 text-xs text-[#C7C7C7]">{name}</h4>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="my-5" />
            <div>
              <h3 className="text-sm mb-3">Top Tools</h3>
              <ul>
                {tools.map(({ name }) => (
                  <li key={name} className="mb-2">
                    <div>
                      <h4 className="text-xs text-[#C7C7C7] mb-1">{name}</h4>
                      <HorizontalProgress />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:px-7 py-5 sticky bottom-0 bg-white">
          <ul className="flex justify-between">
            {socials.map(({ name, url, icon }) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
