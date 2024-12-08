import { useState, useRef, useEffect } from 'react';
import styles from '@/css/Dropdown.module.css';
import Image from 'next/image';
import instance from '@/lib/axios';

export default function ArticleCommentDropDown({ id, onCommentAdded }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('최신순');
    const dropdownRef = useRef(null);

    console.log('ArticleCommentDropDownid' + id);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleDelete = () => {
        instance.delete(`/articleComment/${id}`)
            .then((response) => {
                alert("댓글이 삭제되었습니다!");
                onCommentAdded();
                setIsOpen(!isOpen);
            }).catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.dropdownContainer} ref={dropdownRef}>
            <button
                className={styles.dropdownButton1}
                onClick={toggleDropdown}
            >
                <Image
                    width={24}
                    height={24}
                    src="/images/dropdownbutton.png" alt="User" />
            </button>
            {isOpen && (
                <ul className={styles.dropdownMenu}>
                    <div
                        className={styles.menuItem1}
                        onClick={() => handlePatch()}
                    >
                        수정하기
                    </div>
                    <div
                        className={styles.menuItem1}
                        onClick={() => handleDelete('삭제하기')}
                    >
                        삭제하기
                    </div>
                </ul>
            )}
        </div>
    );
}
