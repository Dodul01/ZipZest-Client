import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { AppContext } from '../../AppContextProvider/AppContextProvider';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const { user } = useContext(AppContext);
  const data = useLoaderData()
  const { _id, name, brandName, imageURL, price, ratings, types, description } = data;
  
  const data2 = {
    orederId: _id,
    name,
    brandName, imageURL, price, ratings, types, description
  }
  
  const email = user?.email;
  const [prevOrder, setPrevOrder] = useState([]);
  const handleAddToCart = () => {
    const checkOrder = prevOrder.find((item) => item.name === name);

    if (checkOrder) {
      return toast.error('You already add this in your card')
    }

    data['cartOwner'] = email;

    fetch('http://localhost:5000/addToCart', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data2)
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          toast.success('Product Added Sucessfully.')
        }
      })
  }

  useEffect(() => {
    fetch('http://localhost:5000/addToCart')
      .then(res => res.json())
      .then(data => setPrevOrder(data))
  }, [])

  return (
    <div className='mt-3 min-h-screen max-w-7xl mx-auto'>
      <div className='flex lg:flex-row flex-col mb-10'>
        <div className='lg:max-w-[50%]'>
          <img className='h-[400px] w-[450px] object-cover' src={imageURL} alt="" />
        </div>

        <div className='mt-4 lg:ml-10 ml-2 lg:max-w-[50%]'>
          <h1 className='text-3xl font-semibold'>{brandName}</h1>
          <h1 className='text-2xl font-semibold mt-2'>{name}</h1>
          <h3 className='text-xl mt-2 text-gray-500'>{types}</h3>
          <div className='flex items-center'>
            <div className="rating rating-md">
              <input type="radio" name="rating-7" className={`mask mask-star-2 ${ratings >= 1 ? ' bg-orange-400' : 'bg-slate-300'}`} />
              <input type="radio" name="rating-7" className={`mask mask-star-2 ${ratings >= 2 ? ' bg-orange-400' : 'bg-slate-300'}`} />
              <input type="radio" name="rating-7" className={`mask mask-star-2 ${ratings >= 3 ? ' bg-orange-400' : 'bg-slate-300'}`} />
              <input type="radio" name="rating-7" className={`mask mask-star-2 ${ratings >= 4 ? ' bg-orange-400' : 'bg-slate-300'}`} />
              <input type="radio" name="rating-7" className={`mask mask-star-2 ${ratings >= 5 ? ' bg-orange-400' : 'bg-slate-300'}`} />
            </div>
            <p className='text-gray-500 text-lg'>( {ratings} )</p>
          </div>
          <h3 className='text-2xl text-gray-500'>Price: <span className='text-3xl text-black font-semibold'>{price}</span> <span className='text-xl text-gray-500'>TK</span></h3>
          <p className='text-base text-gray-500 mt-2'>{description}</p>
          <button onClick={handleAddToCart} className='bg-[#FA5528] text-white p-2 w-full mt-4 rounded-lg text-lg font-semibold'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;