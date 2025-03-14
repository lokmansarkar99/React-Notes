

// This is just a placeholder for content
const Section = ({ title, children }) => (
  <div className="mt-8 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
    <h2 className="text-3xl font-semibold mb-4">{title}</h2>
    <p className="text-gray-400">{children}</p>
  </div>
);

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8">TanStack React Query Blog</h1>

      {/* Introduction Section */}
      <Section title="What is TanStack React Query?">
        TanStack React Query is a powerful data-fetching and caching library for React that helps in managing server state. It abstracts away most of the complexities of handling server-side data and provides a declarative way of fetching, caching, and synchronizing data with minimal effort. It simplifies handling **loading states**, **errors**, **pagination**, **infinite scrolling**, and **optimistic updates**.
      </Section>

      {/* Old API Method vs React Query Section */}
      <Section title="Old API Methods (Fetch) vs React Query">
        Traditionally, developers used the `fetch` API to request data from servers. However, with this approach, you have to manually manage loading states, errors, and caching. React Query solves these problems by abstracting them into a powerful library:
        - **Fetch**: You manually handle API calls, loading, and error states.
        - **React Query**: Provides **caching**, **automatic retries**, **real-time polling**, **pagination**, and more, making API calls easier and faster to manage.
      </Section>

      {/* Query Client and Provider */}
      <Section title="Query Client and Provider">
        React Query introduces the **`QueryClient`** and **`QueryClientProvider`**, which are used to manage the cache and configure global settings for queries. You need to wrap your entire app with the `QueryClientProvider` to use React Query:
        <div className="overflow-x-auto">
          <pre className="text-gray-400 bg-gray-700 p-4 rounded-lg overflow-auto">
            {`import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Your components here */}
    </QueryClientProvider>
  );
}`}
          </pre>
        </div>
      </Section>

      {/* Handling API Errors and Loading States */}
      <Section title="Handling API Errors and Loading States">
        React Query simplifies loading and error states for API calls. The `isLoading` and `isError` states provided by React Query can be used to display appropriate messages to users:
        <div className="overflow-x-auto">
          <pre className="text-gray-400 bg-gray-700 p-4 rounded-lg overflow-auto">
            {`const { isLoading, isError, data, error } = useQuery('posts', fetchPosts);

if (isLoading) return <p>Loading...</p>;
if (isError) return <p>Error: {error.message}</p>;
`}
          </pre>
        </div>
      </Section>

      {/* Garbage Collection and Stale Time */}
      <Section title="Garbage Collection and Stale Time">
        React Query automatically handles cache management. It allows you to define a **stale time** for your data, and data will be considered "fresh" for that duration. After that, React Query will refetch it if required. Garbage collection ensures that unnecessary data is removed from the cache when it is no longer used.
      </Section>

      {/* Real-Time Polling */}
      <Section title="Real-Time Polling">
        React Query provides **real-time polling** via `refetchInterval`. This allows your data to be automatically updated at specified intervals without requiring you to manually set up polling logic.
        <div className="overflow-x-auto">
          <pre className="text-gray-400 bg-gray-700 p-4 rounded-lg overflow-auto">
            {`const { data } = useQuery('posts', fetchPosts, { refetchInterval: 5000 }); // Poll every 5 seconds`}
          </pre>
        </div>
      </Section>

      {/* UseMutation (Create, Update, Delete) */}
      <Section title="UseMutation (Create, Update, Delete)">
        React Query's **`useMutation`** hook simplifies handling **create**, **update**, and **delete** requests. It helps in managing optimistic updates, error handling, and cache updates:
        <div className="overflow-x-auto">
          <pre className="text-gray-400 bg-gray-700 p-4 rounded-lg overflow-auto">
            {`const mutation = useMutation(createPost, {
  onSuccess: () => queryClient.invalidateQueries('posts'),
});
mutation.mutate(newPost);`}
          </pre>
        </div>
      </Section>

      {/* Pagination and Infinite Scrolling */}
      <Section title="Pagination and Infinite Scrolling">
        React Query supports both **pagination** and **infinite scrolling**. Using **`useQuery`** with pagination or **`useInfiniteQuery`** with infinite scrolling can make these tasks easier:
        - **Pagination**: Use `page` and `pageSize` query parameters to fetch data in chunks.
        - **Infinite Scrolling**: Use `getNextPage` to fetch the next set of data as users scroll down.
        <div className="overflow-x-auto">
          <pre className="text-gray-400 bg-gray-700 p-4 rounded-lg overflow-auto">
            {`const { data, fetchNextPage } = useInfiniteQuery('posts', fetchPosts, {
  getNextPageParam: (lastPage) => lastPage.nextCursor,
});

<button onClick={() => fetchNextPage()}>Load More</button>`}
          </pre>
        </div>
      </Section>

      {/* Conclusion Section */}
      <Section title="Conclusion">
        TanStack React Query is an extremely powerful and efficient library for data-fetching in React. It helps reduce the complexity of handling server state and provides developers with tools to handle caching, polling, mutation, pagination, and much more. By integrating React Query into your React applications, you can simplify your code, improve performance, and enhance the user experience.
      </Section>

    </div>
  );
};

export default Home;
