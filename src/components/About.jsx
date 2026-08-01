import { Link } from "react-router-dom";
import aboutImage from "../assets/Images/WebImages/CategoryImages/beauty.png";

function About() {
    return (
        <section className="py-16 md:py-24 bg-[#F8F4EF] mb-[50px] md:mb-[100px]">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left Image */}

                    <div className = "relative flex justify-center">

                        <img
                            src={aboutImage}
                            alt="About Velvora"
                            className="rounded-3xl shadow-xl w-full max-w-md lg:max-w-full h-[300px] md:h-[550px] object-cover"
                        />

                        <div className="absolute -bottom-5 right-1/2 translate-x-1/2 lg:right-[-30px] lg:translate-x-0 bg-white shadow-xl rounded-2xl px-6 py-4 text-center">

                            <h3 className="text-4xl font-bold text-[#AF823D]">
                                10+
                            </h3>

                            <p className="text-gray-600 mt-2">
                                Years Of Excellence
                            </p>

                        </div>

                    </div>

                    {/* Right Content */}

                    <div className="text-center lg:text-left">

                        <span className="text-[#AF823D] uppercase tracking-[4px] font-semibold">
                            About Velvora
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold mt-5 leading-tight">
                            Luxury Furniture &
                            <br />
                            Timeless Home Decor
                        </h2>

                        <p className="text-gray-600 mt-8 leading-8 max-w-2xl mx-auto lg:mx-0">
                            At Velvora, we believe every home deserves timeless
                            elegance. Our carefully selected furniture and décor
                            pieces blend premium craftsmanship with modern
                            aesthetics to create warm, sophisticated living
                            spaces you'll love for years.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">

                            <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4 text-center lg:text-left">

                                <div className="w-14 h-14 rounded-full bg-[#AF823D] text-white flex items-center justify-center text-2xl shrink-0">
                                    ✓
                                </div>

                                <div>

                                    <h4 className="font-semibold text-lg">
                                        Premium Quality
                                    </h4>

                                    <p className="text-gray-500 mt-2">
                                        Carefully selected luxury materials.
                                    </p>

                                </div>

                            </div>

                            <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4 text-center lg:text-left">

                                <div className="w-14 h-14 rounded-full bg-[#AF823D] text-white flex items-center justify-center text-2xl shrink-0">
                                    ★
                                </div>

                                <div>

                                    <h4 className="font-semibold text-lg">
                                        Modern Design
                                    </h4>

                                    <p className="text-gray-500 mt-2">
                                        Elegant styles for every interior.
                                    </p>

                                </div>

                            </div>

                            <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4 text-center lg:text-left">

                                <div className="w-14 h-14 rounded-full bg-[#AF823D] text-white flex items-center justify-center text-2xl shrink-0">
                                    🚚
                                </div>

                                <div>

                                    <h4 className="font-semibold text-lg">
                                        Fast Delivery
                                    </h4>

                                    <p className="text-gray-500 mt-2">
                                        Safe and reliable shipping worldwide.
                                    </p>

                                </div>

                            </div>

                            <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4 text-center lg:text-left">

                                <div className="w-14 h-14 rounded-full bg-[#AF823D] text-white flex items-center justify-center text-2xl shrink-0">
                                    ❤
                                </div>

                                <div>

                                    <h4 className="font-semibold text-lg">
                                        Customer First
                                    </h4>

                                    <p className="text-gray-500 mt-2">
                                        Dedicated support for every customer.
                                    </p>

                                </div>

                            </div>

                        </div>

                        <Link
                            to="/about"
                            className="inline-block mt-12 bg-[#AF823D] text-white px-8 py-4 rounded-full hover:bg-black duration-300"
                        >
                            Learn More
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;