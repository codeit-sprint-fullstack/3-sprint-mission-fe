import "./header.css";
import Image from "../img/Group19.png";

export function Header() {
  return (
    <div>
      <div className="header">
        <div className="header_inner">
          <div className="logo">
            <img src={Image} alt="asdasd" className="logo_img" />
          </div>
          <ul>
            <li>자유게시판</li>
            <li>중고마켓</li>
          </ul>
          <button className={"login"}>로그인</button>
        </div>
      </div>
    </div>
  );
}
