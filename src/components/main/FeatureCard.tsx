export default function FeatureCard() {
  return (
    <div className="container rounded-none card desktop:card-side">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="font-bold desktop:text-5xl card-title text-balance break-keep ">
          New album is released!
        </h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
}
