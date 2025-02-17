'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import MessageModal from './messageModal';
import ConfirmModal from './confirmModal';
import { useModal } from '@/hooks/modals/useModal';
import { createPortal } from 'react-dom';

export default function ModalsContainer() {
  const pathname = usePathname();
  const { isOpen, modalType, closeModal } = useModal();

  useEffect(() => {
    closeModal();
  }, [pathname]);

  if (!isOpen) return null;

  return createPortal(
    <>{modalType === 'confirm' ? <ConfirmModal /> : <MessageModal />}</>,
    document.body,
  );
}
