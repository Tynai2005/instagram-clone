import React from "react";
import "./PostShare.css";
import face from "../../../icons/face.png";

const PostShare = () => {
  return (
    <div className="postshare modal--canvas">
      <div className="postshare--inner modal--inner">
        <div className="postshare--header modal--header grey-border-bottom">
          <div className="postshare--close-filler modal--close-filler "></div>
          <div className="font16 boldfont">Поделиться</div>
          <div className="postshare--close modal--close">
            <svg
              aria-label="Закрыть"
              class="_8-yf5 "
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="21"
                x2="3"
                y1="3"
                y2="21"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="21"
                x2="3"
                y1="21"
                y2="3"
              ></line>
            </svg>
          </div>
        </div>
        <div className="postshare--to-whom p14-0 grey-border-bottom">
          <span className="font16 p0-14 boldfont">Кому:</span>
          <input
            className="p0-14 postshare--input"
            type="text"
            placeholder="Поиск..."
          />
        </div>
        <div className="postshare--recoms">
          <div className="boldfont p14">Рекомендуемые</div>
          <div className="recoms-other m14">
            <div className="recoms-other-info">
              <div className="icon44-gradient story-gradient">
                <div className="stories-white-backgr icon44-white-backgr">
                  <img src={face} alt="" className="icon44" />
                </div>
              </div>
              <div className="ml10">
                <div className="boldfont">smith</div>
              </div>
            </div>
            <div>
              <input
                className="postshare--checkbox"
                type="checkbox"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="recoms-other m14">
            <div className="recoms-other-info">
              <div className="icon44-cont">
                <img src={face} alt="" className="icon44" />
              </div>
              <div className="ml10">
                <div className="boldfont">smith</div>
                <div className="greytext">hahaha</div>
              </div>
            </div>
            <div>
              <input
                className="postshare--checkbox"
                type="checkbox"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
        <div className="postshare--send grey-border-top p14">
          <div className="whitetext boldfont blue-button">Отправить</div>
        </div>
      </div>
    </div>
  );
};

export default PostShare;
