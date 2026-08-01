import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaHeart } from "react-icons/fa";
import { WishlistContext } from "../context/WishlistContext";

function ProductGrid({ products, showPagination, showViewMore = true }) {

    const { addToCart } = useContext(CartContext);
    const { addToWishlist, isInWishlist } = useContext(WishlistContext);

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;
    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    // const currentProducts = products.slice(firstProductIndex, lastProductIndex);
    const currentProducts = showPagination
        ? products.slice(firstProductIndex, lastProductIndex)
        : products;
    const totalPages = Math.ceil(products.length / productsPerPage);

    if (showPagination) {
        // Pagination dikhao
    }

    if (showViewMore) {
        // View More button show karo
    }
    return (
        <>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">

                {currentProducts.map((product) => (

                    <div
                        key={product.id}
                        className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >

                        {/* Wishlist Button */}

                        <button
                            onClick={() => addToWishlist(product)}
                            className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#AF823D] hover:text-white transition"
                        >
                            <FaHeart
                                className={
                                    isInWishlist(product.id)
                                        ? "text-red-500"
                                        : "text-gray-400"
                                }
                            />
                        </button>

                        {/* Card */}

                        <Link
                            to={`/products/${product.id}`}
                            className="block"
                        >

                            <div className="bg-[#F8F8F8] p-5">

                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="w-full h-52 object-contain group-hover:scale-105 transition duration-300"
                                />

                            </div>

                            <div className="p-5">

                                <span className="text-sm text-[#AF823D] capitalize">
                                    {product.category}
                                </span>

                                <h3 className="text-lg font-semibold mt-2 min-h-[56px]">
                                    {product.title}
                                </h3>

                                <div className="flex items-center justify-between mt-2">

                                    <p className="text-2xl font-bold">
                                        ${product.price}
                                    </p>

                                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-sm">
                                        ⭐ {product.rating}
                                    </span>

                                </div>

                            </div>

                        </Link>

                        {/* Add To Cart */}

                        <div className="px-5 pb-5">

                            <button
                                onClick={() => addToCart(product)}
                                className="w-full mt-5 bg-black text-white py-3 rounded-lg hover:bg-[#AF823D] duration-300"
                            >
                                Add To Cart
                            </button>

                        </div>

                    </div>

                ))}

            </div>

            {/* Pagination */}

            {showPagination && (

                <div className="flex justify-center gap-3 mt-10">

                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Prev
                    </button>

                    {
                        [...Array(totalPages)].map((_, index) => (

                            <button
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`w-10 h-10 rounded-full ${currentPage === index + 1
                                    ? "bg-black text-white"
                                    : "bg-gray-200"
                                    }`}
                            >
                                {index + 1}
                            </button>

                        ))
                    }

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Next
                    </button>

                </div>

            )}


            {showViewMore && (
                <div className="flex justify-center mt-10">
                    <Link
                        to="/products"
                        className="px-8 py-3 bg-black text-white rounded-lg hover:bg-[#AF823D] duration-300"
                    >
                        View More
                    </Link>
                </div>
            )}

        </>
    );
}

export default ProductGrid;