'use client';
import { useEffect } from 'react';
import WriteBoard from '../../write/page';
import { boardGetItem } from '@/app/shared/api/board';
import { useParams } from 'next/navigation';

export default function EditBoard() {
  const params = useParams();
  const { id } = params;
  // const [item, setItem] = useState({ title: '', content: '' });
  useEffect(() => {
    boardGetItem({ number: id?.toString() }).then((res) => {
      if (res?.status === 200) {
        // setItem(res.data);
      }
    });
  });
  return (
    <WriteBoard
      titleValue={{ value: '123', onchange: () => {} }}
      contentValue={{ value: '123', onchange: () => {} }}
      btnText="수정"
    />
  );
}
