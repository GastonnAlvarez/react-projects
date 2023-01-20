import React from "react";
import { useThemeContext } from "../context/ThemeContext";


const About = () => {
    const {contextTheme} = useThemeContext();
  return (
    <>
      <h2>About</h2>
      <p>{contextTheme} Theme</p>
      <p>Sobre mi</p>
    </>
  );
};

export default About;
