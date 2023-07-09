import face2 from '../assets/face-2.png';
import { attributes } from '../utils';

function Hero() {
  return (
    <header>
      <div className="px-10 py-16">
        <div className="flex items-center gap-4">
          <div className="w-1/2">
            <div>
              <h1 className="lg:text-5xl mb-3">
                Discover my Amazing Art Space!
              </h1>
              <p className="text-slate-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus debitis facilis, eaque eveniet aliquid provident?
              </p>
              <div className="flex gap-4 mt-5">
                <button className="btn btn-primary">Learn More</button>
                <button className="btn btn-default">Download CV</button>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src={face2} alt="Obiora Igboanusi" className="w-1/2" />
          </div>
        </div>
        <div className="mt-16">
          <ul className="flex justify-between items-center">
            {attributes.map(({ title, value, suffix }) => (
              <li key={title}>
                <div className="flex gap-4 items-center">
                  <span className="text-[#FFC107] font-bold text-2xl mb-0">
                    {value + suffix}
                  </span>
                  <span className="mb-0">{title}</span>
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
