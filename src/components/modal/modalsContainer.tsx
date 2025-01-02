'use client';

import { confirmModalAtom, messageModalAtom } from '@/lib/store/modalAtoms';
import { useSetAtom } from 'jotai';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import MessageModal from './messageModal';
import ConfirmModal from './confirmModal';

export default function ModalsContainer() {
  const pathname = usePathname();
  const setErrorModalAtom = useSetAtom(messageModalAtom);
  const setConfirmModalAtom = useSetAtom(confirmModalAtom);

  useEffect(() => {
    setErrorModalAtom((prev) => ({ ...prev, isOpen: false }));
    setConfirmModalAtom((prev) => ({ ...prev, isOpen: false }));
  }, [pathname, setErrorModalAtom, setConfirmModalAtom]);

  return (
    <>
      <MessageModal />
      <ConfirmModal />
    </>
  );
}
