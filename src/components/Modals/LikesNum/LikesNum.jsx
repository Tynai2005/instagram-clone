import React from "react";
import face from "../../../icons/face.png";
import "./LikesNum.css";

const LikesNum = () => {
  return (
    <div className="likesnum modal--canvas">
      <div className="likesnum--inner modal--inner">
        <div className="likesnum--header modal--header grey-border-bottom">
          <div className="likesnum--close-filler modal--close-filler "></div>
          <div className="font16">Отметки &nbsp;"Нравится"</div>
          <div className="likesnum--close modal--close">
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
        <div className="likesnum--body p0-14 autoscroll">
          <div className="recoms-other mt8 mb14">
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
            <div className="whitetext blue-button boldfont">Подписаться</div>{" "}
          </div>
          <div className="recoms-other mt8 mb14">
            <div className="recoms-other-info">
              <div className="icon44-cont">
                <img src={face} alt="" className="icon44" />
              </div>
              <div className="ml10">
                <div className="boldfont">smith</div>
                <div className="greytext ">will</div>
              </div>
            </div>
            <div className="whitetext blue-button boldfont">Подписаться</div>{" "}
          </div>
          <div className="recoms-other mt8 mb14">
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
            <div className="whitetext blue-button boldfont">Подписаться</div>{" "}
          </div>
          <div className="recoms-other mt8 mb14">
            <div className="recoms-other-info">
              <div className="icon44-cont">
                <img src={face} alt="" className="icon44" />
              </div>
              <div className="ml10">
                <div className="boldfont">smith</div>
                <div className="greytext ">will</div>
              </div>
            </div>
            <div className="whitetext blue-button boldfont">Подписаться</div>{" "}
          </div>
          <div className="recoms-other mt8 mb14">
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
            <div className="whitetext blue-button boldfont">Подписаться</div>{" "}
          </div>
          <div className="recoms-other mt8 mb14">
            <div className="recoms-other-info">
              <div className="icon44-cont">
                <img src={face} alt="" className="icon44" />
              </div>
              <div className="ml10">
                <div className="boldfont">smith</div>
                <div className="greytext ">will</div>
              </div>
            </div>
            <div className="whitetext blue-button boldfont">Подписаться</div>{" "}
          </div>
          <div className="recoms-other mt8 mb14">
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
            <div className="whitetext blue-button boldfont">Подписаться</div>{" "}
          </div>
          <div className="recoms-other mt8 mb14">
            <div className="recoms-other-info">
              <div className="icon44-cont">
                <img src={face} alt="" className="icon44" />
              </div>
              <div className="ml10">
                <div className="boldfont">smith</div>
                <div className="greytext ">will</div>
              </div>
            </div>
            <div className="whitetext blue-button boldfont">Подписаться</div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikesNum;
