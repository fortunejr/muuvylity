import React from 'react'
import { logo } from '../../imports'
import { FaFacebook, FaInstagram, FaLinkedinIn  } from "react-icons/fa";
import { Link } from 'react-router';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer className='bg-customBlue'>
  <div className='container mx-auto px-4 sm:px-6 lg:px-10 py-10'>
    <div className='flex flex-col lg:flex-row justify-between gap-10'>
      {/* Logo and Description */}
      <div className='lg:w-1/3'>
      <Link to = {'/'}>
        <img className='h-14 mb-4' src={logo} alt="LumiGrid logo" />
      </Link>
        <p className='text-white text-sm leading-relaxed'>
          At Omphoenix, we specialize in providing comprehensive services and solutions to the oil and gas industry and other allieds.
        </p>
      </div>

      {/* Contact Info */}
      <div className='lg:w-1/3'>
        <h2 className='font-bold text-white pb-3 pt-7 lg:pt-0'>Contact Information</h2>
        <p className='text-white text-sm'>📍 220 P. T. I. Rd, Effurun, Uvwie 330102, Delta</p>
        <p className='text-white text-sm mt-2'>📧 Omphoenixlimited@gmail.com</p>
      </div>

      {/* Social Icons */}
      <div className='lg:w-1/3 pt-7 lg:pt-0'>
        <h2 className='font-bold text-white pb-3'>Follow Us</h2>
        <div className="flex items-center gap-4 text-white">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/share/14zFWkJDCp/"
          >
            <FaFacebook size={20} />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/marere_mavo/"
          >
            <FaInstagram size={20} />
          </a>
          
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/akporowho-mariere-922862209/"
          >
            <FaLinkedinIn size={20}/>
          </a>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <p className="text-center text-sm mt-10 text-white">
      &copy; {year} Omphoenix Limited
    </p>
  </div>
</footer>
  )
}

export default Footer