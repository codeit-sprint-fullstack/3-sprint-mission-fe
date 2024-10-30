import { atom } from "jotai";
import PRODUCT_SORT_BY from "../../constants/productSortBy";

const productSortByState = atom(PRODUCT_SORT_BY.recent.parameter);

export default productSortByState;
