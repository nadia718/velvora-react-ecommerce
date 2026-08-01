import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="bg-[#111111] text-white pt-16 pb-6">

                <div className="max-w-7xl mx-auto px-4">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                        {/* Logo */}

                        <div>

                            <h2 className="text-3xl font-bold text-[#AF823D]">
                                Velvora
                            </h2>

                            <p className="text-gray-400 mt-5 leading-7 text-sm">
                                Discover timeless luxury furniture and premium home décor
                                designed to bring elegance, comfort, and style into every
                                corner of your home.
                            </p>

                        </div>

                        {/* Quick Links */}

                        <div>

                            <h3 className="text-xl font-semibold mb-5">
                                Quick Links
                            </h3>

                            <ul className="space-y-3 text-gray-400">

                                <li>
                                    <Link to="/" className="hover:text-[#AF823D] duration-300">
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/products" className="hover:text-[#AF823D] duration-300">
                                        Products
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/categories" className="hover:text-[#AF823D] duration-300">
                                        Categories
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/about" className="hover:text-[#AF823D] duration-300">
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/contact" className="hover:text-[#AF823D] duration-300">
                                        Contact
                                    </Link>
                                </li>

                            </ul>

                        </div>

                        {/* Customer */}

                        <div>

                            <h3 className="text-xl font-semibold mb-5">
                                Customer Care
                            </h3>

                            <ul className="space-y-3 text-gray-400">

                                <li>Shipping Policy</li>
                                <li>Return Policy</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>FAQs</li>

                            </ul>

                        </div>

                        {/* Contact */}

                        <div>

                            <h3 className="text-xl font-semibold mb-5">
                                Contact Us
                            </h3>

                            <div className="space-y-4 text-gray-400 text-sm">

                                <p>📍 Lahore, Pakistan</p>

                                <p>📞 +92 300 1234567</p>

                                <p>✉ info@velvora.com</p>

                            </div>

                            <div className="flex gap-3 mt-6">

                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-[#AF823D] flex items-center justify-center hover:bg-white hover:text-black duration-300"
                                >
                                    F
                                </a>

                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-[#AF823D] flex items-center justify-center hover:bg-white hover:text-black duration-300"
                                >
                                    I
                                </a>

                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-[#AF823D] flex items-center justify-center hover:bg-white hover:text-black duration-300"
                                >
                                    X
                                </a>

                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-[#AF823D] flex items-center justify-center hover:bg-white hover:text-black duration-300"
                                >
                                    L
                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">

                        © {new Date().getFullYear()} Velvora. All Rights Reserved.

                    </div>

                </div>

            </footer>
        </>
    );
}

export default Footer;