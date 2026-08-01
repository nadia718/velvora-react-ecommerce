import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import heroSliderData from "../data/sliderData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

function Slider() {
    return (
        <>
            <section className="max-w-full mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    className="heroSwiper"
                >
                    {heroSliderData.map((slide) => (
                        <SwiperSlide key={slide.id}>

                            <div className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">

                                {/* Background Image */}

                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Dark Overlay */}

                                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20"></div>

                                {/* Content */}

                                <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center justify-center md:justify-start px-5 md:px-6">

                                    <div className="max-w-2xl text-center md:text-left">

                                        <p className="uppercase tracking-[3px] md:tracking-[6px] text-[#D4AF37] text-xs sm:text-sm font-semibold mb-4 md:mb-5">
                                            Velvora Collection
                                        </p>

                                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                            {slide.title}
                                        </h1>

                                        <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-7 md:leading-8 mt-5 md:mt-8 max-w-xl mx-auto md:mx-0">
                                            {slide.subtitle}
                                        </p>

                                        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-5">

                                            <Link
                                                to={slide.buttonLink}
                                                className="w-full sm:w-auto text-center bg-[#C8A97E] hover:bg-white hover:text-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-500"
                                            >
                                                {slide.buttonText}
                                            </Link>

                                            <Link
                                                to="/products"
                                                className="w-full sm:w-auto text-center border border-white text-white hover:bg-white hover:text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-500"
                                            >
                                                View Products
                                            </Link>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </SwiperSlide>
                    ))}

                </Swiper>
            </section>
        </>
    )
}

export default Slider;