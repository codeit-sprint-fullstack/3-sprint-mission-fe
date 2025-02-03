/* POST /products */
export type ProductCreateRequest = {
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
};

export type ProductCreateResponse = {
  createdAt: string;
  favoriteCount: number;
  ownerNickname: string;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
};

/* GET /products */
export type ProductListResponse = {
  totalCount: number;
  list: ProductCreateResponse[];
};

/* GET /products/:productId */
export type ProductDetailResponse = ProductCreateResponse & {
  isFavorite: boolean;
};

/* DELETE /products/:productId */
export type ProductDeleteResponse = {
  id: number;
};

/* POST /products/:productId/favorite */
export type ProductFavoriteResponse = ProductDetailResponse;

/* DELETE /products/:productId/favorite */
export type ProductUnfavoriteResponse = ProductDetailResponse;
