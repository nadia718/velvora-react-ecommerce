import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import BillingForm from "../components/BillingForm";
import ShippingMethod from "../components/ShippingMethod";
import PaymentMethod from "../components/PaymentMethod";
import OrderSummary from "../components/OrderSummary";
import { createOrder } from "../services/orderService";


function Checkout() {

    const { cart, clearCart, totalPrice } = useContext(CartContext);



    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        country: "",
        zipCode: "",
        shippingMethod: "",
        paymentMethod: "",
    });



    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.firstName === "") {
            toast.error("Please enter first name");
            return;
        }
        if (formData.email === "") {
            toast.error("Please enter first email")
            return;
        }
        if (formData.lastName === "") {
            toast.error("Please enter first last name")
            return;
        } if (formData.phoneNumber === "") {
            toast.error("Please enter first last Phone number")
            return;
        }
        if (formData.address === "") {
            toast.error("Please enter address");
            return;
        }

        if (formData.city === "") {
            toast.error("Please enter city");
            return;
        }

        if (formData.country === "") {
            toast.error("Please enter country");
            return;
        }

        if (formData.zipCode === "") {
            toast.error("Please enter zip code");
            return;
        }

        if (formData.shippingMethod === "") {
            toast.error("Select Shipping Method");
            return;
        }

        if (formData.paymentMethod === "") {
            toast.error("Select Payment Method");
            return;
        }


        try {
            const orderData = {
                customer: formData,
                items: cart,
                total: totalPrice,
                shippingMethod: formData.shippingMethod,
                paymentMethod: formData.paymentMethod,
                status: "Pending",
                orderDate: new Date().toISOString(),
            };

            await createOrder(orderData);

            toast.success("Order placed successfully");

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                address: "",
                city: "",
                country: "",
                zipCode: "",
                shippingMethod: "",
                paymentMethod: "",
            })

            clearCart();

            navigate("/success");

        } catch (error) {
            console.error("Create Order Error:", error);

            toast.error("Failed to place order");
        }




        // toast.success("Order placed successfully");

        // setFormData({
        //     firstName: "",
        //     lastName: "",
        //     email: "",
        //     phoneNumber: "",
        //     address: "",
        //     city: "",
        //     country: "",
        //     zipCode: "",
        //     shippingMethod: "",
        //     paymentMethod: "",
        // })

        // clearCart();

        // navigate("/success");
    }


    return (
        <section className="py-20 bg-gradient-to-b from-[#FAF8F5] to-[#F3EEE8]">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">

                    <p className="uppercase tracking-[4px] text-[#AF823D] text-sm font-semibold">
                        Secure Checkout
                    </p>

                    <h1 className="text-5xl font-semibold text-[#1F1F1F] mt-4 leading-tight">
                        Complete Your Luxury Purchase
                    </h1>

                    <p className="text-gray-500 mt-5 text-lg leading-8">
                        Review your details, choose your preferred delivery and payment method,
                        then place your order securely with Velvora.
                    </p>

                </div>

                <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
                    <div className="space-y-8">
                        <BillingForm

                            formData={formData}
                            setFormData={setFormData}
                        />
                        <ShippingMethod
                            formData={formData}
                            setFormData={setFormData}
                        />
                        <PaymentMethod
                            formData={formData}
                            setFormData={setFormData}
                        />

                        <div className=" pt-2">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="w-full bg-[#AF823D] hover:bg-[#9B7234] text-white text-lg font-semibold py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Place Secure Order
                            </button>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6 text-sm text-gray-600">

                                <span>✔ Secure Checkout</span>

                                <span>✔ Premium Packaging</span>

                                <span>✔ Easy Returns</span>

                            </div>
                        </div>
                    </div>



                    <div>
                        <OrderSummary />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Checkout;