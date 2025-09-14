import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { recipecontext } from '../context/RecipeContext';
import { nanoid } from 'nanoid';

const Create = () => {

    const { data, setdata } = useContext(recipecontext)

    const { register, handleSubmit, reset } = useForm();

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid();
        setdata([...data, recipe])
        reset();
    }

    return (
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <input
                className='block border-b outline-0 p-2'
                {...register("image")}
                type="url"
                placeholder='Enter img url'
            />
            <small className='text-red-500'>This is the error</small>
            <input
                className='block border-b outline-0 p-2'
                {...register("title")}
                type="text"
                placeholder='Recipe Title'
            />

            <textarea
                className='block border-b outline-0 p-2'
                {...register("description")}
                type="text"
                placeholder='Description'
            ></textarea>

            <textarea
                className='block border-b outline-0 p-2'
                {...register("ingredients")}
                type="text"
                placeholder='ingredients'
            ></textarea>

            <textarea
                className='block border-b outline-0 p-2'
                {...register("instructions")}
                type="text"
                placeholder='instructions'
            ></textarea>

            <select
                className='block border-b outline-0 p-2'
                {...register("Categories")}
            >
                <option value="">Category 1</option>
                <option value="">Category 2</option>
                <option value="">Category 3</option>
            </select>

            <br />
            <button className='bg-red-500 py-1 px-8 rounded mt-5'>Save Recipe</button>
        </form>
    )
}

export default Create