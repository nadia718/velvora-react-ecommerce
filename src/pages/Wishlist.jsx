import { Link } from "react-router-dom";
import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

function Wishlist() {

    const {
        wishlist,
        removeFromWishlist,
    } = useContext(WishlistContext);

    const totalPrice = wishlist.reduce((total, item) => {
        return total + item.price;
    }, 0);

    if (wishlist.length === 0) {
        return (
            <section className="min-h-[80vh] bg-gradient-to-b from-[#FAF8F5] to-[#F3EEE8] flex items-center justify-center px-4">

                <div className="bg-white border border-[#E9E2D8] rounded-3xl shadow-xl max-w-2xl w-full p-12 text-center">

                    <p className="uppercase tracking-[4px] text-[#AF823D] text-sm font-semibold">
                        Wishlist
                    </p>

                    <h1 className="text-5xl font-semibold text-[#1F1F1F] mt-4">
                        Your Wishlist is Empty
                    </h1>

                    <p className="text-gray-500 text-lg leading-8 mt-6">
                        Save your favorite furniture pieces here and revisit them anytime.
                    </p>

                    <Link
                        to="/products"
                        className="inline-block mt-10 bg-[#AF823D] hover:bg-[#9B7234] text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300"
                    >
                        Continue Shopping
                    </Link>

                </div>

            </section>
        );
    }

    console.log(wishlist);

    return (

        <section className="py-20 bg-gradient-to-b from-[#FAF8F5] to-[#F3EEE8]">

            <div className="max-w-[1400px] mx-auto px-4">

                {/* Heading */}

                <div className="text-center max-w-3xl mx-auto mb-16">

                    <p className="uppercase tracking-[4px] text-[#AF823D] text-sm font-semibold">
                        Wishlist
                    </p>

                    <h1 className="text-5xl font-semibold text-[#1F1F1F] mt-4">
                        Your Favorite Collection
                    </h1>

                    <p className="text-gray-500 mt-5 text-lg leading-8">
                        Keep your favorite luxury furniture in one place and purchase them whenever you're ready.
                    </p>

                </div>

                <div className="grid lg:grid-cols-[2fr_1fr] gap-12">

                    {/* Left Side */}

                    <div>

                        {wishlist.map((item) => (

                            <div
                                key={item.id}
                                className="bg-white border border-[#E9E2D8] rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 mb-8 flex flex-col md:flex-row items-center gap-8"
                            >

                                <div className="bg-[#FAF8F5] border border-[#EEE7DD] rounded-2xl p-5">

                                    <img
                                        src={item.images?.[0] || item.thumbnail}
                                        alt={item.title}
                                        className="w-44 h-44 object-contain"
                                    />
                                </div>

                                <div className="flex-1">

                                    <p className="uppercase tracking-[2px] text-xs text-[#AF823D] font-medium">
                                        {item.category}
                                    </p>

                                    <h2 className="text-3xl font-semibold mt-3 text-[#1F1F1F] leading-snug">
                                        {item.title}
                                    </h2>

                                    <p className="text-[#AF823D] text-3xl font-bold mt-5">
                                        ${item.price}
                                    </p>

                                    <button
                                        onClick={() => removeFromWishlist(item.id)}
                                        className="mt-6 inline-flex items-center px-5 py-2 rounded-xl border border-red-300 text-red-600 hover:bg-red-50 transition-all duration-300"
                                    >
                                        Remove Item
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* Right Side */}

                    <div>

                        <div className="bg-white border border-[#E9E2D8] rounded-3xl shadow-xl p-8 sticky top-24">

                            <p className="uppercase tracking-[3px] text-[#AF823D] text-sm font-medium">
                                Summary
                            </p>

                            <h2 className="text-3xl font-semibold text-[#1F1F1F] mt-2">
                                Wishlist Summary
                            </h2>

                            <div className="w-20 h-1 bg-[#AF823D] rounded-full my-6"></div>

                            <div className="flex justify-between items-center py-3 border-b border-[#ECE6DC]">

                                <span className="text-gray-600">
                                    Total Products
                                </span>

                                <span className="font-semibold text-[#1F1F1F]">
                                    {wishlist.length}
                                </span>

                            </div>

                            <div className="flex justify-between items-center py-3 border-b border-[#ECE6DC]">

                                <span className="text-gray-600">
                                    Shipping
                                </span>

                                <span className="font-semibold text-green-600">
                                    FREE
                                </span>

                            </div>

                            <div className="flex justify-between items-center mt-8">

                                <span className="text-xl font-semibold text-[#1F1F1F]">
                                    Total Value
                                </span>

                                <span className="text-4xl font-bold text-[#AF823D]">
                                    ${totalPrice.toFixed(2)}
                                </span>

                            </div>

                            <Link
                                to="/products"
                                className="block mt-10 bg-[#AF823D] hover:bg-[#9B7234] text-white text-center py-4 rounded-2xl font-semibold transition-all duration-300"
                            >
                                Continue Shopping
                            </Link>

                            <div className="mt-8 bg-[#FAF8F5] rounded-2xl p-5 border border-[#EEE7DD]">

                                <p className="font-semibold text-[#1F1F1F] mb-2">
                                    Why shop with Velvora?
                                </p>

                                <ul className="space-y-2 text-gray-600 text-sm">

                                    <li>✓ Premium Quality Furniture</li>

                                    <li>✓ Secure Checkout</li>

                                    <li>✓ Free Shipping Available</li>

                                    <li>✓ Luxury Home Collection</li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default Wishlist;