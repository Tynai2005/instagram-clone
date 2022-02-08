import React from "react";
import face from "../../../icons/face.png";
import "./Recoms.css";

const Recoms = () => {
  return (
    <div className="recoms ml30">
      <div className="recoms-you pt14">
        <div className="recoms-you-info">
          <div>
            <img src={face} alt="" />
          </div>
          <div className="ml20">
            <div className="boldfont">Tynka</div>
            <div className="greytext">Smanov</div>
          </div>
        </div>
        <div className="bluetext recoms-bluetext boldfont">Переключиться</div>
      </div>
      <div className="recoms-others mt25">
        <div className="recoms-texts">
          <div className="boldfont greytext">Рекомендации для вас</div>
          <div className="boldfont littlefont">Все</div>
        </div>
        <div className="recoms-others-cont">
          <div className="recoms-other mt14">
            <div className="recoms-other-info">
              <div>
                <img src={face} alt="" />
              </div>
              <div className="ml14">
                <div className="boldfont">swith</div>
                <div className="greytext littlefont">Популярное</div>
              </div>
            </div>
            <div className="bluetext recoms-bluetext boldfont">Подписаться</div>
          </div>
          <div className="recoms-other mt14">
            <div className="recoms-other-info">
              <div>
                <img src={face} alt="" />
              </div>
              <div className="ml14">
                <div className="boldfont">swith</div>
                <div className="greytext littlefont">Популярное</div>
              </div>
            </div>
            <div className="bluetext recoms-bluetext boldfont">Подписаться</div>
          </div>
          <div className="recoms-other mt14">
            <div className="recoms-other-info">
              <div>
                <img src={face} alt="" />
              </div>
              <div className="ml14">
                <div className="boldfont">swith</div>
                <div className="greytext littlefont">Популярное</div>
              </div>
            </div>
            <div className="bluetext recoms-bluetext boldfont">Подписаться</div>
          </div>
        </div>
      </div>
      <div className="recoms-footer mt30">
        <ul className="lightgreytext">
          <li className="littlefont2">Информация</li>
          <li className="littlefont2">Помощь</li>
          <li className="littlefont2">Пресса</li>
          <li className="littlefont2">API</li>
          <li className="littlefont2">Вакансии</li>
          <br />
          <li className="littlefont2">Конфиденциальность</li>
          <li className="littlefont2">Условия</li>
          <li className="littlefont2">Места</li>
          <br />
          <li className="littlefont2">Популярные аккаунты</li>
          <li className="littlefont2">Хэштеги</li>
          <li className="littlefont2">Язык</li>
        </ul>
      </div>
    </div>
  );
};

export default Recoms;
