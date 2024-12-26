import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { GiBookshelf } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { PiUserCircleLight } from "react-icons/pi";
import { PiHeartThin } from "react-icons/pi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import avatarImage from "../assets/avatar.png"

const navigation = [
  {name: "Dashboard", href:"/dashboard"},
  {name: "Orders", href:"/orders"},
  {name: "Cart", href:"/cart"},
  {name: "Check Out", href:"/checkout"},
]

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const currentUser = true;
  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
        <nav className='flex justify-between items-center'>
            {/* Left div */}
            <div className='flex items-center md:gap-16 gap-4'>
                <Link to='/'><GiBookshelf /></Link>

                <div className='relative sm:w-72 w-40 space-x-2'>
                    <IoMdSearch className='absolute inline-block left-4 inset-y-2'/>
                    <input type="text" placeholder="Search Here" 
                        className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none" />
                </div>

            </div>


            {/* right div */}
            <div className='relative flex items-center md:space-x-3 space-x-2'>
            <div>
              {
                currentUser ? 
                <>
                  <button onClick={()=> setIsDropdownOpen(!isDropdownOpen)}>
                    <img src={avatarImage} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500': ''}`}/>
                  </button>
                  {/* Show Dropdown */}
                  {
                    isDropdownOpen && (
                      <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                        <ul className='py-2'>
                          {
                            navigation.map((item)=>( 
                              <li key={item.name} onClick={()=> setIsDropdownOpen(false)}>
                                <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>{item.name}</Link>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    )
                  }
                </> : <Link to="/login"><PiUserCircleLight className='size-6' /></Link>
              }
            </div>
            
            <button className='hiddel sm:block'> <PiHeartThin className='size-6'/> </button>
            <Link to="/cart" className='bg-primary p-1 sm:px-6 px-2 flex item-center rounded-sm'> 
              <HiOutlineShoppingCart />
              <span className='text-sm font-semibold sm:ml-1'>0</span>
            </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar