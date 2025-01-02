import styles from '@/css/Modal.module.css';

export function Modal({ message, onClose, isVisible }) {
    return (
        <>
            {isVisible && (
                <>
                    <div className={styles.overlay}></div>
                    <div className={styles.customAlert}>
                        <p className={styles.alertText}>{message}</p>
                        <button className={styles.customAlertButton} onClick={onClose}>확인</button>
                    </div>
                </>
            )}
        </>
    )
}