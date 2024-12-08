import Image from 'next/image';
import styles from '@/css/SearchInput.module.css';
import { useState } from 'react';

export default function SearchInput({ setKeyword }) {
    const [inputValue, setInputValue] = useState("");

    const handleSearch = () => {
        setKeyword(inputValue);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchIcon} onClick={handleSearch}>
                <Image
                    src="/images/searchIcon.png"
                    alt="Search Icon"
                    width={24}
                    height={24}
                />
            </div>
            <input
                placeholder="검색할 상품을 입력해주세요."
                className={styles.SearchInput}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}
