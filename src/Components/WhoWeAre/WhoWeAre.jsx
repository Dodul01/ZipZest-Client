import React from 'react'

const WhoWeAre = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center my-6'>Who We Are?</h1>
      <div className='flex lg:flex-row flex-col m-2'>
        <div>
          <img className='rounded' src="https://i.ibb.co/fNnTfzJ/pylyp-sukhenko-y-XZf-TNRms-unsplash.jpg" alt="" />
        </div>
        <div className='lg:ml-10 lg:text-lg text-gray-500'>
          <p className='max-w-lg'>At ZipZest, we are more than just a restaurant. we're your ultimate culinary companion, dedicated to crafting memorable dining experiences. Our passionate team endeavors to offer an extensive array of delectable cuisines, from sizzling starters to mouthwatering main courses and irresistible desserts. With a commitment to quality and flavor, we aim to redefine the art of dining and leave an indelible mark on your taste buds. ZipZest is your one-stop destination for culinary adventures, where each dish is a celebration of taste, texture, and tradition. </p>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
