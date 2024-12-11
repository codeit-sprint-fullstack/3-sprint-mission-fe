'use client';
import { ImgBox } from '@/app/shared/components/layout';
import Link from 'next/link';

export interface T_Item {
  title: string;
  content: string;
  image?: string[];
  createdAt: Date;
  userId: string;
  favorite: number;
  boardNumber?: number;
}

export interface T_User {
  id: string;
  image: string;
}

export function BestItem({
  title = '',
  image = [''],
  createdAt,
  userId,
  favorite = 0,
  boardNumber,
}: T_Item) {
  return (
    <Link className="item" href={`/board/${boardNumber}`}>
      <div className="medal">
        <ImgBox
          src="./img/ic_medal.png"
          alt="메달"
          width="16px"
          height="16px"
        />
        <p>Best</p>
      </div>
      <div className="centerLine">
        <h3 className="itemTitle">{title}</h3>
        <ImgBox
          src={!!image[0] ? image[0] : './img/img_default.png'}
          alt="notFound"
          width={'72px'}
          height={'72px'}
        />
      </div>
      <div className="infoLine">
        <div className="left">
          <UserId userId={userId} />
          <Favorite value={favorite} />
        </div>
        <div className="right">
          <CreatedAt date={createdAt} />
        </div>
      </div>
    </Link>
  );
}
export function UserId({ img, userId }: { img?: string; userId: string }) {
  return (
    <div className="userId">
      {!!img ? <img src={img} alt="유저이미지" /> : null}
      <p>{userId}</p>
    </div>
  );
}
export function Favorite({ value, img }: { value: number; img?: string }) {
  return (
    <div className="favorite">
      <img src={!!img ? img : '/img/ic_heart.svg'} alt="하트" />
      {value}
    </div>
  );
}
export function CreatedAt({ date }: { date: Date }) {
  const dateString = (date: Date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDay() + 1;
    return `${year}.${month}.${day}`;
  };
  return <p className="createdAt">{dateString(date)}</p>;
}
export function ItemTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={className && ''}>
      <h3 className="itemTitle">{title}</h3>
    </div>
  );
}

export function Item({
  title = '',
  image = [''],
  createdAt,
  userId,
  favorite = 0,
  boardNumber,
}: T_Item) {
  return (
    <Link className="item" href={`/board/${boardNumber}`}>
      <div className="centerLine">
        <ItemTitle title={title} />
        <ImgBox
          src={image[0] || './img/img_default.png'}
          alt="image"
          width={'72px'}
          height={'72px'}
        />
      </div>
      <div className="infoLine">
        <div className="left">
          <UserId userId={userId} img={'./img/ic_profile.png'} />
          <CreatedAt date={createdAt} />
        </div>
        <div className="right">
          <Favorite value={favorite} img={'./img/ic_big_heart.png'} />
        </div>
      </div>
    </Link>
  );
}
