import { MEDIA_QUERY } from "../constants/mediaQuery";
import PRODUCT_SORT_BY from "../constants/productSortBy";
import PROP_VALUES from "../constants/propValues";

export type ProductSortOption =
  | typeof PRODUCT_SORT_BY.recent.parameter
  | typeof PRODUCT_SORT_BY.favorite.parameter;

export type ProductSize = typeof PROP_VALUES.product.big | typeof PROP_VALUES.product.small;

export type ScreenWidth =
  | typeof MEDIA_QUERY.value.large
  | typeof MEDIA_QUERY.value.medium
  | typeof MEDIA_QUERY.value.small
  | undefined;
