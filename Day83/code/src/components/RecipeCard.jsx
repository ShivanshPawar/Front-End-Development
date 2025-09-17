import React from 'react'
import { Link } from 'react-router';

const RecipeCard = (props) => { 

    const { id, image, title, desc, chef } = props.recipe;

    return (
        <Link to={`/recipes/details/${id}`} className='hover:scale-102 duration-150 mr-3 mb-3 px-5 py-5 block w-[18vw] rounded overflow-hidden shadow text-black bg-white'>
            <img className='object-cover w-full h-[20vh]' src={image} alt="" />
            <h1 className='py-2 mt-2 font-black'>{title}</h1>
            <h6 className='px-2 text-red-600'>{chef}</h6>
            <p>{desc.slice(0,100)}...<small className='text-blue-500'>more</small></p>
        </Link>
    )
}

export default RecipeCard