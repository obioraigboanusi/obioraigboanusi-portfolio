import CallToAction from '../components/CallToAction';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <section>
      <Hero />
      {/* <Services /> */}
      <Portfolio />
      <Testimonials />
      <CallToAction />
    </section>
  );
}

export default Home;
