import toast from 'react-hot-toast';

const AddProduct = () => {
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

    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(result => {
        if(result.insertedId){
          toast.success('product added sucessfully.')
        }
      })
    Form.reset();
  }

  return (
    <div className='max-w-7xl mx-auto min-h-screen'>
      <form onSubmit={handleAddProduct} className='md:border border-solid shadow-sm p-4 max-w-[700px] mx-auto rounded-lg'>
        <h1 className='text-2xl font-bold text-center my-2 mb-6'>Add Product</h1>
        <div className='flex gap-4 w-full'>
          <div className='flex-1'>
            <label>Name</label><br />
            <input className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' name='name' type="text" placeholder="Name" required />
          </div>
          <div className='flex-1'>
            <label>Brand Name</label><br />
            <select name='brandName' className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none'>
              <option value='Coca-Cola'>Coca-Cola</option>
              <option value="McDonald's">McDonald's</option>
              <option value='Starbucks'>Starbucks</option>
              <option value='PepsiCo'>PepsiCo</option>
              <option value='Nestlé'>Nestlé</option>
              <option value="Kellogg's">Kellogg's</option>
            </select>
          </div>
        </div>
        <div className='flex gap-4 mt-4 w-full'>
          <div className='flex-1'>
            <label>Image URL</label><br />
            <input className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' name='imageURL' type="text" placeholder="Image URL" required />
          </div>
          <div className='flex-1'>
            <label>Price</label><br />
            <input className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' name='price' type="number" min='1' placeholder="Price" required />
          </div>
        </div>
        <div className='flex gap-4 mt-4 w-full'>
          <div className='flex-1'>
            <label>Ratings</label><br />
            <select name='ratings' className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
          <div className='flex-1'>
            <label>Types</label><br />
            <select name='types' className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none'>
              <option value='Cold Drinks'>Cold Drinks</option>
              <option value='Fast Food'>Fast Food</option>
              <option value='Cofee'>Cofee</option>
              <option value='Chips'>Chips</option>
            </select>
          </div>
        </div>
        <div className='mt-4'>
          <label>Short Description</label><br />
          <textarea className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' placeholder='Product Short Description' name="shortDescription" cols="10" rows="2" required></textarea>
        </div>
        <button className='bg-[#FA5528] text-white p-2 w-full mt-4 rounded-lg text-lg font-semibold' type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct;