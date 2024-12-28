import styles from '@/styles/components/ItemDetail/ItemDetailInfo.module.css';
import Image from 'next/image';
import formatDate from '@/lib/formatDate';
import EditDeletMenu from '../ArticleDetail/EditDeletMenu';
import { useState } from 'react';
import LikeButton from '../shared/LikeButton';
import useItemId from '@/hooks/useItemId.js';

function ItemDetailInfo({ productId }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [itemEditDelete, setItemEditDelete] = useState(false);

  const { productDetail } = useItemId(productId);

  if (!productDetail) return null;

  const data = productDetail;
  console.log("images", data.images);

  return (
    <div className={styles.itemDetailInfoBox}>
      <div
        className={styles.itemImg}
        style={{
          position: "relative",
        }}
      >
        <Image
          fill
          src={data.images ? data.images.map((image, index) => image) : '/images/default/FE_default_I.png'}
          alt='아이템 상세 이미지'
        />
      </div>

      <div className={styles.itemInfoContainer}>
        <div className={styles.itemMainInfoContainer}>
          <div className={styles.itemMainInfoBox}>
            <h1 className={styles.itemName}>
              {data.name ? data.name : '판다마켓 상품 이름'}
            </h1>

            <div
              onClick={() => {
                setToggleMenu(!toggleMenu)
                setItemEditDelete(!itemEditDelete)
              }}
              className={styles.togleMenuMark}
            >⋮</div>
            {toggleMenu ?
              <EditDeletMenu id={productId.id} item={itemEditDelete} setItemEditDelete={setItemEditDelete} /> :
              null}
          </div>

          <h1 className={styles.itemPrice}>
            {data.price ? data.price : `5000,000`}원
          </h1>
        </div>

        <div className={styles.itmeDescriptionBox}>
          <h2 className={styles.itemDescriptionTitle}>
            상품 소개
          </h2>
          <p className={styles.itemDescription}>
            {data.description ? data.description :
              `액정에 잔기스랑 주변부 스크래치있습니다만
          예민하신분아니면 전혀 신경쓰이지않을정도입니다.
          박스 보관중입니다.
          메모용과 넷플릭스용으로만쓰던거라 뭘 해보질 않아 기능이나 문제점을 못느꼈네요
          잘 안써서 싸게넘깁니다!
택배거래안합니다.`}
          </p>

          <h2 className={styles.itemDescriptionTitle}>
            상품 태그
          </h2>
          <div className={styles.itemTagBox}>
            {data.tags ?
              data.tags.map((tag) => (
                <div className={styles.itemTag}>
                  # {tag}
                </div>
              ))
              :
              (
                <>
                  <div className={styles.itemTag}>
                    #{`아이패드미니`}
                  </div>
                  <div className={styles.itemTag}>
                    #{`애플`}
                  </div>
                  <div className={styles.itemTag}>
                    #{`가성비`}
                  </div>
                </>
              )}
          </div>
        </div>

        <div className={styles.itemMetaDataBox}>
          <div className={styles.userInfoBox}>
            <div
              className={styles.profileImage}
              style={{
                position: "relative",
              }}
            >
              <Image
                fill
                src='/images/icons/ic_profile.png'
                alt='아이템 상세 이미지'
              />
            </div>
            <div className={styles.metaDataSmallBox}>
              <div className={styles.nickname}>
                {data.ownerNickname ? data.ownerNickname : `총명한판다`}
              </div>
              <div className={styles.date}>
                {data.createdAt ? formatDate(data.createdAt) : `2022. 01. 01`}
              </div>
            </div>
          </div>

          <div className={styles.itemLikeBox}>
            <LikeButton data={data.favoriteCount} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailInfo;
