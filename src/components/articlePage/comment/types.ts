import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface CommentProps {
  id: string;
  articleId: string;
  nickname: string;
  content: string;
  createdAt: string;
  profileIcon: StaticImport;
}
