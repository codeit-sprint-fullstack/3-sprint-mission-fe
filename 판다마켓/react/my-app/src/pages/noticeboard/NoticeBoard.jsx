import "./NoticeBoard.css";
import searchImg from "../../common/img/search.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ListAllApi, searchApi } from "../../api/api";

function PostBoxImg() {
  return (
    <div className="content_img_box">
      <img src="" />
    </div>
  );
}

function LikeNum() {
  return (
    <div className="like_num">
      <div className="like_num_img">
        <img src="../../img/ic_heart.png" />
        <span>999+</span>
      </div>
    </div>
  );
}

const BestPost = function () {
  return (
    <div className="post_box">
      <div className="best_box">
        <div className="medal_box">
          <img src="../../img/medal.png" />
        </div>
        <span>Best</span>
      </div>
      <div className="content_text">
        <p>맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?</p>
        <PostBoxImg />
      </div>
      <div className="text_bottom">
        <div className="text_left">
          <span>총명한판다</span>
          <LikeNum />
        </div>
        <span>2024.04.16</span>
      </div>
    </div>
  );
};

const PostBox = function ({ title, userid, createdAt, id }) {
  return (
    <div className="postbox" data-id={id}>
      <div className="content_text">
        <p className="width_none">{title}</p>
        <PostBoxImg />
      </div>
      <div className="text_bottom">
        <div className="text_left">
          <div className="nickname_box">
            <div className="img_background">
              <img src="../../img/profle.png" />
            </div>
            <span>{userid === null ? "총명한 판다" : userid}</span>
          </div>
          <span>{createdAt}</span>
        </div>
        <LikeNum />
      </div>
    </div>
  );
};

export function NoticeBoard() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    ListAllApi().then((res) => {
      setData(res);
    });
  }, []);
  function inputSearch(e) {
    const value = e.target.value;
    setSearch(value);
  }
  function handleInputSearch() {
    // console.log(search);
    searchApi(search).then((res) => {
      console.log(res);
      setData(res.postGet);
    });
  }

  return (
    <div className="inner">
      <h2>베스트 게시글</h2>
      <div className="box_inner">
        <BestPost />
        <BestPost />
        <BestPost />
      </div>
      <div className="top_inner">
        <h2>게시글</h2>
        <Link to="/postregistration">
          <button className="blue_bt">글쓰기</button>
        </Link>
      </div>
      <div className="right_box">
        <div className="input_box big_input">
          <a href="#">
            <img src={searchImg} onClick={handleInputSearch} />
          </a>
          <input
            type="text"
            placeholder={"검색할 상품을 입력해주세요"}
            onChange={inputSearch}
          />
        </div>
        <select className="default">
          <option value="recent">최신순</option>
          <option value="favorite">인기순</option>
        </select>
      </div>
      <div className="post_box_inner">
        {/* <PostBox />
        <PostBox />
        <PostBox />
        <PostBox /> */}
        {data.map((value, index) => {
          // console.log(value);
          return (
            <PostBox
              key={index}
              id={value.id}
              title={value.title}
              userid={value.userid}
              createdAt={value.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
}
