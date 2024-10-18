import { useEffect, useRef, useState } from "react";

export default function MarketSection({
  className,
  title,
  data,
  itemMaxWidth,
}) {
  const items = !!data ? data : [];

  return (
    <section className={"marketSection " + className}>
      <div className="titleLine">
        <h2>{title}</h2>
      </div>
      <ul>
        {items.map((el, i) => {
          return (
            <MarketList
              width={itemMaxWidth}
              key={`${el}_${i}`}
              img={el.images[0]}
              name={el.name}
              price={el.price}
              favorite={el.favoriteCount}
            />
          );
        })}
      </ul>
    </section>
  );
}
function MarketList({ img, name, price, favorite, width }) {
  const imgRef = useRef(null);
  const [imgStyle, setImgStyle] = useState({});
  const notFound =
    "https://png.pngtree.com/png-vector/20210221/ourmid/pngtree-error-404-not-found-neon-effect-png-image_2928214.jpg";
  let style = {
    width,
  };
  let border = "1px solid #e8e8e8";
  useEffect(() => {
    if (!!imgRef.current && imgRef.current.width < width.split("px")[0]) {
      setImgStyle({
        ...imgStyle,
        width: "100%",
      });
    }
  }, [imgRef.current, img]);
  return (
    <li style={style}>
      <a href="#">
        <div className="imgBox" style={{ height: width }}>
          <img
            ref={imgRef}
            src={!!img ? img : notFound}
            alt={name}
            style={!!img ? imgStyle : { ...imgStyle, width: "100%" }}
            onError={(e) => {
              e.target.src = notFound;
              // setImgStyle({
              //   ...imgStyle,
              //   border,
              // });
            }}
          />
        </div>
        <div className="textBox">
          <h3>{name}</h3>
          <p>{price}</p>
          <p className="favorite">
            <img src="./img/ic_heart.svg" alt="favorite" />
            {favorite}
          </p>
        </div>
      </a>
    </li>
  );
}

export function MarketPageNavi({ onClick, start, last, target }) {
  const arr = [];
  for (let i = start; i <= last; i++) {
    arr.push(i);
  }
  return (
    <div className="pageNavi">
      <button className="privous">
        <img src="./img/arrow_left.svg" alt="왼쪽" />
      </button>
      <div className="pageBtnCover">
        {arr.map((v, i) => {
          return (
            <button
              key={`${v}_${i}`}
              className={target === v ? "on page" : "page"}
              onClick={onClick}
            >
              {v}
            </button>
          );
        })}
      </div>
      <button className="next">
        <img src="./img/arrow_right.svg" alt="오른쪽" />
      </button>
    </div>
  );
}
