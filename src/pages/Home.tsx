import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';

function Home() {
  return (
    <section>
      <div className="max-h-screen overflow-y-scroll no-scrollbar">
        <Hero />
        <Services />
        <Portfolio />
      </div>
    </section>
  );
}

export default Home;
