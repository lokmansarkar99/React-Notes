import React, { useState, useEffect } from "react";
import { fetchPostsOld } from "../api/api";

const FetchOld = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPostsData = async () => {
    try {
      const res = await fetchPostsOld();
      console.log(res);
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("Failed to load posts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostsData();
  }, []);

  return (
    <div className="p-4">
      {loading && <p className="text-yellow-400">Loading posts...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <div>
          <h1 className="text-4xl mb-6 text-center">
            All Posts from JSONPlaceholder API
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.map((postItem) => (
              <li
                key={postItem.id}
                className="bg-gray-800 p-4 rounded-md shadow-lg"
              >
                <h1 className="text-xl font-semibold">{postItem.title}</h1>
                <p className="text-gray-400">{postItem.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FetchOld;
