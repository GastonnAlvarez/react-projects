import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [keywords, setKeywords] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeywords("");
    e.target.reset();
    navigate(`/search?keywords=${keywords}`);
  };

  return (
    <div>
      <h1>Welcome to de React Router</h1>
      <hr />
      <Link to="/">Home</Link>
      {"  "}
      <Link to="/about">About Us</Link>
      {"  "}
      <Link to="/products">Products</Link>
      {"  "}
      <form onSubmit={handleSubmit} style={{ display: "inline-flex" }}>
        <input
          type="search"
          name="search"
          placeholder="Search"
          defaultValue={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <button type="submit">!Find</button>
      </form>
      <hr />
    </div>
  );
};

export default Navbar;
