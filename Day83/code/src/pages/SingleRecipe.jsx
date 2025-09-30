import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { recipecontext } from '../context/RecipeContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext)
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id)
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      image: recipe?.image,
      desc: recipe?.desc,
      ingr: recipe?.ingr,
      inst: recipe?.inst,

    }
  });


  const UpdateHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata))
    toast.success("recipe has been updated")
  }

  const DeleteHandler = (recipe) => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata))
    toast.success("recipe deleted!");
    navigate("/recipes");
  }


  useEffect(() => {
    console.log("SingleRecipe.jsx Mounted");
    // getproduct();

    return () => {
      console.log("SingleRecipe.jsx Unmounted")
    }
  }, []);

  const favroite = JSON.parse(localStorage.getItem("fav")) || [];

  const FavHandler = () => {
    favroite.push(recipe)
    localStorage.setItem("fav", JSON.stringify(favroite));
  }

  const UnFavHandler = () => {
    
  }


  return recipe ? (
    <div className='w-full flex' >
      <div className='relative left w-1/2 p-2'>
        {favroite.find((f) => f.id == recipe?.id) ? (
          <i onClick={FavHandler} className="right-[10%] absolute text-3xl text-red-400 ri-heart-fill"></i>
        ) : (
          <i onClick={UnFavHandler} className="right-[10%] absolute text-3xl text-red-400 ri-heart-line"></i>
        )
        }

        <h1 className='px-20 py-20 text-5xl font-black'>{recipe.title}</h1>
        <img className='w-[15vw]' src={recipe.image} alt="" />
        <h1>{recipe.chef}</h1>
        <h1>{recipe.desc}</h1>
        <h1>{recipe.ingr}</h1>
        <h1>{recipe.inst}</h1>
      </div>
      <div className='right w-1/2 p-2'>
        <form className='w-1/2 p-2' onSubmit={handleSubmit(UpdateHandler)}>
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
          <button className='bg-blue-500 py-2 px-8 rounded mt-5'>Update Recipe</button>
          <button onClick={DeleteHandler} className='bg-red-500 py-2 px-8 rounded mt-5'>Delete Recipe</button>
        </form>
      </div>

    </div>
  ) : (
    "Loading..."
  );
}

export default SingleRecipe