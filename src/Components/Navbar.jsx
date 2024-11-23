import React from 'react'
import logo from '../Assets/Untitled design.png'

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
            <Link to={'https://www.instagram.com/nicmeity/'} target='_blank'>
              <FaLinkedin  className='text-white hover:cursor-pointer hover:text-cyan-300'></FaLinkedin>
            </Link>
            <Link to={'https://www.youtube.com/nationalinformaticscentre'} target='_blank'>
             <FaYoutube className='text-white hover:cursor-pointer hover:text-cyan-300'></FaYoutube>
            </Link>
            <Link to={'https://x.com/NICMeity?mx=2'} target='_blank'>
              <FaTwitterSquare  className='text-white hover:cursor-pointer hover:text-cyan-300'></FaTwitterSquare>
            </Link>
            <Link to={'https://www.instagram.com/nicmeity/'} target='_blank' >
              <FaInstagram  className='text-white hover:cursor-pointer hover:text-cyan-300'></FaInstagram>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar