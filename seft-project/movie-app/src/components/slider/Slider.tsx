import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { MovieType } from '../../Util';
import Card from '../Card';

type SliderProps = {
    slides?: MovieType[];
    props?: Record<string, unknown>;
};
export const Slider = ({ slides, props }: SliderProps) => {
    return (
        <Swiper
            {...props}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            slidesPerView={1}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            breakpoints={{
                280: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                510: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                750: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                900: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}
        >
            {slides && slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <Card slide={slide} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}