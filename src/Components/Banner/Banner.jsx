import React from 'react'

const Banner = () => {
  return (
    <div className='flex items-center justify-between lg:flex-row flex-col-reverse lg:my-7 my-2 mx-3'>
      <div>
        <h1 className='text-7xl font-bold'>Fresh <span className='text-[#FA5528]'>Food</span> <br /> <span className='text-[#FA5528]'>Great</span> Test</h1>
        <p className='max-w-xl mt-4 text-gray-500 text-lg'>Indulge in a delectable journey with our fresh and flavorsome menu, designed to tantalize your taste buds with every bite. Experience culinary excellence at its finest!</p>
        <button className='bg-[#FA5528] px-4 py-2 rounded-lg text-lg text-white font-semibold mt-4'>Order Now</button>
      </div>

      <div>
        <div className='bg-[#FA5528] max-h-[400px] max-w-[400px] overflow-hidden flex items-center justify-center rounded-full'>
          <img className='h-[400px] w-[400px] object-cover' src="https://i.ibb.co/PtRLJGN/wepik-export-20231017171239rz-B9.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner
