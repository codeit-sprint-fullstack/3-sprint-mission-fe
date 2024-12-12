export interface Option {
  value: string;
  label: string;
}

export interface CustomSelectProps {
  options: Option[];
  onChange: (option: Option) => void;
}
