import { markets, socials } from '../utils';

interface ISocial {
  name: string;
  url: string;
  icon: JSX.Element;
}

const CallToAction = () => {
  const email = 'obiora.igboanusi@gmail.com';

  return (
    <section>
      <div className="container">
        <div className="grid md:grid-cols-2">
          <div className="">
            <h2 className="text-3xl font-bold uppercase mb-4">
              Let&apos;s connect <br />
              and Collaborate
            </h2>
            <p className="text-lg mb-[40px]">
              Say hello at
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-[0.5em] hover:text-primary text-[#77ba1e]"
              >
                {email}
              </a>
              <br /> For more info, here&apos;s my{' '}
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary text-[#77ba1e]"
              >
                resume
              </a>
            </p>
            <div className="flex item-center gap-6">
              {socials.map(({ name, url, icon }: ISocial) => (
                <a
                  href={url}
                  className="text-primary rounded-lg  text-2xl  transition-all duration-300 ease-in-out"
                >
                  <span> {icon}</span> <span className="sr-only">{name}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="pb-4 font-bold">Buy my Services</p>
            <ul className="space-y-4">
              {markets.map(item => (
                <li>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#222222] rounded-md  relative h-[50px] p-[3px] flex group hover:bg-[#77ba1e5a] transition-all duration-150 ease-in-out"
                  >
                    <div className=" w-[50px] h-full rounded flex items-center justify-center bg-[#4f8a03a7]">
                      <span className="text-2xl"> {item.icon}</span>
                    </div>
                    <div className="flex items-center pl-4">
                      <span className="group-hover:text-primary text-[#77ba1e] font-semibold ">
                        {item.description}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
