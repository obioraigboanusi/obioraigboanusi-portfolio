import face2 from '../assets/avatar.png';
import { attributes } from '../utils';

function Hero() {
  return (
    <header>
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-5 py-5 md:py-20">
          <div className="">
            <div className="space-y-10">
              <div>
                <h1 className="text-3xl lg:text-4xl mb-3 font-black">
                  Hi, I'm Obiora Igboanusi
                </h1>
                <p className="text-2xl lg:text-4xl mb-6 font-black text-purple-800">
                  Frontend Developer
                </p>
                <p className="text-[#C7C7C7] text-lg">
                  I craft seamless, intuitive digital experiences that bring
                  ideas to life and keep users engaged.
                </p>
              </div>
              <div className="flex gap-5">
                <button className="btn btn-primary">Learn More</button>
                <button className="btn btn-default">Download CV</button>
              </div>
            </div>
          </div>
          <div className="max-w-[300px] lg:max-w-[170px] max-h-[300px] lg:max-h-[170px] rounded-lg bg-blue-100 border-2">
            <img
              src={face2}
              alt="Obiora Igboanusi"
              className=" rounded-lg object-center"
            />
          </div>
        </div>
        <div className="mt-16">
          <ul className="flex justify-between items-center flex-wrap">
            {attributes.map(({ title, value, suffix }) => (
              <li key={title}>
                <div className="flex flex-col gap-2">
                  <span className="text-[#FFC107] font-bold text-2xl mb-0">
                    {value + suffix}
                  </span>
                  <span className="mb-0 font-medium text-lg">{title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Hero;
