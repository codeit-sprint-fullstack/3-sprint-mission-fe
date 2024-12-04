import { useEffect, useRef, useState } from "react";

export default function MarketSection({
  className,
  title,
  data,
  itemMaxWidth,
  children,
}:{
  className?:string
  title?:string
  data:string[]
  itemMaxWidth:string
  children?:any
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
          items.map((el:any, i:number) => {
            return (
              <MarketList
                width={itemMaxWidth}
                key={`${el}_${i}`}
                img={!!el.images ? el.images[0] : null}
                name={el.name}
                price={el.price}
                favorite={el.favorite}
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
function MarketList({ img, name, price, favorite, width }:{ img:string, name:string, price:number, favorite:string, width:string }) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [imgStyle, setImgStyle] = useState({});
  const notFound = "./img/img_default.png";
  // "https://png.pngtree.com/png-vector/20210221/ourmid/pngtree-error-404-not-found-neon-effect-png-image_2928214.jpg";
  let style = {
    width,
  };

  const cutPrice = (price:string|number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  useEffect(() => {
    if (!!imgRef && imgRef.current) {
      const imgWidth = imgRef.current.width; 
      const maxWidth = parseInt(width.split("px")[0], 10); 
    
      if (imgWidth < maxWidth) {
        setTimeout(() => {
          setImgStyle({
            ...imgStyle,
            width: "100%",
          });
        }, 50);
      }
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
            onError={(e:any) => {
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
}:
{
  onClick:any,
  start:any,
  last:any,
  target:any,
  onNext:any,
  onPrivous:any,
  total:any,
}) {
  const arr = [];
  // if (total < 1) total = Math.ceil(total);
  for (let i = start; i <= last; i++) {
    if (i <= Math.ceil(total)) arr.push(i);
  }
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
      {target === Math.ceil(total) ? null : (
        <button className="next" onClick={onNext}>
          <img src="./img/arrow_right.svg" alt="오른쪽" />
        </button>
      )}
    </div>
  );
}
