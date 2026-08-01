import { useState } from "react";

function ContactSection() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        // Submit Logic

        console.log(formData);

        setSuccess(true);

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });

        setTimeout(() => {
            setSuccess(false);
        }, 4000);

    };

    return (

        <section id="contact" className="py-12 md:py-20 bg-[#FAF8F5]">

            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}

                <div className="text-center mb-12 md:mb-16">

                    <span className="uppercase tracking-[4px] text-[#AF823D] text-sm font-semibold">
                        Contact Us
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold mt-3">
                        We'd Love To Hear From You
                    </h2>

                    <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
                        Have questions about our products or need interior design
                        assistance? Send us a message and our team will get back to
                        you shortly.
                    </p>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Left Side */}

                    <div className="bg-[#111111] text-white rounded-3xl p-8 md:p-10">

                        <h3 className="text-3xl font-bold mb-8">
                            Contact Information
                        </h3>

                        <div className="space-y-8">

                            <div>

                                <h4 className="text-[#AF823D] font-semibold mb-2">
                                    Address
                                </h4>

                                <p className="text-gray-300">
                                    DHA Phase 6, Lahore, Pakistan
                                </p>

                            </div>

                            <div>

                                <h4 className="text-[#AF823D] font-semibold mb-2">
                                    Phone
                                </h4>

                                <p className="text-gray-300">
                                    +92 300 1234567
                                </p>

                            </div>

                            <div>

                                <h4 className="text-[#AF823D] font-semibold mb-2">
                                    Email
                                </h4>

                                <p className="text-gray-300">
                                    info@velvora.com
                                </p>

                            </div>

                            <div>

                                <h4 className="text-[#AF823D] font-semibold mb-2">
                                    Working Hours
                                </h4>

                                <p className="text-gray-300">
                                    Monday - Saturday
                                </p>

                                <p className="text-gray-300">
                                    9:00 AM - 6:00 PM
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Right Side Form */}

                    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#AF823D]"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#AF823D]"
                                />

                            </div>

                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#AF823D]"
                            />

                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#AF823D]"
                            />

                            <textarea
                                rows="6"
                                name="message"
                                placeholder="Write Your Message..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none resize-none focus:border-[#AF823D]"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-[#AF823D] text-white py-4 rounded-xl font-semibold hover:bg-[#8f682f] duration-300"
                            >
                                Send Message
                            </button>

                            {success && (

                                <div className="bg-green-100 border border-green-300 text-green-700 rounded-xl p-4 text-center">

                                    ✅ Thank you! Your message has been sent successfully.

                                </div>

                            )}

                        </form>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default ContactSection;