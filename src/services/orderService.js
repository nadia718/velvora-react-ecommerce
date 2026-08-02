const API_URL = "https://velvora-react-ecommerce-production.up.railway.app/orders";

export async function createOrder(orderData) {
    try {

        const response = await fetch(API_URL, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(orderData),
        });

        const order = await response.json();

        return order;

    } catch (error) {

        console.error("Create Order Error:", error);

        throw error;
    }
}


export async function getOrders() {
    try {

        const response = await fetch(API_URL);

        const orders = await response.json();

        return orders;

    } catch (error) {

        console.error("Get Orders Error:", error);

        throw error;

    }
}