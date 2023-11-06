// import icons
import { BiHomeAlt, BiSolidHot, BiTv, BiHeart } from 'react-icons/bi';
import { AiOutlineCompass } from "react-icons/ai";

import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="fixed w-full bottom-0 nav-mobile-color p-4 z-50 xl:w-auto xl:top-1/2 xl:left-[10px] xl:-translate-y-1/2">
            {/* Nav inner */}
            <div className="w-full flex justify-between items-center text-white gap-y-8 xl:flex-col xl:w-auto">
                <Link
                    to="/"
                    className="flex flex-col items-center justify-center w-full h-full text-[#fcfeff] cursor-pointer nav-active"
                >
                    <BiHomeAlt size={18} />
                    <p className='text-[12px]'>Home</p>
                </Link>
                <Link
                    to="/"
                    className="flex flex-col items-center justify-center w-full h-full cursor-pointer text-[#b7b7b7] nav-hover"
                >
                    <BiSolidHot size={18} />
                    <p className='text-[12px]'>Trending</p>
                </Link>
                <Link
                    to="/"
                    className="flex flex-col items-center justify-center w-full h-full cursor-pointer text-[#b7b7b7] nav-hover"
                >
                    <AiOutlineCompass size={18} />
                    <p className='text-[12px]'>Explore</p>
                </Link>
                <Link
                    to="/"
                    className="flex flex-col items-center justify-center w-full h-full cursor-pointer text-[#b7b7b7] nav-hover"
                >
                    <BiTv size={18} />
                    <p className='text-[12px]'>Movies</p>
                </Link>
                <Link
                    to='/'
                    className="flex flex-col items-center justify-center w-full h-full cursor-pointer text-[#b7b7b7] nav-hover"
                >
                    <BiHeart size={18} />
                    <p className='text-[12px]'>Favorites</p>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar