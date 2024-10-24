import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonials } from '../utils';
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {
  return (
    <section>
      <div className="container">
        <header className="mb-8">
          <h2 className="text-4xl font-bold mb-2">Portfolio</h2>
          <p className="">
            Don&apos;t just take my word for it—here&apos;s what my clients have
            to say about my work:
          </p>
        </header>
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            // disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          loop={true}
          // breakpoints={{
          //   320: {
          //     slidesPerView: 1,
          //     spaceBetween: 10,
          //   },
          //   768: {
          //     slidesPerView: 'auto',
          //     spaceBetween: 30,
          //   },
          // }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="">
              <div className="inline-flex flex-col justify-between bg-[#1A1A1A] rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 h-full">
                <p className="text-[#C7C7C7] italic mb-4">
                  "{testimonial.feedback}"
                </p>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-[#C7C7C7]">{testimonial.title}</p>
                  <p className="text-[#C7C7C7]">
                    {testimonial.platform} {testimonial.country}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
