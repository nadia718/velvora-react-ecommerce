import { useEffect, useState } from "react";
import { getOrders } from "../services/orderService";

function MyOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            try {
                const data = await getOrders();
                setOrders(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchOrders();
    }, []);

    return (
        <section className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-[#F3EEE8] py-20 px-4">

            <div className="max-w-6xl mx-auto">

                {/* Heading */}

                <div className="text-center mb-16">

                    <p className="uppercase tracking-[4px] text-[#AF823D] text-sm font-semibold">
                        Order History
                    </p>

                    <h1 className="text-5xl font-bold text-[#1F1F1F] mt-3">
                        My Orders
                    </h1>

                    <p className="text-gray-500 mt-4">
                        Track all your luxury purchases in one place.
                    </p>

                </div>

                {/* No Orders */}

                {orders.length === 0 ? (

                    <div className="bg-white rounded-3xl shadow-lg p-16 text-center">

                        <h2 className="text-3xl font-semibold">
                            No Orders Found
                        </h2>

                        <p className="text-gray-500 mt-3">
                            You haven't placed any order yet.
                        </p>

                    </div>

                ) : (

                    <div className="space-y-8">

                        {orders.map((order) => (

                            <div
                                key={order.id}
                                className="bg-white rounded-3xl shadow-lg p-8"
                            >

                                {/* Header */}

                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 border-b pb-6">

                                    <div>

                                        <h2 className="text-2xl font-bold text-[#1F1F1F]">
                                            Order #{order.id}
                                        </h2>

                                        <p className="text-gray-500 mt-2">
                                            {new Date(order.orderDate).toLocaleDateString(
                                                "en-GB",
                                                {
                                                    day: "2-digit",
                                                    month: "long",
                                                    year: "numeric",
                                                }
                                            )}
                                        </p>

                                    </div>

                                    <div className="flex flex-wrap gap-4">

                                        <div className="bg-[#F8F5F1] rounded-xl px-5 py-3">

                                            <p className="text-xs uppercase text-gray-500">
                                                Shipping
                                            </p>

                                            <p className="font-semibold">
                                                {order.shippingMethod}
                                            </p>

                                        </div>

                                        <div className="bg-[#F8F5F1] rounded-xl px-5 py-3">

                                            <p className="text-xs uppercase text-gray-500">
                                                Payment
                                            </p>

                                            <p className="font-semibold">
                                                {order.paymentMethod}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                {/* Products */}

                                <div className="py-8 space-y-5">

                                    {order.items.map((item) => (

                                        <div
                                            key={item.id}
                                            className="flex justify-between items-center border rounded-2xl p-5 hover:bg-[#FAF8F5] transition"
                                        >

                                            <div className="flex items-center gap-5">

                                                <div className="w-24 h-24 bg-[#F8F5F1] rounded-2xl flex items-center justify-center">

                                                    <img
                                                        src={item.images?.[0] || item.thumbnail}
                                                        alt={item.title}
                                                        className="w-20 h-20 object-contain"
                                                    />

                                                </div>

                                                <div>

                                                    <h3 className="text-lg font-semibold">
                                                        {item.title}
                                                    </h3>

                                                    <p className="text-gray-500">
                                                        Qty : {item.quantity}
                                                    </p>

                                                    <p className="text-[#AF823D] font-semibold mt-1">
                                                        ${item.price}
                                                    </p>

                                                </div>

                                            </div>

                                            <div className="text-right">

                                                <p className="text-sm text-gray-500">
                                                    Subtotal
                                                </p>

                                                <h3 className="text-xl font-bold">
                                                    $
                                                    {(item.price * item.quantity).toFixed(2)}
                                                </h3>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                                {/* Footer */}

                                <div className="border-t pt-6 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">

                                    <div>

                                        <h4 className="font-semibold text-lg">
                                            Customer
                                        </h4>

                                        <p>
                                            {order.customer.firstName}{" "}
                                            {order.customer.lastName}
                                        </p>

                                        <p className="text-gray-500">
                                            {order.customer.email}
                                        </p>

                                    </div>

                                    <div className="text-center">

                                        <p className="uppercase text-xs text-gray-500">
                                            Grand Total
                                        </p>

                                        <h2 className="text-4xl font-bold text-[#AF823D]">
                                            ${order.total.toFixed(2)}
                                        </h2>

                                    </div>

                                    <div>

                                        <span
                                            className={`px-6 py-3 rounded-full font-semibold ${order.status === "Delivered"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                                }`}
                                        >
                                            {order.status}
                                        </span>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </section>
    );
}

export default MyOrders;