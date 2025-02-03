export type ArticleCreateRequest = {
  image: string;
  content: string;
  title: string;
};

export type ArticleCreateResponse = {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  writer: {
    nickname: string;
    id: number;
  };
  image: string;
  content: string;
  title: string;
  id: number;
};

export type ArticleListResponse = {
  totalCount: number;
  list: ArticleCreateResponse[];
};

export type ArticleDetailResponse = ArticleCreateResponse & {
  isLike: boolean;
};

export type ArticleDeleteResponse = {
  id: number;
};

export type ArticleLikeResponse = ArticleDetailResponse;

export type ArticleUnlikeResponse = ArticleDetailResponse;
