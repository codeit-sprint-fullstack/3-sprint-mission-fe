import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface CommentProps {
  id: string;
  pageId: string;
  nickname: string;
  content: string;
  createdAt: string;
  profileIcon: StaticImport | string;
  variant: 'product' | 'article';
}
