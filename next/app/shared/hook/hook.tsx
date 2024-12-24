'use client';
import { useEffect, useState } from 'react';

export function useItmeList(items: any, leng: any) {
  const [_list, _setList] = useState(items);
  const [_length, _setLength] = useState(leng);
  return {
    value: _list,
    setValue: (setItems: any) => {
      _setList(setItems);
    },
    length: _length,
    setLength: (setLeng: any) => {
      _setLength(setLeng);
    },
  };
}

export function usePageNavi(sNum: any, lNum: any) {
  const [start, setStart] = useState(sNum);
  const [last, setLast] = useState(lNum);
  return {
    start,
    setStart: (startNum: any) => {
      setStart(startNum);
    },
    last,
    setLast: (lastNum: any) => {
      setLast(lastNum);
    },
  };
}

export function useChange() {
  const [value, setValue] = useState('');
  const handler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return {
    value,
    set: (v: string) => setValue(v),
    onChange: handler,
  };
}

export function useScreenSize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handle = () => setWindowSize(window.innerWidth);
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('resize', handle);
    };
  }, []);

  return windowSize;
}

export function isEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
