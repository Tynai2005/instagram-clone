import React from "react";
import "./Profile.css";
import face from "../../icons/face.png";

const Profile = () => {
  return (
    <div className="canvas">
      <div className="container">
        <div className="profile content-container">
          <div className="profile--header">
            <div className="profile--header-left mr30">
              <div className="icon150-cont">
                <img className="icon150" src={face} alt="" />
              </div>

              {/* <div className="icon150-gradient story-gradient">
                <div className="stories-white-backgr icon150-white-backgr">
                  <img src={face} alt="" className="icon150" />
                </div>
              </div> */}
            </div>
            <div className="profile--header-right">
              <div className="profile--header-top">
                <span className="profile--name font28 thinfont mr18">
                  smith
                </span>
                <span className="grey-rounded-button boldfont  profile--edit mr18">
                  Редактировать профиль
                </span>
                <svg
                  aria-label="Параметры"
                  class="_8-yf5 "
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></circle>
                  <path
                    d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
              <div className="profile--header-middle m20-0">
                <span className="profile--post-num font16 mr35">
                  <span className="boldfont">0</span>&nbsp;публикаций
                </span>
                <span className="profile--subscribers-num font16 mr35">
                  <span className="boldfont">4</span>&nbsp;подписчиков
                </span>
                <span className="profile-subscriptions--num font16 ">
                  <span className="boldfont">21</span>&nbsp;подписок
                </span>
              </div>
              <div className="profile--header-bottom ">
                <div className="profile--header-real-name font16 boldfont mb8">
                  will
                </div>
                <div className="profile--header-about font16 mb8">
                  hi i'm will smith
                </div>
                <div className="profile--header-webpage link font16 boldfont pointer">
                  will.com
                </div>
              </div>
            </div>
          </div>
          <div className="profile--body grey-border-top">
            <div className="profile--body-titles">
              <div className="uppercase profile--body-title-checked mr60">
                <svg
                  aria-label=""
                  class="_8-yf5 "
                  color="#262626"
                  fill="#262626"
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <rect
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    width="18"
                    x="3"
                    y="3"
                  ></rect>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="9.015"
                    x2="9.015"
                    y1="3"
                    y2="21"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="14.985"
                    x2="14.985"
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
                    y1="9.015"
                    y2="9.015"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="21"
                    x2="3"
                    y1="14.985"
                    y2="14.985"
                  ></line>
                </svg>
                публикации
              </div>
              <div className="uppercase greytext mr60">
                <svg
                  aria-label=""
                  class="_8-yf5 "
                  color="#262626"
                  fill="#262626"
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <polygon
                    fill="none"
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polygon>
                </svg>
                сохраненное
              </div>
              <div className="uppercase greytext">
                <svg
                  aria-label=""
                  class="_8-yf5 "
                  color="#262626"
                  fill="#262626"
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <path
                    d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <circle
                    cx="12.072"
                    cy="11.075"
                    fill="none"
                    r="3.556"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></circle>
                </svg>
                отметки
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
