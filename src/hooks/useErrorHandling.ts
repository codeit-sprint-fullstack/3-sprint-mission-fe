import { useState } from 'react';

export const useErrorHandling = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleError = (message: string) => {
    setModalOpen(true);
    setErrorMessage(message);
  };

  return { modalOpen, setModalOpen, errorMessage, handleError };
};
