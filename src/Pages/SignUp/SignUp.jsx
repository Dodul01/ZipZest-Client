import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const handleSignUp = (e) =>{
    e.preventDefault();
    const Form = e.target;
    const name = Form.name.value;
    const imageURL = Form.imageURL.value;
    const email = Form.email.value;
    const password = Form.password.value;
    
    console.log(name, imageURL, email, password);
  }

  return (
    <div className='min-h-screen '>
      <div className='border p-4 max-w-[600px] mx-auto rounded-lg shadow-sm'>
        <form onSubmit={handleSignUp}>
          <h1 className='text-2xl font-bold text-center my-4'>Sign Up</h1>
          <div>
            <label>Name</label> <br />
            <input className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' type="text" name='name' placeholder='Your Name' />
          </div>
          <div className='mt-2'>
            <label>Image URL</label> <br />
            <input className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' type="text" name='imageURL' placeholder='Image URL' />
          </div>
          <div className='mt-2'>
            <label>Email</label> <br />
            <input className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' type="email" name='email' placeholder='example@gmail.com' />
          </div>
          <div className='mt-2'>
            <label>Password</label> <br />
            <input className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' type="password" name='password' placeholder='Password' />
          </div>
          <button className='bg-[#FA5528] text-white p-2 w-full mt-4 rounded-lg text-lg font-semibold' type='submit'>Sign Up</button>
        </form>
        <div className='mt-3'>
          <p>Already have an account ? <Link to='/signIn' className="text-[#FA5528] font-bold underline">SignIn</Link></p>
        </div>
        <div className='mt-4'>
          <p className='text-center'>Continue With</p>
          <hr />
          <button className='bg-[#FA5528] text-white p-2 mt-4 rounded-lg text-lg font-semibold' type='submit'>Google</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp