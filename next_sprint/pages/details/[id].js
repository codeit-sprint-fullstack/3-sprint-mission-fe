import Image from "next/image";
import axios from "../api/api";
import DropDown from "@/components/DropDown";
import { useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const { id } = context.query;

  try {
    const [articleRes, commentsRes] = await Promise.all([
      axios.get(`/articles/${id}`),
      axios.get(`/articles/${id}/comments`),
    ]);

    return {
      props: {
        data: articleRes.data,
        comments: commentsRes.data,
      },
    };
  } catch (err) {
    console.error("Error fetching data:", err);
    return {
      notFound: true,
    };
  }
}

export default function Details({ data, comments }) {
  const [commentsList, setCommentsList] = useState(comments?.data || []);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [isOpenMap, setIsOpenMap] = useState({});
  const isDisabled = text.trim() === "" ? true : false;
  const isEmpty = commentsList.length == 0 ? true : false;
  const router = useRouter();

  const toggleDropdown = (id) => {
    setIsOpenMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = async () => {
    const commentData = {
      content: text,
    };
    try {
      const res = await axios.post(`articles/${data.id}/comments`, commentData);
      if (res.status === 201) {
        alert("댓글 등록 완료!");
        setText("");
        setCommentsList((prevComments) => [
          ...prevComments,
          {
            id: res.data.id,
            content: res.data.content,
            createdAt: res.data.createdAt,
          },
        ]);
      }
    } catch (err) {
      alert("댓글 달기 실패!");
    }
  };

  const handleBackClick = () => {
    router.push("/community/community");
  };

  return (
    <div className="flex flex-col mt-24 lg:mx-[240px] md:mx-[20px] gap-3">
      <div className="flex flex-col border-b w-full gap-4">
        <div className="flex justify-between w-full">
          <h1 className="text-[20px] leading-6 text-custom_coolGray font-bold">
            {data.title}
          </h1>
          <DropDown
            isKebab={true}
            sortOption={["수정하기", "삭제하기"]}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>

        <div className="flex h-10 gap-4 items-center mb-5">
          <Image
            src="/img/user_profile.png"
            width={40}
            height={40}
            alt="유저 프로필"
            className="bg-gray-300 rounded-[50%]"
          />
          <p className="font-medium leading-6 text-sm">유저 이름 부분</p>
          <p className="text-gray-400 font-normal leading-6">
            {data.createdAt.slice(0, 10)}
          </p>
        </div>
      </div>

      <p className="font-normal text-lg leading-6">{data.content}</p>

      <div className="flex flex-col gap-4 mt-4">
        <label className="font-semibold text-base leading-6">댓글 달기</label>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="댓글을 입력해주세요."
          className="bg-custom_coolGray100 resize-none rounded-xl px-6 py-4 outline-none"
        />
        <div className="flex justify-end">
          <Button disabled={isDisabled} handleClick={handleClick}>
            등록
          </Button>
        </div>
      </div>

      {isEmpty && (
        <div className="flex flex-col items-center mt-4 gap-5">
          <Image
            src="/img/empty.png"
            alt="empty img"
            width={151}
            height={208}
          />
          <button
            className={`flex items-center justify-center gap-2 bg-custom_blue w-[220px] h-[42px] rounded-3xl px-[23px] py-3 text-base font-semibold leading-[19.09px] text-white`}
            onClick={handleBackClick}
          >
            <span>목록으로 돌아가기</span>
            <Image
              src="/img/back_icon.png"
              alt="back icon"
              width={24}
              height={24}
            />
          </button>
        </div>
      )}

      {!isEmpty &&
        commentsList.map((comment) => (
          <div key={comment.id} className="flex flex-col border-b py-2">
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm text-gray-800">{comment.content}</p>
              <DropDown
                isKebab={true}
                isOpen={isOpenMap[comment.id] || false}
                setIsOpen={() => toggleDropdown(comment.id)}
                sortOption={["수정하기", "삭제하기"]}
              />
            </div>
            <p className="text-xs text-gray-500">
              {new Date(comment.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
    </div>
  );
}
