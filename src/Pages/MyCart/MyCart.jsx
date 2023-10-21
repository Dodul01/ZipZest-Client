import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../AppContextProvider/AppContextProvider';
import Swal from 'sweetalert2';

const MyCart = () => {
  const [cart, setCart] = useState();
  const { user } = useContext(AppContext);
  const email = user?.email;


  const handleDeleteOrder = (id) => {
    fetch(`https://assignment-10-server-psi-ten.vercel.app/addToCart/${id}`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(data => {

        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#FA5528',
          cancelButtonColor: '#000',
          confirmButtonText: 'Yes, delete order!'
        }).then((result) => {
          if (result.isConfirmed) {
            if (data?.deletedCount > 0) {
              const remaining = cart.filter(cartItem => cartItem._id !== id)
              setCart(remaining);
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          }
        })
      })

  }

  useEffect(() => {
    fetch(`https://assignment-10-server-psi-ten.vercel.app/addToCart`)
      .then(response => response.json())
      .then(result => setCart(result))
  }, [email])

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
            <button onClick={() => handleDeleteOrder(cartItem._id)} className='bg-[#FA5528] mx-3 text-white p-2 w-[150px] mt-4 rounded-lg text-lg font-semibold'>Delete Order</button>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default MyCart
