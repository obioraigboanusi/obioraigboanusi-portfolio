import { services } from '../utils';

function Services() {
  return (
    <section>
      <div className="container">
        <header className="mb-6 text-center">
          <h2 className="text-4xl font-bold mb-3">Services</h2>
          <p className="text-slate-500 text-base leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            adipisci.
          </p>
        </header>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ name, description }) => (
            <li key={name}>
              <div className="px-6 py-8 border">
                <h3 className="text-lg font-semibold mb-2">{name}</h3>
                <p className="text-sm text-slate-700">{description}</p>
                <button className="btn-default mt-2">Order Now</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
