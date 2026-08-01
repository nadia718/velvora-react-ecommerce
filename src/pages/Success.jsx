import { Link } from "react-router-dom";

function Success() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-[#F3EEE8] flex items-center justify-center px-4">

            <div className="max-w-xl w-full bg-white border border-[#E9E2D8] rounded-3xl shadow-xl p-10 text-center">

                {/* Success Icon */}

                <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-8">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>

                </div>

                {/* Heading */}

                <p className="uppercase tracking-[4px] text-[#AF823D] text-sm font-semibold">
                    Order Confirmed
                </p>

                <h1 className="text-4xl font-semibold text-[#1F1F1F] mt-3">
                    Thank You For Your Purchase!
                </h1>

                <p className="text-gray-500 mt-6 leading-8">
                    Your order has been placed successfully.
                    We’re preparing your premium furniture with care and
                    will notify you as soon as it is shipped.
                </p>

                {/* Buttons */}

                <div className="mt-10 flex flex-col sm:flex-row gap-4">

                    <Link
                        to="/products"
                        className="flex-1 bg-[#AF823D] hover:bg-[#9B7234] text-white py-4 rounded-2xl font-semibold transition duration-300"
                    >
                        Continue Shopping
                    </Link>

                    <button
                        className="flex-1 border border-[#AF823D] text-[#AF823D] hover:bg-[#AF823D] hover:text-white py-4 rounded-2xl font-semibold transition duration-300"
                    >
                        View Orders
                    </button>

                </div>

            </div>

        </section>
    );
}

export default Success;