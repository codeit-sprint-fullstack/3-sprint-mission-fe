import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface ProfileProps {
  layout: 'vertical' | 'horizontal';
  variant: 'time' | 'date';
  nickname: string;
  createdAt: string;
  profileIcon: StaticImport | string;
  iconSize: number;
}
