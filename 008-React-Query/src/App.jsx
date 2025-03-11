import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import FetchOld from "./pages/FetchOld";
import FetchRQ from "./pages/FetchRQ";
import Layout from "./layout/Layout";
import FetchIndv from "./pages/FetchIndv";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        
        {/* FetchRQ Route with Dynamic Child Route */}
<Route path="rq" element={<FetchRQ />}/>

<Route path="rq/:postId" element={<FetchIndv />} />

        <Route path="old" element={<FetchOld />} />
      </Route>
    </Routes>
  );
};

export default App;
