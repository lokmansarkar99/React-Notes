import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchPostById } from "../api/api"; // এই API ফাংশন তৈরি করুন

const FetchIndv = () => {
  const { postId } = useParams(); // URL থেকে Dynamic ID পাওয়া যাবে
 const navigate =  useNavigate()

  // React Query দিয়ে নির্দিষ্ট `postId` অনুযায়ী ডাটা লোড করুন
  const { data: post, isLoading, isError, error } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPostById(postId),
    enabled: !!postId, // postId থাকলে কেবলমাত্র API কল করবে
  });

  if (isLoading) return <p>Loading post details...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
     
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => { navigate('/rq')}} className="bg-emerald-500  px-4 py-1 rounded mt-4  hover:bg-emerald-400  hover: transition-all">GO BACK</button>
    </div>
  );
};

export default FetchIndv;
