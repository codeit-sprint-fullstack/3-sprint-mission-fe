export default function HeroCard() {
  return (
    <div className="card lg:card-side container rounded-none">
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <div className="card-actions">
          <button className="btn btn-primary btn-wide rounded-full">
            Watch
          </button>
        </div>
      </div>
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          alt="Album"
        />
      </figure>
    </div>
  );
}
