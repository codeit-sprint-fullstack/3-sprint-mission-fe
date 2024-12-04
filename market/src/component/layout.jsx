import { useEffect, useRef, useState } from "react";

export default function Layout({ title, children, marginBottom }) {
  return (
    <div className="container" style={{ marginBottom }}>
      {!!title ? <h2>{title}</h2> : null}
      {children}
    </div>
  );
}

export function LayoutInput({
  placeholder,
  name,
  id,
  onchange,
  value,
  errMsg,
  condition,
  title,
  type,
  onkeypress,
  maxLength,
  children,
}) {
  let inputAtt = {
    placeholder,
    name,
    id,
    onChange: onchange,
    value,
    onBlur: () => {
      if (condition && !!condition) setTriger(true);
      else setTriger(false);
    },
    onFocus: () => setTriger(false),
    onKeyDown: !!onkeypress ? onkeypress : null,
  };
  const [triger, setTriger] = useState(false);
  return (
    <div className="inputBox">
      <label htmlFor={id}>{title}</label>
      {type === "textarea" ? (
        <div
          className="cover covertxt"
          style={{ border: triger ? "1px solid #f74747" : null }}
        >
          <textarea
            {...inputAtt}
            style={{ width: "100%", height: "282px" }}
          ></textarea>
          {triger ? <p className="errMsg">{errMsg}</p> : null}
        </div>
      ) : (
        <div
          className="cover"
          style={{ border: triger ? "1px solid #f74747" : null }}
        >
          <input
            type="text"
            {...inputAtt}
            maxLength={!!maxLength ? maxLength : null}
          />
          {triger ? <p className="errMsg">{errMsg}</p> : null}
        </div>
      )}
      {id === "tag" ? <div className="tagBox">{children}</div> : null}
    </div>
  );
}

export function TitleLine({ text, children }) {
  return (
    <div className="titleLine">
      <h2>{text}</h2>
      {children}
    </div>
  );
}

export function ImgBox({ src, alt, width, height }) {
  const imgStyle = {
    width,
    height,
  };
  return (
    <div className="imgBox" style={imgStyle}>
      <img src={src} alt={alt} />
    </div>
  );
}
