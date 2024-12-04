import Layout, { TitleLine, ImgBox } from "../component/layout";
import { Link } from "react-router-dom";
import { useChange } from "../hook/hook";
import "../css/board.css";
export default function Board() {
  const searchHandle = useChange();
  const searchKewordHandle = (e) => {
    if (e.keyCode === 13 || e.type.toString() === "click") {
    }
  };
  const selectHandle = (e) => {
    e.preventDefault();
  };
  return (
    <Layout>
      <div className="bestLine">
        <TitleLine text={"베스트 게시글"} />
        <div className="bestContent">
          <BestItem />
          <BestItem />
          <BestItem />
        </div>
      </div>
      <div className="boardLine">
        <TitleLine text={"베스트 게시글"}>
          <Link className="writeBoard" to={"./writeBoard"}>
            글쓰기
          </Link>
        </TitleLine>
        <div className="searchLine">
          <div className="marketEtc">
            <div className="searchBox">
              <button className="submit" onClick={searchKewordHandle}>
                <img src="./img/ic_search.svg" alt="search" />
              </button>
              <input
                type="text"
                onChange={searchHandle.onChange}
                onKeyDown={searchKewordHandle}
                className="marketSearch"
                placeholder="검색할 상품을 입력해주세요"
              />
            </div>
            <div className="sortIcon">
              <select onChange={selectHandle}>
                <option value="recent" defaultChecked>
                  최신순
                </option>
                <option value="favorite">좋아요순</option>
              </select>
              <img src="./img/ic_sort.png" alt="정리" />
            </div>
          </div>
        </div>
        <div className="itemContent">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </Layout>
  );
}

function BestItem() {
  return (
    <div className="item">
      <p className="medal">
        <img src="./img/ic_medal.png" alt="메달" />
        Best
      </p>
      <div className="centerLine">
        <h3 className="itemTitle">
          맥북16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
        </h3>
        <ImgBox
          src="./img/img_default.png"
          alt="notFound"
          width={"72px"}
          height={"72px"}
        />
      </div>
      <div className="infoLine">
        <div className="left">
          <UserId />
          <Favorite />
        </div>
        <div className="right">
          <CreatedAt />
        </div>
      </div>
    </div>
  );
}
export function UserId({ img }) {
  return (
    <div className="userId">
      {!!img ? <img src={img} alt="유저이미지" /> : null}
      <p>총명한판다</p>
    </div>
  );
}
export function Favorite({ img }) {
  return (
    <div className="favorite">
      <img src={!!img ? img : "/img/ic_heart.svg"} alt="하트" />
      9999+
    </div>
  );
}
export function CreatedAt() {
  return <p className="createdAt">2024. 04. 16</p>;
}
export function ItemTitle({ className }) {
  return (
    <div className={className ? className : ""}>
      <h3 className="itemTitle">
        맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
      </h3>
    </div>
  );
}

function Item() {
  return (
    <div className="item">
      <div className="centerLine">
        <ItemTitle />
        <ImgBox
          src="./img/img_default.png"
          alt="notFound"
          width={"72px"}
          height={"72px"}
        />
      </div>
      <div className="infoLine">
        <div className="left">
          <UserId img={"./img/ic_profile.png"} />
          <CreatedAt />
        </div>
        <div className="right">
          <Favorite img={"./img/ic_big_heart.png"} />
        </div>
      </div>
    </div>
  );
}
