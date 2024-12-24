'use client';
import Layout, { LayoutInput } from '@/app/shared/components/layout';
import {
  UserId,
  CreatedAt,
  ItemTitle,
  Favorite,
} from '@/app/board/_components';
import './boardItem.css';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { boardGetItem, ReturnData } from '@/app/shared/api/board';
import { useRouter } from 'next/navigation';
import EtcBox from '../_components/etcBox';
import Link from 'next/link';

export default function BoardItem() {
  const params = useParams();
  const router = useRouter();
  const [item, setItem] = useState({
    title: '',
    content: '',
    createdAt: new Date(),
    user: {
      name: '',
      id: '',
    },
    favorite: 0,
  });
  const { id } = params;
  useEffect(() => {
    boardGetItem({ number: id?.toString() }).then((res?: ReturnData) => {
      console.log(res);
      if (res && res.status >= 200 && res.status <= 300) {
        setItem(res.data);
      } else {
        alert('정보 조회를 실패했습니다');
        router.back();
      }
    });
  }, []);

  return (
    <Layout marginBottom={'353px'}>
      <div className="boardItem">
        <EtcBox />
        <ItemTitle title={item.title} />
        <div className="infoLine2">
          <div className="box">
            <UserId userId={item.user.name} img={'/img/ic_big_profile.png'} />
            <CreatedAt date={item.createdAt} />
          </div>
          <div className="box">
            <Favorite value={item.favorite} img={'/img/ic_super_heart.png'} />
          </div>
        </div>

        <p className="contentText">{item.content}</p>
      </div>
      <Coment />
      <ComentList coment={[1, 2, 3, 4, 6, 7, 8]} />
      <Link href="/board" className="backBtn">
        목록으로 돌아가기
      </Link>
    </Layout>
  );
}

function Coment() {
  return (
    <div className="coment">
      <LayoutInput placeholder={'댓글을 입력해주세요'} title={'댓글달기'} />
      <button>등록</button>
    </div>
  );
}

function ComentList({ coment }: { coment: number[] }) {
  return (
    <ul className="comentList">
      {coment.map((v, i) => {
        return (
          <li key={i}>
            <p>혹시 사용기간이 어떻게 되실까요?</p>
            <div className="userId">
              <img src={'/img/ic_big_profile.png'} alt="유저이미지" />
              <div className="label">
                <p className="user">총명한판다</p>
                <p className="time">1시간전</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
