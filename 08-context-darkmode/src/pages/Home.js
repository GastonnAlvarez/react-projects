import React from "react";
import { useThemeContext } from "../context/ThemeContext";


const Home = () => {
    const {contextTheme} = useThemeContext();
  return (
    <>
      <h2>Home</h2>
      <p>{contextTheme} Theme</p>
      <p>Pagina Principal</p>
    </>
  );
};

export default Home;
