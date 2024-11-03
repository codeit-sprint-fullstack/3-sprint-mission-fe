import "./header.css";
import Image from "./img/Group19.png";
import { Link, NavLink } from "react-router-dom";

const activeStyle = {
  color: "#3692FF",
  // fontSize: "40px",
  textDecoration: "none",
};

const defaultColor = {
  color: "#4b5563",
};

export function Header() {
  return (
    <div>
      <div className="header">
        <div className="header_inner">
          <Link to="/">
            <div className="logo">
              <img src={Image} alt="asdasd" className="logo_img" />
            </div>
          </Link>
          <ul>
            <li>자유게시판</li>

            <NavLink
              to="items"
              style={({ isActive }) => {
                return isActive ? activeStyle : defaultColor;
              }}
            >
              <li>중고마켓</li>
            </NavLink>
          </ul>
          <button className={"login"}>로그인</button>
        </div>
      </div>
    </div>
  );
}
