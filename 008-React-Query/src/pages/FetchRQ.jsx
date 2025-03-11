import { useState } from "react";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchPosts, deletePost } from "../api/api";
import { NavLink } from "react-router"; 


const FetchRQ = () => {

  const queryClient = useQueryClient()
  // React Query দিয়ে Posts ফেচ করুন
  const [pageNumber, setPageNumber] = useState(0)
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchPosts(pageNumber),
    // gcTime: 10000,
    // staleTime: 10000, 
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true 
    placeholderData: keepPreviousData,
  });


// useMutation to delete the post 
const deleteMutation =useMutation({
  mutationFn: (id) => deletePost(id),
  onSuccess: (data, id) => {
    console.log(data, id)
    queryClient.setQueryData(["posts", pageNumber], (currElem) => {
      return currElem?.filter((post) => post.id !== id )
    })
  
  }
})



  if (isLoading) return <p className="text-yellow-400">Loading posts...</p>;
  if (isError) return <p className="text-red-500">{error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-4xl mb-6 text-center">
        All Posts from JSONPlaceholder API
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {data?.map((postItem) => { 
          const {id, title, body} = postItem
         
         return ( 

<li key={postItem.id} className="bg-gray-800 p-4 rounded shadow-lg border-l min-h-48">
<NavLink to={`/rq/${id}`} >
<h2>{postItem.id} </h2>
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-gray-400">{body}</p>
            
            </NavLink>
      <button onClick={()=> deleteMutation.mutate(id)} className=  " text-white font-semibold bg-pink-600 px-4 py-1 rounded mt-4 ml-3 hover:bg-pink-500  hover: transition-colors " >Delete</button>
            </li>


          
        )})}
      </ul>
      <div className="mt-6">
        <button disabled={pageNumber === 0 ? true  : false} onClick={()=> {setPageNumber((pre) =>  pre - 3)}}  className=  {` text-black font-semibold bg-emerald-500  px-4 py-1 rounded mt-4 mr-3 hover:bg-emerald-400  hover: transition-colors ${pageNumber  === 0 && "text-gray-600"} `}>PREV</button>
        <span> {pageNumber / 3 + 1} </span>
        <button  disabled={pageNumber === 99 ? true  : false}  onClick={()=> {setPageNumber((pre) =>  pre + 3)}} className=  {` text-black font-semibold bg-emerald-500  px-4 py-1 rounded mt-4 ml-3 hover:bg-emerald-400  hover: transition-colors ${pageNumber  === 99 && "text-gray-600"} `}>NEXT</button>
      </div>
    </div>
  );
};

export default FetchRQ;
