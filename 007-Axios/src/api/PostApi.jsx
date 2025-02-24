import axios from "axios";




const API_URL = "https://jsonplaceholder.typicode.com";


const api = axios.create({
    baseURL: API_URL
})

export const getPost = async () => {
  return await api.get("/posts");
};

export const postPost = async (postData) => {
  return await api.post("/posts", postData);
};

export const updatePost = async (id, postData) => {
  return await api.put(`posts/${id}`, postData);
};

export const deletePost = async (id) => {
  return await api.delete(`/posts/${id}`);
};
