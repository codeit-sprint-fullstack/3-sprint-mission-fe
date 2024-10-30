import { useEffect, useState } from "react";
import { getProductList } from "../apis/ProductService";
import PRODUCT_SORT_BY from "../constants/productSortBy";

const useProducts = ({
  page = 1,
  pageSize,
  searchKeyword = "",
  orderBy = PRODUCT_SORT_BY.recent.parameter,
}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stale, setStale] = useState(true);

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
          setStale(false);
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductsList();
  }, [orderBy, searchKeyword, pageSize, page, stale]);

  return { products, loading, error, refetch: () => setStale(true) };
};

export default useProducts;
