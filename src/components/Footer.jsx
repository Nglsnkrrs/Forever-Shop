import React from 'react'
import { assets } from '../assets/assets'

const footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia incidunt aut vero totam autem quis possimus facilis? Ad ab nostrum, placeat porro, nobis et ipsum, repudiandae beatae itaque doloremque aut enim voluptas quis provident maxime deleniti officia praesentium aliquam.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr className='border-gray-300'/>
            <p className='py-5 text-sm text-center'>Copyright 2026@ forever.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default footer