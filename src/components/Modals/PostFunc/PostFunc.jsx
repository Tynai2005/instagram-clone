import React from "react";
import face from "../../../icons/face.png";
import "./PostFunc.css";

const PostFunc = () => {
  return (
    <div className="postfunc modal--canvas">
      <div className="postfunc--inner modal--inner">
        <div className="post-func--item p14-0 grey-border-bottom redtext boldfont">
          Пожаловаться
        </div>
        <div className="post-func--item p14-0 grey-border-bottom redtext boldfont">
          Отменить подписку
        </div>
        <div className="post-func--item p14-0 grey-border-bottom">
          Перейти к публикации
        </div>
        <div className="post-func--item p14-0 grey-border-bottom">
          Отмеченные публикации
        </div>
        <div className="post-func--item p14-0 grey-border-bottom">
          Поделиться...
        </div>
        <div className="post-func--item p14-0 grey-border-bottom">
          Копировать ссылку
        </div>
        <div className="post-func--item p14-0 grey-border-bottom">
          Вставить на сайт
        </div>
        <div className="post-func--item p14-0">Отмена</div>
      </div>
    </div>
  );
};

export default PostFunc;
