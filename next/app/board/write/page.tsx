'use client';
import Layout, {
  LayoutInput,
  LayoutInputType,
  TitleLine,
} from '@/app/shared/components/layout';
import { useChange } from '@/app/shared/hook/hook';
import Link from 'next/link';
import './board.css';
import { useEffect, useState } from 'react';
import { boardCreateData, CreateBoard } from '@/app/shared/api/board';
import { useRouter } from 'next/navigation';
interface T_Input {
  value: string;
  onchange: React.ReactEventHandler;
}
export default function WriteBoard({
  titleValue,
  contentValue,
  // imagesValue,
  btnText = '등록',
}: {
  titleValue?: T_Input;
  contentValue?: T_Input;
  imagesValue?: string[];
  btnText?: string;
}) {
  const subject = useChange();
  const content = useChange();
  const [on, setOn] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const router = useRouter();
  const inputStatus = [
    {
      title: '*제목',
      placeholder: '제목을 입력해주세요',
      onchange: subject.onChange,
      value: titleValue ?? subject.value,
      maxLength: 20,
    },
    {
      title: '*내용',
      placeholder: '내용을 입력해주세요',
      type: 'textarea',
      onchange: content.onChange,
      value: contentValue ?? content.value,
    },
  ];
  useEffect(() => {
    if (
      content.value &&
      content.value.length >= 10 &&
      subject.value &&
      subject.value.length >= 5
    )
      setOn('on');
    else setOn('');
  }, [subject.value, content.value]);

  function submit() {
    if (on === 'on') {
      const body: CreateBoard = {
        title: subject.value,
        content: content.value,
        images,
        userUuid: '9cd3b725-e623-43a3-8ade-1f5a394fb43f',
      };
      boardCreateData(body)
        .then((res: any) => {
          if (res.status === 201) router.push('/board');
          else alert('실패했습니다');
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert('제대로 입력해주세요!');
    }
  }
  function addImages() {
    setImages([...images, '']);
  }
  return (
    <Layout>
      <TitleLine text="게시글 쓰기">
        <Link
          className={`writeBoard ${on}`}
          href={'/board/write'}
          onClick={submit}
        >
          {btnText}
        </Link>
      </TitleLine>
      {inputStatus.map((v, i) => {
        return <LayoutInput {...(v as LayoutInputType)} key={i} />;
      })}

      <AddImage imgArr={images} onClick={addImages} />
    </Layout>
  );
}

function AddImage({
  imgArr = [],
  onClick,
}: {
  imgArr: string[];
  onClick: React.ReactEventHandler;
}) {
  return (
    <div className="addImg">
      <h3>이미지</h3>
      {imgArr.map((v: any, i: number) => {
        return (
          <div className="item" key={i}>
            {/* <ImgBox src={v.src} alt={v.alt} width={"282px"} height={"282px"} /> */}
          </div>
        );
      })}
      <div className="empty">
        <div className="content">
          <div className="plus"></div>
          <p onClick={onClick}>이미지 등록</p>
        </div>
      </div>
    </div>
  );
}
