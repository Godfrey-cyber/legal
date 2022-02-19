import React from 'react'
import Header from "../components/Header"
import Image from "next/image"
import Image1 from "../public/images/cottage.jpg"
import Practice from "../components/Practice"
import Footer from '../components/Footer'

const practiceAreas = () => {
    return (
        <>
        <Header />
        <div className="flex flex-col w-screen h-[600px] lg:h-screen relative overflow-x-hidden">
            <div className="flex flex-col relative top-0 left-0 h-full w-full">
                <Image className="overflow-x-hidden" src={Image1} layout="fill" objectfit="contain" alt="imageone"/>
            </div>
            <div className="flex flex-col h-full lg:w-4/5 items-center justify-center text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <div className="flex flex-col justify-start space-y-3 lg:w-4/5 mx-auto">
                    <p className="text-4xl text-white font-serif font-normal">Practice Areas</p>
                    <p className="text-md text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.</p>
                </div>
            </div>
        </div>
        <Practice />
        <Footer />
    </>
  )
}

export default practiceAreas