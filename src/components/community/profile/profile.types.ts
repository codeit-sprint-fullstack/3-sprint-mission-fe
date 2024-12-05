import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface ProfileProps {
  nickname: string;
  createdAt: string;
  profileIcon: StaticImport;
  iconSize: number;
}
