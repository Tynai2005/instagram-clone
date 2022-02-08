import React from "react";
import "./Stories.css";
import face from "../../../icons/face.png";

const Stories = () => {
  return (
    <div className="stories">
      <div className="stories--scrollbuttons"></div>
      <div className="story">
        <div className="story--gradient">
          <div className="story--white-backgr">
            <img src={face} alt="" className="story--img" />
          </div>
        </div>
        <div className="story--author littlefont">smith</div>
      </div>
      <div className="story">
        <div className="story--gradient">
          <div className="story--white-backgr">
            <img src={face} alt="" className="story--img" />
          </div>
        </div>
        <div className="story--author littlefont">tynka</div>
      </div>
      <div className="story">
        <div className="story--gradient">
          <div className="story--white-backgr">
            <img src={face} alt="" className="story--img" />
          </div>
        </div>
        <div className="story--author littlefont">tynka</div>
      </div>
      <div className="story">
        <div className="story--gradient">
          <div className="story--white-backgr">
            <img src={face} alt="" className="story--img" />
          </div>
        </div>
        <div className="story--author littlefont">tynka</div>
      </div>
      <div className="story">
        <div className="story--gradient">
          <div className="story--white-backgr">
            <img src={face} alt="" className="story--img" />
          </div>
        </div>
        <div className="story--author littlefont">tynka</div>
      </div>
      <div className="story">
        <div className="story--gradient">
          <div className="story--white-backgr">
            <img src={face} alt="" className="story--img" />
          </div>
        </div>
        <div className="story--author littlefont">tynka</div>
      </div>
      <div className="stories--scrollbuttons"></div>
    </div>
  );
};

export default Stories;
