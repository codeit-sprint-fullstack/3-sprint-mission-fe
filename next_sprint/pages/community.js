import Button from "@/components/Button";
import DropDown from "@/components/DropDown";
import axios from "axios"
import Image from "next/image";
import { useState } from "react";

const BASE_URL = process.env.BASE_URL;

export async function getStaticProps() {
  try {
    const res = await axios.get(`${BASE_URL}/articles`);
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
  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }

  const handleSearch = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/articles?word=${searchKeyWord}`);
      setFilteredData(res.data.data);
    } catch(error) {
      console.error("서치 에러 발생", error);
    }
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
                <Image src="/img/default_img.png" width={48} height={44} className="mt-3 ml-3" />
              </span>
            </div>
          </li>
        ))
      }
    </ul>

    <div className="flex justify-between items-center">
      <h1 className="text-[20px] leading-6 text-custom_coolGray font-bold">게시글</h1>
      <Button>글쓰기</Button>
    </div>

    <div className="relative flex flex-col gap-10">
      <div className="flex gap-5">
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
          onChange={(e) => setSearchKeyWord(e.target.value)}
          placeholder="검색할 상품을 입력해주세요"
          className="w-5/6 h-[42px] bg-custom_coolGray50 rounded-xl focus:outline-none pl-9"
        />
        <DropDown handleOptionClick={handleOptionClick} selectedOption={selectedOption} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <ul className="flex flex-col gap-6">
      { 
        filteredData.map((article) => (
          <li key={article.id} className="flex flex-col bg-custom_coolGray50 w-full h-[70px] gap-4 rounded-lg">
            <div className="flex">
              <h2 className="font-semibold text-xl leading-8">
                {article.title}
              </h2>
              <span className="bg-white w-[72px] h-[72px] border border-gray-400 border-opacity-25 rounded-lg ml-auto">
                <Image src="/img/default_img.png" width={48} height={44} className="mt-3 ml-3" />
              </span>
            </div>
          </li>
        ))
      }
    </ul>
    </div>
  </div>
}
