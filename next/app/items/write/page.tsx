'use client';
import Layout, { LayoutInput } from '@/app/shared/components/layout';
import { useChange } from '@/app/shared/hook/hook';
import './write.css';
import { useEffect, useState } from 'react';
import { productCreate } from '@/app/shared/api/product';

export default function Write() {
  const name = useChange();
  const des = useChange();
  const price = useChange();
  const tag = useChange();
  const [onBtn, setOnBtn] = useState('');
  const [tagV, setTagV] = useState<any>([]);
  useEffect(() => {
    if (!!name.value && !!des.value && !!price.value && !!tagV.length) {
      setOnBtn('on');
    } else {
      setOnBtn('');
    }
  }, [name.value, des.value, price.value, tag.value]);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const body = {
      name: name.value,
      description: des.value,
      price: price.value,
      tags: tagV,
    };
    if (onBtn === 'on') {
      await productCreate(body)
        .then((res) => {
          if (res.success) {
            alert('등록했습니다.');
            // navigation('/items');
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert('정확히 입력해주세요');
    }
  };
  const tagEvent = (e: any) => {
    if (e.keyCode === 13) {
      const value = e.target.value.slice(0, 5);
      setTagV([...tagV, value]);
      tag.set('');
    }
  };
  const deleteTag = (e: any) => {
    e.preventDefault();
    const t = e.target.parentNode.textContent.split('#')[1].trim();
    const i = tagV.indexOf(t);
    tagV.splice(i, 1);
    setTagV([...tagV]);
  };
  return (
    <Layout marginBottom={'168px'}>
      <div className="titleLine">
        <h2>상품 등록하기</h2>
        <button onClick={onSubmit} className={`regi ${onBtn}`}>
          등록
        </button>
      </div>
      <LayoutInput
        title={'상품명'}
        placeholder={'상품명을 입력해주세요'}
        id={'itemName'}
        name={'name'}
        value={name.value}
        onchange={name.onChange}
        condition={name.value.length > 10}
        errMsg={'10자 이내로 입력해주세요'}
      />
      <LayoutInput
        title={'상품 소개'}
        placeholder={'상풍 소개를입력해주세요'}
        id={'itemDes'}
        name={'description'}
        value={des.value}
        onchange={des.onChange}
        type={'textarea'}
        condition={des.value.length <= 10}
        errMsg={'10자 이상 입력해주세요'}
      />
      <LayoutInput
        title={'판매가격'}
        placeholder={'판매 가격을 입력해주세요'}
        id={'price'}
        name={'price'}
        value={price.value}
        onchange={price.onChange}
        condition={isNaN(Number(price.value))}
        errMsg={'숫자로 입력해주세요'}
      />
      <LayoutInput
        title={'태그'}
        placeholder={'태그를 입력해주세요'}
        id={'tag'}
        name={'tag'}
        value={tag.value}
        onchange={tag.onChange}
        condition={tag.value.length > 5}
        maxLength={5}
        errMsg={'5글자 이내로 입력해주세요'}
        onkeypress={tagEvent}
      >
        {tagV.map((e: any) => {
          return (
            <div className="tagItem" key={e}>
              # {e}
              <div className="close" onClick={deleteTag}></div>
            </div>
          );
        })}
      </LayoutInput>
    </Layout>
  );
}
