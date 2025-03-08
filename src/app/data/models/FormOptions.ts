export interface Option {
  value: string | number;
  label: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Property {
  id: number;
  name: string;
  options: { id: number; name: string }[];
}
