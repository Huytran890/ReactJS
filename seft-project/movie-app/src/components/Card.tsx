import { MovieType } from "../Util"
import ButtonWatch from "./ButtonWatch";

const Card = ({ slide }: { slide: MovieType }) => {
    const thumb = `https://www.themoviedb.org/t/p/w220_and_h330_face`;
    return (
        <div className='w-full h-[380px] relative overflow-hidden'>
            <img src={`${thumb}${slide.backdrop_path}`} alt="" className='w-full h-full object-cover transition-all ease-linear duration-500 hover:scale-105' />
            <div className='absolute bottom-0 left-0 flex justify-between p-4 w-full'>
                <div className='w-full flex justify-between items-center relative'>
                    <div className=''>
                        <h2 className='line-clamp-2 break-words capitalize font-semibold text-xl'>{slide.title}</h2>
                        <p className='text-primary'>action</p>
                    </div>
                    <ButtonWatch className='absolute bottom-0 right-0 opacity-80 hover:opacity-70 z-10' />
                </div>
            </div>
        </div>
    )
}

export default Card