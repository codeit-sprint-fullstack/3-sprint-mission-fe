'use client';

import { confirmModalAtom, errorModalAtom } from '@/lib/store/modalAtoms';
import { useSetAtom } from 'jotai';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import ErrorModal from './errorModal';
import ConfirmModal from './confirmModal';

export default function ModalsContainer() {
  const pathname = usePathname();
  const setErrorModalAtom = useSetAtom(errorModalAtom);
  const setConfirmModalAtom = useSetAtom(confirmModalAtom);

  useEffect(() => {
    setErrorModalAtom((prev) => ({ ...prev, isOpen: false }));
    setConfirmModalAtom((prev) => ({ ...prev, isOpen: false }));
  }, [pathname, setErrorModalAtom, setConfirmModalAtom]);

  return (
    <>
      <ErrorModal />
      <ConfirmModal />
    </>
  );
}
