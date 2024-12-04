import { useParams } from "react-router-dom";
import Layout, { LayoutInput } from "../component/layout";
import { UserId, CreatedAt, ItemTitle, Favorite } from "./board";
import "../css/boardItem.css";

export default function BoardItem() {
  const { num } = useParams();
  return (
    <Layout marginBottom={"353px"}>
      <div className="boardItem">
        <ItemTitle />
        <div className="infoLine2">
          <div className="box">
            <UserId img={"/img/ic_big_profile.png"} />
            <CreatedAt />
          </div>
          <div className="box">
            <Favorite img={"/img/ic_super_heart.png"} />
          </div>
        </div>

        <p className="contentText">
          맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
        </p>
      </div>
      <Coment />
      <ComentList coment={[1, 2, 3, 4, 6, 7, 8]} />
      <button className="backBtn">목록으로 돌아가기</button>
    </Layout>
  );
}

function Coment() {
  return (
    <div className="coment">
      <LayoutInput placeholder={"댓글을 입력해주세요"} title={"댓글달기"} />
      <button>등록</button>
    </div>
  );
}

function ComentList({ coment = [] }) {
  return (
    <ul className="comentList">
      {coment.map((v, i) => {
        return (
          <li key={i}>
            <p>혹시 사용기간이 어떻게 되실까요?</p>
            <div className="userId">
              <img src={"/img/ic_big_profile.png"} alt="유저이미지" />
              <div className="label">
                <p className="user">총명한판다</p>
                <p className="time">1시간전</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
