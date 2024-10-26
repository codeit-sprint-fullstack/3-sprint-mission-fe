import { atom } from "recoil";

const productSortingState = atom({
  key: "productSorting",
  default: "최신순",
});

export default productSortingState;
