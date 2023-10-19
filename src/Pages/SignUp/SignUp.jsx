import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../AppContextProvider/AppContextProvider'
import { FcGoogle } from 'react-icons/fc'

const SignUp = () => {
  const { signUp, user, errorMsg, signInWithGoogle } = useContext(AppContext);
  const [msg, setMsg] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const Form = e.target;
    const name = Form.name.value;
    const imageURL = Form.imageURL.value;
    const email = Form.email.value;
    const password = Form.password.value;

    setMsg(null)

    if (password.length < 6) {
      return setMsg("Password cannot be less than 6 characters.");
    } else if (!/[A-Z]/.test(password)) {
      return setMsg("Password must contain at least one capital letter.");
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      return setMsg("Password must contain at least one special character.");
    } else {
      signUp(email, password, imageURL, name)
    }
  }


  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

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
        <div>
          <p className='font-semibold text-red-600 mt-2'>{errorMsg && errorMsg}</p>
          <p className='font-semibold text-red-600 mt-2'>{msg && msg}</p>
        </div>
        <div className='mt-3'>
          <p>Already have an account ? <Link to='/signIn' className="text-[#FA5528] font-bold underline">SignIn</Link></p>
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

export default SignUp