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
