import React from 'react'
import { useForm } from 'react-hook-form';

const Create = () => {

    const { register, handleSubmit } = useForm();

    return (
        <form>
            <input
                className='block border-b outline-0 p-2'
                {...register("image")}
                type="file"
            />
            <small className='text-red-500'>This is the error</small>
            <input
                className='block border-b outline-0 p-2'
                {...register("title")}
                type="text"
                placeholder='Recipe Title'
            />
            <small className='text-red-500'>This is the error</small>
        </form>
    )
}

export default Create