import React from 'react'
import { AiOutlineBank } from "react-icons/ai"
import { BsShieldShaded } from "react-icons/bs"
import { GiPistolGun, GiReceiveMoney } from "react-icons/gi"
import { MdOutlineFlight } from "react-icons/md"
import { FaHouseUser } from "react-icons/fa"

const Practice = () => {
  return (
    <div className="component">
        <span className="component-span">
            <h3 className="c-title">Practice Areas</h3>
            <h3 className="c-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        </span>
        <div className="grid grid-cols-12 lg:gap-12 space-y-5 lg:space-y-0">
            <div className="practice-card group">
                <AiOutlineBank className="practice-icon group-hover:text-gray-600"/>  
                <p className="practice-t group-hover:text-orange-400">Bankruptcy Law</p>
                <p className="practice-p">Lorem ipsum dolor amet consectetur adipisicing elit sit amet consectetur.</p>
              </div>
              <div className="practice-card group">
                <BsShieldShaded className="practice-icon group-hover:text-gray-600"/>  
                <p className="practice-t group-hover:text-orange-400">Business Law</p>
                <p className="practice-p">Lorem ipsum dolor amet consectetur adipisicing elit sit amet consectetur.</p>
              </div>
              <div className="practice-card group">
                <GiReceiveMoney className="practice-icon group-hover:text-gray-600"/>  
                <p className="practice-t group-hover:text-orange-400">Civil Rights Law</p>
                <p className="practice-p">Lorem ipsum dolor amet consectetur adipisicing elit sit amet consectetur.</p>
              </div>
              <div className="practice-card group">
                <GiPistolGun className="practice-icon group-hover:text-gray-600"/>  
                <p className="practice-t group-hover:text-orange-400">Criminal Law</p>
                <p className="practice-p">Lorem ipsum dolor amet consectetur adipisicing elit sit amet consectetur.</p>
            </div>
            <div className="practice-card group">
                <MdOutlineFlight className="practice-icon group-hover:text-gray-600"/>  
                <p className="practice-t group-hover:text-orange-400">Immigration Law</p>
                <p className="practice-p">Lorem ipsum dolor amet consectetur adipisicing elit sit amet consectetur.</p>
            </div>
            <div className="practice-card group">
                <FaHouseUser className="practice-icon group-hover:text-gray-600"/>  
                <p className="practice-t group-hover:text-orange-400">Family Law</p>
                <p className="practice-p">Lorem ipsum dolor amet consectetur adipisicing elit sit amet consectetur.</p>
            </div>
        </div>
    </div>
  )
}

export default Practice