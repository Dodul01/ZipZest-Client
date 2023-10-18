import React from 'react'

const AddProduct = () => {
  return (
    <div className='max-w-7xl mx-auto min-h-screen'>

      <form className='md:border border-solid shadow-sm p-4 max-w-[700px] mx-auto rounded-lg'>
        <h1 className='text-2xl font-bold text-center my-2 mb-6'>Add Product</h1>
        <div className='flex gap-4 w-full'>
          <div className='flex-1'>
            <label>Name</label><br />
            <input className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' name='name' type="text" placeholder="Name" required/>
          </div>
          <div className='flex-1'>
            <label>Brand Name</label><br />
            <input className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' name='brand name' type="text" placeholder="Brand Name" required/>
          </div>
        </div>
        <div className='flex gap-4 mt-4 w-full'>
          <div className='flex-1'>
            <label>Image URL</label><br />
            <input className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' name='imageURL' type="text" placeholder="Image URL" required/>
          </div>
          <div className='flex-1'>
            <label>Price</label><br />
            <input className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' name='price' type="text" placeholder="Price" required/>
          </div>
        </div>
        <div className='flex gap-4 mt-4 w-full'>
          <div className='flex-1'>
            <label>Ratings</label><br />
            <input className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' name='ratings' type="text" placeholder="Ratings" required/>
          </div>
          <div className='flex-1'>
            <label>Types</label><br />
            <select className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none'>
              <option value='coldDrinks'>Cold Drinks</option>
              <option value='fastFood'>Fast Food</option>
              <option value='cofee'>Cofee</option>
              <option value='chips'>Chips</option>
            </select>
          </div>
        </div>
        <div className='mt-4'>
          <label>Short Description</label><br />
          <textarea className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' name="shortDescription" cols="10" rows="2" required></textarea>
        </div>
        <button className='bg-[#FA5528] text-white p-2 w-full mt-4 rounded-lg text-lg font-semibold' type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct
