import "./ltem.css";
import HeartImg from "../../common/img/ic_heart.png";
import defaultImg from "../../common/img/img_default.png";

import { useEffect, useRef, useState } from "react";

export function Item({
  name,
  price,
  imgUrl,
  likeCount,
  imgStyle,
  marginStyle,
}) {
  // 1. class를 width에 따라서 구분
  // 2. 인라인 스타일
  // 밑에는 단순한 예시
  const imgRef = useRef(null);
  const [imgInner, setImgInnser] = useState({});

  // console.log("이건뭘까", imgRef);

  useEffect(() => {
    // 이미지 크기 비교
    if (imgRef.current.width < Number(imgStyle.width.split("px")[0])) {
      setImgInnser({
        width: "100%",
      });
    }
  }, []);

  return (
    <div className="item" style={marginStyle}>
      <div className="img_box" style={imgStyle}>
        <img
          ref={imgRef}
          src={imgUrl}
          onError={(e) => {
            e.target.src = defaultImg;
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
