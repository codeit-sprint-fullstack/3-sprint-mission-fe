import React from 'react';
import styles from '../styles/ProductDetail.module.css';

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={styles.modal}>
      <p>{message}</p>
      <button onClick={onConfirm}>확인</button>
      <button onClick={onCancel}>취소</button>
    </div>
  );
};

export default ConfirmationModal;
