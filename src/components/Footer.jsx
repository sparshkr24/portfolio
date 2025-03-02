import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const SocialLinks = () => {
  return (
    <>
      <a href="https://www.linkedin.com/in/sparshkumar24/" target="_blank" rel="noopener noreferrer" className='hover:scale-110 ease-in-out duration-150 hover:text-white'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/sparshkr24" target="_blank" rel="noopener noreferrer" className='hover:scale-110 ease-in-out duration-150 hover:text-white'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="mailto:sparsh241-1502@gmail.com" target="_blank" rel="noopener noreferrer" className='hover:scale-110 ease-in-out duration-150 hover:text-white'>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://leetcode.com/u/Sparsh_kr/" target="_blank" rel="noopener noreferrer" className='hover:scale-110 ease-in-out duration-150 hover:text-white'>
        <FontAwesomeIcon icon={faCode} />
      </a>
    </>
  )
}

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-8 sm:px-16 py-8 text-purple-700">
      <p className="font-semibold text-xs">© Sparsh 2025</p>
      <div className="flex space-x-4">
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer
