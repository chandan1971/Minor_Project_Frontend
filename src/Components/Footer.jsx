import React from 'react'
import {Footer} from 'flowbite-react'
import {BsDiscord, BsGithub, BsInstagram, BsTwitter,BsYoutube,BsThreads} from 'react-icons/bs'
import {SiCodeforces, SiLeetcode, SiLinkedin} from 'react-icons/si'
import {Link} from "react-router-dom"

export default function FooterCom(){
    return <Footer container className=' bg-inherit border border-t-8 border-teal-500'>
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link to="/" className='font-bold text-4xl'>
                  <span className='px-2 py-1 bg-gradient-to-r  from-purple-500   to-blue-500 rounded-lg text-white'>NIC</span>
                  BMS Engine
                </Link>
                </div>
                <div className='grid grid-cols-2 gap-8  mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                    <Footer.Title title='About'></Footer.Title>
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://www.nic.in/' target='_blank' rel='noopener norefere' >
                            Our Website
                        </Footer.Link>
                        <Footer.Link href='https://www.nic.in/about-this-website/' target='_blank' rel='noopener norefere' >
                            About Us
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Follow Us'></Footer.Title>
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://www.instagram.com/nicmeity/' target='_blank' rel='noopener norefere' >
                            Instagram
                        </Footer.Link>
                        <Footer.Link href='https://x.com/NICMeity?mx=2' target='_blank' rel='noopener norefere' >
                            Twitter
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Privacy Policy'></Footer.Title>
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://www.nic.in/terms-of-use/' target='_blank' rel='noopener norefere' >
                            Terms & Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider></Footer.Divider>
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='https://www.nic.in/' by="National Informatics Centre" year={new Date().getFullYear()}></Footer.Copyright>
            </div>
            <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                <Footer.Icon href='https://www.instagram.com/nicmeity/' icon={BsInstagram}></Footer.Icon>
                <Footer.Icon href='https://x.com/NICMeity?mx=2' icon={BsTwitter}></Footer.Icon>
                <Footer.Icon href='https://in.linkedin.com/company/nicmeity' icon={SiLinkedin}></Footer.Icon>
                <Footer.Icon href='https://www.youtube.com/nationalinformaticscentre' icon={BsYoutube}></Footer.Icon>
                <Footer.Icon href='https://www.threads.net/@nicmeity' icon={BsThreads}></Footer.Icon>
            </div>
        </div>
    </Footer>
}