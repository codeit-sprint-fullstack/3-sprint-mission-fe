import { useState } from "react";

export function useItmeList(items, leng) {
  const [_list, _setList] = useState(items);
  const [_length, _setLength] = useState(leng);
  return {
    value: _list,
    setValue: (setItems) => {
      _setList(setItems);
    },
    length: _length,
    setLength: (setLeng) => {
      _setLength(setLeng);
    },
  };
}

export function usePageNavi(sNum, lNum) {
  const [start, setStart] = useState(sNum);
  const [last, setLast] = useState(lNum);
  return {
    start,
    setStart: (startNum) => {
      setStart(startNum);
    },
    last,
    setLast: (lastNum) => {
      setLast(lastNum);
    },
  };
}

export function useChange() {
  const [value, setVlaue] = useState("");
  const handler = (e) => {
    e.preventDefault();
    setVlaue(e.target.value);
  };
  return {
    value,
    onChange: handler,
  };
}
