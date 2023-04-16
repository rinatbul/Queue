import { Swiper, SwiperSlide } from 'swiper/react';
// import s from './Slider.module.css';
import 'swiper/css';

export const Slider= () => {
    const slides=[
        {img_url:'https://www.researchgate.net/publication/328101815/figure/fig18/AS:678371704987657@1538747826575/The-sample-clean-image-200X200-pixels.ppm'},
        {img_url:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0076fab4-449e-4d55-9694-840e59ca2201/ddbf4px-fdf2bba4-bb64-4c4c-affb-ad8d95e5430d.png/v1/fill/w_200,h_200,strp/_art_trade__cacti_by_legendarypixel_ddbf4px-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAwIiwicGF0aCI6IlwvZlwvMDA3NmZhYjQtNDQ5ZS00ZDU1LTk2OTQtODQwZTU5Y2EyMjAxXC9kZGJmNHB4LWZkZjJiYmE0LWJiNjQtNGM0Yy1hZmZiLWFkOGQ5NWU1NDMwZC5wbmciLCJ3aWR0aCI6Ijw9MjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.0UjRUiq_6PisW6ufQLmr2tyRwleDpEFuaT33fcjOmRo'},
        {img_url:'https://upload.wikimedia.org/wikipedia/fr/7/71/Quebec_citadelles_200x200.png'}
    ]
    return (
        <div>
            <Swiper
                slidesPerView={1}
                autoplay
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {slides.map(slide=>{
                    return <SwiperSlide><img src={slide.img_url}/></SwiperSlide>
                })}
            </Swiper>
        </div>

    );
};