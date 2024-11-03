import { atom } from "jotai";

export const productNameState = atom<string>("");

export const productDescriptionState = atom<string>("");

export const productPriceState = atom<string>("");

export const productTagState = atom<string>("");

export const productTagsState = atom<string[]>([]);

export const productFormState = atom(
  (get) => ({
    name: get(productNameState),
    description: get(productDescriptionState),
    price: get(productPriceState),
    tags: get(productTagsState),
  }),
  (get, set) => {
    set(productNameState, "");
    set(productDescriptionState, "");
    set(productPriceState, "");
    set(productTagState, "");
    set(productTagsState, []);
  }
);
