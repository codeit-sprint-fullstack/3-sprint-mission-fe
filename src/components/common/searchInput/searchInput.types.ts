import { InputHTMLAttributes } from 'react';

export interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  onSearch: (value: string) => void;
}
