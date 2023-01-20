import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li
            style={{
              display: "inline-block",
              paddingLeft: "3px",
              paddingRight: "3px",
            }}
          >
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li
            style={{
              display: "inline-block",
              paddingLeft: "3px",
              paddingRight: "3px",
            }}
          >
            {" "}
            <Link to="/about">About</Link>{" "}
          </li>
          <li
            style={{
              display: "inline-block",
              paddingLeft: "3px",
              paddingRight: "3px",
            }}
          >
            {" "}
            <Link to="/contact">Contact</Link>{" "}
          </li>
        </ul>
      </nav>
      <section>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Layout;
