import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { GiInjustice } from 'react-icons/gi'

const Footer = () => {
  return (
    <div className="component bg-black">
        <div className="grid grid-cols-12 space-x-6">
            <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col space-y-4">
                <p className="text-white text-2xl font-serif my-4">About Us</p>
                <p className="text-white text-sm leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id similique natus cum nostrum facere libero iste, assumenda minus laborum.</p>
                <span className="flex space-x-3 item-center">
                    <FaFacebook className="footer-icon" />
                    <FaLinkedinIn className="footer-icon" />
                    <BsTwitter className="footer-icon" />
                    <AiFillInstagram className="footer-icon" />
                </span>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-9 grid grid-cols-12 space-x-2 lg:space-y-4">
                <div className="col-span-3 space-y-4 flex flex-col">
                    <p className="text-white text-2xl font-serif my-4">Resources</p>
                    <p className="text-white text-sm">About us</p>
                    <p className="text-white text-sm">Testmonial</p>
                    <p className="text-white text-sm">Terms of Service</p>
                    <p className="text-white text-sm">Privacy</p>
                    <p className="text-white text-sm">Contact us</p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-4 flex flex-col">
                    <p className="text-white text-2xl font-serif my-4">Quick Links</p>
                    <p className="text-white text-sm">About us</p>
                    <p className="text-white text-sm">Testmonial</p>
                    <p className="text-white text-sm">Terms of Service</p>
                    <p className="text-white text-sm">Privacy</p>
                    <p className="text-white text-sm">Contact us</p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-4 flex flex-col">
                    <p className="text-white text-2xl font-serif my-4">Support</p>
                    <p className="text-white text-sm">About us</p>
                    <p className="text-white text-sm">Testmonial</p>
                    <p className="text-white text-sm">Terms of Service</p>
                    <p className="text-white text-sm">Privacy</p>
                    <p className="text-white text-sm">Contact us</p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-4 flex flex-col">
                    <p className="text-white text-2xl font-serif my-4">Company</p>
                    <p className="text-white text-sm">About us</p>
                    <p className="text-white text-sm">Testmonial</p>
                    <p className="text-white text-sm">Terms of Service</p>
                    <p className="text-white text-sm">Privacy</p>
                    <p className="text-white text-sm">Contact us</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer