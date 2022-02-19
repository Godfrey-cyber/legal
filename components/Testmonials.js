import Image from 'next/image'
import React from 'react'
import Image1 from "../public/images/hemisferic-g3d3295c26_1920.jpg"

const Testmonials = () => {
  return (
    <div className="component bg-gray-100">
        <span className="component-span">
            <h3 className="c-title">Happy Customers</h3>
        </span>
        <div className="grid grid-cols-12 lg:space-x-6 space-y-5 lg:space-y-0">
            <div className="customer-card">
                <div className="flex space-x-4 items-center">
                    <span className="h-12 w-12 relative">
                        <Image className="w-full h-full rounded-full" src={Image1} layout="fill" objectfit="contain" alt="altimage"/>
                    </span>
                    <span className="flex flex-col space-y-2 mb-3">
                        <h className="text-sm text-gray-600 font-semibold">Mary Harris</h>
                        <p className="text-gray-400 text-sm">Marketing Manager</p>    
                    </span>
                </div>
                <p className="text-md text-gray-700 my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam et, quisquam rerum dolorem voluptatibus quos, architecto id eos illo quidem consequatur adipisci soluta. Dolores!</p>
            </div>
            <div className="customer-card">
                <div className="flex space-x-4 items-center">
                    <span className="h-12 w-12 relative">
                        <Image className="w-full h-full rounded-full" src={Image1} layout="fill" objectfit="contain" alt="altimage"/>
                    </span>
                    <span className="flex flex-col space-y-2 mb-3">
                        <h className="text-sm text-gray-600 font-semibold">Mary Harris</h>
                        <p className="text-gray-400 text-sm">Marketing Manager</p>    
                    </span>
                </div>
                <p className="text-md text-gray-700 my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam et, quisquam rerum dolorem voluptatibus quos, architecto id eos illo quidem consequatur adipisci soluta. Dolores!</p>
            </div>
            <div className="customer-card">
                <div className="flex space-x-4 items-center">
                    <span className="h-12 w-12 relative">
                        <Image className="w-full h-full rounded-full" src={Image1} layout="fill" objectfit="contain" alt="altimage"/>
                    </span>
                    <span className="flex flex-col space-y-2 mb-3">
                        <h className="text-sm text-gray-600 font-semibold">Mary Harris</h>
                        <p className="text-gray-400 text-sm">Marketing Manager</p>    
                    </span>
                </div>
                <p className="text-md text-gray-700 my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam et, quisquam rerum dolorem voluptatibus quos, architecto id eos illo quidem consequatur adipisci soluta. Dolores!</p>
            </div>
        </div> 
    </div>
  )
}

export default Testmonials