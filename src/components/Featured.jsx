import React from 'react'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'

const Featured = () => {
    const sliders = [
        {
            id:0,
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
        },
        {
            id:1,
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            id:2,
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg'
        },
    ]

   




    return (
        <div className='max-w-[1520px] lg:max-w-[2000px] h-[500px] w-full py-4 px-4 relative group'>
            <Splide options={{perPage:1,}}>
                {
                    sliders.map((item) => (
                        <SplideSlide key={item.id}>
                            <div className='flex items-center overflow-hidden w-full h-full rounded-2xl bg-center bg-cover duration-500 ' >
                                <img src={item.url} alt="" className='w-full h-[500px]'/>
                            </div>
                        </SplideSlide>
                    ))
                }
            </Splide>

            
        </div>
    )
}

export default Featured