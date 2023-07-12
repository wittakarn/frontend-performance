import { useState } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css";

function App() {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    updateCount: 0,
  });

  const handleSubmit = (data) => {
    setUserInfo({
      ...data,
      updateCount: userInfo.updateCount + 1,
    });
  };

  return (
    <div className="container">
      <Header username={userInfo.username} lastname={userInfo.lastname}></Header>
      <Body handleSubmit={handleSubmit}></Body>
      <Footer updateCount={userInfo.updateCount}></Footer>
    </div>
  );
}

export default App;
