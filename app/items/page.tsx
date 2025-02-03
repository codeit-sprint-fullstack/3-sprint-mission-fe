import AllProducts from "@/components/items/AllProducts";
import BestProducts from "@/components/items/BestProducts";
import React from "react";

const ItemsPage = () => {
  return (
    <article className="px-6 py-7">
      <section className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <BestProducts />
        <AllProducts />
      </section>
    </article>
  );
};

export default ItemsPage;
