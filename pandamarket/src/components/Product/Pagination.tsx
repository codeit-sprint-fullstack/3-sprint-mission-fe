import styles from "@/components/Product/Pagination.module.css";
import Image from "next/image";

// Props 타입 정의
type PaginationProps = {
  totalPageNum: number;
  activePageNum: number;
  onPageChange: (pageNumber: number) => void;
};

export default function Pagination({
  totalPageNum,
  activePageNum,
  onPageChange,
}: PaginationProps) {
  const maxVisiblePages = 5;
  let startPage: number;

  if (totalPageNum <= maxVisiblePages) {
    startPage = 1;
  } else {
    startPage = Math.max(activePageNum - Math.floor(maxVisiblePages / 2), 1);
    startPage = Math.min(startPage, totalPageNum - maxVisiblePages + 1);
  }

  const pages = Array.from(
    { length: Math.min(maxVisiblePages, totalPageNum - startPage + 1) },
    (_, i) => startPage + i
  );

  return (
    <div className={styles.paginationBar}>
      <button
        disabled={activePageNum === 1}
        onClick={() => onPageChange(activePageNum - 1)}
        className={styles.paginationButton}
      >
        <Image src="/images/left.png" width={16} height={16} alt="Left Arrow" />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`${styles.paginationButton} ${
            activePageNum === page ? "active" : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={styles.paginationButton}
        disabled={activePageNum === totalPageNum}
        onClick={() => onPageChange(activePageNum + 1)}
      >
        <Image src="/images/right.png" width={16} height={16} alt="Right Arrow" />
      </button>
    </div>
  );
}
