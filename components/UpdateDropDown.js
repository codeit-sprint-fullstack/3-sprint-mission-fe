import { useState, useEffect, useRef } from "react";
import styles from "./UpdateDropDown.module.css";
import Image from "next/image";

export default function UpdateDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

  // 외부 클릭 시 드롭다운 닫기
  const handleClickOutside = (e) => {
    // 드롭다운이 랜더링 되어있고(숨기지 않으면 기본으로 true)
    // 클릭한 요소가 ref.current에 할당된 요소가 아니면, 즉 바깥이면
    // 매뉴 창 닫기
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  // 드롭다운 옵션 삭제하기 눌렀을 때 이벤트
  const handleSelectDelete = () => {
    // 드롭다운 닫기
    setIsOpen(false);
  };

  // 드롭다운 옵션 수정하기 눌렀을 때 이벤트
  const handleSelectUpdate = () => {
    // 드롭다운 닫기
    setIsOpen(false);
  };

  useEffect(() => {
    // 매뉴 창이 열려있을 때만 이벤트 리스너 추가
    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    }
    // 닫히면(isOpen=false), 컴포넌트가 제거(언마운트)되면 실행->클린업 함수
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleClick = () => {};
  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button className={styles.articleChangeBt} onClick={toggleDropdown}>
        <Image fill alt="deleteOrUpdate" src="/imgs/ic_kebab.png" />
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <div className={styles.dropdownItem} onClick={handleSelectUpdate}>
            수정하기
          </div>
          <div className={styles.dropdownItem} onClick={handleSelectDelete}>
            삭제하기
          </div>
        </div>
      )}
    </div>
  );
}
