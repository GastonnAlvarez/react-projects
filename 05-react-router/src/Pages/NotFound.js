import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <>
    <h1
      style={{
        display: "block",
        color: "#000",
        backgroundColor: "#dc3545",
        width: "80%",
        heigth: "auto",
        textAlign:"center",
        margin:"auto"
      }}
    >Error 404 :{`(`}</h1>
    {setTimeout(() => {
        navigate('/')
    }, 3000)}
    </>
  );
};

export default NotFound;
