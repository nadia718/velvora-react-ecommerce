import { FaUserCircle, FaEnvelope, FaPhone, FaEdit } from "react-icons/fa";
import { getUser, updateUser } from "../services/authService";
import { useState, useEffect } from "react";

const MyProfile = () => {
    const [profile, setProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const [editData, setEditData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const currentUser = JSON.parse(localStorage.getItem("user"));
    console.log(currentUser);

    useEffect(() => {

        async function fetchUser() {

            try {

                // const data = await getUser();
                const data = await getUser(currentUser.id);

                setProfile(data);

            } catch (error) {

                console.error(error);

            }

        }

        fetchUser();

    }, []);

    const handleSave = async () => {

        try {

            console.log(currentUser.id);
            console.log(editData);

            const updatedUser = await updateUser(currentUser.id, editData);

            console.log(updatedUser);

            setProfile(updatedUser);
            setIsEditing(false);

        } catch (error) {

            console.error(error);

        }

    };
    const handleEdit = () => {
        setIsEditing(true);
        setEditData({
            name: profile?.name || "",
            email: profile?.email || "",
            phone: profile?.phone || "",
        })
    };

    return (

        <section className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-[#F3EEE8] py-20 px-4">

            <div className="max-w-5xl mx-auto">

                {/* Heading */}

                <div className="text-center mb-14">

                    <p className="uppercase tracking-[4px] text-[#AF823D] text-sm font-semibold">
                        Personal Account
                    </p>

                    <h1 className="text-5xl font-semibold text-[#1F1F1F] mt-3">
                        My Profile
                    </h1>

                    <p className="text-gray-500 mt-4 text-lg">
                        Manage your personal information and account details.
                    </p>

                </div>

                {/* Card */}

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                    {/* Top Section */}

                    <div className="bg-gradient-to-r from-[#AF823D] to-[#C89A54] h-40 relative">

                        <div className="absolute left-1/2 -bottom-16 -translate-x-1/2">

                            <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-white">

                                <FaUserCircle className="text-8xl text-[#AF823D]" />

                            </div>

                        </div>

                    </div>

                    {/* Profile Content */}

                    <div className="pt-24 pb-10 px-10">

                        <div className="text-center">

                            <h2 className="text-3xl font-semibold text-[#1F1F1F]">

                                {profile?.name || "Guest User"}

                            </h2>

                            <p className="text-gray-500 mt-2">
                                Premium Member
                            </p>

                        </div>

                        {/* Information */}

                        <div className="grid md:grid-cols-2 gap-6 mt-12">

                            <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#EEE7DD]">

                                <div className="flex items-center gap-4">

                                    <div className="w-12 h-12 rounded-full bg-[#AF823D] text-white flex items-center justify-center">

                                        <FaUserCircle />

                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500">
                                            Full Name
                                        </p>

                                        <h3 className="text-lg font-semibold text-[#1F1F1F]">
                                            {profile?.name || "Guest User"}
                                        </h3>

                                    </div>

                                </div>

                            </div>

                            <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#EEE7DD]">

                                <div className="flex items-center gap-4">

                                    <div className="w-12 h-12 rounded-full bg-[#AF823D] text-white flex items-center justify-center">

                                        <FaEnvelope />

                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500">
                                            Email Address
                                        </p>

                                        <h3 className="text-lg font-semibold text-[#1F1F1F] break-all">
                                            {profile?.email || "No Email"}
                                        </h3>

                                    </div>

                                </div>

                            </div>

                            <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#EEE7DD]">

                                <div className="flex items-center gap-4">

                                    <div className="w-12 h-12 rounded-full bg-[#AF823D] text-white flex items-center justify-center">

                                        <FaPhone />

                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500">
                                            Phone Number
                                        </p>

                                        <h3 className="text-lg font-semibold text-[#1F1F1F]">
                                            {profile?.phone || "+92 300 0000000"}
                                        </h3>

                                    </div>

                                </div>

                            </div>

                            <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#EEE7DD]">

                                <div className="flex items-center gap-4">

                                    <div className="w-12 h-12 rounded-full bg-[#AF823D] text-white flex items-center justify-center">

                                        <FaUserCircle />

                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500">
                                            Account Status
                                        </p>

                                        <h3 className="text-lg font-semibold text-green-600">
                                            Active
                                        </h3>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Button */}

                        <div className="mt-12 text-center">

                            <button
                                onClick={handleEdit}
                                className="inline-flex items-center gap-3 bg-[#AF823D] hover:bg-[#9B7234] text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <FaEdit />
                                Edit Profile
                            </button>
                            {isEditing && (

                                <div className="mt-10 bg-[#FAF8F5] border border-[#EEE7DD] rounded-3xl p-8 shadow-inner">

                                    <h2 className="text-3xl font-semibold text-[#1F1F1F] mb-8">
                                        Edit Profile
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-6">

                                        {/* Full Name */}

                                        <div>

                                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                                Full Name
                                            </label>

                                            <input
                                                type="text"
                                                value={editData.name}
                                                onChange={(e) => setEditData({ ...editData, name: e.target.value, })}
                                                className="w-full border border-[#DDD5CA] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AF823D]"
                                            />

                                        </div>

                                        {/* Email */}

                                        <div>

                                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                                Email Address
                                            </label>

                                            <input
                                                type="email"
                                                value={editData.email}
                                                onChange={(e) => setEditData({ ...editData, email: e.target.value, })}

                                                className="w-full border border-[#DDD5CA] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AF823D]"
                                            />

                                        </div>

                                        {/* Phone */}

                                        <div className="md:col-span-2">

                                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                                Phone Number
                                            </label>

                                            <input
                                                type="text"
                                                value={editData.phone}
                                                onChange={(e) => setEditData({ ...editData, phone: e.target.value, })}

                                                className="w-full border border-[#DDD5CA] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AF823D]"
                                            />

                                        </div>

                                    </div>

                                    {/* Buttons */}

                                    <div className="flex justify-end gap-4 mt-8">

                                        <button
                                            onClick={() => setIsEditing(false)}

                                            className="px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            onClick={() => {
                                                console.log("Button Clicked");
                                                handleSave();
                                            }}
                                            className="inline-flex items-center gap-3 bg-[#AF823D] hover:bg-[#9B7234] text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                                        >
                                            Save Changes
                                        </button>
                                    </div>

                                </div>

                            )}
                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
};

export default MyProfile;