import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
        totalItems,
    } = useContext(CartContext);

    // const totalItems = cart.reduce((total, item) => {
    //     return total + item.quantity;
    // }, 0);

    // const totalPrice = cart.reduce((total, item) => {
    //     return total + item.price * item.quantity;
    // }, 0);

    if (cart.length === 0) {
        return (
            <section className="max-w-7xl mx-auto py-24 px-4 text-center">

                <p className="uppercase tracking-[3px] text-[#AF823D] text-sm font-medium">
                    Shopping Cart
                </p>

                <h1 className="text-4xl font-semibold mt-3 text-[#1F1F1F]">
                    Your Cart is Empty
                </h1>

                <p className="text-gray-500 mt-5">
                    Looks like you haven't added any products yet.
                </p>

                <Link
                    to="/products"
                    className="inline-block mt-8 bg-[#AF823D] hover:bg-[#946d31] text-white px-8 py-4 rounded-full transition"
                >
                    Continue Shopping
                </Link>

            </section>
        );
    }

    return (
        <section className="max-w-7xl mx-auto py-16 px-4">

            {/* Heading */}

            <div className="mb-12">

                <p className="uppercase tracking-[3px] text-[#AF823D] text-sm font-medium">
                    Shopping Cart
                </p>

                <h1 className="text-4xl font-semibold mt-3 text-[#1F1F1F]">
                    Your Shopping Bag
                </h1>

            </div>

            <div className="grid lg:grid-cols-[2fr_1fr] gap-10">

                {/* Cart Items */}

                <div>

                    {cart.map((item) => (

                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-6 mb-6 flex flex-col md:flex-row items-center gap-6"
                        >

                            <div className="bg-[#F8F4EF] rounded-xl p-4">

                                <img
                                    src={item.images?.[0]}
                                    alt={item.title}
                                    className="w-40 h-40 object-contain"
                                />

                            </div>

                            <div className="flex-1">

                                <p className="text-sm uppercase tracking-wider text-gray-500">
                                    {item.category}
                                </p>

                                <h2 className="text-2xl font-semibold mt-2 text-[#1F1F1F]">
                                    {item.title}
                                </h2>

                                <p className="text-[#AF823D] font-bold text-2xl mt-3">
                                    ${item.price}
                                </p>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="mt-4 text-red-500 hover:text-red-700 transition"
                                >
                                    Remove
                                </button>

                            </div>

                            <div className="flex items-center border border-[#AF823D] rounded-full overflow-hidden">

                                <button
                                    onClick={() => decreaseQuantity(item.id)}
                                    className="px-5 py-3 hover:bg-[#F8F4EF] transition"
                                >
                                    −
                                </button>

                                <span className="px-6 font-semibold">
                                    {item.quantity}
                                </span>

                                <button
                                    onClick={() => increaseQuantity(item.id)}
                                    className="px-5 py-3 hover:bg-[#F8F4EF] transition"
                                >
                                    +
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Order Summary */}

                <div>

                    <div className="bg-white rounded-2xl shadow-sm p-8 sticky top-24">

                        <h2 className="text-2xl font-semibold">
                            Order Summary
                        </h2>

                        <hr className="my-6" />

                        <div className="flex justify-between mb-4">

                            <span>Total Items</span>

                            <span>{totalItems}</span>

                        </div>

                        <div className="flex justify-between mb-4">

                            <span>Shipping</span>

                            <span className="text-green-600">
                                Free
                            </span>

                        </div>

                        <hr className="my-6" />

                        <div className="flex justify-between items-center">

                            <span className="text-lg font-semibold">
                                Total
                            </span>

                            <span className="text-3xl font-bold text-[#AF823D]">
                                ${totalPrice.toFixed(2)}
                            </span>

                        </div>

                        <Link
                            to="/checkout"
                            className="block mt-8 bg-[#AF823D] hover:bg-[#946d31] text-white text-center py-4 rounded-full transition"
                        >
                            Proceed To Checkout
                        </Link>

                        <Link
                            to="/products"
                            className="block mt-4 border border-[#AF823D] text-[#AF823D] text-center py-4 rounded-full hover:bg-[#F8F4EF] transition"
                        >
                            Continue Shopping
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Cart;