import { projects } from '../utils';

function Portfolio() {
  return (
    <section>
      <div className="px-20">
        <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, description, bannerUrl }, i) => (
            <li key={title + i}>
              <div className="group relative overflow-hidden min-h-[300px]">
                <img
                  src={bannerUrl}
                  alt={title}
                  className="absolute object-cover h-full hover:scale-110 transition-all duration-500"
                />
                <div className="absolute bottom-[-100%] group-hover:bottom-0 transition-all duration-500 bg-[#fff] w-full p-2 ">
                  <h3 className="text-base font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-slate-700">{description}</p>
                  <button className="font-semibold my-1 text-sm">
                    Order Now
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
