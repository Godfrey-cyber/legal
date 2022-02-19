import React from 'react'
import Image from 'next/image'
import Image1 from "../public/images/glass-building-ge6b34ec4b_1920.jpg"
import { BsCheck2 } from 'react-icons/bs'
import { GiInjustice } from 'react-icons/gi'

const Solutions = () => {
  return (
    <div className="component">
        <div className="grid grid-cols-12 space-x-3">
            <div className="col-span-12 lg:col-span-4 flex flex-col">
                <span className="relative h-96 w-full lg:w-4/5">
                    <Image src={Image1} objectfit="cover" layout="fill" alt="imagealt" />  
                </span>
            </div>
            <div className="flex flex-col space-y-2 col-span-12 lg:col-span-4">
                <h2 className="text-3xl text-gray-700 font-serif font-normal">We have <strong className="font-semibold">Legal<br /> Solutions</strong> </h2>
                <p className="text-sm text-gray-600 py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum, voluptatum, quod deserunt maiores?</p>
                <p className="text-sm text-gray-600 py-2">Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam facere aperiam iste nam molestias provident consectetur molestiae voluptatibus ipsum. Fugiat, quas.</p>
                <div className="flex flex-col space-y-3">
                    <span className="flex items-center space-x-3 p-1">
                        <BsCheck2 className="h-8 text-lg text-gray-600" />
                        <p className="text-gray-600 text-sm">Lorem ipsum dolor sit.</p>
                    </span>
                    <span className="flex items-center space-x-3 p-1">
                        <BsCheck2 className="h-8 text-lg text-gray-600" />
                        <p className="text-gray-600 text-sm">Lorem ipsum dolor sit.</p>
                    </span>
                </div> 
            </div>
            <div className="col-span-12 lg:col-span-4 space-y-3">
                <span className="flex items-center space-x-3 border border-gray-400 p-1">
                    <GiInjustice className="h-8 text-lg text-gray-600" />
                    <p className="text-gray-600 text-sm">Lorem ipsum dolor sit.</p>
                </span>
                <p className="text-sm text-gray-600 py-2 leading-loose">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                <span className="flex items-center space-x-3 border border-gray-400 p-1">
                    <BsCheck2 className="h-8 text-lg text-gray-600" />
                    <p className="text-gray-600 text-sm">Lorem ipsum dolor sit.</p>
                </span>
                <span className="flex items-center space-x-3 border border-gray-400 p-1">
                    <BsCheck2 className="h-8 text-lg text-gray-600" />
                    <p className="text-gray-600 text-sm">Lorem ipsum dolor sit.</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Solutions