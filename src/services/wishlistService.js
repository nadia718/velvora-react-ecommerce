const API_URL = "http://localhost:3000/wishlist";


export async function getWishlist() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function addToWishlist(wishlistData) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(wishlistData),
        });
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
    }
}



export async function removeFromWishlist(id) {
   try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
    }
}
