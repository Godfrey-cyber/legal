import Image from 'next/image'
import React from 'react'
import Image1 from "../public/images/cottage.jpg"

const Baner = () => {
  return (
    <div className="flex flex-col w-screen h-[1024px] lg:h-screen relative overflow-x-hidden">
        <div className="flex flex-col relative top-0 left-0 h-full w-full">
            <Image className="" src={Image1} layout="fill" objectfit="contain" />
        </div>
        <div className="grid grid-cols-12 space-y-4 lg:space-x-12 h-full w-full md:w-4/5 items-center justify-center text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="col-span-12 lg:col-span-8 flex flex-col justify-start space-y-3 w-4/5 mx-auto">
                <p className="text-2xl lg:text-4xl text-white font-serif font-normal"><strong className="font-semibold">Notary Public &</strong> <br /> Legal Solutions</p>
                <p className="text-md text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.</p>
            </div>
            <div className="flex flex-col col-span-12 lg:col-span-4 mx-auto space-y-3 bg-white rounded-md shadow-sm shadow-gray-200 pt-3 py-6 w-4/5">
                <h4 className="text-md text-gray-600 mt-4 font-serif justify-self-start">Book an Appointment</h4>
                <form action="" className="flex flex-col w-4/5 mx-auto p-2">
                    <input type="text" name="" id="" className="form-input" placeholder="Name" />
                    <input type="text" name="" id="" className="form-input" placeholder="Email" />
                    <input type="date" name="" id="" className="form-input" placeholder="Date" />
                    <button type="submit" className="p-4 bg-orange-200 hover:bg-orange-300 transition-all delay-200 text-gray-600 my-2 rounded-sm">Book an Appointment</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Baner