import React from "react";
import "./PostDetails.css";
import face from "../../../icons/face.png";
// import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const PostDetails = () => {
  return (
    <div className="post-details--canvas modal--canvas">
      <div className="postcard-details--close-arrow">
        <svg
          aria-label="Закрыть"
          class="_8-yf5 "
          color="#ffffff"
          fill="#ffffff"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <polyline
            fill="none"
            points="20.643 3.357 12 12 3.353 20.647"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          ></polyline>
          <line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            x1="20.649"
            x2="3.354"
            y1="20.649"
            y2="3.354"
          ></line>
        </svg>
      </div>
      <div className="post-details--inner">
        <div className="post-details--left">
          <div className="post-details--content-images autoscroll">
            <img src="" alt="" />
            <img
              src="https://api.time.com/wp-content/uploads/2019/07/instagram-eliminates-likes.jpg"
              alt=""
            />
            <img
              src="https://cdn.dribbble.com/users/1803663/screenshots/11400179/media/25558ede8bcb553fd48d7ed339e136ee.png?compress=1&resize=400x300"
              alt=""
            />
          </div>
        </div>
        <div className="post-details--right">
          <div className="postcard postcard-details">
            <div>
              <div className="postcard-header grey-border-bottom p14">
                <div className="postcard-header--left">
                  <div className="postcard-story--gradient story--gradient mr14">
                    <div className="postcard-story--white-backgr">
                      <img
                        alt="face"
                        src={face}
                        className="pointer postcard-story--img"
                      />
                    </div>
                  </div>
                  <span className="postcard-header--author pointer boldfont">
                    smith{" "}
                  </span>
                  <span className="boldfont postcard-details-header--author-point">
                    Подписки
                  </span>
                </div>
                <div className="postcard-header--right pointer">
                  <svg
                    aria-label="Дополнительно"
                    class=""
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <circle cx="12" cy="12" r="1.5"></circle>
                    <circle cx="6" cy="12" r="1.5"></circle>
                    <circle cx="18" cy="12" r="1.5"></circle>
                  </svg>
                </div>
              </div>
              <div className="postcard-content postcard-details--content">
                <div className="postcard-details--content-comments autoscroll">
                  <div className="postcard-details--content-comment">
                    <div className="postcard-details--content-comment-left-n-center">
                      <div className="postcard-details--content-comment-left p14">
                        <img className="icon32" src={face} alt="" />
                      </div>
                      <div className="postcard-details--content-comment-center pt14 pb14">
                        <div className="postcard-details--content-comment-author-text">
                          <span className="postcard-details--content-comment-author boldfont">
                            smith &nbsp;
                          </span>
                          <span className="postcard-details--content-comment-text">
                            Hello!
                          </span>
                        </div>
                        <div className="postcard-details--content-comment-info pb14 pt14 greytext">
                          <span className="font12 pr14">5 ч.</span>
                          <span className="font12 pr14 boldfont">
                            "Нравится": 150
                          </span>
                          <span className="font12 pr14 boldfont">Ответить</span>
                          <span className="">
                            <svg
                              aria-label="Действия с комментарием"
                              class="_8-yf5 "
                              color="#8e8e8e"
                              fill="#8e8e8e"
                              height="24"
                              role="img"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <circle cx="12" cy="12" r="1.5"></circle>
                              <circle cx="6" cy="12" r="1.5"></circle>
                              <circle cx="18" cy="12" r="1.5"></circle>
                            </svg>
                          </span>
                        </div>
                        <div className="postcard-details--content-comment-seemore greytext">
                          <div className="font12 boldfont">
                            Посмотреть ответы (2)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="postcard-details--content-comment-right p14">
                      <svg
                        aria-label="Нравится"
                        class="svg hearticon-little"
                        color="#262626"
                        fill="#262626"
                        height="12"
                        role="img"
                        viewBox="0 0 24 24"
                        width="12"
                      >
                        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="postcard-details--content-comment">
                    <div className="postcard-details--content-comment-left-n-center">
                      <div className="postcard-details--content-comment-left p14">
                        <img className="icon32" src={face} alt="" />
                      </div>
                      <div className="postcard-details--content-comment-center pt14 pb14">
                        <div className="postcard-details--content-comment-author-text">
                          <span className="postcard-details--content-comment-author boldfont">
                            smith &nbsp;
                          </span>
                          <span className="postcard-details--content-comment-text">
                            Hello!
                          </span>
                        </div>
                        <div className="postcard-details--content-comment-info pb14 pt14 greytext">
                          <span className="font12 pr14">5 ч.</span>
                          <span className="font12 pr14 boldfont">
                            "Нравится": 150
                          </span>
                          <span className="font12 pr14 boldfont">Ответить</span>
                          <span className="">
                            <svg
                              aria-label="Действия с комментарием"
                              class="_8-yf5 "
                              color="#8e8e8e"
                              fill="#8e8e8e"
                              height="24"
                              role="img"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <circle cx="12" cy="12" r="1.5"></circle>
                              <circle cx="6" cy="12" r="1.5"></circle>
                              <circle cx="18" cy="12" r="1.5"></circle>
                            </svg>
                          </span>
                        </div>
                        <div className="postcard-details--content-comment-seemore greytext">
                          <div className="font12 boldfont">
                            Посмотреть ответы (2)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="postcard-details--content-comment-right p14">
                      <svg
                        aria-label="Нравится"
                        class="svg hearticon-little"
                        color="#262626"
                        fill="#262626"
                        height="12"
                        role="img"
                        viewBox="0 0 24 24"
                        width="12"
                      >
                        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="postcard-details--content-comment">
                    <div className="postcard-details--content-comment-left-n-center">
                      <div className="postcard-details--content-comment-left p14">
                        <img className="icon32" src={face} alt="" />
                      </div>
                      <div className="postcard-details--content-comment-center pt14 pb14">
                        <div className="postcard-details--content-comment-author-text">
                          <span className="postcard-details--content-comment-author boldfont">
                            smith &nbsp;
                          </span>
                          <span className="postcard-details--content-comment-text">
                            Hello!
                          </span>
                        </div>
                        <div className="postcard-details--content-comment-info pb14 pt14 greytext">
                          <span className="font12 pr14">5 ч.</span>
                          <span className="font12 pr14 boldfont">
                            "Нравится": 150
                          </span>
                          <span className="font12 pr14 boldfont">Ответить</span>
                          <span className="">
                            <svg
                              aria-label="Действия с комментарием"
                              class="_8-yf5 "
                              color="#8e8e8e"
                              fill="#8e8e8e"
                              height="24"
                              role="img"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <circle cx="12" cy="12" r="1.5"></circle>
                              <circle cx="6" cy="12" r="1.5"></circle>
                              <circle cx="18" cy="12" r="1.5"></circle>
                            </svg>
                          </span>
                        </div>
                        <div className="postcard-details--content-comment-seemore greytext">
                          <div className="font12 boldfont">
                            Посмотреть ответы (2)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="postcard-details--content-comment-right p14">
                      <svg
                        aria-label="Нравится"
                        class="svg hearticon-little"
                        color="#262626"
                        fill="#262626"
                        height="12"
                        role="img"
                        viewBox="0 0 24 24"
                        width="12"
                      >
                        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="postcard-details--content-comment">
                    <div className="postcard-details--content-comment-left-n-center">
                      <div className="postcard-details--content-comment-left p14">
                        <img className="icon32" src={face} alt="" />
                      </div>
                      <div className="postcard-details--content-comment-center pt14 pb14">
                        <div className="postcard-details--content-comment-author-text">
                          <span className="postcard-details--content-comment-author boldfont">
                            smith &nbsp;
                          </span>
                          <span className="postcard-details--content-comment-text">
                            Hello!
                          </span>
                        </div>
                        <div className="postcard-details--content-comment-info pb14 pt14 greytext">
                          <span className="font12 pr14">5 ч.</span>
                          <span className="font12 pr14 boldfont">
                            "Нравится": 150
                          </span>
                          <span className="font12 pr14 boldfont">Ответить</span>
                          <span className="">
                            <svg
                              aria-label="Действия с комментарием"
                              class="_8-yf5 "
                              color="#8e8e8e"
                              fill="#8e8e8e"
                              height="24"
                              role="img"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <circle cx="12" cy="12" r="1.5"></circle>
                              <circle cx="6" cy="12" r="1.5"></circle>
                              <circle cx="18" cy="12" r="1.5"></circle>
                            </svg>
                          </span>
                        </div>
                        <div className="postcard-details--content-comment-seemore greytext">
                          <div className="font12 boldfont">
                            Посмотреть ответы (2)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="postcard-details--content-comment-right p14">
                      <svg
                        aria-label="Нравится"
                        class="svg hearticon-little"
                        color="#262626"
                        fill="#262626"
                        height="12"
                        role="img"
                        viewBox="0 0 24 24"
                        width="12"
                      >
                        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="postcard-details--content-comment">
                    <div className="postcard-details--content-comment-left-n-center">
                      <div className="postcard-details--content-comment-left p14">
                        <img className="icon32" src={face} alt="" />
                      </div>
                      <div className="postcard-details--content-comment-center pt14 pb14">
                        <div className="postcard-details--content-comment-author-text">
                          <span className="postcard-details--content-comment-author boldfont">
                            smith &nbsp;
                          </span>
                          <span className="postcard-details--content-comment-text">
                            Hello!
                          </span>
                        </div>
                        <div className="postcard-details--content-comment-info pb14 pt14 greytext">
                          <span className="font12 pr14">5 ч.</span>
                          <span className="font12 pr14 boldfont">
                            "Нравится": 150
                          </span>
                          <span className="font12 pr14 boldfont">Ответить</span>
                          <span className="">
                            <svg
                              aria-label="Действия с комментарием"
                              class="_8-yf5 "
                              color="#8e8e8e"
                              fill="#8e8e8e"
                              height="24"
                              role="img"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <circle cx="12" cy="12" r="1.5"></circle>
                              <circle cx="6" cy="12" r="1.5"></circle>
                              <circle cx="18" cy="12" r="1.5"></circle>
                            </svg>
                          </span>
                        </div>
                        <div className="postcard-details--content-comment-seemore greytext">
                          <div className="font12 boldfont">
                            Посмотреть ответы (2)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="postcard-details--content-comment-right p14">
                      <svg
                        aria-label="Нравится"
                        class="svg hearticon-little"
                        color="#262626"
                        fill="#262626"
                        height="12"
                        role="img"
                        viewBox="0 0 24 24"
                        width="12"
                      >
                        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="postcard-details--content-comment">
                    <div className="postcard-details--content-comment-left-n-center">
                      <div className="postcard-details--content-comment-left p14">
                        <img className="icon32" src={face} alt="" />
                      </div>
                      <div className="postcard-details--content-comment-center pt14 pb14">
                        <div className="postcard-details--content-comment-author-text">
                          <span className="postcard-details--content-comment-author boldfont">
                            smith &nbsp;
                          </span>
                          <span className="postcard-details--content-comment-text">
                            Hello!
                          </span>
                        </div>
                        <div className="postcard-details--content-comment-info pb14 pt14 greytext">
                          <span className="font12 pr14">5 ч.</span>
                          <span className="font12 pr14 boldfont">
                            "Нравится": 150
                          </span>
                          <span className="font12 pr14 boldfont">Ответить</span>
                          <span className="">
                            <svg
                              aria-label="Действия с комментарием"
                              class="_8-yf5 "
                              color="#8e8e8e"
                              fill="#8e8e8e"
                              height="24"
                              role="img"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <circle cx="12" cy="12" r="1.5"></circle>
                              <circle cx="6" cy="12" r="1.5"></circle>
                              <circle cx="18" cy="12" r="1.5"></circle>
                            </svg>
                          </span>
                        </div>
                        <div className="postcard-details--content-comment-seemore greytext">
                          <div className="font12 boldfont">
                            Посмотреть ответы (2)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="postcard-details--content-comment-right p14">
                      <svg
                        aria-label="Нравится"
                        class="svg hearticon-little"
                        color="#262626"
                        fill="#262626"
                        height="12"
                        role="img"
                        viewBox="0 0 24 24"
                        width="12"
                      >
                        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="postcard-details--content-comment">
                    <div className="postcard-details--content-comment-left-n-center">
                      <div className="postcard-details--content-comment-left p14">
                        <img className="icon32" src={face} alt="" />
                      </div>
                      <div className="postcard-details--content-comment-center pt14 pb14">
                        <div className="postcard-details--content-comment-author-text">
                          <span className="postcard-details--content-comment-author boldfont">
                            smith &nbsp;
                          </span>
                          <span className="postcard-details--content-comment-text">
                            Hello!
                          </span>
                        </div>
                        <div className="postcard-details--content-comment-info pb14 pt14 greytext">
                          <span className="font12 pr14">5 ч.</span>
                          <span className="font12 pr14 boldfont">
                            "Нравится": 150
                          </span>
                          <span className="font12 pr14 boldfont">Ответить</span>
                          <span className="">
                            <svg
                              aria-label="Действия с комментарием"
                              class="_8-yf5 "
                              color="#8e8e8e"
                              fill="#8e8e8e"
                              height="24"
                              role="img"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <circle cx="12" cy="12" r="1.5"></circle>
                              <circle cx="6" cy="12" r="1.5"></circle>
                              <circle cx="18" cy="12" r="1.5"></circle>
                            </svg>
                          </span>
                        </div>
                        <div className="postcard-details--content-comment-seemore greytext">
                          <div className="font12 boldfont">
                            Посмотреть ответы (2)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="postcard-details--content-comment-right p14">
                      <svg
                        aria-label="Нравится"
                        class="svg hearticon-little"
                        color="#262626"
                        fill="#262626"
                        height="12"
                        role="img"
                        viewBox="0 0 24 24"
                        width="12"
                      >
                        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="postcard-details--content-comment">
                    <div className="postcard-details--content-comment-left-n-center">
                      <div className="postcard-details--content-comment-left p14">
                        <img className="icon32" src={face} alt="" />
                      </div>
                      <div className="postcard-details--content-comment-center pt14 pb14">
                        <div className="postcard-details--content-comment-author-text">
                          <span className="postcard-details--content-comment-author boldfont">
                            smith &nbsp;
                          </span>
                          <span className="postcard-details--content-comment-text">
                            Hello!
                          </span>
                        </div>
                        <div className="postcard-details--content-comment-info pb14 pt14 greytext">
                          <span className="font12 pr14">5 ч.</span>
                          <span className="font12 pr14 boldfont">
                            "Нравится": 150
                          </span>
                          <span className="font12 pr14 boldfont">Ответить</span>
                          <span className="">
                            <svg
                              aria-label="Действия с комментарием"
                              class="_8-yf5 "
                              color="#8e8e8e"
                              fill="#8e8e8e"
                              height="24"
                              role="img"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <circle cx="12" cy="12" r="1.5"></circle>
                              <circle cx="6" cy="12" r="1.5"></circle>
                              <circle cx="18" cy="12" r="1.5"></circle>
                            </svg>
                          </span>
                        </div>
                        <div className="postcard-details--content-comment-seemore greytext">
                          <div className="font12 boldfont">
                            Посмотреть ответы (2)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="postcard-details--content-comment-right p14">
                      <svg
                        aria-label="Нравится"
                        class="svg hearticon-little"
                        color="#262626"
                        fill="#262626"
                        height="12"
                        role="img"
                        viewBox="0 0 24 24"
                        width="12"
                      >
                        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="postcard-details--content-comment">
                    <div className="postcard-details--content-comment-left-n-center">
                      <div className="postcard-details--content-comment-left p14">
                        <img className="icon32" src={face} alt="" />
                      </div>
                      <div className="postcard-details--content-comment-center pt14 pb14">
                        <div className="postcard-details--content-comment-author-text">
                          <span className="postcard-details--content-comment-author boldfont">
                            smith &nbsp;
                          </span>
                          <span className="postcard-details--content-comment-text">
                            Hello!
                          </span>
                        </div>
                        <div className="postcard-details--content-comment-info pb14 pt14 greytext">
                          <span className="font12 pr14">5 ч.</span>
                          <span className="font12 pr14 boldfont">
                            "Нравится": 150
                          </span>
                          <span className="font12 pr14 boldfont">Ответить</span>
                          <span className="">
                            <svg
                              aria-label="Действия с комментарием"
                              class="_8-yf5 "
                              color="#8e8e8e"
                              fill="#8e8e8e"
                              height="24"
                              role="img"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <circle cx="12" cy="12" r="1.5"></circle>
                              <circle cx="6" cy="12" r="1.5"></circle>
                              <circle cx="18" cy="12" r="1.5"></circle>
                            </svg>
                          </span>
                        </div>
                        <div className="postcard-details--content-comment-seemore greytext">
                          <div className="font12 boldfont">
                            Посмотреть ответы (2)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="postcard-details--content-comment-right p14">
                      <svg
                        aria-label="Нравится"
                        class="svg hearticon-little"
                        color="#262626"
                        fill="#262626"
                        height="12"
                        role="img"
                        viewBox="0 0 24 24"
                        width="12"
                      >
                        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="postcard-descr grey-border-top pt14 mt14 mb14">
              <div className="postcard-details--descr--top m0-14">
                <div className="postcard-descr--icons">
                  <div className="pointer mr14">
                    <svg
                      aria-label="Нравится"
                      class="svg"
                      color="#262626"
                      fill="#262626"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                    </svg>
                  </div>
                  <div className="pointer mr14">
                    <svg
                      aria-label="Комментировать"
                      className="svg"
                      color="#262626"
                      fill="#262626"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path
                        d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </div>
                  <div className="pointer">
                    <svg
                      aria-label="Поделиться публикацией"
                      className="svg"
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
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="22"
                        x2="9.218"
                        y1="3"
                        y2="10.083"
                      ></line>
                      <polygon
                        fill="none"
                        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></polygon>
                    </svg>
                  </div>
                </div>
                <div className="pointer postcard-descr--save">
                  <svg
                    aria-label="Сохранить"
                    className="svg"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
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
                </div>
              </div>
              <div className="postcard-descr--middle mt14 m0-14">
                <div className="pointer postcard-descr--likes-count boldfont">
                  <span className="boldfont">264 980&nbsp;</span>отметок
                  "Нравится"
                </div>
                <div className="postcsrd-descr--authors-rext mt8">
                  <div className="greytext postcard-descr--showmore-date">
                    <div className="pointer">
                      <span className="font10 boldfont">3</span> часов назад
                    </div>
                  </div>
                </div>
              </div>
              <div className="postcard-descr--bottom mt14 p14">
                <div className="pointer postcard-descr--smile">
                  <svg
                    aria-label="Смайлик"
                    className=""
                    color="#262626"
                    fill="#262626"
                    height="23"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                  </svg>
                </div>
                <div className="postcard-descr--input ml14 mr14">
                  <input type="text" placeholder="Добавьте комментарий..." />
                </div>
                <div className="pointer postcard-descr--publish bluetext boldfont">
                  Опубликовать
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
