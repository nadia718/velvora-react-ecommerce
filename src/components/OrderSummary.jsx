import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function OrderSummary() {
    const { cart } = useContext(CartContext);

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const shipping = subtotal > 500 ? 0 : 25;
    const total = subtotal + shipping;

    return (
        <div className="bg-white border border-[#E9E2D8] rounded-3xl shadow-xl p-8 sticky top-24">

            {/* Heading */}

            <div className="mb-8">

                <p className="uppercase tracking-[3px] text-[#AF823D] text-xs font-semibold">
                    Order Summary
                </p>

                <h2 className="text-3xl font-semibold text-[#1F1F1F] mt-2">
                    Your Order
                </h2>

                <div className="w-20 h-1 bg-[#AF823D] rounded-full mt-4"></div>

            </div>

            {cart.length === 0 ? (

                <div className="text-center py-14">

                    <div className="w-20 h-20 rounded-full bg-[#F8F5F1] flex items-center justify-center mx-auto mb-5">

                        <span className="text-3xl">🛍️</span>

                    </div>

                    <h3 className="text-xl font-semibold text-[#1F1F1F]">
                        Your Cart is Empty
                    </h3>

                    <p className="text-gray-500 mt-2 text-sm leading-6">
                        Browse our premium collection and add your favorite
                        furniture pieces.
                    </p>

                </div>

            ) : (

                <>

                    {/* Products */}

                    <div className="space-y-6">

                        {cart.map((item) => (

                            <div
                                key={item.id}
                                className="flex items-center justify-between pb-6 border-b border-[#EEE7DD]"
                            >

                                <div className="flex items-center gap-4">

                                    <div className="w-20 h-20 bg-[#F8F5F1] rounded-2xl border border-[#EEE7DD] flex items-center justify-center">

                                        <img
                                            src={item.images?.[0] || item.thumbnail}
                                            alt={item.thumbnail}
                                            className="w-14 h-14 object-contain"
                                        />

                                    </div>

                                    <div>

                                        <h3 className="font-semibold text-[#1F1F1F] leading-6">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1">
                                            Quantity × {item.quantity}
                                        </p>

                                    </div>

                                </div>

                                <p className="text-lg font-semibold text-[#AF823D]">
                                    $
                                    {(item.price * item.quantity).toFixed(2)}
                                </p>

                            </div>

                        ))}

                    </div>

                    {/* Totals */}

                    <div className="mt-8">

                        <div className="space-y-5">

                            <div className="flex justify-between text-gray-600">

                                <span>Subtotal</span>

                                <span className="font-medium text-[#1F1F1F]">
                                    ${subtotal.toFixed(2)}
                                </span>

                            </div>

                            <div className="flex justify-between text-gray-600">

                                <span>Shipping</span>

                                <span>

                                    {shipping === 0 ? (

                                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                                            FREE
                                        </span>

                                    ) : (

                                        <span className="font-medium text-[#1F1F1F]">
                                            ${shipping}
                                        </span>

                                    )}

                                </span>

                            </div>

                        </div>

                        <div className="border-t border-[#E9E2D8] my-6"></div>

                        <div className="flex justify-between items-center">

                            <span className="text-xl font-semibold text-[#1F1F1F]">
                                Total
                            </span>

                            <span className="text-2xl font-bold text-[#AF823D]">
                                ${total.toFixed(2)}
                            </span>

                        </div>

                    </div>

                    {/* Trust Section */}

                    <div className="mt-10 border-t border-[#EEE7DD] pt-6">

                        <div className="space-y-3 text-sm text-gray-600">

                            <div className="flex items-center gap-2">

                                <span className="text-[#AF823D]">✔</span>

                                <span>Secure SSL Checkout</span>

                            </div>

                            <div className="flex items-center gap-2">

                                <span className="text-[#AF823D]">✔</span>

                                <span>Premium Quality Guarantee</span>

                            </div>

                            <div className="flex items-center gap-2">

                                <span className="text-[#AF823D]">✔</span>

                                <span>Free Returns Within 30 Days</span>

                            </div>

                        </div>

                    </div>

                </>

            )}

        </div>
    );
}

export default OrderSummary;