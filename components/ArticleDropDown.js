import { useState, useRef, useEffect } from 'react';
import styles from '@/css/Dropdown.module.css';
import Image from 'next/image';
import instance from '@/lib/axios';
import { useRouter } from 'next/router';

export default function ArticleDropDown({ id }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const router = useRouter();

    const toggleDropdown1 = () => {
        setIsOpen(!isOpen);
    };

    const handleDelete1 = () => {
        instance.delete(`/article/${id}`)
            .then((response) => {
                alert("게시글이 삭제되었습니다!");
                router.push(`/`);
            }).catch((error) => {
                console.error(error);
            });
    };

    const handlePatch = () => {
        router.push(`/${id}/articleUpdate`);
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
                className={styles.dropdownButton2}
                onClick={toggleDropdown1}
            >
                <Image
                    width={24}
                    height={24}
                    src="/images/dropdownbutton.png" alt="dropdownbutton" />
            </button>
            {isOpen && (
                <ul className={styles.dropdownMenu}>
                    <div
                        className={styles.menuItem2}
                        onClick={() => handlePatch()}
                    >
                        수정하기
                    </div>
                    <div
                        className={styles.menuItem2}
                        onClick={() => handleDelete1()}
                    >
                        삭제하기
                    </div>
                </ul>
            )}
        </div>
    );
}
