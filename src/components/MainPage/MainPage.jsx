import React from "react";
import Posts from "./Posts/Posts";
import "./MainPage.css";
import Stories from "./Stories/Stories";
import Recoms from "./Recoms/Recoms";
import Modals from "../Modals/Modals";

const MainPage = () => {
  return (
    <div className="canvas">
      <div className="container">
        <div className="mainpage">
          <div className="mainpage--left">
            <Stories />
            <Posts />
          </div>
          <div className="mainpage--right">
            <Recoms />
          </div>
          <Modals />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
