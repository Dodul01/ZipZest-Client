import { useLoaderData, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';



const BrandProducts = () => {
  const { brandName } = useParams();
  const data = useLoaderData();
  const filterAds = data.filter(item => item.brandName.toLowerCase() === brandName);
  const adsArray = filterAds[0].adsThumbnails;

  return (
    <div className='min-h-screen max-w-7xl mx-auto '>
      <div className='mx-4'>

        <Swiper
          direction='vertical'
          spaceBetween={30}
          centeredSlides={true}
          mousewheel={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[40vh] rounded-lg"
        >
          {adsArray.map((ads) => {
            return <SwiperSlide>
              <img className='w-full h-full' src={ads} alt="" />
            </SwiperSlide>
          })}
        </Swiper>
      </div>


    </div >
  )
}

export default BrandProducts
