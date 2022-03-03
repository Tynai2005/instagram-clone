import React from "react";
import "./AccPreview.css";
import face from "../../../icons/face.png";

const AccPreview = () => {
  return (
    <div className="acc-preview">
      <div className="acc-preview--header p14 grey-border-bottom">
        <div className="acc-preview--header-left mr14">
          <div className="icon56-cont">
            <img className="icon56" src={face} alt="" />
          </div>
        </div>
        <div className="acc-preview--header-right">
          <a href="" className="link">
            natgeo
          </a>
          <div className="mb10 greytext">National&nbsp;Geographic</div>
          <a href="" className="mt10 link">
            https://jfdfhsj
          </a>{" "}
          <div className="greytext">
            Подписчики: <span>emprata</span> и еще&nbsp;<span>3</span>
          </div>
        </div>
      </div>
      <div className="acc-preview--numbers p14-0 grey-border-bottom">
        <div className="acc-preview--number">
          <div className="boldfont">24&nbsp;211</div>
          <div className="greytext">публикаций</div>
        </div>
        <div className="acc-preview--number">
          <div className="boldfont">
            240 <span>млн</span>{" "}
          </div>
          <div className="greytext">подписчиков</div>
        </div>
        <div className="acc-preview--number">
          <div className="boldfont">123</div>
          <div className="greytext">подписок</div>
        </div>
      </div>
      <div className="acc-preview--posts">
        <img
          src="https://api.time.com/wp-content/uploads/2019/07/instagram-eliminates-likes.jpg"
          alt=""
        />
        <img
          src="https://api.time.com/wp-content/uploads/2019/07/instagram-eliminates-likes.jpg"
          alt=""
        />{" "}
        <img
          src="https://api.time.com/wp-content/uploads/2019/07/instagram-eliminates-likes.jpg"
          alt=""
        />
      </div>
      <div className="acc-preview--buttons-cont p14 grey-border-top">
        <div className="acc-preview--send-message-button acc-preview--buttons boldfont">
          Отправить сообщение
        </div>
        <div className="acc-preview--subscriptions-button acc-preview--buttons boldfont">
          Подписки
        </div>
      </div>
    </div>
  );
};

export default AccPreview;
