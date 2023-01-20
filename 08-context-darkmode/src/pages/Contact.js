import React from "react";
import { useThemeContext } from "../context/ThemeContext";


const Contact = () => {
    const {contextTheme} = useThemeContext();
  return (
    <>
      <h2>Contacto</h2>
      <p>{contextTheme} Theme</p>
      <p>Contacto</p>
    </>
  );
};

export default Contact;
