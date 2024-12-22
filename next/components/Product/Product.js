import Styles from "@/components/Product/Product.module.css"
import FormatDate from "@/utils/Format"
import Image from "next/image"

export default function Product({product}) {
 
  return(
    <div>
      <div>
        <Image
          width={486} height={486}
          src="/images/img_default.png"
          alt="product image"
        />
      </div>
      <div>
        <h3>{product.name}</h3>
        <h1>{product.price}</h1>
        <span>상품소개</span>
        <span>{product.description}</span>
        <span>상품태그</span>
        <span>{product.tags}</span>
        <div>
          <Image
            width={40} height={40}
            src="/images/userImg.png"
            alt="userImage"
          />
          <div>
            <span>총명한 판다</span>
            <span>{FormatDate(product.createdAt)}</span>
          </div>
        </div>
        <div>
          <Image
            width={32} height={32}
            src="/images/ic_heart.png"
          />
          <span>{product.favoriteCount}</span>
        </div>
      </div>
      <Image
        width={1190} height={1}
        src="/images/Vector.png"
        alt="Vector Image"
      />
    </div>
  )
}