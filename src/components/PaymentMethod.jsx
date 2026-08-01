function PaymentMethod({ formData, setFormData }) {

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
                    Payment
                </p>

                <h2 className="text-3xl font-semibold text-[#1F1F1F] mt-2">
                    Choose Payment Method
                </h2>

                <div className="w-20 h-1 bg-[#AF823D] rounded-full mt-4"></div>

            </div>

            <div className="space-y-5">

                {/* Cash on Delivery */}

                <label
                    className={`flex items-center justify-between rounded-2xl border p-6 cursor-pointer transition-all duration-300 ${
                        formData.paymentMethod === "Cash on Delivery"
                            ? "border-[#AF823D] bg-[#FCF8F2] shadow-md"
                            : "border-[#E9E2D8] hover:border-[#AF823D]"
                    }`}
                >

                    <div className="flex items-center gap-5">

                        <input
                            type="radio"
                            name="paymentMethod"
                            value="Cash on Delivery"
                            checked={formData.paymentMethod === "Cash on Delivery"}
                            onChange={handleChange}
                            className="w-5 h-5 accent-[#AF823D]"
                        />

                        <div>

                            <h3 className="font-semibold text-lg text-[#1F1F1F]">
                                Cash on Delivery
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                Pay when your order arrives at your doorstep.
                            </p>

                        </div>

                    </div>

                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                        Available
                    </span>

                </label>

                {/* Credit Card */}

                <label
                    className={`flex items-center justify-between rounded-2xl border p-6 cursor-pointer transition-all duration-300 ${
                        formData.paymentMethod === "Credit Card"
                            ? "border-[#AF823D] bg-[#FCF8F2] shadow-md"
                            : "border-[#E9E2D8] hover:border-[#AF823D]"
                    }`}
                >

                    <div className="flex items-center gap-5">

                        <input
                            type="radio"
                            name="paymentMethod"
                            value="Credit Card"
                            checked={formData.paymentMethod === "Credit Card"}
                            onChange={handleChange}
                            className="w-5 h-5 accent-[#AF823D]"
                        />

                        <div>

                            <h3 className="font-semibold text-lg text-[#1F1F1F]">
                                Credit Card
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                Visa, MasterCard & American Express accepted.
                            </p>

                        </div>

                    </div>

                    <span className="bg-[#F8F5F1] text-[#AF823D] text-xs font-semibold px-3 py-1 rounded-full">
                        Secure
                    </span>

                </label>

                {/* PayPal */}

                <label
                    className={`flex items-center justify-between rounded-2xl border p-6 cursor-pointer transition-all duration-300 ${
                        formData.paymentMethod === "PayPal"
                            ? "border-[#AF823D] bg-[#FCF8F2] shadow-md"
                            : "border-[#E9E2D8] hover:border-[#AF823D]"
                    }`}
                >

                    <div className="flex items-center gap-5">

                        <input
                            type="radio"
                            name="paymentMethod"
                            value="PayPal"
                            checked={formData.paymentMethod === "PayPal"}
                            onChange={handleChange}
                            className="w-5 h-5 accent-[#AF823D]"
                        />

                        <div>

                            <h3 className="font-semibold text-lg text-[#1F1F1F]">
                                PayPal
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                Fast & secure checkout using your PayPal account.
                            </p>

                        </div>

                    </div>

                    <span className="bg-[#F8F5F1] text-[#AF823D] text-xs font-semibold px-3 py-1 rounded-full">
                        Recommended
                    </span>

                </label>

            </div>

            {/* Security Notice */}

            <div className="mt-8 border-t border-[#EEE7DD] pt-6">

                <div className="flex items-center gap-2 text-sm text-gray-600">

                    <span className="text-[#AF823D] text-lg">🔒</span>

                    <p>
                        All transactions are encrypted and securely processed to
                        protect your personal information.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default PaymentMethod;