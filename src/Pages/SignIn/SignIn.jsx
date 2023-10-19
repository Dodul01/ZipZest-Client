import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='min-h-screen '>
      <div className='border p-4 max-w-[600px] mx-auto rounded-lg shadow-sm'>

        <form>
          <h1 className='text-2xl font-bold text-center my-4'>Sign In</h1>
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
          <p>Don't have an account ? <Link to='/signUp' className="text-[#FA5528] font-bold underline">SignUp</Link></p>
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

export default SignIn
