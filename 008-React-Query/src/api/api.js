import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});



export const fetchPostsOld = () => {
    return api.get("/posts")
}

// 🔹 সব Posts লোড করা (Limit 5)
export const fetchPosts = async (pageNumber) => {
  try {
    const res = await api.get("/posts", { params: { _start: pageNumber ,_limit: 3 } }); // ✅ _limit=5 এখানে সেট করুন
    return res.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error; // ✅ React Query সঠিকভাবে Error Handle করবে
  }
};

// 🔹 নির্দিষ্ট `postId` অনুযায়ী একক পোস্ট লোড করা
export const fetchPostById = async (postId) => {
  try {
    const res = await api.get(`/posts/${postId}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching post with ID ${postId}:`, error);
    throw error;
  }
};


export const deletePost = async (id) => {
  try {
    const res = await api.delete(`/posts/${id}`)
    // console.log(res)
    return res.data
    
  } catch (error) {
    console.log(error)
    throw error
  }
}


export const updatePost = async (id, payload) => {
  try {
    const res = await api.patch(`/posts/${id}`,payload)
    // console.log(res)
    return res.data
    
  } catch (error) {
    console.log(error)
    throw error
  }
}


export const createPost = async (newPost) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  return res.json(); // Returns the newly created post
};


// infintie scrolling

export const fetchUsers = async ({ pageParam = 1 }) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users?per_page=10&page=${pageParam}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};