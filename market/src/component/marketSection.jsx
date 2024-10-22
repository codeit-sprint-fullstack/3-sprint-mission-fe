import { useEffect, useRef, useState } from "react";

export default function MarketSection({
  className,
  title,
  data,
  itemMaxWidth,
  children,
}) {
  const [items, setItems] = useState(data);
  useEffect(() => {
    setItems(data);
  }, [data]);
  return (
    <section className={"marketSection " + className}>
      <div className="titleLine">
        <h2>{title}</h2>
        {children}
      </div>
      <ul>
        {!!items.length ? (
          items.map((el, i) => {
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
          })
        ) : (
          <h2 className="notFoundList">게시물이 존재 하지 않습니다.</h2>
        )}
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

  const cutPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  useEffect(() => {
    if (imgRef.current.width < width.split("px")[0]) {
      setTimeout(() => {
        setImgStyle({
          ...imgStyle,
          width: "100%",
        });
      }, 50);
    }
  }, [img]);
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
            }}
          />
        </div>
        <div className="textBox">
          <h3>{name}</h3>
          <p>{cutPrice(price)}원</p>
          <p className="favorite">
            <img src="./img/ic_heart.svg" alt="favorite" />
            {favorite}
          </p>
        </div>
      </a>
    </li>
  );
}

export function MarketPageNavi({
  onClick,
  start,
  last,
  target,
  onNext,
  onPrivous,
  total,
}) {
  const arr = [];
  // if (total < 1) total = Math.ceil(total);
  for (let i = start; i <= last; i++) {
    if (i <= total) arr.push(i);
  }
  if (total < 1) arr.push(1);
  return (
    <div className="pageNavi">
      {target === 1 ? null : (
        <button className="privous" onClick={onPrivous}>
          <img src="./img/arrow_left.svg" alt="왼쪽" />
        </button>
      )}
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
      {target === total || arr < 5 ? null : (
        <button className="next" onClick={onNext}>
          <img src="./img/arrow_right.svg" alt="오른쪽" />
        </button>
      )}
    </div>
  );
}
