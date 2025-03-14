import { useState } from "react";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchPosts, deletePost, updatePost, createPost } from "../api/api";
import { NavLink } from "react-router";

const FetchRQ = () => {
  const queryClient = useQueryClient();
  const [pageNumber, setPageNumber] = useState(0);

  const [showForm, setShowForm] = useState(false); // Controls form visibility
  const [newPost, setNewPost] = useState({title: "", body: ""});

  // 🔹 State for editing post
  const [editData, setEditData] = useState({ id: null, title: "", body: "" });
  const [isEditing, setIsEditing] = useState(false);

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchPosts(pageNumber),
    placeholderData: keepPreviousData,
  });

  // Mutation to create a post
  const createMutation = useMutation({
    mutationFn: (newPost) => createPost(newPost),
    onSuccess: (data) => {
      queryClient.setQueryData(["posts", pageNumber], (oldPosts) => [data, ...oldPosts]); // Update cache for the current page
      setShowForm(false); // Hide form after post is created
      setNewPost({ title: "", body: "" }); // Reset form
    },
  });

  // Handle form submission for creating post
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    createMutation.mutate(newPost);
  };

  // 🔹 Mutation to update post
  const updateMutation = useMutation({
    mutationFn: ({ id, payload }) => updatePost(id, payload),
    onSuccess: (data, { id }) => {
      console.log("Updated:", data);
      queryClient.setQueryData(["posts", pageNumber], (currElem) => {
        return currElem?.map((post) => (post.id === id ? { ...post, ...data } : post));
      });
      setIsEditing(false); // Close form after update
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      console.log("Deleted Post:", data);
      queryClient.setQueryData(["posts", pageNumber], (currElem) => 
        currElem?.filter((post) => post.id !== id) // Filter out deleted post
      );
    },
  });

  // 🔹 Handle Update Button Click (Load Data into Form)
  const handleEditClick = (post) => {
    setEditData({ id: post.id, title: post.title, body: post.body });
    setIsEditing(true);
  };

  // 🔹 Handle Form Submission for Update
  const handleSubmit = (e) => {
    e.preventDefault();
    updateMutation.mutate({ id: editData.id, payload: { title: editData.title, body: editData.body } });
  };

  if (isLoading) return <p className="text-yellow-400">Loading posts...</p>;
  if (isError) return <p className="text-red-500">{error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-4xl mb-6 text-center">All Posts from JSONPlaceholder API</h1>

      {/* Add Post Button */}
      <button
        onClick={() => setShowForm(true)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 mb-6 "
      >
        Add Post
      </button>

      {/* Create Post Form (Appears when showForm is true) */}
      {showForm && (
        <div className="bg-gray-800 p-4 mt-4 rounded shadow-lg">
          <h2 className="text-xl text-white mb-2">Create a New Post</h2>
          <form onSubmit={handleCreateSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="p-2 border rounded text-white"
              placeholder="Title"
              required
            />
            <textarea
              value={newPost.body}
              onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
              className="p-2 border rounded text-white"
              placeholder="Body"
              required
            ></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
              Submit
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="text-gray-300 underline"
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Edit Post Form */}
      {isEditing && (
        <div className="bg-gray-800 p-4 rounded shadow-lg mb-4">
          <h2 className="text-xl text-white mb-2">Edit Post</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              value={editData.title}
              onChange={(e) => setEditData({ ...editData, title: e.target.value })}
              className="p-2 border rounded text-white"
              placeholder="Title"
            />
            <textarea
              value={editData.body}
              onChange={(e) => setEditData({ ...editData, body: e.target.value })}
              className="p-2 border rounded text-white"
              placeholder="Body"
            ></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
              Update Post
            </button>
            <button type="button" onClick={() => setIsEditing(false)} className="text-gray-300 underline">
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Display Posts */}
      <ul className="grid grid-cols-1 gap-4">
        {data?.map((post) => (
          <li key={post.id} className="bg-gray-800 p-4 rounded shadow-lg border-l min-h-48">
            <NavLink to={`/rq/${post.id}`}>
              <h2>{post.id}</h2>
              <h1 className="text-xl font-semibold">{post.title}</h1>
              <p className="text-gray-400">{post.body}</p>
            </NavLink>
            <button
              onClick={() => handleEditClick(post)}
              className="text-white font-semibold bg-amber-500 px-4 py-1 rounded mt-4 ml-3 hover:bg-amber-400"
            >
              Update
            </button>

            <button 
              onClick={() => deleteMutation.mutate(post.id)} 
              className="text-white font-semibold bg-pink-600 px-4 py-1 rounded mt-4 ml-3 hover:bg-pink-500 transition-colors"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="mt-6">
        <button
          disabled={pageNumber === 0}
          onClick={() => setPageNumber((prev) => prev - 3)}
          className={`text-black font-semibold bg-emerald-500 px-4 py-1 rounded mt-4 mr-3 hover:bg-emerald-400 ${pageNumber === 0 && "text-gray-600"}`}
        >
          PREV
        </button>
        <span> {pageNumber / 3 + 1} </span>
        <button
          disabled={pageNumber === 99}
          onClick={() => setPageNumber((prev) => prev + 3)}
          className={`text-black font-semibold bg-emerald-500 px-4 py-1 rounded mt-4 ml-3 hover:bg-emerald-400`}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default FetchRQ;
