import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { recipecontext } from '../context/RecipeContext';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const Create = () => {

    const navigate = useNavigate()

    const { data, setdata } = useContext(recipecontext)

    const { register, handleSubmit, reset } = useForm();

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid();
        setdata([...data, recipe])
        toast.success("New recipe created!")
        reset();
        navigate("/recipes");
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
           
            <input
                className='block border-b outline-0 p-2'
                {...register("chef")}
                type="text"
                placeholder='Chef Name'
            />

            <textarea
                className='block border-b outline-0 p-2'
                {...register("desc")}
                type="text"
                placeholder='Description'
            ></textarea>

            <textarea
                className='block border-b outline-0 p-2'
                {...register("ingr")}
                type="text"
                placeholder='ingredients'
            ></textarea>

            <textarea
                className='block border-b outline-0 p-2'
                {...register("inst")}
                type="text"
                placeholder='instructions'
            ></textarea>

            <select
                className='block border-b outline-0 p-2'
                {...register("category")}
            >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="supper">Supper</option>
                <option value="dinner">Dinner</option>
            </select>

            <br />
            <button className='bg-red-500 py-2 px-8 rounded mt-5'>Save Recipe</button>
        </form>
    )
}

export default Create