export interface ISearchProductsParams {
  page: Number;
  pageSize: Number;
  orderBy: "favorite" | "recent";
  keyword: string;
}

export interface ICreateProductParams {
  name: string;
  description?: string | undefined;
  price: number;
  tags?: string[];
  images?: string[];
}
