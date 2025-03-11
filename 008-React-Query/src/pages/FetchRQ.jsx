import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/api";
import { Link, NavLink } from "react-router"; // ✅ এখানে `react-router-dom` ইউজ করুন

const FetchRQ = () => {
  // React Query দিয়ে Posts ফেচ করুন
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p className="text-yellow-400">Loading posts...</p>;
  if (isError) return <p className="text-red-500">{error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-4xl mb-6 text-center">
        All Posts from JSONPlaceholder API
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.map((postItem) => (

<li key={postItem.id} className="bg-gray-800 p-4 rounded shadow-lg border-l">
<NavLink to={`/rq/${postItem.id}`} >
<h2>{postItem.id} </h2>
            <h1 className="text-xl font-semibold">{postItem.title}</h1>
            <p className="text-gray-400">{postItem.body}</p>
            
            </NavLink>
      
            </li>


          
        ))}
      </ul>
    </div>
  );
};

export default FetchRQ;
