import { useState, useEffect } from "react";
import { getPost } from "../api/PostApi";
import PostCard from "./PostCard";
import Form from "./Form";

export const Posts = () => {
 
  const [data, setData] = useState([]);
  const [updataData, setUpdataData] = useState({


  })

  

  const getPostData = async () => {
    try {
      const res = await getPost();
      setData(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="w-full px-6 py-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">CRUD Posts</h1>
<Form  data={data} setData={setData} updataData={updataData} setUpdataData={setUpdataData} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((currPost) => (
          <PostCard key={currPost.id} currPost={currPost} setUpdataData={setUpdataData} setData={setData} data={data} />

        ))}
      </div>
    </div>
  );
};
