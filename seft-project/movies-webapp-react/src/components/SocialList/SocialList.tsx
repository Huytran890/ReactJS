import React from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FaFacebookF, FaYoutube, FaGithub } from 'react-icons/fa'
import classnames from 'classnames'
type Props = {
    className?: string
}

const SocialList = (props: Props) => {
    return (
        <div className={classnames(props.className, 'socials flex  items-center gap-2')}>
            <a href="https://www.facebook.com/Vhquy" className='transition-transform hover:-translate-y-[6px] duration-300 ease-in-out py-[6px] px-2 md:px-3 bg-[#3b5998] flex items-center text-white text-[10px] gap-1'><span className='icon'><FaFacebookF /></span> <span className='md:inline hidden'>Facebook</span></a>
            <a href="javascript:void(0)" className='transition-transform hover:-translate-y-[6px] duration-300 ease-in-out py-[6px] px-2 md:px-3 bg-[#cb2027] flex items-center text-white text-[10px] gap-1'><span className='icon'><FaYoutube /></span><span className='md:inline hidden'>Youtube</span></a>
            <a href="https://github.com/TrinhVinhQuy/react" className='transition-transform hover:-translate-y-[6px] duration-300 ease-in-out py-[6px] px-2 md:px-3 bg-[#000000] flex items-center text-white text-[10px] gap-1'><span className='icon'><FaGithub /></span><span className='md:inline hidden'>Github</span></a>
        </div>
    )
}

export default SocialList