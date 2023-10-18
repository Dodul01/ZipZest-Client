import React from 'react'

const BrandSection = ({categories}) => {
  return (
    <div className='mx-y'>
      <h1 className='text-3xl font-bold mb-4'>Choose from popular brand</h1>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
        {categories.map((categorie) => {
          return <div className='border p-2 rounded-lg cursor-pointer'>
            <img className='h-[200px] w-full object-cover rounded-lg' src={categorie.thumbnail} alt={categorie.categoryName + ' logo'} />
            <h3 className='font-semibold text-xl my-2'>{categorie.categoryName}</h3>
          </div>
        })}
      </div>
    </div>
  )
}

export default BrandSection
