function ShippingMethod({ formData, setFormData }) {

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="bg-white border border-[#E9E2D8] rounded-3xl shadow-xl p-8">

            {/* Heading */}

            <div className="mb-8">

                <p className="uppercase tracking-[3px] text-[#AF823D] text-xs font-semibold">
                    Shipping
                </p>

                <h2 className="text-3xl font-semibold text-[#1F1F1F] mt-2">
                    Select Delivery Method
                </h2>

                <div className="w-20 h-1 bg-[#AF823D] rounded-full mt-4"></div>

            </div>

            <div className="space-y-5">

                {/* Free Shipping */}

                <label
                    className={`flex items-center justify-between rounded-2xl border p-6 cursor-pointer transition-all duration-300 ${formData.shippingMethod === "Free Shipping"
                            ? "border-[#AF823D] bg-[#FCF8F2] shadow-md"
                            : "border-[#E9E2D8] hover:border-[#AF823D]"
                        }`}
                >

                    <div className="flex items-center gap-5">

                        <input
                            type="radio"
                            name="shippingMethod"
                            value="Free Shipping"
                            checked={formData.shippingMethod === "Free Shipping"}
                            onChange={handleChange}
                            className="w-5 h-5 accent-[#AF823D]"
                        />

                        <div>

                            <h3 className="text-lg font-semibold text-[#1F1F1F]">
                                Free Shipping
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                Delivery within 5–7 business days.
                            </p>

                        </div>

                    </div>

                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                        FREE
                    </span>

                </label>

                {/* Express Shipping */}

                <label
                    className={`flex items-center justify-between rounded-2xl border p-6 cursor-pointer transition-all duration-300 ${formData.shippingMethod === "Express Shipping"
                            ? "border-[#AF823D] bg-[#FCF8F2] shadow-md"
                            : "border-[#E9E2D8] hover:border-[#AF823D]"
                        }`}
                >

                    <div className="flex items-center gap-5">

                        <input
                            type="radio"
                            name="shippingMethod"
                            value="Express Shipping"
                            checked={formData.shippingMethod === "Express Shipping"}
                            onChange={handleChange}
                            className="w-5 h-5 accent-[#AF823D]"
                        />

                        <div>

                            <h3 className="text-lg font-semibold text-[#1F1F1F]">
                                Express Shipping
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                Delivered within 1–2 business days.
                            </p>

                        </div>

                    </div>

                    <span className="bg-[#F8F5F1] text-[#AF823D] text-xs font-semibold px-3 py-1 rounded-full">
                        + $20
                    </span>

                </label>

            </div>

            {/* Delivery Note */}

            <div className="mt-8 border-t border-[#EEE7DD] pt-6">

                <div className="space-y-3 text-sm text-gray-600">

                    <div className="flex items-center gap-2">
                        <span className="text-[#AF823D]">🚚</span>
                        <span>Carefully packed to protect every item.</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-[#AF823D]">📦</span>
                        <span>Real-time order tracking after dispatch.</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-[#AF823D]">↩️</span>
                        <span>Easy returns within 30 days of delivery.</span>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default ShippingMethod;