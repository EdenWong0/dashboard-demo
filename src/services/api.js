export const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error ("Failed to get users");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("API Error:", error)
        throw error;
    }
}

