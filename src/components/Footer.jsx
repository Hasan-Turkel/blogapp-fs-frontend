import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi'

const Footer = () => {
  return (
    <> 
    <div className='empty-div'></div>
    <footer className='w-100 text-center p-3'>
    <div className='d-flex justify-content-center gap-5'>

        <a href="https://www.linkedin.com/in/hasan-turkel/" target='blank'><BiLogoLinkedin className='fs-2 text-primary'/></a>

        <a href="https://github.com/Hasan-Turkel" target='blank'><AiFillGithub className='fs-2 text-dark'/></a>

        <a href="mailto:mhturkel@gmail.com" target='blank'><BiLogoGmail className='fs-2 text-danger'/></a>
      
      
      </div>
  </footer></>
   
  )
}

export default Footer