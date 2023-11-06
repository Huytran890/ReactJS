import { useEffect, useState } from 'react'
import Container from '../components/Container'
import { Link, useLocation } from 'react-router-dom'
import { mergeClassName } from '../Util'
import { BiSearchAlt2 } from "react-icons/bi";

const MENU_CLASS = `
    p-1.5
    hover:bg-primary
    rounded-md
    transition-colors 
    duration-300
`
const MENU_CLASS_ACTIVE = `
    bg-primary
`
const Header = () => {
    const location = useLocation();
    const [pathName, setPathName] = useState('');

    const getMenuClass = (path: string) => {
        if (path === pathName) {
            return mergeClassName(MENU_CLASS, MENU_CLASS_ACTIVE);
        }
        return mergeClassName(MENU_CLASS, '');
    }

    useEffect(() => {
        setPathName(location.pathname);
    }, [location.pathname]);

    return (
        <header>
            <Container className='flex items-center justify-between'>
                {/* Brands and menu */}
                <div className='flex items-center gap-6'>
                    {/* Brands */}
                    <h1 className='text-2xl uppercase font-semibold'>
                        <Link to={'/'}>Movie
                            <span className='text-primary'>Vennie</span>
                        </Link>
                    </h1>
                    {/* Menu */}
                    <div className='flex items-center gap-1.5'>
                        <Link className={getMenuClass('/popular')} to={'/popular'}>Popular</Link>
                        <Link className={getMenuClass('/now')} to={'/now'}>Now</Link>
                    </div>
                </div>

                <div className='flex items-center gap-x-1.5'>
                    {/* Search box */}
                    <div className='max-w-[260px] w-full flex items-center py-[8px] px-[15px] rounded-3xl bg-[#2d2e37] gap-3'>
                        <input type="search" className='w-full border-none outline-none text-[#fcfeff] bg-transparent text-sm' placeholder='Search Movie' />
                        <BiSearchAlt2 className='text-2xl cursor-pointer hover:text-primary transition-colors duration-300' />
                    </div>

                    <Link to={'/'}>
                        <img src="https://movie-site-delta.vercel.app/img/user.png" alt="" className='w-[60px] h-[60px] rounded-[50%] object-cover object-center' />
                    </Link>
                </div>
            </Container>
        </header>
    )
}

export default Header