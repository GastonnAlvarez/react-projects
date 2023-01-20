import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Products from "./Pages/Products";
import SearchResults from "./Pages/SearchResults";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="products/*" element={<Products/>} />
          <Route path="search" element={<SearchResults/>} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
