import { FaStar } from "react-icons/fa";

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Sophia Williams",
            role: "Interior Designer",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            review:
                "Velvora completely transformed my living room. The quality, elegance, and premium finish exceeded my expectations. Highly recommended!",
        },
        {
            id: 2,
            name: "James Anderson",
            role: "Home Owner",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            review:
                "Amazing shopping experience. Fast delivery, premium products, and excellent customer service. I will definitely shop again.",
        },
        {
            id: 3,
            name: "Emily Johnson",
            role: "Architect",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            review:
                "Every product looks exactly like the pictures. The craftsmanship is outstanding and adds luxury to every space.",
        },
    ];

    return (
        <section className="py-12 md:py-20 bg-white">

            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}

                <div className="text-center mb-10 md:mb-16">

                    <span className="uppercase tracking-[3px] md:tracking-[5px] text-[#AF823D] text-xs md:text-sm font-semibold">
                        Testimonials
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold mt-3">
                        What Our Clients Say
                    </h2>

                    <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-7">
                        Trusted by homeowners and interior designers who value
                        premium quality and timeless luxury.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {testimonials.map((item) => (

                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl duration-300 p-6 text-center"
                        >

                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-[#AF823D]"
                            />

                            <div className="flex justify-center gap-1 text-[#AF823D] mt-5">

                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>

                            <p className="text-gray-600 mt-5 leading-7 text-sm md:text-base">
                                "{item.review}"
                            </p>

                            <h3 className="text-xl font-semibold mt-6">
                                {item.name}
                            </h3>

                            <p className="text-[#AF823D] text-sm mt-1">
                                {item.role}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Testimonials;