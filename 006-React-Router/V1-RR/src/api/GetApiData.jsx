export const getApiData = async () => {
    const API_URL = import.meta.env.VITE_API_URL; // Ensure .env values exist
    const API_KEY = import.meta.env.VITE_API_KEY;
    let category = "batman"

    if (!API_URL || !API_KEY) {
        console.error("Missing API_URL or API_KEY in environment variables.");
        return null;
    }

    const API_URI = `${API_URL}/?s=${category}&apikey=${API_KEY}`;
    console.log("Fetching:", API_URI);

    try {
        const response = await fetch(API_URI);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};
