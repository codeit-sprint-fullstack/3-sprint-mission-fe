import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface CommentProps {
  nickname: string;
  content: string;
  createdAt: string;
  profileIcon: StaticImport;
}
