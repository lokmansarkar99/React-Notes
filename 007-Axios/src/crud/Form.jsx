import { useState, useEffect } from "react";
import { postPost, updatePost } from "../api/PostApi";

const Form = ({ data, setData, updataData, setUpdataData }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  // updataData যদি পরিবর্তন হয়, তাহলে ফর্মে সেট করুন
  useEffect(() => {
    // if (updataData?.id) {
    //   setFormData(updataData);
    //   console.log(updataData)
    // }
 
if(updataData.id) {
  setFormData({
    title: updataData.title,
    body: updataData.title
  })
}

  }, [updataData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (updataData?.id) {
      // যদি Edit মোড হয়
      const res = await updatePost(updataData.id, formData);
      if (res.status === 200) {
        setData(data.map((post) => (post.id === updataData.id ? res.data : post)));
        setUpdataData({});
      }
    } else {
      // নতুন পোস্ট এড করা হলে
      const res = await postPost(formData);
      if (res.status === 201) {
        setData([...data, res.data]);
      }
    }
    setFormData({ title: "", body: "" });
  };

  return (
    <form className="mb-6 space-y-4 lg:flex lg:items-center lg:gap-4">
      <div className="w-full lg:w-1/2">
        <label htmlFor="title" className="block text-gray-700 font-semibold">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Add Title"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <label htmlFor="post" className="block text-gray-700 font-semibold">
          Post
        </label>
        <input
          type="text"
          name="body"
          value={formData.body}
          onChange={handleChange}
          placeholder="Add Post"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition mb-6"
      >
        {updataData?.id ? "Update Post" : "Add Post"}
      </button>
    </form>
  );
};

export default Form;
