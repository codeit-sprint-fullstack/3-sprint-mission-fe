export default function MarketSection({
  className,
  title,
  data,
  itemMaxWidth,
}) {
  const items = !!data ? data : [];

  return (
    <section className={"marketSection " + className}>
      <h2>{title}</h2>
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
  let style = {
    width,
  };
  return (
    <li style={style}>
      <a href="#">
        <div className="imgBox" style={{ height: width }}>
          <img src={img} alt={name} />
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
