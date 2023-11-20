import React from 'react'
import {FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='min-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
            <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
                <div>
                    <h1 className='w-full text-3xl font-bold text-orange-500'>LivingFood</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eius amet ea doloribus earum, assumenda suscipit aperiam delectus maxime animi sapiente dolorum, laudantium dolore ratione labore veritatis, pariatur voluptatibus id!
                    </p>

                    <div className='flex bg-red-600 justify-between md:w-[75%] my-6'>
                        <FaFacebookSquare size={30}/>
                        <FaInstagram size={30}/>
                        <FaTwitterSquare size={30}/>
                    </div>

                </div>

                <div className='lg:col-span-2 flex justify-between mt-6'>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>

                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>USA</li>
                            <li className='py-2 text-sm'>India</li>
                            <li className='py-2 text-sm'>Canada</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>

                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>USA</li>
                            <li className='py-2 text-sm'>India</li>
                            <li className='py-2 text-sm'>Canada</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>

                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>USA</li>
                            <li className='py-2 text-sm'>India</li>
                            <li className='py-2 text-sm'>Canada</li>
                        </ul>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Footer