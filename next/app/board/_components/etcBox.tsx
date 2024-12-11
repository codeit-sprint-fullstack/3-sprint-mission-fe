'use client';
import { boardDeleteItem } from '@/app/shared/api/board';
import { ImgBox } from '@/app/shared/components/layout';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
export default function EtcBox() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const [modal, setModal] = useState(false);
  function modalState() {
    if (!modal) setModal(true);
    else setModal(false);
  }
  const inf = [
    {
      text: '수정하기',
      api: () => {
        router.push(`/board/edit/${id}`);
      },
    },
    {
      text: '삭제하기',
      api: () => {
        if (window.confirm('삭제하시겠습니까?')) {
          boardDeleteItem({ number: `${id}` }).then((res) => {
            if (res?.status === 204) router.push('/board');
          });
        }
      },
    },
  ];
  return (
    <div className="etcBox">
      <div className="event_" onClick={modalState}>
        <ImgBox
          src="/img/ic_three_roun.png"
          alt="btn"
          width="6px"
          height="26px"
        />
      </div>
      {modal && (
        <div className="modal">
          {inf.map((v) => {
            return <Button key={v.text} text={v.text} api={v.api} />;
          })}
        </div>
      )}
    </div>
  );
}

function Button({ api, text }: { api: any; text: string }) {
  return <button onClick={api}>{text}</button>;
}
