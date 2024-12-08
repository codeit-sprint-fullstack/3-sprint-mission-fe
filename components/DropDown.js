import { useState, useRef, useEffect } from 'react';
import styles from '@/css/Dropdown.module.css';

export default function Dropdown({ setOrderby }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('최신순');
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (value, orderbyValue) => {
        setSelectedValue(value);
        setOrderby(orderbyValue);
        setIsOpen(false);
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
                className={styles.dropdownButton}
                onClick={toggleDropdown}
            >
                {selectedValue}
            </button>
            {isOpen && (
                <ul className={styles.dropdownMenu}>
                    <div
                        className={styles.menuItem}
                        onClick={() => handleOptionClick('최신순', 'recent')}
                    >
                        최신순
                    </div>
                    <div
                        className={styles.menuItem}
                        onClick={() => handleOptionClick('좋아요순', 'like')}
                    >
                        좋아요순
                    </div>
                </ul>
            )}
        </div>
    );
}
