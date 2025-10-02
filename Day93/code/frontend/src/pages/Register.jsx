import { nanoid } from 'nanoid';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';



const Register = () => {

  const { register, reset, handleSubmit } = useForm()

  const RegisterHandler = (user) => {
    user.id = nanoid();
    console.log(user)
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(RegisterHandler)}
        className='flex flex-col w-1/2 justify-start items-start'>
        <input
          {...register("username")}
          className='outline-0 border-b p-2'
          type="text"
          placeholder='John Doe'
        />
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
        <button className='my-5 py-1 px-18 bg-blue-600'>Register</button>
        <p><small>Already have an account?</small> <Link className='text-blue-400' to="/login">Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Register