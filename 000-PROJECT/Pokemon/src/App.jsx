import  { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import Pokemon from "./components/Pokemon";
import Footer from "./components/Footer";


function App() {

  const [search, setSearch] = useState("")
  return (
  <>
<Navbar search= { search} setSearch= {setSearch}  />
  <Pokemon  search={search} />
  <Footer />

  </>
  )
}

export default App;
