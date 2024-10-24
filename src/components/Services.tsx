import { services } from '../utils';

function Services() {
  return (
    <section>
      <div className="container">
        <header className="mb-6 text-center">
          <h2 className="text-4xl font-bold mb-3">Services</h2>
          <p className="">
            I provide a range of services to help bring your ideas to life,
            ensuring high-quality, responsive, and efficient solutions for your
            digital needs.
          </p>
        </header>
        <ul className="grid md:grid-cols-2 gap-6">
          {services.map(({ name, description }) => (
            <li key={name}>
              <div className="px-6 py-8 border">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {name}
                </h3>
                <p className="text-sm md:text-base text-[#C7C7C7]">
                  {description}
                </p>
                {/* <button className="btn-default mt-2">Order Now</button> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
