import "./ltem.css";
import HeartImg from "../img/ic_heart.png";
import { useEffect, useRef, useState } from "react";

export function Item({ name, price, imgUrl, likeCount, imgStyle }) {
  // 1. class를 width에 따라서 구분
  // 2. 인라인 스타일
  // 밑에는 단순한 예시
  const imgRef = useRef(null);
  const [imgInner, setImgInnser] = useState({});

  useEffect(() => {
    // 이미지 크기 비교
    if (imgRef.current.width < Number(imgStyle.width.split("px")[0])) {
      setImgInnser({
        width: "100%",
      });
    }
  }, [imgUrl]);

  return (
    <div className="item">
      <div className="img_box" style={imgStyle}>
        <img
          ref={imgRef}
          src={imgUrl}
          onError={(e) => {
            // console.log(e);
            // console.log(e.target);
            e.target.src =
              "https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2016/03/31/18/6/c21ad6ab-fbb0-445e-b0e6-248a46d9d84a.jpg";
          }}
          alt="image"
          style={imgInner}
        />
      </div>

      <div className="text">
        <span className="title">{name}</span>
        <span className="price">{price}원</span>
        <div className="like">
          <img src={HeartImg} />
          <span className="like_num">{likeCount}</span>
        </div>
      </div>
    </div>
  );
}
