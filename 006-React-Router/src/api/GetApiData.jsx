export const getApiData = async (category) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const API_URI = `${API_URL}/?s=${category}&apikey=${API_KEY}`;
  console.log("Fetching:", API_URI);

  try {
    const response = await fetch(API_URI);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
