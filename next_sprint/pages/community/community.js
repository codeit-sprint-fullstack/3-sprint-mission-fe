import Button from "@/components/Button";
import DropDown from "@/components/DropDown";
// import axios from "axios"
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from '../api/api';
import Link from "next/link";

export async function getStaticProps() {
  try {
    const res = await axios.get(`/articles`);
    const articles = res.data.data ;

    return {
      props : {
        articles,
      },
    };
  }
  catch(error) {
    return {
      props : {
        articles : [],
      }
    }
  }
}

export default function Community({articles}) {
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [filteredData, setFilteredData] = useState(articles);
  const [selectedOption, setSelectedOption] = useState('최신순');
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }
  
  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      try {
        if(!searchKeyWord.trim()) {
          setFilteredData(articles);
          return;
        }
          
        const encodedQuery = encodeURIComponent(searchKeyWord);
        const res = await axios.get(`/articles?word=${encodedQuery}`);
        setFilteredData(res.data.data);
      } catch (error) {
        console.error("Enter 키 에러 발생", error);
      }
    }
  };

  const handlePostClick = () => {
    console.log("Button clicked");

    router.push('/community/posting');
  }

  return <div className="flex flex-col mt-24 lg:mx-[240px] md:mx-[20px] gap-10 ">    
    <h1 className="text-[20px] leading-6 text-custom_coolGray font-bold">베스트 게시글</h1>
    <ul className="flex gap-6">
      { 
        articles.slice(0,3).map((article) => (
          <li key={article.id} className="flex flex-col bg-custom_coolGray50 w-[384px] h-[169px] gap-4 rounded-lg">
            <Image src="/img/img_badge.png" alt="best_badge" width={102} height={30} className="ml-5"/>
            <div className="flex justify-around">
              <h2 className="font-semibold text-xl leading-8">
                {article.title}
              </h2>
              <span className="bg-white w-[72px] h-[72px] border border-gray-400 border-opacity-25 rounded-lg">
                <Image src="/img/default_img.png" alt="default-img" width={48} height={44} className="mt-3 ml-3" />
              </span>
            </div>
          </li>
        ))
      }
    </ul>

    <div className="flex justify-between items-center">
      <h1 className="text-[20px] leading-6 text-custom_coolGray font-bold">게시글</h1>
      <Button handleClick={handlePostClick}>글쓰기</Button>
    </div>

    <div className="relative flex flex-col gap-10 z-0">
      <div className="relative flex gap-5">
        <Image
          src="/img/search_icon.png"
          alt="Search Icon"
          width={20}
          height={20}
          className="absolute left-3 top-5 transform -translate-y-1/2"
        />
        <input
          type="text"
          value={searchKeyWord}
          onChange={(e) => {
            setSearchKeyWord(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          placeholder="검색할 상품을 입력해주세요"
          className="w-5/6 h-[42px] bg-custom_coolGray50 rounded-xl focus:outline-none pl-9"
        />
        <DropDown handleOptionClick={handleOptionClick} sortOption={['최신순','좋아요순']} selectedOption={selectedOption} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <ul className="flex flex-col gap-6">
      { 
        filteredData.map((article) => (
          <li key={article.id} className="flex flex-col bg-custom_coolGray50 w-full h-[70px] gap-4 rounded-lg">
            <Link href={`/details/${article.id}`} passHref>
              <div className="flex">
                <h2 className="font-semibold text-xl leading-8">
                  {article.title}
                </h2>
                <span className="bg-white w-[72px] h-[72px] border border-gray-400 border-opacity-25 rounded-lg ml-auto">
                  <Image src="/img/default_img.png" alt="default-img" width={48} height={44} className="mt-3 ml-3" />
                </span>
              </div>
            </Link>
          </li>
        ))
      }
    </ul>
    </div>
  </div>
}
