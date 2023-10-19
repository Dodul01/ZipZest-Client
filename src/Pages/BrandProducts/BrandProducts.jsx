import { Link, useLoaderData, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';



const BrandProducts = () => {
  const { brandName } = useParams();
  const data = useLoaderData();
  const filterAds = data.filter(item => item.brandName.toLowerCase() === brandName);
  const adsArray = filterAds[0].adsThumbnails;
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(result => {
        const products = result.filter(product => product.brandName.toLowerCase() === brandName);
        setProducts(products);
      })
  }, [])

  return (
    <div className='min-h-screen max-w-7xl mx-auto '>
      <div className='mx-4'>
        <Swiper
          direction='vertical'
          spaceBetween={30}
          centeredSlides={true}
          mousewheel={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[40vh] w-[87vw] rounded-lg"
        >
          {/* {adsArray.map((ads) => {
            return <div>
              <SwiperSlide>
                <img className='w-full h-full' src={ads} alt="" />
              </SwiperSlide>
            </div>
          })} */}

          <SwiperSlide>
            <img className='w-full h-full' src={adsArray[0]} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full h-full' src={adsArray[1]} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full h-full' src={adsArray[2]} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <h1 className='text-2xl font-bold my-3'>Our Products</h1>

      <div className='grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {products?.map(product => {
          return <div key={product._id} className='border rounded-lg'>
            <img className='h-[200px] w-[90%] m-4 object-cover rounded' src={product.imageURL} alt="" />
            <div className='p-4'>
              <h3 className='font-bold text-xl'>{product.name}</h3>
              <p className='font-semibold'>Brand: {product.brandName}</p>
              <p className='text-gray-500'>Type: {product.types}</p>
              <p className='text-gray-500'>Price: {product.price} TK</p>
              <div className='flex items-center mt-2'>
                <div className="rating rating-md">
                  <input type="radio" name="rating-7" className={`mask mask-star-2 ${product.ratings >= 1 ? ' bg-orange-400' : 'bg-slate-300'}`} />
                  <input type="radio" name="rating-7" className={`mask mask-star-2 ${product.ratings >= 2 ? ' bg-orange-400' : 'bg-slate-300'}`} />
                  <input type="radio" name="rating-7" className={`mask mask-star-2 ${product.ratings >= 3 ? ' bg-orange-400' : 'bg-slate-300'}`} />
                  <input type="radio" name="rating-7" className={`mask mask-star-2 ${product.ratings >= 4 ? ' bg-orange-400' : 'bg-slate-300'}`} />
                  <input type="radio" name="rating-7" className={`mask mask-star-2 ${product.ratings >= 5 ? ' bg-orange-400' : 'bg-slate-300'}`} />
                </div>
                <p className='text-gray-500 text-lg'>( {product.ratings} )</p>
              </div>
              <div className='mt-5'>
                <Link to={`/productDetails/${product._id}`} className='bg-[#FA5528] px-4 py-2 mr-2 rounded-lg text-lg text-white font-semibold'>Details</Link>
                <Link to={`/updateProduct/${product._id}`} className='bg-[#FA5528] px-4 py-2 rounded-lg text-lg text-white font-semibold'>Update</Link>
              </div>
            </div>
          </div>
        })}
      </div>
    </div >
  )
}

export default BrandProducts
