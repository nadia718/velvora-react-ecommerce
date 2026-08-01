function BillingForm({ formData, setFormData }) {

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
                    Billing
                </p>

                <h2 className="text-3xl font-semibold text-[#1F1F1F] mt-2">
                    Billing Details
                </h2>

                <div className="w-20 h-1 bg-[#AF823D] rounded-full mt-4"></div>

            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* First Name */}

                <div>

                    <label className="block text-sm font-medium text-[#4B4B4B] mb-2">
                        First Name
                    </label>

                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-[#E9E2D8] bg-[#FAF8F5] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#AF823D] transition"
                    />

                </div>

                {/* Last Name */}

                <div>

                    <label className="block text-sm font-medium text-[#4B4B4B] mb-2">
                        Last Name
                    </label>

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-[#E9E2D8] bg-[#FAF8F5] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#AF823D] transition"
                    />

                </div>

                {/* Email */}

                <div>

                    <label className="block text-sm font-medium text-[#4B4B4B] mb-2">
                        Email Address
                    </label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-[#E9E2D8] bg-[#FAF8F5] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#AF823D] transition"
                    />

                </div>

                {/* Phone */}

                <div>

                    <label className="block text-sm font-medium text-[#4B4B4B] mb-2">
                        Phone Number
                    </label>

                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Enter phone number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-[#E9E2D8] bg-[#FAF8F5] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#AF823D] transition"
                    />

                </div>

                {/* Address */}

                <div className="md:col-span-2">

                    <label className="block text-sm font-medium text-[#4B4B4B] mb-2">
                        Street Address
                    </label>

                    <input
                        type="text"
                        name="address"
                        placeholder="House number and street name"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-[#E9E2D8] bg-[#FAF8F5] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#AF823D] transition"
                    />

                </div>

                {/* City */}

                <div>

                    <label className="block text-sm font-medium text-[#4B4B4B] mb-2">
                        City
                    </label>

                    <input
                        type="text"
                        name="city"
                        placeholder="Enter city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-[#E9E2D8] bg-[#FAF8F5] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#AF823D] transition"
                    />

                </div>

                {/* Country */}

                <div>

                    <label className="block text-sm font-medium text-[#4B4B4B] mb-2">
                        Country
                    </label>

                    <input
                        type="text"
                        name="country"
                        placeholder="Enter country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-[#E9E2D8] bg-[#FAF8F5] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#AF823D] transition"
                    />

                </div>

                {/* Zip Code */}

                <div className="md:col-span-2">

                    <label className="block text-sm font-medium text-[#4B4B4B] mb-2">
                        Zip Code
                    </label>

                    <input
                        type="text"
                        name="zipCode"
                        placeholder="Enter ZIP / Postal Code"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-[#E9E2D8] bg-[#FAF8F5] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#AF823D] transition"
                    />

                </div>

            </form>

        </div>
    );
}

export default BillingForm;