import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../AppContextProvider/AppContextProvider';

const MyCart = () => {
  const [cart, setCart] = useState();
  const { user } = useContext(AppContext);
  const userID = user?.uid;

  // console.log(userID);
  useEffect(() => {
    fetch(`http://localhost:5000/myCart/${userID}`)
      .then(response => response.json())
      .then(result => setCart(result))
  }, [userID])

  // name, brandName, imageURL, price, ratings, types, description
  return (
    <div className='max-w-7xl mx-auto min-h-screen'>
      <h1 className='text-2xl font-bold m-2'>My Order</h1>
      <div className='grid gap-3 lg:grid-cols-2 grid-cols-1 m-2'>
        {cart?.map((cartItem, idx) => <div key={idx} className='flex lg:flex-row md:flex-row flex-col border p-2 rounded-lg'>
          <div>
            <img className='h-[200px] w-[200px] object-cover' src={cartItem.imageURL} alt="" />
          </div>
          <div className='flex flex-col'>
            <div className='flex-grow mt-5 ml-4'>
              <h1 className='text-xl font-semibold'>{cartItem.name}</h1>
              <h3 className='text-slate-500'>{cartItem.brandName}</h3>
              <h3 className='text-slate-500'>{cartItem.types}</h3>
              <p className=''>Price: {cartItem.price} TK</p>
              <div className="rating rating-md">
                <input type="radio" name="rating-7" className={`mask mask-star-2 ${cartItem.ratings >= 1 ? ' bg-orange-400' : 'bg-slate-300'}`} />
                <input type="radio" name="rating-7" className={`mask mask-star-2 ${cartItem.ratings >= 2 ? ' bg-orange-400' : 'bg-slate-300'}`} />
                <input type="radio" name="rating-7" className={`mask mask-star-2 ${cartItem.ratings >= 3 ? ' bg-orange-400' : 'bg-slate-300'}`} />
                <input type="radio" name="rating-7" className={`mask mask-star-2 ${cartItem.ratings >= 4 ? ' bg-orange-400' : 'bg-slate-300'}`} />
                <input type="radio" name="rating-7" className={`mask mask-star-2 ${cartItem.ratings >= 5 ? ' bg-orange-400' : 'bg-slate-300'}`} />
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default MyCart
