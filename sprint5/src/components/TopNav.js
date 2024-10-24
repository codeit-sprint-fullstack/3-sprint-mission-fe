import "../styleCom/topNav.css";
import "../styleCom/common.css";
import pandaLogoImg from "../imgs/pandaMarketLogo.png";

export function TopNav() {
  return (
    <section className="topNav">
      <div className="navCon">
        <div className="leftCon">
          {/* 판다로고 이미지 */}
          <img id="logoImg" src={pandaLogoImg} alt="pandaMarketLogo" />

          {/* 자유게시판 & 중고마켓 */}
          <div>
            <a href="./free">자유게시판 </a>
          </div>
          <div>
            <a href="./secondHand">중고마켓</a>
          </div>
        </div>

        {/* 글씨 만이 아닌 여백을 클릭해도 링크 이동하기 위함 */}
        <a className="likeBt" href="/login">
          <div>로그인</div>
        </a>
      </div>
    </section>
  );
}
