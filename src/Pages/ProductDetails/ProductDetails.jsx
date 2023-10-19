import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ProductDetails = () => {
  const data = useLoaderData()
  const { name, brandName, imageURL, price, ratings, types, description } = data;
  return (
    <div className='mt-12 min-h-screen max-w-7xl mx-auto'>
      <div className='flex lg:flex-row flex-col mb-10'>
        <div className='lg:max-w-[50%]'>
          <img className='h-[400px] w-[450px] object-cover' src={imageURL} alt="" />
        </div>

        <div className='mt-4 lg:ml-10 ml-2 lg:max-w-[50%]'>
          <h1 className='text-3xl  font-semibold'>{brandName}</h1>
          <h1 className='text-2xl font-semibold mt-2'>{name}</h1>
          <h3 className='text-xl mt-2 text-gray-500'>{types}</h3>
          <div className='flex items-center gap-1'>
            <AiFillStar className='text-orange-400 text-2xl'></AiFillStar>
            <AiFillStar className='text-orange-400 text-2xl'></AiFillStar>
            <AiFillStar className='text-orange-400 text-2xl'></AiFillStar>
            <AiFillStar className='text-orange-400 text-2xl'></AiFillStar>
            <AiOutlineStar className='text-orange-400 text-2xl'></AiOutlineStar>
            <p className='text-gray-500 text-lg'>( {ratings} )</p>
          </div>
          <h3 className='text-2xl text-gray-500'>Price: <span className='text-3xl text-black font-semibold'>{price}</span> <span className='text-xl text-gray-500'>TK</span></h3>
          <p className='text-base text-gray-500 mt-2'>{description}</p>
          <button className='bg-[#FA5528] text-white p-2 w-full mt-4 rounded-lg text-lg font-semibold'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;