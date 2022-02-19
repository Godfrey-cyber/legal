import Image from 'next/image'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Image1 from "../public/images/cottage.jpg"

const contacts = () => {
  return (
      <>
        <Header />
        <div className="flex flex-col w-screen h-[600px] lg:h-screen relative overflow-x-hidden">
            <div className="flex flex-col relative top-0 left-0 h-full w-full overflow-x-hidden">
                <Image className="overflow-x-hidden" src={Image1} layout="fill" objectfit="contain" alt="imageOne"/>
            </div>
            <div className="flex flex-col h-full lg:w-4/5 items-center justify-center text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <div className="flex flex-col justify-start space-y-3 lg:w-4/5 mx-auto">
                    <p className="text-4xl text-white font-serif font-normal">Contact Us</p>
                    <p className="text-md text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-12 space-x-5 lg:space-y-4 py-8 px-6 lg:px-24 bg-gray-50 w-full h-full">
            <div className="flex flex-col col-span-12 lg:col-span-8 space-y-4">
                <form action="" className="p-3 flex flex-col space-y-3 w-fill">
                    <div className="grid grid-cols-12 space-y-3 lg:space-x-3 lg:space-y-0 items-center w-fill">
                        <input placeholder="First Name" type="text" name="" id="" className="contact-input" />
                        <input placeholder="Last Name" type="text" name="" id="" className="contact-input" />
                    </div>
                    <input placeholder="Email" type="email" name="" id="" className="contact-input" />
                    <textarea placeholder="Write your message..." className="resize-none text-gray-500 border border-gray-300 focus:outline-none focus:border-orange-200 p-4" name="" id="" cols="30" rows="10"></textarea>
                </form>
                <span className="my-4 w-1/4">
                <button type="submit" className="p-4 whitespace-nowrap bg-orange-200 hover:bg-orange-300 transition-all delay-200 text-gray-600 rounded-sm">Send a Message</button>
            </span> 
            </div>
            <div className="flex flex-col col-span-12 lg:col-span-4 bg-white space-y-4 p-6 px-4">
                <h3 className="text-3xl text-gray-900 font-normal my-4 font-serif">Contacts Info</h3>
                <div className="span flex flex-col space-y-3">
                    <p className="text-gray-900 font-sm">Address:</p>
                    <p className="text-gray-500 font-sm">34 Street Name, City Name Here,<br /> Kenya</p>
                  </div>
                  <div className="span flex flex-col space-y-3">
                    <p className="text-gray-900 font-sm">Phone:</p>
                    <p className="text-gray-500 font-sm">+254 712345678</p>
                  </div>
                  <div className="span flex flex-col space-y-3">
                    <p className="text-gray-900 font-sm">Email:</p>
                    <p className="text-gray-500 font-sm">info@companyname@gmail.com</p>
                </div>
            </div>
          </div>
                    

          <Footer />
    </>

  )
}

export default contacts