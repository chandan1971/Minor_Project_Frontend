import React from 'react'
import logo from '../Assets/logo-nit.jpg'

import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import { FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Searchbar from './SearchBar'

const Navbar = () => {
  return (
    <nav className='  flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt='logo'  width="200rem"></img>
        </div>
        {/* <div className='m-8 flex items-center justify_center gap-4 text-xl text-white '>
            <Searchbar></Searchbar>
            <div className='hover:cursor-pointer hover:text-cyan-300'>Home</div>
            <div className='hover:cursor-pointer hover:text-cyan-300'>About </div>
            <div className='hover:cursor-pointer hover:text-cyan-300'>Contact</div>
        </div> */}
        <div className='m-8 flex items-center justify_center gap-4 text-2xl '>
            <Link to={'#'}>
              <FaLinkedin  className='text-white hover:cursor-pointer hover:text-cyan-300'></FaLinkedin>
            </Link>
            <Link to={'#'}>
             <FaYoutube className='text-white hover:cursor-pointer hover:text-cyan-300'></FaYoutube>
            </Link>
            <Link to={'#'}>
              <FaTwitterSquare  className='text-white hover:cursor-pointer hover:text-cyan-300'></FaTwitterSquare>
            </Link>
            <Link to={'#'} >
              <FaInstagram  className='text-white hover:cursor-pointer hover:text-cyan-300'></FaInstagram>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar