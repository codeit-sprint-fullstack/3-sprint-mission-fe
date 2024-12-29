import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/shared/BackToListButton.module.css";

function BackToListButton({type}) {
  const [path, setPath] = useState(type);

  
  useEffect(() => {
    switch (type) {
      case 'article':
        setPath('/community-feed');
        break;
      case 'items':
        setPath('/items');
        break;
    }
  }, [type]);
  
  return (
    <Link href={path}>
      <button className={styles.toCommunityFeedButton}>
        목록으로 돌아가기
        <div className={styles.toCommunityFeedButtonImage}>
          <Image
            src="/images/icons/backArrow.png"
            alt="목록으로 돌아가기 이미지"
            width={19}
            height={16}
          />
        </div>
      </button>
    </Link>
  );
}

export default BackToListButton;