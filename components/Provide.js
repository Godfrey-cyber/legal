import Image from 'next/image'
import React from 'react'
import Image1 from "../public/images/glass-building-ge6b34ec4b_1920.jpg"

const Provide = () => {
  return (
     <div className="component">
        <div className="grid grid-cols-12 space-y-5 lg:space-x-6">
            <div className="grid col-span-12 lg:col-span-8 space-x-3 w-full lg:w-4/5">
                <div className="grid lg:space-x-3 space-y-5 grid-cols-12">
                    <span className="col-span-12 lg:col-span-6 relative h-80 w-full lg:w-4/5">
                        <Image src={Image1} objectfit="cover" layout="fill" alt="imagealt" />  
                    </span>
                    <span className="col-span-12 lg:col-span-6 relative h-80 w-full lg:w-4/5">
                        <Image src={Image1} objectfit="cover" layout="fill" alt="imagealt" />
                    </span>
                </div>
            </div>
            <div className="flex flex-col space-y-4 col-span-12 lg:col-span-4">
                <h2 className="text-3xl text-gray-700 font-serif font-normal">We Provide Highly <strong className="font-semibold"> Reliable <br /> & Effective</strong> Legal Solutions</h2>
                <p className="text-sm text-gray-600 py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem minima nisi doloribus quae ut voluptatem impedit reiciendis neque aspernatur debitis cumque possimus nam, voluptatum, accusantium molestiae saepe! Recusandae, laudantium esse!</p>
                <span className="my-4">
                    <button type="submit" className="p-4 bg-orange-200 hover:bg-orange-300 transition-all delay-200 text-gray-600 rounded-sm">Book an Appointment</button>
                </span> 
            </div>
         </div>
    </div>
  )
}

export default Provide