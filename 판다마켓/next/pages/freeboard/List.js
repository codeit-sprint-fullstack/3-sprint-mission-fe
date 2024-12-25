import { BestPost } from "@/components/BestPost";
import { PostBox } from "@/components/PostBox";
import { InputBox } from "@/components/InputBox";
import styles from "@/components/BestPost.module.css";
import SearchImg from "next/image";
import { NavLink } from "@/components/Header";
import { useEffect, useState } from "react";
import { FreeboardGet } from "./api";

export default function List() {
  const [data, setData] = useState([]);
  const [bestData, setBestData] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  // const sortedPosts = [...data].sort((a, b) => {
  //   if (sortBy === "latest") {
  //     return new Date(b.createdAt) - new Date(a.createdAt);
  //   } else if (sortBy === "like") {
  //     return b.like - a.like;
  //   }
  //   return 0;
  // });

  const handleSortChange = (event) => {
    setSortBy(event.target.value); // 선택된 value 값을 가져옴
  };

  useEffect(() => {
    FreeboardGet({ orderBy: sortBy }).then((res) => {
      console.log(res);
      setData(res.data.data);
      setBestData(res.data.bestdata);
    });

    console.log("orderBy", sortBy);
  }, [sortBy]);
  // function inputSearch(e) {
  //   const value = e.target.value;
  //   setSearch(value);
  // }
  return (
    <>
      <div className={styles.Best_container}>
        <h2 className={styles.title}>베스트 게시글</h2>
        <div className={styles.box_container}>
          {
            // [...sortedPosts]
            // .sort((a, b) => b.like - a.like) // 인기순으로 정렬
            // .slice(0, 3)
            bestData.map((value, index) => {
              // console.log(value);
              return (
                <BestPost
                  key={value.id}
                  title={value.title}
                  userid={value.user.userid}
                  createdAt={value.createdAt}
                  like={value.like}
                />
              );
            })
          }

          {/* <BestPost />
          <BestPost />
          <BestPost /> */}
        </div>
      </div>
      <div className={styles.top_inner}>
        <h2 className={styles.title}>게시글</h2>
        <NavLink href="/freeboard/Registration">
          <button className={styles.blue_bt}>글쓰기</button>
        </NavLink>
      </div>
      <div className={styles.right_box}>
        <div className={styles.input_containers}>
          <a href="#">
            <SearchImg
              src="/img/search.png"
              alt="search Image"
              width={15}
              height={15}
            />
            {/* <img src={SearchImg} onClick={handleInputSearch} /> */}
          </a>
          <InputBox content={"검색할 상품을 입력해주세요"} height={42} />
          {/* <input
            type="text"
            placeholder={"검색할 상품을 입력해주세요"}
            // onChange={inputSearch}
          /> */}
        </div>
        <select
          className={styles.default}
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="latest">최신순</option>
          <option value="like">인기순</option>
        </select>
      </div>
      <div className={styles.post_box_inner}>
        {data.map((value, index) => {
          // console.log(value);
          return (
            <PostBox
              key={value.id}
              boardid={value.id}
              title={value.title}
              userid={value.user.userid}
              createdAt={value.createdAt}
              like={value.like}
            />
          );
        })}
      </div>
    </>
  );
}
