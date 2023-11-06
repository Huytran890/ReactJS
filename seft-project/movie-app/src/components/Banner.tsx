import ButtonWatch from "./ButtonWatch"

const Banner = () => {
    return (
        <section className='w-full relative'>
            <img src="https://movie-site-delta.vercel.app/img/home-background.png" alt="" className='w-full h-full object-cover rounded-[8px] select-none' />

            <div className='absolute top-1/2 -translate-y-1/2 left-10 selection:bg-primary'>
                <h2 className='font-semibold text-3xl max-w-[260px] break-words leading-normal ú'>Hitman's Wife's Bodyguard</h2>
                <p className='text-sm mt-[10px] mb-[20px] text-primary selection:text-white capitalize'>Releasing 23 july</p>
                <a href="" className='flex items-center gap-x-3'>
                    <ButtonWatch className="hover:opacity-80" />
                    <span className='select-none'>Watch the trailler</span>
                </a>
            </div>
        </section>
    )
}

export default Banner