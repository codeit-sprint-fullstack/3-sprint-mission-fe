// import { useQuery } from '@tanstack/react-query';
// import { createContext, PropsWithChildren, useContext, useState } from 'react';
// import { productsGet } from '../api/product';

// type Product = PropsWithChildren<{
//   item: string[] | null;
// }> | null;
// const ProductContext = createContext<Product>(null);

// export function ProductProvider({ children }: PropsWithChildren) {
//   const [state, setState] = useState(0);
//   const { data: item } = useQuery({
//     queryKey: ['product_item', state],
//     queryFn: () => {
//       productsGet();
//     },
//     enabled: false,
//   });
//   return (
//     <ProductContext.Provider
//       value={{
//         item,
//       }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// }

// export function useProduct() {
//   const context = useContext(ProductContext);
//   if (!context) throw new Error('Product Provider 안에서 사용해주세요');
//   return context;
// }
