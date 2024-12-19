import Button from "@/components/Button";
import axios from "axios";
import { useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Patching() {
  const fontStyle = "font-bold text-lg leading-[26px]";
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleClick = async () => {
    const formData = {
      title,
      content,
    }

    try {
      const res = await axios.patch(`${BASE_URL}/articles`, formData);

      if(res.status === 201) {
        alert('게시글 수정 성공');
        setTitle('');
        setContent('');
      } 
    } catch (err) {
      alert('!수정 실패!');
      console.log(err);
    }
  }

  const isDisabled = title === '' || content === '';

  return (
    <div className="flex flex-col mt-24 mx-5 lg:mx-[240px] md:mx-[20px] gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-[20px] leading-6 text-custom_coolGray font-bold">게시글 수정</h1>
        <Button handleClick={handleClick} disabled={isDisabled}>수정</Button>
      </div>

      <div className="flex flex-col gap-5">
        <label className={fontStyle}>*제목</label>
        <input value={title} onChange={handleChangeTitle} className="inputStyle" placeholder="제목을 입력해주세요"/>
        <label className={fontStyle}>*내용</label>
        <textarea value={content} onChange={handleChangeContent} className="inputStyle h-[280px] resize-none" placeholder="내용을 입력해주세요" />
      </div>
    </div>
  )
}