import { useState, useRef, useEffect } from 'react';
import styles from '@/css/Dropdown.module.css';
import Image from 'next/image';
import instance from '@/lib/instance';
import { useRouter } from 'next/router';

export default function ArticleDropDown({ id, authorId }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const dropdownRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            const user = JSON.parse(localStorage.getItem('user'));
            setCurrentUser(user);
        } else {
            console.log('Access token or user data not found');
        }
    }, []);

    const toggleDropdown1 = () => {
        setIsOpen(!isOpen);
    };

    const handleDelete1 = () => {
        const accessToken = localStorage.getItem('accessToken');
        if (currentUser && currentUser.id === authorId) {
            instance.delete(`/articles/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            })
                .then((response) => {
                    console.log(response.data);
                    alert("게시글이 삭제되었습니다!");
                    router.push(`/`);
                })
                .catch((error) => {
                    console.error(error);
                    alert("삭제 실패, 다시 시도해주세요.");
                });
        } else {
            alert("게시글을 삭제할 권한이 없습니다.");
        }
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
