import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getWishlist, addToWishlist as addWishlistAPI, removeFromWishlist as removeWishlistAPI, } from "../services/wishlistService";
const WishlistContext = createContext();

function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {

        async function fetchWishlist() {

            try {

                const data = await getWishlist();

                setWishlist(data);

            } catch (error) {

                console.error(error);

            }

        }

        fetchWishlist();

    }, []);

    // const [wishlist, setWishlist] = useState(() => {
    //     const savedWishlist = localStorage.getItem("wishlist");
    //     return savedWishlist ? JSON.parse(savedWishlist) : [];
    // });

    // useEffect(() => {
    //     localStorage.setItem("wishlist", JSON.stringify(wishlist));
    // }, [wishlist]);

    // Add Product

    const addToWishlist = async (product) => {
        try {
            const existingProduct = wishlist.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                toast.info("Already in Wishlist");
                return;
            }

            await addWishlistAPI(product)
            const data = await getWishlist()
            setWishlist(data);

            toast.success(`${product.title} added to Wishlist`);
        } catch (error) {
            console.error(error);
        }
    };

    // Remove Product

    const removeFromWishlist = async (productId) => {
        try {
            await removeWishlistAPI(productId);
            const data = await getWishlist();
            setWishlist(data);
            toast.success("Product removed from Wishlist");
           
        } catch (error) {
            console.error(error);
        }
    };

    // Check Product

    const isInWishlist = (productId) => {
        return wishlist.some((item) => item.id === productId);
    };

    // Clear Wishlist

    const clearWishlist = () => {
        setWishlist([]);
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                addToWishlist,
                removeFromWishlist,
                isInWishlist,
                clearWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export default WishlistProvider;
export { WishlistContext };