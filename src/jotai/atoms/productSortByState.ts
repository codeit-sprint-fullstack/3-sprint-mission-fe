import { atom } from "jotai";
import { ProductSortOption } from "../../types/options";
import PRODUCT_SORT_BY from "../../constants/productSortBy";

const productSortByState = atom<ProductSortOption>(PRODUCT_SORT_BY.recent.parameter);

export default productSortByState;
