export interface ISearchProductsParams {
  page: number;
  pageSize: number;
  orderBy: "favorite" | "recent";
  keyword: string;
}

export interface ICreateProductParams {
  _id?: string;
  name: string;
  description?: string | undefined;
  price: number;
  tags?: string[];
}
