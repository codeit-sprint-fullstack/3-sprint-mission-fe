import AllProducts from "@/components/items/AllProducts";
import BestProducts from "@/components/items/BestProducts";
import { BASE_URL } from "@/lib/axios";

const ItemsPage = async () => {
  // User Agent를 활용한 pageSize 결정은 app 디렉토리에서는 어렵기 때문에 기본값 사용
  const pageSize = 4;
  let bestProducts = null;
  try {
    bestProducts = await getBestProducts(pageSize);
  } catch (error) {
    console.error("Error fetching best products:", error);
  }

  return (
    <article className="px-6 py-7">
      <section className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <BestProducts items={bestProducts} />
        <AllProducts />
      </section>
    </article>
  );
};

// SSR을 사용하면 대신 fetch API를 직접 사용합니다.
async function getBestProducts(pageSize: number) {
  console.log(BASE_URL);
  const res = await fetch(
    `${BASE_URL}/products?page=1&pageSize=${pageSize}&orderBy=favorite`,
    { cache: "no-store" },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

export default ItemsPage;
