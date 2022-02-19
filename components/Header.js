import React from 'react'
import { VscLaw } from "react-icons/vsc"
import {useRouter } from "next/router"
import { AiOutlineBars } from 'react-icons/ai'

const Header = () => {
    const router = useRouter()
  return (
    <div className="flex items-center justify-between w-screen top-0 sticky z-50 py-2 lg:py-5 bg-orange-200 px-6 lg:px-24">
        <div onClick={() => router.push("/")} className="flex space-x-2 hover:cursor-pointer">
            <VscLaw className="practice-icon"/>
            <h3 className="text-gray-800 text-3xl font-semibold">Legal</h3>
        </div>
        <div className="hidden items-center space-x-5 lg:inline-flex">
            <p onClick={() => router.push("/")} className="nav-links text-md">Home</p>
            <p onClick={() => router.push("/practiceAreas")} className="nav-links text-md">Practice Area</p>
            <p onClick={() => router.push("/happyCustomers")} className="nav-links text-md">Testmonials</p>
            <p onClick={() => router.push("/about")} className="nav-links text-md">About</p>
            <p onClick={() => router.push("/contacts")} className="nav-links text-md">Contact</p>
        </div>
          <span className="p-4 flex lg:hidden cursor-pointer">
              <AiOutlineBars className="text-gray-800 text-2xl" />
        </span>
    </div>
  )
}

export default Header