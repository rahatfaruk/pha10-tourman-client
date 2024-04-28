import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

function Banner({touristSpots}) {
  return (  
    <section className="px-4">
      <div className="max-w-screen-xl py-6 mx-auto animate__animated animate__fadeIn">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{clickable: true}}
          autoplay={true}
        >
          {touristSpots.slice(0,3).map(spot => (
            <SwiperSlide key={spot._id}>
              <div className='relative'>
                <figure>
                  <img src={spot.image} alt="" className='w-full h-96 md:h-[600px]  object-cover rounded-lg' /> 
                </figure>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-1 rounded-md text-center text-white py-4 px-8 md:px-12 bg-[rgba(0,0,0,.6)]'>
                  <h3 className='text-5xl md:text-7xl mb-3'>{spot.touristsSpotName}</h3>
                  <p className="text-xl">{spot.countryName}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Banner;