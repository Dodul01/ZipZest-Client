import React from 'react'

const HowItWork = () => {
  return (
    <div className='flex lg:flex-row-reverse flex-col justify-between my-10 m-2'>
      <div>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-5'>
          <div className='border-2 rounded-lg p-3 shadow'>
            <div className='flex items-center justify-center my-2'>
              <img className='h-[250px]' src="https://i.ibb.co/BZdD7ht/Take-Away-rafiki.png" alt="" />
            </div>
            <h2 className='text-center text-xl font-bold'>24/7 Delivery</h2>
          </div>
          <div className='border-2 rounded-lg shadow'>
            <div className='flex items-center justify-center my-2'>
              <img className='h-[250px]' src="https://i.ibb.co/dPnHL6g/Order-food-pana.png" alt="" />
            </div>
            <h2 className='text-center text-xl font-bold'>Easy to Order</h2>
          </div>
          <div className='border-2 rounded-lg shadow '>
            <div className='flex items-center justify-center'>
              <img className='h-[250px]' src="https://i.ibb.co/xJfSZgm/Free-shipping-rafiki.png" alt="" />
            </div>
            <h2 className='text-xl font-bold text-center my-2'>Free Delivery</h2>
          </div>
          <div className='border-2 rounded-lg shadow '>
            <div className='flex items-center justify-center'>
              <img className='h-[250px]' src="https://i.ibb.co/YZjCR06/Eating-together-rafiki.png" alt="" />
            </div>
            <h2 className='text-xl font-bold text-center my-2'>Community Support</h2>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-3xl font-bold mt-4'>How It Work?</h1>
        <p className='max-w-lg text-lg mt-5 text-gray-500'>ZipZest is the ultimate solution for your food cravings, allowing you to order your favorite dishes from the comfort of your home. Whether it's a late-night snack or an impromptu gathering, our 24/7 delivery service ensures that your food arrives at your doorstep promptly. With our user-friendly interface, placing an order is as simple as a few clicks, making the entire process quick and hassle-free. Plus, you can enjoy the convenience of free delivery, making every meal a delightful experience.</p>
      </div>
    </div>
  )
}

export default HowItWork
