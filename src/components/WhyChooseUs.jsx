import {
    FaTruck,
    FaShieldAlt,
    FaUndoAlt,
    FaHeadset,
} from "react-icons/fa";

function WhyChooseUs() {
    const features = [
        {
            icon: <FaTruck />,
            title: "Free Shipping",
            description:
                "Enjoy free shipping on all orders above $100 anywhere in the country.",
        },
        {
            icon: <FaShieldAlt />,
            title: "Secure Payments",
            description:
                "Your payments are protected with trusted and encrypted checkout.",
        },
        {
            icon: <FaUndoAlt />,
            title: "Easy Returns",
            description:
                "30-day hassle-free return policy for complete peace of mind.",
        },
        {
            icon: <FaHeadset />,
            title: "24/7 Support",
            description:
                "Our support team is always ready to help whenever you need us.",
        },
    ];

    return (
        <section className="py-24 bg-[#F8F4EF] mt-[50px] md:mt-[100px]">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[4px] text-[#AF823D] font-semibold">
                        Why Choose Us
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4">
                        Experience Shopping
                        <br />
                        Like Never Before
                    </h2>

                    <p className="text-gray-500 max-w-2xl mx-auto mt-5 leading-8">
                        We combine premium quality, elegant design and exceptional
                        customer service to create an unforgettable shopping
                        experience.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  ">

                    {features.map((item, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 duration-300"
                        >

                            <div className="w-20 h-20 mx-auto rounded-full bg-[#AF823D] text-white flex items-center justify-center text-3xl mb-6">
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-semibold mb-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 leading-7">
                                {item.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default WhyChooseUs;