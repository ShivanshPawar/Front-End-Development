import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { asyncloginuser } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';



const Login = () => {

  const { register, reset, handleSubmit } = useForm()
  const dispatch = useDispatch();
  const LoginHandler = (user) => {
    dispatch(asyncloginuser(user));
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(LoginHandler)}
        className='flex flex-col w-1/2 justify-start items-start'>
        <input
          {...register("email")}
          className='outline-0 border-b p-2'
          type="email"
          placeholder='johndoe@gmail.com'
        />
        <input
          {...register("password")}
          className='outline-0 border-b p-2'
          type="password"
          placeholder='password'
        />
        <button className='my-5 py-1 px-20 bg-blue-600'>Login</button>
        <p><small>Don't have an account?</small> <Link className='text-blue-400' to="/register">Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login