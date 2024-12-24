'use client';
import './board.css';
import Layout, { TitleLine } from '../shared/components/layout';
import { useChange } from '../shared/hook/hook';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getData } from './_hook/hook';
import { BestItem, Item } from './_components';
import { useAuth } from '../shared/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function Board() {
  const { user } = useAuth();
  const searchHandle = useChange();
  const [data, setData] = useState([]);
  const [bestData, setBestData] = useState([]);
  const [pageSize, setPageSize] = useState(6);
  const [keyword, setKeyword] = useState('');
  const [orderBy, setOrderBy] = useState<'recent' | 'favorite'>('recent');
  const router = useRouter();
  const searchKewordHandle = (e: any) => {
    if (e.keyCode === 13 || e.type.toString() === 'click') {
      setPageSize(6);
      setKeyword(searchHandle.value);
    }
  };
  const selectHandle = (e: any) => {
    e.preventDefault();
    setOrderBy(e.target.value);
  };
  const writeHandle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const { href } = e.currentTarget;
    if (!!user) router.push(href);
    else alert('로그인해주세요');
  };
  useEffect(() => {
    getData({ setFn: setData, pageSize, orderBy, keyword });
    getData({ setFn: setBestData, pageSize: 3, orderBy: 'favorite' });
  }, [pageSize, keyword, orderBy]);
  return (
    <Layout>
      <div className="bestLine">
        <TitleLine text={'베스트 게시글'} />
        <div className="bestContent">
          {bestData.map((v: any) => {
            return (
              <BestItem
                key={v.id}
                title={v.title}
                content={v.content}
                createdAt={v.createdAt}
                userId={v.user.name}
                favorite={v.favorite}
                boardNumber={v.boardNumber}
              />
            );
          })}
        </div>
      </div>
      <div className="boardLine">
        <TitleLine text={'베스트 게시글'}>
          <Link
            className="writeBoard"
            href={'/board/write'}
            onClick={writeHandle}
          >
            글쓰기
          </Link>
        </TitleLine>
        <div className="searchLine">
          <div className="marketEtc">
            <div className="searchBox">
              <button className="submit" onClick={searchKewordHandle}>
                <img src="./img/ic_search.svg" alt="search" />
              </button>
              <input
                type="text"
                onChange={searchHandle.onChange}
                onKeyDown={searchKewordHandle}
                className="marketSearch"
                placeholder="검색할 상품을 입력해주세요"
              />
            </div>
            <div className="sortIcon">
              <select onChange={selectHandle}>
                <option value="recent" defaultChecked>
                  최신순
                </option>
                <option value="favorite">좋아요순</option>
              </select>
              {/* <img src="./img/ic_sort.png" alt="정리" /> */}
            </div>
          </div>
        </div>
        <div className="itemContent">
          {data.map((v: any) => {
            return (
              <Item
                key={v.id}
                title={v.title}
                content={v.content}
                createdAt={v.createdAt}
                userId={v.user.name}
                favorite={v.favorite}
                boardNumber={v.boardNumber}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
