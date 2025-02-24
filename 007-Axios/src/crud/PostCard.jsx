import { deletePost } from "../api/PostApi";

const PostCard = ({ currPost, setUpdataData, setData, data }) => {
  
  const { body, title, id } = currPost;

  const handleEditPost = () => {
    setUpdataData(currPost); // Edit বাটনে ক্লিক করলে ডাটা `Form`-এ যাবে
  };

  const handleDeletePost = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const updatedData = data.filter((post) => post.id !== id);
        setData(updatedData);
      } else {
        console.log("Failed to delete post", res.status);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <li className="list-none bg-white p-4 shadow-md rounded-lg border border-gray-200">
      <h1>id: {id}</h1>
      <h1 className="text-xl font-bold text-gray-800 mb-2">{title}</h1>
      <p className="text-gray-600 mb-4">{body}</p>
      <div className="flex gap-2">
        <button
          onClick={handleEditPost}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Edit
        </button>
        <button
          onClick={handleDeletePost}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default PostCard;
