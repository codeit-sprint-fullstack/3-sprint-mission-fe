import Product from "@/components/Product/Product"
import { useQuery } from "@tanstack/react-query"
import { getProducts } from "@/api/api"

export default function ProductList({products}) {

  const result = useQuery({ queryKey})

  return(
    <div>
      {products.map((product) => {
        <Product key={product.id} product={product}/>
      })}
    </div>
  )
}