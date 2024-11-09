import { useEffect, useState } from "react";
import { getProductList } from "../apis/ProductService";
import PRODUCT_SORT_BY from "../constants/productSortBy";
import { IProduct } from "../types/datas";

const useProducts = ({
  page = 1,
  pageSize = 100,
  searchKeyword = "",
  orderBy = PRODUCT_SORT_BY.recent.parameter,
}: {
  page?: number;
  pageSize: number;
  searchKeyword?: string;
  orderBy?: "recent" | "favorite";
}) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [stale, setStale] = useState<boolean>(true);

  useEffect(() => {
    const fetchProductsList = async () => {
      try {
        setLoading(true);
        setError(null);
        const { list } = await getProductList({
          page,
          pageSize,
          keyword: searchKeyword,
          orderBy,
        });
        if (pageSize && stale) {
          setProducts(list);
        }
      } catch (e) {
        if (e instanceof Error) setError(e.message);
      } finally {
        setLoading(false);
        setStale(false);
      }
    };
    fetchProductsList();
  }, [orderBy, searchKeyword, pageSize, page, stale]);

  return { products, loading, error, refetch: () => setStale(true) };
};

export default useProducts;
