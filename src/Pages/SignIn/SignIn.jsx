import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../AppContextProvider/AppContextProvider'
import {FcGoogle} from 'react-icons/fc'

const SignIn = () => {
  const {signIn, user, errorMsg ,signInWithGoogle} = useContext(AppContext);
  const navigate = useNavigate();

  const handleSignIn = (e) =>{
    e.preventDefault();
    const Form = e.target;
    const email = Form.email.value;
    const password = Form.password.value;

    signIn(email, password);
  }

  useEffect(()=>{
    if(user){
      navigate('/')
    }
  },[user])

  return (
    <div className='min-h-screen '>
      <div className='border p-4 max-w-[600px] mx-auto rounded-lg shadow-sm'>
        <form onSubmit={handleSignIn}>
          <h1 className='text-2xl font-bold text-center my-4'>Sign In</h1>
          <div className='mt-2'>
            <label>Email</label> <br />
            <input className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' type="email" name='email' placeholder='example@gmail.com' />
          </div>
          <div className='mt-2'>
            <label>Password</label> <br />
            <input className='border-b focus:border-b-[#FA5528] w-full p-2 outline-none' type="password" name='password' placeholder='Password' />
          </div>
          <button className='bg-[#FA5528] text-white p-2 w-full mt-4 rounded-lg text-lg font-semibold' type='submit'>Sign In</button>
        </form>
        {errorMsg && 
          <p className='font-bold text-red-500 mt-2'>{errorMsg}</p>
        }
        <div className='mt-3'>
          <p>Don't have an account ? <Link to='/signUp' className="text-[#FA5528] font-bold underline">SignUp</Link></p>
        </div>
        <div className='mt-4'>
          <p className='text-center'>Continue With</p>
          <hr />
          <button onClick={()=>signInWithGoogle()} className='flex items-center text-2xl mt-5 border-2 p-2 rounded gap-2' type='submit'><FcGoogle></FcGoogle> <span className='text-xl'>Google</span></button>
        </div>
      </div>
    </div>
  )
}

export default SignIn
