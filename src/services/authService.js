import { toast } from "react-toastify";

const API_URL = "https://velvora-react-ecommerce-production.up.railway.app";

export async function loginUser(email, password) {
    try {
        const response = await fetch(`${API_URL}/users`);

        const users = await response.json();

        const user = users.find(
            (user) =>
                user.email.trim().toLowerCase() === email.trim().toLowerCase() &&
                user.password === password
        );

        if (user) {
            return {
                success: true,
                user,
            };
        }

        return {
            success: false,
            message: "Invalid Email or Password",
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: "Something went wrong",
        };
    }
}

export async function registerUser(userData) {
    try {

        // Pehle saare users lao
        const response = await fetch(`${API_URL}/users`);
        const users = await response.json();

        // Check karo email already exist karti hai ya nahi
        const existingUser = users.find(
            (user) =>
                user.email.trim().toLowerCase() ===
                userData.email.trim().toLowerCase()
        );

        if (existingUser) {
            return {
                success: false,
                message: "Email already exists",
            };
        }

        // Naya user database me save karo
        const registerResponse = await fetch(`${API_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        const newUser = await registerResponse.json();

        return {
            success: true,
            user: newUser,
        };

    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: "Something went wrong",
        };

    }
}

export async function getUser(currentUser_id) {
    try {

        const response = await fetch(
            `${API_URL}/users/${currentUser_id}`
        );

        const user = await response.json();

        return user;

    } catch (error) {

        console.error(error);

        toast.error("Failed to load profile");

        return {
            success: false,
            message: "Something went wrong",
        };
    }
}

export async function updateUser(id, userData) {
    try {

        const response = await fetch(
            `${API_URL}/users/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            }
        );

        console.log(response.status);

        const updatedUser = await response.json();

        return updatedUser;

    } catch (error) {

        console.error(error);

        toast.error("Failed to load profile");

        return {
            success: false,
            message: "Something went wrong",
        };
    }
}