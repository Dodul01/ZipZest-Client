import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const { id } = useParams();

  const handleAddProduct = (e) => {
    e.preventDefault();
    const Form = e.target;
    const name = Form.name.value;
    const brandName = Form.brandName.value;
    const imageURL = Form.imageURL.value;
    const price = Form.price.value;
    const ratings = Form.ratings.value;
    const types = Form.types.value;
    const description = Form.shortDescription.value;

    const product = { name, brandName, imageURL, price, ratings, types, description };

    fetch(`https://assignment-10-server-psi-ten.vercel.app/products/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(result => {
        if(result.acknowledged){
          toast.success('Product Updated Sucessfully.')
        }
      })
  }

  useEffect(() => {
    fetch(`https://assignment-10-server-psi-ten.vercel.app/products/${id}`)
      .then(response => response.json())
      .then(result => setCurrentProduct(result))
  }, [])

  return (
    <div className='max-w-7xl mx-auto min-h-screen'>
      <form onSubmit={handleAddProduct} className='md:border border-solid shadow-sm p-4 max-w-[700px] mx-auto rounded-lg'>
        <h1 className='text-2xl font-bold text-center my-2 mb-6'>Update Product</h1>
        <div className='flex gap-4 w-full'>
          <div className='flex-1'>
            <label>Name</label><br />
            <input defaultValue={currentProduct?.name} className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' name='name' type="text" placeholder="Name" required />
          </div>
          <div className='flex-1'>
            <label>Brand Name</label><br />
            <select name='brandName' className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none'>
              <option value='Coca-Cola' selected={currentProduct?.brandName === "Coca-Cola" ? true : false}>Coca-Cola</option>
              <option value="McDonald's" selected={currentProduct?.brandName === "McDonald's" ? true : false}>McDonald's</option>
              <option value='Starbucks' selected={currentProduct?.brandName === "Starbucks" ? true : false}>Starbucks</option>
              <option value='PepsiCo' selected={currentProduct?.brandName === "PepsiCo" ? true : false}>PepsiCo</option>
              <option value='Nestlé' selected={currentProduct?.brandName === "Nestlé" ? true : false}>Nestlé</option>
              <option value="Kellogg's" selected={currentProduct?.brandName === "Kellogg's" ? true : false}>Kellogg's</option>
            </select>
          </div>
        </div>
        <div className='flex gap-4 mt-4 w-full'>
          <div className='flex-1'>
            <label>Image URL</label><br />
            <input defaultValue={currentProduct?.imageURL} className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' name='imageURL' type="text" placeholder="Image URL" required />
          </div>
          <div className='flex-1'>
            <label>Price</label><br />
            <input defaultValue={currentProduct?.price} className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' name='price' type="text" placeholder="Price" required />
          </div>
        </div>
        <div className='flex gap-4 mt-4 w-full'>
          <div className='flex-1'>
            <label>Ratings</label><br />
            <select name='ratings' className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none'>
              <option value='1' selected={currentProduct?.ratings == "1" ? true : false}>1</option>
              <option value='2' selected={currentProduct?.ratings == "2" ? true : false}>2</option>
              <option value='3' selected={currentProduct?.ratings == "3" ? true : false}>3</option>
              <option value='4' selected={currentProduct?.ratings == "4" ? true : false}>4</option>
              <option value='5' selected={currentProduct?.ratings == "5" ? true : false}>5</option>
            </select>
          </div>
          <div className='flex-1'>
            <label>Types</label><br />
            <select name='types' className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none'>
              <option value='Cold Drinks' selected={currentProduct?.types == "coldDrinks" ? true : false}>Cold Drinks</option>
              <option value='Fast Food' selected={currentProduct?.types == "fastFood" ? true : false}>Fast Food</option>
              <option value='Cofee' selected={currentProduct?.types == "cofee" ? true : false}>Cofee</option>
              <option value='Chips' selected={currentProduct?.types == "chips" ? true : false}>Chips</option>
            </select>
          </div>
        </div>
        <div className='mt-4'>
          <label>Short Description</label><br />
          <textarea defaultValue={currentProduct?.description} className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' placeholder='Product Short Description' name="shortDescription" cols="10" rows="2" required></textarea>
        </div>
        <button className='bg-[#FA5528] text-white p-2 w-full mt-4 rounded-lg text-lg font-semibold' type="submit">Update Product</button>
      </form>
    </div>
  )
}

export default UpdateProduct;