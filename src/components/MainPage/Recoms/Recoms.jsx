import React from "react";
import face from "../../../icons/face.png";
import "./Recoms.css";

const Recoms = () => {
  return (
    <div className="recoms ml30">
      <div className="recoms-you pt14">
        <div className="recoms-you-info">
          <div className="recoms-you-img-outer">
            <img src={face} alt="" className="icon56" />
          </div>
          <div className="ml20">
            <div className="boldfont">Tynka</div>
            <div className="greytext">Smanov</div>
          </div>
        </div>
        <div className="bluetext recoms-bluetext boldfont">Переключиться</div>
      </div>
      {/* <div className="recoms-you pt14">
        <div className="recoms-you-info">
          <div className="icon56-gradient story-gradient">
            <div className="stories-white-backgr icon56-white-backgr">
              <img src={face} alt="" className="icon56" />
            </div>
          </div>
          <div className="ml20">
            <div className="boldfont">Tynka</div>
            <div className="greytext">Smanov</div>
          </div>
        </div>
        <div className="bluetext recoms-bluetext boldfont">Переключиться</div>
      </div> */}
      <div className="recoms-others mt25">
        <div className="recoms-texts">
          <div className="boldfont greytext">Рекомендации для вас</div>
          <div className="boldfont font12">Все</div>
        </div>
        <div className="recoms-others-cont">
          <div className="recoms-other">
            <div className="recoms-other-info">
              <div className="icon32-cont">
                <img className="icon32" src={face} alt="" />
              </div>
              <div className="ml10">
                <div className="boldfont">smith</div>
                <div className="greytext font12">Популярное</div>
              </div>
            </div>
            <div className="bluetext recoms-bluetext boldfont">Подписаться</div>
          </div>
          <div className="recoms-other">
            <div className="recoms-other-info">
              <div className="icon32-cont">
                <img className="icon32" src={face} alt="" />
              </div>
              <div className="ml10">
                <div className="boldfont">smith</div>
                <div className="greytext font12">Популярное</div>
              </div>
            </div>
            <div className="bluetext recoms-bluetext boldfont">Подписаться</div>
          </div>
          <div className="recoms-other">
            <div className="recoms-other-info">
              <div className="icon32-gradient story-gradient">
                <div className="stories-white-backgr icon32-white-backgr">
                  <img src={face} alt="" className="icon32" />
                </div>
              </div>
              <div className="ml10">
                <div className="boldfont">smith</div>
                <div className="greytext font12">Популярное</div>
              </div>
            </div>
            <div className="bluetext recoms-bluetext boldfont">Подписаться</div>
          </div>
          <div className="recoms-other">
            <div className="recoms-other-info">
              <div className="icon32-cont">
                <img className="icon32" src={face} alt="" />
              </div>
              <div className="ml10">
                <div className="boldfont">smith</div>
                <div className="greytext font12">Популярное</div>
              </div>
            </div>
            <div className="bluetext recoms-bluetext boldfont">Подписаться</div>
          </div>
          <div className="recoms-other">
            <div className="recoms-other-info">
              <div className="icon32-cont">
                <img className="icon32" src={face} alt="" />
              </div>
              <div className="ml10">
                <div className="boldfont">smith</div>
                <div className="greytext font12">Популярное</div>
              </div>
            </div>
            <div className="bluetext recoms-bluetext boldfont">Подписаться</div>
          </div>
        </div>
      </div>
      <div className="recoms-footer mt30">
        <ul className="lightgreytext">
          <li className="font11">Информация</li>
          <li className="font11">Помощь</li>
          <li className="font11">Пресса</li>
          <li className="font11">API</li>
          <li className="font11">Вакансии</li>
          <br />
          <li className="font11">Конфиденциальность</li>
          <li className="font11">Условия</li>
          <li className="font11">Места</li>
          <br />
          <li className="font11">Популярные аккаунты</li>
          <li className="font11">Хэштеги</li>
          <li className="font11">Язык</li>
        </ul>
      </div>
    </div>
  );
};

export default Recoms;
