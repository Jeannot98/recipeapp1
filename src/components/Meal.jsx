import React, { useState } from 'react'
import {mealData} from '../data/data'
import {ArrowSmRightIcon} from '@heroicons/react/outline'



const Meal = () => {
    const [foods, setFoods] = useState(mealData)
    const filterCategory = (category)=>{
       setFoods( mealData.filter((item)=>{
        return item.category === category
    }))
    }




  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meals</h1>

        <div className='flex flex-col lg:flex-row justify-center'>
            <div className='flex justify-center md:justify-center'>
                <button onClick={()=>setFoods(mealData)} className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-rose-700 hover:border-e-orange-700'>All</button>
                <button onClick={()=>filterCategory('pizza')} className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-rose-700 hover:border-e-orange-700'>Pizza</button>
                <button onClick={()=>filterCategory('chicken')} className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-rose-700 hover:border-e-orange-700'>Chiclken</button>
                <button onClick={()=>filterCategory('salad')} className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-rose-700 hover:border-e-orange-700'>Salad</button>
            </div>
        </div>

        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6'>
            {
                foods.map((item)=>(
                    <div key={item.id} className='border-none hover:scale-105 duration-300 py-4'>
                        <img src={item.image} alt={item.name} 
                        className='w-full h-[200px] object-cover rounded-lg'/>

                        <div className='flex justify-between py-2 px-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='bg-orange-700 h-16 w-16 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold'>{item.price}</p>
                        </div>

                        <div className='px-4 py-4 -mt-7 '>
                            <p className='flex items-center text-indigo-600'>View More <ArrowSmRightIcon className='w-5 ml-2'/> </p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Meal