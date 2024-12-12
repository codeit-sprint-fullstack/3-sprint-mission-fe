import { useState, useEffect } from "react";
import PostListAll from "./PostListAll";
import instance from "@/lib/axios";
import styles from "@/css/PostList.module.css";
import SearchInput from "./SearchInput";
import Dropdown from "./DropDown";

export default function PostList() {
    const [posts, setPosts] = useState([]);
    const [pageSize, setPageSize] = useState(6);
    const [keyword, setKeyword] = useState("");
    const [orderby, setOrderby] = useState("recent");

    useEffect(() => {
        instance.get(`/article/articleList?pageSize=${pageSize}&keyword=${keyword}&orderBy=${orderby}`)
            .then((response) => {
                setPosts(response.data.Articles);
            })
            .catch((error) => console.error(error));
    }, [pageSize, keyword, orderby]);

    const handleClick = () => {
        setPageSize(pageSize + 6);
    };

    return (
        <>
            <div className={styles.PostHeader}>
                <SearchInput setKeyword={setKeyword} />
                <Dropdown setOrderby={setOrderby} />
            </div>
            {posts.map((post) => (
                <PostListAll key={post.id} post={post} />
            ))}
            {posts.length >= pageSize && (
                <div
                    onClick={handleClick}
                    className={styles.PostListMore}>
                    더보기
                </div>
            )}
        </>
    );
}