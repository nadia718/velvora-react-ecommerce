import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
const CartContext = createContext();


function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    const addToCart = (product) => {
        const existingProduct = cart.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {

            const updatedCart = cart.map((item) => {

                if (item.id === product.id) {

                    return {
                        ...item,
                        quantity: (item.quantity || 1) + 1,
                    };

                }

                return item;

            });

            setCart(updatedCart);
            // toast.success("Product added to cart");

        } else {

            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1,
                },
            ]);
            // toast.success("Product added to cart");

        }
        
        toast.success(`${product.title} added to cart`);


    };


    const increaseQuantity = (productId) => {

        const updatedCart = cart.map((item) => {

            if (item.id === productId) {

                return {
                    ...item,
                    quantity: item.quantity + 1,
                };

            }

            return item;

        });

        setCart(updatedCart);

    };

    const decreaseQuantity = (productId) => {

        const selectedProduct = cart.find(
            (item) => item.id === productId
        );

        if (selectedProduct.quantity === 1) {

            removeFromCart(productId);

        } else {

            const updatedCart = cart.map((item) => {

                if (item.id === productId) {

                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };

                } else {

                    return item;
                }
            });

            setCart(updatedCart);

        }

    };

    const removeFromCart = (productId) => {

        const updatedCart = cart.filter(
            (item) => item.id !== productId
        );

        setCart(updatedCart);

    };


    const clearCart = () => {
        setCart([]);
    };

    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const totalItems = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    return (
        <CartContext.Provider value={{
            cart,
            // setCart,
            addToCart,
            increaseQuantity,
            decreaseQuantity,
            removeFromCart,
            totalPrice,
            totalItems,
            clearCart


        }}>

            {children}
        </CartContext.Provider>
    )
}




export default CartProvider;
export { CartContext };